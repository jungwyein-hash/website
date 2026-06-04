import type { Product } from "@/lib/types";

export const misanranEstar: Product = {
  slug: "misanran-estar",
  category: "po-film",
  tier: "premium",
  brand: "saemi",
  origin: "Made in Japan",
  name: { ko: "미산란 이스타", en: "Misanran Estar" },
  tagline: {
    ko: "이스타의 가벼운 두께 위에, 산란각의 정교함을 더했습니다.",
  },
  intro: {
    ko: "이스타(0.10mm)와 같은 가벼움을 유지하면서, 빛만 다시 다듬었습니다. 시공의 부담은 그대로, 빛의 도달 범위는 더 넓게. 한 시즌의 작물 사이사이까지 빛이 고르게 닿습니다.",
  },
  filmType: "산란",
  thickness: [0.1],
  bigSpecs: [
    { label: "두께", value: "0.10", unit: "mm" },
    { label: "내구", value: "3", unit: "년" },
    { label: "결", value: "산란" },
  ],
  highlights: [
    {
      title: "가벼운 산란",
      body: "0.10mm의 가벼운 두께에 산란각 설계를 더해, 시공의 손에는 부담을 주지 않고 빛에는 폭을 더합니다.",
    },
    {
      title: "이스타의 무적성",
      body: "물방울이 잎에 닿지 않게 하는 코팅 무적성을 그대로 가져갑니다. 빛이 흐릴 일이 없습니다.",
    },
    {
      title: "정확한 광 분포",
      body: "이스타와 같은 광학 설계 위에 산란을 얹어, 잎 사이사이로 빛이 균일하게 흐릅니다.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["분류", "산란필름 · 코팅 PO"],
        ["두께", "0.10 mm"],
        ["원산지", "일본"],
        ["내구 연한", "3년"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/premium/misanran-estar/hero/exterior-01.webp",
    alt: "미산란 이스타가 시공된 하우스",
  },
  catalogPdf: "company/catalog/diastar-2025.pdf",
  partners: [],
  badges: ["Made in Japan"],
};
