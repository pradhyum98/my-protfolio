"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type GlassCardProps = {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

/**
 * Glass Card Component
 * Creates a beautiful glassmorphism card effect
 */
export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg",
        hoverEffect && "transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-foreground/5",
        className
      )}
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

