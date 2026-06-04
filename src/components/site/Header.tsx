"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/lib/nav";
import MobileOverlay from "./MobileOverlay";

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  };

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
            <div className="mx-auto grid max-w-[1280px] grid-cols-3 gap-14 px-6 py-11 lg:px-10">
              {NAV[openIndex].groups!.map((g) => (
                <div key={g.title}>
                  <p className="mb-5 text-[12px] font-semibold text-soil-brown-mute">
                    {g.title}
                  </p>
                  <ul className="space-y-3">
                    {g.items.map((it) => (
                      <li key={it.href}>
                        <Link
                          href={it.href}
                          className="inline-flex items-center gap-2 text-[16px] font-semibold leading-tight text-ink-invert transition-colors hover:text-spring-blue"
                        >
                          <span>{it.label}</span>
                          {it.caption && (
                            <span className="font-tech text-[12px] font-semibold text-spring-blue">
                              {it.caption}
                            </span>
                          )}
                        </Link>
                        {it.children && it.children.length > 0 && (
                          <ul className="mt-3 space-y-2 border-l border-line pl-4">
                            {it.children.map((c) => (
                              <li key={c.href}>
                                <Link
                                  href={c.href}
                                  className="text-[12px] text-soil-brown-soft transition-colors hover:text-ink-invert"
                                >
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
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
