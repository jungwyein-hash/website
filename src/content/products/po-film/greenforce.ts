import type { Product } from "@/lib/types";

export const greenforce: Product = {
  slug: "greenforce",
  category: "po-film",
  tier: "standard",
  brand: "arts",
  origin: "SAEMI-TECH",
  since: 2024,
  name: { ko: "그린포스", en: "Green Force" },
  tagline: {
    ko: "업계 최초 고강도 3중 녹색 멀칭 PO필름.",
  },
  intro: {
    ko: "그린포스는 멀칭용으로 처음 만들어진 고강도 3중 녹색 PO필름입니다. 잡초의 광합성을 차단하면서도 토양의 보온성을 유지하고, 3중 구조로 찢어짐 없이 한 시즌을 견딥니다.",
  },
  filmType: "녹색멀칭",
  thickness: [0.04, 0.03],
  bigSpecs: [
    { label: "두께", value: "0.04 / 0.03", unit: "mm" },
    { label: "구조", value: "3중", unit: "" },
    { label: "포지션", value: "업계 최초", unit: "" },
  ],
  highlights: [
    {
      title: "업계 최초 3중 녹색 멀칭",
      body: "멀칭용 PO필름 카테고리에서 처음 선보이는 고강도 3중 구조 녹색 라인.",
    },
    {
      title: "잡초·보온 동시 해결",
      body: "녹색이 잡초의 광합성을 차단하면서, 토양의 보온성은 그대로 유지합니다.",
    },
    {
      title: "찢어짐 없는 강도",
      body: "3중 구조로 한 시즌을 견디는 강도 — 자주 갈아 끼우는 부담을 줄여 줍니다.",
    },
  ],
  fullSpecs: [
    {
      group: "기본",
      rows: [
        ["구분", "녹색 멀칭 PO필름"],
        ["두께", "0.04 · 0.03 mm"],
        ["구조", "3중 고강도"],
        ["출시", "2024년"],
        ["제조", "SAEMI-TECH (대한민국)"],
      ],
    },
  ],
  hero: {
    src: "products/po-film/standard/greenforce/hero/interior-01.webp",
    alt: "그린포스 녹색 멀칭 PO필름",
  },
  partners: [],
  badges: ["NEW", "SAEMI-TECH"],
};
