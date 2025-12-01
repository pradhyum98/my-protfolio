"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// ============================================================================
// TYPES
// ============================================================================

export type TerminalLine = {
  id: string
  type: "command" | "output" | "error" | "system"
  content: React.ReactNode
  timestamp?: Date
}

export type TerminalProps = {
  className?: string
  prompt?: string
  welcomeMessage?: React.ReactNode
  onCommand?: (command: string) => void | Promise<void>
  autoFocus?: boolean
  maxLines?: number
  reducedMotion?: boolean
}

// ============================================================================
// TERMINAL COMPONENT
// ============================================================================

export const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
  (
    {
      className,
      prompt = "$ ",
      welcomeMessage,
      onCommand,
      autoFocus = false,
      maxLines = 1000,
      reducedMotion = false,
    },
    ref
  ) => {
    const [lines, setLines] = React.useState<TerminalLine[]>([])
    const [input, setInput] = React.useState("")
    const [history, setHistory] = React.useState<string[]>([])
    const [historyIndex, setHistoryIndex] = React.useState(-1)
    const [isProcessing, setIsProcessing] = React.useState(false)

  const inputRef = React.useRef<HTMLInputElement>(null)
  const outputRef = React.useRef<HTMLDivElement>(null)
  const terminalRef = React.useRef<HTMLDivElement>(null)
  const welcomeAddedRef = React.useRef(false)

  // Combine refs
  React.useImperativeHandle(ref, () => terminalRef.current as HTMLDivElement)

  // Welcome message (only add once)
  React.useEffect(() => {
    if (welcomeMessage && !welcomeAddedRef.current) {
      welcomeAddedRef.current = true
      addLine({
        id: `welcome-${Date.now()}`,
        type: "system",
        content: welcomeMessage,
        timestamp: new Date(),
      })
    }
  }, [welcomeMessage]) // eslint-disable-line

    // Auto-scroll to bottom
    React.useEffect(() => {
      if (outputRef.current) {
        const behavior = reducedMotion ? "auto" : "smooth"
        outputRef.current.scrollTo({
          top: outputRef.current.scrollHeight,
          behavior,
        })
      }
    }, [lines, reducedMotion])

    // Auto-focus input
    React.useEffect(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus()
      }
    }, [autoFocus])

    // Focus input when clicking terminal
    const handleTerminalClick = () => {
      inputRef.current?.focus()
    }

    // Add line to output
    const addLine = (line: Omit<TerminalLine, "id"> & { id?: string }) => {
      const newLine: TerminalLine = {
        id: line.id || `line-${Date.now()}-${Math.random()}`,
        type: line.type,
        content: line.content,
        timestamp: line.timestamp || new Date(),
      }

      setLines((prev) => {
        const updated = [...prev, newLine]
        // Trim to maxLines
        if (updated.length > maxLines) {
          return updated.slice(updated.length - maxLines)
        }
        return updated
      })
    }

    // Public API via ref
    React.useEffect(() => {
      if (terminalRef.current) {
        // Attach public methods
        ;(terminalRef.current as any).printLine = (content: React.ReactNode, type: TerminalLine["type"] = "output") => {
          addLine({ type, content })
        }
        ;(terminalRef.current as any).printError = (content: React.ReactNode) => {
          addLine({ type: "error", content })
        }
        ;(terminalRef.current as any).clear = () => {
          setLines([])
        }
      }
    })

    // Handle command submission
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (!input.trim() || isProcessing) return

      const command = input.trim()

      // Add command to output
      addLine({
        type: "command",
        content: (
          <div className="flex items-start gap-2">
            <span className="text-emerald-500 dark:text-emerald-400 font-mono text-sm select-none">
              {prompt}
            </span>
            <span className="font-mono text-sm">{command}</span>
          </div>
        ),
      })

      // Add to history
      setHistory((prev) => [...prev, command])
      setHistoryIndex(-1)

      // Clear input
      setInput("")

      // Execute command
      if (onCommand) {
        setIsProcessing(true)
        try {
          await onCommand(command)
        } catch (error) {
          addLine({
            type: "error",
            content: error instanceof Error ? error.message : "Command failed",
          })
        } finally {
          setIsProcessing(false)
        }
      }
    }

    // Handle history navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowUp") {
        e.preventDefault()
        if (history.length === 0) return

        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(history[newIndex])
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        if (historyIndex === -1) return

        const newIndex = historyIndex + 1
        if (newIndex >= history.length) {
          setHistoryIndex(-1)
          setInput("")
        } else {
          setHistoryIndex(newIndex)
          setInput(history[newIndex])
        }
      } else if (e.key === "Tab") {
        e.preventDefault()
        // TODO: Autocomplete implementation
      }
    }

    return (
      <div
        ref={terminalRef}
        className={cn(
          "relative flex h-full w-full flex-col overflow-hidden rounded-lg",
          "bg-zinc-950 dark:bg-zinc-950",
          "border border-zinc-800 dark:border-zinc-800",
          "font-mono text-sm text-zinc-100",
          className
        )}
        onClick={handleTerminalClick}
      >
        {/* Output area */}
        <div
          ref={outputRef}
          className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-1"
        >
          {lines.map((line) => (
            <div
              key={line.id}
              className={cn(
                "whitespace-pre-wrap break-words",
                line.type === "command" && "",
                line.type === "output" && "text-zinc-300 dark:text-zinc-300",
                line.type === "error" && "text-red-400 dark:text-red-400",
                line.type === "system" && "text-zinc-500 dark:text-zinc-500 italic"
              )}
            >
              {line.content}
            </div>
          ))}
        </div>

        {/* Input area */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-zinc-800 p-4">
          <label
            htmlFor="terminal-input"
            className="text-emerald-500 dark:text-emerald-400 font-mono text-sm select-none"
          >
            {prompt}
          </label>
          <input
            ref={inputRef}
            id="terminal-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isProcessing}
            className={cn(
              "flex-1 bg-transparent outline-none font-mono text-sm",
              "text-zinc-100 placeholder:text-zinc-600",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            placeholder={isProcessing ? "Processing..." : "Type a command..."}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          {isProcessing && (
            <div className="flex items-center gap-1">
              <span className="inline-block h-1 w-1 animate-pulse rounded-full bg-emerald-500" />
              <span
                className="inline-block h-1 w-1 animate-pulse rounded-full bg-emerald-500"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="inline-block h-1 w-1 animate-pulse rounded-full bg-emerald-500"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          )}
        </form>
      </div>
    )
  }
)

Terminal.displayName = "Terminal"

// ============================================================================
// HELPER HOOK: useTerminalRef
// ============================================================================

export type TerminalHandle = {
  printLine: (content: React.ReactNode, type?: TerminalLine["type"]) => void
  printError: (content: React.ReactNode) => void
  clear: () => void
}

export const useTerminalRef = () => {
  return React.useRef<TerminalHandle>(null)
}
