import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";
import { MACHINERY_PARTNERS, MACHINERY_SECTORS, YASKAWA_ROBOTS } from "@/content/machinery";

export const metadata: Metadata = {
  title: "기계·FA",
  description:
    "약 30년간 일본 굴지의 기업들과 거래해 온 정밀기계 부품과 YASKAWA 산업용 로봇 — 새미그룹 기계·FA 사업부.",
};

export default function MachineryHub() {
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      {/* 히어로 */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-28 lg:px-10 lg:pt-36">
          <p className="font-tech text-[12px] font-semibold text-spring-blue">
            MACHINERY &amp; FA
          </p>
          <h1 className="mt-5 max-w-[18ch] text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert text-balance">
            약 30년의 거래가
            <br />
            품질을 증명합니다.
          </h1>
          <p className="mt-7 max-w-[60ch] text-[20px] leading-relaxed text-soil-brown-soft">
            조선, 반도체, 중장비 등 산업 전반에 걸쳐 고객들이 원하는 높은 품질의
            제품을 국내 유수한 협력사를 통해 수출 공급합니다. 특히 일본의 유수
            기업들이 생산하는 고압펌프와 농업용 다목적 운반차량(UTV)의 핵심
            부품을 성공적으로 공급하고 있습니다.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/machinery/parts" className="apple-button apple-button-primary">
              정밀 부품 보기
            </Link>
            <Link href="/machinery/yaskawa" className="apple-button apple-button-secondary">
              YASKAWA 로봇
            </Link>
          </div>
        </div>
      </section>

      {/* 해외 파트너 */}
      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue">
            Global Partners
          </p>
          <h2 className="mt-4 mb-10 text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-display text-ink-invert">
            해외 파트너
          </h2>
          <ul className="grid gap-px bg-line border border-line md:grid-cols-5">
            {MACHINERY_PARTNERS.map((p) => (
              <li key={p.en} className="bg-white p-7">
                <p className="font-tech text-[12px] uppercase text-soil-brown-mute">
                  {p.en}
                </p>
                <p className="mt-2 text-[18px] font-semibold text-ink-invert">
                  {p.name}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-soil-brown-soft">
                  {p.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 분야 미리보기 → /machinery/parts */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue">
                Precision Parts
              </p>
              <h2 className="mt-4 text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-display text-ink-invert">
                4개 분야, 정밀 기계 부품
              </h2>
            </div>
            <Link href="/machinery/parts" className="apple-button apple-button-secondary">
              제품 목록 전체 보기
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {MACHINERY_SECTORS.map((s) => (
              <Link
                key={s.id}
                href={`/machinery/parts#${s.id}`}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-[8px] bg-paper-soft">
                  <SmartImage
                    src={s.items[0].image}
                    alt={`${s.title} 분야 — ${s.items[0].label}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 text-[20px]">{s.title}</h3>
                <p className="mt-1 text-[13px] text-soil-brown-mute">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* YASKAWA 로봇 미리보기 */}
      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue">
                YASKAWA · Since 2012
              </p>
              <h2 className="mt-4 text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-display text-ink-invert">
                산업용 로봇, 6개 라인업.
              </h2>
              <p className="mt-5 max-w-[52ch] text-[16px] leading-[1.85] text-soil-brown-soft">
                맞춤형 로봇시스템으로 고객의 요구에 부응하며 가치 향상을 위해
                연구합니다.
              </p>
            </div>
            <Link href="/machinery/yaskawa" className="apple-button apple-button-secondary">
              로봇 라인업 보기
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 lg:grid-cols-6">
            {YASKAWA_ROBOTS.map((r) => (
              <Link key={r.model} href="/machinery/yaskawa" className="group">
                <div className="relative aspect-square overflow-hidden rounded-[8px] bg-white">
                  <SmartImage
                    src={r.image}
                    alt={`YASKAWA ${r.label} (${r.model})`}
                    fill
                    sizes="(min-width: 1024px) 16vw, 33vw"
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.05]"
                  />
                </div>
                <p className="mt-3 text-center text-[13px] text-soil-brown">
                  {r.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — 홈 CONTACT 섹션과 같은 패턴 */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
          <div className="lg:col-span-8">
            <p className="font-tech text-[12px] font-semibold text-spring-blue">
              CONTACT
            </p>
            <h2 className="mt-4 max-w-[18ch] text-[36px] md:text-[56px] lg:text-[72px] font-semibold leading-[1.08] tracking-display text-ink-invert">
              필요한 부품의 사양과 수량을 알려주세요.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-3 lg:col-span-3 lg:col-start-10">
            <Link href="/about/partners" className="apple-button apple-button-secondary">
              글로벌 파트너 보기
            </Link>
            <Link href="/contact/quote" className="apple-button apple-button-primary">
              견적 문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
