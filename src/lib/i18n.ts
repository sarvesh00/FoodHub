import { site } from '../site.config';
import { ui, type UIKey } from '../i18n/ui';

export const languages = {
  en: { label: 'English', short: 'EN', htmlLang: 'en-IN', ogLocale: 'en_IN' },
  hi: { label: 'हिन्दी', short: 'हि', htmlLang: 'hi-IN', ogLocale: 'hi_IN' },
  mr: { label: 'मराठी', short: 'म', htmlLang: 'mr-IN', ogLocale: 'mr_IN' },
  gu: { label: 'ગુજરાતી', short: 'ગુ', htmlLang: 'gu-IN', ogLocale: 'gu_IN' },
} as const;

export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'en';

/** A value with an English version and optional translations. */
export type L10n<T = string> = { en: T } & Partial<Record<Lang, T>>;

/** Pick the value for a language, falling back to English. */
export function pick<T>(value: L10n<T>, lang: Lang): T {
  return (value[lang] ?? value.en) as T;
}

/** True when the language has no translation and English is shown instead. */
export function isFallback(value: L10n<unknown>, lang: Lang): boolean {
  return lang !== 'en' && value[lang] === undefined;
}

/** UI string lookup with English fallback and {placeholder} substitution. */
export function useT(lang: Lang) {
  return (key: UIKey, vars: Record<string, string | number> = {}) => {
    const raw = (ui[lang] as Partial<Record<UIKey, string>>)[key] ?? ui.en[key] ?? key;
    return raw.replace(/\{(\w+)\}/g, (_, k) => (k === 'brand' ? brandFor(lang) : String(vars[k] ?? `{${k}}`)));
  };
}

export function brandFor(lang: Lang): string {
  return site.brandNameLocal[lang] ?? site.brandName;
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a site path with the deploy base path ('/FoodHub' on GitHub Pages). */
export function withBase(path = ''): string {
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Link to a page in a language, e.g. href('hi', 'products/') -> /FoodHub/hi/products/ */
export function href(lang: Lang, path = ''): string {
  return withBase(`${lang}/${path}`);
}

export function rupees(n: number): string {
  return `₹${n.toLocaleString('en-IN')}`;
}

/** WhatsApp click-to-chat link. With no number set, WhatsApp asks the user to choose a contact. */
export function waLink(text: string): string {
  const num = site.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
}
