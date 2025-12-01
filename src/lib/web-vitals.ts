// ============================================================================
// WEB VITALS TRACKING & REPORTING
// ============================================================================
// Comprehensive performance monitoring for Core Web Vitals
// Tracks: LCP, FID, CLS, TTFB, FCP, INP

import type { Metric } from 'web-vitals'

// ============================================================================
// ANALYTICS ENDPOINT
// ============================================================================

const ANALYTICS_ENDPOINT = '/api/analytics'
const ENABLE_CONSOLE_LOGGING = process.env.NODE_ENV === 'development'

// ============================================================================
// WEB VITALS THRESHOLDS
// ============================================================================

export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 }, // Largest Contentful Paint
  FID: { good: 100, needsImprovement: 300 },   // First Input Delay
  CLS: { good: 0.1, needsImprovement: 0.25 },  // Cumulative Layout Shift
  TTFB: { good: 800, needsImprovement: 1800 }, // Time to First Byte
  FCP: { good: 1800, needsImprovement: 3000 }, // First Contentful Paint
  INP: { good: 200, needsImprovement: 500 },   // Interaction to Next Paint
} as const

// ============================================================================
// PERFORMANCE RATING
// ============================================================================

type Rating = 'good' | 'needs-improvement' | 'poor'

function getRating(metricName: string, value: number): Rating {
  const threshold = WEB_VITALS_THRESHOLDS[metricName as keyof typeof WEB_VITALS_THRESHOLDS]

  if (!threshold) return 'poor'

  if (value <= threshold.good) return 'good'
  if (value <= threshold.needsImprovement) return 'needs-improvement'
  return 'poor'
}

// ============================================================================
// PERFORMANCE DATA INTERFACE
// ============================================================================

type WebVitalsPayload = {
  id: string
  name: string
  value: number
  rating: Rating
  delta: number
  navigationType: string
  href: string
  timestamp: number
}

// ============================================================================
// SEND TO ANALYTICS
// ============================================================================

function sendToAnalytics(metric: Metric) {
  const rating = getRating(metric.name, metric.value)

  const payload: WebVitalsPayload = {
    id: metric.id,
    name: metric.name,
    value: metric.value,
    rating,
    delta: metric.delta,
    navigationType: metric.navigationType,
    href: window.location.href,
    timestamp: Date.now(),
  }

  // Log to console in development
  if (ENABLE_CONSOLE_LOGGING) {
    const emoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌'
    console.log(`${emoji} ${metric.name}:`, {
      value: `${Math.round(metric.value)}${metric.name === 'CLS' ? '' : 'ms'}`,
      rating,
      page: payload.href,
    })
  }

  // Send to analytics endpoint (if exists)
  if (typeof window !== 'undefined' && navigator.sendBeacon) {
    const body = JSON.stringify(payload)

    // Use sendBeacon for non-blocking analytics
    navigator.sendBeacon(ANALYTICS_ENDPOINT, body)
  } else {
    // Fallback to fetch
    fetch(ANALYTICS_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
    }).catch((error) => {
      if (ENABLE_CONSOLE_LOGGING) {
        console.warn('Analytics error:', error)
      }
    })
  }

  // Report to Vercel Analytics (if available)
  if (typeof window !== 'undefined' && 'va' in window) {
    ; (window as any).va('event', {
      name: `Web Vitals: ${metric.name}`,
      data: payload,
    })
  }
}

// ============================================================================
// WEB VITALS REPORTER
// ============================================================================

export function reportWebVitals(metric: Metric) {
  sendToAnalytics(metric)
}

// ============================================================================
// PERFORMANCE OBSERVER UTILITIES
// ============================================================================

export function observePerformance() {
  if (typeof window === 'undefined') return

  // Observe Long Tasks (blocking main thread > 50ms)
  if ('PerformanceObserver' in window) {
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (ENABLE_CONSOLE_LOGGING) {
            console.warn('⏱️ Long Task detected:', {
              duration: `${Math.round(entry.duration)}ms`,
              startTime: `${Math.round(entry.startTime)}ms`,
            })
          }
        }
      })
      longTaskObserver.observe({ entryTypes: ['longtask'] })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_e) {
      // longtask not supported
    }

    // Observe Resource Loading
    try {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming

          // Flag slow resources (>1s)
          if (resourceEntry.duration > 1000 && ENABLE_CONSOLE_LOGGING) {
            console.warn('🐌 Slow resource:', {
              name: resourceEntry.name,
              duration: `${Math.round(resourceEntry.duration)}ms`,
              size: resourceEntry.transferSize,
            })
          }
        }
      })
      resourceObserver.observe({ entryTypes: ['resource'] })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_e) {
      // resource timing not supported
    }
  }
}

// ============================================================================
// INITIALIZE MONITORING
// ============================================================================

export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return

  // Start performance observation
  observePerformance()

  // Log initial page load metrics
  if (ENABLE_CONSOLE_LOGGING && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

        if (perfData) {
          console.log('📊 Page Load Metrics:', {
            DNS: `${Math.round(perfData.domainLookupEnd - perfData.domainLookupStart)}ms`,
            TCP: `${Math.round(perfData.connectEnd - perfData.connectStart)}ms`,
            TTFB: `${Math.round(perfData.responseStart - perfData.requestStart)}ms`,
            Download: `${Math.round(perfData.responseEnd - perfData.responseStart)}ms`,
            DOM: `${Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)}ms`,
            Load: `${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`,
          })
        }
      }, 0)
    })
  }
}
