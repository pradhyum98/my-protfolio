"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type LoaderProps = {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function LoaderFour({ className, size = "md" }: LoaderProps = {}) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-neutral-200 dark:border-neutral-800"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-4 border-transparent border-t-blue-500"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  )
}

// Alternative simpler loader
export function Loader({ className, size = "md" }: LoaderProps = {}) {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        className={cn(
          "rounded-full border-transparent border-t-primary",
          sizeClasses[size]
        )}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}
