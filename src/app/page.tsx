import Link from "next/link";
import Supreme7Logo from "@/components/home/Supreme7Logo";
import ProductTileGrid from "@/components/home/ProductTileGrid";
import MonthlyProductSlider from "@/components/product/MonthlyProductSlider";
import BestFarmsMarquee from "@/components/product/BestFarmsMarquee";
import { r2Url } from "@/lib/r2-image";
import { diastar } from "@/content/products/po-film/diastar";
import { misanranDiastar } from "@/content/products/po-film/misanran-diastar";
import { bestFarms } from "@/content/best-farms";

// 슈프림7 공식 히어로 영상 (밤 → 낮 루프)
const heroVideoSrc = r2Url(
  "products/po-film/premium/supreme7/hero/videos/day-to-night-loop.mp4",
);
const supreme7CatalogHref = `/api/r2/asset?key=${encodeURIComponent(
  "company/catalog/supreme7-kr.pdf",
)}`;

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

export default function Home() {
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      {/* 슈프림7 광고 배너 — Apple 랜딩 스타일 (중앙 정렬, 다크, 영상 배경) */}
      <section className="relative isolate flex min-h-[640px] items-center justify-center overflow-hidden bg-black md:min-h-[720px] lg:min-h-[800px]">
        {/* 배경: 슈프림7 히어로 영상 (밤 → 낮 루프) */}
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
        {/* 중앙 카피 가독성 스크림 */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black/35"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/55 to-transparent"
        />

        <div className="relative mx-auto w-full max-w-[880px] px-6 py-24 text-center">
          <p className="fade-rise text-[13px] font-semibold tracking-[0.22em] text-white/70">
            새미 코팅PO · NEW
          </p>
          <h1 className="fade-rise mt-7" style={{ animationDelay: "60ms" }}>
            <Supreme7Logo className="mx-auto w-[260px] text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.35)] md:w-[380px] lg:w-[460px]" />
          </h1>
          <p
            className="fade-rise mx-auto mt-7 max-w-[34ch] text-[22px] md:text-[28px] font-semibold leading-[1.4] text-white text-balance"
            style={{ animationDelay: "130ms" }}
          >
            업계 최초 7층 PO필름.
            <br />
            초정밀 코팅 설계, 그리고 최고급 원료.
          </p>
          <p
            className="fade-rise mt-4 text-[15px] text-white/60"
            style={{ animationDelay: "180ms" }}
          >
            2026년, 까다로운 하우스를 위해 태어났습니다.
          </p>
          <div
            className="fade-rise mt-9 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "230ms" }}
          >
            <Link
              href="/po-film/premium/supreme7"
              className="apple-button apple-button-primary"
            >
              자세히 보기
            </Link>
            <a
              href={supreme7CatalogHref}
              className="apple-button border border-white/60 text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              카탈로그 보기
            </a>
          </div>
        </div>
      </section>

      {/* 대표 제품 타일 그리드 — Apple 홈 section-promo 스타일 */}
      <section className="bg-white p-3">
        <ProductTileGrid />
      </section>

      <MonthlyProductSlider
        heroUrls={[r2Url(diastar.hero.src), r2Url(misanranDiastar.hero.src)]}
      />

      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 pt-24 md:pt-32 lg:grid-cols-12 lg:px-10 lg:pt-36">
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

        <div className="mt-16 pb-24 md:mt-20 md:pb-32 lg:pb-36">
          <BestFarmsMarquee farms={farmMarqueeCards} />
          <p className="font-farm-quote mx-auto mt-14 max-w-[52ch] px-6 text-center text-[20px] md:text-[26px] leading-relaxed text-soil-brown">
            전국 곳곳에서 다양한 작물을 재배하는 농가들이
            <br />
            새미의 제품을 신뢰하며 선택하고 있습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
