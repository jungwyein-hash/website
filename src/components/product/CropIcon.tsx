// 작물별 수채 일러스트 아이콘 (흰 배경 제거·투명 PNG, 크기 정규화).
// 원본 일러스트 그리드에서 작물별로 크롭해 /public/crop-icons/ 에 저장.
// 우수농가 카드 이름 옆에 표시.

// 한글 작물명 → 아이콘 파일명
const CROP_FILE: Record<string, string> = {
  수박: "watermelon",
  딸기: "strawberry",
  참외: "chamoe",
  멜론: "melon",
  포도: "grape",
  오이: "cucumber",
  토마토: "tomato",
  엽채류: "lettuce",
  고추: "chili",
  다육이: "succulent",
  파프리카: "bellpepper",
  감귤: "tangerine",
  라임: "lime",
  블루베리: "blueberry",
  장미: "rose",
  거베라: "rose", // 거베라 전용 일러스트 부재 → 장미로 대체
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
  const file = CROP_FILE[crop];
  if (!file) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/crop-icons/${file}.png`}
      alt=""
      aria-hidden
      width={size}
      height={size}
      className={className}
      style={{ objectFit: "contain", display: "inline-block" }}
    />
  );
}
