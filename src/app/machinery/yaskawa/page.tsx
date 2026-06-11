import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";
import { YASKAWA_ROBOTS } from "@/content/machinery";

export const metadata: Metadata = {
  title: "YASKAWA MOTOMAN",
  description:
    "일본 야스카와전기의 산업용 로봇 라인업 — 피킹·협동·용접·핸들링. 새미그룹이 한국에 공급합니다.",
};

export default function YaskawaPage() {
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-20">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            YASKAWA MOTOMAN · Since 2012
          </p>
          <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert max-w-[20ch]">
            YASKAWA 로봇 자동화
          </h1>
          <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            2012년부터 새미그룹은 일본 야스카와전기의 한국 대리점으로서, MOTOMAN
            산업용 로봇 라인업을 한국 제조업 현장에 도입해 왔습니다. 6개 라인업으로
            피킹·용접·핸들링·가공의 자동화를 지원합니다.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20 lg:py-24">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {YASKAWA_ROBOTS.map((r) => (
              <li key={r.model}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] bg-white">
                  <SmartImage
                    src={r.image}
                    alt={`YASKAWA MOTOMAN ${r.model} — ${r.label}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain p-6"
                  />
                </div>
                <p className="mt-5 font-tech text-[12px] uppercase text-soil-brown-mute">
                  {r.model}
                </p>
                <h3 className="mt-1 text-[24px]">{r.label}</h3>
                <p className="mt-2 text-[16px] leading-[1.75] text-soil-brown-soft max-w-[40ch]">
                  {r.body}
                </p>
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
            <h2 className="mt-4 max-w-[20ch] text-[36px] md:text-[56px] lg:text-[72px] font-semibold leading-[1.08] tracking-display text-ink-invert">
              도입 검토 단계부터 함께합니다.
            </h2>
            <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
              라인 자동화는 한 번의 결정이 한 시즌이 아니라 한 시대를 좌우합니다.
              도입 검토 · 사양 선정 · 시운전 · 사후 지원까지 — 영업 담당이 직접
              함께합니다.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-3 lg:col-span-3 lg:col-start-10">
            <Link href="/about/partners" className="apple-button apple-button-secondary">
              기계 파트너
            </Link>
            <Link href="/contact/quote" className="apple-button apple-button-primary">
              도입 문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
