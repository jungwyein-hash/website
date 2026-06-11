import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";
import { MACHINERY_SECTORS } from "@/content/machinery";

export const metadata: Metadata = {
  title: "정밀기계 부품",
  description:
    "조선·건설·농업·산업 — 4개 분야에 걸친 정밀기계 부품 라인업. 일본 마루야마·스미토모 중기계공업·야하타와 협력합니다.",
};

export default function PartsPage() {
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-20">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            Precision Parts
          </p>
          <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert max-w-[16ch]">
            정밀 기계 부품
          </h1>
          <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            약 30년간 일본 굴지의 기업들과 지속적으로 거래하며 축적한 전문
            지식과 네트워크로, 조선·건설·농업·산업 4개 분야의 핵심 부품을
            공급합니다.
          </p>
          {/* 분야 점프 */}
          <nav aria-label="분야 바로가기" className="mt-10 flex flex-wrap gap-3">
            {MACHINERY_SECTORS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-line bg-white px-5 py-2 text-[14px] text-soil-brown transition-colors hover:border-spring-blue hover:text-spring-blue"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {MACHINERY_SECTORS.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={i % 2 === 1 ? "bg-paper-warm" : "bg-white"}
        >
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-24">
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <h2 className="text-[28px] md:text-[40px] font-semibold leading-[1.15] tracking-display text-ink-invert">
                {s.title}
              </h2>
              <p className="text-[14px] text-soil-brown-mute">{s.desc}</p>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
              {s.items.map((item, j) => (
                <li key={`${item.image}-${j}`}>
                  <div className="relative aspect-square overflow-hidden rounded-[8px] bg-white border border-line">
                    <SmartImage
                      src={item.image}
                      alt={`${s.title} — ${item.label}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 font-tech text-[13px] text-soil-brown">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* CTA — 홈 CONTACT 섹션과 같은 패턴 */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
          <div className="lg:col-span-8">
            <p className="font-tech text-[12px] font-semibold text-spring-blue">
              CONTACT
            </p>
            <h2 className="mt-4 max-w-[18ch] text-[36px] md:text-[56px] lg:text-[72px] font-semibold leading-[1.08] tracking-display text-ink-invert">
              필요한 부품의 사양과 수량을 알려주세요.
            </h2>
            <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.85] text-soil-brown-soft">
              표준 부품은 빠르게, 맞춤 가공품은 정확하게 — 영업 담당이 직접
              연락드립니다.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-3 lg:col-span-3 lg:col-start-10">
            <Link href="/machinery/yaskawa" className="apple-button apple-button-secondary">
              YASKAWA 로봇 보기
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
