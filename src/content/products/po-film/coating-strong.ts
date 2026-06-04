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
      title: "시장 최고 가성비",
      body: "스탠다드 라인의 검증된 품질을 합리적인 비용에 — 한 해 농사의 부담을 줄여 줍니다.",
    },
    {
      title: "세 단계 두께",
      body: "0.06mm 센터그립부터 0.15mm까지. 시즌과 시공 조건에 맞춰 단계별로 고를 수 있습니다.",
    },
    {
      title: "검증된 새미 코팅",
      body: "코팅플러스와 같은 새미 코팅 기술. 결로와 흐림이 작물에 닿지 않습니다.",
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
