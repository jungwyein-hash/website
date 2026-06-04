import type { Product } from "@/lib/types";

export type CropCareCategory =
  | "fungicide"
  | "insecticide"
  | "herbicide"
  | "nutrient";

export interface CropCare extends Product {
  cropCareCategory: CropCareCategory;
  partner?: string;
}

/** 1차 MVP — 대표 6종 + 카테고리 인덱스 4개. 나머지는 후속 마일스톤. */
export const CROP_CARES: CropCare[] = [
  {
    slug: "golkiper",
    category: "crop-care",
    cropCareCategory: "fungicide",
    brand: "thehannong",
    origin: "팜한농 독점판매",
    name: { ko: "골기퍼" },
    tagline: { ko: "팜한농 독점판매 살균제 — 더한농이 책임지는 작물 보호." },
    intro: {
      ko: "골기퍼는 팜한농의 살균제로, 더한농이 독점 판매합니다. 작물의 가장 약한 시기에 침투하는 곰팡이성 병해를 차단합니다.",
    },
    bigSpecs: [
      { label: "분류", value: "살균제", unit: "" },
      { label: "공급", value: "팜한농 독점", unit: "" },
      { label: "Since", value: "2023", unit: "" },
    ],
    highlights: [
      { title: "팜한농 독점", body: "한국의 대표 농자재 기업 팜한농의 살균제 — 새미·더한농이 단독 공급합니다." },
      { title: "곰팡이성 병해 차단", body: "작물의 가장 약한 시기에 침투하는 곰팡이성 병해를 효과적으로 막습니다." },
      { title: "농가 지원망", body: "전국 새미대리점 + 더한농 영업 지원 — 시기에 맞춰 손에 닿는 공급." },
    ],
    hero: {
      src: "products/fertilizer-pesticide/농약/농약 스튜디오/골기퍼.webp",
      alt: "골기퍼 살균제",
    },
    partner: "farmhannong",
    badges: ["독점"],
  },
  {
    slug: "goodwin",
    category: "crop-care",
    cropCareCategory: "insecticide",
    brand: "thehannong",
    origin: "팜한농 독점판매",
    name: { ko: "굿윈" },
    tagline: { ko: "팜한농 독점판매 살충제 — 작물의 한 시즌을 지키는 한 병." },
    intro: {
      ko: "굿윈은 팜한농의 살충제로, 더한농이 독점 판매합니다. 작물 생육기에 발생하는 주요 해충을 효과적으로 방제합니다.",
    },
    bigSpecs: [
      { label: "분류", value: "살충제", unit: "" },
      { label: "공급", value: "팜한농 독점", unit: "" },
      { label: "Since", value: "2023", unit: "" },
    ],
    highlights: [
      { title: "팜한농 독점", body: "한국 대표 농자재 기업 팜한농의 살충제 — 새미·더한농이 단독 공급합니다." },
      { title: "주요 해충 방제", body: "작물 생육기 주요 해충을 폭넓게 방제합니다." },
      { title: "농가 지원망", body: "전국 새미대리점을 통해 농가 가까이에서 공급." },
    ],
    hero: {
      src: "products/fertilizer-pesticide/농약/농약 스튜디오/굿윈.webp",
      alt: "굿윈 살충제",
    },
    partner: "farmhannong",
    badges: ["독점"],
  },
  {
    slug: "ssaemitan",
    category: "crop-care",
    cropCareCategory: "herbicide",
    brand: "thehannong",
    origin: "더한농 자체 브랜드",
    name: { ko: "쌔미탄" },
    tagline: { ko: "비선택성 제초제 — 더한농이 직접 만든 새미그룹의 제초 솔루션." },
    intro: {
      ko: "쌔미탄은 더한농이 직접 개발·판매하는 비선택성 제초제입니다. 농가의 잡초 관리 부담을 줄이고, 시즌의 시작을 깨끗하게 정리합니다.",
    },
    bigSpecs: [
      { label: "분류", value: "비선택성 제초제", unit: "" },
      { label: "공급", value: "자체 브랜드", unit: "" },
      { label: "Since", value: "2022", unit: "" },
    ],
    highlights: [
      { title: "비선택성", body: "잡초 종류 무관하게 폭넓게 작용 — 시즌 시작 전 정리에 적합." },
      { title: "더한농 자체 브랜드", body: "수입이 아닌, 더한농이 직접 만든 새미그룹의 제초 솔루션." },
      { title: "전국 공급망", body: "전국 새미대리점에서 시즌에 맞춰 공급." },
    ],
    hero: {
      src: "products/fertilizer-pesticide/농약/농약 스튜디오/쌔미탄.webp",
      alt: "쌔미탄 제초제",
    },
    badges: ["자체 브랜드"],
  },
  {
    slug: "omera-gold",
    category: "crop-care",
    cropCareCategory: "nutrient",
    brand: "thehannong",
    name: { ko: "오메라 골드" },
    tagline: { ko: "종합 영양제 — 1호(초기·중기) · 2호(중기·후기). 한 시즌의 흐름을 따라." },
    intro: {
      ko: "오메라 골드는 종합 영양제 라인. 1호는 작물의 초기·중기, 2호는 중기·후기에 사용해 한 시즌의 영양 흐름을 끊김 없이 받칩니다.",
    },
    bigSpecs: [
      { label: "라인업", value: "1호 · 2호", unit: "" },
      { label: "분류", value: "종합 영양제", unit: "" },
      { label: "사용", value: "전 생육기", unit: "" },
    ],
    highlights: [
      { title: "두 단계 영양", body: "1호(초기·중기)와 2호(중기·후기) — 작물의 시기에 맞는 영양 공급." },
      { title: "종합 미량원소", body: "한 가지 영양소가 아닌, 작물에 필요한 종합 영양을 한 병에." },
      { title: "한 시즌의 흐름", body: "1호 → 2호로 이어지는 흐름이, 한 해 농사의 리듬을 받칩니다." },
    ],
    hero: {
      src: "products/fertilizer-pesticide/비료/hero-shots/오메라 골드 1,2호/ocean/오메라 골드 1,2호.webp",
      alt: "오메라 골드 1·2호",
    },
    badges: [],
  },
  {
    slug: "jumbo-calstar",
    category: "crop-care",
    cropCareCategory: "nutrient",
    brand: "thehannong",
    name: { ko: "점보 칼스타" },
    tagline: { ko: "킬레이트 칼슘제 — 작물에 흡수되는 칼슘의 한 형태." },
    intro: {
      ko: "점보 칼스타는 킬레이트 형태의 칼슘제. 일반 칼슘제보다 작물 흡수율이 높아, 칼슘 결핍이 일어나기 쉬운 시기에 효과적으로 보충합니다.",
    },
    bigSpecs: [
      { label: "분류", value: "킬레이트 칼슘", unit: "" },
      { label: "사용", value: "초기·중기·비대기", unit: "" },
      { label: "타입", value: "수용성", unit: "" },
    ],
    highlights: [
      { title: "킬레이트 형태", body: "작물이 직접 흡수할 수 있는 킬레이트 칼슘 — 일반 칼슘보다 흡수율이 높습니다." },
      { title: "결핍기 보충", body: "꽃 끝썩음, 변형과 같은 칼슘 결핍 증상을 사전에 예방합니다." },
      { title: "광범위 시기", body: "초기 · 중기 · 비대기 — 작물의 모든 결정적 시기에 사용 가능." },
    ],
    hero: {
      src: "products/fertilizer-pesticide/비료/hero-shots/오메라 골드 1,2호, 점보칼스타, 칼라이찌방/on-lawn/hero-01.webp",
      alt: "점보 칼스타 칼슘제",
    },
    badges: [],
  },
  {
    slug: "argin-gold",
    category: "crop-care",
    cropCareCategory: "nutrient",
    brand: "thehannong",
    name: { ko: "아르긴골드" },
    tagline: { ko: "해조 엑기스 — 100% 해조 분말이 작물의 회복력을 끌어올립니다." },
    intro: {
      ko: "아르긴골드는 100% 해조 분말로 만든 영양제. 해조에 포함된 천연 호르몬과 미네랄이 작물의 스트레스 회복을 돕습니다.",
    },
    bigSpecs: [
      { label: "분류", value: "해조 엑기스", unit: "" },
      { label: "원료", value: "100% 해조", unit: "" },
      { label: "사용", value: "전 생육기", unit: "" },
    ],
    highlights: [
      { title: "100% 해조", body: "노르웨이 Ascophyllum nodosum 해조 분말 100% — 천연 영양원." },
      { title: "스트레스 회복", body: "고온·저온·이식 등 작물 스트레스 회복에 효과적." },
      { title: "전 생육기 사용", body: "초기부터 후기까지 — 시기에 무관하게 보충 가능." },
    ],
    hero: {
      src: "products/fertilizer-pesticide/비료/hero-shots/오메라 골드 1,2호, 점보칼스타, 칼라이찌방/on-lawn/hero-02.webp",
      alt: "아르긴골드 해조 엑기스",
    },
    badges: [],
  },
];
