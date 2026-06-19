import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";
import { diastar } from "@/content/products/po-film/diastar";
import { sawasawa } from "@/content/products/po-film/sawasawa";
import { sunpower } from "@/content/products/po-film/sunpower";
import { coatingPlus } from "@/content/products/po-film/coating-plus";
import { coatingStrong } from "@/content/products/po-film/coating-strong";

/**
 * Apple 홈 section-promo 실측 적용 — 2열 그리드, 타일 높이 580px,
 * 갭·외곽 여백 12px, 중앙정렬 헤드라인 40px·서브 21px, 버튼 2개.
 * 문구는 제품 콘텐츠·카탈로그에서만 가져온다.
 * 최상단 우측 타일은 현재 소식 자리.
 */
type Tile = {
  name: string;
  /** 한 줄 서브카피 */
  sub: string;
  href: string;
  catalogHref: string;
  /** 보조 버튼 문구 — 기본 "카탈로그 보기" */
  catalogLabel?: string;
  image: string;
  imageAlt: string;
  /** true면 이미지를 타일 하단에 고정 (기본은 중앙) */
  imageBottom?: boolean;
};

const TILES: Tile[] = [
  {
    name: diastar.name.ko,
    sub: "타협 없는 탁월함.",
    href: "/po-film/premium/diastar",
    catalogHref: `/api/r2/asset?key=${encodeURIComponent(diastar.catalogPdf ?? "company/catalog/diastar-2025.pdf")}`,
    image: diastar.hero.src,
    imageAlt: diastar.hero.alt,
  },
  {
    // 현재 소식 — 새미 우수농가 사례집 출판
    name: "새미 우수농가 사례집",
    sub: "우수농가 40인의 현장 기록, 출간.",
    href: "/best-farms",
    catalogHref: `/api/r2/asset?key=${encodeURIComponent("company/catalog/best-farms-casebook.pdf")}`,
    catalogLabel: "케이스북 보기",
    image: "design-assets/web/best-farms-40-book-rendering-06.webp",
    imageAlt: "새미 우수농가 40인 케이스북 표지 렌더링",
    imageBottom: true,
  },
  {
    name: sawasawa.name.ko,
    sub: "풍부하고 부드러운 산란광.",
    href: "/po-film/premium/sawasawa",
    catalogHref: `/api/r2/asset?key=${encodeURIComponent(sawasawa.catalogPdf!)}`,
    image: sawasawa.hero.src,
    imageAlt: sawasawa.hero.alt,
  },
  {
    name: sunpower.name.ko,
    sub: "광기술의 결정체, 분광 PO필름.",
    href: "/po-film/premium/sunpower",
    catalogHref: `/api/r2/asset?key=${encodeURIComponent(sunpower.catalogPdf ?? "company/catalog/sunpower.pdf")}`,
    image: sunpower.hero.src,
    imageAlt: sunpower.hero.alt,
  },
  {
    name: coatingPlus.name.ko,
    sub: "코팅 PO필름 국내 1위.",
    href: "/po-film/standard/coating-plus",
    catalogHref: `/api/r2/asset?key=${encodeURIComponent(coatingPlus.catalogPdf!)}`,
    image: coatingPlus.hero.src,
    imageAlt: coatingPlus.hero.alt,
  },
  {
    name: coatingStrong.name.ko,
    sub: "시장 최고의 가성비.",
    href: "/po-film/standard/coating-strong",
    catalogHref: `/api/r2/asset?key=${encodeURIComponent(coatingStrong.catalogPdf!)}`,
    image: coatingStrong.hero.src,
    imageAlt: coatingStrong.hero.alt,
  },
];

export default function ProductTileGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {TILES.map((tile) => (
        <div
          key={tile.href}
          className="relative h-[460px] overflow-hidden bg-paper-soft md:h-[580px]"
        >
          <SmartImage
            src={tile.image}
            alt={tile.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={`object-cover ${tile.imageBottom ? "object-bottom" : ""}`}
          />
          {/* 상단 카피 가독성 스크림 */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-black/55 to-transparent"
          />

          <div className="absolute inset-x-0 top-0 px-6 pt-[44px] text-center md:pt-[52px]">
            <h3 className="text-[32px] font-semibold leading-[1.1] tracking-display text-white md:text-[40px]">
              {tile.name}
            </h3>
            <p className="mt-1 text-[18px] leading-snug text-white/90 md:text-[21px]">
              {tile.sub}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={tile.href}
                className="apple-button apple-button-primary !min-h-[36px] !px-4 !text-[14px]"
              >
                자세히 보기
              </Link>
              <a
                href={tile.catalogHref}
                className="apple-button !min-h-[36px] bg-white !px-4 !text-[14px] text-ink-invert hover:bg-white/90"
              >
                {tile.catalogLabel ?? "카탈로그 보기"}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
