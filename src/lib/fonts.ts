import { Gowun_Batang } from "next/font/google";

/**
 * Pretendard Variable — 본문·UI 기본.
 * 패키지의 dynamic subset CSS를 layout에서 import — 페이지에서 실제 쓰인
 * 유니코드 범위 청크만 내려받는다 (전체 가변 woff2 2MB → 보통 수백 KB).
 */

/**
 * Gowun Batang — Display / H1 / H2 / Lede 전용 (Premium 모드).
 * 본문에는 절대 사용 X (브랜드북 v2.8 규칙).
 */
export const gowunBatang = Gowun_Batang({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gowun-batang",
});
