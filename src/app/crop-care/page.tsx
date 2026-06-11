import type { Metadata } from "next";
import Link from "next/link";
import { getCropCares, getCropCaresByCategory } from "@/lib/products";
import ProductIndex from "@/components/product/ProductIndex";

export const metadata: Metadata = {
  title: "농약·비료",
  description:
    "더한농이 만드는 작물 보호 솔루션 — 살균제·살충제·제초제·영양제. 팜한농 독점 라인부터 새미 자체 브랜드까지.",
};

const GROUPS = [
  { key: "fungicide" as const, label: "살균제", sublabel: "Fungicide" },
  { key: "insecticide" as const, label: "살충제", sublabel: "Insecticide" },
  { key: "herbicide" as const, label: "제초제", sublabel: "Herbicide" },
  { key: "nutrient" as const, label: "작물 영양제", sublabel: "Nutrient" },
];

export default function CropCareHub() {
  const all = getCropCares();
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-28 lg:px-10 lg:pt-36">
          <p className="font-tech text-[12px] font-semibold text-spring-blue">
            CROP CARE
          </p>
          <h1 className="mt-5 max-w-[14ch] text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert">
            농약·비료 제품을 찾으세요.
          </h1>
          <p className="mt-7 max-w-[36rem] text-[20px] leading-relaxed text-soil-brown-soft">
            더한농의 작물보호제(살균·살충·제초)와 영양제. 팜한농의 독점판매
            라인부터 새미가 직접 만든 자체 브랜드까지 — 한 시즌을 받치는
            솔루션을 한 곳에서.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {GROUPS.map((g) => (
              <a
                key={g.key}
                href={`#${g.key}`}
                className="apple-button apple-button-secondary !min-h-[36px] !px-4 !text-[14px]"
              >
                {g.label} ↓
              </a>
            ))}
          </div>
        </div>
      </section>

      {GROUPS.map((g, idx) => {
        const list = getCropCaresByCategory(g.key);
        if (list.length === 0) return null;
        return (
          <section
            key={g.key}
            id={g.key}
            className={`scroll-mt-20 px-6 py-16 lg:px-10 lg:py-20 ${
              idx % 2 === 0 ? "bg-white" : "bg-paper-warm"
            }`}
          >
            <div className="mx-auto max-w-[1600px]">
              <div className="mb-10 flex items-baseline justify-between">
                <div>
                  <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue">
                    {g.sublabel}
                  </p>
                  <h2 className="mt-4 text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-display text-ink-invert">
                    {g.label}
                  </h2>
                </div>
                <span className="hidden text-[12px] text-soil-brown-mute md:inline">
                  {list.length}종
                </span>
              </div>
              <ProductIndex products={list} hrefBase="/crop-care" withTier={false} />
            </div>
          </section>
        );
      })}

      <section className="bg-white px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <p className="max-w-[60ch] text-[12px] text-soil-brown-mute">
            * 1차에 표시되는 라인업은 대표 6종입니다. 더한농이 공급하는 살균제 ·
            살충제 · 제초제 · 영양제 전체 라인업과 자료는 후속 단계에서 채워집니다.
            필요한 제품의 자세한 자료는 <Link href="/contact/quote" className="link-underline">견적 문의</Link>에서 직접 안내드립니다.
          </p>
        </div>
      </section>

      <p className="sr-only">total {all.length}</p>
    </div>
  );
}
