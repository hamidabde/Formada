import React, { useState, useEffect } from 'react';

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

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webpSrc,
  alt,
  width = 800,
  height = 450,
  loading = 'lazy',
  fetchPriority = 'auto',
  className = '',
  fallbackSrc = '/images/fallback-industrie.webp',
  onError,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [imgWebp, setImgWebp] = useState<string | undefined>(
    webpSrc || (src.endsWith('.jpg') ? src.replace(/\.jpg$/, '.webp') : undefined)
  );
  const [isFailed, setIsFailed] = useState(false);

  // Sync state when props change
  useEffect(() => {
    setImgSrc(src);
    setImgWebp(webpSrc || (src.endsWith('.jpg') ? src.replace(/\.jpg$/, '.webp') : undefined));
    setIsFailed(false);
  }, [src, webpSrc]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!isFailed) {
      setIsFailed(true);
      setImgWebp(undefined);
      setImgSrc(fallbackSrc);
    }
    if (onError) {
      onError(e);
    }
  };

  return (
    <picture className="w-full h-full block">
      {imgWebp && !isFailed && (
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
        onError={handleError}
        className={`w-full h-full object-cover ${className}`}
        {...rest}
      />
    </picture>
  );
};
