"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type FarmCard = {
  slug: string;
  farmer: string;
  region: string;
  crop: string;
  product?: string;
  note?: string;
  round?: string;
  imageTransform?: { zoom?: number; dx?: number; dy?: number };
  hero: { url: string; alt: string };
};

export default function PremiumFarmsCarousel({ farms }: { farms: FarmCard[] }) {
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
  }, [farms.length]);

  if (farms.length === 0) return null;

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.children[i] as HTMLElement | undefined;
    if (!slide) return;
    el.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setActive(i);
  };

  const total = farms.length;
  const showControls = total > 3;

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto no-scrollbar lg:gap-6"
        aria-roledescription={showControls ? "carousel" : undefined}
      >
        {farms.map((f, i) => (
          <article
            key={f.slug}
            className="surface-panel w-[80%] flex-shrink-0 snap-start overflow-hidden bg-white p-4 md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/3)] lg:p-5"
            aria-roledescription={showControls ? "slide" : undefined}
            aria-label={showControls ? `${i + 1} / ${total}` : undefined}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-paper-soft">
              {f.round && (
                <span className="font-tech absolute left-3 top-3 z-10 inline-block rounded-full bg-white/92 px-3 py-1 text-[12px] font-semibold text-soil-brown">
                  {f.round}
                </span>
              )}
              {f.hero.url && (
                <Image
                  src={f.hero.url}
                  alt={f.hero.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 80vw"
                  className="object-cover transition-transform duration-500"
                  style={{
                    transform: `scale(${f.imageTransform?.zoom ?? 1}) translate(${f.imageTransform?.dx ?? 0}px, ${f.imageTransform?.dy ?? 0}px)`,
                  }}
                />
              )}
            </div>
            <div className="px-2 pb-2 pt-6">
              <h3 className="font-farm-quote text-center text-[24px] lg:text-[28px] font-bold text-soil-brown">
                {f.farmer}
              </h3>
              <p className="mt-2 text-center text-[12px] text-soil-brown-mute">
                {[f.crop, f.region, f.product].filter(Boolean).join(" · ")}
              </p>
              {f.note && (
                <p className="font-farm-quote mx-auto mt-5 max-w-[28ch] text-center text-[16px] leading-relaxed text-soil-brown-soft">
                  “{f.note}”
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      {showControls && (
        <div className="mt-6 flex items-center justify-between">
          <span className="font-tech text-[12px] font-semibold text-soil-brown-mute">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(Math.max(0, active - 1))}
              disabled={active === 0}
              aria-label="이전 농가"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink-invert transition-colors hover:border-spring-blue disabled:cursor-not-allowed disabled:opacity-30"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goTo(Math.min(total - 1, active + 1))}
              disabled={active === total - 1}
              aria-label="다음 농가"
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
