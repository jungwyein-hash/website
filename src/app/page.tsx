import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";
import MonthlyProductSlider from "@/components/product/MonthlyProductSlider";
import BestFarmsMarquee from "@/components/product/BestFarmsMarquee";
import { r2Url } from "@/lib/r2-image";
import { diastar } from "@/content/products/po-film/diastar";
import { misanranDiastar } from "@/content/products/po-film/misanran-diastar";
import { bestFarms } from "@/content/best-farms";

const heroVideoSrc = r2Url("design-assets/web/day-to-night-loop.mp4");

// 우수농가 40인 마퀴 카드 — 서버에서 r2Url로 사진 URL 해석
const farmMarqueeCards = bestFarms.map((f) => ({
  name: f.name,
  crop: f.crop,
  caption: `${f.region} ${f.crop} · ${f.product} 사용 농가`,
  quote: f.quote,
  round: f.round,
  rotate: f.rotate ?? 0,
  url: r2Url(f.heroKey),
}));

const metrics = [
  { value: "2004", label: "설립" },
  { value: "4", label: "계열 회사" },
  { value: "4", label: "사업 분야" },
  { value: "No.1", label: "코팅 PO필름 판매" },
];

const divisions = [
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

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-black md:min-h-[680px] lg:min-h-[760px]">
        {/* 배경 영상: 밤 → 낮 */}
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
        {/* 가독성 스크림 — 밤·낮 모두 흰 텍스트 대비 확보 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent"
        />

        <div className="relative mx-auto w-full max-w-[1600px] px-6 py-20 lg:px-10">
          <p className="fade-rise text-[12px] font-semibold tracking-[0.22em] text-white">
            SAEMI GROUP
          </p>
          <h1 className="fade-rise mt-6 max-w-[14ch] text-[44px] md:text-[60px] lg:text-[72px] font-semibold leading-[1.04] tracking-display text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
            프리미엄 종합농자재
          </h1>
          <p
            className="fade-rise mt-7 max-w-[42ch] text-[20px] md:text-[24px] font-medium leading-snug text-white/90"
            style={{ animationDelay: "90ms" }}
          >
            농사에 필요한 모든 것,
            <br />
            필름 · 부자재 · 농약 · 기계까지 새미그룹이 공급합니다.
          </p>
          <div
            className="fade-rise mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: "150ms" }}
          >
            <Link href="/po-film" className="apple-button apple-button-primary">
              제품 보기
            </Link>
            <Link
              href="/contact/quote"
              className="apple-button border border-white/60 text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              견적 문의
            </Link>
          </div>

          <dl
            className="fade-rise mt-16 grid max-w-[820px] grid-cols-2 gap-x-10 gap-y-7 border-t border-white/25 pt-9 sm:grid-cols-4"
            style={{ animationDelay: "220ms" }}
          >
            {metrics.map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd className="font-tech text-[32px] font-semibold leading-none text-white">
                  {item.value}
                </dd>
                <p className="mt-2 text-[12px] font-semibold text-white/70">
                  {item.label}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft">
        <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[760px] text-center apple-reveal">
            <p className="font-tech text-[12px] font-semibold text-spring-blue">
              BUSINESS AREAS
            </p>
            <h2 className="mt-4 text-[32px] md:text-[48px] lg:text-[60px] font-semibold leading-[1.08] tracking-display text-ink-invert">
              농업 전반을 아우르는
              <br />
              4개의 핵심 사업부
            </h2>
            <p className="mt-6 text-[20px] leading-relaxed text-soil-brown-soft">
              새미그룹은 농업 전반에 걸친 다양한 농업경영인들의 필요를 적시에
              충족시키고, 최고의 품질과 가치를 제공하기 위해 4개의 농산업 특화
              기업을 운영하고 있습니다.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {divisions.map((division) => (
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
                  <h3 className="mt-3 text-[24px] font-semibold leading-tight text-ink-invert">
                    {division.title}
                  </h3>
                  <p className="mt-3 min-h-[5rem] text-[16px] leading-relaxed text-soil-brown-soft">
                    {division.body}
                  </p>
                  <span className="mt-5 inline-flex text-[16px] font-semibold text-spring-blue">
                    {division.title} 보기
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MonthlyProductSlider
        heroUrls={[r2Url(diastar.hero.src), r2Url(misanranDiastar.hero.src)]}
      />

      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 pt-20 lg:grid-cols-12 lg:px-10 lg:pt-28">
          <div className="lg:col-span-8">
            <p className="font-tech text-[12px] font-semibold text-spring-blue">
              CONTACT
            </p>
            <h2 className="mt-4 max-w-[18ch] text-[36px] md:text-[56px] lg:text-[72px] font-semibold leading-[1.08] tracking-display text-ink-invert">
              나에게 맞는 제품 알아보기
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-3 lg:col-span-3 lg:col-start-10">
            <Link href="/resources" className="apple-button apple-button-secondary">
              카탈로그 보기
            </Link>
            <Link href="/contact/quote" className="apple-button apple-button-primary">
              견적 문의
            </Link>
          </div>
        </div>

        <div className="mt-14 pb-20 lg:pb-28">
          <BestFarmsMarquee farms={farmMarqueeCards} />
          <p className="font-farm-quote mx-auto mt-14 max-w-[52ch] px-6 text-center text-[20px] md:text-[26px] leading-relaxed text-soil-brown">
            전국 곳곳에서 다양한 작물을 재배하는 농가들이
            <br />
            새미의 제품을 신뢰하며 선택하고 있습니다.
          </p>
        </div>
      </section>
    </>
  );
}
