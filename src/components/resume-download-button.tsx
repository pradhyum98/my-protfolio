"use client"

import * as React from "react"
import { Download, ChevronDown, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type ResumeDownloadButtonProps = {
  variant?: "default" | "ghost" | "link" | "outline" | "secondary"
  size?: "sm" | "default" | "lg"
  className?: string
  iconClassName?: string
  showIcon?: boolean
  showChevron?: boolean
  label?: string
  asChild?: boolean
}

const resumeOptions = [
  {
    label: "Download Full Résumé",
    description: "Complete version with all details",
    href: "/resume.pdf",
    icon: "📄",
  },
  {
    label: "Download Compact Résumé",
    description: "Condensed one-page version",
    href: "/resume-compact.pdf",
    icon: "📋",
  },
] as const

export const ResumeDownloadButton = React.forwardRef<
  HTMLButtonElement,
  ResumeDownloadButtonProps
>(
  (
    {
      variant = "default",
      size = "default",
      className,
      iconClassName,
      showIcon = true,
      showChevron = true,
      label = "Download Résumé",
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const buttonSizeClasses = {
      sm: "gap-1 text-sm px-3 py-1.5",
      default: "gap-2 px-4 py-2",
      lg: "gap-2 px-6 py-3 text-lg",
    }

    const iconSizeClasses = {
      sm: "h-3.5 w-3.5",
      default: "h-4 w-4",
      lg: "h-5 w-5",
    }

    const baseButtonClasses = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
      buttonSizeClasses[size],
      {
        "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
        "underline-offset-4 hover:underline text-primary": variant === "link",
        "border border-input hover:bg-accent hover:text-accent-foreground": variant === "outline",
        "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
      },
      className
    )

    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button
            ref={ref}
            className={baseButtonClasses}
            aria-label="Download résumé options"
            aria-expanded={isOpen}
            {...props}
          >
            {showIcon && (
              <Download
                className={cn(iconSizeClasses[size], iconClassName)}
                aria-hidden="true"
              />
            )}
            <span>{label}</span>
            {showChevron && (
              <ChevronDown
                className={cn(
                  iconSizeClasses[size],
                  "transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            )}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-72 rounded-xl border bg-background shadow-lg"
          sideOffset={8}
        >
          {resumeOptions.map((option) => (
            <DropdownMenuItem
              key={option.href}
              asChild
              className="cursor-pointer focus:bg-accent focus:text-accent-foreground"
            >
              <a
                href={option.href}
                download
                className="flex items-start gap-3 p-3 transition-colors"
              >
                <span className="text-2xl" aria-hidden="true">
                  {option.icon}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{option.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {option.description}
                  </span>
                </div>
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
)

ResumeDownloadButton.displayName = "ResumeDownloadButton"

// Simpler link variant for text-only contexts
type ResumeDownloadLinkProps = {
  className?: string
  iconClassName?: string
  showIcon?: boolean
  children?: React.ReactNode
}

export const ResumeDownloadLink = ({
  className,
  iconClassName,
  showIcon = true,
  children = "Download résumé",
}: ResumeDownloadLinkProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "inline-flex items-center gap-2 transition-colors",
            className
          )}
          aria-label="Download résumé options"
          aria-expanded={isOpen}
        >
          {showIcon && (
            <FileText className={cn("h-4 w-4", iconClassName)} aria-hidden="true" />
          )}
          <span>{children}</span>
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-72 rounded-xl border bg-background shadow-lg"
        sideOffset={8}
      >
        {resumeOptions.map((option) => (
          <DropdownMenuItem
            key={option.href}
            asChild
            className="cursor-pointer focus:bg-accent focus:text-accent-foreground"
          >
            <a
              href={option.href}
              download
              className="flex items-start gap-3 p-3 transition-colors"
            >
              <span className="text-2xl" aria-hidden="true">
                {option.icon}
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-medium">{option.label}</span>
                <span className="text-xs text-muted-foreground">
                  {option.description}
                </span>
              </div>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
