import SmartImage from "@/components/media/SmartImage";
import Link from "next/link";
import type { Product } from "@/lib/types";

export default function ProductHero({
  product,
  textOnly = false,
}: {
  product: Product;
  /** true면 우측 이미지 컬럼을 빼고 텍스트만 — 풀폭 히어로 이미지를 아래 별도 섹션에 둘 때 */
  textOnly?: boolean;
}) {
  const isPremium = product.tier === "premium";
  const lead = product.tagline.ko;
  // 프리미엄 히어로 오버라인 — 태그라인 첫 문장만, 제목 위 고운바탕체
  const leadShort = lead.split(".")[0].trim();
  // origin 칩이 출처를 이미 담고 있으면 같은 뜻의 뱃지는 중복이므로 숨긴다.
  const badges = (product.badges ?? []).filter(
    (b) => !product.origin || !product.origin.includes(b),
  );

  const metaRow = (extra: string) => (
    <div className={`flex flex-wrap items-center gap-2 ${extra}`}>
      {badges.map((b) => (
        <span
          key={b}
          className="rounded-full border border-line bg-paper-soft px-3 py-1 text-[12px] font-semibold text-soil-brown-soft"
        >
          {b}
        </span>
      ))}
      {product.origin && (
        <span
          className={
            isPremium
              ? "font-tech border border-soil-green/40 bg-soil-green/8 px-3 py-1 text-[12px] font-semibold text-soil-green"
              : "font-tech rounded-full border border-spring-blue/22 bg-spring-blue/8 px-3 py-1 text-[12px] font-semibold text-spring-blue"
          }
        >
          {isPremium ? product.origin.replace(/\s*·\s*/g, " / ") : product.origin}
        </span>
      )}
    </div>
  );

  return (
    <section className="overflow-hidden bg-white">
      <div
        className={`mx-auto max-w-[1600px] grid-cols-1 gap-12 px-6 lg:px-10 ${
          textOnly
            ? "py-20 lg:py-28"
            : "grid min-h-[70svh] items-center py-16 lg:grid-cols-12 lg:py-20"
        }`}
      >
        {isPremium ? (
          <div className="flex flex-col items-center text-center">
            {metaRow("")}
            <h1
              style={{ letterSpacing: "0.02em" }}
              className="mt-8 max-w-[12ch] text-[48px] md:text-[72px] lg:text-[96px] font-bold leading-[1.05] text-soil-brown"
            >
              {product.name.ko}
            </h1>
            <p className="font-premium mt-6 max-w-[24ch] text-[32px] leading-snug text-soil-brown-soft text-balance">
              {`“${leadShort}”`}
            </p>
          </div>
        ) : (
          <div className={textOnly ? "" : "lg:col-span-5"}>
            {metaRow("mb-6")}
            <h1 className="max-w-[12ch] text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] text-ink-invert">
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
        )}

        {!textOnly && (
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
        )}
      </div>
    </section>
  );
}
