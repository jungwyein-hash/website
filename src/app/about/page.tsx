import Link from "next/link";
import type { Metadata } from "next";
import { COMPANIES } from "@/content/companies";
import { HISTORY } from "@/content/history";
import SmartImage from "@/components/media/SmartImage";
import StatStrip from "@/components/viz/StatStrip";
import BarChart from "@/components/viz/BarChart";
import { PO_FILM_SALES, PO_FILM_STATS } from "@/content/group-stats";

export const metadata: Metadata = {
  title: "회사 소개",
  description:
    "경천애인의 이념으로 한국 농업과 함께 자라는 종합 농자재 그룹 — 철학, 대표 인사말, 4개의 회사, 4개의 사업부, 연혁.",
};

const HANJA = [
  { hanja: "敬", kr: "경" },
  { hanja: "天", kr: "천" },
  { hanja: "愛", kr: "애" },
  { hanja: "人", kr: "인" },
];

const CEO_PARAGRAPHS = [
  "‘새미’는 생명의 샘이자, 모두가 함께 잘사는 ‘새로운 미래’를 그리는 기업입니다. 경천애인(敬天愛人)의 이념을 바탕으로, 사람과 자연이 함께 살아가는 지속가능한 농업 발전을 향해 나아가고 있습니다.",
  "새미그룹은 국내 농업과 산업의 미래를 밝히기 위해, 최고의 농자재와 정밀기계 부품 등을 수출입하고 있습니다.",
  "앞으로도 기후변화와 산업환경의 변화에 유연하게 대응하며, 지속가능한 한국농업의 미래를 위한 차세대 기술과 제품 개발에 끊임없이 도전하겠습니다.",
];

// 4개 핵심 사업부 — 홈에서 이전한 이미지 카드
const DIVISIONS = [
  {
    id: "01",
    title: "PO필름",
    body: "하우스 조건에 맞는 프리미엄 필름과 스탠다드 필름을 공급합니다.",
    href: "/po-film",
    image: "products/po-film/premium/diastar/hero/interior-01.webp",
  },
  {
    id: "02",
    title: "하우스 부자재",
    body: "스마트한 농업을 완성하는 새미의 고효율, 고기능 부자재를 공급합니다.",
    href: "/accessories",
    image:
      "products/greenhouse-materials/sansan-curtain/hero/interior-01.webp",
  },
  {
    id: "03",
    title: "농약·비료",
    body: "작물 보호와 생육 관리에 필요한 제품을 대리점과 농가에 공급합니다.",
    href: "/crop-care",
    image:
      "products/fertilizer-pesticide/비료/hero-shots/오메라 골드 1,2호, 점보칼스타, 칼라이찌방/on-lawn/hero-01.webp",
  },
  {
    id: "04",
    title: "기계·FA",
    body: "정밀 기계 부품과 산업 자동화 제품을 공급합니다.",
    href: "/machinery",
    image: "products/machinery/완제품/hydraulic-cylinder/hydraulic-cylinder-01.webp",
  },
];

// 연혁 하이라이트 — 전체 타임라인은 /about/history
const MILESTONE_YEARS = [2004, 2013, 2019, 2021, 2023, 2024];

