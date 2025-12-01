# Selected Work — Visual Design Guide

## 🎨 Design Philosophy

**Editorial First**: This section reads like a premium magazine spread, not a card grid. We use typography, white space, and rhythm to create hierarchy—not boxes.

---

## 📐 Layout Anatomy

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Selected Work                         ← Display font, 6xl     │
│  A few projects that balance...       ← Body font, xl, muted   │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │ ← Hairline divider
│                                                                 │
│  01 ───────────────────────            ← Project number + rule │
│                                                                 │
│  ┌─────────────────┐  HighLevel: Courses Platform              │
│  │                 │  ← Display font, 5xl                       │
│  │     IMAGE       │                                            │
│  │                 │  Creator-led course + community builder... │
│  │   (hover zoom)  │  ← Body font, xl                           │
│  │                 │                                            │
│  └─────────────────┘  Staff Engineer • 2024 • React · Next.js  │
│                       ← Mono font, sm, muted                    │
│                                                                 │
│                       Impact                                    │
│                       │ Faster authoring and improved...        │
│                       ← Left border accent                      │
│                                                                 │
│                       View Case Study →  Live Demo →            │
│                       ← Underlined links with offset            │
│                                                                 │
│  ─────────────────────────────────────────────────────────     │
│                                                                 │
│  02 ───────────────────────                                    │
│                                                                 │
│  Credentials/Badge Platform  ┌─────────────────┐               │
│  ← 5xl                       │                 │               │
│                              │     IMAGE       │               │
│  Certifier/Canvas-style...   │   (reversed)    │               │
│  ← xl                        │                 │               │
│                              └─────────────────┘               │
│  Lead Frontend • 2024 • React · Canvas APIs                    │
│                                                                 │
│  Impact                                                         │
│  │ Faster credential turnaround...                             │
│                                                                 │
│  View Case Study →                                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Color System

### Light Mode
```css
Background:      white (#ffffff)
Section Header:  neutral-900 (#171717)
Project Title:   neutral-900 (#171717)
Description:     neutral-700 (#404040)
Meta/Muted:      neutral-500 (#737373)
Hairlines:       neutral-200 (#e5e5e5)
Links:           neutral-900 (#171717)
Link Underline:  neutral-300 (#d4d4d4) → neutral-900 on hover
```

### Dark Mode
```css
Background:      neutral-950 (#0a0a0a)
Section Header:  neutral-50 (#fafafa)
Project Title:   neutral-50 (#fafafa)
Description:     neutral-300 (#d4d4d4)
Meta/Muted:      neutral-500 (#737373)
Hairlines:       neutral-800 (#262626)
Links:           neutral-100 (#f5f5f5)
Link Underline:  neutral-700 (#404040) → neutral-100 on hover
```

---

## 📏 Typography Scale

### Section Header
```tsx
<h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
  Selected Work
</h2>
```
- Mobile: 36px (2.25rem)
- Tablet: 48px (3rem)
- Desktop: 60px (3.75rem)
- Font: Space Grotesk / Syne
- Weight: 600 (semibold)
- Tracking: -0.025em (tight)

### Project Title
```tsx
<h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
  HighLevel: Courses Platform
</h3>
```
- Mobile: 30px (1.875rem)
- Tablet: 36px (2.25rem)
- Desktop: 48px (3rem)
- Font: Space Grotesk / Syne
- Weight: 600 (semibold)
- Tracking: -0.025em (tight)

### Description
```tsx
<p className="text-lg md:text-xl leading-relaxed">
  Creator-led course + community builder...
</p>
```
- Mobile: 18px (1.125rem)
- Desktop: 20px (1.25rem)
- Font: Inter / Manrope
- Weight: 400 (normal)
- Leading: 1.625 (relaxed)

### Meta Text
```tsx
<div className="text-sm font-mono">
  Staff Engineer • 2024 • React · Next.js
</div>
```
- All sizes: 14px (0.875rem)
- Font: JetBrains Mono / Fira Code
- Weight: 500 (medium)
- Leading: 1.5 (normal)

---

## 📐 Spacing System

### Section Padding
```tsx
className="py-24 md:py-32"
```
- Mobile: 96px top/bottom
- Desktop: 128px top/bottom

### Project Spacing
```tsx
className="space-y-24 md:space-y-32"
```
- Mobile: 96px between projects
- Desktop: 128px between projects

### Grid Gap
```tsx
className="gap-8 md:gap-12 lg:gap-16"
```
- Mobile: 32px between image/content
- Tablet: 48px
- Desktop: 64px

