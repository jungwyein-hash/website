import type { Product } from "@/lib/types";

export const diastar: Product = {
  slug: "diastar",
  category: "po-film",
  tier: "premium",
  brand: "saemi",
  origin: "Made in Japan · 스미토모화학",
  name: { ko: "다이아스타", en: "Diastar" },
  tagline: {
    ko: "타협 없는 탁월함. 한 장이 한 해를 받칩니다.",
  },
  intro: {
    ko: "다섯 해, 한 장 — 농가의 한 시즌이 그 위에서 흐릅니다. 빛이 통과하는 방식, 야간 온도가 머무는 방식, 빗방울이 흐르는 방식. 일본 MKV Advance가 오래 다듬어 온 코팅 PO 기술이, 새미를 통해 한국 농업으로 들어옵니다.",
  },
  filmType: "투명",
  thickness: [0.15],
  bigSpecs: [
    { label: "두께", value: "0.15", unit: "mm" },
    { label: "내구", value: "5", unit: "년" },
    { label: "원산지", value: "Japan" },
  ],
  highlights: [
    {
      title: "장기 방진성",
      body: "코팅의 무적 성능이 시간이 흘러도 흐려지지 않도록 설계되었습니다. 한 시즌의 마지막에도, 처음의 빛이 그대로 들어옵니다.",
    },
    {
      title: "두께 균일도",
      body: "한 롤의 처음과 끝, 가운데와 가장자리가 같은 두께로 흐릅니다. 시공의 균질함과 보온의 일관성을 함께 만듭니다.",
    },
    {
      title: "장기 강도",
      body: "5년의 시간을 견디도록, 인장과 충격 모두에 안정적인 강도로 마감했습니다. 자주 갈아 끼우는 부담이 줄어듭니다.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["분류", "투명필름 · 코팅 PO"],
        ["두께", "0.15 mm"],
        ["원산지", "일본 (스미토모화학)"],
        ["내구 연한", "5년"],
        ["맞춤", "길이 1m, 폭 10cm 단위"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/premium/diastar/hero/exterior-01.webp",
    alt: "다이아스타가 시공된 비닐하우스 단지",
  },
  heroVideo: {
    src: "products/po-film/premium/diastar/farms/221101-농촌진흥청-맘모스하우스/video/exterior-01.mp4",
    poster: "products/po-film/premium/diastar/hero/exterior-01.webp",
  },
  gallery: [
    { src: "products/po-film/premium/diastar/hero/exterior-01.webp", alt: "다이아스타 시공 외관 1" },
    { src: "products/po-film/premium/diastar/hero/interior-01.webp", alt: "다이아스타 하우스 내부 1" },
    { src: "products/po-film/premium/diastar/hero/exterior-02.webp", alt: "다이아스타 시공 외관 2" },
    { src: "products/po-film/premium/diastar/hero/interior-02.webp", alt: "다이아스타 하우스 내부 2" },
    { src: "products/po-film/premium/diastar/hero/exterior-03.webp", alt: "다이아스타 시공 외관 3" },
    { src: "products/po-film/premium/diastar/hero/interior-03.webp", alt: "다이아스타 하우스 내부 3" },
    { src: "products/po-film/premium/diastar/hero/exterior-04.webp", alt: "다이아스타 시공 외관 4" },
    { src: "products/po-film/premium/diastar/hero/interior-04.webp", alt: "다이아스타 하우스 내부 4" },
    { src: "products/po-film/premium/diastar/hero/exterior-05.webp", alt: "다이아스타 시공 외관 5" },
    { src: "products/po-film/premium/diastar/hero/interior-05.webp", alt: "다이아스타 하우스 내부 5" },
  ],
  bestFarms: [
    {
      slug: "kim-sanggyu-seongju-melon",
      farmer: "김상규 마이스터",
      region: "경북 성주",
      crop: "참외",
      round: "1회",
      note: "우리 밭의 지형에 맞는 필름을 사용하니 초물 수확도 빨라지고 출하량 증가에도 도움이 되었습니다. 2023년처럼 기온이 크게 떨어진 겨울에도 보온성이 좋아 열매 착과와 크기가 안정적으로 유지되었습니다.",
      imageTransform: { zoom: 1.5, dx: -8, dy: 12 },
      hero: {
        src: "products/po-film/premium/diastar/best-farms/kim-sanggyu-seongju-melon-v1/231006/gallery/portrait-01.webp",
        alt: "김상규 마이스터의 다이아스타 인물 사진",
      },
    },
    {
      slug: "park-junsik-goseong-tomato",
      farmer: "박준식 농가",
      region: "경남 고성",
      crop: "토마토",
      round: "2회",
      note: "빛, 온도, 보온을 함께 안정적으로 유지하는 환경이 필요했고, 다이아스타 필름을 사용하면서 이런 조건이 잡히기 시작하여 과실의 광택과 육질, 당도 품질이 안정되었습니다.",
      imageTransform: { dy: -4 },
      hero: {
        src: "products/po-film/premium/diastar/best-farms/park-junsik-goseong-tomato-v2/250402/gallery/portrait-01.webp",
        alt: "박준식 농가의 다이아스타 인물 사진",
      },
    },
    {
      slug: "shin-yunhwa-gimhae-rose",
      farmer: "신윤화 농가",
      region: "경남 김해",
      crop: "장미",
      round: "1회",
      note: "하우스 안에서 빛이 고르게 퍼지니 나무 생육이 안정되고 꽃대와 꽃 형태도 균일하게 형성돼 생산량도 꾸준히 유지되고 있습니다.",
      imageTransform: { zoom: 1.5, dy: -10 },
      hero: {
        src: "products/po-film/premium/diastar/best-farms/shin-yunhwa-gimhae-rose-v1/240213/gallery/portrait-01.webp",
        alt: "신윤화 농가의 다이아스타 인물 사진",
      },
    },
  ],
  catalogPdf: "company/catalog/diastar-2025.pdf",
  partners: ["sumitomo"],
  badges: ["Made in Japan"],
};
