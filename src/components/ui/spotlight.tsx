"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

type SpotlightProps = {
  className?: string
  fill?: string
  size?: number
}

/**
 * Spotlight Component
 * Creates a beautiful spotlight effect that follows the cursor
 */
export function Spotlight({ className, fill = "rgba(255,255,255,0.1)", size = 600 }: SpotlightProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rafRef = useRef<number | null>(null)
  const lastUpdateRef = useRef(0)

  // Reduce spring intensity for better performance
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 100 })
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 100 })

  // Throttle mouse updates with RAF for better performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now()

    // Throttle to ~30fps (33ms)
    if (now - lastUpdateRef.current < 33) return

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      lastUpdateRef.current = now
    })
  }, [mouseX, mouseY])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleMouseMove])

  return (
    <motion.div
      className={cn("pointer-events-none fixed inset-0 z-30", className)}
      style={{
        background: `radial-gradient(${size}px circle at var(--mouse-x) var(--mouse-y), ${fill}, transparent 80%)`,
        willChange: 'transform',
        transform: 'translateZ(0)', // Enable GPU acceleration
        // @ts-expect-error CSS custom properties
        "--mouse-x": smoothX,
        "--mouse-y": smoothY,
      }}
    />
  )
}
