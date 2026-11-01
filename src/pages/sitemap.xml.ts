import type { APIRoute } from 'astro';
import { languages, langs, withBase } from '../lib/i18n';
import { activeProducts } from '../lib/products';
import { policies } from '../data/policies';

export const GET: APIRoute = ({ site }) => {
  const paths = [
    '',
    'products/',
    ...activeProducts.map((p) => `products/${p.slug}/`),
    'how-to-cook/',
    'our-story/',
    'faq/',
    'order/',
    ...policies.map((p) => `policies/${p.slug}/`),
  ];
  const abs = (lang: string, path: string) => new URL(withBase(`${lang}/${path}`), site).href;
  const urls = paths.flatMap((path) =>
    langs.map((lang) => {
      const alts = langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${languages[l].htmlLang}" href="${abs(l, path)}"/>`).join('\n');
      return `  <url>\n    <loc>${abs(lang, path)}</loc>\n${alts}\n  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
