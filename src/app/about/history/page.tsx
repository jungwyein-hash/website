import type { Metadata } from "next";
import { HISTORY } from "@/content/history";

export const metadata: Metadata = {
  title: "연혁",
  description: "스미토모화학 거래계약(2003)부터 더한농 신사옥 준공(2024)까지 — 새미그룹의 시간.",
};

export default function HistoryPage() {
  const ordered = [...HISTORY].sort((a, b) => b.year - a.year);
  return (
    <article className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-32">
      <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
        History
      </p>
      <h1 className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] max-w-[16ch]">
        새미그룹 연혁
      </h1>
      <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
        2003년 스미토모화학과의 거래계약으로 시작된 새미그룹의 길은, 지금도
        한국 농업의 매일과 함께 자라고 있습니다.
      </p>

      <ol className="mt-20 border-t border-line">
        {ordered.map((h) => (
          <li
            key={h.year}
            className="grid lg:grid-cols-12 gap-6 py-8 border-b border-line"
          >
            <div className="lg:col-span-2">
              <p className="text-[28px] md:text-[32px] lg:text-[40px] leading-none tracking-normal text-soil-brown">
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
    </article>
  );
}
