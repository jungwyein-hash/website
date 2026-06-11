import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";

export const metadata: Metadata = {
  title: "대리점 찾기",
  description: "전국 새미대리점 — 농가 가까이에서 새미를 만나는 길.",
};

export default function DealersPage() {
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-28 lg:px-10 lg:pt-36">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-6">
            Dealers
          </p>
          <h1 className="text-[36px] md:text-[48px] lg:text-[64px] font-semibold leading-[1.1] tracking-display text-ink-invert max-w-[18ch]">
            대리점 찾기
          </h1>
          <p className="mt-8 max-w-[60ch] text-[16px] leading-[1.85] text-soil-brown-soft">
            새미그룹은 전국의 새미대리점과 함께 강력한 유통 네트워크를 구축하고,
            전국 각지의 농가에 최적화된 공급망으로 제품을 제공합니다.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="relative aspect-[4/3] md:aspect-[16/9] bg-line max-w-[1100px]">
            <SmartImage
              src="design-assets/web/전국-대리점.webp"
              alt="새미 전국 대리점 분포"
              fill
              sizes="(min-width: 768px) 70vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-2 gap-12 px-6 py-16 lg:px-10 lg:py-20">
          <div>
            <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-3">
              가까운 대리점이 궁금하다면
            </p>
            <h2 className="text-[24px] font-semibold tracking-display text-ink-invert mb-3">
              지역명을 알려주시면 가장 가까운 대리점을 안내드립니다.
            </h2>
            <p className="text-[16px] leading-[1.85] text-soil-brown-soft mb-6">
              본사로 연락 주시면 작목과 지역에 맞는 대리점을 직접 안내드립니다.
              상세한 위치 검색은 후속 단계에서 지도 인터페이스로 제공할 예정입니다.
            </p>
            <p className="text-[16px] leading-[1.85] text-soil-brown">
              본사 · <a href="tel:055-781-1250" className="link-underline">055-781-1250</a>
              <br />
              이메일 · <a href="mailto:sae-mi@saemigroup.com" className="link-underline">sae-mi@saemigroup.com</a>
            </p>
          </div>
          <div>
            <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-3">
              대리점이 되고 싶다면
            </p>
            <h2 className="text-[24px] font-semibold tracking-display text-ink-invert mb-3">
              새미와 함께 자라는 동반자를 모십니다.
            </h2>
            <p className="text-[16px] leading-[1.85] text-soil-brown-soft mb-6">
              새미그룹은 영농지도자 모임 ARTS회·새미우수농가회 등을 통해 농가와
              대리점의 동반 성장을 지원합니다.
            </p>
            <Link href="/contact/become-dealer" className="apple-button apple-button-secondary">
              대리점 모집 안내
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
