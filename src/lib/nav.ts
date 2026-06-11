export type MegaItem = {
  label: string;
  href: string;
  /** 제품명 옆 태그 — 분류(투명·산란 등)와 배지(1위 등). 복수 가능 */
  caption?: string | string[];
  children?: MegaItem[];
};

export type MegaGroup = {
  title: string;
  /** 타이틀 옆 보조 설명 — "日 직수입", "자체 설계" 등 */
  caption?: string;
  /** 타이틀 아래 한 줄 설명 — 강조 패널용 */
  subtitle?: string;
  /** true면 강조 패널(연한 블루 박스)로 렌더링 — 새미테크 등 */
  accent?: boolean;
  /** 항목 아래 그레이 안내 박스 */
  box?: { body: string; href: string; linkLabel: string };
  items: MegaItem[];
  /** 같은 컬럼에 이어 붙는 추가 섹션들 */
  more?: { title: string; items: MegaItem[] }[];
};

export type NavSection = {
  label: string;
  href: string;
  groups?: MegaGroup[];
};

export const NAV: NavSection[] = [
  {
    label: "회사 소개",
    href: "/about",
    groups: [
      {
        title: "새미그룹",
        items: [
          { label: "한눈에 보기", href: "/about", caption: "철학·사업부" },
          { label: "대표 인사말", href: "/about/ceo" },
          { label: "4개의 회사", href: "/about/companies" },
          { label: "연혁", href: "/about/history", caption: "2003~" },
          { label: "소식", href: "/news" },
        ],
      },
      {
        title: "역량과 현장",
        items: [
          { label: "농업연구소", href: "/about/research" },
          { label: "공장과 시설", href: "/about/factories" },
          { label: "글로벌 파트너", href: "/about/partners" },
        ],
      },
      {
        title: "기계·FA 사업부",
        items: [
          { label: "기계·FA 소개", href: "/machinery" },
          { label: "정밀 기계 부품", href: "/machinery/parts" },
          { label: "YASKAWA 로봇", href: "/machinery/yaskawa", caption: "Since 2012" },
        ],
      },
    ],
  },
  {
    label: "PO필름",
    href: "/po-film",
    groups: [
      {
        title: "프리미엄",
        items: [
          {
            label: "다이아스타 시리즈",
            href: "/po-film/premium/diastar",
            children: [
              { label: "다이아스타", href: "/po-film/premium/diastar", caption: "투명" },
              { label: "이스타", href: "/po-film/premium/estar", caption: "투명" },
              {
                label: "미산란 다이아스타",
                href: "/po-film/premium/misanran-diastar",
                caption: "산란",
              },
              {
                label: "미산란 이스타",
                href: "/po-film/premium/misanran-estar",
                caption: "산란",
              },
            ],
          },
          { label: "산삭시아", href: "/po-film/premium/sansaxia", caption: "투명" },
          { label: "오야", href: "/po-film/premium/oya", caption: "투명" },
          { label: "사와사와", href: "/po-film/premium/sawasawa", caption: "산란" },
          {
            label: "슈프림7",
            href: "/po-film/premium/supreme7",
            caption: ["투명", "New"],
          },
        ],
      },
      {
        title: "스탠다드",
        items: [
          {
            label: "코팅플러스",
            href: "/po-film/standard/coating-plus",
            caption: ["투명", "Best"],
          },
          {
            label: "코팅스트롱",
            href: "/po-film/standard/coating-strong",
            caption: ["투명", "Hit"],
          },
          { label: "안타", href: "/po-film/standard/anta", caption: "산란" },
          { label: "따시네", href: "/po-film/standard/ttasine", caption: "보온터널" },
          { label: "그린포스", href: "/po-film/standard/greenforce", caption: "멀칭" },
          { label: "블랙포스", href: "/po-film/standard/blackforce", caption: "흑색PO" },
          { label: "한끈필름", href: "/accessories/band", caption: "치마" },
        ],
      },
      {
        title: "새미테크",
        items: [
          { label: "썬파워", href: "/po-film/premium/sunpower", caption: "분광" },
          { label: "코팅 쿨", href: "/po-film/standard/coating-cool", caption: "차열" },
          { label: "올시즌", href: "/po-film/standard/allseason", caption: "변광" },
        ],
      },
      {
        title: "자료실",
        items: [
          { label: "필름 비교", href: "/po-film/compare" },
          { label: "제품 카탈로그", href: "/resources" },
          { label: "작물별 추천", href: "/po-film/by-crop" },
          { label: "A/S·품질보증", href: "/po-film/quality" },
        ],
        box: {
          body: "필요한 자료를 못 찾으셨나요? 담당이 직접 보내드립니다.",
          href: "/contact/quote",
          linkLabel: "문의하기",
        },
      },
    ],
  },
  {
    label: "하우스 부자재",
    href: "/accessories",
    groups: [
      {
        title: "차광필름",
        items: [
          { label: "파라솔", href: "/accessories/parasol" },
          {
            label: "파라솔 쿨",
            href: "/accessories/parasol-cool",
            caption: ["차열", "코팅"],
          },
        ],
        more: [
          {
            title: "방충망",
            items: [
              { label: "산산네트", href: "/accessories/sansan-net" },
              { label: "크로스레드", href: "/accessories/crossred", caption: "적색" },
              { label: "새미 방충망", href: "/accessories/saemi-insect-net" },
            ],
          },
        ],
      },
      {
        title: "보온커튼",
        items: [
          { label: "산산커튼", href: "/accessories/sansan-curtain", caption: "알루미늄" },
          { label: "스카이배리어", href: "/accessories/sky-barrier", caption: "직조" },
        ],
        more: [
          {
            title: "차열네트",
            items: [
              { label: "후아후아", href: "/accessories/fuafua" },
              { label: "라쿠라쿠", href: "/accessories/rakuraku" },
            ],
          },
        ],
      },
      {
        title: "기타 부자재",
        items: [
          { label: "아그리시트", href: "/accessories/weed-barrier", caption: "방초시트" },
          { label: "한우밥", href: "/accessories/hanubab", caption: "사일리지" },
          { label: "보수테이프", href: "/accessories/repair-tape" },
        ],
      },
      {
        title: "자료실",
        items: [{ label: "카탈로그", href: "/resources" }],
        box: {
          body: "필요한 자료를 못 찾으셨나요? 담당이 직접 보내드립니다.",
          href: "/contact/quote",
          linkLabel: "문의하기",
        },
      },
    ],
  },
  {
    label: "작물 보호제",
    href: "/crop-care",
    groups: [
      {
        title: "살균제",
        items: [
          { label: "골키퍼", href: "/crop-care/golkiper" },
          { label: "살균제 전체", href: "/crop-care#fungicide" },
        ],
      },
      {
        title: "살충제",
        items: [
          { label: "굿윈", href: "/crop-care/goodwin" },
          { label: "살충제 전체", href: "/crop-care#insecticide" },
        ],
      },
      {
        title: "제초제",
        items: [
          { label: "새미탄", href: "/crop-care/ssaemitan" },
          { label: "제초제 전체", href: "/crop-care#herbicide" },
        ],
      },
      {
        title: "자료실",
        items: [{ label: "카탈로그", href: "/resources" }],
        box: {
          body: "필요한 자료를 못 찾으셨나요? 담당이 직접 보내드립니다.",
          href: "/contact/quote",
          linkLabel: "문의하기",
        },
      },
    ],
  },
  {
    label: "작물영양제",
    href: "/crop-care#nutrient",
    groups: [
      {
        title: "프리미엄",
        items: [
          { label: "오메라 골드 1호", href: "/crop-care/omera-gold" },
          { label: "오메라 골드 2호", href: "/crop-care/omera-gold" },
          { label: "아르긴골드", href: "/crop-care/argin-gold" },
          { label: "심해소생", href: "/crop-care#nutrient" },
          { label: "점보 칼스타", href: "/crop-care/jumbo-calstar" },
          { label: "칼라 이찌방", href: "/crop-care#nutrient" },
          { label: "바이런 슈퍼파워-S", href: "/crop-care#nutrient" },
          { label: "비샷또", href: "/crop-care#nutrient" },
        ],
      },
      {
        title: "스탠다드",
        items: [
          { label: "산성규산", href: "/crop-care#nutrient" },
          { label: "더힘이나", href: "/crop-care#nutrient" },
          { label: "속전속결", href: "/crop-care#nutrient" },
          { label: "크린아그리 썰포", href: "/crop-care#nutrient" },
          { label: "착-붙어", href: "/crop-care#nutrient" },
        ],
      },
      {
        title: "자료실",
        items: [{ label: "카탈로그", href: "/resources" }],
        box: {
          body: "필요한 자료를 못 찾으셨나요? 담당이 직접 보내드립니다.",
          href: "/contact/quote",
          linkLabel: "문의하기",
        },
      },
    ],
  },
];
