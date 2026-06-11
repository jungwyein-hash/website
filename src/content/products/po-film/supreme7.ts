import type { Product } from "@/lib/types";

// 상세 스펙(분류·두께·원산지)은 카탈로그 확보 후 보강 — 임의 수치 기재 금지
export const supreme7: Product = {
  slug: "supreme7",
  category: "po-film",
  tier: "premium",
  brand: "saemi",
  name: { ko: "슈프림7", en: "Supreme 7" },
  tagline: {
    ko: "프리미엄 라인의 새 이름, 슈프림7.",
  },
  intro: {
    ko: "슈프림7은 새미 프리미엄 라인에 새로 합류한 PO필름입니다. 상세 사양과 현장 자료는 준비 중입니다 — 도입 검토는 지금도 가능합니다.",
  },
  filmType: "투명",
  bigSpecs: [
    { label: "라인", value: "프리미엄", unit: "" },
    { label: "분류", value: "투명필름", unit: "" },
    { label: "상태", value: "자료 준비 중", unit: "" },
  ],
  highlights: [
    {
      title: "프리미엄 라인업",
      body: "다이아스타·산삭시아·오야와 같은 프리미엄 기준으로 관리되는 라인입니다.",
    },
    {
      title: "3단계 품질검사",
      body: "입수·원단·출하 — 새미의 동일한 품질관리 과정을 거칩니다.",
    },
    {
      title: "도입 상담",
      body: "작목과 하우스 조건을 알려주시면 적합 여부를 함께 검토해 드립니다.",
    },
  ],
  hero: {
    src: "",
    alt: "슈프림7 프리미엄 PO필름",
  },
  partners: [],
  badges: ["NEW"],
};
