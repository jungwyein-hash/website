import type { Metadata } from "next";
import Link from "next/link";
import { getPoFilms } from "@/lib/products";

export const metadata: Metadata = {
  title: "PO필름 비교",
  description: "새미 PO필름 전 라인업의 두께·필름 종류·원산지를 한눈에.",
};

export default function ComparePage() {
  const films = getPoFilms();
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-32">
      <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
        Compare
      </p>
      <h1 className="text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] tracking-normal max-w-[18ch]">
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

      <p className="mt-8 text-[12px] text-soil-brown-mute">
        * 현재 시드된 5종 우선 표시. 프리미엄 8종 + 스탠다드 7종 전체는 후속
        마일스톤에서 채워집니다.
      </p>
    </section>
  );
}
