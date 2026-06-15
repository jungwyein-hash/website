import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { COMPANIES } from "@/content/companies";
import { HISTORY } from "@/content/history";
import { PARTNERS, type PartnerCategory } from "@/content/partners";
import SmartImage from "@/components/media/SmartImage";
import SectionSubNav from "@/components/site/SectionSubNav";
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
  "인류가 처음 땅에 씨앗을 묻은 순간부터, 농업은 단순한 생산이 아니었습니다. 그것은 사람과 자연이 맺어온 가장 오래된 약속이자, 한 문명이 다음 세대에게 삶을 물려주는 방식이었습니다. 새미는 바로 그 자리에서 일하는 회사입니다.",
  "땅이 마르면 생명도 마르기에, 농업에 마르지 않는 샘이 되고자 했고 ‘살리는 샘, 새미’라는 이름에 그 다짐을 담았습니다. 창업 이래 간직해온 경천애인(敬天愛人) — 하늘을 공경하고 사람을 사랑하라는 그 말은, 자연 앞에 겸손하되 사람을 위해 끝까지 책임지겠다는 새미의 태도입니다. 풍요와 지속가능성은 양자택일의 문제가 아니라, 끝내 함께 이루어내야 할 과제라고 믿습니다.",
  "새미가 세계 곳곳을 다니며 최고의 농자재와 기술을 찾는 이유도 여기에 있습니다. 더 나은 도구는 농부의 수고를 덜고, 한 나라 농업의 내일을 바꿉니다. 일본 스미토모화학, MKV Advance, 타키론 CI의 기술로 만든 장기 기능성 PO필름을 한국에 들여온 것도 그 믿음의 실천입니다. 비닐하우스와 스마트팜에서 더 좋은 결실을 더 이르게 거두면서도 자연에 진 빚은 줄이는 일 — 그것을 우리 세대의 책임으로 여깁니다.",
  "이 신념 위에서 새미는 작물보호제와 작물영양제를 비롯한 다양한 농자재를 공급하고, 친환경 완효성 비료와 같은 유기농업자재 연구에 꾸준히 투자하고 있습니다. 또한 정밀기계 부품과 고기능 가공품, 일본 야스카와전기의 산업용 로봇을 국내에 도입해 제조 현장의 진보를 함께 만듭니다. 농부가 길러낸 결실을 소비자와 곧바로 잇는 일에도 정성을 쏟습니다. 기르는 이와 먹는 이가 서로를 신뢰하는 사회, 그것이 새미가 바라는 풍경입니다.",
  "기후가 흔들리고 시장이 요동치는 시대입니다. 그러나 변화는 두려움의 이유가 아니라, 응답해야 할 부름입니다. 새미는 지속가능한 농업의 내일을 여는 기술과 제품에 끊임없이 도전하고, 그 약속을 현장에서 증명하겠습니다.",
  "마르지 않는 샘처럼, 새미는 사람과 땅의 곁을 지키며 멈추지 않겠습니다.",
];

// 헤더 아래 스티키 서브 메뉴 — 섹션 id와 1:1
const SUB_NAV = [
  { id: "philosophy", label: "기업철학" },
  { id: "companies", label: "4개의 회사" },
  { id: "business", label: "사업부" },
  { id: "history", label: "연혁" },
  { id: "partners", label: "글로벌 파트너" },
];

// 글로벌 파트너 — 협력 회사 (글로벌 파트너 페이지에서 이전)
const PARTNER_GROUPS: { key: PartnerCategory; label: string; sublabel: string }[] = [
  { key: "po-film", label: "PO필름 파트너", sublabel: "Sumitomo · MKV · Takiron · Mitsubishi" },
  { key: "accessories", label: "부자재 파트너", sublabel: "Diatex · Wide Cross" },
  { key: "crop-care", label: "작물영양·보호제 파트너", sublabel: "산농대미 · 후타바 · 스미카 · 마루젠 · 팜한농" },
  { key: "machinery", label: "기계 파트너", sublabel: "야스카와전기 · 마루야마 · 스미토모 중기 · 야하타" },
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
      "products/greenhouse-materials/sansan-curtain/hero/interior-02.webp",
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
    image: "products/machinery/고무,-씰링/tire/tire-04.webp",
  },
];

