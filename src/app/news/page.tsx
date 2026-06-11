import type { Metadata } from "next";
import Link from "next/link";
import { NEWS } from "@/content/news";

export const metadata: Metadata = {
  title: "뉴스",
  description: "새미그룹의 보도자료 · 신제품 출시 · 행사 소식.",
};

const CATEGORY_LABEL: Record<string, string> = {
  release: "신제품",
  press: "보도자료",
  event: "행사",
};

export default function NewsPage() {
  const ordered = [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pb-20 pt-28 lg:pt-36">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue">
            News
          </p>
          <h1 className="mt-5 max-w-[16ch] text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert">
            새미 소식
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16 lg:py-20">
          <ul className="border-t border-line">
            {ordered.map((n) => (
              <li key={n.slug} className="border-b border-line">
                <Link
                  href={`/news/${n.slug}`}
                  className="block py-10 grid lg:grid-cols-12 gap-6 group"
                >
                  <div className="lg:col-span-2 flex flex-col gap-2">
                    <time className="text-[16px] tracking-normal text-soil-brown">
                      {n.date}
                    </time>
                    <span className="text-[12px] tracking-normal uppercase text-soil-brown-mute">
                      {CATEGORY_LABEL[n.category]}
                    </span>
                  </div>
                  <div className="lg:col-span-9 lg:col-start-4">
                    <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold tracking-display text-ink-invert mb-3 group-hover:text-soil-brown-soft transition-colors">
                      {n.title}
                    </h2>
                    <p className="text-[16px] leading-[1.8] text-soil-brown-soft max-w-[60ch]">
                      {n.excerpt}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
