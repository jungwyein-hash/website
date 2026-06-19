export type ProductCategory =
  | "po-film"
  | "accessories"
  | "crop-care"
  | "machinery";

export type Brand = "saemi" | "arts" | "jis" | "thehannong";
export type Tier = "premium" | "standard";
export type FilmType =
  | "투명"
  | "산란"
  | "분광"
  | "차열"
  | "변광"
  | "보온터널"
  | "녹색멀칭"
  | "흑색멀칭";

export type Badge =
  | "NEW"
  | "특허"
  | "1위"
  | "독점"
  | "자체 브랜드"
  | "Made in Japan"
  | "SAEMI-TECH";

export interface BigSpec {
  label: string;
  value: string;
  unit?: string;
}

export interface Highlight {
  title: string;
  body: string;
  /** 특징 탐색기 우측 대표 이미지 — R2 키. 없으면 갤러리에서 순환 폴백 */
  image?: string;
}

export interface SpecGroup {
  group: string;
  rows: [string, string][];
}

export interface MediaRef {
  /** R2 키 (saemi-web 버킷). 절대 URL이나 `/` 시작 시 그대로 사용. */
  src: string;
  alt: string;
  caption?: string;
  /** 사진 중앙 크레딧용 — 촬영 연도 */
  year?: string;
  /** 사진 중앙 크레딧용 — 촬영 지역 */
  region?: string;
}

export interface VideoRef {
  /** R2 키 또는 절대 URL/로컬 경로 */
  src: string;
  /** 포스터 이미지 (옵션) — R2 키 또는 절대 URL */
  poster?: string;
}

export interface BestFarm {
  slug: string;
  farmer: string;
  region: string;
  crop: string;
  /** 새미우수농가 회차 (예: "1회", "2회") */
  round?: string;
  /** 농가의 한 줄 (직접 인용 또는 짧은 노트) */
  note?: string;
  /** 카드 사진의 줌·이동 값 (saemi-intro 패턴) */
  imageTransform?: {
    zoom?: number;
    dx?: number;
    dy?: number;
  };
  hero: MediaRef;
}

export interface Product {
  slug: string;
  category: ProductCategory;
  tier?: Tier;
  brand?: Brand;
  /** 제조 출처 — "Made in Japan", "SAEMI-TECH" 등 */
  origin?: string;

  /** 다국어 대비 — 1차는 ko만 사용 */
  name: { ko: string; en?: string; ja?: string; zh?: string };
  /** 한 줄 가치 제안 */
  tagline: { ko: string; en?: string };
  /** 소개 섹션 대표 헤드라인 — 없으면 tagline 사용. \n 으로 줄바꿈 */
  headline?: { ko: string };
  /** 한 단락 소개 */
  intro?: { ko: string };

  filmType?: FilmType;
  /** 두께 옵션 (mm). 부자재는 다른 단위. */
  thickness?: number[];

  /** 페이지당 3개 이내. 빅 숫자 헤드라인 스펙. */
  bigSpecs: BigSpec[];
  /** 3-5개 특장점. */
  highlights: Highlight[];
  /** 정중한 사양표. 그룹당 라벨/값 페어. */
  fullSpecs?: SpecGroup[];

  hero: MediaRef;
  /** Hero 배경 비디오 (옵션) — Premium 페이지에서 hero 텍스트 뒤로 깔림 */
  heroVideo?: VideoRef;
  gallery?: MediaRef[];

  /** 우수농가 사례 (Premium 페이지에서 사용) */
  bestFarms?: BestFarm[];

  /** R2 키 — `/resources` 페이지에서도 노출 */
  catalogPdf?: string;
  /** 글로벌 협력사 슬러그 — about/partners와 매칭 */
  partners?: string[];
  badges?: Badge[];

  /** 출시 연도 */
  since?: number;
}
