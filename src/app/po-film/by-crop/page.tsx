import type { Metadata } from "next";
import Link from "next/link";
import { bestFarms } from "@/content/best-farms";
import { getPoFilms } from "@/lib/products";
import CropIcon from "@/components/product/CropIcon";

export const metadata: Metadata = {
  title: "작물별 추천",
  description:
    "수박·딸기·토마토·엽채류 — 작물별로 새미 우수농가가 실제로 선택한 PO필름을 안내합니다.",
  alternates: { canonical: "/po-film/by-crop" },
};

export default function ByCropPage() {
  // 우수농가 실데이터에서 작물 → 사용 필름 매핑을 만든다 (추정·임의 추천 아님)
  const filmHref = new Map(
    getPoFilms().map((p) => [p.name.ko, `/po-film/${p.tier}/${p.slug}`])
  );

  const byCrop = new Map<
    string,
    { farms: number; products: Set<string>; quote: string; quoteFarm: string }
  >();
  for (const f of bestFarms) {
    const entry = byCrop.get(f.crop) ?? {
      farms: 0,
      products: new Set<string>(),
      quote: f.quote,
      quoteFarm: f.name,
    };
    entry.farms += 1;
    entry.products.add(f.product);
    byCrop.set(f.crop, entry);
  }
  const crops = [...byCrop.entries()].sort((a, b) => b[1].farms - a[1].farms);

  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-20">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            Film by Crop
          </p>
          <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert max-w-[18ch]">
            내 작물에는
            <br />
            어떤 필름이 맞을까.
          </h1>
          <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            이론이 아니라 현장의 선택입니다. 새미 우수농가{" "}
            {bestFarms.length}곳이 작물별로 실제 사용 중인 필름을 그대로
            보여드립니다.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-24">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {crops.map(([crop, info]) => (
              <li key={crop} className="surface-panel bg-white p-7">
                <div className="flex items-center gap-3">
                  <CropIcon crop={crop} size={34} />
                  <h2 className="text-[24px]">{crop}</h2>
                  <span className="ml-auto text-[12px] text-soil-brown-mute">
                    우수농가 {info.farms}곳
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[...info.products].map((p) => {
                    const href = filmHref.get(p);
                    return href ? (
                      <Link
                        key={p}
                        href={href}
                        className="rounded-full border border-line px-4 py-1.5 text-[14px] text-soil-brown transition-colors hover:border-spring-blue hover:text-spring-blue"
                      >
                        {p}
                      </Link>
                    ) : (
                      <span
                        key={p}
                        className="rounded-full border border-line px-4 py-1.5 text-[14px] text-soil-brown-soft"
                      >
                        {p}
                      </span>
                    );
                  })}
                </div>
                <blockquote className="font-farm-quote mt-6 border-t border-line pt-5 text-[14px] leading-relaxed text-soil-brown-soft">
                  “{info.quote}”
                  <footer className="mt-2 text-[12px] text-soil-brown-mute">
                    — {info.quoteFarm}
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA — 홈 CONTACT 섹션과 같은 패턴 */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
          <div className="lg:col-span-8">
            <p className="font-tech text-[12px] font-semibold text-spring-blue">
              CONTACT
            </p>
            <h2 className="mt-4 max-w-[24ch] text-[36px] md:text-[56px] lg:text-[72px] font-semibold leading-[1.08] tracking-display text-ink-invert">
              작목과 지역을 알려주시면, 더 정확히 추천해 드립니다.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-3 lg:col-span-3 lg:col-start-10">
            <Link href="/best-farms" className="apple-button apple-button-secondary">
              우수농가 사례 전체 보기
            </Link>
            <Link href="/contact/quote" className="apple-button apple-button-primary">
              견적·추천 문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
