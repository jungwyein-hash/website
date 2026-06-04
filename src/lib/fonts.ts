import localFont from "next/font/local";
import { Gowun_Batang } from "next/font/google";

/**
 * Pretendard Variable — 본문·UI 기본.
 * 패키지 `pretendard`에 포함된 가변 woff2를 직접 로드.
 */
export const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
  weight: "100 900",
});

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
