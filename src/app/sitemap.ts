import type { MetadataRoute } from "next";
import { getPoFilms, getAccessories, getCropCares } from "@/lib/products";
import { NEWS } from "@/content/news";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://saemigroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const STATIC_PATHS = [
    "/",
    "/about",
    "/about/ceo",
    "/about/companies",
    "/about/history",
    "/about/research",
    "/about/factories",
    "/about/partners",
    "/po-film",
    "/po-film/compare",
    "/po-film/by-crop",
    "/po-film/quality",
    "/accessories",
    "/crop-care",
    "/machinery",
    "/machinery/parts",
    "/machinery/yaskawa",
    "/best-farms",
    "/news",
    "/resources",
    "/contact",
    "/contact/quote",
    "/contact/dealers",
    "/contact/become-dealer",
    "/contact/jobs",
    "/contact/saemi-nongbaksa",
  ];

  const staticEntries = STATIC_PATHS.map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "/" ? 1 : 0.7,
  }));

  const poFilmEntries = getPoFilms().map((p) => ({
    url: `${SITE}/po-film/${p.tier}/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const accessoryEntries = getAccessories().map((a) => ({
    url: `${SITE}/accessories/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cropCareEntries = getCropCares().map((c) => ({
    url: `${SITE}/crop-care/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const newsEntries = NEWS.map((n) => ({
    url: `${SITE}/news/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    ...staticEntries,
    ...poFilmEntries,
    ...accessoryEntries,
    ...cropCareEntries,
    ...newsEntries,
  ];
}
