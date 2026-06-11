import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A/S·품질보증",
  description:
    "입수검사·원단검사·출하검사 3단계 품질관리와 물리·광학 16종 측정장비, 시공 후까지 이어지는 새미 A/S.",
  alternates: { canonical: "/po-film/quality" },
};

const INSPECTIONS = [
  {
    step: "01",
    title: "입수검사",
    body: "원단이 들어오는 순간부터 검사합니다. 수입·자체 생산 구분 없이 같은 기준을 적용합니다.",
  },
  {
    step: "02",
    title: "원단검사",
    body: "가공 전 원단의 물리·광학 특성을 측정해 규격과 일치하는지 확인합니다.",
  },
  {
    step: "03",
    title: "출하검사",
    body: "주문 규격대로 가공된 필름을 출하 전에 다시 한번 확인합니다.",
  },
];

const LAB_SCOPE = [
  "PO필름 품질관리 — 입수·원단·출하 전 과정",
  "물리 특성 8종 · 광학 특성 8종 측정장비 보유",
  "신제품 개발 및 테스트",
  "클레임 제품 테스트 및 대응",
];

export default function QualityPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-16">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
          Quality &amp; A/S
        </p>
        <h1 className="text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] max-w-[18ch]">
          한 번 씌우면 몇 년.
          <br />
          그래서 검사는 세 번.
        </h1>
        <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
          필름은 한 시즌이 아니라 몇 년을 책임지는 자재입니다. 새미는 엄격한
          품질관리 아래 필름 생산부터 사용까지 전 과정을 모니터링하고, 시공
          이후의 문제까지 함께 해결합니다.
        </p>
      </section>

      {/* 3단계 검사 */}
      <section className="border-y border-line bg-paper-soft">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20">
          <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-10">
            3단계 품질검사
          </p>
          <ol className="grid gap-px bg-line border border-line md:grid-cols-3">
            {INSPECTIONS.map((s) => (
              <li key={s.step} className="bg-white p-8">
                <span className="font-tech text-[13px] font-semibold text-spring-blue">
                  {s.step}
                </span>
                <h2 className="mt-4 text-[24px]">{s.title}</h2>
                <p className="mt-3 text-[15px] leading-[1.8] text-soil-brown-soft max-w-[36ch]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 연구소 연계 */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-4">
            Research Lab
          </p>
          <h2 className="text-[28px] md:text-[36px] leading-[1.2]">
            품질의 근거는
            <br />
            첨단기술 농업연구소.
          </h2>
          <Link
            href="/about/research"
            className="mt-8 inline-block link-underline text-[16px]"
          >
            농업연구소 자세히 →
          </Link>
        </div>
        <ul className="lg:col-span-6 lg:col-start-7 divide-y divide-line border-y border-line">
          {LAB_SCOPE.map((item) => (
            <li key={item} className="py-5 text-[16px] leading-relaxed text-soil-brown">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* A/S */}
      <section className="border-t border-line bg-paper-soft">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-4">
              After Service
            </p>
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] leading-[1.2]">
              시공 후의 문제도
              <br />
              영업 담당이 직접 봅니다.
            </h2>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.85] text-soil-brown-soft">
              사용 중 이상이 발견되면 담당이 현장을 확인하고, 연구소가 제품을
              테스트해 원인을 규명합니다. 본사(055-781-1250) 또는 가까운
              대리점으로 연락 주세요.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 self-end">
            <div className="flex flex-col gap-3">
              <Link href="/contact/quote" className="apple-button apple-button-primary">
                A/S·품질 문의
              </Link>
              <Link href="/contact/dealers" className="apple-button apple-button-secondary">
                가까운 대리점 찾기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
