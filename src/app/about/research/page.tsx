import Link from "next/link";
import type { Metadata } from "next";
import SmartImage from "@/components/media/SmartImage";

export const metadata: Metadata = {
  title: "농업연구소",
  description:
    "PO필름 16종 이상의 측정장비를 갖춘 농업연구소 — 데이터 기반의 신제품 개발과 엄격한 품질관리.",
};

const PILLARS = [
  {
    eyebrow: "01",
    title: "엄격한 품질관리",
    body: "필름 생산부터 사용까지 전 과정을 모니터링. 국가 표준을 넘는 자체 기준으로 매 배치를 검증합니다.",
  },
  {
    eyebrow: "02",
    title: "데이터 기반 R&D",
    body: "한국 농업 현장의 기상·작목 데이터를 지속적으로 축적하고, 개선 방향을 신제품 설계에 반영합니다.",
  },
  {
    eyebrow: "03",
    title: "신제품 개발",
    body: "썬파워(2023, 분광)·코팅 쿨(차열)·올시즌(변광)·따시네(보온터널)·그린포스(녹색멀칭) — 한국 농업을 선도할 라인을 출시했습니다.",
  },
  {
    eyebrow: "04",
    title: "프리미엄 A/S",
    body: "출시 이후의 사용 환경까지 데이터로 추적. 농가의 한 시즌이 끝날 때까지 책임집니다.",
  },
];

const STAT = [
  { value: "16+", label: "PO필름 측정장비" },
  { value: "8종", label: "물리 특성" },
  { value: "8종", label: "광학 특성" },
];

export default function ResearchPage() {
  return (
    <article className="flex flex-col gap-3 bg-paper-soft">
      <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        <SmartImage
          src="company/research/hero/interior-01.webp"
          alt="새미 농업연구소"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-beige via-earth-beige/80 via-40% to-earth-beige/0" />
        <div className="relative mx-auto max-w-[1440px] w-full px-6 lg:px-10 pb-16">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            Agricultural Research Lab
          </p>
          <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert max-w-[16ch]">
            농업연구소
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue">
              소개
            </p>
          </div>
          <p className="lg:col-span-8 lg:col-start-5 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown">
            ARTS 농업연구소(2020 설립)는 PO필름의 물리·광학 특성을 측정할 수 있는
            16종 이상의 장비를 갖추고 있습니다. 한국 농업의 기상과 작목 데이터를
            지속 모니터링하면서, 정밀한 데이터에 근거해 신제품을 개발하고 품질을
            관리합니다.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16 lg:py-20 grid md:grid-cols-3">
          {STAT.map((s, i) => (
            <div
              key={s.label}
              className={`px-2 py-8 md:py-0 md:px-10 ${
                i > 0 ? "md:border-l border-line" : ""
              }`}
            >
              <p className="font-tech text-[40px] md:text-[56px] lg:text-[72px] font-semibold leading-none tracking-display text-ink-invert">
                {s.value}
              </p>
              <p className="mt-3 font-tech text-[12px] uppercase text-soil-brown-mute">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            {PILLARS.map((p) => (
              <article key={p.eyebrow} className="border-t border-line pt-6">
                <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-3">
                  Pillar · {p.eyebrow}
                </p>
                <h3 className="text-[24px] font-semibold tracking-display text-ink-invert mb-3">
                  {p.title}
                </h3>
                <p className="text-[16px] leading-[1.85] text-soil-brown-soft max-w-[44ch]">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20">
          <div className="flex flex-wrap gap-3">
            <Link href="/po-film" className="apple-button apple-button-primary">
              연구소가 만든 라인업
            </Link>
            <Link href="/about/factories" className="apple-button apple-button-secondary">
              공장·사옥
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
