import type { Metadata } from "next";
import SmartImage from "@/components/media/SmartImage";
import { COMPANIES } from "@/content/companies";

export const metadata: Metadata = {
  title: "공장·사옥",
  description: "양산과 충주 — 새미그룹의 생산과 연구가 자리한 곳.",
};

const PROD_LINES = [
  { src: "company/factory/automated-cargo-space.webp", alt: "자동화 화물 공간" },
  { src: "company/factory/production-line-01.webp", alt: "PO필름 생산 라인 01" },
  { src: "company/factory/production-line-02.webp", alt: "PO필름 생산 라인 02" },
  { src: "company/factory/production-line-03.webp", alt: "PO필름 생산 라인 03" },
];

const CAPABILITIES = [
  { label: "최단납기 대응", body: "원하는 규격을 신속하게 맞춤 공급" },
  { label: "농가 직배송", body: "전국 새미대리점 + 직배송 네트워크" },
  { label: "초광폭 용접", body: "대형 하우스 시공을 위한 초광폭 가공" },
  { label: "적재 2,000t+", body: "여유 있는 재고로 시즌 수요 대응" },
  { label: "선입선출", body: "체계적인 시스템으로 신선도 관리" },
];

export default function FactoriesPage() {
  return (
    <article className="flex flex-col gap-3 bg-paper-soft">
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-16">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            Factories &amp; HQ
          </p>
          <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert max-w-[16ch]">
            공장과 시설
          </h1>
          <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            PO필름과 부자재의 생산은 양산 산막공단·상북면에서, 농약·비료의 제조는
            충주에서 매일 이뤄집니다. 국내 최고 수준의 가공·생산 기술과 체계적
            시스템으로, 원하는 규격의 제품을 신속하게 맞춤 공급합니다.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-12 grid md:grid-cols-2 gap-6">
          {PROD_LINES.map((p) => (
            <figure
              key={p.src}
              className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-line"
            >
              <SmartImage
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16 lg:py-20">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-8">
            업계 리딩 생산기술력
          </p>
          <ul className="grid md:grid-cols-5 gap-x-6 gap-y-10">
            {CAPABILITIES.map((c) => (
              <li key={c.label}>
                <p className="text-[20px] font-semibold tracking-display text-ink-invert mb-2">
                  {c.label}
                </p>
                <p className="text-[12px] leading-[1.8] text-soil-brown-soft">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-8">
            사옥
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {COMPANIES.filter((c) => c.buildingImage).map((c) => (
              <figure key={c.slug}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-line">
                  <SmartImage
                    src={c.buildingImage!}
                    alt={`${c.legalName} 사옥`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="text-[20px] font-semibold tracking-display text-ink-invert">
                    {c.legalName}
                  </p>
                  {c.address && (
                    <p className="mt-1 text-[12px] text-soil-brown-soft">
                      {c.address}
                    </p>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