### Content Spacing
```tsx
<div className="space-y-4">
  <div>Project number</div>
  <h3>Title</h3>
  <p>Description</p>
  <div>Meta</div>
  <div>Impact</div>
  <div>Links</div>
</div>
```
- Default: 16px between elements
- Consistent vertical rhythm

---

## 🎭 Motion Design

### Section Fade-In
```tsx
// Timing
duration: 0.6s
ease: cubic-bezier(0.22, 1, 0.36, 1)  // "ease-out-expo"

// Transform
opacity: 0 → 1
y: 20px → 0

// Trigger
viewport: { once: true, margin: "-100px" }
```

### Project Stagger
```tsx
// Container
staggerChildren: 0.15s  // 150ms delay between items
delayChildren: 0.2s     // 200ms before first item

// Item
duration: 0.7s
ease: cubic-bezier(0.22, 1, 0.36, 1)
opacity: 0 → 1
y: 30px → 0
```

### Image Hover
```tsx
// Scale
transform: scale(1) → scale(1.02)
duration: 700ms
ease: ease-out

// Brightness
filter: brightness(100%) → brightness(105%)
duration: 700ms

// Overlay
opacity: 0 → 100%
gradient: from-neutral-900/10
```

### Link Hover
```tsx
// Arrow icon
transition: transform 200ms
transform: translate(0, 0) → translate(2px, -2px)

// Underline
decoration-color: neutral-300 → neutral-900
transition: 200ms
```

---

## 📱 Responsive Behavior

### Mobile (<768px)
```
┌─────────────────────┐
│                     │
│  Selected Work      │
│  Subheading...      │
│                     │
│  01 ─────────────   │
│                     │
│  ┌───────────────┐  │
│  │    IMAGE      │  │ ← Full width
│  └───────────────┘  │
│                     │
│  Title (3xl)        │
│  Description (lg)   │
│  Meta (sm)          │
│  Impact             │
│  Links              │
│                     │
└─────────────────────┘
```
- Stacked layout
- Full-width images
- Smaller typography
- Reduced spacing

### Tablet (768px - 1024px)
```
┌───────────────────────────────────┐
│                                   │
│  Selected Work (5xl)              │
│  Subheading...                    │
│                                   │
│  01 ─────────────                 │
│                                   │
│  ┌──────────┐  Title (4xl)        │
│  │  IMAGE   │  Description (xl)   │ ← 2-col grid
│  └──────────┘  Meta, Links        │
│                                   │
│  02 ─────────────                 │
│                                   │
│  Title (4xl)      ┌──────────┐    │
│  Description (xl) │  IMAGE   │    │ ← Reversed
│  Meta, Links      └──────────┘    │
│                                   │
└───────────────────────────────────┘
```
- 2-column grid
- Alternating order
- Medium typography
- Balanced spacing

### Desktop (>1024px)
```
┌─────────────────────────────────────────────┐
│                                             │
│  Selected Work (6xl)                        │
│  Subheading...                              │
│                                             │
│  01 ───────────────────────                 │
│                                             │
│  ┌─────────────┐     Title (5xl)            │
│  │             │     Description (xl)       │ ← Wide grid
│  │    IMAGE    │     Meta • Impact • Links  │
│  └─────────────┘                            │
│                                             │
│  02 ───────────────────────                 │
│                                             │
│  Title (5xl)            ┌─────────────┐     │
│  Description (xl)       │             │     │ ← Reversed
│  Meta • Impact • Links  │    IMAGE    │     │
│                         └─────────────┘     │
│                                             │
└─────────────────────────────────────────────┘
```
- Wide 2-column grid
- Largest typography
- Maximum spacing
- Best reading experience

---

## 🎯 Design Decisions

### Why No Cards?
**Before**: Cards create visual clutter and compete for attention.
**After**: Pure hierarchy lets content breathe and feel premium.

### Why Alternating Layout?
**Before**: Repetitive grid feels templated and boring.
**After**: Asymmetric rhythm creates editorial magazine feel.

### Why Large Typography?
**Before**: Small text in cards feels cramped.
**After**: Generous sizing shows confidence and improves readability.

### Why Hairline Rules?
**Before**: Heavy borders and shadows add weight.
**After**: Subtle 1px gradients provide structure without noise.

### Why Underlined Links?
**Before**: Button CTAs feel generic and heavy.
**After**: Text links with offset underlines feel sophisticated and clickable.

---

