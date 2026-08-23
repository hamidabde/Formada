import React, { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  webpSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  className?: string;
  fallbackSrc?: string;
}

function resolveAssetUrl(pathStr?: string): string | undefined {
  if (!pathStr) return undefined;
  if (pathStr.startsWith('http://') || pathStr.startsWith('https://') || pathStr.startsWith('data:')) {
    return pathStr;
  }
  const base = import.meta.env.BASE_URL || '/';
  if (pathStr.startsWith('/')) {
    return base === '/' ? pathStr : `${base.replace(/\/$/, '')}${pathStr}`;
  }
  return `${base}${pathStr}`;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webpSrc,
  alt,
  width = 800,
  height = 450,
  loading = 'lazy',
  fetchPriority = 'auto',
  className = '',
  fallbackSrc,
  onError,
  ...rest
}) => {
  const resolvedSrc = resolveAssetUrl(src) || src;
  const resolvedWebp = webpSrc ? resolveAssetUrl(webpSrc) : undefined;
  const resolvedFallback = fallbackSrc ? (resolveAssetUrl(fallbackSrc) || fallbackSrc) : undefined;

  const [imgSrc, setImgSrc] = useState<string | undefined>(resolvedSrc);
  const [imgWebp, setImgWebp] = useState<string | undefined>(resolvedWebp);
  const [hasFallbackFailed, setHasFallbackFailed] = useState(!src);

  // Sync state when props change
  useEffect(() => {
    if (!src) {
      setHasFallbackFailed(true);
      return;
    }
    setImgSrc(resolvedSrc);
    setImgWebp(resolvedWebp);
    setHasFallbackFailed(false);
  }, [src, webpSrc]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (resolvedFallback && imgSrc !== resolvedFallback) {
      setImgWebp(undefined);
      setImgSrc(resolvedFallback);
    } else {
      setHasFallbackFailed(true);
    }
    if (onError) {
      onError(e);
    }
  };

  if (hasFallbackFailed) {
    return (
      <div className={`w-full h-full min-h-[140px] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#1a365d] to-slate-950 text-slate-300 p-4 text-center select-none ${className}`}>
        <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-orange-400 mb-2">
          <Cpu className="w-5 h-5" />
        </div>
        <p className="text-xs font-semibold text-white line-clamp-2 px-2">{alt}</p>
        <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Centre Technique Industriel</span>
      </div>
    );
  }

  return (
    <picture className="w-full h-full block">
      {imgWebp && (
        <source srcSet={imgWebp} type="image/webp" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        referrerPolicy="no-referrer"
        onError={handleError}
        className={`w-full h-full object-cover ${className}`}
        {...rest}
      />
    </picture>
  );
};

