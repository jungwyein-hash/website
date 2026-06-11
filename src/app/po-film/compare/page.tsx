import type { Metadata } from "next";
import Link from "next/link";
import { getPoFilms } from "@/lib/products";
import BarChart from "@/components/viz/BarChart";

// 프리미엄 라인 경제수명 (년) — 각 제품 카탈로그 기준, 최대 두께 규격
const LIFESPAN_BARS = [
  { label: "다이아스타", value: 5, display: "5년", highlight: true },
  { label: "미산란 다이아스타", value: 5, display: "5년" },
  { label: "이스타 S", value: 5, display: "5년" },
  { label: "미산란 이스타", value: 3, display: "3년" },
  { label: "산삭시아", value: 3, display: "3년" },
];

export const metadata: Metadata = {
  title: "PO필름 비교",
  description: "새미 PO필름 전 라인업의 두께·필름 종류·원산지를 한눈에.",
};

export default function ComparePage() {
  const films = getPoFilms();
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-24">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            Compare
          </p>
          <h1 className="text-[36px] md:text-[48px] lg:text-[64px] font-semibold leading-[1.1] tracking-display text-ink-invert max-w-[18ch]">
            PO필름 비교
          </h1>
          <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            프리미엄과 스탠다드, 코팅과 분광·차열·변광. 작목과 시즌, 시공 조건에
            맞춰 한 줄로 비교합니다.
          </p>

          <div className="mt-16 overflow-x-auto border-y border-line">
            <table className="w-full text-left text-[16px]">
              <thead className="text-[12px] tracking-normal uppercase text-soil-brown-mute">
                <tr className="border-b border-line">
                  <th className="py-4 pr-6 font-normal min-w-[160px]">제품</th>
                  <th className="py-4 pr-6 font-normal">분류</th>
                  <th className="py-4 pr-6 font-normal">필름 종류</th>
                  <th className="py-4 pr-6 font-normal">두께 (mm)</th>
                  <th className="py-4 pr-6 font-normal">원산지</th>
                  <th className="py-4 pr-6 font-normal">배지</th>
                  <th className="py-4 pr-2 font-normal">상세</th>
                </tr>
              </thead>
              <tbody>
                {films.map((p) => (
                  <tr key={p.slug} className="border-b border-line">
                    <td className="py-5 pr-6 text-soil-brown text-[16px]">
                      {p.name.ko}
                    </td>
                    <td className="py-5 pr-6 text-soil-brown-soft">
                      {p.tier === "premium" ? "프리미엄" : "스탠다드"}
                    </td>
                    <td className="py-5 pr-6 text-soil-brown-soft">
                      {p.filmType ?? "—"}
                    </td>
                    <td className="py-5 pr-6 text-soil-brown-soft">
                      {p.thickness?.join(" · ") ?? "—"}
                    </td>
                    <td className="py-5 pr-6 text-soil-brown-soft">
                      {p.origin ?? "—"}
                    </td>
                    <td className="py-5 pr-6 text-soil-brown-soft">
                      {p.badges?.join(" · ") ?? "—"}
                    </td>
                    <td className="py-5 pr-2">
                      <Link
                        href={`/po-film/${p.tier}/${p.slug}`}
                        className="link-underline text-[12px]"
                      >
                        보기 →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-24">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-4">
            Premium Lifespan
          </p>
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-display text-ink-invert">
            프리미엄 필름 경제수명 비교
          </h2>
          <p className="mt-4 max-w-[58ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            한 번 씌우고 얼마나 오래 쓰는가 — 프리미엄 선택의 첫 기준입니다.
            각 제품 카탈로그의 최대 두께 규격 기준입니다.
          </p>
          <div className="mt-12 max-w-[880px]">
            <BarChart bars={LIFESPAN_BARS} heightClass="h-[220px] md:h-[260px]" />
          </div>
        </div>
      </section>
    </div>
  );
}
