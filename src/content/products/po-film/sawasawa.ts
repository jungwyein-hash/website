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
      title: "산란광 조기수확",
      body: "하우스로 들어오는 전광선의 양은 유지한 채 빛을 고르게 산란시켜, 작물의 광합성 효율을 균일화하고 성장·착색을 촉진합니다.",
    },
    {
      title: "부드러운 산란광 화상방지",
      body: "뜨거운 직사광을 산란시켜 잎과 열매의 온도 상승을 억제하고 온도 편차를 줄여 작물의 화상(Tipburn)을 방지합니다.",
    },
    {
      title: "광환경·작업환경 개선",
      body: "여름철 직사광을 부드럽게 산란시켜 하우스 내부 온도를 낮추고 눈부심을 줄여 작업환경을 개선합니다.",
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
