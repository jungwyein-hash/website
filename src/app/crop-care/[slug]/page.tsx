import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ProductHero from "@/components/product/ProductHero";
import StickySubNav from "@/components/product/StickySubNav";
import BigSpec from "@/components/product/BigSpec";
import { getCropCare, getCropCareStaticParams, getCropCaresByCategory } from "@/lib/products";

type Params = Promise<{ slug: string }>;

const RESERVED = new Set(["fungicide", "insecticide", "herbicide", "nutrient"]);

export function generateStaticParams() {
  return getCropCareStaticParams().filter((p) => !RESERVED.has(p.slug));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  if (RESERVED.has(slug)) return {};
  const p = getCropCare(slug);
  if (!p) return {};
  return {
    title: p.name.ko,
    description: p.tagline.ko,
    alternates: { canonical: `/crop-care/${slug}` },
    openGraph: {
      title: `${p.name.ko} | 새미그룹`,
      description: p.tagline.ko,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

const SUB_NAV = [
  { id: "overview", label: "개요" },
  { id: "highlights", label: "특장점" },
  { id: "related", label: "관련 제품" },
];

export default async function CropCareProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  if (RESERVED.has(slug)) notFound();
  const product = getCropCare(slug);
  if (!product) notFound();

  const related = getCropCaresByCategory(product.cropCareCategory)
    .filter((c) => c.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <ProductHero product={product} />
      <StickySubNav items={SUB_NAV} productName={product.name.ko} />

      <section id="overview" aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="sr-only">개요</h2>
        <BigSpec specs={product.bigSpecs} />
      </section>

      {product.intro && (
        <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue">소개</p>
          </div>
          <p className="lg:col-span-8 lg:col-start-5 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown">
            {product.intro.ko}
          </p>
        </section>
      )}

      <section id="highlights" className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-3">
            <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue">Highlights</p>
          </div>
          <h2 className="lg:col-span-8 lg:col-start-5 text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-display text-ink-invert max-w-[20ch]">
            왜 {product.name.ko}인가.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {product.highlights.map((h) => (
            <article key={h.title} className="border-t border-line pt-6">
              <h3 className="text-[20px] mb-3">{h.title}</h3>
              <p className="text-[16px] leading-[1.85] text-soil-brown-soft max-w-[40ch]">{h.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="related" className="border-t border-line bg-paper-soft text-ink-invert">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-4">다음 단계</p>
            <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-display text-ink-invert">
              {product.name.ko}의 자료가 필요하신가요?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/quote" className="apple-button apple-button-primary">견적 문의</Link>
              <Link href="/contact/dealers" className="apple-button apple-button-secondary">대리점 찾기</Link>
            </div>
          </div>
          {related.length > 0 && (
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-4">관련 제품</p>
              <ul className="divide-y divide-line border-y border-line">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/crop-care/${r.slug}`} className="flex items-baseline justify-between py-4">
                      <span className="text-[20px] text-ink-invert">{r.name.ko}</span>
                      <span className="text-[12px] tracking-normal uppercase text-soil-brown-mute">보기 →</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
