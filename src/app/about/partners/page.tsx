import type { Metadata } from "next";
import { PARTNERS, type PartnerCategory } from "@/content/partners";

export const metadata: Metadata = {
  title: "글로벌 파트너",
  description:
    "스미토모화학·MKV·타키론·다이아텍스·팜한농·야스카와전기 등 — 협력 회사",
};

const GROUPS: { key: PartnerCategory; label: string; sublabel: string }[] = [
  { key: "po-film", label: "PO필름 파트너", sublabel: "Sumitomo · MKV · Takiron · Mitsubishi" },
  { key: "accessories", label: "부자재 파트너", sublabel: "Diatex · Wide Cross" },
  { key: "crop-care", label: "작물영양·보호제 파트너", sublabel: "산농대미 · 후타바 · 스미카 · 마루젠 · 팜한농" },
  { key: "machinery", label: "기계 파트너", sublabel: "야스카와전기 · 마루야마 · 스미토모 중기 · 야하타" },
];

export default function PartnersPage() {
  return (
    <article className="flex flex-col gap-3 bg-paper-soft">
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-20">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            Global Partnership
          </p>
          <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert max-w-[16ch]">
            협력 회사
          </h1>
          <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            새미그룹은 일본·중국·한국의 글로벌 기업들과 협력해, 한국 농업 현장에
            최고 수준의 기술과 자재를 공급합니다.
          </p>
        </div>
      </section>

      {GROUPS.map((g, i) => {
        const list = PARTNERS.filter((p) => p.category === g.key);
        return (
          <section
            key={g.key}
            className={i % 2 === 1 ? "bg-paper-warm" : "bg-white"}
          >
            <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-3">
                  {g.sublabel}
                </p>
                <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-display text-ink-invert">
                  {g.label}
                </h2>
              </div>
              <ul className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 self-end">
                {list.map((p) => (
                  <li key={p.slug}>
                    <p className="text-[20px] font-semibold tracking-display text-ink-invert">
                      {p.name}
                    </p>
                    <p className="mt-1 font-tech text-[12px] uppercase text-soil-brown-mute">
                      {p.country}
                      {p.note && ` · ${p.note}`}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </article>
  );
}
