import type { Product } from "@/lib/types";

export const sansaxia: Product = {
  slug: "sansaxia",
  category: "po-film",
  tier: "premium",
  brand: "saemi",
  origin: "Made in Japan · 스미토모화학",
  name: { ko: "산삭시아", en: "SanSaXIA" },
  tagline: {
    ko: "산테라가 가치 있는 미래를 꽃피우다 — 일본 스미토모화학 최고의 걸작품.",
  },
  intro: {
    ko: "산삭시아는 산테라(SanTera) · 사쿠(咲) · X(미래) · 아시아의 글자를 모은 이름입니다. 일본 최초로 PO필름을 개발한 스미토모화학이, 가장 오래 다듬어 온 코팅 기술을 한 장의 필름 안에 모아 두었습니다. 한 시즌의 시작과 끝이 같은 빛 아래에서 흐르도록.",
  },
  filmType: "투명",
  thickness: [0.15, 0.1],
  bigSpecs: [
    { label: "두께", value: "0.15 / 0.10", unit: "mm" },
    { label: "내구", value: "3 / 2", unit: "년" },
    { label: "원산지", value: "Japan" },
  ],
  highlights: [
    {
      title: "안열 강도 향상",
      body: "외부 환경의 변화에도 처지지 않는 안정적인 강도. 큰 일교차의 봄·가을 시즌에도 형태가 유지됩니다.",
    },
    {
      title: "코팅도막 내구성",
      body: "장기 보온성을 만드는 코팅 도막이 시간이 흘러도 닳지 않도록 설계되었습니다. 처음의 보온이 마지막까지 이어집니다.",
    },
    {
      title: "개구성 향상",
      body: "롤을 풀어 펼칠 때의 자연스러움 — 시공의 손길에 거스름이 없는 결이 잡혀 있습니다.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["분류", "투명필름 · 코팅 PO"],
        ["두께", "0.15 mm · 0.10 mm"],
        ["원산지", "일본 (스미토모화학, 일본 최초 PO필름 개발사)"],
        ["내구 연한", "3년 / 2년"],
        ["맞춤", "길이 10cm 단위 · 폭 1m 단위"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/premium/sansaxia/hero/exterior-01.webp",
    alt: "산삭시아가 시공된 하우스 단지",
  },
  bestFarms: [
    {
      slug: "hwang-cheonseong-chilgok-cucumber",
      farmer: "황천성",
      region: "경북 칠곡",
      crop: "오이",
      hero: {
        src: "products/po-film/premium/sansaxia/best-farms/hwang-cheonseong-chilgok-cucumber-v2/250417/gallery/detail-01.webp",
        alt: "황천성 농가의 산삭시아 시공 디테일",
      },
    },
    {
      slug: "nam-changhyeon-gongju-grape",
      farmer: "남창현",
      region: "충남 공주",
      crop: "포도",
      hero: {
        src: "products/po-film/premium/sansaxia/best-farms/nam-changhyeon-gongju-grape-v1/231006/gallery/detail-01.webp",
        alt: "남창현 농가의 산삭시아 시공 디테일",
      },
    },
  ],
  catalogPdf: "company/catalog/sansaxia.pdf",
  partners: ["sumitomo"],
  badges: ["Made in Japan"],
};
