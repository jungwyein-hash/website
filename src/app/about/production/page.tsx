import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";
import HeroVideoBg from "@/components/product/HeroVideoBg";
import { r2Url } from "@/lib/r2-image";

export const metadata: Metadata = {
  title: "생산기술력",
  description:
    "스무 해의 숙련이 만든 새미의 생산기술력 — 원료 배합부터 초광폭 용접, 출하까지. 사람의 손끝에서 완성되는 PO필름의 이야기.",
};

/** 필름이 만들어지는 과정 — 역사관 패널처럼 서술 */
const PROCESS = [
  {
    no: "01",
    title: "배합 — 필름의 성격을 정하는 순간",
    body: "필름의 성질은 첫 배합에서 갈립니다. 작물과 계절, 하우스의 형태에 따라 보온·투광·내구의 균형이 달라지기에, 새미는 현장에서 쌓은 데이터를 원료 비율에 녹여냅니다. 한 해의 농사를 좌우하는 결정이, 바로 이 자리에서 시작됩니다.",
    image: "company/wide-production/hero/interior-01.webp",
    alt: "원료 배합·생산 라인",
  },
  {
    no: "02",
    title: "성형 — 0.01mm를 다투는 손",
    body: "압출 온도와 속도, 냉각의 속도까지. 눈에 보이지 않는 미세한 차이가 두께와 투명도를 가릅니다. 숙련된 작업자는 기계의 숫자가 아니라 필름의 결을 보고 공정을 조율합니다. 균일함은 설비가 아니라 사람이 지켜온 기준입니다.",
    image: "company/wide-production/hero/interior-02.webp",
    alt: "다이아스타 필름 성형",
  },
  {
    no: "03",
    title: "용접 — 이음매 없는 한 장",
    body: "대형 하우스를 한 장의 필름처럼 덮는 새미의 초광폭 용접 기술. 이어 붙인 자리가 가장 약한 법이지만, 새미의 이음은 원단만큼 단단합니다. 다른 곳이 따라 하지 못하는, 20여 년이 쌓아 올린 손끝의 기술입니다.",
    image: "company/wide-production/hero/exterior-01.webp",
    alt: "초광폭 용접·출하 현장",
  },
];

/** 생산기술력 — 강조 카드 */
const CAPABILITIES = [
  {
    label: "최단납기 대응",
    body: "업계 최단 납기 체계로, 원하는 규격을 가장 빠르게 맞춰 공급합니다.",
  },
  {
    label: "초광폭 용접",
    body: "대형 하우스를 이음매 없이 덮는 독보적인 PO필름 이음 기술.",
  },
  {
    label: "농가 직배송",
    body: "전국 새미대리점과 직배송 네트워크로 현장까지 곧장 닿습니다.",
  },
  {
    label: "적재 2,000t+",
    body: "여유 있는 재고로 시즌의 대규모 수요를 흔들림 없이 받아냅니다.",
  },
  {
    label: "선입선출 관리",
    body: "체계적인 재고 관리로 언제 받아도 갓 만든 필름의 신선도를 유지합니다.",
  },
];

const FIELD_VIDEO =
  "products/po-film/premium/diastar/farms/221101-농촌진흥청-맘모스하우스/video/exterior-01.mp4";

