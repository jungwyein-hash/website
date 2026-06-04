import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";

export const metadata: Metadata = {
  title: "정밀기계 부품",
  description:
    "유압호스·피팅·밸브·컨트롤러부터 베벨기어까지 — JIS가 공급하는 정밀기계 부품.",
};

const CATEGORIES = [
  {
    title: "고무·씰링",
    body: "에어 필터, 가스켓, 러버 부트, 타이어, 크롤러 등 — 동적·정적 씰링 부품.",
    sample: "products/machinery/고무,-씰링/gaskets/metal-gasket/metal-gasket.webp",
  },
  {
    title: "기계 부품",
    body: "베벨기어, 블록, 홀더, 오일 스트레이너, 플레이트, 샤프트 링크 등 — 핵심 기계 부품.",
    sample: "products/machinery/기계부품/bevel-gear/bevel-gear.webp",
  },
  {
    title: "대형 플라스틱 부품",
    body: "건설 중장비용 대형 플라스틱 가공품 — 내구성과 정밀도가 요구되는 부품.",
    sample: "products/machinery/대형-플라스틱-부품/plastic-01.webp",
  },
  {
    title: "피팅·밸브",
    body: "유압 피팅과 밸브, 파이프 연결 자재 — 산업 라인의 흐름을 만드는 부품.",
    sample: "products/machinery/피팅,-밸브/fitting/fitting-01.webp",
  },
  {
    title: "호스·파이프",
    body: "유압 호스와 파이프 — 건설 중장비의 동력 전달 라인.",
    sample:
      "products/machinery/호스,-파이프/hose/braided-flexible-hose-assembly/braided-flexible-hose-assembly.webp",
  },
  {
    title: "캐스팅",
    body: "정밀 캐스팅 가공품 — 형태와 강도가 중요한 산업 부품.",
    sample: "products/machinery/캐스팅/cylinder-head/cylinder-head.webp",
  },
];

export default function PartsPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-16">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
          Precision Parts
        </p>
        <h1 className="text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] tracking-normal max-w-[16ch]">
          정밀 기계 부품
        </h1>
        <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
          JIS는 건설 중장비와 산업 현장의 핵심 부품을 공급합니다. 일본 스미토모
          중기계공업·마루야마·야하타와 협력해, 6개 카테고리에 걸친 정밀 부품
          라인업을 운영합니다.
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-12">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {CATEGORIES.map((c) => (
            <li key={c.title}>
              <div className="relative aspect-[4/3] bg-line">
                <SmartImage
                  src={c.sample}
                  alt={c.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-[20px] tracking-normal">{c.title}</h3>
              <p className="mt-2 text-[16px] leading-[1.7] text-soil-brown-soft max-w-[40ch]">
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-paper-soft text-ink-invert">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] tracking-normal leading-[1.2]">
              필요한 부품의 사양과 수량을 알려주세요.
            </h2>
            <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.85] text-soil-brown-soft">
              표준 부품은 빠르게, 맞춤 가공품은 정확하게 — 영업 담당이 직접
              연락드립니다.
            </p>
          </div>
          <div className="lg:col-span-5 self-end">
            <div className="flex flex-wrap gap-8 text-[16px]">
              <Link href="/contact/quote" className="text-spring-blue hover:opacity-80">견적 문의 →</Link>
              <Link href="/about/partners" className="text-soil-brown-soft hover:text-spring-blue">기계 파트너 보기</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
