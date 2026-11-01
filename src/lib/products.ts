import data from '../data/products.json';
import catData from '../data/categories.json';
import type { L10n } from './i18n';

export type Pack = { id: string; size: string; priceRupees: number; makes?: L10n };
export type Product = {
  slug: string;
  category?: string;
  status: 'active' | 'upcoming';
  featured?: boolean;
  art: { dough: string; fleck: string };
  name: L10n;
  short: L10n;
  description?: L10n;
  packs?: Pack[];
  ingredients?: L10n<string[]>;
  allergens?: L10n;
  shelfLife?: L10n;
  storage?: L10n;
  cooking?: L10n<string[]>;
};
export type Category = { slug: string; status: 'active' | 'upcoming'; name: L10n; short: L10n };

export const products = data.products as Product[];
export const activeProducts = products.filter((p) => p.status === 'active');
export const upcomingProducts = products.filter((p) => p.status === 'upcoming');
/** Flagship products for the home page (falls back to all active products). */
export const featuredProducts = activeProducts.some((p) => p.featured) ? activeProducts.filter((p) => p.featured) : activeProducts;

/** Active categories that have at least one active product. */
export const categories = (catData.categories as Category[]).filter(
  (c) => c.status === 'active' && activeProducts.some((p) => p.category === c.slug),
);

export function categoryOf(p: Product): Category | undefined {
  return categories.find((c) => c.slug === p.category);
}

export function productsIn(cat: Category): Product[] {
  return activeProducts.filter((p) => p.category === cat.slug);
}

/** Active products not in any active category (shown under "Other products"). */
export const uncategorised = activeProducts.filter((p) => !categoryOf(p));

export function minPrice(p: Product): number | undefined {
  const prices = (p.packs ?? []).map((k) => k.priceRupees);
  return prices.length ? Math.min(...prices) : undefined;
}
