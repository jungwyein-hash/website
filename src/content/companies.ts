export interface Company {
  slug: "saemi" | "arts" | "jis" | "thehannong";
  legalName: string;
  shortName: string;
  founded: number;
  divisions: string[];
  description: string;
  address?: string;
  phone?: string;
  email?: string;
  facts?: { label: string; value: string }[];
  /** 카드용 핵심 역할 요약 (saemi-intro 기준 4줄) */
  details?: string[];
  partners?: string[];
  buildingImage?: string;
}

export const COMPANIES: Company[] = [
  {
    slug: "arts",
    legalName: "(주)ARTS",
    shortName: "ARTS",
    founded: 2004,
    divisions: ["PO필름 사업부"],
    description:
      "새미그룹의 첫 회사. 2004년 설립 이래 농업용 PO필름과 부자재의 제조·가공을 담당해 왔으며, 일본 스미토모화학·타키론 CI 등 글로벌 기업과 협력해 한국 농업의 표준을 만들어 왔습니다.",
    address: "경상남도 양산시 산막공단 (동일 단지)",
    phone: "055-387-3132",
    email: "arts001@sae-mi.com",
    facts: [
      { label: "대지", value: "8,524㎡" },
      { label: "건평", value: "5,892㎡" },
      { label: "설립", value: "2004년" },
    ],
    details: [
      "농업용 PO필름 제조·가공",
      "부자재 제조·가공",
      "대지 8,524㎡ / 건평 5,892㎡",
      "스미토모화학 외 글로벌 기업 협력·수입",
    ],
    partners: ["sumitomo", "takiron"],
    buildingImage: "company/headquarters/arts-사옥.webp",
  },
  {
    slug: "jis",
    legalName: "(주)JIS",
    shortName: "JIS",
    founded: 2019,
    divisions: ["PO필름 사업부", "기계사업부"],
    description:
      "PO필름과 기계·FA 사업을 함께 운영합니다. 미쓰비시 케미컬과의 거래 계약을 시작으로 일본 마루젠·야하타와 협력해 농업용 필름과 정밀 부품의 수입·가공을 담당합니다.",
    address: "경남 양산시 상북면 석계산단4길 66",
    phone: "055-723-2500",
    email: "jis001@sae-mi.com",
    facts: [
      { label: "대지", value: "6,537㎡" },
      { label: "건평", value: "4,839㎡" },
      { label: "설립", value: "2019년" },
    ],
    details: [
      "농업용 PO필름 제조·가공",
      "부자재 제조·가공",
      "대지 6,537㎡ / 건평 4,839㎡",
      "MKV Advance 외 글로벌 기업 협력·수입",
    ],
    partners: ["mitsubishi", "maruzen", "yahata"],
    buildingImage: "company/headquarters/제이아이에스-사옥.webp",
  },
  {
    slug: "saemi",
    legalName: "(주)새미",
    shortName: "새미",
    founded: 2021,
    divisions: ["PO필름 사업부", "유통사업부", "농업연구소"],
    description:
      "그룹의 본사이자 유통과 연구의 본거지. PO필름과 부자재의 판매·연구개발을 총괄하고, 한국 농업을 지속 모니터링하며 새미테크 신제품을 개발합니다. 농산물 산지직송 유통도 운영합니다.",
    address: "경상남도 양산시 산막공단 남10길 10",
    phone: "055-781-1250",
    email: "sae-mi@saemigroup.com",
    facts: [
      { label: "역할", value: "Brand HQ" },
      { label: "설립", value: "2021년" },
      { label: "운영", value: "농업연구소·유통" },
    ],
    details: [
      "농업용 PO필름 판매전문",
      "부자재 판매전문",
      "농업연구소 운영 — 한국농업 모니터링",
      "품질 연구 및 신제품 개발",
    ],
    partners: [],
    buildingImage: "products/po-film/standard/coating-plus/hero/exterior-02.webp",
  },
  {
    slug: "thehannong",
    legalName: "(주)더한농",
    shortName: "더한농",
    founded: 2021,
    divisions: ["농약·비료 사업부"],
    description:
      "농약·비료 전문 회사. 작물보호제(살균·살충·제초)와 영양제를 제조·판매하고, 일본 스미카 농자재·후타바, 한국 팜한농과 협력합니다. 2024년 충주에 신사옥·공장을 준공했습니다.",
    address: "충북 충주시 용탄농공1길 31",
    facts: [
      { label: "신사옥", value: "2024 준공" },
      { label: "설립", value: "2021년" },
      { label: "사업", value: "농약·비료" },
    ],
    details: [
      "작물 보호제·영양제 제조·판매",
      "충북 충주 소재",
      "스미카·후타바·팜한농 등 협력·수입",
      "한중 합자회사 산농대미 운영",
    ],
    partners: ["sumika", "futaba", "farmhannong"],
    buildingImage: "company/headquarters/더한농-사옥.webp",
  },
];