export default function ProductionPage() {
  return (
    <article className="flex flex-col gap-3 bg-paper-soft">
      {/* 1. 히어로 */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-16">
          <p className="apple-reveal font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            Production
          </p>
          <h1 className="apple-reveal text-[44px] md:text-[68px] lg:text-[88px] font-semibold leading-[1.05] tracking-display text-ink-invert max-w-[18ch] break-keep text-balance">
            시간이 쌓아 올린
            <br />
            생산기술력
          </h1>
          <p className="apple-reveal mt-8 max-w-[62ch] text-[18px] md:text-[20px] leading-[1.75] text-soil-brown-soft break-keep">
            좋은 필름은 설비가 아니라 사람이 만듭니다. 새미의 생산기술력은
            2004년부터 한 자리를 지켜온 숙련의 손끝에서 비롯됩니다.
          </p>
        </div>
      </section>

      {/* 2. 서정적 풀폭 이미지 */}
      <section className="bg-white">
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-line">
          <SmartImage
            src="products/po-film/premium/diastar/hero/exterior-01.webp"
            alt="새미 PO필름이 덮인 하우스 단지"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 3. 프롤로그 — 역사관 입구의 안내문처럼 */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue">
              Prologue
            </p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <p className="font-philosophy text-[26px] md:text-[34px] leading-[1.5] text-ink-invert text-balance break-keep">
              같은 원료, 같은 기계라도 누가 만드느냐에 따라 필름은 전혀 다른 물건이
              됩니다.
            </p>
            <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.9] text-soil-brown break-keep">
              새미는 더 빠른 자동화를 자랑하지 않습니다. 대신, 한 해의 농사를
              책임진다는 무게를 아는 사람들의 손을 자랑합니다. 원료를 고르는 눈,
              성형을 읽는 감각, 이음을 다루는 기술 — 숫자로 환원되지 않는 그
              경험이 새미 생산기술력의 진짜 자산입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 장기 숙련자 — 강조 밴드 */}
      <section className="bg-spring-blue text-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="font-tech text-[12px] font-semibold uppercase text-white/75 mb-6">
              The Hands
            </p>
            <p className="font-tech text-[72px] md:text-[112px] font-semibold leading-none tracking-display">
              20<span className="text-[40px] md:text-[56px] align-top">년+</span>
            </p>
            <p className="mt-6 text-[20px] md:text-[24px] font-semibold tracking-display text-white/90 break-keep">
              한 자리를 지켜온 숙련의 손
            </p>
          </div>
          <p className="lg:col-span-6 max-w-[52ch] text-[17px] leading-[1.9] text-white/70 break-keep">
            창업 이래 같은 라인을 지켜온 작업자들이 새미 생산의 중심에 있습니다.
            계절이 바뀌고 설비가 새로워져도, 필름의 결을 손끝으로 읽어내는 감각은
            오직 시간만이 길러냅니다. 새미가 “업계 리딩”을 말할 수 있는 이유는
            바로 이 축적된 손에 있습니다.
          </p>
        </div>
      </section>

      {/* 5. 만들어지는 과정 — 역사관 패널 (좌우 교차) */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-4">
            The Making
          </p>
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.2] tracking-display text-ink-invert max-w-[22ch] break-keep">
            한 장의 필름이 완성되기까지
          </h2>

          <div className="mt-16 flex flex-col gap-16 lg:gap-24">
            {PROCESS.map((p, i) => (
              <div
                key={p.no}
                className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center"
              >
                <figure
                  className={`relative aspect-[4/3] overflow-hidden rounded-[10px] bg-line ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <SmartImage
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </figure>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="font-tech text-[14px] font-semibold text-spring-blue mb-4">
                    {p.no}
                  </p>
                  <h3 className="text-[26px] md:text-[32px] font-semibold leading-[1.25] tracking-display text-ink-invert break-keep">
                    {p.title}
                  </h3>
                  <p className="mt-5 max-w-[46ch] text-[16px] leading-[1.9] text-soil-brown-soft break-keep">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 생산기술력 — 강조 카드 */}
      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-4">
            Capabilities
          </p>
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.2] tracking-display text-ink-invert max-w-[22ch] break-keep">
            업계를 이끄는, 다섯 가지 생산기술력
          </h2>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px border border-line bg-line">
            {CAPABILITIES.map((c) => (
              <div key={c.label} className="bg-white p-7">
                <p className="text-[20px] font-semibold tracking-display text-ink-invert mb-3 break-keep">
                  {c.label}
                </p>
                <p className="text-[14px] leading-[1.8] text-soil-brown-soft break-keep">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 현장에서 완성되는 필름 — 영상 */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 lg:py-32">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-4">
            On the Field
          </p>
          <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.2] tracking-display text-ink-invert max-w-[22ch] break-keep mb-12">
            필름은, 현장에서 완성됩니다
          </h2>
          <div className="relative aspect-[3840/1300] overflow-hidden rounded-[10px] bg-line">
            <HeroVideoBg src={r2Url(FIELD_VIDEO)} />
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20">
          <div className="flex flex-wrap gap-3">
            <Link href="/po-film" className="apple-button apple-button-primary">
              새미가 만든 PO필름
            </Link>
            <Link
              href="/about/research"
              className="apple-button apple-button-secondary"
            >
              농업연구소
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
