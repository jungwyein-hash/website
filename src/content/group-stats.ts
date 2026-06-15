// 그룹·PO필름 사업부 실적 수치 — saemi-intro(회사 공식 소개 사이트) 기준.
// 수치를 임의로 만들지 말 것. 갱신은 회사 공식 자료로만.

import type { Stat } from "@/components/viz/StatStrip";
import type { Bar } from "@/components/viz/BarChart";

/**
 * PO필름 연간 판매 신장율 — 2021년 판매량 대비 성장률.
 * 절대 판매량(톤)·대리점 수는 대외비 — 외부 노출 금지.
 */
export const PO_FILM_SALES: Bar[] = [
  { label: "2021", value: 100, display: "" },
  { label: "2022", value: 113, display: "+13%" },
  { label: "2023", value: 129, display: "+29%" },
  { label: "2025", value: 179, display: "+79%" },
  { label: "2026 목표", value: 250, display: "+150%", highlight: true },
];

/** PO필름 사업부 핵심 통계 */
export const PO_FILM_STATS: Stat[] = [
  { value: 1, suffix: "위", label: "국내 코팅 PO필름", startFrom: 3, highlight: true },
  { value: 150, suffix: "%", label: "판매 신장율 (2021 → 2026 목표)" },
  { value: 20, suffix: "+년", label: "업력 (2004~)" },
];

/** 그룹 차원 통계 — 회사소개 페이지용 */
export const GROUP_STATS: Stat[] = [
  { value: 4, suffix: "개", label: "농산업 특화 회사" },
  { value: 4, suffix: "개", label: "핵심 사업부" },
  { value: 400, suffix: "+", label: "전국 대리점", highlight: true },
  { value: 16, suffix: "종+", label: "연구소 물성·광학 측정장비" },
];
