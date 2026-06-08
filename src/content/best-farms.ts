// 새미 우수농가 40인 사례집 기반 데이터 (39명 사진 보유 / 배영선 농가는 R2 사진 없음)
// 한줄평: 각 농가 프로필의 '새미 필름 사용 변화 / 자재 선택' Q&A에서 필름 관련 발언을 한 문장으로 압축.

export type BestFarm = {
  name: string;
  region: string;
  crop: string;
  round: 1 | 2;
  product: string;
  /** 필름에 관한 농가 발언을 한 문장으로 압축 */
  quote: string;
  /** 사진 회전(도). 가로로 누운 원본 보정용. */
  rotate?: number;
  heroKey: string;
};

export const bestFarms: BestFarm[] = [
  { name: "남길우 농가", region: "충남 부여", crop: "수박", round: 1, product: "다이아스타", quote: "필름은 제2의 토양입니다 — 환경이 안정돼야 수박도 흐름대로 자랍니다.", heroKey: "products/po-film/premium/diastar/best-farms/nam-gilwoo-buyeo-watermelon-v1/231006/gallery/portrait-01.webp" },
  { name: "이관우 농가", region: "충남 부여", crop: "수박", round: 2, product: "이스타", quote: "필름으로 결로가 줄어 잿빛곰팡이가 거의 사라지고, 전열 비용도 약 15% 줄었습니다.", heroKey: "products/po-film/premium/estar/best-farms/이관우-buyeo-watermelon-v2/250514/gallery/portrait-01.webp" },
  { name: "박수진 농가", region: "충남 논산", crop: "딸기", round: 1, product: "오야", quote: "필름의 보온 성능으로 생육 리듬이 일정해지고, 난방비도 4분의 1 수준으로 줄었습니다.", heroKey: "products/po-film/premium/oya/best-farms/park-sujin-nonsan-strawberry-v1/portrait-01.webp" },
  { name: "서성길 농가", region: "경남 밀양", crop: "딸기", round: 2, product: "다이아스타", quote: "새미 필름으로 빛 투과율이 높아져 생육이 30일 빨라지고, 상당한 추가 수익으로 이어졌습니다.", heroKey: "products/po-film/premium/diastar/best-farms/seo-seonggil-miryang-strawberry-v2/250402/gallery/portrait-01.webp" },
  { name: "오지훈 농가", region: "전남 담양", crop: "딸기", round: 1, product: "코팅플러스", quote: "장기성 필름은 시간이 지나도 투명함이 유지돼 딸기가 늘 같은 빛을 받습니다.", heroKey: "products/po-film/standard/coating-plus/best-farms/oh-jihoon-damyang-strawberry-v1/231006/gallery/portrait-01.webp" },
  { name: "박영환 농가", region: "전남 담양", crop: "딸기", round: 2, product: "오야", quote: "필름 보온이 안정돼 보일러를 한 달 늦게 틀고, 난방비도 줄며 딸기가 더 단단해졌습니다.", heroKey: "products/po-film/premium/oya/best-farms/park-younghwan-damyang-strawberry-v2/250423/gallery/portrait-01.webp" },
  { name: "김찬희 농가", region: "경북 성주", crop: "참외", round: 2, product: "이스타", quote: "보온막이 좋아 겨울 하우스 내부 온도가 타사보다 3~4℃ 높고, 수량도 15~20% 늘었습니다.", heroKey: "products/po-film/premium/estar/best-farms/kim-chanhee-seongju-melon-v2/250417/gallery/portrait-01.webp" },
  { name: "한유성 농가", region: "경북 성주", crop: "참외", round: 2, product: "이스타", quote: "필름이 빛이 좋아 뿌리가 숨 쉬는 환경을 만들고, 외부와 약 3℃ 차이로 보온을 돕습니다.", heroKey: "products/po-film/premium/estar/best-farms/한유성-seongju-melon-v2/250417/gallery/portrait-01.webp" },
  { name: "이경수 명장", region: "경북 성주", crop: "참외", round: 1, product: "이스타", quote: "필름을 바꾸니 화방이 10일 빨라져 남보다 먼저 출하하고, 2월에도 당도 17브릭스가 나왔습니다.", heroKey: "products/po-film/premium/estar/best-farms/이경수-seongju-melon-v1/231006/gallery/portrait-01.webp" },
  { name: "김상규 명장", region: "경북 성주", crop: "참외", round: 1, product: "다이아스타", quote: "지형에 맞는 다이아스타 필름을 쓰니 보온성이 좋아 착과와 크기가 안정적으로 유지됩니다.", heroKey: "products/po-film/premium/diastar/best-farms/kim-sanggyu-seongju-melon-v1/231006/gallery/portrait-01.webp" },
  { name: "고준건 농가", region: "경북 상주", crop: "포도", round: 1, product: "코팅플러스", quote: "코팅플러스 필름은 빛 투과율이 높아 열매 당도가 잘 형성됩니다(17~20브릭스).", heroKey: "products/po-film/standard/coating-plus/best-farms/go-jungeon-sangju-grape-v1/231006/gallery/portrait-01.webp" },
  { name: "남창현 농가", region: "충남 공주", crop: "포도", round: 1, product: "산삭시아", quote: "필름을 바꾸니 포도가 굵어지고 수확량이 늘며 당도가 15~16브릭스로 안정됩니다.", heroKey: "products/po-film/premium/sansaxia/best-farms/nam-changhyeon-gongju-grape-v1/231006/gallery/portrait-01.webp" },
  { name: "박상문 농가", region: "대전 유성", crop: "오이", round: 1, product: "코팅플러스", quote: "코팅플러스를 쓴 뒤로 꽃이 핀 지 7일이면 열매가 맺고, 겨울에도 15일이면 안정적으로 착과됩니다.", heroKey: "products/po-film/standard/coating-plus/best-farms/park-sangmoon-daejeon-cucumber-v1/231006/gallery/portrait-01.webp" },
  { name: "이은복 농가", region: "세종 금남", crop: "오이", round: 2, product: "산삭시아", quote: "산삭시아 필름은 빛이 잘 들고 보온력이 좋으며, 무적성이 좋아 결로를 줄여 습도 관리를 돕습니다.", heroKey: "products/po-film/premium/sansaxia/best-farms/lee-eunbok-sejong-cucumber-v2/250514/gallery/portrait-01.webp" },
  { name: "조영훈 농가", region: "경기 안성", crop: "오이", round: 2, product: "코팅플러스", quote: "코팅플러스 필름은 일조량이 부족한 시기에도 빛 투과가 좋아 하우스 내부 온도를 안정적으로 유지합니다.", heroKey: "products/po-film/standard/coating-plus/best-farms/jo-younghun-anseong-cucumber-v2/250514/gallery/portrait-01.webp" },
  { name: "황천성 농가", region: "경북 칠곡", crop: "오이", round: 2, product: "산삭시아", quote: "필름은 광 투과율·보온 성능·내구성을 우선으로 봅니다 — 찢어지면 그해 농사에 바로 영향을 주니까요.", heroKey: "products/po-film/premium/sansaxia/best-farms/hwang-cheonseong-chilgok-cucumber-v2/250417/gallery/portrait-01.webp" },
  { name: "황익현 농가", region: "강원 철원", crop: "토마토", round: 1, product: "미산란 다이아스타", quote: "미산란 필름으로 빛이 부드럽게 확산돼 잎 피해가 줄고, 작물이 빛 스트레스 없이 안정적으로 자랍니다.", heroKey: "products/po-film/premium/misanran-diastar/best-farms/hwang-ikhyeon-cheorwon-tomato-v1/231106/gallery/portrait-01.webp" },
  { name: "유인성 농가", region: "강원 철원", crop: "토마토", round: 1, product: "다이아스타", quote: "철원은 일조량이 적고 추워, 빛 투과율이 좋고 보온을 돕는 다이아스타 필름을 씁니다.", heroKey: "products/po-film/premium/diastar/best-farms/yu-inseong-cheorwon-tomato-v1/231006/gallery/portrait-01.webp" },
  { name: "박준식 농가", region: "경남 고성", crop: "토마토", round: 2, product: "다이아스타", quote: "다이아스타 필름을 쓰며 빛·온도·보온 조건이 잡혀 과실의 광택·육질·당도가 일정해졌습니다.", heroKey: "products/po-film/premium/diastar/best-farms/park-junsik-goseong-tomato-v2/250402/gallery/portrait-01.webp" },
  { name: "윤정원 농가", region: "경남 창원", crop: "토마토", round: 2, product: "오야", quote: "다이아스타 필름은 투명도가 오래 유지돼 일조가 부족한 날에도 하우스 환경이 흔들리지 않습니다.", heroKey: "products/po-film/premium/oya/best-farms/yoon-jeongwon-changwon-tomato-v2/250402/gallery/portrait-01.webp" },
  { name: "이경선 농가", region: "충북 충주", crop: "토마토", round: 2, product: "코팅플러스", quote: "코팅플러스는 내구성이 좋아 여러 해 안정적으로 써, 교체 부담이 줄고 재배 흐름이 안정됩니다.", heroKey: "products/po-film/standard/coating-plus/best-farms/lee-gyeongseon-chungju-tomato-v2/250515/gallery/portrait-01.webp" },
  { name: "이경오 농가", region: "전남 담양", crop: "토마토", round: 2, product: "코팅플러스", quote: "무적성과 투광성이 좋은 코팅플러스는 병해 부담을 줄이고 관리 편의성을 높여 줍니다.", heroKey: "products/po-film/standard/coating-plus/best-farms/lee-gyeongo-damyang-tomato-v2/250627/hero/portrait-01.webp" },
  { name: "강등현 농가", region: "광주 남구", crop: "엽채류", round: 2, product: "코팅플러스", quote: "코팅플러스는 내구성·투광성이 좋아 빛이 일정하게 들어와 부추 잎이 선명해지고 생육이 안정됩니다.", heroKey: "products/po-film/standard/coating-plus/best-farms/kang-deunghyeon-gwangju-leafy-greens-v2/250626/gallery/portrait-01.webp" },
  { name: "이희철 농가", region: "전북 남원", crop: "엽채류", round: 1, product: "조광", quote: "조광 필름의 산란광 덕에 강한 빛에도 하우스가 안정돼, 상추가 일정한 품질로 이어집니다.", heroKey: "products/po-film/premium/jogwang/best-farms/lee-heecheol-namwon-leafy-greens-v1/231006/gallery/portrait-01.webp" },
  { name: "최재일 농가", region: "경기 하남", crop: "엽채류", round: 2, product: "썬파워", quote: "분광필름으로 빛은 충분히 들이되 여름 온도를 조절해 잎채소 품질을 지킵니다.", heroKey: "products/po-film/premium/sunpower/best-farms/choi-jaeil-hanam-leafy-greens-v2/250515/gallery/portrait-01.webp" },
  { name: "박태하 농가", region: "경기 이천", crop: "엽채류", round: 2, product: "코팅스트롱", quote: "코팅스트롱은 투명도가 높아 빛이 고르게 퍼져, 100동 규모 하우스도 안정적으로 관리됩니다.", heroKey: "products/po-film/standard/coating-strong/best-farms/park-taeha-icheon-leafy-greens-v2/251126/gallery/portrait-01.webp" },
  { name: "김봉영 농가", region: "경남 밀양", crop: "고추", round: 2, product: "오야", quote: "오야 필름은 빛 투과율을 기준으로 관리하며, 겨울에도 환경이 흔들리지 않아 수확량이 약 20% 늘었습니다.", heroKey: "products/po-film/premium/oya/best-farms/kim-bongyeong-miryang-pepper-v2/250606/gallery/portrait-01.webp" },
  { name: "김창연 농가", region: "경남 진주", crop: "고추", round: 2, product: "이스타", quote: "이스타 필름으로 하우스 환경이 안정되고, 투광성이 좋아 잎과 열매가 균일하게 자랍니다.", rotate: 90, heroKey: "products/po-film/premium/estar/best-farms/kim-changyeon-jinju-pepper-v2/250402/hero/portrait-01.webp" },
  { name: "정종섭 농가", region: "경남 진주", crop: "고추", round: 2, product: "오야", quote: "코팅플러스 필름은 4년 넘게 써도 투명도가 크게 떨어지지 않아, 광환경을 꾸준히 유지합니다.", heroKey: "products/po-film/premium/oya/best-farms/jeong-jongseop-jinju-pepper-v2/250627/gallery/portrait-01.webp" },
  { name: "김옥 농가", region: "부산 강서", crop: "다육이", round: 1, product: "조광", quote: "산란 기능 필름으로 빛이 부드럽게 퍼져 내부 온도가 안정되고, 다육이가 자연스럽게 예쁘게 물듭니다.", heroKey: "products/po-film/premium/jogwang/best-farms/kim-ok-gimhae-succulent-v1/231006/gallery/portrait-01.webp" },
  { name: "이진섭 농가", region: "전남 나주", crop: "멜론", round: 1, product: "오야", quote: "투광성 좋은 필름으로 멜론이 더 빨리·균일하게 익어, 수확이 5~7일 빨라지고 수확량이 최대 30% 늘었습니다.", heroKey: "products/po-film/premium/oya/best-farms/lee-jinseop-naju-melon-v1/231006/gallery/portrait-01.webp" },
  { name: "조창국 농가", region: "전남 나주", crop: "멜론", round: 1, product: "이스타", quote: "여러 필름을 멜론에 맞게 조합해, 빛이 충분히 들어오니 멜론 색이 밝고 균일하게 올라옵니다.", heroKey: "products/po-film/premium/estar/best-farms/조창국-naju-melon-v2/250626/hero/portrait-01.webp" },
  { name: "박승용 농가", region: "강원 철원", crop: "파프리카", round: 1, product: "다이아스타", quote: "다이아스타 필름은 투광성이 좋아 파프리카 색이 선명해지고, 상부 온도가 안정돼 생육이 일정합니다.", heroKey: "products/po-film/premium/diastar/best-farms/park-seungyong-cheorwon-paprika-v1/231006/gallery/portrait-01.webp" },
  { name: "이근재 농가", region: "강원 철원", crop: "파프리카", round: 1, product: "다이아스타", quote: "다이아스타는 투과율이 좋아 하우스가 밝고, 무적 성능 덕에 물 맺힘 없이 관리가 수월합니다.", heroKey: "products/po-film/premium/diastar/best-farms/lee-geunjae-cheorwon-paprika-v1/231006/gallery/portrait-01.webp" },
  { name: "문정남 농가", region: "제주 서귀포", crop: "감귤", round: 2, product: "코팅플러스", quote: "코팅플러스는 투과율이 높아 생육이 5~10% 빨라지고, 보온·제습으로 곰팡이성 병해가 크게 줄었습니다.", heroKey: "products/po-film/standard/coating-plus/best-farms/moon-jeongnam-jeju-citrus-v2/250423/gallery/portrait-01.webp" },
  { name: "박선조 농가", region: "전남 구례", crop: "라임", round: 1, product: "코팅플러스", quote: "코팅플러스는 투광성이 좋아 빛이 깊게 들고, 강풍에도 견디며 안정된 광·온도 환경을 유지합니다.", heroKey: "products/po-film/standard/coating-plus/best-farms/park-seonjo-gurye-lime-v1/231006/gallery/portrait-01.webp" },
  { name: "신현식 농가", region: "경남 김해", crop: "블루베리", round: 1, product: "산삭시아", quote: "투광성과 보온성이 좋아져 빛이 고르게 들고, 무적 성능 덕에 물 맺힘 없이 블루베리를 관리합니다.", heroKey: "products/po-film/premium/sansaxia/best-farms/shin-hyeonsik-gimhae-blueberry-v1/231006/gallery/portrait-01.webp" },
  { name: "신윤화 농가", region: "경남 김해", crop: "장미", round: 1, product: "다이아스타", quote: "다이아스타 필름이 빛을 오래·고르게 유지해 줘, 꽃 형태와 개화 품질이 고르게 올라옵니다.", heroKey: "products/po-film/premium/diastar/best-farms/shin-yunhwa-gimhae-rose-v1/240213/gallery/portrait-01.webp" },
  { name: "황원호 농가", region: "경북 봉화", crop: "거베라", round: 1, product: "오야", quote: "오야 필름은 투명도가 좋아 거베라에 필요한 빛 환경을 만들고, 무적 성능 덕에 이슬이 안 맺혀 관리가 편안합니다.", heroKey: "products/po-film/premium/oya/best-farms/hwang-wonho-bonghwa-gerbera-v1/251125/gallery/portrait-01.webp" },
];
