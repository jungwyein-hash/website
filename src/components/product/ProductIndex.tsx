import Link from "next/link";
import SmartImage from "@/components/media/SmartImage";
import type { Product } from "@/lib/types";

export default function ProductIndex({
  products,
  hrefBase,
  withTier = true,
}: {
  products: Product[];
  hrefBase: string;
  withTier?: boolean;
}) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => {
        const href =
          withTier && p.tier
            ? `${hrefBase}/${p.tier}/${p.slug}`
            : `${hrefBase}/${p.slug}`;
        const tierLabel = p.tier === "premium" ? "프리미엄" : "스탠다드";
        const lead = p.tagline.ko;

        return (
          <li key={p.slug}>
            <Link
              href={href}
              className="group surface-panel block h-full overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-paper-soft">
                <SmartImage
                  src={p.hero.src}
                  alt={p.hero.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className={`text-[24px] font-semibold leading-tight text-ink-invert ${
                      p.tier === "premium" ? "font-premium font-bold text-soil-brown" : ""
                    }`}
                  >
                    {p.name.ko}
                  </h3>
                  {p.tier && (
                    <span className="rounded-full bg-spring-blue/8 px-3 py-1 text-[12px] font-semibold text-spring-blue">
                      {tierLabel}
                    </span>
                  )}
                </div>
                <p className="mt-4 min-h-[5rem] text-[16px] leading-relaxed text-soil-brown-soft text-balance">
                  {lead}
                </p>
                <span className="mt-5 inline-flex text-[16px] font-semibold text-spring-blue">
                  제품 보기
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
