import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "문의",
  description: "견적 · 대리점 · 채용 · 새미농박사 — 새미그룹과 연결되는 모든 길.",
};

const CARDS = [
  { href: "/contact/quote", title: "견적 요청", body: "필요한 제품과 수량을 알려주시면 영업 담당이 직접 연락드립니다." },
  { href: "/contact/dealers", title: "대리점 찾기", body: "전국 새미대리점에서 가까운 곳을 찾아보세요." },
  { href: "/contact/become-dealer", title: "대리점 모집", body: "새미와 함께 자라고 싶은 분들을 모십니다." },
  { href: "/contact/jobs", title: "채용", body: "새미그룹의 사람과 일하는 방식이 궁금하신 분께." },
  { href: "/contact/saemi-nongbaksa", title: "새미농박사", body: "카카오톡으로 만나는 농업 AI 문답 서비스." },
];

export default function ContactHub() {
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-[1600px] px-6 pb-20 pt-28 lg:px-10 lg:pt-36">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue">
            Contact
          </p>
          <h1 className="mt-5 max-w-[16ch] text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert">
            문의하기
          </h1>
          <p className="mt-7 max-w-[60ch] text-[20px] leading-relaxed text-soil-brown-soft">
            견적과 자료부터 채용·대리점, 그리고 카카오톡 AI 새미농박사까지 — 어떤
            문의든 한 곳에서 시작합니다.
          </p>
        </div>
      </section>

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-24">
          <ul className="grid md:grid-cols-2 gap-px bg-line border border-line">
            {CARDS.map((c) => (
              <li key={c.href} className="bg-white p-10 lg:p-14">
                <h2 className="text-[24px] font-semibold tracking-display text-ink-invert mb-3">{c.title}</h2>
                <p className="text-[16px] leading-[1.85] text-soil-brown-soft max-w-[44ch] mb-6">
                  {c.body}
                </p>
                <Link href={c.href} className="link-underline text-[16px]">
                  {c.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1600px] grid md:grid-cols-3 gap-12 px-6 py-20 lg:px-10 lg:py-24 text-[16px] leading-[1.85] text-soil-brown-soft">
          <div>
            <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-3">본사</p>
            <p>경상남도 양산시 산막공단 남10길 10</p>
            <p>T 055-781-1250 / F 055-781-1251</p>
            <p>sae-mi@saemigroup.com</p>
          </div>
          <div>
            <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-3">JIS</p>
            <p>경남 양산시 상북면 석계산단4길 66</p>
            <p>T 055-723-2500</p>
          </div>
          <div>
            <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-3">더한농</p>
            <p>충북 충주시 용탄농공1길 31</p>
          </div>
        </div>
      </section>
    </div>
  );
}
