import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YASKAWA MOTOMAN",
  description:
    "일본 야스카와전기의 산업용 로봇 라인업 — MPP·MPK·MPL·HC·SP·GP·AR·MC. 새미그룹이 한국에 공급합니다.",
};

const LINES = [
  { code: "MPP / MPK / MPL", title: "피킹 · 팔레타이징", body: "고속 피킹과 팔레타이징을 위한 델타·산업용 로봇 라인." },
  { code: "HC", title: "협동 로봇", body: "사람과 함께 작업하는 협동 로봇. 안전과 작업자 효율의 균형." },
  { code: "SP", title: "스폿 용접", body: "자동차·금속 가공에서 정밀한 스폿 용접을 담당하는 라인." },
  { code: "GP", title: "범용 핸들링", body: "조립·이송·검사를 아우르는 범용 핸들링 로봇." },
  { code: "AR", title: "아크 용접", body: "강도와 비드 품질이 요구되는 아크 용접 전용 로봇." },
  { code: "MC", title: "레이저 가공", body: "레이저 절단·용접을 위한 정밀 가공 라인." },
];

export default function YaskawaPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-16">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
          YASKAWA MOTOMAN · Since 2012
        </p>
        <h1 className="text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] tracking-normal max-w-[20ch]">
          YASKAWA 로봇 자동화
        </h1>
        <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
          2012년부터 새미그룹은 일본 야스카와전기의 한국 대리점으로서, MOTOMAN
          산업용 로봇 라인업을 한국 제조업 현장에 도입해 왔습니다. 6개 라인업으로
          피킹·용접·핸들링·가공의 자동화를 지원합니다.
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 lg:px-10 py-12">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {LINES.map((l) => (
            <li key={l.code} className="border-t border-line pt-6">
              <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-3">
                {l.code}
              </p>
              <h3 className="text-[24px] tracking-normal mb-3">{l.title}</h3>
              <p className="text-[16px] leading-[1.75] text-soil-brown-soft max-w-[40ch]">
                {l.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-paper-soft text-ink-invert mt-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-20">
          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] tracking-normal leading-[1.2] max-w-[20ch]">
            도입 검토 단계부터 함께합니다.
          </h2>
          <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            라인 자동화는 한 번의 결정이 한 시즌이 아니라 한 시대를 좌우합니다.
            도입 검토 · 사양 선정 · 시운전 · 사후 지원까지 — 영업 담당이 직접
            함께합니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-8 text-[16px]">
            <Link href="/contact/quote" className="text-spring-blue hover:opacity-80">도입 문의 →</Link>
            <Link href="/about/partners" className="text-soil-brown-soft hover:text-spring-blue">기계 파트너 →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
