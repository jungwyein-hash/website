import Link from "next/link";
import type { Metadata } from "next";
import { getPoFilmsByTier } from "@/lib/products";
import ProductIndex from "@/components/product/ProductIndex";
import { r2Url } from "@/lib/r2-image";

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

export default function PoFilmHub() {
  const premium = getPoFilmsByTier("premium");
  const standard = getPoFilmsByTier("standard");

  return (
    <>
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

      <section
        id="premium"
        className="border-y border-line bg-paper-warm px-6 py-20 lg:px-10 lg:py-28"
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
    </>
  );
}
