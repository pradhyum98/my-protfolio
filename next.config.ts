import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';

// ============================================================================
// BUNDLE ANALYZER CONFIGURATION
// ============================================================================
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
})

// ============================================================================
// NEXT.JS CONFIGURATION
// ============================================================================
const nextConfig: NextConfig = {
  // ===== IMAGE OPTIMIZATION =====
  images: {
    unoptimized: true, // Required for static export (GitHub Pages)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: '*.microlink.io',
      },
    ],
    formats: ['image/avif', 'image/webp'], // Modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Optimized breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Common icon/thumb sizes
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache for images
  },

  // ===== COMPRESSION =====
  compress: true, // Enable gzip compression

  // ===== HEADERS FOR CACHING & SECURITY =====
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year cache for static assets
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year cache for Next.js static files
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },

  // ===== COMPILER OPTIMIZATIONS =====
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false, // Remove console.log in production (keep errors/warnings)
  },

  // ===== EXPERIMENTAL FEATURES =====
  // Note: Using Turbopack for faster builds (--turbopack flag in package.json)
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      '@radix-ui/react-icons',
      '@tabler/icons-react',
      'react-syntax-highlighter',
    ], // Tree-shake and optimize heavy packages
  },

  // ===== ESLINT =====
  eslint: {
    // Temporarily ignore linting during builds
    // Re-enable after fixing hardcoded string warnings
    ignoreDuringBuilds: true,
  },

  // ===== STATIC PAGE GENERATION =====
  output: 'export', // Required for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/my-protfolio' : undefined,
};

export default withBundleAnalyzer(nextConfig);
