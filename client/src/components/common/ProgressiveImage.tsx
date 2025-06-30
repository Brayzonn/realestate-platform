import React, { useState, useEffect, useRef, useMemo } from 'react';

const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(target);
    return () => observer.disconnect();
  }, [options.threshold, options.root, options.rootMargin]);

  return { targetRef, isIntersecting };
};

const useImageLoader = (src: string, retryCount = 3, retryDelay = 1000) => {
  const [state, setState] = useState({
    isLoading: true,
    hasError: false,
    loadedSrc: '',
  });
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (!src || attempts >= retryCount) return;

    let isMounted = true;
    const img = new Image();

    img.crossOrigin = 'anonymous';
    img.src = src;

    const handleLoad = () => {
      if (isMounted) {
        setState({ isLoading: false, hasError: false, loadedSrc: src });
      }
    };

    const handleError = () => {
      if (isMounted) {
        if (attempts < retryCount - 1) {
          setTimeout(() => setAttempts((prev) => prev + 1), retryDelay);
        } else {
          setState({ isLoading: false, hasError: true, loadedSrc: '' });
        }
      }
    };

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      isMounted = false;
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src, attempts, retryCount, retryDelay]);

  return state;
};

const optimizeImageUrl = (
  src: string,
  options: { width?: number; quality?: number; format?: string }
) => {
  const { width = 50, quality = 10, format } = options;

  try {
    const url = new URL(src);

    if (url.hostname.includes('unsplash.com')) {
      url.searchParams.set('w', width.toString());
      url.searchParams.set('q', quality.toString());
      url.searchParams.set('auto', 'format,compress');
      if (format) url.searchParams.set('fm', format);
      return url.toString();
    }

    if (url.hostname.includes('cloudinary.com')) {
      const pathParts = url.pathname.split('/');
      const uploadIndex = pathParts.indexOf('upload');
      if (uploadIndex !== -1) {
        const transforms = `w_${width},q_${quality}${format ? `,f_${format}` : ''}`;
        pathParts.splice(uploadIndex + 1, 0, transforms);
        url.pathname = pathParts.join('/');
      }
      return url.toString();
    }

    return src;
  } catch {
    return src;
  }
};

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderQuality?: number;
  placeholderWidth?: number;
  fallbackSrc?: string;
  onError?: (error: Error) => void;
  lazy?: boolean;
  retryCount?: number;
  retryDelay?: number;
  sizes?: string;
  srcSet?: string;
  showSkeleton?: boolean;
  aspectRatio?: string;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  className = '',
  placeholderQuality = 10,
  placeholderWidth = 50,
  fallbackSrc,
  onError,
  lazy = false,
  retryCount = 3,
  retryDelay = 1000,
  sizes,
  srcSet,
  showSkeleton = false,
  aspectRatio,
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
  });

  const shouldLoad = !lazy || isIntersecting;

  const placeholderSrc = useMemo(
    () => optimizeImageUrl(src, { width: placeholderWidth, quality: placeholderQuality }),
    [src, placeholderWidth, placeholderQuality]
  );

  const { hasError: placeholderError } = useImageLoader(shouldLoad ? placeholderSrc : '', 1, 0);

  const {
    isLoading: highResLoading,
    hasError: highResError,
    loadedSrc,
  } = useImageLoader(shouldLoad && !placeholderError ? src : '', retryCount, retryDelay);

  useEffect(() => {
    if (highResError && onError) {
      onError(new Error(`Failed to load image: ${src}`));
    }
  }, [highResError, src, onError]);

  const containerStyle: React.CSSProperties = aspectRatio ? { aspectRatio, height: 'auto' } : {};

  if (placeholderError && highResError && fallbackSrc) {
    return <img src={fallbackSrc} alt={alt} className={className} />;
  }

  if (placeholderError && highResError) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-200`}
        style={containerStyle}
      >
        <span className="text-gray-500">Failed to load image</span>
      </div>
    );
  }

  // Show skeleton while waiting for intersection
  if (!shouldLoad && showSkeleton) {
    return (
      <div
        ref={targetRef}
        className={`${className} animate-pulse bg-gray-300`}
        style={containerStyle}
        role="img"
        aria-label={`Loading ${alt}`}
      />
    );
  }

  const isFullyLoaded = loadedSrc && !highResLoading;

  return (
    <div ref={targetRef} className="relative h-full w-full overflow-hidden" style={containerStyle}>
      {shouldLoad && (
        <img
          src={placeholderSrc}
          alt=""
          className={`${className} ${
            isFullyLoaded ? 'scale-100 opacity-0' : 'scale-110 blur-xl'
          } transition-all duration-700 ease-out`}
          aria-hidden="true"
          loading={lazy ? 'lazy' : 'eager'}
        />
      )}

      {loadedSrc && (
        <img
          src={loadedSrc}
          alt={alt}
          className={`${className} absolute inset-0 ${
            isFullyLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700 ease-out`}
          sizes={sizes}
          srcSet={srcSet}
          loading={lazy ? 'lazy' : 'eager'}
        />
      )}
    </div>
  );
};

export default ProgressiveImage;
