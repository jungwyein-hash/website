export interface Catalog {
  /** R2 키 (saemi-original 버킷) */
  key: string;
  title: string;
  description: string;
  category: "company" | "po-film" | "accessory" | "best-farms" | "recruitment";
  sizeMb?: number;
}

export const CATALOGS: Catalog[] = [
  {
    key: "company/catalog/company-profile-kr.pdf",
    title: "새미그룹 회사소개서 (한국어)",
    description: "PO필름 사업부 소개서 2025 — 그룹 개요, 4개 회사, 4개 사업부, 전 라인업.",
    category: "company",
    sizeMb: 6,
  },
  {
    key: "company/catalog/company-profile-en.pdf",
    title: "Saemi Group Company Profile (English)",
    description: "PO film division introduction (2025).",
    category: "company",
    sizeMb: 7,
  },
  {
    key: "company/catalog/coating-plus.pdf",
    title: "코팅플러스 카탈로그",
    description: "국내 최다판매 스탠다드 코팅 PO필름 — 0.07~0.15mm 라인업.",
    category: "po-film",
    sizeMb: 113,
  },
  {
    key: "company/catalog/coating-strong.pdf",
    title: "코팅스트롱 카탈로그",
    description: "시장 최고의 가성비 스탠다드 코팅 PO필름.",
    category: "po-film",
    sizeMb: 21,
  },
  {
    key: "company/catalog/diastar-2025.pdf",
    title: "다이아스타 시리즈 카탈로그 2025",
    description: "다이아스타 · 이스타 · 미산란 라인 — 프리미엄 PO필름의 표준.",
    category: "po-film",
    sizeMb: 5,
  },
  {
    key: "company/catalog/sansaxia.pdf",
    title: "산삭시아 카탈로그",
    description: "업계 최고 보온력 — 일본 최초 코팅 PO필름.",
    category: "po-film",
    sizeMb: 26,
  },
  {
    key: "company/catalog/sunpower.pdf",
    title: "썬파워 카탈로그",
    description: "세계특허 분광필름 — 새미 독점 공급.",
    category: "po-film",
    sizeMb: 36,
  },
  {
    key: "company/catalog/supreme7-kr.pdf",
    title: "슈프림7 카탈로그",
    description: "업계 최초 7층 PO필름 — 초정밀 코팅 설계와 최고급 원료.",
    category: "po-film",
    sizeMb: 115,
  },
  {
    key: "company/catalog/oya-sawasawa.pdf",
    title: "오야·사와사와 카탈로그",
    description: "일본 직수입 프리미엄 — 투명(오야)과 산란(사와사와) 라인.",
    category: "po-film",
    sizeMb: 110,
  },
  {
    key: "company/catalog/ttasine-greenforce.pdf",
    title: "따시네·그린포스 카탈로그",
    description: "보온터널용 따시네와 녹색멀칭 그린포스 — 2024 NEW 라인.",
    category: "po-film",
    sizeMb: 26,
  },
  {
    key: "company/catalog/ttasi-green.pdf",
    title: "따시·그린 카탈로그",
    description: "따시·그린 라인 안내.",
    category: "po-film",
    sizeMb: 26,
  },
  {
    key: "company/catalog/parasol.pdf",
    title: "파라솔 카탈로그",
    description: "차광율 80~100% 차광·차열 필름 — 한여름의 솔루션.",
    category: "accessory",
    sizeMb: 39,
  },
  {
    key: "company/catalog/parasol-cool.pdf",
    title: "파라솔 쿨 카탈로그",
    description: "차광율 약 100% — 가장 강한 차광·차열 라인.",
    category: "accessory",
    sizeMb: 3,
  },
  {
    key: "company/catalog/accessories-catalog.pdf",
    title: "부자재 종합 카탈로그",
    description: "차광·차열, 네트, 방충망, 방초시트, 보수테이프 등 부자재 전체.",
    category: "accessory",
    sizeMb: 87,
  },
  {
    key: "company/catalog/best-farms-casebook.pdf",
    title: "새미 우수농가 케이스북",
    description: "새미 우수농가 40인의 현장 기록 — 작물별 사례와 사용 자재.",
    category: "best-farms",
    sizeMb: 29,
  },
  {
    key: "company/catalog/recruitment-guide.pdf",
    title: "새미그룹 채용 안내",
    description: "새미그룹의 사람 · 일하는 방식 · 채용 절차 안내.",
    category: "recruitment",
    sizeMb: 2,
  },
];
