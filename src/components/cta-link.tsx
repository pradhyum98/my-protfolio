import * as React from "react"
import { SmartLink } from "@/components/ui/smart-link"

// ============================================================================
// CTA LINK HELPER — Internal vs External Link Routing with Preview
// ============================================================================
// Automatically determines whether to use Next.js Link or external anchor
// with link preview support for external URLs

type CtaLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  "aria-label"?: string
  noPreview?: boolean
}

export function CtaLink({ href, children, className, "aria-label": ariaLabel, noPreview }: CtaLinkProps) {
  return (
    <SmartLink
      href={href}
      className={className}
      aria-label={ariaLabel}
      noPreview={noPreview}
    >
      {children}
    </SmartLink>
  )
}
