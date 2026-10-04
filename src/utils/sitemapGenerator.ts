import { ALL_PROGRAMMATIC_PAGES, getProgrammaticPageUrl } from '../data/programmatic';

export interface StaticRouteConfig {
  path: string;
  priority: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastmod: string;
}

export const CORE_STATIC_ROUTES: StaticRouteConfig[] = [
  { path: '', priority: '1.0', changefreq: 'weekly', lastmod: '2026-09-20' },
  { path: '/formations', priority: '0.9', changefreq: 'weekly', lastmod: '2026-09-20' },
  { path: '/services', priority: '0.9', changefreq: 'weekly', lastmod: '2026-09-20' },
  { path: '/services/reseaux-infrastructure-it', priority: '0.9', changefreq: 'weekly', lastmod: '2026-09-20' },
  { path: '/guides', priority: '0.8', changefreq: 'weekly', lastmod: '2026-09-20' },
  { path: '/realisations', priority: '0.8', changefreq: 'monthly', lastmod: '2026-09-20' },
  { path: '/a-propos', priority: '0.7', changefreq: 'monthly', lastmod: '2026-09-20' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly', lastmod: '2026-09-20' },
];

/**
 * Builds standard XML sitemap for search engines.
 * Strictly includes ONLY published pages (drafts are excluded).
 */
export function generateSitemapXml(baseUrl = 'https://industrieltech.com'): string {
  const publishedPages = ALL_PROGRAMMATIC_PAGES.filter((p) => p.status === 'published');

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // 1. Core static routes
  for (const route of CORE_STATIC_ROUTES) {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  }

  // 2. Programmatic published pages
  for (const page of publishedPages) {
    const pageUrl = getProgrammaticPageUrl(page);
    const priority = page.type === 'formation' ? '0.85' : page.type === 'service' ? '0.85' : '0.75';
    const changefreq = page.type === 'guide' ? 'monthly' : 'weekly';

    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${pageUrl}</loc>\n`;
    xml += `    <lastmod>${page.updatedAt}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>\n';
  return xml;
}
