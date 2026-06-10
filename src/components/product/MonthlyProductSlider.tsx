"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { diastar } from "@/content/products/po-film/diastar";
import { misanranDiastar } from "@/content/products/po-film/misanran-diastar";
import type { BigSpec } from "@/lib/types";

type Slide = {
  name: string;
  headline: string;
  quote: string;
  /** 인용 출처 — 우측 작은 고운바탕체 */
  source: string;
  heroAlt: string;
  bigSpecs: BigSpec[];
  href: string;
};

const SLIDES: Slide[] = [
  {
    name: diastar.name.ko,
    headline: "타협 없는 탁월함.",
    quote:
      "밭에 맞는 필름을 쓰니 초물 수확이 빨라지고, 추운 겨울에도 보온성이 좋아 착과가 안정적이었습니다.",
    source: "김상규 새미우수농가 (성주 참외 1호 마이스터)",
    heroAlt: "이달의 제품 다이아스타가 설치된 농업 시설",
    bigSpecs: diastar.bigSpecs.map((sp) =>
      sp.label === "내구" ? { ...sp, label: "경제수명" } : sp,
    ),
    href: "/po-film/premium/diastar",
  },
  {
    name: misanranDiastar.name.ko,
    headline: "빛이 더 깊이 듭니다.",
    quote: "그늘이 줄어들고, 작물의 매일이 한층 고르게 흐릅니다.",
    source: "최재일 새미우수농가 (경기 하남 잎채소농가)",
    heroAlt: "이달의 제품 미산란 다이아스타가 시공된 하우스",
    bigSpecs: misanranDiastar.bigSpecs.map((sp) => {
      if (sp.label === "내구") return { ...sp, label: "경제수명" };
      if (sp.label === "결")
        return { label: "원산지", value: "Japan", unit: "" };
      return sp;
    }),
    href: "/po-film/premium/misanran-diastar",
  },
];

function HeroImage({
  url,
  alt,
  sizes,
}: {
  url: string;
  alt: string;
  sizes: string;
}) {
  if (!url) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 flex items-center justify-center bg-line text-xs text-soil-brown-mute"
      >
        {alt}
      </div>
    );
  }
  return (
    <Image src={url} alt={alt} fill sizes={sizes} className="object-cover" />
  );
}

export default function MonthlyProductSlider({
  heroUrls,
}: {
  /** SLIDES 순서에 맞춰 서버(page.tsx)에서 r2Url로 풀어 전달 */
  heroUrls: string[];
}) {
  const [index, setIndex] = useState(0);
  const count = SLIDES.length;
  const isLast = index === count - 1;
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <section className="relative overflow-hidden bg-paper-warm">
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {SLIDES.map((s, i) => (
          <div key={s.name} className="relative w-full shrink-0">
            {/* 데스크탑 전용: 섹션 우측을 가득 채우는 풀블리드 이미지 */}
            <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
              <HeroImage url={heroUrls[i]} alt={s.heroAlt} sizes="50vw" />
            </div>
            <div className="relative mx-auto max-w-[1600px] px-6 py-24 md:py-32 lg:px-10 lg:py-36">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <p className="font-tech text-[12px] font-semibold text-spring-blue">
                      이달의 제품
                    </p>
                    <span className="flex items-center gap-1.5">
                      {SLIDES.map((sl, di) => (
                        <button
                          key={sl.name}
                          type="button"
                          onClick={() => setIndex(di)}
                          aria-label={`${di + 1}번째 슬라이드로 이동`}
                          aria-current={di === index}
                          className={`h-2 rounded-full transition-all ${
                            di === index
                              ? "w-5 bg-spring-blue"
                              : "w-2 bg-ink-invert/25"
                          }`}
                        />
                      ))}
                    </span>
                  </div>
                  <p className="font-premium mt-4 text-[22px] font-bold text-soil-brown">
                    {s.name}
                  </p>
                  <h2 className="font-premium mt-2 text-[36px] md:text-[52px] xl:text-[64px] font-bold leading-[1.12] text-soil-brown text-balance">
                    {s.headline}
                  </h2>
                  <p className="font-farm-quote mt-7 text-[24px] leading-relaxed text-soil-brown">
                    “{s.quote}”
                  </p>
                  <p className="font-farm-quote mt-3 text-right text-[14px] text-soil-brown-mute">
                    — {s.source}
                  </p>
                  <Link
                    href={s.href}
                    className="mt-10 apple-button apple-button-primary"
                  >
                    {s.name} 보기
                  </Link>
                  {s.bigSpecs.length > 0 && (
                    <dl className="mt-12 grid grid-cols-3 divide-x divide-line border-y border-line">
                      {s.bigSpecs.map((sp) => (
                        <div key={sp.label} className="px-5 py-6 first:pl-0">
                          <dd className="font-tech text-[28px] md:text-[34px] font-semibold leading-none text-ink-invert">
                            {sp.value}
                            {sp.unit && (
                              <span className="ml-1 text-[14px] font-medium text-soil-brown-soft">
                                {sp.unit}
                              </span>
                            )}
                          </dd>
                          <dt className="mt-3 text-[12px] font-semibold leading-tight text-soil-brown-mute">
                            {sp.label}
                          </dt>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
                {/* 모바일·타블렛: 기존 박스 이미지 */}
                <div className="lg:hidden">
                  <div className="overflow-hidden rounded-[8px] bg-white shadow-[var(--shadow-card)]">
                    <div className="relative aspect-[16/11]">
                      <HeroImage
                        url={heroUrls[i]}
                        alt={s.heroAlt}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 다음 제품 화살표 */}
      <button
        type="button"
        onClick={next}
        aria-label={isLast ? "처음 제품으로 돌아가기" : "다음 이달의 제품 보기"}
        className="absolute right-5 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/70 text-ink-invert shadow-[var(--shadow-card)] backdrop-blur-md transition-colors hover:bg-white lg:right-8"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {isLast ? (
            <>
              <path d="M6 6v12" />
              <path d="M16 6l-6 6 6 6" />
            </>
          ) : (
            <path d="M9 6l6 6-6 6" />
          )}
        </svg>
      </button>

    </section>
  );
}
