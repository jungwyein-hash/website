// 작물별 수채 일러스트 아이콘 — R2의 일러스트 콜라주 한 장을 CSS 스프라이트로 사용.
// 원본: design-assets/web/best-farms-40-crops-illustration-02.webp (1254×1254)
// 좌표는 픽셀 클러스터 분석으로 추출한 각 일러스트의 경계 상자.
// 우수농가 카드 이름 옆에 표시.

// 공개 버킷 URL — 페이지 HTML 전체에 이미 노출되는 값 (R2_PUBLIC_URL과 동일).
// 클라이언트 컴포넌트에서 쓰므로 server-only인 lib/r2를 import하지 않는다.
const SPRITE_URL =
  "https://pub-b3b269f399c7487d9fbb63d3270ebcad.r2.dev/design-assets/web/best-farms-40-crops-illustration-02.webp";
const SPRITE_SIZE = 1254;

// 한글 작물명 → 스프라이트 경계 상자 [x0, y0, x1, y1]
const CROP_BOX: Record<string, [number, number, number, number]> = {
  수박: [42, 54, 266, 254],
  딸기: [298, 50, 470, 252],
  참외: [505, 51, 690, 228],
  포도: [741, 46, 905, 258],
  멜론: [1030, 471, 1214, 655],
  오이: [52, 491, 302, 591],
  토마토: [488, 294, 626, 431],
  엽채류: [651, 266, 862, 486],
  고추: [332, 502, 494, 602],
  다육이: [760, 662, 893, 790],
  파프리카: [905, 611, 1036, 788],
  감귤: [514, 470, 742, 615],
  라임: [674, 970, 818, 1090],
  블루베리: [1018, 849, 1177, 945],
  장미: [819, 1090, 990, 1218],
  거베라: [819, 1090, 990, 1218], // 거베라 전용 일러스트 부재 → 장미로 대체
};

export default function CropIcon({
  crop,
  className,
  size = 26,
}: {
  crop: string;
  className?: string;
  size?: number;
}) {
  const box = CROP_BOX[crop];
  if (!box) return null;
  const [x0, y0, x1, y1] = box;
  const w = x1 - x0;
  const h = y1 - y0;
  const scale = size / Math.max(w, h);
  return (
    <span
      aria-hidden
      className={className}
      style={{
        display: "inline-block",
        flexShrink: 0,
        width: Math.round(w * scale),
        height: Math.round(h * scale),
        backgroundImage: `url(${SPRITE_URL})`,
        backgroundSize: `${SPRITE_SIZE * scale}px ${SPRITE_SIZE * scale}px`,
        backgroundPosition: `${-x0 * scale}px ${-y0 * scale}px`,
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
