import type { Product } from "@/lib/types";

export const coatingStrong: Product = {
  slug: "coating-strong",
  category: "po-film",
  tier: "standard",
  brand: "arts",
  origin: "SAEMI-TECH",
  name: { ko: "코팅스트롱", en: "Coating Strong" },
  tagline: {
    ko: "시장 최고의 가성비 — 믿을 수 있는 새미 스탠다드 코팅 PO필름.",
  },
  intro: {
    ko: "코팅스트롱은 코팅플러스의 검증된 품질을 토대로, 가성비를 최우선에 둔 스탠다드 라인입니다. 0.06mm 센터그립부터 0.15mm까지 세 단계로, 합리적인 비용으로 한 시즌을 안정적으로 보낼 수 있습니다.",
  },
  filmType: "투명",
  thickness: [0.15, 0.1, 0.06],
  bigSpecs: [
    { label: "두께", value: "0.15 / 0.10 / 0.06", unit: "mm" },
    { label: "분류", value: "투명필름", unit: "" },
    { label: "포지션", value: "가성비", unit: "" },
  ],
  highlights: [
    {
      title: "시장 최고의 가성비",
      body: "저렴한 가격으로 농업인을 만족시키기 위해 새미가 개발한 스탠다드 투명 PO필름입니다.",
    },
    {
      title: "6층 구조 강도·내구성",
      body: "북미산 메탈로센 LLDPE를 기반으로 한 6층 구조로 강력한 강도와 내구성을 갖췄습니다.",
    },
    {
      title: "반영구 무적 지속",
      body: "무적성능 테스트에서 일반 PE는 6개월에 그치지만, 코팅스트롱은 특수코팅층으로 무적(無滴) 성능이 반영구적으로 지속됩니다.",
    },
    {
      title: "두께·센터그립 맞춤제작",
      body: "0.15·0.10·0.06mm 두께와 센터그립을 갖춘 재활용 가능 투명 PO필름으로 폭·길이 맞춤제작이 가능합니다.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["구분", "투명필름 · 코팅 PO"],
        ["두께", "0.15 · 0.10 · 0.06 mm (센터그립)"],
        ["제조", "SAEMI-TECH (대한민국)"],
        ["분류", "스탠다드"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/standard/coating-strong/hero/interior-01.webp",
    alt: "코팅스트롱 PO필름이 설치된 하우스 내부",
  },
  catalogPdf: "company/catalog/coating-strong.pdf",
  partners: [],
  badges: ["SAEMI-TECH"],
};
