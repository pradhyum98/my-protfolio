import Image, { type ImageProps } from 'next/image'
import { getResponsiveSizes, imageLoader, BLUR_DATA_URL } from '@/lib/image-loader'

// ============================================================================
// OPTIMIZED IMAGE COMPONENT
// ============================================================================
// Wrapper around Next.js Image with automatic optimizations

type OptimizedImageProps = Omit<ImageProps, 'loader' | 'placeholder'> & {
  sizeType?: 'hero' | 'card' | 'thumbnail' | 'full'
  useBlur?: boolean
}

export function OptimizedImage({
  sizeType = 'card',
  useBlur = true,
  sizes,
  quality = 85,
  ...props
}: OptimizedImageProps) {
  const imageSizes = sizes || getResponsiveSizes(sizeType)

  return (
    <Image
      {...props}
      loader={imageLoader}
      sizes={imageSizes}
      quality={quality}
      placeholder={useBlur ? 'blur' : 'empty'}
      blurDataURL={useBlur ? BLUR_DATA_URL : undefined}
      loading={props.priority ? 'eager' : 'lazy'}
    />
  )
}
