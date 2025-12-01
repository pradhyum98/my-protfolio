// ============================================================================
// ANALYTICS API ENDPOINT
// ============================================================================
// Collects Web Vitals metrics and performance data

import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge' // Use edge runtime for faster response

// ============================================================================
// POST HANDLER
// ============================================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // In production, you would send this to your analytics service
    // Examples: Vercel Analytics, Google Analytics, Mixpanel, etc.

    // For now, just log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', body)
    }

    // TODO: Send to analytics service
    // await sendToAnalyticsService(body)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[Analytics Error]', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

// ============================================================================
// CORS & OPTIONS
// ============================================================================

export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
