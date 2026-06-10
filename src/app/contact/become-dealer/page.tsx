import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "대리점 모집",
  description: "새미와 함께 자라는 새미대리점 — 동반 성장의 길.",
};

export default function BecomeDealerPage() {
  return (
    <article className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-32 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5">
        <p className="text-[12px] tracking-normal uppercase text-soil-brown-mute mb-6">
          Become a Dealer
        </p>
        <h1 className="text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] max-w-[14ch]">
          대리점 개설 문의
        </h1>
      </div>
      <div className="lg:col-span-7 max-w-[60ch]">
        <p className="text-[16px] leading-[1.85] text-soil-brown">
          새미그룹은 농업 경영인의 신뢰 위에서 자라 왔습니다. 한 시즌의 작은
          약속이 수십 년의 동반 성장으로 이어지는 길을, 새미대리점과 함께
          만들어 가고 있습니다.
        </p>
        <ul className="mt-10 border-t border-line">
          {[
            { title: "안정적 공급망", body: "양산·충주 두 곳의 자체 생산·유통 거점과 글로벌 파트너로 안정적인 공급을 보장합니다." },
            { title: "영농지도자 협력", body: "ARTS회·새미우수농가회 등 영농지도자 모임을 통해 시장의 변화에 함께 대응합니다." },
            { title: "검증된 라인업", body: "국내 1위 코팅플러스를 비롯한 새미테크 라인과 일본 직수입 프리미엄 라인 모두 취급할 수 있습니다." },
            { title: "지속적 신제품 공급", body: "썬파워 · 코팅 쿨 · 올시즌 · 따시네 · 그린포스 등 신제품을 가장 먼저 만나봅니다." },
          ].map((b) => (
            <li key={b.title} className="border-b border-line py-6">
              <h3 className="text-[20px] mb-2">{b.title}</h3>
              <p className="text-[16px] leading-[1.8] text-soil-brown-soft max-w-[60ch]">
                {b.body}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-8 text-[16px]">
          <Link href="/contact/quote" className="link-underline">
            대리점 문의 →
          </Link>
          <a href="tel:055-781-1250" className="link-underline">
            본사 · 055-781-1250
          </a>
        </div>
      </div>
    </article>
  );
}
