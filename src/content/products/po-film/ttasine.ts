import type { Product } from "@/lib/types";

export const ttasine: Product = {
  slug: "ttasine",
  category: "po-film",
  tier: "standard",
  brand: "arts",
  origin: "SAEMI-TECH",
  since: 2024,
  name: { ko: "따시네", en: "Ttasine" },
  tagline: {
    ko: "업계 최초 보온터널용 코팅 PO필름.",
  },
  intro: {
    ko: "따시네는 보온터널 전용으로 개발된 업계 최초의 코팅 PO필름입니다. 0.05mm의 가벼운 두께로 시공 부담을 줄이면서도, 코팅 PO의 보온성을 보온터널에 그대로 가져옵니다.",
  },
  filmType: "보온터널",
  thickness: [0.05],
  bigSpecs: [
    { label: "두께", value: "0.05", unit: "mm" },
    { label: "용도", value: "보온터널", unit: "" },
    { label: "포지션", value: "업계 최초", unit: "" },
  ],
  highlights: [
    {
      title: "업계 최초 보온터널 코팅",
      body: "보온터널을 위해 처음 만들어진 코팅 PO필름. 가벼운 두께에 코팅의 보온성을 더했습니다.",
    },
    {
      title: "0.05mm의 가벼움",
      body: "시공이 잦은 보온터널 환경에 맞춰 가볍게. 작업의 부담을 줄여 줍니다.",
    },
    {
      title: "2024 신제품",
      body: "롱스타·그린포스와 함께 출시된 새미테크 신제품 3종 라인.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["구분", "보온터널용 필름 · 코팅 PO"],
        ["두께", "0.05 mm"],
        ["출시", "2024년"],
        ["제조", "SAEMI-TECH (대한민국)"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/standard/ttasine/hero/interior-01.webp",
    alt: "따시네 보온터널용 PO필름",
  },
  gallery: [
    {
      src: "products/po-film/standard/ttasine/hero/interior-02.webp",
      alt: "따시네 — 시공",
    },
    {
      src: "products/po-film/standard/ttasine/hero/interior-03.webp",
      alt: "따시네 — 보온터널",
    },
  ],
  partners: [],
  badges: ["NEW", "SAEMI-TECH"],
};
