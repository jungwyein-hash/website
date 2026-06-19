import { Gowun_Batang, Noto_Sans_JP } from "next/font/google";

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

/**
 * Noto Sans JP — 일본어(가나·한자) 전용 폴백.
 * 전역 sans 스택에서 Pretendard 다음에 배치 → 한글·영문은 Pretendard,
 * Pretendard에 없는 일본어 글리프만 Noto Sans JP로 렌더.
 * CJK 대용량 폰트라 preload는 끔(요청 시 다운로드).
 */
export const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  preload: false,
  display: "swap",
  variable: "--font-jp",
});
