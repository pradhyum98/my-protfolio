"use client"

import * as React from "react"
import { Terminal as TerminalIcon, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useTerminal } from "./terminal-provider"
import { cn } from "@/lib/utils"

// ============================================================================
// TERMINAL BENTO CARD
// For use in About page Bento grid or any card layout
// ============================================================================

export type TerminalBentoCardProps = {
  className?: string
  variant?: "default" | "compact" | "featured"
}

export const TerminalBentoCard: React.FC<TerminalBentoCardProps> = ({
  className,
  variant = "default",
}) => {
  const { open } = useTerminal()
  const [isHovered, setIsHovered] = React.useState(false)

  const commandExamples = [
    { cmd: "projects", desc: "View case studies" },
    { cmd: "skills", desc: "See tech stack" },
    { cmd: "contact", desc: "Get in touch" },
  ]

  if (variant === "compact") {
    return (
      <motion.button
        onClick={open}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={cn(
          "group relative overflow-hidden rounded-2xl",
          "bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent",
          "border border-emerald-500/20 hover:border-emerald-500/40",
          "p-6 text-left transition-all duration-300",
          "hover:shadow-lg hover:shadow-emerald-500/10",
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <TerminalIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-lg font-semibold">Terminal</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Press <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-mono">~</kbd> or click here
            </p>
          </div>
          <Sparkles className="h-5 w-5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    )
  }

  if (variant === "featured") {
    return (
      <motion.button
        onClick={open}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={cn(
          "group relative overflow-hidden rounded-2xl",
          "bg-gradient-to-br from-emerald-950/50 via-zinc-900/50 to-zinc-950/50",
          "border border-emerald-500/30 hover:border-emerald-500/50",
          "p-8 text-left transition-all duration-300",
          "hover:shadow-xl hover:shadow-emerald-500/20",
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(16, 185, 129, 0.1) 2px,
              rgba(16, 185, 129, 0.1) 4px
            )`,
          }} />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600/20 border border-emerald-500/30">
              <TerminalIcon className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Interactive Terminal</h3>
              <p className="text-sm text-emerald-400/70">Try it out!</p>
            </div>
          </div>

          <p className="text-sm text-zinc-400 mb-4">
            Navigate my portfolio with terminal commands. Power-user approved.
          </p>

          <div className="space-y-2 mb-4">
            {commandExamples.map((example, index) => (
              <motion.div
                key={example.cmd}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-sm"
              >
                <span className="font-mono text-emerald-400">$</span>
                <kbd className="px-2 py-1 bg-zinc-800/50 rounded text-xs font-mono text-emerald-300 border border-emerald-500/20">
                  {example.cmd}
                </kbd>
                <span className="text-zinc-500">— {example.desc}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>Press</span>
            <kbd className="px-2 py-1 bg-zinc-800 rounded font-mono">~</kbd>
            <span>or click card</span>
          </div>
        </div>

        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"
          animate={{
            x: isHovered ? ["0%", "200%"] : "0%",
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
          }}
        />
      </motion.button>
    )
  }

  // Default variant
  return (
    <motion.button
      onClick={open}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-card border border-border",
        "p-6 text-left transition-all duration-300",
        "hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/5",
        className
      )}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600/10 border border-emerald-500/20">
            <TerminalIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Terminal</h3>
            <p className="text-xs text-muted-foreground">Command palette</p>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-3">
        Try commands like <code className="px-1 py-0.5 bg-muted rounded text-xs">skills</code>,{" "}
        <code className="px-1 py-0.5 bg-muted rounded text-xs">projects</code>, or{" "}
        <code className="px-1 py-0.5 bg-muted rounded text-xs">contact</code>
      </p>

      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <kbd className="px-1.5 py-0.5 bg-muted rounded font-mono">~</kbd>
        <span>to open from anywhere</span>
      </div>

      {/* Hover indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
