import { useEffect, useRef, useState } from 'react'

// ============================================================================
// INTERSECTION OBSERVER HOOK
// ============================================================================
// Efficient way to detect when elements enter the viewport

type UseIntersectionObserverOptions = IntersectionObserverInit & {
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = false,
}: UseIntersectionObserverOptions = {}): [
  React.RefObject<HTMLDivElement | null>,
  boolean
] {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting

        setIsIntersecting(isElementIntersecting)

        // Unobserve if freezeOnceVisible is true and element is visible
        if (isElementIntersecting && freezeOnceVisible) {
          observer.unobserve(element)
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, freezeOnceVisible])

  return [elementRef, isIntersecting]
}
