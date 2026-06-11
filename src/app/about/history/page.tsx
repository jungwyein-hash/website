import type { Metadata } from "next";
import { HISTORY } from "@/content/history";

export const metadata: Metadata = {
  title: "연혁",
  description: "스미토모화학 거래계약(2003)부터 더한농 신사옥 준공(2024)까지 — 새미그룹의 시간.",
};

export default function HistoryPage() {
  const ordered = [...HISTORY].sort((a, b) => b.year - a.year);
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-20">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            History
          </p>
          <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert max-w-[16ch]">
            새미그룹 연혁
          </h1>
          <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            2003년 스미토모화학과의 거래계약으로 시작된 새미그룹의 길은, 지금도
            한국 농업의 매일과 함께 자라고 있습니다.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-24">
          <ol className="border-t border-line">
            {ordered.map((h) => (
              <li
                key={h.year}
                className="grid lg:grid-cols-12 gap-6 py-8 border-b border-line"
              >
                <div className="lg:col-span-2">
                  <p className="font-tech text-[28px] md:text-[32px] lg:text-[40px] font-semibold leading-none text-ink-invert">
                    {h.year}
                  </p>
                </div>
                <ul className="lg:col-span-9 lg:col-start-4 space-y-2 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown">
                  {h.highlights.map((line, i) => (
                    <li key={i}>· {line}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
