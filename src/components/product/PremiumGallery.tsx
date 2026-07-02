"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type GallerySlide = {
  url: string;
  alt: string;
  caption?: string;
  year?: string;
  region?: string;
};

export default function PremiumGallery({
  slides,
  bleed = false,
}: {
  slides: GallerySlide[];
  /** 우측 풀블리드 — 첫 카드는 max-w 컨테이너 좌측 인셋에서 시작, 우측은 화면 끝까지 */
  bleed?: boolean;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const items = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestD = Infinity;
      items.forEach((it, i) => {
        const c = it.offsetLeft + it.offsetWidth / 2;
        const d = Math.abs(c - center);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [slides.length]);

  if (slides.length === 0) return null;

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.children[i] as HTMLElement | undefined;
    if (!slide) return;
    // 카드를 뷰포트 정중앙에 — 단 첫 카드는 0으로 클램프되어 좌측 인셋 유지
    const left = slide.offsetLeft - (el.clientWidth - slide.clientWidth) / 2;
    el.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    // active는 스크롤 핸들러(중앙 최근접)가 단조롭게 갱신 — 여기서 즉시 올리면 숫자가 튐
  };

  const total = slides.length;
  const single = total === 1;

  // 제품 특징(FeatureExplorer) 화살표와 동일한 디자인
  const arrowBase =
    "grid h-10 w-10 place-items-center rounded-full transition active:scale-95";
  const arrowOn =
    "bg-black/[0.05] text-soil-brown hover:bg-black/10 hover:text-ink-invert";
  const arrowOff = "bg-black/[0.03] text-ink-invert/20 cursor-not-allowed";

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className={`flex gap-4 overflow-x-auto no-scrollbar lg:gap-6 ${
          bleed
            ? "pl-[max(1.5rem,calc((100%-1440px)/2))] lg:pl-[max(2.5rem,calc((100%-1440px)/2))]"
            : ""
        }`}
        aria-roledescription={single ? undefined : "carousel"}
      >
        {slides.map((s, i) => (
          <figure
            key={`${s.url}-${i}`}
            className="relative w-[86%] flex-shrink-0 md:w-[78%] lg:w-[72%]"
            aria-roledescription={single ? undefined : "slide"}
            aria-label={single ? undefined : `${i + 1} / ${total}`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-soft lg:aspect-[16/9]">
              {s.url ? (
                <Image
                  src={s.url}
                  alt={s.alt}
                  fill
                  preload={i === 0}
                  sizes="(min-width: 1024px) 72vw, (min-width: 768px) 78vw, 86vw"
                  className="object-cover"
                />
              ) : (
                <div
                  role="img"
                  aria-label={s.alt}
                  className="absolute inset-0 flex items-center justify-center text-[12px] text-soil-brown-mute"
                >
                  {s.alt}
                </div>
              )}
              {/* 중앙 크레딧 워터마크 */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center justify-end gap-0.5 px-4 pb-5 text-center text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
                {(s.year || s.region) && (
                  <span className="text-[12px] font-medium text-white/90">
                    {[s.year, s.region].filter(Boolean).join(", ")}
                  </span>
                )}
                <span className="text-[12px] font-semibold">
                  © SAEMI Group
                </span>
              </div>
            </div>
            {s.caption && (
              <figcaption className="mt-3 text-[12px] leading-relaxed text-soil-brown-mute">
                {s.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {!single && (
        <div
          className={`mt-5 flex items-center justify-between ${
            bleed
              ? "px-[max(1.5rem,calc((100%-1440px)/2))] lg:px-[max(2.5rem,calc((100%-1440px)/2))]"
              : ""
          }`}
        >
          <span className="font-tech text-[12px] font-semibold text-soil-brown-mute">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(Math.max(0, active - 1))}
              disabled={active === 0}
              aria-label="이전 사진"
              className={`${arrowBase} ${active === 0 ? arrowOff : arrowOn}`}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path d="M14 5l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(Math.min(total - 1, active + 1))}
              disabled={active === total - 1}
              aria-label="다음 사진"
              className={`${arrowBase} ${active === total - 1 ? arrowOff : arrowOn}`}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                <path d="M8 5l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
