import { R2_PUBLIC_URL } from "./r2";

/**
 * R2 키를 공개 URL로 변환.
 * R2_PUBLIC_URL이 없으면 빈 문자열을 반환 (이미지 미표시 → SmartImage가 placeholder 처리).
 */
export function r2Url(key: string): string {
  if (!R2_PUBLIC_URL) return "";
  const base = R2_PUBLIC_URL.replace(/\/$/, "");
  const path = key.replace(/^\//, "");
  return `${base}/${encodeURI(path)}`;
}
