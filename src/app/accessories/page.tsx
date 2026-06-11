import type { Metadata } from "next";
import Link from "next/link";
import { getAccessories } from "@/lib/products";
import ProductIndex from "@/components/product/ProductIndex";
import type { AccessoryCategory } from "@/content/products/accessories";

export const metadata: Metadata = {
  title: "하우스 부자재",
  description:
    "차광·차열 필름과 네트, 방충망, 방초시트, 보수테이프, 사일리지 랩까지 — 스마트팜의 매일을 받치는 12종.",
};

const GROUPS: { key: AccessoryCategory; label: string; sublabel: string }[] = [
  { key: "shading", label: "차광·차열 필름", sublabel: "Parasol · Parasol Cool" },
  { key: "screen", label: "스크린", sublabel: "산산커튼 · 스카이배리어" },
  { key: "net", label: "차광·차열 네트", sublabel: "후아후아 · 라쿠라쿠" },
  { key: "insect", label: "방충망", sublabel: "산산네트 · 크로스레드" },
  { key: "weed", label: "방초시트", sublabel: "아그리시트" },
  { key: "repair", label: "보수·보강 테이프", sublabel: "Repair Tapes" },
  { key: "silage", label: "사일리지 랩", sublabel: "한우밥" },
  { key: "string", label: "끈필름·기타", sublabel: "한끈" },
];

export default function AccessoriesHub() {
  const all = getAccessories();
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-28 lg:px-10 lg:pt-36">
          <p className="font-tech text-[12px] font-semibold text-spring-blue">
            ACCESSORIES
          </p>
          <h1 className="mt-5 max-w-[14ch] text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert">
            하우스 부자재를 고르세요.
          </h1>
          <p className="mt-7 max-w-[36rem] text-[20px] leading-relaxed text-soil-brown-soft">
            차광·차열 필름과 네트, 방충망, 방초시트, 보수테이프, 사일리지 랩과
            끈필름까지 — 일본 다이아텍스·와이드크로스 등 글로벌 파트너의
            라인업을 한 곳에서 만납니다.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/resources" className="apple-button apple-button-primary">
              카탈로그 보기
            </Link>
            <Link href="/contact/quote" className="apple-button apple-button-secondary">
              견적 문의
            </Link>
          </div>
        </div>
      </section>

      {GROUPS.map((g, idx) => {
        const list = all.filter((a) => a.accessoryCategory === g.key);
        if (list.length === 0) return null;
        return (
          <section
            key={g.key}
            className={`px-6 py-16 lg:px-10 lg:py-20 ${
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
                <p className="hidden text-[12px] text-soil-brown-mute md:block">
                  {list.length}종
                </p>
              </div>
              <ProductIndex products={list} hrefBase="/accessories" withTier={false} />
            </div>
          </section>
        );
      })}
    </div>
  );
}
