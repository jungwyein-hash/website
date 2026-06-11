import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";

export const metadata: Metadata = {
  title: "새미 우수농가",
  description:
    "새미 우수농가 40인의 현장 기록 — 경영인의 철학과 작물별 사례, 사용 자재.",
};

export default function BestFarmsPage() {
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section
        data-mode="premium"
        className="relative h-[68vh] min-h-[520px] flex items-end overflow-hidden"
      >
        <SmartImage
          src="design-assets/web/우수농가-40-작물-일러스트레이션.webp"
          alt="새미 우수농가 40인이 키우는 작물"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-earth-beige via-earth-beige/80 via-40% to-earth-beige/0" />
        <div className="relative mx-auto max-w-[1440px] w-full px-6 lg:px-10 pb-20">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            Best Farms · 2024
          </p>
          <h1 className="max-w-[16ch] text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert">
            우수농가 사례
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue">
              Casebook
            </p>
          </div>
          <div className="lg:col-span-8 lg:col-start-5 max-w-[60ch]">
            <p className="text-[16px] leading-[1.85] text-soil-brown">
              경영인의 올곧은 철학이 담긴 현장 이야기부터 결실을 도운 자재 정보까지
              정성껏 갈무리했습니다. 묵묵히 농업의 오늘을 일구어 온 선배들의 지혜는,
              더 나은 환경과 새로운 작물에 도전하는 당신에게 따뜻하고 든든한
              길잡이가 되어 줄 것입니다.
            </p>
            <p className="mt-6 text-[16px] leading-[1.85] text-soil-brown-soft">
              2024년 첫 새미우수농가로 선정된 40인의 사례를 한 권의 책으로
              정리했습니다. 1차 출시에는 케이스북 PDF를 통해 만나볼 수 있으며, 개별
              농가의 페이지는 후속 단계에서 차례로 공개됩니다.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="/api/r2/asset?key=company%2Fcatalog%2Fbest-farms-casebook.pdf"
                className="apple-button apple-button-primary"
              >
                케이스북 다운로드 ↓
              </a>
              <Link href="/po-film" className="apple-button apple-button-secondary">
                사용된 PO필름
              </Link>
              <Link href="/contact/quote" className="apple-button apple-button-secondary">
                내 농장에 맞는 자재 문의
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-x-12 gap-y-12">
          {[
            { value: "40", label: "선정 농가" },
            { value: "전국", label: "범위 — 제주 · 경주 · 성주 · 밀양 외" },
            { value: "2024", label: "첫 회 선정" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`px-2 ${i > 0 ? "md:border-l border-line md:px-10" : "md:px-0 md:pr-10"}`}
            >
              <p className="text-[40px] md:text-[56px] lg:text-[72px] leading-none tracking-normal">
                {s.value}
              </p>
              <p className="mt-3 text-[12px] tracking-normal uppercase text-soil-brown-mute">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
