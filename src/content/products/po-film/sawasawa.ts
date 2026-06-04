import type { Product } from "@/lib/types";

export const sawasawa: Product = {
  slug: "sawasawa",
  category: "po-film",
  tier: "premium",
  brand: "saemi",
  origin: "Made in Japan · 일본 직수입",
  name: { ko: "사와사와", en: "Sawasawa" },
  tagline: {
    ko: "풍부하고 부드러운 산란광.",
  },
  intro: {
    ko: "사와사와는 강한 직사광을 부드럽게 풀어, 잎 사이사이로 고르게 펼쳐 줍니다. 빛은 폭이 넓어지고, 작물의 잎 끝은 안전해집니다. 오야와 함께 새미의 일본 직수입 프리미엄 라인을 구성합니다.",
  },
  filmType: "산란",
  thickness: [0.15, 0.1],
  bigSpecs: [
    { label: "두께", value: "0.15 / 0.10", unit: "mm" },
    { label: "결", value: "산란" },
    { label: "원산지", value: "Japan" },
  ],
  highlights: [
    {
      title: "조기 수확",
      body: "고르게 분산된 빛이 잎의 안쪽까지 닿아, 작물의 한 시즌이 한 박자 앞당겨집니다.",
    },
    {
      title: "작물의 화상 방지",
      body: "강한 직사광이 부드러운 산란광으로 풀려, 잎 끝이 타지 않습니다. 한여름의 가장 예민한 작물도 받아 줍니다.",
    },
    {
      title: "작업 환경 개선",
      body: "하우스 안의 그늘과 눈부심이 함께 줄어, 사람의 일하는 시간도 한층 가벼워집니다.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["분류", "산란필름 · 코팅 PO"],
        ["두께", "0.15 · 0.10 mm"],
        ["원산지", "일본 (직수입)"],
        ["맞춤", "길이 · 폭 맞춤제작"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/premium/sawasawa/detail/detail-01.webp",
    alt: "사와사와 산란 PO필름의 결",
  },
  catalogPdf: "company/catalog/oya-sawasawa.pdf",
  partners: [],
  badges: ["Made in Japan"],
};
