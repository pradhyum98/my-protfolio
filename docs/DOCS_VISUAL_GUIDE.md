# Documentation Visual Guide

A visual walkthrough of the redesigned documentation experience.

---

## Layout Overview

### Desktop Layout (3 Columns)

```
┌─────────────────────────────────────────────────────────────┐
│                        HEADER                                │
│                    (with blur effect)                        │
└─────────────────────────────────────────────────────────────┘
│                                                               │
│  ┌─────────┬──────────────────────────────┬──────────────┐  │
│  │         │                               │              │  │
│  │ SIDEBAR │        MAIN CONTENT          │     TOC      │  │
│  │         │                               │              │  │
│  │ Docs    │  Breadcrumbs                 │  On this     │  │
│  │ ├─Home  │  ────────────────            │  page        │  │
│  │ ├─Typo  │                              │  • Intro     │  │
│  │ ├─Term  │  # Page Title                │  • Setup     │  │
│  │ └─...   │  Description here            │  • Usage     │  │
│  │         │                               │  • Examples  │  │
│  │ (sticky)│  Prose content...            │  (sticky)    │  │
│  │         │  - Editorial typography      │              │  │
│  │         │  - Generous whitespace       │  [Download]  │  │
│  │         │  - Readable measure          │              │  │
│  │         │                               │              │  │
│  │         │  ┌─────────────────────┐     │              │  │
│  │         │  │ Code Block          │     │              │  │
│  │         │  └─────────────────────┘     │              │  │
│  │         │                               │              │  │
│  │         │  <Callout>                   │              │  │
│  │         │  Info message                │              │  │
│  │         │  </Callout>                  │              │  │
│  │         │                               │              │  │
│  │         │  ┌────────┬────────┐         │              │  │
│  │         │  │ ← Prev │ Next → │         │              │  │
│  │         │  └────────┴────────┘         │              │  │
│  └─────────┴──────────────────────────────┴──────────────┘  │
│                                                               │
└───────────────────────────────────────────────────────────────┘

         3 cols         7 cols                2 cols
         (sidebar)      (content)             (toc)
```

### Mobile Layout (Stacked)

```
┌───────────────────────────┐
│   STICKY HEADER           │
│   ← Back    Download →    │
├───────────────────────────┤
│                           │
│   Sidebar (top)           │
│   ▼ Docs                  │
│   ▼ Homepage              │
│   ▼ Typography            │
│                           │
├───────────────────────────┤
│                           │
│   Main Content            │
│   Breadcrumbs             │
│   Title                   │
│   Description             │
│   ...                     │
│                           │
│   Prev/Next Nav           │
│                           │
└───────────────────────────┘
```

---

## Component Breakdown

### 1. Docs Index Page

**Header Section:**
```
Documentation
─────────────
Comprehensive guides, implementation details, and technical
references for every feature in this portfolio.

┌─────────────────────────────────────┐
│ 🔍 Search documentation...      ⌘K │
└─────────────────────────────────────┘
```

**Featured Section:**
```
★ Quick Starts
────────────────────────────────────────────
⎕ File Tree Quick Start              →
  Quick start guide for implementing...

⎕ Terminal Quick Start               →
  Get started with the interactive...

⎕ Homepage Quick Start               →
  Quick start guide for the new...
```

**Category Sections:**
```
⎕ Homepage (4)
────────────────────────────────────────────
  Homepage Quick Start              →
    Quick start guide for the new...

  Homepage Implementation Summary   →
    Detailed implementation...

  ...
```

### 2. Individual Doc Page

**Breadcrumbs:**
```
📄 Docs  ›  Typography  ›  Typography Quick Start
```

**Title Section:**
```
Typography Quick Start
──────────────────────────────────────────

Quick start guide for the typography system
```

**Content with Anchored Headings:**
```
## Getting Started    #

Hover over any heading to see the link icon
that appears on the left.
```

**Callout Component:**
```
╭─────────────────────────────────────╮
│ ℹ️  INFO                            │
│                                     │
│ This is an informational callout    │
│ with a blue accent border.          │
╰─────────────────────────────────────╯
```

**Code Block:**
```
╭─────────────────────────────────────╮
│ 📁 example.tsx              [Copy]  │
├─────────────────────────────────────┤
│ 1  const example = 'code';          │
│ 2  export default example;          │
╰─────────────────────────────────────╯
```

**Navigation Footer:**
```
┌────────────────────┬────────────────────┐
│ ← PREVIOUS         │         NEXT →     │
│ Typography System  │ Typography Audit   │
│ Complete docs...   │ Detailed audit...  │
└────────────────────┴────────────────────┘
```

