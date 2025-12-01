"use client"

import * as React from "react"
import { TerminalOverlay } from "./terminal-overlay"

// ============================================================================
// CONTEXT
// ============================================================================

type TerminalContextValue = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const TerminalContext = React.createContext<TerminalContextValue | null>(null)

// ============================================================================
// PROVIDER
// ============================================================================

export type TerminalProviderProps = {
  children: React.ReactNode
  keyboardShortcut?: string // default: "`" (backtick/tilde)
}

export const TerminalProvider: React.FC<TerminalProviderProps> = ({
  children,
  keyboardShortcut = "`",
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const open = React.useCallback(() => setIsOpen(true), [])
  const close = React.useCallback(() => setIsOpen(false), [])
  const toggle = React.useCallback(() => setIsOpen((prev) => !prev), [])

  // Global keyboard shortcut
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for backtick/tilde key
      if (e.key === keyboardShortcut && !e.metaKey && !e.ctrlKey && !e.altKey) {
        // Don't trigger if user is typing in an input/textarea
        const target = e.target as HTMLElement
        if (
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable
        ) {
          return
        }

        e.preventDefault()
        toggle()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [keyboardShortcut, toggle])

  const value = React.useMemo(
    () => ({ isOpen, open, close, toggle }),
    [isOpen, open, close, toggle]
  )

  return (
    <TerminalContext.Provider value={value}>
      {children}
      <TerminalOverlay open={isOpen} onClose={close} />
    </TerminalContext.Provider>
  )
}

// ============================================================================
// HOOK
// ============================================================================

export const useTerminal = () => {
  const context = React.useContext(TerminalContext)
  if (!context) {
    throw new Error("useTerminal must be used within a TerminalProvider")
  }
  return context
}
