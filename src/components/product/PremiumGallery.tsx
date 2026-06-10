"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type GallerySlide = {
  url: string;
  alt: string;
  caption?: string;
};

export default function PremiumGallery({ slides }: { slides: GallerySlide[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    const visible = new Set<number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const i = items.indexOf(e.target as HTMLElement);
          if (i < 0) continue;
          if (e.isIntersecting && e.intersectionRatio > 0.5) visible.add(i);
          else visible.delete(i);
        }
        if (visible.size > 0) setActive(Math.min(...visible));
      },
      { root: el, threshold: [0.5] }
    );
    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, [slides.length]);

  if (slides.length === 0) return null;

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.children[i] as HTMLElement | undefined;
    if (!slide) return;
    el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setActive(i);
  };

  const total = slides.length;
  const single = total === 1;

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto no-scrollbar lg:gap-6"
        aria-roledescription={single ? undefined : "carousel"}
      >
        {slides.map((s, i) => (
          <figure
            key={`${s.url}-${i}`}
            className="relative w-[80%] flex-shrink-0 snap-start md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            aria-roledescription={single ? undefined : "slide"}
            aria-label={single ? undefined : `${i + 1} / ${total}`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[8px] bg-paper-soft lg:aspect-square">
              {s.url ? (
                <Image
                  src={s.url}
                  alt={s.alt}
                  fill
                  preload={i === 0}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 80vw"
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
        <div className="mt-5 flex items-center justify-between">
          <span className="font-tech text-[12px] font-semibold text-soil-brown-mute">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(Math.max(0, active - 1))}
              disabled={active === 0}
              aria-label="이전 사진"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink-invert transition-colors hover:border-spring-blue disabled:cursor-not-allowed disabled:opacity-30"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(Math.min(total - 1, active + 1))}
              disabled={active === total - 1}
              aria-label="다음 사진"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink-invert transition-colors hover:border-spring-blue disabled:cursor-not-allowed disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
