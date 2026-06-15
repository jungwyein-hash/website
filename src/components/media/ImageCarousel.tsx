"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type CarouselSlide = {
  /** 이미 풀어둔 이미지 URL (서버에서 r2Url로 변환해 전달) */
  src: string;
  alt: string;
};

/**
 * 풀폭 단일 이미지 슬라이딩 캐러셀 — 스냅 스크롤 + 화살표 + 도트.
 * 뷰포트 안에서 자동 슬라이드, 호버·모션민감 시 정지.
 */
export default function ImageCarousel({
  slides,
  priority = false,
  intervalMs = 5000,
}: {
  slides: CarouselSlide[];
  priority?: boolean;
  intervalMs?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const total = slides.length;

  // 활성 슬라이드 추적
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio > 0.6) {
            const i = items.indexOf(e.target as HTMLElement);
            if (i >= 0) setActive(i);
          }
        }
      },
      { root: el, threshold: [0.6] }
    );
    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, [total]);

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    const slide = el?.children[i] as HTMLElement | undefined;
    if (!el || !slide) return;
    el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setActive(i);
  };

  // 자동 슬라이드
  useEffect(() => {
    if (total <= 1 || hovering) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      const el = scrollerRef.current;
      if (!el) return;
      const next = (active + 1) % total;
      const slide = el.children[next] as HTMLElement | undefined;
      if (slide) el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    }, intervalMs);
    return () => clearInterval(id);
  }, [active, total, hovering, intervalMs]);

  if (total === 0) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto no-scrollbar lg:gap-6"
          aria-roledescription="carousel"
        >
          {slides.map((s, i) => (
            <figure
              key={s.src}
              className="relative aspect-[4/3] w-[86%] flex-shrink-0 snap-start overflow-hidden rounded-[10px] bg-line md:w-[56%] lg:w-[54%]"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${total}`}
            >
              {s.src && (
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  priority={priority && i === 0}
                  sizes="(min-width: 768px) 50vw, 86vw"
                  className="object-cover"
                />
              )}
            </figure>
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo((active - 1 + total) % total)}
              aria-label="이전 사진"
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[18px] text-ink-invert shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur transition-colors hover:bg-white"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo((active + 1) % total)}
              aria-label="다음 사진"
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[18px] text-ink-invert shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur transition-colors hover:bg-white"
            >
              →
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${i + 1}번 사진으로 이동`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-ink-invert"
                  : "w-2 bg-ink-invert/25 hover:bg-ink-invert/45"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
