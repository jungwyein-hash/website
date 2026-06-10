import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";
import ProductHero from "@/components/product/ProductHero";
import StickySubNav from "@/components/product/StickySubNav";
import BigSpec from "@/components/product/BigSpec";
import SpecTable from "@/components/product/SpecTable";
import PremiumProductPage from "@/components/product/PremiumProductPage";
import SelectProcess from "@/components/product/SelectProcess";
import { getPoFilm, getPoFilmStaticParams, getPoFilmsByTier } from "@/lib/products";
import type { Tier } from "@/lib/types";

type Params = Promise<{ tier: string; slug: string }>;

export function generateStaticParams() {
  return getPoFilmStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { tier, slug } = await params;
  const product = getPoFilm(tier as Tier, slug);
  if (!product) return {};

  return {
    title: product.name.ko,
    description: product.tagline.ko,
    alternates: { canonical: `/po-film/${tier}/${slug}` },
    openGraph: {
      title: `${product.name.ko} | 새미그룹 PO필름`,
      description: product.tagline.ko,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

const SUB_NAV = [
  { id: "overview", label: "소개" },
  { id: "highlights", label: "특징" },
  { id: "specs", label: "사양" },
  { id: "gallery", label: "현장" },
  { id: "related", label: "관련 제품" },
];

export default async function ProductPage({ params }: { params: Params }) {
  const { tier, slug } = await params;
  if (tier !== "premium" && tier !== "standard") notFound();

  const product = getPoFilm(tier, slug);
  if (!product) notFound();

  if (tier === "premium") {
    return <PremiumProductPage product={product} />;
  }

  const related = getPoFilmsByTier(tier)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);
  const introText = product.intro?.ko ?? product.tagline.ko;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name.ko,
    category: "PO필름",
    brand: { "@type": "Brand", name: "새미그룹" },
    description: product.tagline.ko,
    manufacturer: { "@type": "Organization", name: "새미그룹" },
  };

  return (
    <>
      <ProductHero product={product} />
      <StickySubNav items={SUB_NAV} productName={product.name.ko} />

      {product.highlights.length > 0 && (
        <section aria-label="하이라이트 한눈에" className="border-b border-line bg-white">
          <div className="mx-auto max-w-[1440px] px-6 py-9 lg:px-10 lg:py-11">
            <p className="font-tech text-[12px] font-semibold text-spring-blue">
              하이라이트 한눈에
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {product.highlights.slice(0, 6).map((h) => (
                <li
                  key={h.title}
                  className="flex items-baseline gap-3 text-[18px] md:text-[20px] leading-snug text-ink-invert"
                >
                  <span aria-hidden className="text-spring-blue">
                    —
                  </span>
                  <span className="font-semibold">{h.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section id="overview" aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="sr-only">
          제품 소개
        </h2>
        <BigSpec specs={product.bigSpecs} />
      </section>

      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-3">
          <p className="font-tech text-[12px] font-semibold text-spring-blue">
            OVERVIEW
          </p>
        </div>
        <div className="lg:col-span-8 lg:col-start-5">
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-semibold leading-[1.14] text-ink-invert text-balance">
            {product.tagline.ko}
          </h2>
          <p className="mt-8 max-w-[60ch] text-[20px] md:text-[22px] leading-relaxed text-soil-brown-soft">
            {introText}
          </p>
        </div>
      </section>

      <section
        id="highlights"
        className="border-y border-line bg-paper-soft px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="font-tech text-[12px] font-semibold text-spring-blue">
                POINTS
              </p>
            </div>
            <h2 className="lg:col-span-8 lg:col-start-5 text-[32px] md:text-[44px] lg:text-[56px] font-semibold leading-[1.14] text-ink-invert">
              {product.name.ko}의 주요 특징
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {product.highlights.map((h, index) => (
              <article key={h.title} className="surface-panel bg-white p-6">
                <p className="font-tech text-[12px] font-semibold text-spring-blue">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-[24px] font-semibold leading-tight text-ink-invert">
                  {h.title}
                </h3>
                <p className="mt-3 max-w-[44ch] text-[16px] leading-relaxed text-soil-brown-soft">
                  {h.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {product.fullSpecs && product.fullSpecs.length > 0 && (
        <section id="specs" className="bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
            <div className="lg:col-span-3">
              <p className="font-tech text-[12px] font-semibold text-spring-blue">
                SPECS
              </p>
              <h2 className="mt-4 text-[32px] font-semibold text-ink-invert">
                제품 사양
              </h2>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <SpecTable groups={product.fullSpecs} />
            </div>
          </div>
        </section>
      )}

      {product.gallery && product.gallery.length > 0 && (
        <section
          id="gallery"
          className="border-y border-line bg-paper-soft px-6 py-20 lg:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-8">
              <p className="font-tech text-[12px] font-semibold text-spring-blue">
                FIELD
              </p>
              <h2 className="mt-4 text-[32px] md:text-[44px] lg:text-[56px] font-semibold leading-[1.14] text-ink-invert">
                현장 사진
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {product.gallery.map((g, i) => (
                <figure
                  key={g.src}
                  className={i % 3 === 0 ? "md:col-span-2" : ""}
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[8px] bg-line">
                    <SmartImage
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {g.caption && (
                    <figcaption className="mt-3 text-[12px] text-soil-brown-mute">
                      {g.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="related" className="bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="lg:col-span-5">
            <p className="font-tech text-[12px] font-semibold text-spring-blue">
              NEXT
            </p>
            <h2 className="mt-4 text-[32px] md:text-[44px] lg:text-[56px] font-semibold leading-[1.14] text-ink-invert">
              구매 전에 상담해 보세요.
            </h2>
            <p className="mt-5 max-w-[42ch] text-[16px] leading-relaxed text-soil-brown-soft">
              지역, 작물, 하우스 조건을 알려주시면 제품 선택을 도와드립니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/quote" className="apple-button apple-button-primary">
                견적 문의
              </Link>
              <Link
                href="/contact/dealers"
                className="apple-button apple-button-secondary"
              >
                대리점 찾기
              </Link>
              {product.catalogPdf && (
                <a
                  href={`/api/r2/asset?key=${encodeURIComponent(product.catalogPdf)}`}
                  className="apple-button apple-button-secondary"
                >
                  카탈로그
                </a>
              )}
            </div>
          </div>

          {related.length > 0 && (
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="mb-4 text-[16px] font-semibold text-soil-brown-mute">
                함께 볼 제품
              </p>
              <ul className="divide-y divide-line border-y border-line">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/po-film/${r.tier}/${r.slug}`}
                      className="flex items-center justify-between gap-6 py-5"
                    >
                      <span className="text-[20px] font-semibold text-ink-invert">
                        {r.name.ko}
                      </span>
                      <span className="text-[16px] font-semibold text-spring-blue">
                        보기
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <SelectProcess />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
    </>
  );
}
