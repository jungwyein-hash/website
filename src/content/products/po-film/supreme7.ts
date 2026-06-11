import type { Product } from "@/lib/types";

// 출처: 슈프림7 공식 카탈로그 (company/catalog/supreme7-kr.pdf, 2026)
export const supreme7: Product = {
  slug: "supreme7",
  category: "po-film",
  tier: "premium",
  brand: "saemi",
  origin: "SAEMI-TECH",
  since: 2026,
  name: { ko: "슈프림7", en: "Supreme 7" },
  tagline: {
    ko: "업계 최초 7층 PO필름. 초정밀 코팅 설계, 최고급 원료.",
  },
  intro: {
    ko: "슈프림7은 업계 최초의 7층 구조 코팅 PO필름입니다. 외층의 자외선 차단부터 내층의 결로 제어까지 — 각 층이 단일·정밀 처방으로 자기 역할에 집중하고, 무기 바인더 기반의 초정밀 코팅층이 표면을 지킵니다. 까다로운 참외 재배 환경에서 검증된 보온 기술을 7중 구조로 한 단계 더 진화시켰습니다.",
  },
  filmType: "투명",
  bigSpecs: [
    { label: "구조", value: "7", unit: "층" },
    { label: "코팅", value: "무기 바인더", unit: "" },
    { label: "포지션", value: "업계 최초", unit: "" },
  ],
  highlights: [
    {
      title: "업계 최초 7층 설계 구조",
      body: "각 층마다 단일·정밀 처방이 가능해 재료 간 간섭 없는 정밀 설계 — 두께 편차를 줄이고 내농약제 처방을 더했습니다.",
    },
    {
      title: "와이어로프식 7층 보강",
      body: "와이어로프가 여러 가닥의 강선으로 힘을 나누듯, 7개의 층이 충격과 장력을 분산하고 층간 계면이 크랙의 진행을 늦춥니다.",
    },
    {
      title: "초정밀 무기 바인더 코팅",
      body: "무기 성분 간의 치밀한 화학 결합으로 표면 강도를 높여, 전장 작업 시 스크래치와 산형현상을 억제합니다.",
    },
    {
      title: "입증된 보온 성능의 진화",
      body: "고보온성이 요구되는 참외 재배 환경에서 검증된 기술에 7중 구조를 더해 — 보온력을 강화해도 선명한 투명도를 유지합니다.",
    },
  ],
  fullSpecs: [
    {
      group: "7층 구조 (외측 → 내측)",
      rows: [
        ["L07", "내후층 (Weathering)"],
        ["L06", "강도 증가층 (Reinforcement)"],
        ["L05", "보온층 (Thermal Insulation)"],
        ["L04", "적외선 차단층 (IR Barrier)"],
        ["L03", "보온층 (Thermal Insulation)"],
        ["L02", "강도 증가층 (Reinforcement)"],
        ["L01", "노화방지층 (Anti-Aging)"],
        ["L-C", "무기 바인더 코팅층 (Coating Layer)"],
      ],
    },
    {
      group: "기본",
      rows: [
        ["구분", "프리미엄 7층 코팅 PO필름 (투명)"],
        ["생산", "차세대 7중 코팅 설비"],
        ["제조", "Engineered by Saemi in Korea"],
        ["출시", "2026년"],
      ],
    },
  ],
  hero: {
    src: "",
    alt: "슈프림7 — 업계 최초 7층 코팅 PO필름",
  },
  heroVideo: {
    src: "products/po-film/premium/supreme7/hero/videos/night-to-day.mp4",
  },
  catalogPdf: "company/catalog/supreme7-kr.pdf",
  partners: [],
  badges: ["NEW", "특허", "SAEMI-TECH"],
};
