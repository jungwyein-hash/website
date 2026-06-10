"use client";

import { useEffect, useRef, useState } from "react";

export type Bar = {
  label: string;
  value: number;
  /** 막대 위에 표시할 값 텍스트 — "2,400톤" 등 */
  display: string;
  /** 강조 막대 (spring-blue) — 목표·현재 등 */
  highlight?: boolean;
};

/**
 * Apple/Tesla식 미니멀 막대그래프 — 외부 라이브러리 없이 CSS로.
 * 축·그리드 없이 값 라벨만. 뷰포트 진입 시 막대가 자라난다.
 */
export default function BarChart({
  bars,
  max,
  heightClass = "h-[260px] md:h-[320px]",
}: {
  bars: Bar[];
  max?: number;
  heightClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [grown, setGrown] = useState(false);
  const top = max ?? Math.max(...bars.map((b) => b.value));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGrown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setGrown(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-end gap-3 md:gap-6 ${heightClass}`}
      role="img"
      aria-label={bars.map((b) => `${b.label} ${b.display}`).join(", ")}
    >
      {bars.map((b, i) => (
        <div key={b.label} className="flex h-full flex-1 flex-col justify-end">
          <p
            className={`mb-2 text-center font-tech text-[13px] md:text-[15px] font-semibold ${
              b.highlight ? "text-spring-blue" : "text-soil-brown"
            }`}
          >
            {b.display}
          </p>
          <div
            className={`w-full rounded-t-[6px] ${
              b.highlight ? "bg-spring-blue" : "bg-ink-invert/[0.12]"
            }`}
            style={{
              // 라벨 영역(~22%)을 제외한 높이로 스케일 — 모든 막대 동일 배율이라 비율 유지
              height: grown ? `${(b.value / top) * 78}%` : "0%",
              transition: `height 900ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 90}ms`,
            }}
          />
          <p className="mt-3 text-center text-[12px] text-soil-brown-mute">
            {b.label}
          </p>
        </div>
      ))}
    </div>
  );
}
