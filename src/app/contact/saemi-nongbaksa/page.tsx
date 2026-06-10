import type { Metadata } from "next";
import SmartImage from "@/components/media/SmartImage";

export const metadata: Metadata = {
  title: "새미농박사",
  description: "카카오톡으로 만나는 농업 AI 문답 서비스 — 새미농박사 앱",
};

export default function SaemiNongbaksaPage() {
  return (
    <article className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-32 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-6">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
          Saemi Nongbaksa · AI Service
        </p>
        <h1 className="text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] max-w-[14ch]">
          새미농박사 앱
        </h1>
        <p className="mt-8 max-w-[44ch] text-[16px] leading-[1.85] text-soil-brown">
          새미농박사는 카카오톡으로 만나는 농업 AI 문답 서비스입니다. PO필름과
          부자재, 작물보호제·영양제까지 — 새미그룹의 모든 자재 정보를 가장 가까운
          채널에서 묻고 답할 수 있습니다.
        </p>
        <ul className="mt-10 space-y-4 text-[16px] leading-[1.8] text-soil-brown-soft">
          <li>· 카카오톡 기반 — 별도 앱 설치 없이 바로 사용</li>
          <li>· 작물별 자재 추천과 시공 시기 안내</li>
          <li>· 새미 카탈로그 정보를 실시간으로 검색</li>
        </ul>
        <div className="mt-10 flex flex-wrap gap-8 text-[16px]">
          <a
            href="https://pf.kakao.com/_YeAcxj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-spring-blue text-white tracking-normal hover:opacity-90 transition-opacity"
          >
            카카오톡으로 시작하기 →
          </a>
        </div>
      </div>
      <div className="lg:col-span-5 lg:col-start-8 relative aspect-[3/4] bg-line">
        <SmartImage
          src="design-assets/saemi-nongbaksa/front.webp"
          alt="새미농박사 카카오톡 화면"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-contain"
        />
      </div>
    </article>
  );
}
