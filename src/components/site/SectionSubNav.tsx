"use client";

import { useEffect, useState } from "react";

export type SectionNavItem = { id: string; label: string };

/** 헤더 바로 아래 스티키되는 페이지 내 섹션 이동 서브 메뉴 — 스크롤 위치에 따라 활성 표시 */
export default function SectionSubNav({
  items,
  label,
}: {
  items: SectionNavItem[];
  /** 접근성용 메뉴 이름 — 화면에는 표시되지 않음 */
  label: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const onScroll = () => {
      // 서브 메뉴 아래 약간의 여유를 둔 기준선으로 현재 섹션 판정
      const line = window.scrollY + 160;
      let current: string | null = null;
      for (const el of sections) {
        if (el.offsetTop <= line) current = el.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <div className="sticky top-14 z-30 border-b border-line bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-12 max-w-[1440px] items-center justify-center px-6 lg:px-10">
        <nav
          className="flex items-center gap-5 overflow-x-auto text-[12px] leading-none text-soil-brown-soft md:gap-7"
          aria-label={`${label} 섹션 메뉴`}
        >
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={`whitespace-nowrap py-4 transition-colors hover:text-spring-blue ${
                activeId === it.id ? "font-semibold text-spring-blue" : ""
              }`}
            >
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
