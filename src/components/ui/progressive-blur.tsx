"use client"

import { cn } from "@/lib/utils"

type ProgressiveBlurProps = {
  className?: string
  intensity?: number
  direction?: "top" | "bottom" | "left" | "right" | "radial"
  from?: string
  to?: string
}

/**
 * Progressive Blur Component
 * Creates a subtle backdrop blur effect with gradient falloff
 * Perfect for adding depth and sophistication to sections
 */
export function ProgressiveBlur({
  className,
  intensity = 0.3,
  direction = "radial",
  from = "transparent",
  to = "rgba(0,0,0,0.02)",
}: ProgressiveBlurProps) {
  const blurAmount = Math.max(0, Math.min(intensity, 1)) * 24 // 0-24px

  const gradientDirections = {
    top: "to bottom",
    bottom: "to top",
    left: "to right",
    right: "to left",
    radial: "circle at 50% 30%",
  }

  const gradientType = direction === "radial" ? "radial-gradient" : "linear-gradient"
  const gradientDirection = gradientDirections[direction]

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 will-change-[backdrop-filter]",
        className
      )}
      style={{
        background: `${gradientType}(${gradientDirection}, ${from}, ${to})`,
        backdropFilter: `blur(${blurAmount}px)`,
        WebkitBackdropFilter: `blur(${blurAmount}px)`,
        maskImage: `${gradientType}(${gradientDirection}, black 0%, transparent 100%)`,
        WebkitMaskImage: `${gradientType}(${gradientDirection}, black 0%, transparent 100%)`,
      }}
    />
  )
}
