import Link from "next/link";

const COLUMNS = [
  {
    title: "제품",
    links: [
      { label: "PO필름", href: "/po-film" },
      { label: "하우스 부자재", href: "/accessories" },
      { label: "농약·비료", href: "/crop-care" },
      { label: "기계·FA", href: "/machinery" },
    ],
  },
  {
    title: "회사",
    links: [
      { label: "새미그룹 소개", href: "/about" },
      { label: "계열 회사", href: "/about/companies" },
      { label: "연혁", href: "/about/history" },
      { label: "글로벌 파트너", href: "/about#partners" },
      { label: "농업연구소", href: "/about/research" },
    ],
  },
  {
    title: "자료",
    links: [
      { label: "카탈로그", href: "/resources" },
      { label: "우수농가", href: "/best-farms" },
      { label: "소식", href: "/news" },
    ],
  },
  {
    title: "문의",
    links: [
      { label: "견적 문의", href: "/contact/quote" },
      { label: "대리점 찾기", href: "/contact/dealers" },
      { label: "대리점 개설", href: "/contact/become-dealer" },
      { label: "채용", href: "/contact/jobs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-soft text-ink-invert">
      <div className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="text-[24px] font-semibold leading-none">
              새미그룹
            </Link>
            <p className="mt-7 max-w-[34ch] text-[16px] leading-relaxed text-soil-brown-soft">
              농업용 필름, 하우스 부자재, 농약·비료, 기계 부품을 공급합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:col-span-8">
            {COLUMNS.map((c) => (
              <div key={c.title}>
                <p className="mb-5 text-[12px] font-semibold text-soil-brown-mute">
                  {c.title}
                </p>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[12px] leading-tight text-soil-brown-soft transition-colors hover:text-spring-blue"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-line pt-8 text-[12px] leading-relaxed text-soil-brown-mute md:grid-cols-3">
          <div>
            <p className="mb-1 font-semibold text-soil-brown-soft">본사</p>
            <p>경상남도 양산시 산막공단남10길 10</p>
            <p className="font-tech">T +82 55 781 1250 / F +82 55 781 1251</p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-soil-brown-soft">운영</p>
            <p>새미 · ARTS · JIS · 더한농</p>
            <p>PO필름, 농자재, 작물관리, 기계·FA</p>
          </div>
          <div className="md:text-right">
            <p className="font-slogan">경천애인 · 아그리컬처 새미</p>
            <p className="mt-2 font-tech">© 2026 SAEMI GROUP</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
