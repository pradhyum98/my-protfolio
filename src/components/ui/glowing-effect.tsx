"use client"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

type GlowingEffectProps = {
  spread?: number
  glow?: boolean
  disabled?: boolean
  proximity?: number
  inactiveZone?: number
  className?: string
}

export const GlowingEffect = ({
  spread = 20,
  glow = true,
  disabled = false,
  className,
}: GlowingEffectProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parent = containerRef.current?.parentElement
    if (!parent || disabled) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
    }

    parent.addEventListener("mousemove", handleMouseMove)
    parent.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove)
      parent.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [disabled])

  if (disabled || !glow) return null

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0 rounded-2xl md:rounded-3xl", className)}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute h-full w-full rounded-2xl transition-opacity duration-300 md:rounded-3xl",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `radial-gradient(${spread * 8}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 70, 255, 0.15), rgba(0, 70, 255, 0.03) 50%, transparent 100%)`,
        }}
      />
    </div>
  )
}
