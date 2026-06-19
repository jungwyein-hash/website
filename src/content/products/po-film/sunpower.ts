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
      title: "광합성 촉진 분광필름",
      body: "빛을 산란시켜 광합성 유효파장(PAR)과 적색광(600~700nm)을 증폭, 작물의 광합성과 성장을 촉진해 수확량을 크게 늘립니다.",
    },
    {
      title: "높은 착과율·품질 향상",
      body: "분광효과로 과실의 화상을 방지하고 착과율을 높여 작물의 품질을 향상시킵니다.",
    },
    {
      title: "개선된 보온·산란 효과",
      body: "개선된 보온제로 일반 PO필름보다 높은 온도를 유지하고, 산란효과로 여름철 내부 온도를 3~4℃ 낮춥니다.",
    },
    {
      title: "해충 기피 친환경 농업",
      body: "증폭된 자외선이 온실가루이 등 해충과 병원균 증식을 억제해 무농약 친환경 농업이 가능합니다.",
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
