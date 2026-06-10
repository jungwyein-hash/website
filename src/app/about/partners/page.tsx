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
    <article className="pb-32">
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-16">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
          Global Partnership
        </p>
        <h1 className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] max-w-[16ch]">
          협력 회사
        </h1>
        <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
          새미그룹은 일본·중국·한국의 글로벌 기업들과 협력해, 한국 농업 현장에
          최고 수준의 기술과 자재를 공급합니다.
        </p>
      </section>

      {GROUPS.map((g, i) => {
        const list = PARTNERS.filter((p) => p.category === g.key);
        return (
          <section
            key={g.key}
            className={`border-t border-line ${i % 2 === 1 ? "bg-ink-invert/[0.02]" : ""}`}
          >
            <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-3">
                  {g.sublabel}
                </p>
                <h2 className="text-[24px] md:text-[32px] lg:text-[36px]">
                  {g.label}
                </h2>
              </div>
              <ul className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 self-end">
                {list.map((p) => (
                  <li key={p.slug}>
                    <p className="text-[20px] tracking-normal text-soil-brown">
                      {p.name}
                    </p>
                    <p className="mt-1 text-[12px] tracking-normal uppercase text-soil-brown-mute">
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
