export type PartnerCategory =
  | "po-film"
  | "accessories"
  | "crop-care"
  | "machinery";

export interface Partner {
  slug: string;
  name: string;
  country: string;
  category: PartnerCategory;
  note?: string;
}

export const PARTNERS: Partner[] = [
  // PO필름
  { slug: "sumitomo", name: "스미토모화학", country: "일본", category: "po-film", note: "글로벌 PO필름 선도기업" },
  { slug: "mkv", name: "MKV Advance", country: "일본", category: "po-film" },
  { slug: "takiron", name: "타키론 CI", country: "일본", category: "po-film" },
  { slug: "mitsubishi", name: "미쓰비시 케미컬", country: "일본", category: "po-film" },

  // 부자재
  { slug: "diatex", name: "다이아텍스", country: "일본", category: "accessories" },
  { slug: "widecross", name: "니폰 와이드크로스", country: "일본", category: "accessories" },

  // 작물영양·보호제
  { slug: "sannongdaemi", name: "산농대미", country: "중국", category: "crop-care", note: "새미 합자 회사" },
  { slug: "futaba", name: "후타바", country: "일본", category: "crop-care" },
  { slug: "sumika", name: "스미카 농자재", country: "일본", category: "crop-care" },
  { slug: "maruzen", name: "마루젠 약품", country: "일본", category: "crop-care" },
  { slug: "farmhannong", name: "팜한농", country: "한국", category: "crop-care" },

  // 기계
  { slug: "yaskawa", name: "야스카와전기", country: "일본", category: "machinery", note: "MOTOMAN 산업용 로봇" },
  { slug: "maruyama", name: "마루야마 제작소", country: "일본", category: "machinery" },
  { slug: "sumitomo-heavy", name: "스미토모 중기계공업", country: "일본", category: "machinery" },
  { slug: "yahata", name: "야하타", country: "일본", category: "machinery" },
];
