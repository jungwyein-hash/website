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
    <>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-20">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
          Crop Care
        </p>
        <h1 className="text-[40px] md:text-[64px] xl:text-[80px] leading-[1.05] max-w-[16ch]">
          농약·비료 제품을 찾으세요.
        </h1>
        <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
          더한농의 작물보호제(살균·살충·제초)와 영양제. 팜한농의 독점판매 라인부터
          새미가 직접 만든 자체 브랜드까지 — 한 시즌을 받치는 솔루션을 한 곳에서.
        </p>
        <div className="mt-10 flex flex-wrap gap-8 text-[16px]">
          {GROUPS.map((g) => (
            <a
              key={g.key}
              href={`#${g.key}`}
              className="link-underline"
            >
              {g.label} ↓
            </a>
          ))}
        </div>
      </section>

      {GROUPS.map((g) => {
        const list = getCropCaresByCategory(g.key);
        if (list.length === 0) return null;
        return (
          <section
            key={g.key}
            id={g.key}
            className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16 border-t border-line scroll-mt-20"
          >
            <div className="flex items-baseline justify-between mb-10">
              <div>
                <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-3">
                  {g.sublabel}
                </p>
                <h2 className="text-[24px] md:text-[32px] lg:text-[36px]">
                  {g.label}
                </h2>
              </div>
              <span className="hidden md:inline text-[12px] text-soil-brown-mute">
                {list.length}종
              </span>
            </div>
            <ProductIndex products={list} hrefBase="/crop-care" withTier={false} />
          </section>
        );
      })}

      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 border-t border-line">
        <p className="text-[12px] text-soil-brown-mute max-w-[60ch]">
          * 1차에 표시되는 라인업은 대표 6종입니다. 더한농이 공급하는 살균제 ·
          살충제 · 제초제 · 영양제 전체 라인업과 자료는 후속 단계에서 채워집니다.
          필요한 제품의 자세한 자료는 <Link href="/contact/quote" className="link-underline">견적 문의</Link>에서 직접 안내드립니다.
        </p>
      </section>

      <p className="sr-only">total {all.length}</p>
    </>
  );
}
