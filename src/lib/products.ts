import data from '../data/products.json';
import catData from '../data/categories.json';
import type { L10n } from './i18n';

export type Product = {
  slug: string;
  category?: string;
  status: 'active' | 'upcoming';
  featured?: boolean;
  shape?: 'paratha' | 'tikki' | 'chilla';
  art: { dough: string; fleck: string };
  name: L10n;
  short: L10n;
  // null = not confirmed yet; shown as [TBC by founder]
  netWeight: string | null;
  priceRupees: number | null;
  ingredients: L10n<string[]> | null;
  allergens: L10n | null;
  shelfLife: L10n | null;
  cooking: L10n<string[]> | null;
};
export type Category = { slug: string; status: 'active' | 'upcoming'; name: L10n; short: L10n };

export const products = data.products as unknown as Product[];
export const activeProducts = products.filter((p) => p.status === 'active');
export const upcomingProducts = products.filter((p) => p.status === 'upcoming');
/** Flagship products (falls back to all active products). */
export const featuredProducts = activeProducts.some((p) => p.featured) ? activeProducts.filter((p) => p.featured) : activeProducts;

/** Active categories that have at least one active product, in categories.json order. */
export const categories = (catData.categories as Category[]).filter(
  (c) => c.status === 'active' && activeProducts.some((p) => p.category === c.slug),
);

export function categoryOf(p: Product): Category | undefined {
  return categories.find((c) => c.slug === p.category);
}

export function productsIn(cat: Category, list: Product[] = activeProducts): Product[] {
  return list.filter((p) => p.category === cat.slug);
}

/** Active products not in any active category. */
export const uncategorised = activeProducts.filter((p) => !categoryOf(p));
