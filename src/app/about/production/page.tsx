import type { Metadata } from "next";
import SmartImage from "@/components/media/SmartImage";
import HeroVideoBg from "@/components/product/HeroVideoBg";
import { r2Url } from "@/lib/r2-image";

export const metadata: Metadata = {
  title: "생산기술력",
  description:
    "국내 최고 수준의 가공·생산 기술과 체계적 시스템 — 원하는 규격의 PO필름을 신속하게 맞춤 공급합니다.",
};

const CAPABILITIES = [
  {
    label: "최단납기 대응능력",
    body: "업계 최단 납기 시스템으로 원하는 규격을 신속하게 맞춤 공급",
  },
  {
    label: "농가 직배송",
    body: "전국 새미대리점 + 농가 직접 배송 네트워크",
  },
  {
    label: "초광폭 용접 기술",
    body: "독보적인 PO필름 이음 기술로 대형 하우스 시공 대응",
  },
  {
    label: "적재 용량 2,000t+",
    body: "여유 있는 재고로 시즌 대규모 물량 대응",
  },
  {
    label: "선입선출 시스템",
    body: "체계적인 재고관리로 신선도 유지",
  },
];

const GALLERY = [
  { src: "company/wide-production/hero/interior-01.webp", alt: "초광폭 생산 설비" },
  { src: "company/wide-production/hero/interior-02.webp", alt: "다이아스타 생산" },
  { src: "company/wide-production/hero/exterior-01.webp", alt: "생산 현장 전경" },
];

const FIELD_VIDEO =
  "products/po-film/premium/diastar/farms/221101-농촌진흥청-맘모스하우스/video/exterior-01.mp4";

export default function ProductionPage() {
  return (
    <article className="flex flex-col gap-3 bg-paper-soft">
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-16">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            Production
          </p>
          <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert max-w-[16ch] break-keep">
            업계 리딩 생산기술력
          </h1>
          <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            국내 최고 수준의 가공·생산 기술과 체계적 시스템으로, 원하는 규격의
            PO필름을 신속하게 맞춤 공급합니다.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16 lg:py-20">
          <ul className="grid md:grid-cols-5 gap-x-6 gap-y-10">
            {CAPABILITIES.map((c) => (
              <li key={c.label}>
                <p className="text-[20px] font-semibold tracking-display text-ink-invert mb-2 break-keep">
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
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-12 grid md:grid-cols-3 gap-6">
          {GALLERY.map((g) => (
            <figure
              key={g.src}
              className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-line"
            >
              <SmartImage
                src={g.src}
                alt={g.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-12 pb-24">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-8">
            초광폭 필름 시공 현장
          </p>
          <div className="relative aspect-[3840/1300] overflow-hidden rounded-[8px] bg-line">
            <HeroVideoBg src={r2Url(FIELD_VIDEO)} />
          </div>
        </div>
      </section>
    </article>
  );
}
