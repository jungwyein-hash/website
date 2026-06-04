"use client";

import { useEffect, useRef } from "react";

export default function HeroVideoBg({
  src,
  poster,
}: {
  src: string;
  poster?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => {});

    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) tryPlay();
          else if (!v.paused) v.pause();
        }
      },
      { threshold: 0.05 }
    );
    io.observe(v);

    // autoplay 차단 폴백 — 첫 사용자 인터랙션에서 재생
    const onInteract = () => tryPlay();
    document.addEventListener("pointerdown", onInteract, { passive: true, once: true });
    document.addEventListener("keydown", onInteract, { once: true });
    document.addEventListener("touchstart", onInteract, { passive: true, once: true });

    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      io.disconnect();
      document.removeEventListener("pointerdown", onInteract);
      document.removeEventListener("keydown", onInteract);
      document.removeEventListener("touchstart", onInteract);
    };
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
