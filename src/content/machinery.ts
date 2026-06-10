// 기계·FA 사업부 제품 데이터 — saemi-intro(회사 공식 소개 사이트) 기계 섹션 기준.
// 이미지 키는 saemi-web 버킷의 products/machinery/** (saemi-archive와 동일 구조).

export interface MachineryItem {
  label: string;
  /** R2 키 */
  image: string;
}

export interface MachinerySector {
  /** 앵커 id — nav와 일치 */
  id: string;
  title: string;
  desc: string;
  items: MachineryItem[];
}

export const MACHINERY_PARTNERS = [
  { name: "마루야마 제작소", en: "Maruyama", note: "고압펌프 — 2004년 정밀부품 수출 시작" },
  { name: "스미토모 중기계공업", en: "Sumitomo Heavy Industries", note: "조선·중장비 부품" },
  { name: "야하타", en: "Yahata", note: "정밀 가공 부품" },
  { name: "니폰 크라이스", en: "Nippon Kreis", note: "산업 부품" },
  { name: "야스카와", en: "YASKAWA", note: "산업용 로봇 — 2012년 영남총판 등록" },
];

export const MACHINERY_SECTORS: MachinerySector[] = [
  {
    id: "shipbuilding",
    title: "조선",
    desc: "Flexible Hose, Valve, Fitting, Pipe 등",
    items: [
      { label: "Flexible Hose", image: "products/machinery/호스,-파이프/hose/flexible-hose-assembly/flexible-hose-assembly.webp" },
      { label: "Braided Hose", image: "products/machinery/호스,-파이프/hose/braided-flexible-hose-assembly/braided-flexible-hose-assembly.webp" },
      { label: "Rubber Hose", image: "products/machinery/호스,-파이프/hose/flexible-rubber-hose-assembly/flexible-rubber-hose-assembly-01.webp" },
      { label: "Bent Pipe", image: "products/machinery/호스,-파이프/pipe/bent-pipe/bent-pipe.webp" },
      { label: "Pipe Assembly", image: "products/machinery/호스,-파이프/pipe/pipe-assembly/pipe-assembly.webp" },
      { label: "Valve", image: "products/machinery/피팅,-밸브/valve/valve.webp" },
      { label: "Hydraulic Hose", image: "products/machinery/호스,-파이프/hose/hydraulic-hose-assemblies/hydraulic-hose-assemblies.webp" },
      { label: "Industrial Hose", image: "products/machinery/호스,-파이프/hose/industrial-flexible-hose-assemblies/industrial-flexible-hose-assemblies.webp" },
      { label: "SUS Hose", image: "products/machinery/호스,-파이프/hose/sus-flexible-hose/sus-flexible-hose.webp" },
      { label: "Copper Pipe", image: "products/machinery/호스,-파이프/pipe/copper-pipes/coper-pipes.webp" },
      { label: "Connector", image: "products/machinery/피팅,-밸브/connector/connector-01.webp" },
      { label: "Fitting", image: "products/machinery/피팅,-밸브/fitting/fitting-01.webp" },
    ],
  },
  {
    id: "construction",
    title: "건설",
    desc: "Crawler, Hydraulic Cylinder, Gasket 등",
    items: [
      { label: "Hydraulic Cylinder", image: "products/machinery/완제품/hydraulic-cylinder/hydraulic-cylinder-01.webp" },
      { label: "Crawler", image: "products/machinery/고무,-씰링/crawler/crawlwer-01.webp" },
      { label: "Metal Gasket", image: "products/machinery/고무,-씰링/gaskets/metal-gasket/metal-gasket.webp" },
      { label: "Non-Asbestos Gasket", image: "products/machinery/고무,-씰링/gaskets/non-asbestos-gasket/non-asbestos-gasket.webp" },
      { label: "Rubber Boot", image: "products/machinery/고무,-씰링/rubber-boot/rubber-boot.webp" },
      { label: "Air Filter", image: "products/machinery/고무,-씰링/air-filter/air-filter.webp" },
      { label: "Handle", image: "products/machinery/고무,-씰링/handle/handle.webp" },
      { label: "Hydraulic Cylinder", image: "products/machinery/완제품/hydraulic-cylinder/hydraulic-cylinder-04.webp" },
    ],
  },
  {
    id: "agriculture",
    title: "농업",
    desc: "대형 플라스틱 부품, Tire, Pump 등 — UTV·고압펌프 핵심 부품",
    items: [
      { label: "Plastic Parts", image: "products/machinery/대형-플라스틱-부품/plastic-01.webp" },
      { label: "Plastic Parts", image: "products/machinery/대형-플라스틱-부품/plastic-02.webp" },
      { label: "Tire", image: "products/machinery/고무,-씰링/tire/tire-01.webp" },
      { label: "Tire", image: "products/machinery/고무,-씰링/tire/tire-02.webp" },
    ],
  },
  {
    id: "industry",
    title: "산업",
    desc: "Bevel Gear, Casting, Block, Shaft Link 등",
    items: [
      { label: "Engine Block", image: "products/machinery/캐스팅/engineblock/engineblock.webp" },
      { label: "Cylinder Head", image: "products/machinery/캐스팅/cylinder-head/cylinder-head.webp" },
      { label: "Gear Case", image: "products/machinery/캐스팅/gear-case/gear-case.webp" },
      { label: "Housing", image: "products/machinery/캐스팅/housing/housing.webp" },
      { label: "Crankcase", image: "products/machinery/캐스팅/crankcase-housing/crankcase-housing.webp" },
      { label: "Bevel Gear", image: "products/machinery/기계부품/bevel-gear/bevel-gear.webp" },
      { label: "Block", image: "products/machinery/기계부품/block/block.webp" },
      { label: "Holder", image: "products/machinery/기계부품/holder/holder-01.webp" },
      { label: "Oil Strainer", image: "products/machinery/기계부품/oil-strainer/oil-strainer.webp" },
      { label: "Plate", image: "products/machinery/기계부품/plate/palte.webp" },
      { label: "Shaft Link", image: "products/machinery/기계부품/shaft-link/shaft-link.webp" },
    ],
  },
];

