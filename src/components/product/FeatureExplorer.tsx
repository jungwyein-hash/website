"use client";

import Image from "next/image";
import { useState } from "react";

export type ExplorerFeature = {
  title: string;
  body: string;
  /** 이미 절대 URL로 해석된 이미지 (서버에서 r2Url 처리) */
  image: string;
  alt: string;
};

/**
 * Apple iPhone 17 Pro 스타일 특징 탐색기.
 * 좌측: 특징 제목 리스트(선택 시 박스 확장 + 설명), 상하 화살표 이동.
 * 우측: 선택된 특징의 대표 이미지(크로스페이드).
 */
export default function FeatureExplorer({
  features,
}: {
  features: ExplorerFeature[];
}) {
  const [active, setActive] = useState(0);
  const n = features.length;
  if (n === 0) return null;

  const go = (next: number) => setActive(Math.max(0, Math.min(n - 1, next)));
  const atFirst = active === 0;
  const atLast = active === n - 1;
  const arrowBase =
    "grid h-10 w-10 place-items-center rounded-full transition active:scale-95";
  const arrowOn =
    "bg-black/[0.05] text-soil-brown hover:bg-black/10 hover:text-ink-invert";
  const arrowOff = "bg-black/[0.03] text-ink-invert/20 cursor-not-allowed";

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
      {/* 우측 이미지 — 모바일은 비율, 데스크톱은 좌측 목록 높이에 맞춤 */}
      <div className="relative order-1 aspect-[4/5] w-full overflow-hidden bg-line lg:order-2 lg:aspect-auto lg:h-full">
        {features.map((f, i) => (
          <Image
            key={f.image + i}
            src={f.image}
            alt={f.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className={`object-cover transition-opacity duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* 좌측 특징 리스트 */}
      <div className="order-2 flex items-center gap-4 lg:order-1">
        {/* 상하 이동 화살표 — 목록 세로 중앙 고정, 양 끝에서 비활성 */}
        <div className="flex shrink-0 flex-col gap-2">
          <button
            type="button"
            aria-label="이전 특징"
            onClick={() => go(active - 1)}
            disabled={atFirst}
            className={`${arrowBase} ${atFirst ? arrowOff : arrowOn}`}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
              <path d="M5 14l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="다음 특징"
            onClick={() => go(active + 1)}
            disabled={atLast}
            className={`${arrowBase} ${atLast ? arrowOff : arrowOn}`}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
              <path d="M5 8l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-1 flex-col gap-3">
          {features.map((f, i) => {
            const isActive = i === active;
            return (
              <li key={f.title}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={isActive}
                  className={`w-full px-5 py-4 text-left transition-colors duration-200 ${
                    isActive
                      ? "bg-white shadow-subtle"
                      : "bg-black/[0.04] hover:bg-black/[0.07]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full transition-colors ${
                        isActive
                          ? "bg-spring-blue text-white"
                          : "border border-ink-invert/25 text-soil-brown-mute"
                      }`}
                    >
                      {isActive ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      ) : (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                          <path
                            d="M5 1v8M1 5h8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-[18px] font-semibold text-ink-invert md:text-[20px]">
                      {f.title}
                    </span>
                  </div>
                  <div
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden pl-9 text-[15px] leading-relaxed text-soil-brown-soft md:text-[16px]">
                      {f.body}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
