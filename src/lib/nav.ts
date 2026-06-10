export type MegaItem = {
  label: string;
  href: string;
  caption?: string;
  children?: MegaItem[];
};

export type MegaGroup = {
  title: string;
  items: MegaItem[];
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
        title: "회사",
        items: [
          { label: "대표 인사말", href: "/about/ceo" },
          { label: "계열 회사", href: "/about/companies" },
          { label: "연혁", href: "/about/history" },
        ],
      },
      {
        title: "현장",
        items: [
          { label: "농업연구소", href: "/about/research" },
          { label: "공장과 시설", href: "/about/factories" },
          { label: "협력 회사", href: "/about/partners" },
        ],
      },
    ],
  },
  {
    label: "PO필름",
    href: "/po-film",
    groups: [
      {
        title: "프리미엄 필름",
        items: [
          {
            label: "다이아스타 시리즈",
            href: "/po-film/premium/diastar",
            children: [
              { label: "다이아스타", href: "/po-film/premium/diastar" },
              { label: "이스타", href: "/po-film/premium/estar" },
              {
                label: "미산란 다이아스타",
                href: "/po-film/premium/misanran-diastar",
              },
              { label: "미산란 이스타", href: "/po-film/premium/misanran-estar" },
            ],
          },
          { label: "산삭시아", href: "/po-film/premium/sansaxia" },
          {
            label: "썬파워",
            href: "/po-film/premium/sunpower",
            caption: "분광",
          },
          { label: "오야", href: "/po-film/premium/oya" },
          { label: "사와사와", href: "/po-film/premium/sawasawa" },
        ],
      },
      {
        title: "스탠다드 필름",
        items: [
          {
            label: "코팅플러스",
            href: "/po-film/standard/coating-plus",
            caption: "1위",
          },
          { label: "코팅스트롱", href: "/po-film/standard/coating-strong" },
          { label: "코팅쿨", href: "/po-film/standard/coating-cool", caption: "차열" },
          { label: "올시즌", href: "/po-film/standard/allseason", caption: "변광" },
          { label: "안타", href: "/po-film/standard/anta" },
          { label: "따시네", href: "/po-film/standard/ttasine" },
          { label: "그린포스", href: "/po-film/standard/greenforce" },
        ],
      },
      {
        title: "비교와 자료",
        items: [
          { label: "필름 비교", href: "/po-film/compare" },
          { label: "카탈로그", href: "/resources" },
        ],
      },
    ],
  },
  {
    label: "하우스 부자재",
    href: "/accessories",
    groups: [
      {
        title: "차광과 차열",
        items: [
          { label: "파라솔", href: "/accessories/parasol" },
          { label: "파라솔쿨", href: "/accessories/parasol-cool" },
          { label: "산산커튼", href: "/accessories/sansan-curtain" },
          { label: "스카이배리어", href: "/accessories/sky-barrier" },
          { label: "후아후아", href: "/accessories/fuafua" },
          { label: "라쿠라쿠", href: "/accessories/rakuraku" },
        ],
      },
      {
        title: "방충과 보수",
        items: [
          { label: "산산네트", href: "/accessories/sansan-net" },
          { label: "크로스레드", href: "/accessories/crossred" },
          { label: "위드배리어", href: "/accessories/weed-barrier" },
          { label: "보수테이프", href: "/accessories/repair-tape" },
          { label: "하누밥", href: "/accessories/hanubab" },
          { label: "고정 밴드", href: "/accessories/band" },
        ],
      },
    ],
  },
  {
    label: "농약·비료",
    href: "/crop-care",
    groups: [
      {
        title: "작물 보호",
        items: [
          { label: "살균제", href: "/crop-care#fungicide" },
          { label: "살충제", href: "/crop-care#insecticide" },
          { label: "제초제", href: "/crop-care#herbicide" },
          { label: "골키퍼", href: "/crop-care/golkiper", caption: "더한농" },
          { label: "굿윈", href: "/crop-care/goodwin", caption: "더한농" },
          { label: "새미탄", href: "/crop-care/ssaemitan", caption: "새미" },
        ],
      },
      {
        title: "작물 영양",
        items: [
          { label: "전체 영양제", href: "/crop-care#nutrient" },
          { label: "오메라 골드", href: "/crop-care/omera-gold" },
          { label: "점보 칼스타", href: "/crop-care/jumbo-calstar" },
          { label: "아르긴골드", href: "/crop-care/argin-gold" },
        ],
      },
    ],
  },
  {
    label: "기계·FA",
    href: "/machinery",
    groups: [
      {
        title: "기계",
        items: [
          { label: "정밀 기계 부품", href: "/machinery/parts" },
          { label: "YASKAWA 로봇", href: "/machinery/yaskawa" },
        ],
      },
    ],
  },
  { label: "우수농가", href: "/best-farms" },
  { label: "소식", href: "/news" },
];
