"use client";

import Link from "next/link";

export type SubNavItem = { id: string; label: string };

export default function StickySubNav({
  items,
  productName,
  variant = "default",
}: {
  items: SubNavItem[];
  productName: string;
  variant?: "default" | "premium";
}) {
  const isPremium = variant === "premium";

  return (
    <div className="sticky top-14 z-30 border-y border-line bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-10">
        <span
          className={`truncate text-[16px] font-semibold text-ink-invert ${
            isPremium ? "font-premium text-soil-brown" : ""
          }`}
        >
          {productName}
        </span>
        <nav className="hidden items-center gap-7 text-[12px] text-soil-brown-soft md:flex">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="transition-colors hover:text-spring-blue"
            >
              {it.label}
            </a>
          ))}
        </nav>
        <Link
          href="/contact/quote"
          className="inline-flex h-9 items-center rounded-full bg-spring-blue px-4 text-[12px] font-semibold text-white transition-colors hover:bg-spring-blue-deep"
        >
          견적 문의
        </Link>
      </div>
    </div>
  );
}
