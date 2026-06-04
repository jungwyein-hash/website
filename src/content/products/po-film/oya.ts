import type { Product } from "@/lib/types";

export const oya: Product = {
  slug: "oya",
  category: "po-film",
  tier: "premium",
  brand: "saemi",
  origin: "Made in Japan · 일본 직수입",
  name: { ko: "오야", en: "Oya" },
  tagline: {
    ko: "유리같이 투명한 프리미엄 코팅필름.",
  },
  intro: {
    ko: "오야는 투명도를 한 시즌 동안 흩트리지 않도록 다듬은 일본 직수입 코팅 PO필름입니다. 0.15부터 0.10mm까지 세 단계의 두께로, 시공 환경과 작목에 맞춰 정확히 고를 수 있습니다.",
  },
  filmType: "투명",
  thickness: [0.15, 0.12, 0.1],
  bigSpecs: [
    { label: "두께", value: "0.15 / 0.12 / 0.10", unit: "mm" },
    { label: "결", value: "투명" },
    { label: "원산지", value: "Japan" },
  ],
  highlights: [
    {
      title: "최상급 투명도, 최고의 광환경",
      body: "광량 손실을 최대한 줄여, 한 시즌의 첫 빛이 마지막까지 그대로 들어옵니다.",
    },
    {
      title: "더욱 발전한 깨끗한 무적성능",
      body: "물방울이 잎으로 떨어지지 않고 표면을 따라 흐릅니다. 결로의 흔적이 작물에 닿지 않습니다.",
    },
    {
      title: "향상된 강도, 안정적인 내구성",
      body: "사용기간 내내 형태가 흐트러지지 않도록 설계된 강도. 자주 갈아 끼우는 부담을 덜어 줍니다.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["분류", "투명필름 · 코팅 PO"],
        ["두께", "0.15 · 0.12 · 0.10 mm"],
        ["원산지", "일본 (직수입)"],
        ["맞춤", "길이 · 폭 맞춤제작"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/premium/oya/hero/exterior-01.webp",
    alt: "오야가 시공된 하우스",
  },
  bestFarms: [
    {
      slug: "park-sujin-nonsan-strawberry",
      farmer: "박수진",
      region: "충남 논산",
      crop: "딸기",
      hero: {
        src: "products/po-film/premium/oya/best-farms/park-sujin-nonsan-strawberry-v1/portrait-01.webp",
        alt: "박수진 농가 — 오야 하우스 안에서",
      },
    },
    {
      slug: "yoon-jeongwon-changwon-tomato",
      farmer: "윤정원",
      region: "경남 창원",
      crop: "토마토",
      hero: {
        src: "products/po-film/premium/oya/best-farms/yoon-jeongwon-changwon-tomato-v2/250402/gallery/detail-01.webp",
        alt: "윤정원 농가의 오야 시공 디테일",
      },
    },
    {
      slug: "jeong-jongseop-jinju-pepper",
      farmer: "정종섭",
      region: "경남 진주",
      crop: "고추",
      hero: {
        src: "products/po-film/premium/oya/best-farms/jeong-jongseop-jinju-pepper-v2/250627/gallery/detail-01.webp",
        alt: "정종섭 농가의 오야 시공 디테일",
      },
    },
  ],
  catalogPdf: "company/catalog/oya-sawasawa.pdf",
  partners: [],
  badges: ["Made in Japan"],
};
