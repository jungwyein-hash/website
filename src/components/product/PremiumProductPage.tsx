import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";
import ProductHero from "@/components/product/ProductHero";
import StickySubNav from "@/components/product/StickySubNav";
import PremiumGallery, { type GallerySlide } from "@/components/product/PremiumGallery";
import PremiumFarmsCarousel, { type FarmCard } from "@/components/product/PremiumFarmsCarousel";
import HeroVideoBg from "@/components/product/HeroVideoBg";
import FeatureExplorer, { type ExplorerFeature } from "@/components/product/FeatureExplorer";
import SelectProcess from "@/components/product/SelectProcess";
import { r2Url } from "@/lib/r2-image";
import type { MediaRef, Product } from "@/lib/types";

const SUB_NAV = [
  { id: "overview", label: "소개" },
  { id: "highlights", label: "특징" },
  { id: "specs", label: "사양" },
  { id: "farms", label: "사용 농가" },
];

export default function PremiumProductPage({ product }: { product: Product }) {
  const farms = product.bestFarms ?? [];
  const introText = product.intro?.ko ?? product.tagline.ko;

  const introImages: MediaRef[] = (() => {
    if (product.gallery && product.gallery.length > 0) return product.gallery;
    const seen = new Set<string>();
    const list: MediaRef[] = [];
    for (const m of [product.hero, ...farms.map((f) => f.hero)]) {
      if (!seen.has(m.src)) {
        seen.add(m.src);
        list.push(m);
      }
    }
    return list;
  })();

  const introSlides: GallerySlide[] = introImages.map((m) => {
    const isAbsolute =
      m.src.startsWith("http://") ||
      m.src.startsWith("https://") ||
      m.src.startsWith("/");
    return {
      url: isAbsolute ? m.src : r2Url(m.src),
      alt: m.alt,
      caption: m.caption,
      year: m.year,
      region: m.region,
    };
  });

  const farmCards: FarmCard[] = farms.map((f) => {
    const isAbs = f.hero.src.startsWith("http") || f.hero.src.startsWith("/");
    return {
      slug: f.slug,
      farmer: f.farmer,
      region: f.region,
      crop: f.crop,
      product: product.name.ko,
      note: f.note,
      round: f.round,
      imageTransform: f.imageTransform,
      hero: {
        url: isAbs ? f.hero.src : r2Url(f.hero.src),
        alt: f.hero.alt,
      },
    };
  });

  const resolve = (s: string) =>
    s.startsWith("http") || s.startsWith("/") ? s : r2Url(s);
  const hasVideo = !!product.heroVideo?.src;
  const videoSrc = product.heroVideo?.src ? resolve(product.heroVideo.src) : null;
  const videoPoster = product.heroVideo?.poster
    ? resolve(product.heroVideo.poster)
    : undefined;

  // 특징 탐색기 — 각 하이라이트에 대표 이미지를 부여(미지정 시 갤러리/히어로에서 순환).
  const featureImagePool = [
    ...(product.gallery ?? []),
    product.hero,
  ];
  const explorerFeatures: ExplorerFeature[] = product.highlights.map((h, i) => {
    const fallback = featureImagePool[i % featureImagePool.length] ?? product.hero;
    return {
      title: h.title,
      body: h.body,
      image: resolve(h.image ?? fallback.src),
      alt: h.image ? h.title : fallback.alt,
    };
  });

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name.ko,
    category: "PO필름 · 프리미엄",
    brand: { "@type": "Brand", name: "새미그룹" },
    description: product.tagline.ko,
    manufacturer: { "@type": "Organization", name: "새미그룹" },
  };

  return (
    <article className="flex flex-col gap-3 bg-paper-soft text-ink-invert">
      <ProductHero product={product} textOnly />
      <section className="bg-white">
        <div className="relative w-full overflow-hidden bg-paper-soft min-h-[640px] md:min-h-[720px] lg:min-h-[800px]">
          {hasVideo ? (
            <HeroVideoBg src={videoSrc!} poster={videoPoster} />
          ) : (
            <SmartImage
              src={product.hero.src}
              alt={product.hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
        </div>
      </section>
      <StickySubNav
        items={SUB_NAV}
        productName={product.name.ko}
        variant="premium"
        className="-my-3"
        catalogHref={
          product.catalogPdf
            ? `/api/r2/asset?key=${encodeURIComponent(product.catalogPdf)}`
            : undefined
        }
      />

      <section id="overview" className="bg-white">
        <div className="mx-auto flex max-w-[880px] flex-col items-center px-6 py-20 text-center lg:px-10 lg:py-28">
          <p className="font-tech text-[12px] font-semibold text-spring-blue">
            PREMIUM
          </p>
          <h2 className="font-premium mt-6 whitespace-pre-line text-[32px] md:text-[44px] lg:text-[56px] font-bold leading-[1.25] text-soil-brown text-balance">
            {product.headline?.ko ?? product.tagline.ko}
          </h2>
          <p className="mt-8 max-w-[60ch] text-[20px] md:text-[22px] leading-relaxed text-soil-brown-soft">
            {introText}
          </p>

          <dl className="mt-10 grid w-full grid-cols-1 gap-px overflow-hidden rounded-[8px] border border-line bg-line md:grid-cols-3">
            {product.bigSpecs.slice(0, 3).map((s) => (
              <div key={s.label} className="bg-white p-5">
                <dt className="text-[12px] font-semibold text-soil-brown-mute">
                  {s.label}
                </dt>
                <dd className="font-tech mt-3 text-[32px] font-semibold leading-none text-ink-invert">
                  {s.value}
                  {s.unit && (
                    <span className="ml-2 text-[16px] text-soil-brown-soft">
                      {s.unit}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="highlights"
        className="bg-paper-warm px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-24 text-center">
            <p className="font-tech text-[12px] font-semibold text-spring-blue">
              Highlights
            </p>
            <h2 className="mt-4 text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-[1.14] tracking-display text-soil-brown">
              제품 특징
            </h2>
          </div>
          <FeatureExplorer features={explorerFeatures} />
        </div>
      </section>

      {product.fullSpecs && product.fullSpecs.length > 0 && (
        <section id="specs" className="bg-white">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-3">
            <p className="font-tech text-[12px] font-semibold text-spring-blue">
              SPECS
            </p>
            <h2 className="font-premium mt-4 text-[32px] font-bold text-soil-brown">
              제품 사양
            </h2>
          </div>
          <div className="lg:col-span-8 lg:col-start-5 space-y-12">
            {product.fullSpecs.map((g) => (
              <div key={g.group}>
                <p className="mb-4 text-[16px] font-semibold text-ink-invert">
                  {g.group}
                </p>
                <dl className="border-t border-line">
                  {g.rows.map(([k, v]) => (
                    <div
                      key={k}
                      className="grid grid-cols-1 gap-1 border-b border-line py-4 md:grid-cols-[180px_1fr]"
                    >
                      <dt className="text-[16px] text-soil-brown-mute">{k}</dt>
                      <dd className="text-[16px] leading-relaxed text-soil-brown">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          </div>
        </section>
      )}

      {introSlides.length > 0 && (
        <section className="bg-paper-warm py-20 lg:py-28">
          <div className="mx-auto mb-24 max-w-[1440px] px-6 text-center lg:px-10">
            <p className="font-tech text-[12px] font-semibold text-spring-blue">
              © Photograph by SAEMI Group
            </p>
            <h2 className="mt-4 text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-[1.14] tracking-display text-soil-brown">
              농가 현장 사진
            </h2>
          </div>
          <PremiumGallery slides={introSlides} bleed />
        </section>
      )}

      {farms.length > 0 && (
        <section id="farms" className="bg-white px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="font-tech text-[12px] font-semibold text-spring-blue">
                  BEST FARMS
                </p>
              </div>
              <div className="lg:col-span-8 lg:col-start-5">
                <h2 className="font-premium text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-[1.14] text-soil-brown">
                  우수농가 사용 사례
                </h2>
                <p className="mt-5 max-w-[58ch] text-[16px] leading-relaxed text-soil-brown-soft">
                  제품을 실제로 사용하는 농가의 작물, 지역, 한줄 평을 확인할 수
                  있습니다.
                </p>
              </div>
            </div>

            <PremiumFarmsCarousel farms={farmCards} />

            <div className="mt-12">
              <Link
                href="/best-farms"
                className="apple-button apple-button-secondary"
              >
                우수농가 더 보기
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="bg-paper-warm px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-tech text-[12px] font-semibold text-spring-blue">
              CONTACT
            </p>
            <h2 className="font-premium mt-4 text-[32px] md:text-[44px] lg:text-[56px] font-bold leading-[1.14] text-soil-brown">
              하우스 조건에 맞는지 확인해 보세요.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-3 lg:col-span-4 lg:col-start-9">
            {product.catalogPdf && (
              <a
                href={`/api/r2/asset?key=${encodeURIComponent(product.catalogPdf)}`}
                className="apple-button apple-button-secondary"
              >
                카탈로그
              </a>
            )}
            <Link href="/contact/quote" className="apple-button apple-button-primary">
              견적 문의
            </Link>
            <Link href="/po-film#premium" className="apple-button apple-button-secondary">
              다른 프리미엄 보기
            </Link>
          </div>
        </div>
      </section>

      <SelectProcess />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
    </article>
  );
}
