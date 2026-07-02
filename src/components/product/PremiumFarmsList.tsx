"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type FarmEntry = {
  slug: string;
  farmer: string;
  crop: string;
  region: string;
  product: string;
  round?: string;
  note?: string;
  portrait: { url: string; alt: string };
  photos: { url: string; alt: string }[];
};

function FarmPhotoStrip({ photos }: { photos: FarmEntry["photos"] }) {
  const ref = useRef<HTMLDivElement>(null);
  if (photos.length === 0) return null;
  const by = (dir: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };
  return (
    <div className="relative mt-8">
      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto no-scrollbar snap-x lg:gap-4"
      >
        {photos.map((p, i) => (
          <div
            key={`${p.url}-${i}`}
            className="relative aspect-[3/2] w-[44%] shrink-0 snap-start overflow-hidden bg-paper-soft sm:w-[30%] lg:w-[496px]"
          >
            <Image
              src={p.url}
              alt={p.alt}
              fill
              sizes="(min-width: 1024px) 23vw, (min-width: 640px) 30vw, 44vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {photos.length > 3 && (
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            aria-label="이전 사진"
            onClick={() => by(-1)}
            className="grid h-9 w-9 place-items-center rounded-full bg-black/[0.05] text-soil-brown transition hover:bg-black/10 active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden>
              <path d="M14 5l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="다음 사진"
            onClick={() => by(1)}
            className="grid h-9 w-9 place-items-center rounded-full bg-black/[0.05] text-soil-brown transition hover:bg-black/10 active:scale-95"
          >
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden>
              <path d="M8 5l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default function PremiumFarmsList({ farms }: { farms: FarmEntry[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.idx);
            if (!Number.isNaN(i)) setActive(i);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [farms.length]);

  const go = (i: number) =>
    refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });

  if (farms.length === 0) return null;

  return (
    <div className="grid gap-10 lg:grid-cols-[180px_1fr] lg:gap-16">
      {/* 좌측 스크롤 위치 인디케이터 — 사례 순서 */}
      <nav aria-label="사례 목록" className="hidden lg:block">
        <ol className="sticky top-32 space-y-1">
          {farms.map((f, i) => {
            const on = i === active;
            return (
              <li key={f.slug}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-current={on ? "true" : undefined}
                  className="flex w-full items-center gap-3 py-1.5 text-left"
                >
                  <span
                    aria-hidden
                    className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${
                      on ? "scale-125 bg-spring-blue" : "bg-line"
                    }`}
                  />
                  <span
                    className={`truncate text-[13px] transition-colors ${
                      on
                        ? "font-semibold text-soil-brown"
                        : "text-soil-brown-mute"
                    }`}
                  >
                    {f.farmer}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* 우측 사례 리스트 */}
      <div className="flex flex-col">
        {farms.map((f, i) => (
          <article
            key={f.slug}
            data-idx={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className="scroll-mt-32 border-t border-line pt-12 first:border-0 first:pt-0 [&:not(:first-child)]:mt-12 lg:[&:not(:first-child)]:mt-16 lg:pt-16"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
              <div className="w-full shrink-0 bg-white p-3 shadow-card sm:w-[336px]">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-soft">
                  <Image
                    src={f.portrait.url}
                    alt={f.portrait.alt}
                    fill
                    sizes="(min-width: 640px) 352px, 100vw"
                    className="object-cover"
                  />
                  {f.round && (
                    <span className="font-tech absolute left-3 top-3 bg-white/92 px-3 py-1 text-[12px] font-semibold text-soil-brown">
                      {f.round}
                    </span>
                  )}
                </div>
                <Link
                  href="/best-farms"
                  className="mt-3 flex items-center justify-center gap-1.5 py-1 text-[13px] font-semibold text-spring-blue transition-colors hover:text-spring-blue-deep"
                >
                  사례 자세히 보기
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="min-w-0 flex-1 sm:pt-3">
                <h3 className="text-[24px] md:text-[28px] font-semibold tracking-display text-soil-brown">
                  {f.farmer}
                </h3>
                <p className="font-tech mt-2 text-[14px] text-soil-brown-mute">
                  {[f.crop, f.region, f.product].filter(Boolean).join(" · ")}
                </p>
                {f.note && (
                  <p className="font-premium mt-5 max-w-[48ch] text-[20px] md:text-[22px] leading-relaxed text-soil-brown">
                    {`“${f.note}”`}
                  </p>
                )}
              </div>
            </div>
            <FarmPhotoStrip photos={f.photos} />
          </article>
        ))}
      </div>
    </div>
  );
}