export default function AboutPage() {
  const history = [...HISTORY].sort((a, b) => a.year - b.year);

  return (
    <>
      <SectionSubNav items={SUB_NAV} label="새미그룹" />
      <div className="flex flex-col gap-3 bg-paper-soft">
      {/* 1. 히어로 */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            Saemi Group
          </p>
          <h1 className="text-[40px] md:text-[64px] xl:text-[80px] font-semibold leading-[1.05] tracking-display text-ink-invert max-w-[18ch] text-balance">
            프리미엄 종합농자재,
            <br />
            새미그룹.
          </h1>
          <p className="mt-8 max-w-[60ch] text-[18px] md:text-[20px] leading-[1.75] text-soil-brown-soft">
            농사를 준비하는 필름부터, 작물을 지키는 보호제, 현장을 움직이는
            기계, 수확을 잇는 유통까지 — 4개의 회사가 농업의 전 과정을
            받칩니다.
          </p>
        </div>
      </section>

      {/* 2. 기업철학 — 경천애인 (다크 섹션) */}
      <section id="philosophy" className="scroll-mt-28 bg-spring-blue text-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-28 lg:py-40 text-center">
          <div className="apple-reveal flex items-start justify-center gap-8 md:gap-14">
            {HANJA.map((h) => (
              <div key={h.hanja} className="flex flex-col items-center gap-4">
                <span className="font-hanja text-[64px] md:text-[96px] leading-none">
                  {h.hanja}
                </span>
                <span className="font-premium text-[13px] text-white/85">{h.kr}</span>
              </div>
            ))}
          </div>
          <p className="apple-reveal mt-12 font-premium text-[12px] tracking-[0.18em] uppercase text-white/75">
            Reverence God, Love People
          </p>
          <p className="apple-reveal font-philosophy mt-8 text-[22px] md:text-[28px] leading-[1.5] text-white/90 text-balance">
            새미그룹은 고객과 함께,
            <br className="md:hidden" /> 새로운 미래를 향해 나아갑니다.
          </p>
        </div>
      </section>

      {/* 2-1. 이름의 의미 — 새미 로고 + 네이밍 스토리 */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-36 text-center">
          <Image
            src="/saemi-logo.png"
            alt="새미 로고"
            width={144}
            height={144}
            className="apple-reveal mx-auto h-32 w-32 object-contain md:h-36 md:w-36"
          />
          <h2 className="apple-reveal font-premium mt-10 text-[32px] md:text-[44px] font-semibold leading-[1.25] tracking-display text-ink-invert text-balance">
            생명의 샘, 그리고 새로운 미래.
          </h2>
          <p className="apple-reveal font-premium mx-auto mt-8 max-w-[44ch] text-[17px] md:text-[19px] leading-[1.85] text-soil-brown-soft text-balance">
            ‘새미’는 경상도 말로 샘을 뜻합니다.
            <br />
            모두가 함께 마시는 생명의 샘, 그리고 모두가 함께 잘사는 새로운
            미래 — 이름에 담은 두 가지 약속입니다.
          </p>
        </div>
      </section>

      {/* 3. CEO 인사말 — 전문 */}
      <section id="ceo" className="scroll-mt-28 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-4">
            CEO Message
          </p>
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.2] tracking-display text-ink-invert">
            대표이사 인사말
          </h2>
          <div className="mt-10 max-w-[72ch] space-y-7 text-[16px] leading-[1.9] text-soil-brown">
            {CEO_PARAGRAPHS.map((p) => (
              <p key={p.slice(0, 12)}>{p}</p>
            ))}
            <p className="pt-6 text-soil-brown-mute">
              대표이사 <span className="text-soil-brown">정두석</span>
            </p>
          </div>
        </div>
      </section>

      {/* 4. 4개의 회사 */}
      <section id="companies" className="scroll-mt-28 bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-4">
            Companies
          </p>
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.2] tracking-display text-ink-invert max-w-[20ch]">
            프리미엄 종합 농자재,{" "}
            <span className="text-spring-blue">4개의 회사</span>
          </h2>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            농업경영인들의 필요를 적시에 충족시키고 최고의 품질과 가치를
            제공하기 위해, 새미그룹은 4개의 농산업 특화 기업을 운영합니다.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {COMPANIES.map((c) => (
              <article
                key={c.slug}
                className="surface-panel overflow-hidden bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-paper-soft">
                  {c.buildingImage && (
                    <SmartImage
                      src={c.buildingImage}
                      alt={`${c.legalName} 사옥`}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className={`object-cover ${c.slug === "saemi" ? "scale-[1.3]" : ""}`}
                    />
                  )}
                </div>
                <div className="p-6">
                  <p className="font-tech text-[12px] font-semibold text-spring-blue">
                    {c.founded}
                  </p>
                  <h3 className="mt-3 text-[22px] font-semibold tracking-display leading-tight">{c.legalName}</h3>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {c.divisions.map((d) => (
                      <span
                        key={d}
                        className="border border-line px-1.5 py-1 text-[12px] font-normal leading-none text-soil-brown-mute"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
                    {(c.details ?? []).map((d) => (
                      <li
                        key={d}
                        className="text-[14px] leading-relaxed text-soil-brown-soft"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 4개 사업부 — 홈에서 이전한 이미지 카드 섹션 */}
      <section id="business" className="scroll-mt-28 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-4">
            Business
          </p>
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.2] tracking-display text-ink-invert max-w-[24ch] break-keep text-balance">
            농업 전반을 아우르는{" "}
            <span className="text-spring-blue">4개의 핵심 사업부</span>
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
                  <h3 className="mt-3 text-[22px] font-semibold tracking-display leading-tight">
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
        </div>
      </section>

      {/* 6. 성장 — 그래프 + 통계 */}
      <section id="performance" className="scroll-mt-28 bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-4">
            Performance
          </p>
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.2] tracking-display text-ink-invert max-w-[20ch]">
            지속적인 성장, 새미 PO필름
          </h2>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            검증된 품질과 고객 신뢰를 바탕으로 매년 꾸준한 성장을 이어가고
            있습니다.
          </p>
          <div className="mt-16">
            <BarChart bars={PO_FILM_SALES} />
            <p className="mt-6 text-[12px] text-soil-brown-mute">
              * 2021년 판매량 대비 성장률
            </p>
          </div>
          <div className="mt-20 border-t border-line pt-14">
            <StatStrip stats={PO_FILM_STATS} />
          </div>
        </div>
      </section>

      {/* 7. 연혁 — 전체 타임라인 */}
      <section id="history" className="scroll-mt-28 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-4">
                History
              </p>
              <h2 className="lg:sticky lg:top-36 text-[32px] md:text-[44px] font-semibold leading-[1.2] tracking-display text-ink-invert">
                2003년부터,
                <br />
                한 해도 멈추지 않고.
              </h2>
            </div>
            <ol className="lg:col-span-7 lg:col-start-6 divide-y divide-line border-y border-line">
              {history.map((h) => (
                <li key={h.year} className="grid grid-cols-[96px_1fr] gap-6 py-6">
                  <span className="font-tech text-[20px] font-semibold text-ink-invert">
                    {h.year}
                  </span>
                  <ul className="space-y-1.5 text-[16px] leading-relaxed text-soil-brown">
                    {h.highlights.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 8. 글로벌 파트너 — 협력 회사 */}
      <section id="partners" className="scroll-mt-28 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-4">
            Global Partnership
          </p>
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.2] tracking-display text-ink-invert max-w-[20ch] break-keep">
            새미그룹
            <br />
            글로벌 파트너쉽
          </h2>
          <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            새미그룹은 일본·중국·한국의 글로벌 기업들과 협력해, 한국 농업 현장에
            최고 수준의 기술과 자재를 공급합니다.
          </p>
          <div className="mt-16 flex flex-col divide-y divide-line border-y border-line">
            {PARTNER_GROUPS.map((g) => {
              const list = PARTNERS.filter((p) => p.category === g.key);
              return (
                <div key={g.key} className="grid lg:grid-cols-12 gap-x-10 gap-y-6 py-12">
                  <div className="lg:col-span-3">
                    <h3 className="text-[24px] md:text-[28px] font-semibold leading-[1.2] tracking-display text-ink-invert">
                      {g.label}
                    </h3>
                    <p className="mt-2 font-tech text-[12px] font-semibold uppercase text-spring-blue">
                      {g.sublabel}
                    </p>
                  </div>
                  <ul className="lg:col-span-9 grid grid-cols-2 gap-3 md:grid-cols-5">
                    {list.map((p) => (
                      <li
                        key={p.slug}
                        className="flex min-h-[120px] flex-col items-center justify-center gap-2.5 border border-line bg-paper-warm px-4 py-5 text-center transition-transform duration-[450ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:scale-[1.04]"
                      >
                        <p className="text-[16px] font-semibold tracking-display text-ink-invert break-keep">
                          {p.name}
                        </p>
                        <p className="font-tech text-[12px] uppercase text-soil-brown-mute break-keep">
                          {p.country}
                          {p.note && ` · ${p.note}`}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. 역량과 현장 */}
      <section id="more" className="scroll-mt-28 bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 grid md:grid-cols-3 gap-px bg-line border border-line">
          {[
            {
              href: "/about/research",
              title: "농업연구소",
              body: "물리 특성 8종 · 광학 특성 8종 측정장비로 필름 생산부터 사용까지 전 과정을 모니터링합니다.",
            },
            {
              href: "/about/production",
              title: "생산기술력",
              body: "최단납기 대응·초광폭 용접·농가 직배송 — 업계를 리드하는 생산 기술과 시스템.",
            },
            {
              href: "/about/partners",
              title: "글로벌 파트너",
              body: "스미토모화학·MKV Advance·타키론 CI·야스카와 — 세계적 기업과의 협력.",
            },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white p-10 group">
              <h3 className="text-[22px] font-semibold tracking-display">{l.title}</h3>
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
      </div>
    </>
  );
}
