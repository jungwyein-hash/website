"use client";

import { useEffect, useRef } from "react";

/* WebGL cloud wallpaper — ported from the user's Cloud standalone.
   Blue sky with drifting FBM clouds. Press-and-hold to apply an effect:
   first press creates clouds, next press erases — alternates per release.
   Scoped to this component's container so pointer events only fire
   while the cursor is inside the host. */

const VERT = `
attribute vec2 a_pos;
void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const COMMON = `
precision highp float;
uniform vec2  u_res;
uniform float u_time;
uniform vec2  u_mouse;
uniform vec2  u_mouseSmooth;
uniform float u_click;
uniform vec2  u_clickPos;
uniform float u_downHold;

const vec3 BLUE  = vec3(0.106, 0.612, 0.812);
const vec3 WHITE = vec3(1.0);

float hash21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float vnoise(vec2 p){
  vec2 i=floor(p), f=fract(p);
  float a=hash21(i), b=hash21(i+vec2(1,0)), c=hash21(i+vec2(0,1)), d=hash21(i+vec2(1,1));
  vec2 u=f*f*(3.0-2.0*f);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}
float fbm(vec2 p){
  float v=0.0, a=0.5;
  for(int i=0;i<5;i++){ v+=a*vnoise(p); p*=2.02; a*=0.5; }
  return v;
}
`;

const FRAG_CLOUD =
  COMMON +
  `
uniform sampler2D u_erosion;
uniform vec2  u_windCenter;
uniform float u_windAmt;

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p  = (gl_FragCoord.xy - 0.5*u_res) / u_res.y;
  vec2 m  = (u_mouseSmooth*u_res - 0.5*u_res) / u_res.y;

  float dm = length(p - m);

  vec3 skyDeep  = BLUE * 0.85;
  vec3 skyLight = mix(BLUE, WHITE, 0.55);
  vec3 sky = mix(skyLight, skyDeep, smoothstep(-0.7, 0.8, p.y));

  vec2 q = p;
  q += (m - p) * exp(-6.0*dm) * 0.06;

  float t = u_time * 0.08;
  float cloud = 0.0;
  cloud += fbm(q*1.4  + vec2( t*1.0, -t*0.4)) * 0.60;
  cloud += fbm(q*2.8  + vec2(-t*0.6,  t*0.8)) * 0.30;
  cloud += fbm(q*5.5  + vec2( t*1.4, -t*0.2)) * 0.15;

  float density = smoothstep(0.42, 0.78, cloud);

  vec4 trail = texture2D(u_erosion, uv);
  float erosion = trail.r;
  float addMask = trail.g;
  float protection = trail.b;

  float bill1 = abs(fbm(q*3.2 + vec2(t*0.6, -t*0.3)) - 0.5) * 2.0;
  float bill2 = abs(fbm(q*6.5 + vec2(-t*0.4, t*0.25)) - 0.5) * 2.0;
  float puff = mix(bill1, bill2, 0.35);
  float addTex = 0.45 + 0.55 * puff;
  float addShaped = smoothstep(0.02, 0.75, addMask) * addTex;
  float k = 0.18;
  float h = clamp(0.5 + 0.5*(addShaped - density)/k, 0.0, 1.0);
  float softUnion = mix(density, addShaped, h) + k*h*(1.0-h);
  density = clamp(softUnion, 0.0, 1.0);

  float effectiveErosion = max(erosion - addMask * protection, 0.0);
  density *= (1.0 - effectiveErosion);

  vec3 cloudCol = WHITE;
  float shade = fbm(q*3.0 + vec2(t*0.4, -t*0.2));
  cloudCol = mix(cloudCol, mix(WHITE, BLUE, 0.18), (1.0 - shade)*0.35);
  float glow = smoothstep(0.3, 0.95, addMask);
  cloudCol = mix(cloudCol, WHITE * 1.12, glow * 0.7);

  float rim = smoothstep(0.25, 0.5, density) - smoothstep(0.5, 0.75, density);

  vec3 col = sky;
  col = mix(col, cloudCol, density);
  col = mix(col, WHITE, rim*0.25);

  col = mix(col, sky, u_downHold * erosion * 0.25);

  col *= 0.92 + 0.08*smoothstep(1.5, 0.2, length(p));

  gl_FragColor = vec4(col, 1.0);
}
`;

const FRAG_TRAIL = `
precision highp float;
uniform vec2  u_res;
uniform float u_time;
uniform vec2  u_mouse;
uniform float u_click;
uniform vec2  u_clickPos;
uniform vec2  u_windCenter;
uniform float u_windAmt;
uniform sampler2D u_prev;

