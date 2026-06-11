import type { Metadata } from "next";
import { CATALOGS } from "@/content/catalogs";

export const metadata: Metadata = {
  title: "자료실",
  description: "새미그룹의 카탈로그 · 회사소개서 · 우수농가 케이스북 · 채용 안내 PDF.",
};

const CATEGORY_LABEL = {
  company: "회사 소개",
  "po-film": "PO필름",
  accessory: "부자재",
  "best-farms": "우수농가",
  recruitment: "채용",
} as const;

const ORDER: (keyof typeof CATEGORY_LABEL)[] = [
  "company",
  "po-film",
  "accessory",
  "best-farms",
  "recruitment",
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pb-20 pt-28 lg:pt-36">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue">
            Resources
          </p>
          <h1 className="mt-5 max-w-[16ch] text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert">
            카탈로그 자료
          </h1>
          <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            회사소개서부터 PO필름·부자재 카탈로그, 우수농가 케이스북, 채용 안내까지
            — 새미그룹의 모든 PDF 자료를 자유롭게 다운로드하세요.
          </p>
        </div>
      </section>

      {ORDER.map((cat, idx) => {
        const list = CATALOGS.filter((c) => c.category === cat);
        if (list.length === 0) return null;
        return (
          <section
            key={cat}
            className={`px-6 lg:px-10 py-16 lg:py-20 ${
              idx % 2 === 0 ? "bg-white" : "bg-paper-warm"
            }`}
          >
            <div className="mx-auto max-w-[1440px]">
              <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-8">
                {CATEGORY_LABEL[cat]}
              </p>
              <ul className="border-t border-line">
                {list.map((c) => (
                  <li key={c.key} className="border-b border-line">
                    <a
                      href={`/api/r2/asset?key=${encodeURIComponent(c.key)}`}
                      className="grid lg:grid-cols-12 gap-6 py-6 group"
                    >
                      <div className="lg:col-span-7">
                        <h3 className="text-[20px] mb-1 group-hover:text-soil-brown-soft transition-colors">
                          {c.title}
                        </h3>
                        <p className="text-[16px] text-soil-brown-soft max-w-[60ch]">
                          {c.description}
                        </p>
                      </div>
                      <div className="lg:col-span-3 lg:col-start-9 self-center text-[12px] tracking-normal uppercase text-soil-brown-mute">
                        {c.sizeMb ? `${c.sizeMb} MB` : "PDF"}
                      </div>
                      <div className="lg:col-span-1 self-center text-right">
                        <span className="link-underline text-[12px]">↓</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}
