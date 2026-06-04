import type { Product } from "@/lib/types";

export function getClearProductSummary(product: Product) {
  const tierLabel = product.tier === "premium" ? "프리미엄" : "스탠다드";
  const type = product.filmType ? `${product.filmType} 기능` : "필요 기능";
  const thickness =
    product.thickness && product.thickness.length > 0
      ? `두께 ${product.thickness.join(", ")}mm 규격이 있습니다.`
      : null;

  return [
    `${type}을 기준으로 선택하는 ${tierLabel} PO필름입니다.`,
    thickness,
  ]
    .filter(Boolean)
    .join(" ");
}