/** YASKAWA MOTOMAN 라인업 — 이미지는 robodk 공개 CDN (saemi-intro와 동일 출처) */
export const YASKAWA_ROBOTS = [
  { label: "피킹 & 팔레타이징", model: "GP50", image: "https://cdn.robodk.com/robot/img/Yaskawa-Motoman-GP50-robot.png", body: "고속 피킹과 팔레타이징을 위한 대가반 라인." },
  { label: "협업 로봇 HC", model: "HC10DTP", image: "https://cdn.robodk.com/robot/img/Yaskawa-Motoman-HC10DTP-robot.png", body: "사람과 함께 작업하는 협동 로봇. 안전과 효율의 균형." },
  { label: "스폿용접 SP", model: "AR2010", image: "https://cdn.robodk.com/robot/img/Yaskawa-Motoman-AR2010-robot.png", body: "자동차·금속 가공의 정밀 스폿 용접." },
  { label: "핸들링 GP", model: "GP25", image: "https://cdn.robodk.com/robot/img/Yaskawa-Motoman-GP25-robot.png", body: "조립·이송·검사를 아우르는 범용 핸들링." },
  { label: "아크용접 AR", model: "AR1440", image: "https://cdn.robodk.com/robot/img/Yaskawa-Motoman-AR1440-robot.png", body: "강도와 비드 품질이 요구되는 아크 용접 전용." },
  { label: "범용 GP", model: "GP12", image: "https://cdn.robodk.com/robot/img/Yaskawa-Motoman-GP12-robot.png", body: "소형·중형 라인의 표준 범용 로봇." },
];
