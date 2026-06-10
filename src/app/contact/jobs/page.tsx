import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "채용",
  description: "새미그룹의 사람과 일하는 방식 — 채용 안내.",
};

export default function JobsPage() {
  return (
    <article className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-32 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
          Careers
        </p>
        <h1 className="text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] max-w-[14ch]">
          채용 안내
        </h1>
      </div>
      <div className="lg:col-span-7 max-w-[60ch] text-[16px] leading-[1.95] text-soil-brown space-y-7">
        <p>
          새미그룹은 20년 이상 장기근속이 가능한 안정적 근무환경을 기반으로,
          오래 함께 자랄 동료를 찾습니다. 임직원 교육훈련, 체력단련실, 자기계발
          지원, 그리고 매년 한 번 진행되는 전직원 해외여행까지 — 일과 삶의
          밀도를 함께 챙깁니다.
        </p>
        <p>
          최신 채용 공고와 자세한 채용 절차는 채용 안내서(PDF)에서 확인할 수
          있습니다.
        </p>
        <p>
          <a
            href="/api/r2/asset?key=company%2Fcatalog%2Frecruitment-guide.pdf"
            className="link-underline"
          >
            채용 안내서 다운로드 ↓
          </a>
        </p>
        <p className="text-[16px] text-soil-brown-soft">
          관심 있는 직무가 있으시다면 sae-mi@saemigroup.com으로 자기소개와 함께
          연락 주세요.
        </p>
      </div>
    </article>
  );
}
