import type { Product } from "@/lib/types";

export type AccessoryCategory =
  | "shading"
  | "screen"
  | "net"
  | "insect"
  | "weed"
  | "repair"
  | "silage"
  | "string";

export interface Accessory extends Product {
  accessoryCategory: AccessoryCategory;
}

export const ACCESSORIES: Accessory[] = [
  {
    slug: "parasol",
    category: "accessories",
    accessoryCategory: "shading",
    name: { ko: "파라솔" },
    tagline: { ko: "차광 80~100% — 강한 직사광을 다스리는 차광·차열 필름." },
    intro: {
      ko: "여름철 강한 직사광이 작물의 생육을 흔들 때, 파라솔은 빛의 양을 조절해 작물을 보호합니다. 차광율 80%부터 100%까지 두 단계로 시공 환경에 맞게 고를 수 있습니다.",
    },
    bigSpecs: [
      { label: "차광율", value: "80 / 100", unit: "%" },
      { label: "두께", value: "0.15", unit: "mm" },
      { label: "분류", value: "차광·차열", unit: "" },
    ],
    highlights: [
      { title: "두 단계 차광율", body: "80% · 100% — 작목과 시즌에 맞춰 정확히 고릅니다." },
      { title: "차광·차열 동시", body: "강한 직사광을 줄여 하우스 내부 온도까지 함께 다스립니다." },
      { title: "스탠다드 라인", body: "새미가 직접 공급하는 스탠다드 차광·차열 라인의 기본." },
    ],
    fullSpecs: [
      { group: "기본", rows: [["분류", "차광·차열 필름"], ["두께", "0.15 mm"], ["차광율", "80% · 100%"]] },
    ],
    hero: {
      src: "products/greenhouse-materials/parasol/hero/hero-01.webp",
      alt: "파라솔 차광 필름이 설치된 하우스",
    },
    catalogPdf: "company/catalog/parasol.pdf",
    badges: ["SAEMI-TECH"],
  },
  {
    slug: "parasol-cool",
    category: "accessories",
    accessoryCategory: "shading",
    name: { ko: "파라솔 쿨" },
    tagline: { ko: "차광율 약 100% — 가장 강한 차광·차열로 한여름을 다스립니다." },
    intro: {
      ko: "파라솔 쿨은 파라솔의 상위 라인. 차광율 약 100%로, 한여름의 가장 강한 직사광까지 차단해 작물 스트레스를 최소화합니다.",
    },
    bigSpecs: [
      { label: "차광율", value: "약 100", unit: "%" },
      { label: "두께", value: "0.15", unit: "mm" },
      { label: "라인", value: "쿨 (상위)", unit: "" },
    ],
    highlights: [
      { title: "최고 수준 차광", body: "차광율 약 100% — 가장 강한 직사광까지 차단합니다." },
      { title: "한여름 작목에", body: "고온기 작물 스트레스를 줄여 환기 부담까지 완화합니다." },
      { title: "파라솔의 상위 라인", body: "기본형 파라솔의 모든 장점에 최고 수준의 차광력을 더한 라인." },
    ],
    fullSpecs: [
      { group: "기본", rows: [["분류", "차광·차열 필름"], ["두께", "0.15 mm"], ["차광율", "약 100%"]] },
    ],
    hero: {
      src: "products/greenhouse-materials/parasol-cool/hero/exterior-01.webp",
      alt: "파라솔 쿨이 설치된 하우스",
    },
    catalogPdf: "company/catalog/parasol-cool.pdf",
    badges: ["SAEMI-TECH"],
  },
  {
    slug: "sansan-curtain",
    category: "accessories",
    accessoryCategory: "screen",
    origin: "日 와이드크로스",
    name: { ko: "산산커튼" },
    tagline: { ko: "알루미늄 스크린 — 차광율 10·50·65·99%까지, 단계별로 정확하게." },
    intro: {
      ko: "산산커튼은 일본 와이드크로스의 알루미늄 스크린 라인. 차광율 10%부터 99%까지 4단계로 세밀하게 골라 시공할 수 있어, 작목과 시즌의 미세한 차이까지 대응합니다.",
    },
    bigSpecs: [
      { label: "차광율", value: "10 · 50 · 65 · 99", unit: "%" },
      { label: "소재", value: "알루미늄", unit: "" },
      { label: "원산지", value: "Japan", unit: "" },
    ],
    highlights: [
      { title: "네 단계 차광", body: "10% · 50% · 65% · 99% — 가장 미세한 조절이 가능한 라인." },
      { title: "알루미늄 스크린", body: "내후성과 반사율이 좋은 알루미늄 직조 스크린." },
      { title: "와이드크로스 협력", body: "일본 니폰 와이드크로스가 만든 글로벌 표준의 스크린." },
    ],
    hero: {
      src: "products/greenhouse-materials/sansan-curtain/feature/aluminum-texture-01.webp",
      alt: "산산커튼 알루미늄 스크린 텍스처",
    },
    badges: ["Made in Japan"],
  },
  {
    slug: "sky-barrier",
    category: "accessories",
    accessoryCategory: "screen",
    origin: "日 다이아텍스",
    name: { ko: "스카이배리어" },
    tagline: { ko: "직조 스크린 — 차광율 30·50·65%, 부드러운 산란광." },
    intro: {
      ko: "스카이배리어는 일본 다이아텍스의 직조 스크린. 알루미늄 스크린에 비해 부드러운 산란광이 특징으로, 잎이 예민한 작목에 적합합니다.",
    },
    bigSpecs: [
      { label: "차광율", value: "30 · 50 · 65", unit: "%" },
      { label: "소재", value: "직조", unit: "" },
      { label: "원산지", value: "Japan", unit: "" },
    ],
    highlights: [
      { title: "부드러운 산란광", body: "직조 구조 덕분에 알루미늄보다 부드러운 산란광을 만듭니다." },
      { title: "세 단계 차광", body: "30% · 50% · 65% — 작목과 환경에 맞춰 고릅니다." },
      { title: "다이아텍스 협력", body: "일본 다이아텍스의 글로벌 표준 직조 스크린." },
    ],
    hero: {
      src: "products/greenhouse-materials/sky-barrier/농자재-스카이베리어/interior-01.webp",
      alt: "스카이배리어 직조 스크린",
    },
    badges: ["Made in Japan"],
  },
  {
    slug: "fuafua",
    category: "accessories",
    accessoryCategory: "net",
    origin: "日 다이아텍스",
    name: { ko: "후아후아" },
    tagline: { ko: "차광·차열 네트 — 실버·화이트 플러스, 차광율 30~60%." },
    intro: {
      ko: "후아후아는 다이아텍스가 만든 차광·차열 네트. 실버와 화이트 플러스 두 컬러로, 차광율 30~60%까지 네 단계로 고릅니다.",
    },
    bigSpecs: [
      { label: "차광율", value: "30 · 40 · 50 · 60", unit: "%" },
      { label: "컬러", value: "실버 · 화이트 플러스", unit: "" },
      { label: "원산지", value: "Japan", unit: "" },
    ],
    highlights: [
      { title: "두 가지 컬러", body: "실버는 강한 반사 차광, 화이트 플러스는 부드러운 산란 차광." },
      { title: "네 단계 차광", body: "30% · 40% · 50% · 60% — 작목과 시즌에 맞춰 정확하게." },
      { title: "차광 + 차열", body: "빛을 줄이면서 하우스 내부 온도까지 함께 다스립니다." },
    ],
    hero: {
      src: "products/greenhouse-materials/fuafua/feature/원단-사진/후아후아화이트플러스30-원단사진.webp",
      alt: "후아후아 화이트 플러스 30 원단",
    },
    badges: ["Made in Japan"],
  },
  {
    slug: "rakuraku",
    category: "accessories",
    accessoryCategory: "net",
    origin: "日 와이드크로스",
    name: { ko: "라쿠라쿠" },
    tagline: { ko: "차광·차열 네트 — 슈퍼 화이트 라이트·네트, 차광율 20~60%." },
    intro: {
      ko: "라쿠라쿠는 와이드크로스의 차광·차열 네트. 슈퍼 화이트 라이트와 네트 두 타입으로, 후아후아보다 더 가벼운 차광율 20%부터 시작합니다.",
    },
    bigSpecs: [
      { label: "차광율", value: "20~60", unit: "%" },
      { label: "타입", value: "라이트 · 네트", unit: "" },
      { label: "원산지", value: "Japan", unit: "" },
    ],
    highlights: [
      { title: "다섯 단계 차광", body: "20% · 30% · 40% · 50% · 60% — 가장 다양한 단계." },
      { title: "라이트 · 네트", body: "슈퍼 화이트 라이트(약한 차광)와 네트(강한 차광) 두 타입." },
      { title: "와이드크로스 협력", body: "일본 와이드크로스의 글로벌 차광 네트." },
    ],
    hero: {
      src: "products/greenhouse-materials/rakuraku/gallery/main/exterior-01.webp",
      alt: "라쿠라쿠 차광 네트",
    },
    badges: ["Made in Japan"],
  },
  {
    slug: "sansan-net",
    category: "accessories",
    accessoryCategory: "insect",
    origin: "日 와이드크로스",
    name: { ko: "산산네트" },
    tagline: { ko: "방충망 — 망목 #0.3, 1.0. 잎과 곤충 사이의 1mm." },
    intro: {
      ko: "산산네트는 와이드크로스의 방충망. 망목 #0.3과 1.0의 두 단계로, 작목별로 차단해야 할 곤충 크기에 맞춰 고릅니다.",
    },
    bigSpecs: [
      { label: "망목", value: "#0.3 · 1.0", unit: "mm" },
      { label: "용도", value: "방충", unit: "" },
      { label: "원산지", value: "Japan", unit: "" },
    ],
    highlights: [
      { title: "두 단계 망목", body: "0.3mm는 미세 곤충, 1.0mm는 일반 해충에 대응합니다." },
      { title: "기능과 통풍", body: "통풍을 막지 않으면서 곤충 침투를 차단합니다." },
      { title: "와이드크로스 협력", body: "일본 와이드크로스의 글로벌 표준 방충망." },
    ],
    hero: {
      src: "products/greenhouse-materials/sansan-net/detail/detail-01.webp",
      alt: "산산네트 방충망",
    },
    badges: ["Made in Japan"],
  },
  {
    slug: "crossred",
    category: "accessories",
    accessoryCategory: "insect",
    origin: "日 와이드크로스",
    name: { ko: "크로스레드" },
    tagline: { ko: "방충망 — 망목 #0.6, 0.8. 정밀한 통풍과 차단의 균형." },
    intro: {
      ko: "크로스레드는 산산네트보다 좀 더 미세한 망목 라인. 통풍과 차단의 균형을 더 정밀하게 잡고 싶을 때 선택합니다.",
    },
    bigSpecs: [
      { label: "망목", value: "#0.6 · 0.8", unit: "mm" },
      { label: "용도", value: "방충", unit: "" },
      { label: "원산지", value: "Japan", unit: "" },
    ],
    highlights: [
      { title: "정밀한 망목", body: "0.6mm와 0.8mm — 미세 차단이 필요한 작목에 적합합니다." },
      { title: "통풍 균형", body: "차단력을 높이면서도 통풍 저항을 최소화한 직조." },
      { title: "와이드크로스 협력", body: "일본 와이드크로스가 만든 글로벌 정밀 방충망." },
    ],
    hero: {
      src: "products/greenhouse-materials/crossred/detail/detail-01.webp",
      alt: "크로스레드 정밀 방충망",
    },
    badges: ["Made in Japan"],
  },
  {
    slug: "band",
    category: "accessories",
    accessoryCategory: "string",
    name: { ko: "끈필름 (한끈)" },
    tagline: { ko: "코팅플러스 한끈 — 시공의 마지막 1cm까지 든든하게." },
    intro: {
      ko: "한끈은 코팅플러스 라인의 끈필름. 슈퍼론 블랙 60·80·90으로 폭별로 구분되어 시공의 마무리에 사용됩니다.",
    },
    bigSpecs: [
      { label: "폭", value: "60 · 80 · 90", unit: "mm" },
      { label: "타입", value: "슈퍼론 블랙", unit: "" },
      { label: "베이스", value: "코팅플러스", unit: "" },
    ],
    highlights: [
      { title: "세 단계 폭", body: "60mm · 80mm · 90mm — 시공 부위에 맞춰 정확하게." },
      { title: "코팅플러스 베이스", body: "1위 코팅플러스의 검증된 코팅 위에 끈 가공." },
      { title: "마무리 자재", body: "하우스 시공의 마지막 1cm까지 든든하게 잡아 줍니다." },
    ],
    hero: {
      src: "products/greenhouse-materials/band/hero/main-01.webp",
      alt: "끈필름 한끈",
    },
    badges: ["SAEMI-TECH"],
  },
  {
    slug: "weed-barrier",
    category: "accessories",
    accessoryCategory: "weed",
    origin: "日 와이드크로스",
    name: { ko: "아그리시트" },
    tagline: { ko: "방초시트 — 폭 1~4m × 길이 100m, 잡초의 광합성을 차단합니다." },
    intro: {
      ko: "아그리시트는 와이드크로스의 방초시트. 잡초의 광합성을 차단하면서 빗물은 통과시키는 직조 구조로, 한 시즌 잡초 관리의 부담을 줄여 줍니다.",
    },
    bigSpecs: [
      { label: "폭", value: "1~4", unit: "m" },
      { label: "길이", value: "100", unit: "m" },
      { label: "용도", value: "방초", unit: "" },
    ],
    highlights: [
      { title: "광합성 차단", body: "잡초가 자랄 빛을 차단해 한 시즌의 제초 부담을 줄입니다." },
      { title: "투수 직조", body: "빗물은 통과시키는 직조 구조 — 배수와 토양 환경 보호." },
      { title: "다양한 폭", body: "1m부터 4m까지 — 시공 부위에 맞춰 절단 손실 없이." },
    ],
    hero: {
      src: "products/greenhouse-materials/weed-barrier/hero/hero-01.webp",
      alt: "아그리시트 방초시트",
    },
    badges: ["Made in Japan"],
  },
  {
    slug: "repair-tape",
    category: "accessories",
    accessoryCategory: "repair",
    name: { ko: "보수테이프" },
    tagline: { ko: "보수·보강 테이프 — 한 장의 필름을 한 시즌 더 쓰게." },
    intro: {
      ko: "새미 보수테이프는 PO필름의 찢어짐과 약한 부위를 보강하는 자재입니다. 새미·MKV·다이아텍스·와이드크로스가 공급하는 다양한 규격을 모두 다룹니다.",
    },
    bigSpecs: [
      { label: "규격", value: "8x10 · 10x10 · 14x10 · 15x10", unit: "" },
      { label: "용도", value: "보수·보강", unit: "" },
      { label: "공급", value: "MKV·다이아텍스·새미", unit: "" },
    ],
    highlights: [
      { title: "다양한 규격", body: "8×10부터 15×10까지 — 보수 부위에 맞춰 정확히 고릅니다." },
      { title: "글로벌 라인업", body: "MKV·다이아텍스·와이드크로스의 보수 자재를 한 곳에서." },
      { title: "한 시즌 더", body: "한 장의 필름을 한 시즌 더 쓰게 — 농가의 비용 부담을 줄여 줍니다." },
    ],
    hero: {
      src: "products/greenhouse-materials/repair-tape/hero/application-01.webp",
      alt: "보수테이프 사용 예",
    },
    badges: [],
  },
  {
    slug: "hanubab",
    category: "accessories",
    accessoryCategory: "silage",
    name: { ko: "한우밥" },
    tagline: { ko: "사일리지 랩 — 0.03mm × 폭 500/750, 길이 1500m. 발효를 위한 한 장의 봉인." },
    intro: {
      ko: "한우밥은 사일리지 발효를 위한 랩 필름. 0.03mm의 가벼운 두께로 균일하게 감싸, 산소 차단과 발효 환경을 한 시즌 동안 유지합니다.",
    },
    bigSpecs: [
      { label: "두께", value: "0.03", unit: "mm" },
      { label: "폭", value: "500 · 750", unit: "mm" },
      { label: "길이", value: "1500", unit: "m" },
    ],
    highlights: [
      { title: "산소 차단", body: "0.03mm의 가벼운 두께로 균일하게 감싸 발효 환경을 봉인합니다." },
      { title: "두 단계 폭", body: "500mm · 750mm — 베일 크기와 장비에 맞춰 고릅니다." },
      { title: "긴 권취", body: "1500m의 긴 권취로 작업 중 교체 부담을 줄입니다." },
    ],
    hero: {
      src: "products/greenhouse-materials/hanubab/hero-01.webp",
      alt: "한우밥 사일리지 랩",
    },
    badges: [],
  },
];
