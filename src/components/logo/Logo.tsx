"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type LogoVariant = "primary" | "filled" | "simple" | "with-text" | "horizontal" | "gradient" | "glow" | "orbit" | "offset"
export type LogoSize = "xs" | "sm" | "md" | "lg" | "xl"

interface LogoProps {
  variant?: LogoVariant
  size?: LogoSize
  className?: string
  showText?: boolean
  animated?: boolean
}

const sizeMap: Record<LogoSize, { width: number; height: number }> = {
  xs: { width: 24, height: 24 },
  sm: { width: 32, height: 32 },
  md: { width: 48, height: 48 },
  lg: { width: 64, height: 64 },
  xl: { width: 96, height: 96 },
}

const horizontalSizeMap: Record<LogoSize, { width: number; height: number }> = {
  xs: { width: 80, height: 24 },
  sm: { width: 120, height: 32 },
  md: { width: 160, height: 48 },
  lg: { width: 200, height: 64 },
  xl: { width: 280, height: 96 },
}

export function Logo({
  variant = "primary",
  size = "md",
  className,
  showText = false,
  animated = false,
}: LogoProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const dimensions = variant === "horizontal" ? horizontalSizeMap[size] : sizeMap[size]

  const renderLogoContent = () => {
    const baseTransform = variant === "horizontal" ? "translate(24, 24)" : "translate(24, 24)"

    switch (variant) {
      case "glow":
        return (
          <>
            <defs>
              <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="1" />
                <stop offset="25%" stopColor="#ef4444" stopOpacity="1" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                <stop offset="75%" stopColor="#6366f1" stopOpacity="1" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="1" />
              </linearGradient>

              <radialGradient id="pulseGlow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="20%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.7" />
                <stop offset="80%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.2" />
              </radialGradient>

              <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="softGlow">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>

            <g transform={baseTransform}>
              {/* Background glow halo */}
              <circle
                cx="0"
                cy="0"
                r="22"
                fill="none"
                stroke="url(#glowGradient)"
                strokeWidth="2"
                opacity="0.2"
                filter="url(#softGlow)"
              />

              {/* Secondary glow ring */}
              <circle
                cx="0"
                cy="0"
                r="20"
                fill="none"
                stroke="url(#glowGradient)"
                strokeWidth="1"
                opacity="0.4"
                filter="url(#strongGlow)"
              />

              {/* Main circle */}
              <circle
                cx="0"
                cy="0"
                r="20"
                fill="none"
                stroke="url(#glowGradient)"
                strokeWidth="1.5"
                className={animated ? "animate-pulse" : ""}
              />

              {/* Glowing dot layers */}
              <circle
                cx="0"
                cy="0"
                r="5"
                fill="url(#pulseGlow)"
                opacity="0.3"
                filter="url(#softGlow)"
                className={animated ? "animate-pulse" : ""}
              />
              <circle
                cx="0"
                cy="0"
                r="3.5"
                fill="url(#pulseGlow)"
                opacity="0.6"
              />
              <circle
                cx="0"
                cy="0"
                r="2.5"
                fill="url(#glowGradient)"
              />

              {/* Inner highlight */}
              <circle
                cx="-0.5"
                cy="-0.5"
                r="1"
                fill="white"
                opacity="0.8"
              />
            </g>
          </>
        )

      case "simple":
        return (
          <>
            <defs>
              <linearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>
            </defs>
            <g transform={baseTransform}>
              <circle
                cx="0"
                cy="0"
                r="20"
                fill="none"
                stroke="url(#simpleGradient)"
                strokeWidth="2"
              />
              <circle
                cx="0"
                cy="0"
                r="3"
                fill="url(#simpleGradient)"
                className={animated ? "animate-pulse" : ""}
              />
            </g>
          </>
        )

      case "with-text":
        return (
          <>
            <defs>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>
            </defs>
            <g transform={baseTransform}>
              <circle
                cx="0"
                cy="0"
                r="20"
                fill="none"
                stroke="url(#textGradient)"
                strokeWidth="1.5"
              />
              <text
                x="0"
                y="2"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="14"
                fontWeight="600"
                fill="url(#textGradient)"
                textAnchor="middle"
              >
                PU
              </text>
            </g>
          </>
        )

      case "horizontal":
        return (
          <>
            <defs>
              <linearGradient id="horizontalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>
            </defs>
            <g transform="translate(24, 24)">
              <circle
                cx="0"
                cy="0"
                r="18"
                fill="none"
                stroke="url(#horizontalGradient)"
                strokeWidth="1.5"
              />
              <circle
                cx="0"
                cy="0"
                r="2.5"
                fill="url(#horizontalGradient)"
              />
            </g>
            {showText && (
              <text
                x="56"
                y="27"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="20"
                fontWeight="600"
                fill="url(#horizontalGradient)"
              >
                Pradhyum Upadhyay
              </text>
            )}
          </>
        )

      case "gradient":
        return (
          <>
            <defs>
              <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>

              <filter id="subtleGlow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g transform={baseTransform}>
              {/* Glow layer */}
              <circle
                cx="0"
                cy="0"
                r="20"
                fill="none"
                stroke="url(#mainGradient)"
                strokeWidth="2"
                opacity="0.3"
                filter="url(#subtleGlow)"
              />

              <circle
                cx="0"
                cy="0"
                r="20"
                fill="none"
                stroke="url(#mainGradient)"
                strokeWidth="1.5"
              />

              <circle
                cx="0"
                cy="0"
                r="3.5"
                fill="url(#mainGradient)"
                opacity="0.4"
                filter="url(#subtleGlow)"
              />
              <circle
                cx="0"
                cy="0"
                r="2.5"
                fill="url(#mainGradient)"
                className={animated ? "animate-pulse" : ""}
              />
            </g>
          </>
        )

      case "orbit":
        return (
          <>
            <defs>
              <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>
            </defs>
            <g transform={baseTransform}>
              <circle
                cx="0"
                cy="0"
                r="20"
                fill="none"
                stroke="url(#orbitGradient)"
                strokeWidth="1.5"
              />
              <circle
                cx="0"
                cy="0"
                r="2"
                fill="url(#orbitGradient)"
              />
              {/* Orbital dots */}
              {[0, 90, 180, 270].map((angle, i) => {
                const radian = (angle * Math.PI) / 180
                const x = Math.cos(radian) * 12
                const y = Math.sin(radian) * 12
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="1.5"
                    fill="url(#orbitGradient)"
                    opacity={0.4 + (i * 0.15)}
                    className={animated ? "animate-pulse" : ""}
                    style={animated ? { animationDelay: `${i * 0.2}s` } : {}}
                  />
                )
              })}
            </g>
          </>
        )

      case "offset":
        return (
          <>
            <defs>
              <linearGradient id="offsetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>
            </defs>
            <g transform={baseTransform}>
              <circle
                cx="0"
                cy="0"
                r="20"
                fill="none"
                stroke="url(#offsetGradient)"
                strokeWidth="1.5"
              />
              <circle
                cx="14.14"
                cy="-14.14"
                r="3"
                fill="url(#offsetGradient)"
                className={animated ? "animate-pulse" : ""}
              />
            </g>
          </>
        )

      case "filled":
        return (
          <>
            <defs>
              <radialGradient id="filledOuterGlow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#000000" stopOpacity="1" />
                <stop offset="50%" stopColor="#dc2626" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#7c3aed" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </radialGradient>

              <radialGradient id="filledInnerGlow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#ef4444" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#a855f7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </radialGradient>

              <linearGradient id="filledEdgeHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff0000" stopOpacity="1" />
                <stop offset="33%" stopColor="#ff0066" stopOpacity="1" />
                <stop offset="66%" stopColor="#6600ff" stopOpacity="1" />
                <stop offset="100%" stopColor="#0066ff" stopOpacity="1" />
              </linearGradient>

              <filter id="filledBlurGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
              </filter>

              <filter id="filledCombinedGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ff0000" floodOpacity="0.6" />
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0066ff" floodOpacity="0.6" />
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g transform={baseTransform}>
              {/* Outer glow layers */}
              <circle
                cx="0"
                cy="0"
                r="25"
                fill="url(#filledOuterGlow)"
                opacity="0.8"
                filter="url(#filledBlurGlow)"
                className={animated ? "animate-pulse" : ""}
              />

              {/* Glowing border */}
              <circle
                cx="0"
                cy="0"
                r="20"
                fill="none"
                stroke="url(#filledEdgeHighlight)"
                strokeWidth="2"
                opacity="0.7"
                filter="url(#filledCombinedGlow)"
              />

              {/* Main black filled circle */}
              <circle
                cx="0"
                cy="0"
                r="20"
                fill="#000000"
              />

              {/* Inner colored ring */}
              <circle
                cx="0"
                cy="0"
                r="17"
                fill="none"
                stroke="url(#filledEdgeHighlight)"
                strokeWidth="0.5"
                opacity="0.5"
              />

              {/* Center glow dot */}
              <circle
                cx="0"
                cy="0"
                r="5"
                fill="url(#filledInnerGlow)"
                opacity="0.7"
                className={animated ? "animate-pulse" : ""}
              />

              {/* Center core */}
              <circle
                cx="0"
                cy="0"
                r="2.5"
                fill="#ffffff"
              />
            </g>
          </>
        )

      case "primary":
      default:
        return (
          <>
            <defs>
              <radialGradient id="primaryGlowGradient" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#000000" stopOpacity="1" />
                <stop offset="40%" stopColor="#000000" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#dc2626" stopOpacity="0.8" />
                <stop offset="80%" stopColor="#7c3aed" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.3" />
              </radialGradient>

              <linearGradient id="primaryEdgeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>

              <filter id="primaryStrongGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="primaryShadow">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#ef4444" floodOpacity="0.5" />
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#3b82f6" floodOpacity="0.5" />
              </filter>
            </defs>
            <g transform={baseTransform}>
              {/* Background glow halo */}
              <circle
                cx="0"
                cy="0"
                r="22"
                fill="none"
                stroke="url(#primaryEdgeGlow)"
                strokeWidth="4"
                opacity="0.3"
                filter="url(#primaryStrongGlow)"
              />

              {/* Main filled circle */}
              <circle
                cx="0"
                cy="0"
                r="20"
                fill="#000000"
                filter="url(#primaryShadow)"
              />

              {/* Inner glowing ring */}
              <circle
                cx="0"
                cy="0"
                r="18"
                fill="none"
                stroke="url(#primaryEdgeGlow)"
                strokeWidth="1"
                opacity="0.6"
              />

              {/* Center white dot for contrast */}
              <circle
                cx="0"
                cy="0"
                r="3"
                fill="#ffffff"
                opacity="0.9"
                className={animated ? "animate-pulse" : ""}
              />
            </g>
          </>
        )
    }
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div
        className={cn("animate-pulse bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-full", className)}
        style={{ width: dimensions.width, height: dimensions.height }}
      />
    )
  }

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox={variant === "horizontal" ? "0 0 160 48" : "0 0 48 48"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-all duration-300", className)}
      aria-label="SK Logo"
      role="img"
    >
      {renderLogoContent()}
    </svg>
  )
}

// Export a static version for SSR/SSG scenarios
export function StaticLogo({
  variant = "primary",
  size = "md",
  className,
}: Omit<LogoProps, "animated">) {
  const dimensions = variant === "horizontal" ? horizontalSizeMap[size] : sizeMap[size]

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox={variant === "horizontal" ? "0 0 160 48" : "0 0 48 48"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-colors duration-300", className)}
      aria-label="SK Logo"
      role="img"
    >
      <defs>
        <linearGradient id="staticGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g transform="translate(24, 24)">
        <circle
          cx="0"
          cy="0"
          r="20"
          fill="none"
          stroke="url(#staticGradient)"
          strokeWidth="1.5"
        />
        <circle
          cx="0"
          cy="0"
          r="2.5"
          fill="url(#staticGradient)"
        />
      </g>
    </svg>
  )
}
