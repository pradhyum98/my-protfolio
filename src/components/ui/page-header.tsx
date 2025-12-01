'use client'

import { motion, type Variants } from "framer-motion"
import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// ============================================================================
// TYPES
// ============================================================================

type PageHeaderProps = {
  /** Optional overline text (e.g., "Who I Am", "Professional Journey") */
  overline?: string
  /** Optional icon to display in the overline badge */
  overlineIcon?: ReactNode
  /** Whether to show animated ping effect on overline badge */
  animated?: boolean
  /** Main page title */
  title: string
  /** Color for the dot at the end of the title (default: red-500) */
  dotColor?: string
  /** Page description/subtitle */
  description: string
  /** Optional additional content below description (e.g., badges, metadata) */
  children?: ReactNode
  /** Optional className for the container */
  className?: string
  /** Delay for BlurFade animation */
  delay?: number
}

// ============================================================================
// COMPONENT
// ============================================================================

export function PageHeader({
  overline,
  overlineIcon,
  animated = false,
  title,
  dotColor = "text-red-500",
  description,
  children,
  className,
  delay = 0.1,
}: PageHeaderProps) {
  return (
    <BlurFade delay={delay} inView>
      <section className={cn("py-16 md:py-24 lg:py-32", className)}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Overline Badge */}
          {overline && (
            <motion.div variants={fadeInUp} custom={0}>
              <div className="inline-flex items-center gap-3 rounded-full border border-border/50 bg-card/50 px-4 py-2 backdrop-blur-sm">
                {animated ? (
                  <div className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                  </div>
                ) : overlineIcon ? (
                  overlineIcon
                ) : null}
                <span className="text-sm font-medium uppercase tracking-wider text-foreground/80">
                  {overline}
                </span>
              </div>
            </motion.div>
          )}

          {/* Main Heading & Description */}
          <motion.div className="space-y-4">
            <motion.h1
              variants={fadeInUp}
              custom={1}
              className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="block bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                {title}
                <span className={cn(dotColor)}>.</span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              custom={1.5}
              className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Optional Additional Content */}
          {children && (
            <motion.div variants={fadeInUp} custom={2}>
              {children}
            </motion.div>
          )}
        </motion.div>
      </section>
    </BlurFade>
  )
}