---

## Typography Scale

```
H1: 48px / 56px (3rem / 3.5rem) — Page title
    Bold, tight tracking

H2: 36px / 42px (2.25rem / 2.625rem) — Major section
    Bold, border-bottom

H3: 30px / 36px (1.875rem / 2.25rem) — Subsection
    Semibold

H4: 24px / 30px (1.5rem / 1.875rem) — Minor heading
    Semibold

Body: 18px / 30px (1.125rem / 1.875rem) — Content
      Regular, comfortable line-height 1.67

Small: 14px / 21px (0.875rem / 1.3125rem) — Captions
       Regular, line-height 1.5
```

---

## Color System

**Light Mode:**
```
Background:    #ffffff (pure white)
Foreground:    #171717 (near black)
Muted:         #737373 (gray)
Primary:       #8b5cf6 (purple)
Border:        #e5e5e5 (light gray)
Code BG:       #f5f5f5 (very light gray)
```

**Dark Mode:**
```
Background:    #0a0a0a (near black)
Foreground:    #ededed (off white)
Muted:         #a3a3a3 (light gray)
Primary:       #a78bfa (light purple)
Border:        #262626 (dark gray)
Code BG:       #171717 (dark gray)
```

---

## Interactive States

**Links:**
```
Default:  Underlined with 30% primary color
Hover:    Full primary color, 100% decoration
Focus:    Ring outline, accessible
Visited:  Slightly muted (documentation best practice)
```

**Sidebar Items:**
```
Default:  Muted foreground
Hover:    Background tint, foreground color
Active:   Primary background, primary text, left border
```

**TOC Items:**
```
Default:  Muted, transparent border
Hover:    Foreground, 50% primary border
Active:   Primary text, primary border
```

**Search Results:**
```
Default:  Transparent background
Hover:    Muted background tint
Click:    Navigate to doc
```

---

## Spacing System

**Vertical Rhythm:**
```
Headings:
  H1: mb-8 (2rem)
  H2: mb-6, mt-12 (1.5rem, 3rem)
  H3: mb-4, mt-8 (1rem, 2rem)
  H4: mb-3, mt-6 (0.75rem, 1.5rem)

Paragraphs: mb-6 (1.5rem)

Lists: my-6 (1.5rem vertical)
       space-y-2 (0.5rem between items)

Code Blocks: my-6 (1.5rem)

Callouts: my-6 (1.5rem)
```

**Container Spacing:**
```
Page padding:    py-12, px-4 (3rem, 1rem)
Section gap:     gap-8 lg:gap-12 (2rem, 3rem)
Content measure: max-w-5xl (80rem)
```

---

## Keyboard Shortcuts

```
⌘K / Ctrl+K    →  Focus search
Escape         →  Close search / modals
Tab            →  Navigate through links
Enter          →  Follow link / submit search
Arrow Keys     →  Scroll page (natural)
```

---

## Progressive Enhancements

1. **No JavaScript:**
   - All content is server-rendered
   - Links work without JS
   - Basic navigation functional

2. **With JavaScript:**
   - Search functionality
   - Smooth scrolling
   - TOC scrollspy
   - Copy code buttons
   - Link previews

3. **Modern Browsers:**
   - Backdrop blur effects
   - Progressive blur gradients
   - IntersectionObserver for scrollspy
   - Smooth transitions

---

## Responsive Breakpoints

```
Mobile:   < 1024px  (lg breakpoint)
  - Stacked layout
  - Sidebar at top
  - No TOC (content only)
  - Sticky mobile header

Desktop:  ≥ 1024px
  - 3-column grid
  - Sticky sidebar & TOC
  - Full navigation
  - Optimized for reading
```

---

## Accessibility Features

✅ **Semantic HTML**
- Proper heading hierarchy (h1 → h4)
- `<nav>`, `<aside>`, `<main>`, `<article>`
- ARIA landmarks

✅ **Keyboard Navigation**
- All interactive elements keyboard accessible
- Visible focus indicators
- Skip links (implicit via structure)

✅ **Screen Readers**
- `aria-current="page"` for active links
- `aria-label` for icon buttons
- Descriptive link text

✅ **Visual Accessibility**
- AA contrast minimum (4.5:1 for body)
- AAA for headings (7:1)
- No color-only indicators
- Focus visible

✅ **Motion Accessibility**
- Respects `prefers-reduced-motion`
- Smooth scrolling optional
- Transitions can be disabled

---

*This guide demonstrates the visual structure and design system of the redesigned documentation experience.*
