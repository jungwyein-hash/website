import type { Product } from "@/lib/types";

// 상세 스펙(두께·구조)은 카탈로그 확보 후 보강 — 임의 수치 기재 금지
export const blackforce: Product = {
  slug: "blackforce",
  category: "po-film",
  tier: "standard",
  brand: "arts",
  origin: "SAEMI-TECH",
  name: { ko: "블랙포스", en: "Black Force" },
  tagline: {
    ko: "잡초를 빛부터 차단하는 흑색 멀칭 PO필름.",
  },
  intro: {
    ko: "블랙포스는 그린포스와 함께하는 멀칭 라인의 흑색 PO필름입니다. 빛을 차단해 잡초의 발아와 광합성을 억제하고, 멀칭 본연의 역할에 충실합니다.",
  },
  filmType: "흑색멀칭",
  bigSpecs: [
    { label: "분류", value: "흑색 멀칭", unit: "" },
    { label: "용도", value: "멀칭", unit: "" },
    { label: "제조", value: "SAEMI-TECH", unit: "" },
  ],
  highlights: [
    {
      title: "빛부터 차단",
      body: "흑색 필름이 광을 차단해 잡초의 발아와 광합성을 억제합니다.",
    },
    {
      title: "멀칭 라인의 한 쌍",
      body: "녹색의 그린포스, 흑색의 블랙포스 — 포장 조건에 맞춰 고릅니다.",
    },
    {
      title: "새미테크 품질관리",
      body: "입수·원단·출하 3단계 검사를 거치는 새미테크 라인입니다.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["구분", "흑색 멀칭 PO필름"],
        ["제조", "SAEMI-TECH (대한민국)"],
      ],
    },
  ],
  hero: {
    src: "",
    alt: "블랙포스 흑색 멀칭 PO필름",
  },
  partners: [],
  badges: ["SAEMI-TECH"],
};
