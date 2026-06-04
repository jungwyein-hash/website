import type { Product } from "@/lib/types";

export const misanranDiastar: Product = {
  slug: "misanran-diastar",
  category: "po-film",
  tier: "premium",
  brand: "saemi",
  origin: "Made in Japan · 스미토모화학",
  name: { ko: "미산란 다이아스타", en: "Misanran Diastar" },
  tagline: {
    ko: "최적화 된 빛의 산란 각도. 작물 사이사이로 빛이 더 깊이 듭니다.",
  },
  intro: {
    ko: "다이아스타의 모든 결을 그대로 두고, 빛의 길만 다시 디자인했습니다. 광합성에 가장 도움이 되는 각도로 산란된 빛은, 잎의 윗면에 머물지 않고 작물의 안쪽까지 닿습니다. 그늘이 줄어들고, 작물의 매일이 한층 고르게 흐릅니다.",
  },
  filmType: "산란",
  thickness: [0.15],
  bigSpecs: [
    { label: "두께", value: "0.15", unit: "mm" },
    { label: "내구", value: "5", unit: "년" },
    { label: "결", value: "산란" },
  ],
  highlights: [
    {
      title: "정밀한 산란각",
      body: "잎 사이의 그림자를 줄이도록 산란각을 데이터로 설계했습니다. 같은 빛이 더 많은 잎에 닿습니다.",
    },
    {
      title: "다이아스타의 모든 성능",
      body: "방진·강도·두께 균일도 — 다이아스타가 다듬어 온 모든 결을 그대로 가져갑니다.",
    },
    {
      title: "스미토모화학 협력",
      body: "일본 글로벌 농업필름 선도기업의 첨단 기술로 만들어진 일본 직생산 라인.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["분류", "산란필름 · 코팅 PO"],
        ["두께", "0.15 mm"],
        ["원산지", "일본 (스미토모화학)"],
        ["내구 연한", "5년"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/premium/misanran-diastar/hero/exterior-01.webp",
    alt: "미산란 다이아스타가 시공된 하우스",
  },
  bestFarms: [
    {
      slug: "choi-jaeil-hanam-leafy-greens",
      farmer: "최재일",
      region: "경기 하남",
      crop: "잎채소",
      hero: {
        src: "products/po-film/premium/misanran-diastar/best-farms/choi-jaeil-hanam-leafy-greens-v2/250515/gallery/detail-01.webp",
        alt: "최재일 농가의 미산란 다이아스타 시공 디테일",
      },
    },
    {
      slug: "hwang-ikhyeon-cheorwon-tomato",
      farmer: "황익현",
      region: "강원 철원",
      crop: "토마토",
      hero: {
        src: "products/po-film/premium/misanran-diastar/best-farms/hwang-ikhyeon-cheorwon-tomato-v1/231106/gallery/detail-01.webp",
        alt: "황익현 농가의 미산란 다이아스타 시공 디테일",
      },
    },
  ],
  catalogPdf: "company/catalog/diastar-2025.pdf",
  partners: ["sumitomo"],
  badges: ["Made in Japan"],
};
