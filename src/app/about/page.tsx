import Link from "next/link";
import type { Metadata } from "next";
import { COMPANIES } from "@/content/companies";
import SmartImage from "@/components/media/SmartImage";

export const metadata: Metadata = {
  title: "새미그룹",
  description:
    "경천애인의 이념으로 한국 농업과 함께 자라는 종합 농자재 그룹 — 4개의 회사, 4개의 사업부.",
};

const SECTORS = [
  { eyebrow: "01", label: "PO필름 사업부", href: "/po-film" },
  { eyebrow: "02", label: "농약·비료 사업부", href: "/crop-care" },
  { eyebrow: "03", label: "기계·FA 사업부", href: "/machinery" },
  { eyebrow: "04", label: "유통사업부", href: "/best-farms" },
];

export default function AboutHub() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
          About
        </p>
        <h1 className="text-[40px] md:text-[64px] xl:text-[80px] leading-[1.05] tracking-normal max-w-[18ch]">
          새미그룹은 4개의 회사로 운영됩니다.
        </h1>
        <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
          새미그룹은 경천애인의 이념을 바탕으로, 한국 농업의 매일을 받칩니다.
          ㈜ARTS·㈜JIS·㈜새미·㈜더한농 — 네 회사가 PO필름, 농약·비료, 기계·FA,
          유통의 한 길을 함께 걷습니다.
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
          {COMPANIES.map((c) => (
            <Link
              key={c.slug}
              href="/about/companies"
              className="bg-earth-beige p-10 group"
            >
              <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-3">
                {c.founded} · 설립
              </p>
              <h3 className="text-[24px] tracking-normal mb-2">
                {c.legalName}
              </h3>
              <p className="text-[12px] text-soil-brown-soft mb-4">
                {c.divisions.join(" · ")}
              </p>
              <p className="text-[16px] leading-[1.85] text-soil-brown-soft max-w-[44ch]">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 grid md:grid-cols-4">
          {SECTORS.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className={`group block py-6 md:py-0 md:px-8 ${
                i > 0 ? "md:border-l border-line" : ""
              }`}
            >
              <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-4">
                Division {s.eyebrow}
              </p>
              <p className="text-[20px] tracking-normal text-soil-brown group-hover:text-soil-brown-soft transition-colors">
                {s.label}
              </p>
              <span className="mt-4 inline-block link-underline text-[12px]">
                자세히 보기 →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-4">
            Quick Links
          </p>
          <ul className="space-y-4">
            {[
              { href: "/about/ceo", label: "대표이사 인사말" },
              { href: "/about/companies", label: "4개의 회사 — 자세히" },
              { href: "/about/history", label: "연혁 (2003~)" },
              { href: "/about/research", label: "농업연구소" },
              { href: "/about/factories", label: "공장·사옥" },
              { href: "/about/partners", label: "글로벌 파트너" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[20px] tracking-normal link-underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 relative aspect-[4/3] bg-line">
          <SmartImage
            src="company/headquarters/arts-사옥.webp"
            alt="ARTS 사옥"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
