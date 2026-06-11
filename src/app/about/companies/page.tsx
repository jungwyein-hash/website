import Link from "next/link";
import type { Metadata } from "next";
import { COMPANIES } from "@/content/companies";
import SmartImage from "@/components/media/SmartImage";

export const metadata: Metadata = {
  title: "4개의 회사",
  description:
    "ARTS · JIS · 새미 · 더한농 — 새미그룹을 구성하는 4개의 농산업 특화 기업.",
};

export default function CompaniesPage() {
  return (
    <article className="flex flex-col gap-3 bg-paper-soft">
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-20">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            Companies
          </p>
          <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert max-w-[16ch]">
            새미그룹 계열 회사
          </h1>
          <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            새미그룹은 농업 경영인들의 다양한 필요를 적시에 충족시키기 위해 4개의
            농산업 특화 기업을 운영합니다. 각 회사는 한 분야의 깊이를 담당하면서
            서로의 역량을 보완합니다.
          </p>
        </div>
      </section>

      {COMPANIES.map((c, i) => (
        <section
          key={c.slug}
          className={`py-20 lg:py-28 ${
            i % 2 === 1 ? "bg-paper-warm" : "bg-white"
          }`}
        >
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-3">
                {c.founded} · 설립
              </p>
              <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-display text-ink-invert mb-3">
                {c.legalName}
              </h2>
              <p className="text-[12px] tracking-normal uppercase text-soil-brown-soft mb-6">
                {c.divisions.join(" · ")}
              </p>
              <p className="text-[16px] leading-[1.85] text-soil-brown max-w-[44ch]">
                {c.description}
              </p>
              {c.facts && (
                <dl className="mt-8 grid grid-cols-3 gap-x-6 max-w-[40ch]">
                  {c.facts.map((f) => (
                    <div key={f.label}>
                      <dt className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-1">
                        {f.label}
                      </dt>
                      <dd className="text-[16px] text-soil-brown">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
              {(c.address || c.phone || c.email) && (
                <p className="mt-6 text-[12px] leading-[1.85] text-soil-brown-soft">
                  {c.address && <>주소 · {c.address}<br /></>}
                  {c.phone && <>전화 · {c.phone}<br /></>}
                  {c.email && <>이메일 · {c.email}</>}
                </p>
              )}
            </div>
            {c.buildingImage && (
              <div className="lg:col-span-6 lg:col-start-7 relative aspect-[4/3] overflow-hidden rounded-[8px] bg-line">
                <SmartImage
                  src={c.buildingImage}
                  alt={`${c.legalName} 사옥`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20">
          <div className="flex flex-wrap gap-3">
            <Link href="/about/history" className="apple-button apple-button-secondary">
              연혁
            </Link>
            <Link href="/about/factories" className="apple-button apple-button-secondary">
              공장·사옥
            </Link>
            <Link href="/about/partners" className="apple-button apple-button-secondary">
              글로벌 파트너
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
