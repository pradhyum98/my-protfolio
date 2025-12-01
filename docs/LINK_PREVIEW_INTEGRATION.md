# Aceternity Link Preview Integration Plan

**Status:** Ready for Implementation
**Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui
**Component:** Aceternity UI Link Preview (https://ui.aceternity.com/components/link-preview)
**Accessibility Target:** WCAG 2.2 AA
**Performance Target:** Core Web Vitals ≥95

---

## 0) Assumptions & Notes

### ✅ Known
- **Current Link Handling:** `CtaLink` component exists (`src/components/cta-link.tsx`) and already distinguishes internal vs external links
- **External Link Pattern:** Currently uses regex `/^https?:\/\//` to detect external URLs
- **Site URL:** `https://hellosanjay.com` (from `SITE_CONFIG.url`)
- **Theme System:** Tailwind CSS with dark mode via `class` strategy, theme-aware via `dark:` variants
- **Image Hosting:** Already configured for `images.unsplash.com` and `source.unsplash.com`
- **Projects Data:** Centralized in `src/content/projects.ts` with typed `ProjectLink[]` arrays
- **MDX Rendering:** Docs use `next-mdx-remote` with custom component mapping (`src/app/docs/[slug]/page.tsx`)

### ❓ Unknowns & [ASK] Items

1. **[ASK]** Aceternity Link Preview API specifics:
   - Does it use Microlink (https://microlink.io) or custom preview service?
   - Props available: `url`, `imageSrc`, `imageAlt`, `description`, `title`, `children`?
   - Delay/timeout configurations?
   - Fallback behavior if preview fetch fails?
   - **Action:** Test component in isolation first to confirm API surface

2. **[ADD DETAIL]** Preview interaction preference:
   - Hover only (desktop)?
   - Click/tap to open modal (mobile)?
   - Long-press gesture support?
   - Always visible (tooltip style)?
   - **Recommendation:** Hover on desktop (≥768px), tap on mobile with modal

3. **[ADD DETAIL]** Preview card design tokens:
   - Border color: `border-border` or custom?
   - Shadow: `shadow-lg` or `shadow-xl`?
   - Animation curve: `ease-out` or `ease-in-out`?
   - **Recommendation:** Match shadcn/ui card styles for consistency

4. **[ASK]** Rate limiting / caching:
   - Should we cache preview data in localStorage/IndexedDB?
   - Rate limit preview fetches to avoid API abuse?
   - **Recommendation:** Cache for 24h, max 1 request per URL per session

5. **[ADD LINK]** Missing external URLs in data:
   - `SITE_CONFIG.social.github`: Currently `"[ADD GITHUB LINK]"`
   - `SITE_CONFIG.social.youtube`: Currently `"[ADD YOUTUBE LINK]"`
   - Contact page booking link: `"[ADD BOOKING LINK]"`
   - Several project docs: `"[ADD LINK]"`

6. **[ASK]** SEO considerations:
   - Should preview links have `rel="nofollow"`?
   - Keep `rel="noopener noreferrer"` for security?
   - **Recommendation:** Use `rel="noopener noreferrer nofollow"` for external previews unless whitelisted (e.g., own projects)

### 📍 Pages/Sections Requiring Integration (Priority Order)

**High Priority:**
1. **Projects Detail Pages** (`/projects/[slug]`) — External demo/doc/site links in "Project Links" section
2. **Docs Pages** (`/docs/[slug]`) — Markdown external references in MDX content
3. **Footer** (`src/components/footer.tsx`) — Social links (LinkedIn, GitHub, YouTube)
4. **Contact Page** (`/contact`) — Booking link, social links

**Medium Priority:**
5. **Projects List/Explorer** — Quick links in project cards
6. **Services Page** (`/services`) — External service/tool references
7. **Writing/Blog** (`/writing`) — Citation links, external articles

**Low Priority:**
8. **About Page** — Company/project links in experience timeline
9. **Homepage** — Featured project links in hero/CTA sections

---

## 1) Integration Plan

### Component Behavior

**Desktop (≥768px):**
- **Hover:** Show preview card after 300ms delay
- **Position:** Above or below link (auto-adjust for viewport)
- **Dismissal:** Mouse leave or Escape key
- **Animation:** 200ms ease-out fade + slide (5px)

**Mobile (<768px):**
- **Tap:** Show full-screen modal with preview
- **Long Press (500ms):** Alternative trigger (iOS/Android native feel)
- **Dismissal:** Tap backdrop, close button, or swipe down
- **Animation:** 250ms ease-out slide-up from bottom

### Preview Card Content

```tsx
┌─────────────────────────────────┐
│ [favicon] Title (truncate 60ch) │
│                                 │
│ ┌─────────────────────────────┐ │
│ │                             │ │
│ │      Preview Image          │ │
│ │      (16:9 ratio)           │ │
│ │                             │ │
│ └─────────────────────────────┘ │
│                                 │
│ Description (max 2 lines,       │
│ truncate with ellipsis)         │
│                                 │
│ [External Link Icon] domain.com │
└─────────────────────────────────┘
```

### Fallback Behavior

If preview fetch fails (network error, 404, CORS, timeout):
1. Show link without preview (graceful degradation)
2. Optionally display generic card with domain + icon
3. Log error to console (dev mode only)

### Exclusions (Do NOT Preview)

- Internal links (`/projects`, `/contact`, etc.)
- Mailto links (`mailto:`)
- Tel links (`tel:`)
- File downloads (`/resume.pdf`, `.zip`, `.dmg`)
- Anchor links (`#section-id`)
- Links with explicit `data-no-preview` attribute

---

## 2) Global Utility Component (Copy-Pasteable)

### File: `src/components/ui/smart-link.tsx`

```tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { LinkPreview } from "@/components/aceternity/link-preview"
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
    /\.(pdf|zip|dmg|exe|pkg)$/i.test(href) ||
    href === "[ADD LINK]" || // Placeholder
    href === "[ADD GITHUB LINK]" ||
    href === "[ADD YOUTUBE LINK]" ||
    href === "[ADD BOOKING LINK]"

  // External link WITH preview
  if (isExternal && !shouldExclude) {
    return (
      <LinkPreview url={href} className="inline-flex items-center gap-1">
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer nofollow"}
          className={className}
          aria-label={ariaLabel || `Visit ${href}`}
        >
          {children}
        </a>
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
```

### File: `src/components/aceternity/link-preview.tsx`

**Note:** Install via CLI or copy from Aceternity docs. Placeholder interface:

```tsx
"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

type LinkPreviewProps = {
  url: string
  children: React.ReactNode
  className?: string
  imageSrc?: string
  imageAlt?: string
  title?: string
  description?: string
}

export function LinkPreview({
  url,
  children,
  className,
  imageSrc,
  imageAlt,
  title,
  description,
}: LinkPreviewProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [previewData, setPreviewData] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  // Fetch preview data when link is in view (lazy load)
  React.useEffect(() => {
    if (inView && !previewData && !isLoading) {
      fetchPreview(url)
    }
  }, [inView, url])

  const fetchPreview = async (targetUrl: string) => {
    setIsLoading(true)
    try {
      // [TODO]: Replace with actual Aceternity/Microlink API call
      const response = await fetch(
        `https://api.microlink.io/?url=${encodeURIComponent(targetUrl)}`
      )
      const data = await response.json()
      setPreviewData(data?.data)
    } catch (error) {
      console.error("[LinkPreview] Fetch failed:", error)
      setPreviewData(null) // Graceful fallback
    } finally {
      setIsLoading(false)
    }
  }

  const handleOpen = (e: React.MouseEvent | React.TouchEvent) => {
    if (isMobile) {
      e.preventDefault()
      setIsOpen(true)
    }
  }

  const handleMouseEnter = () => {
    if (!isMobile) {
      setTimeout(() => setIsOpen(true), 300) // 300ms delay
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={isMobile ? handleOpen : undefined}
    >
      {children}

      <AnimatePresence>
        {isOpen && previewData && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 w-80 max-w-[90vw] rounded-2xl border border-border bg-background p-4 shadow-xl"
          >
            {/* Favicon + Title */}
            <div className="mb-3 flex items-center gap-2">
              {previewData.logo?.url && (
                <img
                  src={previewData.logo.url}
                  alt=""
                  className="h-4 w-4"
                />
              )}
              <h4 className="truncate text-sm font-semibold">
                {title || previewData.title || url}
              </h4>
            </div>

            {/* Preview Image */}
            {(imageSrc || previewData.image?.url) && (
              <div className="mb-3 overflow-hidden rounded-lg">
                <img
                  src={imageSrc || previewData.image.url}
                  alt={imageAlt || previewData.image.alt || "Preview"}
                  className="aspect-video w-full object-cover"
                />
              </div>
            )}

            {/* Description */}
            {(description || previewData.description) && (
              <p className="mb-2 line-clamp-2 text-xs text-muted-foreground">
                {description || previewData.description}
              </p>
            )}

            {/* Domain */}
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>{new URL(url).hostname}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

**[ASK]** Confirm Aceternity API matches this structure or adjust based on official docs.

---

## 3) Design Guidelines

### Visual Design

```css
/* Preview Card Styles */
.link-preview-card {
  /* Container */
  @apply rounded-2xl;
  @apply border border-border;
  @apply bg-background;
  @apply shadow-lg;
  @apply p-4;
  @apply max-w-xs; /* 320px on desktop */

  /* Dark mode */
  @apply dark:border-border/50;
  @apply dark:bg-background/95;
  @apply dark:backdrop-blur-sm;
}

/* Preview Image */
.link-preview-image {
  @apply aspect-video;
  @apply w-full;
  @apply object-cover;
  @apply rounded-lg;
  @apply overflow-hidden;
}

/* Preview Text */
.link-preview-title {
  @apply text-sm font-semibold;
  @apply truncate;
  @apply text-foreground;
}

.link-preview-description {
  @apply text-xs text-muted-foreground;
  @apply line-clamp-2; /* Max 2 lines */
}

.link-preview-domain {
  @apply text-xs text-muted-foreground;
  @apply flex items-center gap-1;
}
```

### Motion Design

**Desktop Hover Animation:**
```tsx
// Framer Motion variants
const desktopVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    transition: { duration: 0.15, ease: "easeIn" },
  },
}
```

**Mobile Modal Animation:**
```tsx
// Framer Motion variants
const mobileVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.2, ease: "easeIn" },
  },
}
```

**Reduced Motion:**
```tsx
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches

const variants = prefersReducedMotion
  ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
  : desktopVariants
```

### Theme Awareness

- **Light Mode:** White background (`bg-background`), subtle border (`border-border`)
- **Dark Mode:** Semi-transparent dark background (`bg-background/95`), softer border (`border-border/50`), backdrop blur (`backdrop-blur-sm`)
- **Colors:** Use CSS variables for consistency: `--background`, `--foreground`, `--border`, `--muted-foreground`

### Responsive Behavior

| Breakpoint | Behavior                     | Max Width |
|------------|------------------------------|-----------|
| `<768px`   | Full-width modal, slide-up   | 100vw     |
| `≥768px`   | Floating card, hover trigger | 320px     |

---

## 4) Pages to Update

### 4.1 Projects Detail Page

**File:** `src/app/projects/[slug]/page.tsx`

**Current Implementation (Lines 300-320):**
```tsx
{project.links.length > 0 && (
  <section>
    <h2 className="mb-6 text-2xl font-bold">Project Links</h2>
    <div className="flex flex-wrap gap-3">
      {project.links
        .filter((link) => link.href !== "[ADD LINK]")
        .map((link, idx) => (
          <Button key={idx} variant={idx === 0 ? "default" : "outline"} size="lg" asChild>
            <CtaLink href={link.href} aria-label={`${link.label} for ${project.title}`}>
              {link.kind === "demo" && <ExternalLink className="h-5 w-5" />}
              {link.label}
            </CtaLink>
          </Button>
        ))}
    </div>
  </section>
)}
```

**✏️ Change:**
```tsx
import { SmartLink } from "@/components/ui/smart-link" // [ADD]

// Replace <CtaLink> with <SmartLink>
<SmartLink href={link.href} aria-label={`${link.label} for ${project.title}`}>
  {link.kind === "demo" && <ExternalLink className="h-5 w-5" />}
  {link.label}
</SmartLink>
```

---

### 4.2 Docs MDX Components

**File:** `src/app/docs/[slug]/page.tsx`

**Current Implementation (Lines 115-124):**
```tsx
a: ({ href, children }: ComponentProps) => (
  <a
    href={href}
    className="text-primary hover:underline font-medium"
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
  >
    {children}
  </a>
),
```

**✏️ Change:**
```tsx
import { SmartLink } from "@/components/ui/smart-link" // [ADD]

// Replace anchor with SmartLink
a: ({ href, children }: ComponentProps) => {
  if (!href) return <a>{children}</a>

  return (
    <SmartLink
      href={href}
      className="text-primary hover:underline font-medium"
    >
      {children}
    </SmartLink>
  )
},
```

---

### 4.3 Footer Social Links

**File:** `src/components/footer.tsx`

**Current Implementation (Lines 19-54):**
```tsx
<a
  href={SITE_CONFIG.social.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="text-foreground/60 transition-colors hover:text-foreground"
  aria-label={copy.footer.ariaLinkedin}
>
  <Linkedin className="h-5 w-5" />
</a>
```

**✏️ Change:**
```tsx
import { SmartLink } from "@/components/ui/smart-link" // [ADD]

<SmartLink
  href={SITE_CONFIG.social.linkedin}
  className="text-foreground/60 transition-colors hover:text-foreground inline-flex"
  aria-label={copy.footer.ariaLinkedin}
>
  <Linkedin className="h-5 w-5" />
</SmartLink>
```

**Apply same pattern to:** GitHub, YouTube, Email (mailto) links

---

### 4.4 Contact Page

**File:** `src/app/contact/page.tsx`

**Lines to Update:**
- Line 124: Booking link button
- Lines 74-94: Email, phone (keep as-is, no preview for `mailto:`/`tel:`)

**✏️ Change (Booking Link):**
```tsx
import { SmartLink } from "@/components/ui/smart-link" // [ADD]

<Button className="w-full" asChild>
  <SmartLink href="[ADD BOOKING LINK]"> {/* Replace with actual Calendly/Cal.com link */}
    <Calendar className="h-5 w-5" />
    {copy.contact.bookTimeButton}
  </SmartLink>
</Button>
```

---

### 4.5 Replace Global CtaLink

**File:** `src/components/cta-link.tsx`

**Option A:** Replace entirely with `SmartLink` (breaking change)
**Option B:** Update `CtaLink` to use `SmartLink` internally (backward compatible)

**Recommended (Option B):**
```tsx
import { SmartLink } from "@/components/ui/smart-link"

export function CtaLink(props: CtaLinkProps) {
  return <SmartLink {...props} />
}
```

This preserves existing imports and adds preview functionality globally.

---

## 5) Performance & SEO

### 5.1 Lazy Loading Strategy

**Intersection Observer:**
```tsx
import { useInView } from "react-intersection-observer"

const { ref, inView } = useInView({
  triggerOnce: true, // Only load once
  threshold: 0.1, // Load when 10% visible
  rootMargin: "200px", // Pre-load 200px before visible
})

React.useEffect(() => {
  if (inView && !previewData) {
    fetchPreview(url)
  }
}, [inView, url])
```

**Benefits:**
- Reduces initial network requests by 80%+
- Loads previews only when near viewport
- Improves Time to Interactive (TTI)

### 5.2 Dynamic Import (Code Splitting)

**Option 1: Next.js `dynamic`**
```tsx
import dynamic from "next/dynamic"

const LinkPreview = dynamic(
  () => import("@/components/aceternity/link-preview").then((mod) => mod.LinkPreview),
  {
    ssr: false, // Client-only (preview fetches need browser APIs)
    loading: () => <span className="text-muted-foreground">Loading preview...</span>,
  }
)
```

**Option 2: React `lazy`**
```tsx
const LinkPreview = React.lazy(() => import("@/components/aceternity/link-preview"))

<React.Suspense fallback={<span>Loading...</span>}>
  <LinkPreview url={href}>
    {children}
  </LinkPreview>
</React.Suspense>
```

**Recommendation:** Use `dynamic` with `ssr: false` for Next.js projects.

### 5.3 Caching Strategy

**Session Storage (Per-Session Cache):**
```tsx
const CACHE_KEY_PREFIX = "link-preview:"
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours

const getCachedPreview = (url: string) => {
  const cached = sessionStorage.getItem(CACHE_KEY_PREFIX + url)
  if (!cached) return null

  const { data, timestamp } = JSON.parse(cached)
  if (Date.now() - timestamp > CACHE_DURATION) {
    sessionStorage.removeItem(CACHE_KEY_PREFIX + url)
    return null
  }

  return data
}

const setCachedPreview = (url: string, data: any) => {
  sessionStorage.setItem(
    CACHE_KEY_PREFIX + url,
    JSON.stringify({ data, timestamp: Date.now() })
  )
}
```

**Benefits:**
- Eliminates redundant API calls
- Persists across page navigations (same session)
- Automatically cleared on browser close

### 5.4 SEO Best Practices

**External Link Attributes:**
```tsx
rel="noopener noreferrer nofollow"
```

- `noopener`: Security (prevents `window.opener` hijacking)
- `noreferrer`: Privacy (strips referrer header)
- `nofollow`: SEO (tells crawlers not to follow/credit link)

**Exceptions (Whitelist for `rel="noopener"` only):**
- Own project demos (e.g., `app.carbonshop.digital`)
- Company websites (e.g., `highlevel.com`)
- Professional profiles (e.g., `linkedin.com/in/luv-jeri`)

### 5.5 Next.js Image Configuration

**File:** `next.config.ts`

**✏️ Add Microlink domain:**
```tsx
export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io', // [ADD] For link previews
      },
      {
        protocol: 'https',
        hostname: '*.microlink.io', // [ADD] For subdomains
      },
    ],
  },
}
```

---

## 6) Accessibility & QA

### 6.1 Keyboard Navigation

**Requirements:**
1. **Tab:** Focus moves to link (outline visible)
2. **Enter/Space:** Activate link (open URL)
3. **Hover (focus):** Show preview after 300ms
4. **Escape:** Close preview, return focus to link
5. **Arrow Keys:** Navigate within preview (if interactive elements exist)

**Implementation:**
```tsx
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === "Escape") {
    setIsOpen(false)
    // Return focus to link
    linkRef.current?.focus()
  }
}

<div
  role="button"
  tabIndex={0}
  ref={linkRef}
  onKeyDown={handleKeyDown}
  onFocus={handleFocus}
  onBlur={handleBlur}
>
  {children}
</div>
```

### 6.2 ARIA Attributes

**Link with Preview:**
```tsx
<a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={`Visit ${title || href} (opens in new tab)`}
  aria-describedby={isOpen ? `preview-${id}` : undefined}
>
  {children}
</a>

{isOpen && (
  <div
    id={`preview-${id}`}
    role="tooltip"
    aria-live="polite"
    className="link-preview-card"
  >
    {/* Preview content */}
  </div>
)}
```

**Screen Reader Announcement:**
- On focus: "Visit Carbon Shop (opens in new tab). Preview available."
- On preview open: "Link preview displayed. Press Escape to close."
- On preview close: "Link preview closed."

### 6.3 Focus Management

**Visual Focus Indicator:**
```css
.smart-link:focus-visible {
  @apply outline-2 outline-offset-2 outline-ring;
  @apply rounded-sm;
}
```

**Trap Focus in Mobile Modal:**
```tsx
import { useFocusTrap } from "@/hooks/use-focus-trap"

const modalRef = useFocusTrap(isOpen)

<div ref={modalRef} role="dialog" aria-modal="true">
  {/* Preview content */}
  <button onClick={() => setIsOpen(false)}>Close</button>
</div>
```

### 6.4 Reduced Motion Compliance

**CSS:**
```css
@media (prefers-reduced-motion: reduce) {
  .link-preview-card {
    transition: opacity 0.01ms !important;
    animation: none !important;
  }
}
```

**Framer Motion:**
```tsx
import { useReducedMotion } from "framer-motion"

const shouldReduceMotion = useReducedMotion()

const variants = shouldReduceMotion
  ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
  : desktopVariants
```

### 6.5 Performance Metrics

**Lighthouse Targets:**
- **Performance:** ≥95 (±5 acceptable with previews)
- **Accessibility:** 100
- **Best Practices:** ≥95
- **SEO:** 100

**Core Web Vitals:**
- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.02 (preview cards should not shift page layout)

**CLS Prevention:**
```tsx
// Reserve space for preview card to avoid layout shift
<div className="relative">
  <a href={href}>{children}</a>
  {isOpen && (
    <div
      className="absolute z-50" // Absolute positioning, no layout shift
      style={{
        top: "100%", // Below link
        left: "50%",
        transform: "translateX(-50%)", // Center horizontally
      }}
    >
      {/* Preview card */}
    </div>
  )}
</div>
```

### 6.6 QA Checklist

**Manual Testing:**
- [ ] Hover link on desktop → Preview appears after 300ms
- [ ] Mouse leave → Preview disappears
- [ ] Tap link on mobile → Preview modal opens
- [ ] Tap backdrop → Modal closes
- [ ] Tab to link → Focus visible
- [ ] Enter key → Opens link (not preview)
- [ ] Escape key → Closes preview
- [ ] Screen reader → Announces "Preview available"
- [ ] Dark mode → Preview card theme-aware
- [ ] Network offline → Graceful fallback (no preview)
- [ ] Slow 3G → Preview loads with skeleton
- [ ] Preview API error → Link still clickable

**Automated Testing:**
```tsx
// Vitest + Testing Library
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { SmartLink } from "@/components/ui/smart-link"

describe("SmartLink", () => {
  it("renders external link with preview", async () => {
    render(<SmartLink href="https://example.com">Example</SmartLink>)

    const link = screen.getByText("Example")
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener noreferrer nofollow")

    fireEvent.mouseEnter(link)
    await waitFor(() => {
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    }, { timeout: 500 })
  })

  it("renders internal link without preview", () => {
    render(<SmartLink href="/projects">Projects</SmartLink>)

    const link = screen.getByText("Projects")
    expect(link).not.toHaveAttribute("target")
  })

  it("excludes mailto links from preview", () => {
    render(<SmartLink href="mailto:test@example.com">Email</SmartLink>)

    const link = screen.getByText("Email")
    fireEvent.mouseEnter(link)

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })
})
```

---

## 7) Gaps & Requests

### 🔴 Critical (Blocking Implementation)

1. **[ASK]** Aceternity Link Preview Component Installation:
   - Install method: CLI (`npx aceternity-ui add link-preview`)? Manual copy?
   - Dependencies: Framer Motion? Radix UI?
   - **Action Required:** Confirm installation steps

2. **[ASK]** Preview API Endpoint:
   - Using Microlink (https://microlink.io)?
   - Need API key? (Free tier: 50 req/day, Pro: 10k req/month)
   - Alternative: Self-host preview service?
   - **Action Required:** Choose preview service + set up API key

3. **[ADD LINK]** Replace placeholder URLs in data:
   - `SITE_CONFIG.social.github`
   - `SITE_CONFIG.social.youtube`
   - Contact page booking link (`[ADD BOOKING LINK]`)
   - Project documentation links (4 instances of `"[ADD LINK]"` in `projects.ts`)

### 🟡 High Priority (Pre-Launch)

4. **[ADD DETAIL]** Design token specifications:
   - Confirm preview card border color (current: `border-border`)
   - Shadow strength (current: `shadow-lg`)
   - Animation timing curve (current: `ease-out`)
   - **Action Required:** Design review with stakeholder

5. **[ASK]** Rate limiting strategy:
   - Max preview requests per session: 50? 100? Unlimited?
   - Cache duration: 24h? 7 days? Persist in localStorage?
   - Error handling: Retry failed fetches? Show error toast?

6. **[ASK]** Analytics tracking:
   - Track preview opens (event: `link_preview_opened`)?
   - Track external link clicks with preview context?
   - Use Google Analytics, Plausible, or Mixpanel?

### 🟢 Low Priority (Post-Launch)

7. **[FUTURE]** Advanced features:
   - Custom preview overrides (manual title/image per link)
   - Preview for internal pages (e.g., `/projects/carbon-shop` → show hero image)
   - A/B test: Hover vs Click vs Always-Visible previews
   - Preview for email/phone (show QR code?)

8. **[FUTURE]** Performance optimizations:
   - Service Worker caching for preview images
   - WebP/AVIF image format negotiation
   - Prefetch previews for above-the-fold links

---

## Execution Steps (Implementation Order)

### Phase 1: Setup & Testing (Est. 2-3 hours)

1. ✅ **Install Aceternity Link Preview Component:**
   ```bash
   # [ASK] Confirm installation method
   npx aceternity-ui add link-preview
   # OR
   npm install @aceternity-ui/link-preview framer-motion
   ```

2. ✅ **Set up Microlink API (or alternative):**
   - Sign up at https://microlink.io
   - Get API key (free tier: 50 req/day)
   - Add to `.env.local`:
     ```env
     NEXT_PUBLIC_MICROLINK_API_KEY=your_api_key_here
     ```

3. ✅ **Test LinkPreview in isolation:**
   - Create test page: `src/app/demo/link-preview/page.tsx`
   - Test with 5-10 external URLs
   - Verify desktop hover + mobile tap behavior
   - Check dark mode styling
   - Validate API response structure

4. ✅ **Update Next.js config for image domains:**
   ```tsx
   // next.config.ts
   images: {
     remotePatterns: [
       // ... existing
       { protocol: 'https', hostname: 'api.microlink.io' },
       { protocol: 'https', hostname: '*.microlink.io' },
     ],
   }
   ```

### Phase 2: Core Implementation (Est. 4-5 hours)

5. ✅ **Create `SmartLink` component:**
   - Implement `src/components/ui/smart-link.tsx` (see Section 2)
   - Add exclusion logic (mailto, tel, #, file downloads)
   - Implement caching (sessionStorage)
   - Add error boundaries for fetch failures

6. ✅ **Update Projects Detail Page:**
   - Replace `CtaLink` with `SmartLink` in Project Links section
   - Test with Carbon Shop, DMRV, Khajuraho demo links
   - Verify mobile modal opens correctly

7. ✅ **Update Docs MDX Components:**
   - Replace anchor (`a`) component with `SmartLink`
   - Test with external references in docs
   - Ensure markdown links render correctly

8. ✅ **Update Footer Social Links:**
   - Replace all `<a>` tags with `SmartLink`
   - Test LinkedIn, GitHub, YouTube previews
   - Skip Email (mailto) and Phone (tel)

9. ✅ **Update Contact Page:**
   - Replace booking link with `SmartLink`
   - Test modal opens on mobile

### Phase 3: Polish & QA (Est. 3-4 hours)

10. ✅ **Implement accessibility features:**
    - Keyboard navigation (Tab, Enter, Escape)
    - ARIA attributes (`aria-label`, `aria-describedby`, `role="tooltip"`)
    - Focus management (trap focus in modal)
    - Screen reader announcements

11. ✅ **Optimize performance:**
    - Add Intersection Observer for lazy loading
    - Implement sessionStorage caching
    - Dynamic import `LinkPreview` for code splitting
    - Test CLS (preview should not shift layout)

12. ✅ **Design refinement:**
    - Match shadcn/ui card styles
    - Adjust animation timings (hover delay, slide duration)
    - Test dark mode (border contrast, backdrop blur)
    - Ensure responsive breakpoints (mobile modal vs desktop card)

13. ✅ **Browser testing:**
    - Chrome, Firefox, Safari (desktop)
    - iOS Safari, Chrome Android (mobile)
    - Test hover, tap, long-press gestures
    - Verify reduced motion compliance

14. ✅ **Lighthouse audit:**
    - Run Lighthouse on `/projects/carbon-shop` (has external links)
    - Target: Performance ≥95, Accessibility 100, SEO 100
    - Fix any CLS issues (preview positioning)

### Phase 4: Deployment & Monitoring (Est. 1-2 hours)

15. ✅ **Replace missing placeholder links:**
    - Add GitHub, YouTube URLs to `SITE_CONFIG`
    - Add booking link to Contact page
    - Update project documentation links

16. ✅ **Deploy to staging:**
    - Test end-to-end on production-like environment
    - Verify API rate limits (Microlink free tier)
    - Check CORS if using custom preview service

17. ✅ **Production deployment:**
    - Merge PR to `main`
    - Deploy to Vercel/Netlify
    - Monitor error logs for failed preview fetches

18. ✅ **Post-launch QA:**
    - Test 10-15 external links across site
    - Monitor Core Web Vitals via Vercel Analytics
    - Check browser console for errors
    - Validate preview caching works (no redundant API calls)

---

## Success Criteria

**Functional:**
- ✅ All external links show preview on hover (desktop) or tap (mobile)
- ✅ Internal links remain unchanged
- ✅ Excluded links (mailto, tel, files) skip preview
- ✅ Graceful fallback if preview API fails

**Design:**
- ✅ Preview card matches site theme (light/dark)
- ✅ Smooth animations (200-250ms, reduced motion support)
- ✅ No layout shift (CLS < 0.02)

**Performance:**
- ✅ Lighthouse Performance ≥95
- ✅ LCP <2.5s, FID <100ms, CLS <0.02
- ✅ Preview loads only when link in viewport (lazy load)
- ✅ Cached previews reused (sessionStorage)

**Accessibility:**
- ✅ Lighthouse Accessibility = 100
- ✅ Keyboard navigable (Tab, Enter, Escape)
- ✅ Screen reader announces preview availability
- ✅ Focus visible and trapped in modal

**SEO:**
- ✅ External links have `rel="noopener noreferrer nofollow"`
- ✅ No impact on existing canonical/JSON-LD
- ✅ Lighthouse SEO = 100

---

## Dependencies & Installation

```json
{
  "dependencies": {
    "@aceternity-ui/link-preview": "^1.0.0", // [ASK] Confirm package name
    "framer-motion": "^11.0.0",
    "react-intersection-observer": "^9.5.0"
  }
}
```

**Installation Commands:**
```bash
# Install dependencies
npm install @aceternity-ui/link-preview framer-motion react-intersection-observer

# OR use CLI (if available)
npx aceternity-ui add link-preview

# Add Microlink API key
echo "NEXT_PUBLIC_MICROLINK_API_KEY=your_key" >> .env.local
```

---

## File Change Summary

| File | Change Type | Lines Changed | Description |
|------|-------------|---------------|-------------|
| `src/components/ui/smart-link.tsx` | **NEW** | ~80 lines | Main SmartLink component |
| `src/components/aceternity/link-preview.tsx` | **NEW** | ~150 lines | LinkPreview wrapper (if not from CLI) |
| `src/app/projects/[slug]/page.tsx` | **MODIFY** | ~5 lines | Replace CtaLink with SmartLink |
| `src/app/docs/[slug]/page.tsx` | **MODIFY** | ~10 lines | Update MDX anchor component |
| `src/components/footer.tsx` | **MODIFY** | ~15 lines | Replace social link anchors |
| `src/app/contact/page.tsx` | **MODIFY** | ~3 lines | Replace booking link |
| `src/components/cta-link.tsx` | **MODIFY** | ~3 lines | Delegate to SmartLink |
| `next.config.ts` | **MODIFY** | ~5 lines | Add Microlink image domains |
| `.env.local` | **NEW** | ~1 line | Add Microlink API key |

**Total:** ~270 new lines, ~40 modified lines

---

## Timeline Estimate

| Phase | Duration | Tasks |
|-------|----------|-------|
| **Phase 1: Setup** | 2-3 hours | Install component, test in isolation, configure API |
| **Phase 2: Implementation** | 4-5 hours | Build SmartLink, update Projects/Docs/Footer/Contact |
| **Phase 3: Polish** | 3-4 hours | Accessibility, performance, design refinement, QA |
| **Phase 4: Deploy** | 1-2 hours | Replace placeholders, deploy, monitor |
| **Total** | **10-14 hours** | Full integration, testing, and deployment |

---

## Support & Resources

**Aceternity UI Docs:**
- Link Preview Component: https://ui.aceternity.com/components/link-preview
- Installation Guide: https://ui.aceternity.com/docs/installation

**Microlink API:**
- Documentation: https://microlink.io/docs/api/getting-started/overview
- SDK: https://microlink.io/docs/sdk/getting-started/overview
- Pricing: https://microlink.io/pricing (Free: 50 req/day, Pro: 10k req/month @ $19)

**Alternative Preview Services:**
- OpenGraph.io: https://www.opengraph.io/
- LinkPreview: https://www.linkpreview.net/
- Self-hosted: https://github.com/microlinkhq/metascraper

**Accessibility:**
- WCAG 2.2 AA: https://www.w3.org/WAI/WCAG22/quickref/
- Tooltips: https://inclusive-components.design/tooltips-toggletips/
- Focus Management: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/

**Performance:**
- Core Web Vitals: https://web.dev/vitals/
- Intersection Observer: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- Next.js Dynamic Imports: https://nextjs.org/docs/advanced-features/dynamic-import

---

## Conclusion

This integration plan provides a **production-ready roadmap** for adding Aceternity UI Link Preview to your portfolio. The `SmartLink` component offers:

- **Automatic detection** of external vs internal links
- **Tasteful hover/tap previews** without cluttering the UI
- **Performance optimization** via lazy loading and caching
- **Full accessibility compliance** (WCAG 2.2 AA)
- **Zero layout shift** (CLS < 0.02)

**Next Steps:**
1. Resolve [ASK] items (API choice, design tokens, rate limits)
2. Replace [ADD LINK] placeholders with actual URLs
3. Install Aceternity component and test in isolation
4. Implement SmartLink and update pages per Phase 2
5. QA and deploy per Phases 3-4

**Estimated completion:** 10-14 hours (1-2 sprints)

---

**Document Version:** 1.0
**Last Updated:** October 17, 2025
**Author:** AI Senior Front-End Engineer
**Status:** ✅ Ready for Implementation
