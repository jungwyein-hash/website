import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ProductHero from "@/components/product/ProductHero";
import StickySubNav from "@/components/product/StickySubNav";
import BigSpec from "@/components/product/BigSpec";
import SpecTable from "@/components/product/SpecTable";
import SelectProcess from "@/components/product/SelectProcess";
import { getAccessory, getAccessoryStaticParams, getAccessories } from "@/lib/products";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAccessoryStaticParams();
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const p = getAccessory(slug);
  if (!p) return {};
  return {
    title: p.name.ko,
    description: p.tagline.ko,
  };
}

const SUB_NAV = [
  { id: "overview", label: "개요" },
  { id: "highlights", label: "특장점" },
  { id: "specs", label: "사양" },
  { id: "related", label: "관련 제품" },
];

export default async function AccessoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getAccessory(slug);
  if (!product) notFound();

  const related = getAccessories()
    .filter((a) => a.accessoryCategory === product.accessoryCategory && a.slug !== product.slug)
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
            <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute">소개</p>
          </div>
          <p className="lg:col-span-8 lg:col-start-5 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown">
            {product.intro.ko}
          </p>
        </section>
      )}

      <section id="highlights" className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-3">
            <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute">Highlights</p>
          </div>
          <h2 className="lg:col-span-8 lg:col-start-5 text-[28px] md:text-[36px] lg:text-[44px] tracking-normal max-w-[20ch]">
            왜 {product.name.ko}인가.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {product.highlights.map((h) => (
            <article key={h.title} className="border-t border-line pt-6">
              <h3 className="text-[20px] tracking-normal mb-3">{h.title}</h3>
              <p className="text-[16px] leading-[1.85] text-soil-brown-soft max-w-[40ch]">{h.body}</p>
            </article>
          ))}
        </div>
      </section>

      {product.fullSpecs && product.fullSpecs.length > 0 && (
        <section id="specs" className="bg-paper-soft border-y border-line">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute">Specifications</p>
              <h2 className="mt-4 text-[28px] tracking-normal">사양표</h2>
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <SpecTable groups={product.fullSpecs} />
            </div>
          </div>
        </section>
      )}

      <section id="related" className="border-t border-line bg-paper-soft text-ink-invert">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-4">다음 단계</p>
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] tracking-normal leading-[1.2]">
              {product.name.ko},
              <br />가까운 새미대리점에서 만나보세요.
            </h2>
            <div className="mt-8 flex flex-wrap gap-8 text-[16px]">
              <Link href="/contact/quote" className="text-spring-blue hover:opacity-80">견적 문의 →</Link>
              <Link href="/contact/dealers" className="text-soil-brown-soft hover:text-spring-blue">대리점 찾기</Link>
            </div>
          </div>
          {related.length > 0 && (
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-4">관련 제품</p>
              <ul className="divide-y divide-line border-y border-line">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/accessories/${r.slug}`} className="flex items-baseline justify-between py-4">
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

      <SelectProcess />
    </>
  );
}
