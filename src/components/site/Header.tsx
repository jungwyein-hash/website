"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/nav";
import MobileOverlay from "./MobileOverlay";

/** 제품명 옆 분류·배지 태그 — 얇은 실선 박스, 복수 지원 */
function Tags({
  caption,
  small,
}: {
  caption?: string | string[];
  small?: boolean;
}) {
  if (!caption) return null;
  const list = Array.isArray(caption) ? caption : [caption];
  return (
    <>
      {list.map((t) => (
        <span
          key={t}
          className={`border border-line px-1 py-0.5 font-light leading-none text-soil-brown-mute ${
            small ? "text-[10px]" : "text-[11px]"
          }`}
        >
          {t}
        </span>
      ))}
    </>
  );
}

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // 한 번 펼친 시리즈(다이아스타 등)는 패널이 닫힐 때까지 유지
  const [expandedSeries, setExpandedSeries] = useState<Set<string>>(new Set());
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // defaultExpanded 시리즈(회사 소개 등)는 패널이 열릴 때부터 펼쳐둔다
  const seedExpanded = (i: number) =>
    new Set(
      (NAV[i].groups ?? [])
        .flatMap((g) => [...g.items, ...(g.more?.flatMap((s) => s.items) ?? [])])
        .filter((it) => it.children?.length && it.defaultExpanded)
        .map((it) => it.href)
    );

  const open = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex((prev) => {
      if (prev !== i) setExpandedSeries(seedExpanded(i));
      return i;
    });
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenIndex(null);
      setExpandedSeries(new Set());
    }, 120);
  };

  const expandSeries = (href: string) =>
    setExpandedSeries((prev) => (prev.has(href) ? prev : new Set(prev).add(href)));

  const toggleSeries = (href: string) =>
    setExpandedSeries((prev) => {
      const next = new Set(prev);
      if (next.has(href)) next.delete(href);
      else next.add(href);
      return next;
    });

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b backdrop-blur-xl transition-colors duration-300 ${
          scrolled || openIndex !== null
            ? "border-line bg-white/96"
            : "border-line/70 bg-white/88"
        }`}
        onMouseLeave={scheduleClose}
      >
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-5 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center leading-none"
            aria-label="새미그룹 홈"
          >
            <Image
              src="/saemi-logo.png"
              alt=""
              width={32}
              height={32}
              priority
              className="h-8 w-8 object-contain"
            />
          </Link>

          <nav
            className="hidden items-center gap-8 text-[12px] leading-none text-ink-invert/76 lg:flex"
            aria-label="주요 메뉴"
          >
            {NAV.map((section, i) => (
              <div
                key={section.href}
                className="relative"
                onMouseEnter={() => section.groups && open(i)}
              >
                <Link
                  href={section.href}
                  className="py-5 transition-colors duration-200 hover:text-spring-blue"
                >
                  {section.label}
                </Link>
              </div>
            ))}
            <Link
              href="/best-farms"
              className="py-5 transition-colors duration-200 hover:text-spring-blue"
              onMouseEnter={() => setOpenIndex(null)}
            >
              우수농가
            </Link>
          </nav>

          <div className="flex items-center gap-5">
            <Link
              href="/contact/quote"
              className="hidden text-[12px] font-semibold leading-none text-spring-blue transition-opacity hover:opacity-75 lg:inline-block"
            >
              문의하기
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="text-[12px] font-semibold leading-none text-ink-invert lg:hidden"
              aria-label="메뉴 열기"
            >
              메뉴
            </button>
          </div>
        </div>

        {openIndex !== null && NAV[openIndex]?.groups && (
          <div
            className="absolute left-0 right-0 top-full border-b border-line bg-white shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
            onMouseEnter={() => open(openIndex)}
          >
            <div
              className={`mx-auto grid max-w-[1280px] gap-10 px-6 py-11 lg:px-10 ${
                NAV[openIndex].groups!.length >= 5
                  ? "grid-cols-5"
                  : NAV[openIndex].groups!.length === 4
                    ? "grid-cols-4"
                    : NAV[openIndex].groups!.length === 3
                      ? "grid-cols-3"
                      : "grid-cols-2"
              }`}
            >
              {NAV[openIndex].groups!.map((g) => (
                <div key={g.title}>
                  <p className="mb-1 flex items-baseline gap-2 text-[12px] font-semibold">
                    <span className={g.accent ? "text-spring-blue" : "text-soil-brown-mute"}>
                      {g.title}
                    </span>
                    {g.caption && (
                      <span
                        className={`font-normal ${
                          g.accent ? "text-spring-blue/80" : "text-soil-brown-mute/70"
                        }`}
                      >
                        {g.caption}
                      </span>
                    )}
                  </p>
                  {g.subtitle ? (
                    <p className="mb-5 text-[12px] text-spring-blue/70">{g.subtitle}</p>
                  ) : (
                    <div className="mb-5" />
                  )}
                  <ul className="space-y-3">
                    {g.items.map((it) => {
                      const hasChildren = !!it.children?.length;
                      const isExpanded = hasChildren && expandedSeries.has(it.href);
                      return (
                        <li
                          key={`${it.href}-${it.label}`}
                          onMouseEnter={
                            hasChildren ? () => expandSeries(it.href) : undefined
                          }
                        >
                          <Link
                            href={it.href}
                            aria-expanded={hasChildren ? isExpanded : undefined}
                            className="inline-flex items-center gap-2 text-[16px] font-semibold leading-tight text-ink-invert transition-colors hover:text-spring-blue"
                          >
                            <span>{it.label}</span>
                            <Tags caption={it.caption} />
                            {hasChildren && (
                              <span
                                aria-hidden
                                onClick={(e) => {
                                  // 화살표 클릭은 이동 대신 접기/펴기
                                  e.preventDefault();
                                  e.stopPropagation();
                                  toggleSeries(it.href);
                                }}
                                className={`text-[11px] text-soil-brown-mute ${
                                  isExpanded ? "" : "rotate-180"
                                }`}
                              >
                                ▾
                              </span>
                            )}
                          </Link>
                          {hasChildren && (
                            <ul
                              className={`space-y-2 overflow-hidden border-l border-line pl-4 transition-all duration-300 ease-out ${
                                isExpanded
                                  ? `mt-3 opacity-100 ${
                                      it.children!.length > 5 ? "max-h-72" : "max-h-44"
                                    }`
                                  : "mt-0 max-h-0 opacity-0"
                              }`}
                            >
                              {it.children!.map((c) => (
                                <li key={`${c.href}-${c.label}`}>
                                  <Link
                                    href={c.href}
                                    tabIndex={isExpanded ? undefined : -1}
                                    className="inline-flex items-center gap-1.5 text-[13px] text-soil-brown-soft transition-colors hover:text-spring-blue"
                                  >
                                    <span>{c.label}</span>
                                    <Tags caption={c.caption} small />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  {g.more?.map((sec) => (
                    <div key={sec.title} className="mt-8">
                      <p className="mb-5 text-[12px] font-semibold text-soil-brown-mute">
                        {sec.title}
                      </p>
                      <ul className="space-y-3">
                        {sec.items.map((it) => (
                          <li key={`${it.href}-${it.label}`}>
                            <Link
                              href={it.href}
                              className="inline-flex items-center gap-2 text-[16px] font-semibold leading-tight text-ink-invert transition-colors hover:text-spring-blue"
                            >
                              <span>{it.label}</span>
                              <Tags caption={it.caption} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {g.box && (
                    <div className="mt-7 rounded-[10px] bg-paper-soft p-5">
                      <p className="text-[13px] leading-relaxed text-soil-brown-soft">
                        {g.box.body}
                      </p>
                      <Link
                        href={g.box.href}
                        className="mt-3 inline-block text-[13px] font-semibold text-spring-blue transition-opacity hover:opacity-75"
                      >
                        {g.box.linkLabel} →
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      <MobileOverlay open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
