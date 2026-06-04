import type { Product } from "@/lib/types";

export const sunpower: Product = {
  slug: "sunpower",
  category: "po-film",
  tier: "premium",
  brand: "saemi",
  origin: "SAEMI-TECH · 새미 독점",
  since: 2023,
  name: { ko: "썬파워", en: "Sunpower" },
  tagline: {
    ko: "광기술의 결정체. 새미가 단독으로 공급하는 분광 PO필름.",
  },
  intro: {
    ko: "썬파워는 광합성에 가장 효율적인 파장으로 빛을 분광합니다. 같은 시간 같은 빛이라도, 작물의 입장에서는 더 깊고 더 길어집니다. 세계특허 기술이 한 장의 필름 안에 들어 있고, 새미를 통해서만 만날 수 있습니다.",
  },
  filmType: "분광",
  thickness: [0.1],
  bigSpecs: [
    { label: "두께", value: "0.10", unit: "mm" },
    { label: "기술", value: "분광 · 세계특허" },
    { label: "공급", value: "새미 독점" },
  ],
  highlights: [
    {
      title: "광합성을 끌어올립니다",
      body: "분광된 빛이 작물의 광합성을 끊임없이 자극해, 같은 면적에서 더 많은 결실을 거둡니다.",
    },
    {
      title: "보온성으로 품질을",
      body: "분광 코팅이 야간 온도를 안정적으로 잡아 줍니다. 차게 자란 작물의 결이 단단해집니다.",
    },
    {
      title: "해충 기피, 친환경",
      body: "온실가루이를 비롯한 해충이 분광된 빛 아래를 기피합니다. 약제 의존을 줄이는 방향으로.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["분류", "분광 PO필름"],
        ["두께", "0.10 mm"],
        ["기술", "세계특허 분광 코팅"],
        ["공급", "새미 독점 (2023~)"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/premium/sunpower/hero/exterior-01.webp",
    alt: "썬파워 분광필름이 시공된 하우스",
  },
  bestFarms: [
    {
      slug: "choi-jaeil-hanam-leafy-greens",
      farmer: "최재일",
      region: "경기 하남",
      crop: "잎채소",
      hero: {
        src: "products/po-film/premium/sunpower/best-farms/choi-jaeil-hanam-leafy-greens-v2/250515/gallery/exterior-01.webp",
        alt: "최재일 농가의 썬파워 시공 외관",
      },
    },
  ],
  catalogPdf: "company/catalog/sunpower.pdf",
  partners: [],
  badges: ["특허", "독점", "SAEMI-TECH"],
};
