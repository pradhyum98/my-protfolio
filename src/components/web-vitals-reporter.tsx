'use client'

// ============================================================================
// WEB VITALS REPORTER COMPONENT
// ============================================================================
// Client-side component for tracking Core Web Vitals

import { useEffect } from 'react'
import { useReportWebVitals } from 'next/web-vitals'
import { reportWebVitals, initPerformanceMonitoring } from '@/lib/web-vitals'

export function WebVitalsReporter() {
  // Report web vitals using Next.js hook
  useReportWebVitals((metric) => {
    reportWebVitals(metric)
  })

  // Initialize performance monitoring on mount
  useEffect(() => {
    initPerformanceMonitoring()
  }, [])

  return null // This component doesn't render anything
}