float hash21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float vnoise(vec2 p){
  vec2 i=floor(p), f=fract(p);
  float a=hash21(i), b=hash21(i+vec2(1,0)), c=hash21(i+vec2(0,1)), d=hash21(i+vec2(1,1));
  vec2 u=f*f*(3.0-2.0*f);
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}
float fbm(vec2 p){
  float v=0.0, a=0.5;
  for(int i=0;i<4;i++){ v+=a*vnoise(p); p*=2.02; a*=0.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p  = (gl_FragCoord.xy - 0.5*u_res) / u_res.y;
  vec2 m  = (u_mouse*u_res - 0.5*u_res) / u_res.y;

  float prev = texture2D(u_prev, uv).r;

  float coreRadius = 0.14;
  float feather    = 0.22;

  float edgeNoise  = fbm(p*4.0  + u_time*0.08)           * 2.0 - 1.0;
  float edgeNoise2 = fbm(p*9.0  + vec2(3.3, -u_time*0.15)) * 2.0 - 1.0;
  float edgeNoise3 = fbm(p*18.0 + vec2(-7.1, u_time*0.2))  * 2.0 - 1.0;

  float d = length(p - m);
  float effD = d - edgeNoise*0.09 - edgeNoise2*0.045 - edgeNoise3*0.02;
  float stamp = smoothstep(coreRadius + feather, coreRadius, effD);

  float target = max(prev, stamp);
  float rate   = 0.08;
  float newVal = mix(prev, target, stamp * rate);

  vec2 aspect = vec2(u_res.y/u_res.x, 1.0);
  vec2 driftStep = vec2(0.00025, -0.00010) * aspect;
  vec4 prevT = texture2D(u_prev, uv - driftStep);
  float prevAdd = prevT.g;
  float prevProt = prevT.b;

  float newAdd  = prevAdd;
  float newProt = max(prevProt - 0.0033, 0.0);

  if(u_windAmt > 0.001){
    vec2 wc = (u_windCenter*u_res - 0.5*u_res)/u_res.y;
    float wd = length(p - wc) - edgeNoise*0.09 - edgeNoise2*0.045 - edgeNoise3*0.02;
    float innerR = 0.04;
    float outerR = 0.22;
    float addStamp = smoothstep(outerR, innerR, wd) * u_windAmt;
    newAdd  = min(newAdd + addStamp * 0.06, 1.0);
    newProt = max(newProt, addStamp);
    newVal = max(newVal - addStamp * 0.08, 0.0);
  }

  float bite = newVal * (1.0 - newProt);
  newAdd = max(newAdd - bite * 0.03, 0.0);

  gl_FragColor = vec4(newVal, newAdd, newProt, 1.0);
}
`;

interface Props {
  className?: string;
  /** If false, no press-to-create or press-to-erase — clouds just drift. */
  interactive?: boolean;
}

export default function CloudBackground({ className, interactive = true }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const gl = canvas.getContext("webgl", {
      antialias: true,
      premultipliedAlpha: false,
    });
    if (!gl) return;

    function compile(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(s));
        throw new Error("shader compile failed");
      }
      return s;
    }

    function linkProgram(vsrc: string, fsrc: string) {
      const vs = compile(gl!.VERTEX_SHADER, vsrc);
      const fs = compile(gl!.FRAGMENT_SHADER, fsrc);
      const p = gl!.createProgram()!;
      gl!.attachShader(p, vs);
      gl!.attachShader(p, fs);
      gl!.linkProgram(p);
      if (!gl!.getProgramParameter(p, gl!.LINK_STATUS)) {
        throw new Error(gl!.getProgramInfoLog(p) ?? "link failed");
      }
      return p;
    }

    const cloudProg = linkProgram(VERT, FRAG_CLOUD);
    const trailProg = linkProgram(VERT, FRAG_TRAIL);

    const cloudU = {
      u_res: gl.getUniformLocation(cloudProg, "u_res"),
      u_time: gl.getUniformLocation(cloudProg, "u_time"),
      u_mouse: gl.getUniformLocation(cloudProg, "u_mouse"),
      u_mouseSmooth: gl.getUniformLocation(cloudProg, "u_mouseSmooth"),
      u_click: gl.getUniformLocation(cloudProg, "u_click"),
      u_clickPos: gl.getUniformLocation(cloudProg, "u_clickPos"),
      u_downHold: gl.getUniformLocation(cloudProg, "u_downHold"),
      u_erosion: gl.getUniformLocation(cloudProg, "u_erosion"),
      u_windCenter: gl.getUniformLocation(cloudProg, "u_windCenter"),
      u_windAmt: gl.getUniformLocation(cloudProg, "u_windAmt"),
      a_pos: gl.getAttribLocation(cloudProg, "a_pos"),
    };
    const trailU = {
      u_res: gl.getUniformLocation(trailProg, "u_res"),
      u_time: gl.getUniformLocation(trailProg, "u_time"),
      u_mouse: gl.getUniformLocation(trailProg, "u_mouse"),
      u_click: gl.getUniformLocation(trailProg, "u_click"),
      u_clickPos: gl.getUniformLocation(trailProg, "u_clickPos"),
      u_windCenter: gl.getUniformLocation(trailProg, "u_windCenter"),
      u_windAmt: gl.getUniformLocation(trailProg, "u_windAmt"),
      u_prev: gl.getUniformLocation(trailProg, "u_prev"),
      a_pos: gl.getAttribLocation(trailProg, "a_pos"),
    };

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    interface Target {
      tex: WebGLTexture;
      fbo: WebGLFramebuffer;
    }
    function makeTarget(w: number, h: number): Target {
      const tex = gl!.createTexture()!;
      gl!.bindTexture(gl!.TEXTURE_2D, tex);
      gl!.texImage2D(
        gl!.TEXTURE_2D,
        0,
        gl!.RGBA,
        w,
        h,
        0,
        gl!.RGBA,
        gl!.UNSIGNED_BYTE,
        null
      );
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, gl!.LINEAR);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, gl!.LINEAR);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
      const fbo = gl!.createFramebuffer()!;
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, fbo);
      gl!.framebufferTexture2D(
        gl!.FRAMEBUFFER,
        gl!.COLOR_ATTACHMENT0,
        gl!.TEXTURE_2D,
        tex,
        0
      );
      gl!.clearColor(0, 0, 0, 1);
      gl!.clear(gl!.COLOR_BUFFER_BIT);
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, null);
      return { tex, fbo };
    }

    let erosionA: Target | null = null;
    let erosionB: Target | null = null;
    let erosionW = 0;
    let erosionH = 0;
    function ensureErosionTargets() {
      const w = Math.max(2, Math.floor(canvas!.width / 2));
      const h = Math.max(2, Math.floor(canvas!.height / 2));
      if (!erosionA || erosionW !== w || erosionH !== h) {
        if (erosionA) {
          gl!.deleteTexture(erosionA.tex);
          gl!.deleteFramebuffer(erosionA.fbo);
        }
        if (erosionB) {
          gl!.deleteTexture(erosionB.tex);
          gl!.deleteFramebuffer(erosionB.fbo);
        }
        erosionA = makeTarget(w, h);
        erosionB = makeTarget(w, h);
        erosionW = w;
        erosionH = h;
      }
    }

    const state = {
      mouse: { x: 0.5, y: 0.5 },
      smooth: { x: 0.5, y: 0.5 },
      clickPos: { x: 0.5, y: 0.5 },
      click: 0,
      clickStart: 0,
      down: 0,
      downTarget: 0,
      t0: performance.now(),
    };

    let hoverActive = false;
    let pressed = false;
    let activeMode: 0 | 1 | 2 = 0;
    let nextMode: 1 | 2 = 1;
    const cursorForNext = (n: 1 | 2) => (n === 1 ? "copy" : "crosshair");
    const updateCursor = () => {
      canvas!.style.cursor = cursorForNext(nextMode);
    };
    updateCursor();

    function toLocal(e: PointerEvent | MouseEvent) {
      const rect = host!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      return { x, y };
    }

    const onMove = (e: PointerEvent) => {
      hoverActive = true;
      const p = toLocal(e);
      state.mouse.x = p.x;
      state.mouse.y = p.y;
      if (activeMode === 2) {
        state.clickPos.x = p.x;
        state.clickPos.y = p.y;
      }
    };
    const onDown = (e: PointerEvent) => {
      pressed = true;
      activeMode = nextMode;
      const p = toLocal(e);
      state.mouse.x = p.x;
      state.mouse.y = p.y;
      state.clickPos.x = p.x;
      state.clickPos.y = p.y;
      try {
        host!.setPointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    };
    const onUp = () => {
      if (!pressed) return;
      pressed = false;
      activeMode = 0;
      nextMode = nextMode === 1 ? 2 : 1;
      updateCursor();
    };
    const onEnter = () => {
      hoverActive = true;
    };
    const onLeave = () => {
      hoverActive = false;
      if (pressed) {
        pressed = false;
        activeMode = 0;
      }
    };

    if (interactive) {
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerdown", onDown);
      host.addEventListener("pointerup", onUp);
      host.addEventListener("pointercancel", onUp);
      host.addEventListener("pointerenter", onEnter);
      host.addEventListener("pointerleave", onLeave);
    }

    function resize() {
      if (!host || !canvas) return;
      const rect = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(2, Math.floor(rect.width * dpr));
      const h = Math.max(2, Math.floor(rect.height * dpr));
      if (canvas.width !== w) canvas.width = w;
      if (canvas.height !== h) canvas.height = h;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      gl!.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    function runTrailPass(
      windCx: number,
      windCy: number,
      windAmt: number,
      erodeX: number,
      erodeY: number
    ) {
      ensureErosionTargets();
      if (!erosionA || !erosionB) return;
      gl!.useProgram(trailProg);
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, erosionB.fbo);
      gl!.viewport(0, 0, erosionW, erosionH);
      gl!.bindBuffer(gl!.ARRAY_BUFFER, buf);
      gl!.enableVertexAttribArray(trailU.a_pos);
      gl!.vertexAttribPointer(trailU.a_pos, 2, gl!.FLOAT, false, 0, 0);
      gl!.uniform2f(trailU.u_res, erosionW, erosionH);
      gl!.uniform1f(trailU.u_time, (performance.now() - state.t0) / 1000);
      gl!.uniform2f(trailU.u_mouse, erodeX, erodeY);
      gl!.uniform1f(trailU.u_click, state.click);
      gl!.uniform2f(trailU.u_clickPos, state.clickPos.x, state.clickPos.y);
      gl!.uniform2f(trailU.u_windCenter, windCx, windCy);
      gl!.uniform1f(trailU.u_windAmt, windAmt);
      gl!.activeTexture(gl!.TEXTURE0);
      gl!.bindTexture(gl!.TEXTURE_2D, erosionA.tex);
      gl!.uniform1i(trailU.u_prev, 0);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, null);
      const tmp = erosionA;
      erosionA = erosionB;
      erosionB = tmp;
    }

    let raf = 0;
    function frame() {
      const now = performance.now();
      const t = (now - state.t0) / 1000;

      state.smooth.x += (state.mouse.x - state.smooth.x) * 0.12;
      state.smooth.y += (state.mouse.y - state.smooth.y) * 0.12;

      const dt = (now - state.clickStart) / 1000;
      state.click = Math.max(0, 1 - dt / 1.6);
      state.downTarget = interactive && activeMode === 2 && hoverActive ? 1 : 0;
      state.down += (state.downTarget - state.down) * 0.15;

      const windCx = state.mouse.x;
      const windCy = state.mouse.y;
      const windAmt = interactive && activeMode === 1 && hoverActive ? 0.9 : 0;
      const erodeX = interactive && activeMode === 2 && hoverActive ? state.mouse.x : -10;
      const erodeY = interactive && activeMode === 2 && hoverActive ? state.mouse.y : -10;

      runTrailPass(windCx, windCy, windAmt, erodeX, erodeY);

      gl!.useProgram(cloudProg);
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      gl!.bindBuffer(gl!.ARRAY_BUFFER, buf);
      gl!.enableVertexAttribArray(cloudU.a_pos);
      gl!.vertexAttribPointer(cloudU.a_pos, 2, gl!.FLOAT, false, 0, 0);
      gl!.uniform2f(cloudU.u_res, canvas!.width, canvas!.height);
      gl!.uniform1f(cloudU.u_time, t);
      const cursorActive = interactive && activeMode > 0 && hoverActive;
      const uMouseX = cursorActive ? state.mouse.x : -10;
      const uMouseY = cursorActive ? state.mouse.y : -10;
      const uSmoothX = cursorActive ? state.smooth.x : -10;
      const uSmoothY = cursorActive ? state.smooth.y : -10;
      gl!.uniform2f(cloudU.u_mouse, uMouseX, uMouseY);
      gl!.uniform2f(cloudU.u_mouseSmooth, uSmoothX, uSmoothY);
      gl!.uniform1f(cloudU.u_click, state.click);
      gl!.uniform2f(cloudU.u_clickPos, state.clickPos.x, state.clickPos.y);
      gl!.uniform1f(cloudU.u_downHold, state.down);
      gl!.uniform2f(cloudU.u_windCenter, windCx, windCy);
      gl!.uniform1f(cloudU.u_windAmt, windAmt);
      gl!.activeTexture(gl!.TEXTURE0);
      if (erosionA) gl!.bindTexture(gl!.TEXTURE_2D, erosionA.tex);
      gl!.uniform1i(cloudU.u_erosion, 0);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (interactive) {
        host.removeEventListener("pointermove", onMove);
        host.removeEventListener("pointerdown", onDown);
        host.removeEventListener("pointerup", onUp);
        host.removeEventListener("pointercancel", onUp);
        host.removeEventListener("pointerenter", onEnter);
        host.removeEventListener("pointerleave", onLeave);
      }
      if (erosionA) {
        gl.deleteTexture(erosionA.tex);
        gl.deleteFramebuffer(erosionA.fbo);
      }
      if (erosionB) {
        gl.deleteTexture(erosionB.tex);
        gl.deleteFramebuffer(erosionB.fbo);
      }
      if (buf) gl.deleteBuffer(buf);
      gl.deleteProgram(cloudProg);
      gl.deleteProgram(trailProg);
    };
  }, [interactive]);

  return (
    <div
      ref={hostRef}
      className={className}
      aria-hidden
      style={{ position: "absolute", inset: 0 }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          cursor: "default",
          pointerEvents: interactive ? "auto" : "none",
        }}
      />
    </div>
  );
}
