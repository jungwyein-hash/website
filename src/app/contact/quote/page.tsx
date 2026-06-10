import type { Metadata } from "next";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "견적 요청",
  description: "필요한 제품과 수량을 알려주시면 새미그룹 영업 담당이 직접 연락드립니다.",
};

export default function QuotePage() {
  return (
    <article className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-32 grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
          Quote
        </p>
        <h1 className="text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1]">
          견적 요청
        </h1>
        <p className="mt-8 max-w-[40ch] text-[16px] leading-[1.85] text-soil-brown-soft">
          제품 분류와 수량, 연락처만 알려 주시면 영업 담당이 영업일 기준 1–2일 안에
          직접 연락드립니다. 작목·지역·시공 시기까지 함께 적어 주시면 더 정확한
          제안이 가능합니다.
        </p>
        <p className="mt-8 text-[12px] leading-[1.85] text-soil-brown-mute">
          본사 직통 · 055-781-1250
          <br />
          이메일 · sae-mi@saemigroup.com
        </p>
      </div>
      <div className="lg:col-span-7">
        <QuoteForm />
      </div>
    </article>
  );
}
