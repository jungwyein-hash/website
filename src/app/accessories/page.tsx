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
    <>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-20">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
          Accessories
        </p>
        <h1 className="text-[40px] md:text-[64px] xl:text-[80px] leading-[1.05] tracking-normal max-w-[16ch]">
          하우스 부자재를 고르세요.
        </h1>
        <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
          차광·차열 필름과 네트, 방충망, 방초시트, 보수테이프, 사일리지 랩과
          끈필름까지 — 일본 다이아텍스·와이드크로스 등 글로벌 파트너의
          라인업을 한 곳에서 만납니다.
        </p>
        <div className="mt-10">
          <Link href="/resources" className="link-underline text-[16px]">
            카탈로그 다운로드 →
          </Link>
        </div>
      </section>

      {GROUPS.map((g) => {
        const list = all.filter((a) => a.accessoryCategory === g.key);
        if (list.length === 0) return null;
        return (
          <section
            key={g.key}
            className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16 border-t border-line"
          >
            <div className="flex items-baseline justify-between mb-10">
              <div>
                <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-3">
                  {g.sublabel}
                </p>
                <h2 className="text-[24px] md:text-[32px] lg:text-[36px] tracking-normal">
                  {g.label}
                </h2>
              </div>
              <p className="hidden md:block text-[12px] text-soil-brown-mute">
                {list.length}종
              </p>
            </div>
            <ProductIndex products={list} hrefBase="/accessories" withTier={false} />
          </section>
        );
      })}
    </>
  );
}
