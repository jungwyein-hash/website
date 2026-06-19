import type { Product } from "@/lib/types";

export const misanranDiastar: Product = {
  slug: "misanran-diastar",
  category: "po-film",
  tier: "premium",
  brand: "saemi",
  origin: "Made in Japan · MKV Advance",
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
      title: "다이아스타급 투과·무적",
      body: "전광선 투과율과 무적성능은 다이아스타와 동일하며, 두께 0.15mm·경제수명 5년을 제공합니다.",
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
        ["두께", "0.15 mm"],
        ["원산지", "일본 (MKV Advance)"],
        ["내구 연한", "5년"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/premium/misanran-diastar/hero/exterior-01.webp",
    alt: "미산란 다이아스타가 시공된 하우스",
  },
  heroVideo: {
    src: "products/po-film/premium/diastar/farms/221101-농촌진흥청-맘모스하우스/video/exterior-01.mp4",
    poster: "products/po-film/premium/misanran-diastar/hero/exterior-01.webp",
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
