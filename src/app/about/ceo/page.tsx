import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "대표이사 인사말",
  description:
    "경천애인의 이념으로 지속가능한 농업 발전을 향해 — 새미그룹 대표이사 정두석 인사말.",
};

const PARAGRAPHS = [
  "‘새미’는 생명의 샘이자, 모두가 함께 잘사는 새로운 미래를 그리는 기업입니다. 경천애인(敬天愛人)의 이념을 바탕으로, 사람과 자연이 함께 살아가는 지속가능한 농업 발전을 향해 나아가고 있습니다.",
  "새미그룹은 국내 농업과 산업의 미래를 밝히기 위해, 최고의 농자재와 정밀기계 부품 등을 수출입하고 있습니다. 특히 일본의 글로벌 농업용 필름업계의 선도기업인 스미토모화학, MKV Advance, 타키론 CI의 첨단 기술로 생산된 장기 기능성 PO필름은 비닐하우스와 스마트팜 현장에서 안정적인 품질을 바탕으로 고품질 농산물의 조기 수확을 가능하게 하며, 농가의 소득을 높이고 환경오염까지 줄여주는 친환경 고기능 제품입니다.",
  "새미는 PO필름을 비롯해 다양한 농자재와 함께 작물보호제, 작물영양제 등을 공급하며 농업 현장의 다양한 요구에 대응하고 있습니다. 특히 친환경 완효성 비료 등 유기농업자재의 연구·개발에도 꾸준히 힘을 쏟고 있습니다.",
  "또한 정밀기계 부품과 고기능 가공품을 국내외 시장에 공급하고, 일본 야스카와전기의 산업용 로봇을 국내에 도입해 제조업 현장의 자동화와 기술 고도화를 지원합니다. 더불어 고객 여러분이 생산한 소중한 농산물을 소비자와 직접 연결하는 유통의 가치를 실현하여, 생산자와 소비자가 함께 웃을 수 있는 길을 만들고 있습니다.",
  "앞으로도 기후변화와 산업환경의 변화에 유연하게 대응하며, 지속가능한 한국농업의 미래를 위한 차세대 기술과 제품 개발에 끊임없이 도전하겠습니다.",
];

export default function CeoPage() {
  return (
    <article data-mode="premium" className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-32">
      <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
        CEO Message
      </p>
      <h1 className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] max-w-[16ch]">
        대표 인사말
      </h1>
      <div className="mt-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-2">
            敬天愛人
          </p>
          <p className="text-[16px] text-soil-brown-soft">
            하늘을 공경하고
            <br />
            사람을 사랑한다.
          </p>
        </div>
        <div className="lg:col-span-8 lg:col-start-5 max-w-[60ch] space-y-7 text-[16px] leading-[1.95] text-soil-brown">
          {PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="pt-6 text-[16px] text-soil-brown-soft">
            대표이사 <span className="text-soil-brown">정두석</span>
          </p>
        </div>
      </div>
      <div className="mt-24 flex flex-wrap gap-8 text-[16px]">
        <Link href="/about/companies" className="link-underline">
          4개의 회사 →
        </Link>
        <Link href="/about/history" className="link-underline">
          연혁 (2003~) →
        </Link>
      </div>
    </article>
  );
}
