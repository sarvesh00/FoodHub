import data from '../data/products.json';
import type { L10n } from './i18n';

export type Pack = { id: string; size: string; priceRupees: number; makes?: L10n };
export type Product = {
  slug: string;
  status: 'active' | 'upcoming';
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

export const products = data.products as Product[];
export const activeProducts = products.filter((p) => p.status === 'active');
export const upcomingProducts = products.filter((p) => p.status === 'upcoming');

export function minPrice(p: Product): number | undefined {
  const prices = (p.packs ?? []).map((k) => k.priceRupees);
  return prices.length ? Math.min(...prices) : undefined;
}
