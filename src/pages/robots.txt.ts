import type { APIRoute } from 'astro';
import { site as config } from '../site.config';
import { withBase } from '../lib/i18n';

export const GET: APIRoute = ({ site }) => {
  const body = config.allowIndexing
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL(withBase('sitemap.xml'), site).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
