import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";

export const metadata: Metadata = {
  title: "기계·FA",
  description:
    "정밀기계 부품과 일본 야스카와전기 MOTOMAN 산업용 로봇 — 새미그룹의 자동화·정밀 부품 사업부.",
};

const SECTORS = [
  {
    href: "/machinery/parts",
    eyebrow: "01 · 정밀기계 부품",
    title: "정밀기계 부품",
    body: "유압호스·피팅·밸브·컨트롤러부터 베벨기어·F.P.S.O. 라인까지. 건설 중장비와 산업 현장의 핵심 부품을 공급합니다.",
  },
  {
    href: "/machinery/yaskawa",
    eyebrow: "02 · 산업용 로봇",
    title: "YASKAWA MOTOMAN",
    body: "일본 야스카와전기의 산업용 로봇 라인업 — MPP·HC·SP·GP·AR·MC. 제조업 현장의 자동화와 기술 고도화.",
  },
];

export default function MachineryHub() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-20">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
          Machinery &amp; FA
        </p>
        <h1 className="text-[40px] md:text-[64px] xl:text-[80px] leading-[1.05] max-w-[16ch]">
          기계·FA 제품을 찾으세요.
        </h1>
        <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
          새미그룹의 기계·FA 사업부는 정밀기계 부품을 국내외 시장에 공급하고,
          일본 야스카와전기의 산업용 로봇을 한국에 도입해 제조업 현장의 자동화와
          기술 고도화를 지원합니다.
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-12 grid md:grid-cols-2 gap-px bg-line border border-line">
        {SECTORS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="bg-earth-beige p-10 lg:p-14 group"
          >
            <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
              {s.eyebrow}
            </p>
            <h2 className="text-[28px] mb-4">{s.title}</h2>
            <p className="text-[16px] leading-[1.85] text-soil-brown-soft max-w-[44ch]">
              {s.body}
            </p>
            <span className="mt-8 inline-block link-underline text-[16px]">
              자세히 보기 →
            </span>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
            Sumitomo · Maruyama · Yahata · Yaskawa
          </p>
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] leading-[1.2]">
            글로벌 제조 협력사.
          </h2>
          <p className="mt-6 max-w-[40ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            JIS는 일본 스미토모 중기계공업·마루야마·야하타 등 세계적 제조 기업과
            협력해 한국에 정밀 부품을 공급합니다.
          </p>
          <Link
            href="/about/partners"
            className="mt-8 inline-block link-underline text-[16px]"
          >
            글로벌 파트너 →
          </Link>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 relative aspect-[4/3] bg-line">
          <SmartImage
            src="products/machinery/완제품/hydraulic-cylinder/hydraulic-cylinder-01.webp"
            alt="JIS 정밀 부품 — 유압 실린더"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
