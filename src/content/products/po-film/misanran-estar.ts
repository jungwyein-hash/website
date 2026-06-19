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
      title: "최적화된 산란 각도",
      body: "필름을 통과한 빛의 산란각도가 최적화되어 하우스 내부가 비교적 밝게 느껴지는 산란광 필름입니다.",
    },
    {
      title: "광합성량 증가·품질 향상",
      body: "최적화된 산란광으로 광합성량을 늘리고 작물의 화상을 방지해 품질 향상을 기대할 수 있습니다.",
    },
    {
      title: "높은 투과·낮은 산란도",
      body: "전광선투과율 약 90%·산란도 약 20%로, 타사 산란광 필름(투과율 약 89%·산란도 약 35%)보다 밝은 환경을 만듭니다.",
    },
    {
      title: "이스타급 투과·무적",
      body: "전광선 투과율과 무적성능은 이스타와 동일하며, 두께 0.10mm·경제수명 3년을 제공합니다.",
    },
    {
      title: "작업성·관찰 용이",
      body: "하우스 안에서 구름의 유무와 움직임을 확인할 수 있어 동절기·흐린 날에도 광량을 확보하고 작업이 쉽습니다.",
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
