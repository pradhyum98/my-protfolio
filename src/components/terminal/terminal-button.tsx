"use client"

import * as React from "react"
import { Terminal as TerminalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTerminal } from "./terminal-provider"
import { cn } from "@/lib/utils"

// ============================================================================
// TERMINAL BUTTON (FLOATING)
// ============================================================================

export type TerminalButtonProps = {
  variant?: "fixed" | "inline"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  showHint?: boolean
}

export const TerminalButton: React.FC<TerminalButtonProps> = ({
  variant = "fixed",
  size = "default",
  className,
  showHint = true,
}) => {
  const { open } = useTerminal()
  const [isVisible, setIsVisible] = React.useState(false)

  // Delay showing button for better UX (don't distract on first load)
  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (variant === "fixed") {
    return (
      <div
        className={cn(
          "fixed bottom-6 right-6 z-40 transition-all duration-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
          className
        )}
      >
        <Button
          onClick={open}
          size={size}
          className={cn(
            "group relative shadow-lg",
            "bg-gradient-to-br from-emerald-600 to-emerald-700",
            "hover:from-emerald-500 hover:to-emerald-600",
            "dark:from-emerald-700 dark:to-emerald-800",
            "dark:hover:from-emerald-600 dark:hover:to-emerald-700",
            "border border-emerald-500/20"
          )}
          aria-label="Open terminal"
        >
          <TerminalIcon className="h-5 w-5 mr-2" />
          Try Terminal
          {showHint && (
            <span className="ml-2 text-xs opacity-70 font-mono">~</span>
          )}
        </Button>

        {/* Pulsing indicator */}
        <span
          className="absolute -top-1 -right-1 flex h-3 w-3"
          aria-hidden="true"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
      </div>
    )
  }

  // Inline variant
  return (
    <Button
      onClick={open}
      size={size}
      variant="outline"
      className={cn(
        "group",
        "bg-gradient-to-br from-emerald-600/10 to-emerald-700/10",
        "hover:from-emerald-600/20 hover:to-emerald-700/20",
        "border-emerald-500/30 hover:border-emerald-500/50",
        className
      )}
      aria-label="Open terminal"
    >
      <TerminalIcon className="h-4 w-4 mr-2 text-emerald-600 dark:text-emerald-400" />
      <span>Open Terminal</span>
      {showHint && (
        <span className="ml-2 text-xs opacity-50 font-mono">~</span>
      )}
    </Button>
  )
}

// ============================================================================
// TERMINAL HINT (TEXT ONLY)
// ============================================================================

export const TerminalHint: React.FC<{ className?: string }> = ({ className }) => {
  const { open } = useTerminal()

  return (
    <button
      onClick={open}
      className={cn(
        "group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
        className
      )}
    >
      <TerminalIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
      <span>
        Press <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-mono">~</kbd> to open terminal
      </span>
    </button>
  )
}