export default function AboutPage() {
  const milestones = HISTORY.filter((h) => MILESTONE_YEARS.includes(h.year));

  return (
    <>
      {/* 1. 히어로 */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
          Saemi Group
        </p>
        <h1 className="text-[40px] md:text-[64px] xl:text-[80px] leading-[1.05] max-w-[18ch] text-balance">
          프리미엄 종합농자재,
          <br />
          새미그룹.
        </h1>
        <p className="mt-8 max-w-[60ch] text-[18px] md:text-[20px] leading-[1.75] text-soil-brown-soft">
          농사를 준비하는 필름부터, 작물을 지키는 보호제, 현장을 움직이는
          기계, 수확을 잇는 유통까지 — 4개의 회사가 농업의 전 과정을
          받칩니다.
        </p>
      </section>

      {/* 2. 기업철학 — 경천애인 (다크 섹션) */}
      <section className="bg-ink-invert text-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-28 lg:py-40 text-center">
          <div className="apple-reveal flex items-start justify-center gap-8 md:gap-14">
            {HANJA.map((h) => (
              <div key={h.hanja} className="flex flex-col items-center gap-4">
                <span className="font-premium text-[64px] md:text-[96px] leading-none">
                  {h.hanja}
                </span>
                <span className="text-[13px] text-white/55">{h.kr}</span>
              </div>
            ))}
          </div>
          <p className="apple-reveal mt-12 font-tech text-[12px] tracking-[0.18em] uppercase text-white/45">
            Reverence God, Love People
          </p>
          <p className="apple-reveal font-philosophy mt-8 text-[22px] md:text-[28px] leading-[1.5] text-white/90 text-balance">
            새미그룹은 고객과 함께,
            <br className="md:hidden" /> 새로운 미래를 향해 나아갑니다.
          </p>
        </div>
      </section>

      {/* 3. CEO 인사말 */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-4">
            CEO Message
          </p>
          <h2 className="text-[32px] md:text-[44px] leading-[1.2]">
            대표이사 인사말
          </h2>
          <div className="mt-10 max-w-[58ch] space-y-7 text-[16px] leading-[1.9] text-soil-brown">
            {CEO_PARAGRAPHS.map((p) => (
              <p key={p.slice(0, 12)}>{p}</p>
            ))}
          </div>
          <Link
            href="/about/ceo"
            className="mt-10 inline-block link-underline text-[16px]"
          >
            인사말 전문 보기 →
          </Link>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[8px] bg-paper-soft">
            <SmartImage
              src="design-assets/ceo-portrait.webp"
              alt="새미그룹 대표이사 정두석"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-[14px] text-soil-brown-mute">
            대표이사 <span className="text-soil-brown">정두석</span>
          </p>
        </div>
      </section>

      {/* 4. 4개의 회사 */}
      <section className="border-y border-line bg-paper-soft">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-4">
            Companies
          </p>
          <h2 className="text-[32px] md:text-[44px] leading-[1.2] max-w-[20ch]">
            프리미엄 종합 농자재, 4개의 회사
          </h2>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            농업경영인들의 필요를 적시에 충족시키고 최고의 품질과 가치를
            제공하기 위해, 새미그룹은 4개의 농산업 특화 기업을 운영합니다.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {COMPANIES.map((c) => (
              <article
                key={c.slug}
                className="surface-panel overflow-hidden bg-white"
              >
                <div className="relative aspect-[16/9] bg-line">
                  {c.buildingImage && (
                    <SmartImage
                      src={c.buildingImage}
                      alt={`${c.legalName} 사옥`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 font-tech text-[12px] font-semibold text-ink-invert backdrop-blur">
                    {c.founded}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-[24px]">{c.legalName}</h3>
                  <p className="mt-1 text-[13px] font-semibold text-spring-blue">
                    {c.divisions.join(" · ")}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-line pt-5">
                    {(c.details ?? []).map((d) => (
                      <li
                        key={d}
                        className="text-[15px] leading-relaxed text-soil-brown-soft"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <Link
            href="/about/companies"
            className="mt-10 inline-block link-underline text-[16px]"
          >
            회사별 자세히 보기 →
          </Link>
        </div>
      </section>

      {/* 5. 4개 사업부 — 홈에서 이전한 이미지 카드 섹션 */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-4">
          Business
        </p>
        <h2 className="text-[32px] md:text-[44px] leading-[1.2] max-w-[20ch]">
          농업 전반을 아우르는 4개의 핵심 사업부
        </h2>
        <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.85] text-soil-brown-soft">
          새미그룹은 농업 전반에 걸친 다양한 농업경영인들의 필요를 적시에
          충족시키고, 최고의 품질과 가치를 제공하기 위해 4개의 농산업 특화
          기업을 운영하고 있습니다.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {DIVISIONS.map((division) => (
            <Link
              key={division.href}
              href={division.href}
              className="group surface-panel overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-paper-soft">
                <SmartImage
                  src={division.image}
                  alt={`${division.title} 제품 이미지`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="p-6">
                <p className="font-tech text-[12px] font-semibold text-spring-blue">
                  {division.id}
                </p>
                <h3 className="mt-3 text-[22px] leading-tight">
                  {division.title}
                </h3>
                <p className="mt-3 min-h-[4.5rem] text-[15px] leading-relaxed text-soil-brown-soft">
                  {division.body}
                </p>
                <span className="mt-4 inline-block text-[14px] text-spring-blue opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {division.title} 보기 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. 성장 — 그래프 + 통계 */}
      <section className="border-y border-line bg-paper-soft">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
          <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-4">
            Performance
          </p>
          <h2 className="text-[32px] md:text-[44px] leading-[1.2] max-w-[20ch]">
            지속적인 성장, 새미 PO필름
          </h2>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            검증된 품질과 고객 신뢰를 바탕으로 매년 꾸준한 성장을 이어가고
            있습니다.
          </p>
          <div className="mt-16 max-w-[880px]">
            <BarChart bars={PO_FILM_SALES} />
          </div>
          <div className="mt-20 border-t border-line pt-14">
            <StatStrip stats={PO_FILM_STATS} />
          </div>
        </div>
      </section>

      {/* 7. 연혁 하이라이트 */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-4">
              History
            </p>
            <h2 className="text-[32px] md:text-[44px] leading-[1.2]">
              2003년부터,
              <br />
              한 해도 멈추지 않고.
            </h2>
            <Link
              href="/about/history"
              className="mt-8 inline-block link-underline text-[16px]"
            >
              전체 연혁 보기 →
            </Link>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6 divide-y divide-line border-y border-line">
            {milestones.map((m) => (
              <li key={m.year} className="grid grid-cols-[96px_1fr] gap-6 py-6">
                <span className="font-tech text-[20px] font-semibold text-ink-invert">
                  {m.year}
                </span>
                <span className="text-[16px] leading-relaxed text-soil-brown">
                  {m.highlights.join(" · ")}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. 더 보기 */}
      <section className="border-t border-line bg-paper-soft">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 grid md:grid-cols-3 gap-px bg-line border border-line">
          {[
            {
              href: "/about/research",
              title: "농업연구소",
              body: "물리 특성 8종 · 광학 특성 8종 측정장비로 필름 생산부터 사용까지 전 과정을 모니터링합니다.",
            },
            {
              href: "/about/factories",
              title: "공장과 시설",
              body: "양산 산막공단·상북, 충주 — 제조·가공·물류가 한 흐름으로 이어지는 생산 기반.",
            },
            {
              href: "/about/partners",
              title: "글로벌 파트너",
              body: "스미토모화학·MKV Advance·타키론 CI·야스카와 — 세계적 기업과의 협력.",
            },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white p-10 group">
              <h3 className="text-[22px]">{l.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-soil-brown-soft max-w-[40ch]">
                {l.body}
              </p>
              <span className="mt-6 inline-block link-underline text-[15px]">
                자세히 보기 →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
