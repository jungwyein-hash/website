"use client";

import { useEffect, useRef, useState } from "react";

export type Stat = {
  /** 최종 값 (숫자만) */
  value: number;
  /** 단위·접미사 — "위", "+", "톤", "%" 등 */
  suffix?: string;
  label: string;
  /** 카운트 시작값 (기본 0) — "3위 → 1위" 연출용 */
  startFrom?: number;
  /** 강조 색 (spring-blue) */
  highlight?: boolean;
};

const DURATION = 1400;
const EASE_OUT = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Apple식 가로 빅스펙 스트립 + 카운트업.
 * 뷰포트 진입 시 1회 카운트업, prefers-reduced-motion이면 즉시 최종값.
 */
export default function StatStrip({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0~1

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - t0) / DURATION);
          setProgress(EASE_OUT(t));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0"
    >
      {stats.map((s, i) => {
        const start = s.startFrom ?? 0;
        const current = Math.round(start + (s.value - start) * progress);
        return (
          <div
            key={s.label}
            className={`text-center ${i > 0 ? "md:border-l md:border-line" : ""}`}
          >
            <p
              className={`font-tech text-[44px] md:text-[56px] font-semibold leading-none tracking-display ${
                s.highlight ? "text-spring-blue" : "text-ink-invert"
              }`}
            >
              {current.toLocaleString()}
              {s.suffix && (
                <span className="ml-1 text-[22px] md:text-[26px] align-baseline">
                  {s.suffix}
                </span>
              )}
            </p>
            <p className="mt-3 text-[13px] text-soil-brown-mute">{s.label}</p>
          </div>
        );
      })}
    </div>
  );
}
