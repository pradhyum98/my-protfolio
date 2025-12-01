// ============================================================================
// CUSTOM IMAGE LOADER
// ============================================================================
// Optimized image loading with automatic format detection and optimization

type ImageLoaderProps = {
  src: string
  width: number
  quality?: number
}

/**
 * Custom image loader for Next.js Image component
 * Automatically applies optimizations for different image sources
 */
export function imageLoader({ src, width, quality = 75 }: ImageLoaderProps): string {
  // For external Unsplash images, use their transformation API
  if (src.includes('unsplash.com')) {
    const url = new URL(src)
    url.searchParams.set('w', width.toString())
    url.searchParams.set('q', quality.toString())
    url.searchParams.set('fm', 'webp') // Force WebP format
    url.searchParams.set('fit', 'crop')
    url.searchParams.set('auto', 'format,compress')
    return url.toString()
  }

  // For Microlink API images
  if (src.includes('microlink.io')) {
    const url = new URL(src)
    url.searchParams.set('width', width.toString())
    url.searchParams.set('quality', quality.toString())
    return url.toString()
  }

  // For local images, use default Next.js loader
  return src
}

/**
 * Generate responsive image sizes attribute
 */
export function getResponsiveSizes(type: 'hero' | 'card' | 'thumbnail' | 'full'): string {
  const sizeMap = {
    hero: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px',
    card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    thumbnail: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px',
    full: '100vw',
  }

  return sizeMap[type] || sizeMap.full
}

/**
 * Blur data URL for image placeholders
 */
export const BLUR_DATA_URL = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA='

/**
 * Generate blur data URL with specific color
 */
export function getBlurDataURL(color = '808080'): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='1'/%3E%3C/filter%3E%3Crect width='8' height='8' fill='%23${color}' filter='url(%23b)'/%3E%3C/svg%3E`
}
