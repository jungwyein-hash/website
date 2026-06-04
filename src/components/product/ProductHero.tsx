import SmartImage from "@/components/media/SmartImage";
import Link from "next/link";
import type { Product } from "@/lib/types";

export default function ProductHero({ product }: { product: Product }) {
  const isPremium = product.tier === "premium";
  const lead = product.tagline.ko;
  // origin 칩이 출처를 이미 담고 있으면 같은 뜻의 뱃지는 중복이므로 숨긴다.
  const badges = (product.badges ?? []).filter(
    (b) => !product.origin || !product.origin.includes(b),
  );

  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[70svh] max-w-[1600px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-20">
        <div className="lg:col-span-5">
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-line bg-paper-soft px-3 py-1 text-[12px] font-semibold text-soil-brown-soft"
              >
                {b}
              </span>
            ))}
            {product.origin && (
              <span className="font-tech rounded-full border border-spring-blue/22 bg-spring-blue/8 px-3 py-1 text-[12px] font-semibold text-spring-blue">
                {product.origin}
              </span>
            )}
          </div>
          <h1
            className={`max-w-[12ch] text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] text-ink-invert ${
              isPremium ? "font-premium font-bold text-soil-brown" : ""
            }`}
          >
            {product.name.ko}
          </h1>
          <p className="mt-7 max-w-[38rem] text-[22px] leading-snug text-soil-brown-soft text-balance">
            {lead}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {product.catalogPdf && (
              <a
                href={`/api/r2/asset?key=${encodeURIComponent(product.catalogPdf)}`}
                className="apple-button apple-button-primary"
              >
                카탈로그
              </a>
            )}
            <Link
              href="/contact/quote"
              className="apple-button apple-button-secondary"
            >
              견적 문의
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="apple-reveal overflow-hidden rounded-[8px] bg-paper-soft">
            <div className="relative aspect-[16/10] min-h-[304px]">
              <SmartImage
                src={product.hero.src}
                alt={product.hero.alt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="media-settle object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
