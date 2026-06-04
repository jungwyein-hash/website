"use client";

import Link from "next/link";
import { useEffect } from "react";
import { NAV } from "@/lib/nav";

export default function MobileOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-white text-ink-invert fade-rise"
      role="dialog"
      aria-modal="true"
    >
      <div className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-line bg-white/96 px-5 backdrop-blur-xl">
        <Link
          href="/"
          onClick={onClose}
          className="text-[16px] font-semibold leading-none"
          aria-label="새미그룹 홈"
        >
          새미그룹
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="text-[12px] font-semibold leading-none"
          aria-label="메뉴 닫기"
        >
          닫기
        </button>
      </div>

      <nav className="px-6 py-10" aria-label="모바일 메뉴">
        <div className="space-y-9">
          {NAV.map((section) => (
            <div key={section.href}>
              <Link
                href={section.href}
                onClick={onClose}
                className="block text-[32px] font-semibold leading-tight text-ink-invert"
              >
                {section.label}
              </Link>
              {section.groups && (
                <ul className="mt-5 grid gap-2 border-l border-line pl-4">
                  {section.groups.flatMap((g) =>
                    g.items.map((it) => (
                      <li key={it.href}>
                        <Link
                          href={it.href}
                          onClick={onClose}
                          className="block py-1 text-[16px] leading-relaxed text-soil-brown-soft"
                        >
                          {it.label}
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
