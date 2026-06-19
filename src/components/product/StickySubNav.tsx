"use client";

import Link from "next/link";

export type SubNavItem = { id: string; label: string };

export default function StickySubNav({
  items,
  productName,
  variant = "default",
  className = "",
  catalogHref,
}: {
  items: SubNavItem[];
  productName: string;
  variant?: "default" | "premium";
  /** 부모 레이아웃(예: flex gap-3) 간격 상쇄용 추가 클래스 */
  className?: string;
  /** 있으면 견적 문의 왼쪽에 카탈로그 버튼 노출 */
  catalogHref?: string;
}) {
  const isPremium = variant === "premium";

  return (
    <div
      className={`sticky top-14 z-30 border-y backdrop-blur-xl ${
        isPremium
          ? "border-premium-cream/15 bg-soil-green/95"
          : "border-line bg-white/95"
      } ${className}`}
    >
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-10">
        <span
          className={`truncate text-[16px] font-semibold ${
            isPremium ? "font-premium text-premium-cream" : "text-ink-invert"
          }`}
        >
          {productName}
        </span>
        <nav
          className={`hidden items-center gap-7 text-[12px] md:flex ${
            isPremium ? "text-premium-cream/75" : "text-soil-brown-soft"
          }`}
        >
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`transition-colors ${
                isPremium ? "hover:text-premium-cream" : "hover:text-spring-blue"
              }`}
            >
              {it.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {catalogHref && (
            <a
              href={catalogHref}
              className={
                isPremium
                  ? "inline-flex h-9 items-center border border-premium-cream/40 px-4 text-[12px] font-semibold text-premium-cream transition-transform duration-200 hover:-translate-y-px hover:border-premium-cream active:scale-[0.98]"
                  : "inline-flex h-9 items-center rounded-full border border-spring-blue/40 px-4 text-[12px] font-semibold text-spring-blue transition-colors hover:border-spring-blue"
              }
            >
              카탈로그
            </a>
          )}
          <Link
            href="/contact/quote"
            className={
              isPremium
                ? "inline-flex h-9 items-center bg-premium-cream px-4 text-[12px] font-semibold text-soil-green transition-transform duration-200 hover:-translate-y-px active:scale-[0.98]"
                : "inline-flex h-9 items-center rounded-full bg-spring-blue px-4 text-[12px] font-semibold text-white transition-colors hover:bg-spring-blue-deep"
            }
          >
            견적 문의
          </Link>
        </div>
      </div>
    </div>
  );
}
