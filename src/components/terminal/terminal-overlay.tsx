"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { Terminal, type TerminalHandle } from "@/components/ui/terminal"
import { cn } from "@/lib/utils"
import { copy } from "@/content/copy"
import { projects } from "@/content/projects"
import { SKILLS, SITE_CONFIG } from "@/lib/constants"

// ============================================================================
// TYPES
// ============================================================================

type CommandFn = (args: string[], terminal: TerminalHandle) => void | Promise<void>

type Command = {
  description: string
  usage?: string
  fn: CommandFn
}

type CommandRegistry = Record<string, Command>

// ============================================================================
// TERMINAL OVERLAY COMPONENT
// ============================================================================

export type TerminalOverlayProps = {
  open: boolean
  onClose: () => void
  reducedMotion?: boolean
}

export const TerminalOverlay: React.FC<TerminalOverlayProps> = ({
  open,
  onClose,
  reducedMotion = false,
}) => {
  const router = useRouter()
  const terminalRef = React.useRef<TerminalHandle>(null)
  const overlayRef = React.useRef<HTMLDivElement>(null)

  // Detect reduced motion
  const prefersReducedMotion = React.useMemo(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  const shouldReduceMotion = reducedMotion || prefersReducedMotion

  // Command registry
  const commands: CommandRegistry = React.useMemo(
    () => ({
      help: {
        description: "Show available commands",
        fn: (_, terminal) => {
          terminal.printLine(
            <div className="space-y-2">
              <div className="text-emerald-400 font-semibold mb-3">Available Commands:</div>
              <div className="grid gap-2">
                <div>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs">help</kbd>
                  <span className="ml-3 text-zinc-400">Show this help message</span>
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs">projects</kbd>
                  <span className="ml-3 text-zinc-400">List all case studies</span>
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs">open &lt;slug&gt;</kbd>
                  <span className="ml-3 text-zinc-400">Navigate to a project (e.g., open courses)</span>
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs">skills</kbd>
                  <span className="ml-3 text-zinc-400">Show grouped tech stack</span>
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs">contact</kbd>
                  <span className="ml-3 text-zinc-400">Show contact information</span>
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs">links</kbd>
                  <span className="ml-3 text-zinc-400">Show social links (LinkedIn, GitHub)</span>
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs">theme &lt;mode&gt;</kbd>
                  <span className="ml-3 text-zinc-400">Toggle theme (light/dark)</span>
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs">clear</kbd>
                  <span className="ml-3 text-zinc-400">Clear terminal output</span>
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs">tree</kbd>
                  <span className="ml-3 text-zinc-400">Show file tree structure</span>
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs">explorer</kbd>
                  <span className="ml-3 text-zinc-400">Open Projects Explorer</span>
                </div>
                <div>
                  <kbd className="px-2 py-1 bg-zinc-800 rounded text-xs">exit</kbd>
                  <span className="ml-3 text-zinc-400">Close terminal</span>
                </div>
              </div>
              <div className="mt-4 text-zinc-500 text-xs">
                Press <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">Esc</kbd> to close terminal
              </div>
            </div>
          )
        },
      },

      projects: {
        description: "List all case studies",
        fn: (_, terminal) => {
          const featuredProjects = projects.filter((p) => p.featured)
          terminal.printLine(
            <div className="space-y-3">
              <div className="text-emerald-400 font-semibold">Featured Projects:</div>
              <div className="space-y-2">
                {featuredProjects.map((project) => (
                  <div key={project.slug} className="border-l-2 border-zinc-700 pl-3">
                    <div className="font-medium text-zinc-100">{project.title}</div>
                    <div className="text-sm text-zinc-400 mt-1">{project.summary}</div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-zinc-500 text-sm mt-4">
                Use <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-xs">open &lt;slug&gt;</kbd> to navigate{" "}
                (e.g., <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-xs">open courses</kbd>)
              </div>
            </div>
          )
        },
      },

      open: {
        description: "Navigate to a project",
        usage: "open <slug>",
        fn: (args, terminal) => {
          const slug = args[0]
          if (!slug) {
            terminal.printError("Usage: open <slug>")
            return
          }

          // Map common slugs to project IDs
          const slugMap: Record<string, string> = {
            courses: "highlevel-courses",
            credentials: "highlevel-credentials",
            dmrv: "dmrv-platform",
            "carbon-shop": "carbon-shop",
            carbon: "carbon-shop",
          }

          const projectId = slugMap[slug.toLowerCase()] || slug.toLowerCase()
          const project = projects.find((p) => p.slug === projectId)

          if (!project) {
            terminal.printError(`Project "${slug}" not found. Try "projects" to see all available projects.`)
            return
          }

          terminal.printLine(
            <div className="text-emerald-400">
              Opening {project.title}...
            </div>
          )

          // Navigate to projects page (individual project pages don't exist yet)
          setTimeout(() => {
            onClose()
            router.push("/projects")
          }, 800)
        },
      },

      skills: {
        description: "Show grouped tech stack",
        fn: (_, terminal) => {
          terminal.printLine(
            <div className="space-y-3">
              <div className="text-emerald-400 font-semibold">Tech Stack:</div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <div className="font-medium text-zinc-100 mb-1.5">Frontend</div>
                  <div className="text-sm text-zinc-400">{SKILLS.frontend.join(", ")}</div>
                </div>
                <div>
                  <div className="font-medium text-zinc-100 mb-1.5">Backend</div>
                  <div className="text-sm text-zinc-400">{SKILLS.backend.join(", ")}</div>
                </div>
                <div>
                  <div className="font-medium text-zinc-100 mb-1.5">Cloud/Infra</div>
                  <div className="text-sm text-zinc-400">{SKILLS.cloud.join(", ")}</div>
                </div>
                <div>
                  <div className="font-medium text-zinc-100 mb-1.5">Other</div>
                  <div className="text-sm text-zinc-400">{SKILLS.other.join(", ")}</div>
                </div>
              </div>
            </div>
          )
        },
      },

      contact: {
        description: "Show contact information",
        fn: (_, terminal) => {
          terminal.printLine(
            <div className="space-y-3">
              <div className="text-emerald-400 font-semibold">Contact Information:</div>
              <div className="space-y-2">
                <div>
                  <span className="text-zinc-400">Email:</span>{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-emerald-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div>
                  <span className="text-zinc-400">Phone:</span>{" "}
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-emerald-400 hover:underline"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div>
                  <span className="text-zinc-400">Location:</span>{" "}
                  <span className="text-zinc-100">{SITE_CONFIG.location}</span>
                </div>
                <div>
                  <span className="text-zinc-400">Timezone:</span>{" "}
                  <span className="text-zinc-100">{SITE_CONFIG.timezone}</span>
                </div>
                <div className="pt-2">
                  <a
                    href="[ADD BOOKING LINK]"
                    className="inline-block px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-sm transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📅 Book a call
                  </a>
                </div>
              </div>
            </div>
          )
        },
      },

      links: {
        description: "Show social links",
        fn: (_, terminal) => {
          terminal.printLine(
            <div className="space-y-3">
              <div className="text-emerald-400 font-semibold">Social Links:</div>
              <div className="space-y-2">
                <div>
                  <span className="text-zinc-400">LinkedIn:</span>{" "}
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    className="text-emerald-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {SITE_CONFIG.social.linkedin}
                  </a>
                </div>
                <div>
                  <span className="text-zinc-400">GitHub:</span>{" "}
                  <a
                    href={SITE_CONFIG.social.github}
                    className="text-emerald-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {SITE_CONFIG.social.github || "[ADD GITHUB LINK]"}
                  </a>
                </div>

              </div>
            </div>
          )
        },
      },

      theme: {
        description: "Toggle theme",
        usage: "theme <light|dark>",
        fn: (args, terminal) => {
          const mode = args[0]?.toLowerCase()
          if (!["light", "dark"].includes(mode)) {
            terminal.printError("Usage: theme <light|dark>")
            return
          }

          if (typeof document !== "undefined") {
            const root = document.documentElement
            if (mode === "dark") {
              root.classList.add("dark")
              localStorage.setItem("theme", "dark")
            } else {
              root.classList.remove("dark")
              localStorage.setItem("theme", "light")
            }
            terminal.printLine(
              <span className="text-emerald-400">Theme set to {mode}</span>
            )
          }
        },
      },

      clear: {
        description: "Clear terminal output",
        fn: (_, terminal) => {
          terminal.clear()
        },
      },

      tree: {
        description: "Show file tree structure",
        fn: (_, terminal) => {
          terminal.printLine(
            <div className="space-y-2 font-mono text-sm">
              <div className="text-emerald-400">📁 Portfolio Structure:</div>
              <div className="ml-4">
                <div>📁 projects/</div>
                <div className="ml-4">
                  {projects.filter(p => p.featured).map((project) => (
                    <div key={project.slug}>
                      <div>📁 {project.slug}/</div>
                      <div className="ml-4">
                        <div>📄 README.md</div>
                        <div>📄 architecture.mdx</div>
                        <div>📄 results.json</div>
                        {project.links.some(l => l.kind === "site" || l.kind === "demo") && <div>🔗 demo.url</div>}
                        {project.links.some(l => l.kind === "doc") && <div>🔗 github.url</div>}
                      </div>
                    </div>
                  ))}
                </div>
                <div>📁 skills/</div>
                <div className="ml-4">
                  <div>📁 frontend/</div>
                  <div>📁 backend/</div>
                  <div>📁 cloud/</div>
                </div>
                <div>📁 contact/</div>
                <div className="ml-4">
                  <div>📄 booking.url</div>
                  <div>📄 email.url</div>
                  <div>📄 linkedin.url</div>
                  <div>📄 github.url</div>
                </div>
              </div>
              <div className="mt-4 text-zinc-500 text-xs">
                Use <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-xs">open projects/&lt;slug&gt;</kbd> to navigate
              </div>
            </div>
          )
        },
      },

      explorer: {
        description: "Open Projects Explorer",
        fn: (_, terminal) => {
          terminal.printLine(
            <span className="text-emerald-400">Opening Projects Explorer...</span>
          )
          setTimeout(() => {
            onClose()
            router.push("/projects-explorer")
          }, 800)
        },
      },

      exit: {
        description: "Close terminal",
        fn: () => {
          onClose()
        },
      },
    }),
    [router, onClose]
  )

  // Command handler
  const handleCommand = React.useCallback(
    async (input: string) => {
      const terminal = terminalRef.current
      if (!terminal) return

      const trimmed = input.trim()
      if (!trimmed) return

      const [commandName, ...args] = trimmed.split(/\s+/)
      const command = commands[commandName.toLowerCase()]

      if (!command) {
        terminal.printError(
          <div>
            Unknown command: <span className="text-red-300">{commandName}</span>
            <div className="text-zinc-500 text-xs mt-1">
              Type <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">help</kbd> for available commands
            </div>
          </div>
        )
        return
      }

      try {
        await command.fn(args, terminal)
      } catch (error) {
        terminal.printError(
          error instanceof Error ? error.message : "Command execution failed"
        )
      }
    },
    [commands]
  )

  // Keyboard shortcut: Escape to close
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose()
      }
    }

    if (open) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open, onClose])

  // Focus trap
  React.useEffect(() => {
    if (!open) return

    const overlay = overlayRef.current
    if (!overlay) return

    const focusableElements = overlay.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener("keydown", handleTabKey)
    return () => document.removeEventListener("keydown", handleTabKey)
  }, [open])

  // Click outside to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Interactive Terminal"
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        "bg-black/60 backdrop-blur-sm",
        !shouldReduceMotion && "animate-in fade-in duration-200"
      )}
      onClick={handleOverlayClick}
    >
      <div
        className={cn(
          "relative w-full max-w-4xl overflow-hidden rounded-2xl",
          "shadow-2xl ring-1 ring-white/10",
          !shouldReduceMotion && "animate-in zoom-in-95 duration-200"
        )}
      >
        {/* Titlebar */}
        <div className="flex items-center gap-2 bg-zinc-900 border-b border-zinc-800 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-3 w-3 rounded-full bg-red-500/80" />
            <span className="inline-flex h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="inline-flex h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-xs text-zinc-400 font-mono">
            {copy.brand.fullName} — Terminal
          </span>
          <button
            onClick={onClose}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
            aria-label="Close terminal"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Terminal */}
        <Terminal
          ref={terminalRef as any}
          className="h-[min(70vh,600px)] rounded-none border-0"
          prompt="$"
          welcomeMessage={
            <div className="space-y-1">
              <div className="text-emerald-400 font-semibold">
                Welcome to {copy.brand.fullName}'s Portfolio Terminal
              </div>
              <div className="text-zinc-500 text-sm">
                Type <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded text-xs">help</kbd> to get started
              </div>
            </div>
          }
          onCommand={handleCommand}
          autoFocus
          reducedMotion={shouldReduceMotion}
        />
      </div>
    </div>
  )
}
