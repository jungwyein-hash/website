import Link from "next/link";
import type { Metadata } from "next";
import { getPoFilms, getPoFilmsByTier } from "@/lib/products";
import ProductIndex from "@/components/product/ProductIndex";
import { r2Url } from "@/lib/r2-image";
import StatStrip from "@/components/viz/StatStrip";
import BarChart from "@/components/viz/BarChart";
import { PO_FILM_SALES, PO_FILM_STATS } from "@/content/group-stats";

export const metadata: Metadata = {
  title: "PO필름",
  description:
    "프리미엄 PO필름과 새미테크 스탠다드 필름을 하우스 조건에 맞게 비교합니다.",
};

// 랜딩에서 옮겨 온 농촌 항공뷰 — PO필름 단지를 보여주는 히어로 영상
const heroVideoSrc = r2Url(
  "design-assets/korea-agriculture/250701-성주-항공뷰/video/exterior-01.mp4",
);
const heroPosterSrc = r2Url(
  "design-assets/korea-agriculture/250701-성주-항공뷰/hero/exterior-01.webp",
);

// 새미테크 — 독자 특허 라인 (메뉴 분류와 동일)
const SAEMITECH_SLUGS = ["sunpower", "coating-cool", "allseason"];

export default function PoFilmHub() {
  const premium = getPoFilmsByTier("premium").filter(
    (p) => !SAEMITECH_SLUGS.includes(p.slug)
  );
  const standard = getPoFilmsByTier("standard").filter(
    (p) => !SAEMITECH_SLUGS.includes(p.slug)
  );
  const saemitech = getPoFilms().filter((p) =>
    SAEMITECH_SLUGS.includes(p.slug)
  );

  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid min-h-[72svh] max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20">
          <div className="lg:col-span-5">
            <p className="font-tech text-[12px] font-semibold text-spring-blue">
              PO FILM
            </p>
            <h1
              className="mt-5 max-w-[12ch] text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] text-ink-invert"
              aria-label="하우스에 맞는 PO필름을 고르세요."
            >
              <span className="block">하우스에 맞는</span>
              <span className="block">PO필름을 고르세요.</span>
            </h1>
            <p className="mt-7 max-w-[36rem] text-[20px] leading-relaxed text-soil-brown-soft">
              보온, 산란, 차열, 분광, 변광 기능을 기준으로 필름을 비교할 수
              있습니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/po-film/compare" className="apple-button apple-button-primary">
                필름 비교
              </Link>
              <Link href="/resources" className="apple-button apple-button-secondary">
                카탈로그
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="apple-reveal overflow-hidden rounded-[8px] bg-paper-soft shadow-[var(--shadow-card)]">
              <div className="relative aspect-[16/10] min-h-[304px]">
                <video
                  className="absolute inset-0 h-full w-full object-cover media-settle"
                  poster={heroPosterSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                >
                  <source src={heroVideoSrc} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 성장 실적 — 카운트업 통계 + 매출 그래프 */}
      <section className="bg-paper-warm px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-tech text-[12px] font-semibold text-spring-blue">
                PERFORMANCE
              </p>
              <h2 className="mt-5 text-[32px] md:text-[44px] font-semibold leading-[1.18] text-ink-invert">
                지속적인 성장,
                <br />
                새미 PO필름.
              </h2>
              <p className="mt-6 max-w-[40ch] text-[16px] leading-relaxed text-soil-brown-soft">
                검증된 품질과 고객 신뢰를 바탕으로 매년 꾸준한 성장을 이어가고
                있습니다. 연간 판매량 기준입니다.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <BarChart bars={PO_FILM_SALES} />
            </div>
          </div>
          <div className="mt-20 border-t border-line pt-14">
            <StatStrip stats={PO_FILM_STATS} />
          </div>
        </div>
      </section>

      <section
        id="premium"
        className="bg-white px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="font-tech text-[12px] font-semibold text-spring-blue">
                PREMIUM
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-5">
              <h2 className="font-premium text-[36px] md:text-[56px] lg:text-[72px] font-bold leading-[1.12] text-soil-brown">
                오래 쓰는 농가를 위한 프리미엄 필름
              </h2>
              <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-soil-brown-soft">
                고부가 작물과 장기 재배 조건에 맞춰 기능을 고를 수 있는
                필름입니다.
              </p>
            </div>
          </div>
          <ProductIndex products={premium} hrefBase="/po-film" />
        </div>
      </section>

      <section
        id="standard"
        className="bg-white px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="font-tech text-[12px] font-semibold text-spring-blue">
                STANDARD
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-5">
              <h2 className="text-[36px] md:text-[56px] lg:text-[72px] font-semibold leading-[1.12] text-ink-invert">
                국내 하우스에 맞춘 스탠다드 필름
              </h2>
              <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-soil-brown-soft">
                현장에서 많이 찾는 기능과 규격을 중심으로 선택할 수 있는
                새미테크 필름입니다.
              </p>
            </div>
          </div>
          <ProductIndex products={standard} hrefBase="/po-film" />
        </div>
      </section>

      {/* 새미테크 — 독자 특허 라인 */}
      <section
        id="saemitech"
        className="bg-spring-blue/[0.05] px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="font-tech text-[12px] font-semibold text-spring-blue">
                SAEMI-TECH
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-5">
              <h2 className="text-[36px] md:text-[56px] lg:text-[72px] font-semibold leading-[1.12] text-ink-invert">
                새미의 독자 기술,
                <br />
                새미테크.
              </h2>
              <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-soil-brown-soft">
                세계특허 분광·차열과 차세대 변광 — 새미의 독자 첨단 기술로
                완성한 차세대 기능성 필름입니다.
              </p>
            </div>
          </div>
          <ProductIndex products={saemitech} hrefBase="/po-film" />
        </div>
      </section>

      {/* 비교와 자료 */}
      <section className="bg-white px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-px border border-line bg-line md:grid-cols-4">
          {[
            { href: "/po-film/compare", title: "필름 비교", desc: "전 라인업 한 표로" },
            { href: "/resources", title: "제품 카탈로그", desc: "PDF 내려받기" },
            { href: "/po-film/by-crop", title: "작물별 추천", desc: "우수농가의 선택" },
            { href: "/po-film/quality", title: "A/S·품질보증", desc: "3단계 검사와 사후관리" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="group bg-white p-8">
              <h3 className="text-[20px] transition-colors group-hover:text-spring-blue">
                {l.title}
              </h3>
              <p className="mt-2 text-[13px] text-soil-brown-mute">{l.desc}</p>
              <span className="mt-5 inline-block link-underline text-[14px]">
                바로 가기 →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
