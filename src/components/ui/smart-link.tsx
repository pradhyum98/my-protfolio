"use client"

import * as React from "react"
import Link from "next/link"
import { LinkPreview } from "@/components/ui/link-preview"
import { SITE_CONFIG } from "@/lib/constants"

// ============================================================================
// SMART LINK — Auto-wraps external links with preview
// ============================================================================

type SmartLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  "aria-label"?: string
  noPreview?: boolean // Opt-out flag
  target?: string
  rel?: string
}

export function SmartLink({
  href,
  children,
  className,
  "aria-label": ariaLabel,
  noPreview = false,
  target,
  rel,
}: SmartLinkProps) {
  // Check if link is a placeholder
  const isPlaceholder =
    href === "[ADD LINK]" ||
    href === "[ADD GITHUB LINK]" ||
    href === "[ADD YOUTUBE LINK]" ||
    href === "[ADD BOOKING LINK]" ||
    /^\[ADD.*\]$/i.test(href)

  // Render placeholder as disabled span
  if (isPlaceholder) {
    return (
      <span
        className={`${className} opacity-50 cursor-not-allowed`}
        title="Link not configured yet"
      >
        {children}
      </span>
    )
  }

  // Determine if link is external
  const isExternal =
    /^https?:\/\//.test(href) &&
    !href.startsWith(SITE_CONFIG.url)

  // Exclusion patterns (no preview for these)
  const shouldExclude =
    noPreview ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#") ||
    /\.(pdf|zip|dmg|exe|pkg)$/i.test(href)

  // External link WITH preview
  if (isExternal && !shouldExclude) {
    return (
      <LinkPreview
        url={href}
        className={className}
        aria-label={ariaLabel || `Visit ${href}`}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
      >
        {children}
      </LinkPreview>
    )
  }

  // External link WITHOUT preview (excluded)
  if (isExternal) {
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  // Internal link (Next.js Link)
  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
