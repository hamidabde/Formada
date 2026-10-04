import { ProgrammaticPage, ProgrammaticType } from '../../types/programmatic';
import { FORMATION_PAGES } from './formations';
import { SERVICE_PAGES } from './services';
import { GUIDE_PAGES } from './guides';

/**
 * Central Programmatic SEO Catalog for INDUSTRIELTECH
 * Total candidates: 30 pages (10 Formations, 10 Services spécialisés, 10 Guides techniques)
 * Extensible: Adding a 31st page only requires appending an item to this array!
 */
export const ALL_PROGRAMMATIC_PAGES: ProgrammaticPage[] = [
  ...FORMATION_PAGES,
  ...SERVICE_PAGES,
  ...GUIDE_PAGES,
];

/**
 * Get all published programmatic pages (for sitemap, search index, and linking)
 */
export function getPublishedProgrammaticPages(): ProgrammaticPage[] {
  return ALL_PROGRAMMATIC_PAGES.filter((p) => p.status === 'published');
}

/**
 * Get published pages filtered by category type
 */
export function getPublishedPagesByType(type: ProgrammaticType): ProgrammaticPage[] {
  return ALL_PROGRAMMATIC_PAGES.filter((p) => p.type === type && p.status === 'published');
}

/**
 * Find a specific programmatic page by its exact slug and type
 */
export function getProgrammaticPage(type: ProgrammaticType, slug: string): ProgrammaticPage | undefined {
  return ALL_PROGRAMMATIC_PAGES.find((p) => p.type === type && p.slug === slug);
}

/**
 * Find a programmatic page by slug alone (supports generic routing)
 */
export function getProgrammaticPageBySlug(slug: string): ProgrammaticPage | undefined {
  return ALL_PROGRAMMATIC_PAGES.find((p) => p.slug === slug);
}

/**
 * Get the full target URL path for any programmatic page
 */
export function getProgrammaticPageUrl(page: ProgrammaticPage): string {
  switch (page.type) {
    case 'formation':
      return `/formations/${page.slug}`;
    case 'service':
      return `/services/${page.slug}`;
    case 'guide':
      return `/guides/${page.slug}`;
    default:
      return `/${page.slug}`;
  }
}

/**
 * Helper to retrieve related pages for internal linking
 */
export function getRelatedPages(relatedSlugs: string[]): ProgrammaticPage[] {
  if (!relatedSlugs || relatedSlugs.length === 0) return [];
  return ALL_PROGRAMMATIC_PAGES.filter((p) => relatedSlugs.includes(p.slug));
}
