"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type TextShimmerProps = {
  children: string
  className?: string
  duration?: number
  spread?: number
  as?: React.ElementType
}

/**
 * Text Shimmer Component
 * Creates a beautiful shimmer animation across text
 */
export function TextShimmer({
  children,
  className,
  duration = 2,
  spread = 2,
  as: Component = "p",
}: TextShimmerProps) {
  return (
    <Component
      className={cn(
        "relative inline-block bg-gradient-to-r from-foreground via-foreground/50 to-foreground bg-clip-text text-transparent",
        className
      )}
      style={
        {
          "--shimmer-duration": `${duration}s`,
          "--shimmer-spread": spread,
        } as React.CSSProperties
      }
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-clip-text"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.span>
      {children}
    </Component>
  )
}

