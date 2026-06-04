import { PO_FILMS } from "@/content/products/po-film";
import { ACCESSORIES, type Accessory } from "@/content/products/accessories";
import type { Product, Tier } from "./types";

export function getPoFilms(): Product[] {
  return PO_FILMS;
}

export function getPoFilmsByTier(tier: Tier): Product[] {
  return PO_FILMS.filter((p) => p.tier === tier);
}

export function getPoFilm(tier: Tier, slug: string): Product | undefined {
  return PO_FILMS.find((p) => p.tier === tier && p.slug === slug);
}

/** 정적 빌드용 — 현재 시드된 라인업 */
export function getPoFilmStaticParams(): { tier: Tier; slug: string }[] {
  return PO_FILMS.filter((p) => p.tier).map((p) => ({
    tier: p.tier!,
    slug: p.slug,
  }));
}

export function getAccessories(): Accessory[] {
  return ACCESSORIES;
}

export function getAccessory(slug: string): Accessory | undefined {
  return ACCESSORIES.find((a) => a.slug === slug);
}

export function getAccessoryStaticParams(): { slug: string }[] {
  return ACCESSORIES.map((a) => ({ slug: a.slug }));
}

import { CROP_CARES, type CropCare, type CropCareCategory } from "@/content/products/crop-care";

export function getCropCares(): CropCare[] {
  return CROP_CARES;
}

export function getCropCaresByCategory(cat: CropCareCategory): CropCare[] {
  return CROP_CARES.filter((c) => c.cropCareCategory === cat);
}

export function getCropCare(slug: string): CropCare | undefined {
  return CROP_CARES.find((c) => c.slug === slug);
}

export function getCropCareStaticParams(): { slug: string }[] {
  return CROP_CARES.map((c) => ({ slug: c.slug }));
}
