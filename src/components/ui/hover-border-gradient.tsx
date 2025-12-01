"use client"

import { m } from "framer-motion"
import { cn } from "@/lib/utils"

type HoverBorderGradientProps = {
  children: React.ReactNode
  containerClassName?: string
  className?: string
  as?: React.ElementType
  duration?: number
}

/**
 * Hover Border Gradient Component
 * Creates a beautiful gradient border animation on hover
 * Note: This component uses `m` from framer-motion and must be used within a LazyMotion wrapper
 */
export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Component = "div",
  duration = 1,
}: HoverBorderGradientProps) {
  return (
    <Component className={cn("group relative", containerClassName)}>
      <m.div
        className={cn(
          "absolute -inset-[2px] rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100",
          className
        )}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: duration * 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
      <div className="relative z-10 rounded-lg bg-background">{children}</div>
    </Component>
  )
}
