import type { Product } from "@/lib/types";

export const coatingPlus: Product = {
  slug: "coating-plus",
  category: "po-film",
  tier: "standard",
  brand: "arts",
  origin: "SAEMI-TECH (대한민국)",
  since: 2013,
  name: { ko: "코팅플러스", en: "Coating Plus" },
  tagline: {
    ko: "한국 농가가 가장 많이 고른 한 장. 12년째 표준.",
  },
  intro: {
    ko: "2013년 출시 이래 가장 많이 선택받은 코팅 PO필름. 새미의 기술력으로 한국의 기상과 농업 환경에 맞춰 설계했습니다. 0.07mm 센터그립부터 0.15mm 표준 두께까지 다섯 단계 라인업으로, 작목과 시공 조건에 따라 정확히 고를 수 있습니다.",
  },
  filmType: "투명",
  thickness: [0.15, 0.12, 0.1, 0.08, 0.07],
  bigSpecs: [
    { label: "출시", value: "2013", unit: "년" },
    { label: "두께 옵션", value: "5", unit: "단계" },
    { label: "코팅 PO필름", value: "국내 1위", unit: "" },
  ],
  highlights: [
    {
      title: "검증된 스테디셀러",
      body: "2013년 개발 이후 한국의 특수한 기후와 농업 환경에 맞춰 지속 최적화되어 온, 국내 최다판매 코팅 PO필름입니다.",
    },
    {
      title: "6층 구조 코팅PO필름",
      body: "북미산 에틸렌 LLDPE 고급원료 기반의 6층 구조로 강력한 강도를 가지며, 특수코팅층이 장기간 무적(無滴) 성능을 발휘합니다.",
    },
    {
      title: "압도적인 강도·내구성",
      body: "북미산 고급원료를 최첨단 설비에서 생산해 강도와 내구성이 탁월하며, 장기간 부담 없이 사용할 수 있습니다.",
    },
    {
      title: "다섯 단계 두께",
      body: "0.07mm(센터그립)·0.08·0.10·0.12·0.15mm 중 시공 조건과 보온 목적에 맞춰 고를 수 있습니다.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["구분", "투명필름 · 코팅 PO"],
        ["두께", "0.15 · 0.12 · 0.10 · 0.08 · 0.07 mm"],
        ["출시", "2013년"],
        ["제조", "SAEMI-TECH (대한민국)"],
      ],
    },
    {
      group: "용도",
      rows: [
        ["적용", "비닐하우스 · 스마트팜 외장 피복"],
        ["권장", "범용. 작목 무관. 농가의 표준 선택"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/standard/coating-plus/hero/exterior-01.webp",
    alt: "코팅플러스가 설치된 비닐하우스 외관",
  },
  gallery: [
    {
      src: "products/po-film/standard/coating-plus/hero/exterior-02.webp",
      alt: "코팅플러스 시공 외관 — 풍경",
    },
    {
      src: "products/po-film/standard/coating-plus/hero/exterior-04.webp",
      alt: "코팅플러스 시공 외관 — 단지",
    },
    {
      src: "products/po-film/standard/coating-plus/hero/exterior-06.webp",
      alt: "코팅플러스 시공 외관 — 광활한 농지",
    },
  ],
  catalogPdf: "company/catalog/coating-plus.pdf",
  partners: [],
  badges: ["1위", "SAEMI-TECH"],
};
