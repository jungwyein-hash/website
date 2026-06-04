import type { Product } from "@/lib/types";

export const anta: Product = {
  slug: "anta",
  category: "po-film",
  tier: "standard",
  brand: "arts",
  origin: "SAEMI-TECH",
  name: { ko: "안타", en: "Anta" },
  tagline: {
    ko: "일교차 심한 날에도 작물이 안 타는 코팅플러스 산란광 필름.",
  },
  intro: {
    ko: "안타는 일교차가 심한 한국의 봄·가을 작목을 위한 산란필름입니다. 강한 직사광이 부드럽게 펼쳐져 작물의 잎 끝까지 보호하고, 코팅플러스의 검증된 품질을 그대로 가져갑니다.",
  },
  filmType: "산란",
  thickness: [0.15],
  bigSpecs: [
    { label: "두께", value: "0.15", unit: "mm" },
    { label: "분류", value: "산란필름", unit: "" },
    { label: "베이스", value: "코팅플러스", unit: "" },
  ],
  highlights: [
    {
      title: "일교차 작목에 강함",
      body: "강한 직사광을 부드러운 산란광으로 바꿔, 잎 끝이 타는 일교차의 피해를 줄입니다.",
    },
    {
      title: "코팅플러스의 신뢰",
      body: "국내 1위 코팅플러스의 품질 위에 산란광 기술을 얹은 스탠다드 산란필름.",
    },
    {
      title: "한국 농업 맞춤",
      body: "한국의 기상 데이터를 바탕으로, 봄·가을 일교차에 가장 잘 맞도록 설계.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["구분", "산란필름 · 코팅 PO"],
        ["두께", "0.15 mm"],
        ["제조", "SAEMI-TECH (대한민국)"],
        ["분류", "스탠다드"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/standard/anta/hero/exterior-01.webp",
    alt: "안타 산란 PO필름이 설치된 하우스",
  },
  gallery: [
    {
      src: "products/po-film/standard/anta/hero/exterior-02.webp",
      alt: "안타 — 시공 외관",
    },
  ],
  partners: [],
  badges: ["SAEMI-TECH"],
};
