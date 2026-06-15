import type { Metadata } from "next";
import Link from "next/link";
import { NEWS } from "@/content/news";

export const metadata: Metadata = {
  title: "뉴스",
  description: "새미그룹의 보도자료 · 신제품 출시 · 행사 소식.",
};

const CATEGORY_LABEL: Record<string, string> = {
  release: "신제품",
  press: "보도자료",
  event: "행사",
};

const SNS = [
  {
    name: "인스타그램",
    handle: "@saemigroup_official",
    body: "현장 스케치와 제품 소식을 가장 빠르게",
    href: "https://www.instagram.com/saemigroup_official",
  },
  {
    name: "네이버 블로그",
    handle: "blog.naver.com/saemigroup",
    body: "재배 정보와 제품 이야기를 깊이 있게",
    href: "https://blog.naver.com/saemigroup",
  },
  {
    name: "카카오톡 채널",
    handle: "새미농박사",
    body: "1:1 농업 상담과 맞춤 소식 받기",
    href: "https://pf.kakao.com/_YeAcxj",
  },
];

export default function NewsPage() {
  const ordered = [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <div className="flex flex-col gap-3 bg-paper-soft">
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pb-20 pt-28 lg:pt-36">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue">
            News
          </p>
          <h1 className="mt-5 max-w-[16ch] text-[48px] md:text-[72px] lg:text-[96px] font-semibold leading-[1.05] tracking-display text-ink-invert">
            새미 소식
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16 lg:py-20">
          <ul className="border-t border-line">
            {ordered.map((n) => (
              <li key={n.slug} className="border-b border-line">
                <Link
                  href={`/news/${n.slug}`}
                  className="block py-10 grid lg:grid-cols-12 gap-6 group"
                >
                  <div className="lg:col-span-2 flex flex-col gap-2">
                    <time className="text-[16px] tracking-normal text-soil-brown">
                      {n.date}
                    </time>
                    <span className="text-[12px] tracking-normal uppercase text-soil-brown-mute">
                      {CATEGORY_LABEL[n.category]}
                    </span>
                  </div>
                  <div className="lg:col-span-9 lg:col-start-4">
                    <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold tracking-display text-ink-invert mb-3 group-hover:text-soil-brown-soft transition-colors">
                      {n.title}
                    </h2>
                    <p className="text-[16px] leading-[1.8] text-soil-brown-soft max-w-[60ch]">
                      {n.excerpt}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16 lg:py-20">
          <p className="font-tech text-[12px] font-semibold uppercase text-spring-blue mb-8">
            SNS
          </p>
          <div className="grid gap-px bg-line border border-line md:grid-cols-3">
            {SNS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="group bg-white p-10"
              >
                <h2 className="text-[22px] font-semibold tracking-display text-ink-invert">
                  {s.name}
                </h2>
                <p
                  className={`mt-1 text-[13px] text-spring-blue ${
                    // 한글 핸들(새미농박사 등)은 프리텐다드, 영문 핸들만 Consolas
                    /[가-힣]/.test(s.handle) ? "" : "font-tech"
                  }`}
                >
                  {s.handle}
                </p>
                <p className="mt-3 text-[15px] leading-[1.8] text-soil-brown-soft max-w-[40ch]">
                  {s.body}
                </p>
                <span className="mt-6 inline-block link-underline text-[15px]">
                  바로가기 ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