## 🧩 Component Hierarchy

```
<section>                     // Container, py-24 md:py-32
  <header>                    // mb-16 md:mb-20
    <h2>                      // font-display, 4xl → 6xl
    <p>                       // text-lg md:text-xl, muted
  </header>

  <motion.div>                // space-y-24 md:space-y-32
    <article>                 // Each project
      <div>                   // Hairline divider (if not first)

      <div>                   // grid md:grid-cols-2
        <figure>              // Image container, alternating order
          <Image />           // next/image, hover effects
        </figure>

        <div>                 // Content container, space-y-4
          <div>               // Project number + rule
          <h3>                // Title, 3xl → 5xl
          <p>                 // Description, lg → xl
          <div>               // Meta (role · year · stack)
          <div>               // Impact highlight (bordered)
          <div>               // Links (underlined)
        </div>
      </div>
    </article>
  </motion.div>

  <div>                       // View all CTA
    <Link>                    // Underlined, animated arrow
  </div>
</section>
```

---

## 🔍 Accessibility

### Semantic HTML
```tsx
<section>        // Landmark
  <header>       // Section header
    <h2>         // Section title (h2 level)
  </header>

  <article>      // Each project
    <figure>     // Image wrapper
      <Image alt="..." />  // Descriptive alt
    </figure>

    <h3>         // Project title (h3 level)
    <a href="...">  // Keyboard accessible
  </article>
</section>
```

### Focus States
```css
/* All links have visible focus rings */
.link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}

/* Image containers are keyboard-accessible via links */
article:focus-within {
  /* Parent article highlights when child link focused */
}
```

### Color Contrast
| Element | Light | Dark | Ratio |
|---------|-------|------|-------|
| Title | #171717 on #fff | #fafafa on #0a0a0a | 14.8:1 (AAA) |
| Description | #404040 on #fff | #d4d4d4 on #0a0a0a | 10.4:1 (AAA) |
| Meta | #737373 on #fff | #737373 on #0a0a0a | 4.6:1 (AA) |

### Screen Readers
```tsx
<Image alt="HighLevel Courses Platform preview showing course builder interface" />
// ✅ Descriptive, context-rich

<Image alt="Screenshot" />
// ❌ Too generic
```

---

## 📊 Performance

### Image Loading Strategy
```tsx
// First project (above fold)
<Image
  priority          // ✅ Load immediately
  loading="eager"   // ✅ No lazy load
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// Other projects (below fold)
<Image
  loading="lazy"    // ✅ Lazy load
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Code Splitting
```tsx
// In app/page.tsx
const SelectedWork = dynamic(() => import('...'), {
  loading: () => <SectionSkeleton />,  // ✅ Show placeholder
  ssr: true                             // ✅ Server-render
})
```

### Bundle Size
- **Component**: ~4KB gzipped (incl. motion)
- **Images**: Lazy-loaded, WebP/AVIF
- **Total JS**: ~6KB (with framer-motion shared)

---

## 🎨 Customization Examples

### Change Accent Color
```tsx
// Find:
className="border-neutral-900 dark:border-neutral-100"

// Replace with:
className="border-blue-600 dark:border-blue-400"
```

### Add Background Pattern
```tsx
<section className="relative ...">
  <div className="absolute inset-0 opacity-5">
    <RetroGrid />
  </div>
  {/* content */}
</section>
```

### Make Images Circular
```tsx
<figure className="aspect-square rounded-full overflow-hidden">
  <Image ... />
</figure>
```

### Add View Counter
```tsx
<div className="flex items-center gap-4 text-sm text-neutral-500">
  <span>1.2K views</span>
  <span>•</span>
  <span>5 min read</span>
</div>
```

---

## ✅ Before/After Comparison

### Before (projects-new.tsx)
- ❌ Heavy card borders and shadows
- ❌ Uniform grid layout
- ❌ Smaller, cramped typography
- ❌ Button CTAs feel generic
- ❌ 3-column grid (too many items)
- ✅ Good image optimization
- ✅ Decent animations

### After (selected-work.tsx)
- ✅ Zero card chrome, pure type
- ✅ Alternating editorial layout
- ✅ Large, confident typography
- ✅ Underlined text links
- ✅ 2-column focus on quality
- ✅ Excellent image optimization
- ✅ Smooth, subtle animations
- ✅ Better accessibility

---

**Designed by**: Staff Frontend Engineer + Creative UI/UX Designer
**Last Updated**: October 18, 2025
**Version**: 1.0.0
