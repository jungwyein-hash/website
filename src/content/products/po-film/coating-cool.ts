import type { Product } from "@/lib/types";

export const coatingCool: Product = {
  slug: "coating-cool",
  category: "po-film",
  tier: "standard",
  brand: "arts",
  origin: "SAEMI-TECH",
  name: { ko: "코팅 쿨", en: "Coating Cool" },
  tagline: {
    ko: "한국 기술로 열을 차단하는 차열 코팅 PO필름.",
  },
  intro: {
    ko: "여름철 하우스 내부 온도가 작물의 생육을 흔드는 시기, 코팅 쿨은 빛은 들이고 열은 줄여 줍니다. 세계특허 차열 기술을 적용한 한국산 PO필름으로, 새미 스탠다드 라인업의 새 기준입니다.",
  },
  filmType: "차열",
  thickness: [0.15, 0.1],
  bigSpecs: [
    { label: "두께", value: "0.15 / 0.10", unit: "mm" },
    { label: "특허", value: "세계특허", unit: "" },
    { label: "분류", value: "차열투명", unit: "" },
  ],
  highlights: [
    {
      title: "세계특허 차열 기술",
      body: "한국 기술로 개발된 차열 코팅. 빛은 통과시키되, 열은 줄입니다.",
    },
    {
      title: "여름 작기에 강함",
      body: "고온기 하우스 내부 온도를 낮춰 작물 스트레스를 줄이고, 환기 부담을 완화합니다.",
    },
    {
      title: "스탠다드 라인의 새 기준",
      body: "스탠다드 가격대에서 만나는 차열 성능 — 코팅플러스의 신뢰에 차열을 더한 NEW 라인.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["구분", "차열투명필름"],
        ["두께", "0.15 · 0.10 mm"],
        ["기술", "세계특허 차열 코팅"],
        ["제조", "SAEMI-TECH (대한민국)"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/standard/coating-cool/hero/exterior-01.webp",
    alt: "코팅 쿨 차열 PO필름이 설치된 하우스",
  },
  partners: [],
  badges: ["NEW", "특허", "SAEMI-TECH"],
};
