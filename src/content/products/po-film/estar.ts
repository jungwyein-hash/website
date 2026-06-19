import type { Product } from "@/lib/types";

export const estar: Product = {
  slug: "estar",
  category: "po-film",
  tier: "premium",
  brand: "saemi",
  origin: "Made in Japan",
  name: { ko: "이스타", en: "Estar" },
  tagline: {
    ko: "뛰어난 투명성과 무적성. 설치할 때도, 사용할 때도 손에 안기는 두께.",
  },
  intro: {
    ko: "이스타 시리즈는 다이아스타 다음의 결입니다. 0.13mm와 0.10mm — 두 두께로 나뉘어, 시공의 가벼움과 사용의 만족 사이를 농가가 직접 고를 수 있습니다. 한 시즌의 빛은 정직하게, 결로는 작물의 곁에 닿지 않게.",
  },
  filmType: "투명",
  thickness: [0.13, 0.1],
  bigSpecs: [
    { label: "두께", value: "0.13 / 0.10", unit: "mm" },
    { label: "내구", value: "5 / 3", unit: "년" },
    { label: "원산지", value: "Japan" },
  ],
  highlights: [
    {
      title: "뛰어난 투명성",
      body: "투명성이 뛰어나 충분한 광량을 확보해 작물에 좋은 광환경을 조성하는 고품질 장기성 PO필름입니다.",
    },
    {
      title: "장기간 무적 효과",
      body: "무적(無滴) 효과가 장기간 지속되어 하우스 내부 물방울 맺힘을 오래도록 억제합니다.",
    },
    {
      title: "가성비 좋은 프리미엄",
      body: "뛰어난 가성비를 갖춘 프리미엄 제품으로 높은 고객 만족을 실현합니다.",
    },
    {
      title: "두께·수명 선택형",
      body: "두께 0.13mm(S·경제수명 5년)와 0.10mm(경제수명 3년) 중 선택할 수 있는 일본산 필름입니다.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["분류", "투명필름 · 코팅 PO"],
        ["두께", "0.13 mm (이스타 S) · 0.10 mm (이스타)"],
        ["원산지", "일본"],
        ["내구 연한", "5년 (S) · 3년"],
        ["맞춤", "길이 1m, 폭 10cm 단위"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/premium/estar/hero/exterior-01.webp",
    alt: "이스타 PO필름이 시공된 하우스",
  },
  bestFarms: [
    {
      slug: "kim-changyeon-jinju-pepper",
      farmer: "김창연",
      region: "경남 진주",
      crop: "고추",
      hero: {
        src: "products/po-film/premium/estar/best-farms/kim-changyeon-jinju-pepper-v2/250402/gallery/detail-01.webp",
        alt: "김창연 농가의 이스타 시공 디테일",
      },
    },
    {
      slug: "kim-chanhee-seongju-melon",
      farmer: "김찬희",
      region: "경북 성주",
      crop: "멜론",
      hero: {
        src: "products/po-film/premium/estar/best-farms/kim-chanhee-seongju-melon-v2/250417/gallery/detail-01.webp",
        alt: "김찬희 농가의 이스타 시공 디테일",
      },
    },
  ],
  catalogPdf: "company/catalog/diastar-2025.pdf",
  partners: [],
  badges: ["Made in Japan"],
};
