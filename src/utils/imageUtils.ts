import type React from 'react';

// Image helper resolving relative base paths and fallback images safely
const BASE_URL = import.meta.env.BASE_URL || '/';

export function resolveImageUrl(path: string | undefined): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanBase = BASE_URL.endsWith('/') ? BASE_URL : `${BASE_URL}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}

export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc?: string) {
  const target = e.currentTarget;
  if (!target.dataset.triedFallback) {
    target.dataset.triedFallback = 'true';
    if (fallbackSrc) {
      target.src = resolveImageUrl(fallbackSrc);
    } else {
      // Fallback to SVG placeholder pattern
      target.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='100%25' height='100%25' fill='%231a365d'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='24' font-weight='bold' fill='%23ffffff' text-anchor='middle' dominant-baseline='middle'%3EINDUSTRIELTECH%3C/text%3E%3C/svg%3E";
    }
  }
}
