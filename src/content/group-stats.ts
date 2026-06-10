// 그룹·PO필름 사업부 실적 수치 — saemi-intro(회사 공식 소개 사이트) 기준.
// 수치를 임의로 만들지 말 것. 갱신은 회사 공식 자료로만.

import type { Stat } from "@/components/viz/StatStrip";
import type { Bar } from "@/components/viz/BarChart";

/** PO필름 연간 판매량 (톤) — 2026은 목표치 */
export const PO_FILM_SALES: Bar[] = [
  { label: "2021", value: 2400, display: "2,400톤" },
  { label: "2022", value: 2700, display: "2,700톤" },
  { label: "2023", value: 3100, display: "3,100톤" },
  { label: "2025", value: 4300, display: "4,300톤" },
  { label: "2026 목표", value: 6000, display: "6,000톤", highlight: true },
];

/** PO필름 사업부 핵심 통계 */
export const PO_FILM_STATS: Stat[] = [
  { value: 1, suffix: "위", label: "국내 코팅 PO필름", startFrom: 3, highlight: true },
  { value: 400, suffix: "+", label: "전국 대리점" },
  { value: 6000, suffix: "톤", label: "2026 판매 목표" },
  { value: 20, suffix: "+년", label: "업력 (2004~)" },
];

/** 그룹 차원 통계 — 회사소개 페이지용 */
export const GROUP_STATS: Stat[] = [
  { value: 4, suffix: "개", label: "농산업 특화 회사" },
  { value: 4, suffix: "개", label: "핵심 사업부" },
  { value: 400, suffix: "+", label: "전국 대리점", highlight: true },
  { value: 16, suffix: "종+", label: "연구소 물성·광학 측정장비" },
];
