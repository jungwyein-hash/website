import type { Product } from "@/lib/types";

export const allSeason: Product = {
  slug: "allseason",
  category: "po-film",
  tier: "standard",
  brand: "arts",
  origin: "SAEMI-TECH",
  name: { ko: "올시즌", en: "All Season" },
  tagline: {
    ko: "한 장으로 사계절. 빛이 바뀌어도, 교체 부담 없이.",
  },
  intro: {
    ko: "올시즌은 새미테크가 개발한 차세대 변광 코팅 PO필름입니다. 계절에 따라 빛의 성격이 달라지는 한국의 환경에 맞춰, 한 장의 필름이 사계절 모두에 적응합니다.",
  },
  filmType: "변광",
  thickness: [0.1],
  bigSpecs: [
    { label: "두께", value: "0.10", unit: "mm" },
    { label: "기술", value: "변광", unit: "" },
    { label: "사용", value: "사계절", unit: "" },
  ],
  highlights: [
    {
      title: "차세대 변광 기술",
      body: "계절·기상에 따라 빛의 성격이 달라지는 환경에 맞춰, 한 장의 필름이 사계절을 적응합니다.",
    },
    {
      title: "사계절 한 장",
      body: "여름의 강한 직사광부터 겨울의 약한 빛까지 — 교체 부담 없이 한 시즌을 한 장으로.",
    },
    {
      title: "스탠다드의 NEW 라인",
      body: "코팅플러스의 신뢰 위에 변광 기술을 얹은, 스탠다드 라인의 새 기준.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["구분", "변광필름"],
        ["두께", "0.10 mm"],
        ["기술", "차세대 변광 기술"],
        ["제조", "SAEMI-TECH (대한민국)"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/standard/allseason/hero/interior-01.webp",
    alt: "올시즌 변광 PO필름이 설치된 하우스 내부",
  },
  partners: [],
  badges: ["NEW", "SAEMI-TECH"],
};
