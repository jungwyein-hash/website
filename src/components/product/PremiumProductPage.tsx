import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";
import StickySubNav from "@/components/product/StickySubNav";
import PremiumGallery, { type GallerySlide } from "@/components/product/PremiumGallery";
import PremiumFarmsList, { type FarmEntry } from "@/components/product/PremiumFarmsList";
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
  const leadShort = product.tagline.ko.split(".")[0].trim();
  const originLabel = product.origin?.replace(/\s*·\s*/g, " / ");

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


  const resolve = (s: string) =>
    s.startsWith("http") || s.startsWith("/") ? s : r2Url(s);
  const hasVideo = !!product.heroVideo?.src;
  const videoSrc = product.heroVideo?.src ? resolve(product.heroVideo.src) : null;
  const videoPoster = product.heroVideo?.poster
    ? resolve(product.heroVideo.poster)
    : undefined;

  // 우수농가 상세 리스트 — 포트레이트는 hero, 사진 스트립은 gallery(포트레이트 중복 제외)
  const farmEntries: FarmEntry[] = farms.map((f) => {
    const portrait = { url: resolve(f.hero.src), alt: f.hero.alt };
    const photos = (f.gallery ?? [])
      .map((m) => ({ url: resolve(m.src), alt: m.alt }))
      .filter((p) => p.url !== portrait.url);
    return {
      slug: f.slug,
      farmer: f.farmer,
      crop: f.crop,
      region: f.region,
      product: product.name.ko,
      round: f.round,
      note: f.note,
      portrait,
      photos,
    };
  });

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
      {/* 히어로 + 개요 전환 그룹 — 스크롤 시 개요 패널이 핀 고정된 히어로 위로 상승 */}
      <div className="relative">
      {/* 풀블리드 동영상 히어로 — 좌측하단 개요 · 우측하단 문의 (Apple식) */}
      <section className="sticky top-14 z-0 w-full overflow-hidden bg-soil-brown h-[calc(100svh-3.5rem)] min-h-[560px]">
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
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0">
          <div className="flex flex-col gap-6 px-[max(1.5rem,calc((100vw-1680px)/2))] pb-12 text-white lg:flex-row lg:items-end lg:justify-between lg:px-[max(2.5rem,calc((100vw-1680px)/2))] lg:pb-16">
            <div>
              {originLabel && (
                <span className="font-tech inline-flex border border-white/40 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur">
                  {originLabel}
                </span>
              )}
              <h1
                style={{ letterSpacing: "0.02em" }}
                className="mt-4 max-w-[16ch] text-[40px] md:text-[64px] lg:text-[80px] font-bold leading-[1.05] text-white"
              >
                {product.name.ko}
              </h1>
              <p className="font-premium mt-3 max-w-[40ch] text-[18px] md:text-[22px] leading-snug text-white/85">
                {`“${leadShort}”`}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              {product.catalogPdf && (
                <a
                  href={`/api/r2/asset?key=${encodeURIComponent(product.catalogPdf)}`}
                  className="inline-flex min-h-[48px] min-w-[120px] items-center justify-center border border-premium-cream/50 px-6 text-[16px] font-semibold leading-none text-premium-cream transition-colors hover:bg-white/10"
                >
                  카탈로그
                </a>
              )}
              <Link
                href="/contact/quote"
                className="inline-flex min-h-[48px] min-w-[120px] items-center justify-center bg-premium-cream px-6 text-[16px] font-semibold leading-none text-soil-green transition-transform duration-200 hover:-translate-y-px active:scale-[0.98]"
              >
                견적 문의
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 개요 — 글라스 패널이 히어로 위로 미끄러져 올라옴 */}
      <section
        id="overview"
        className="relative z-10 flex min-h-[calc(100svh-3.5rem)] items-center bg-white/75 backdrop-blur-2xl"
      >
        <div className="mx-auto flex w-full max-w-[880px] flex-col items-center px-6 py-20 text-center lg:px-10 lg:py-28">
          <p className="font-tech text-[12px] font-semibold text-spring-blue">
            PREMIUM
          </p>
          <h2 className="mt-6 whitespace-pre-line text-[32px] md:text-[44px] lg:text-[56px] font-bold leading-[1.25] tracking-display text-soil-brown text-balance">
            {product.headline?.ko ?? product.tagline.ko}
          </h2>
          <p className="mt-8 max-w-[60ch] text-[20px] md:text-[22px] leading-relaxed text-soil-brown-soft">
            {introText}
          </p>

          <dl className="mt-10 grid w-full grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
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
      </div>
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

      {introSlides.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
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

      {product.fullSpecs && product.fullSpecs.length > 0 && (
        <section id="specs" className="bg-white px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-tech text-[12px] font-semibold text-spring-blue">
              SPECS
            </p>
            <h2 className="mt-4 text-[32px] font-bold tracking-display text-soil-brown">
              제품 사양
            </h2>
          </div>
          <div className="lg:col-span-8 lg:col-start-5 space-y-12">
            {product.fullSpecs.map((g) => (
              <div key={g.group}>
                <p className="font-jp mb-4 text-[16px] font-semibold text-ink-invert">
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

      {farms.length > 0 && (
        <section id="farms" className="bg-white px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 text-center">
              <p className="font-tech text-[12px] font-semibold text-spring-blue">
                BEST FARMS
              </p>
              <h2 className="mt-4 text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-[1.14] tracking-display text-soil-brown">
                우수농가 사용 사례
              </h2>
              <p className="mx-auto mt-5 max-w-[58ch] text-[16px] leading-relaxed text-soil-brown-soft">
                제품을 실제로 사용하는 농가의 작물, 지역, 한줄 평을 확인할 수
                있습니다.
              </p>
            </div>

            <PremiumFarmsList farms={farmEntries} />

            <div className="mt-12">
              <Link
                href="/best-farms"
                className="apple-button apple-button-secondary !rounded-none"
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
                className="apple-button apple-button-secondary !rounded-none"
              >
                카탈로그
              </a>
            )}
            <Link href="/contact/quote" className="apple-button apple-button-primary !rounded-none">
              견적 문의
            </Link>
            <Link href="/po-film#premium" className="apple-button apple-button-secondary !rounded-none">
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
