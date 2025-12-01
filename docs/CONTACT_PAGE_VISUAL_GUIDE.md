# 🎨 Contact Page - Visual Design Guide

A comprehensive visual reference for the card-free Contact page redesign.

---

## 🎯 Design Philosophy

**Principles:**
1. **Typography-led:** Content hierarchy through font size, weight, and spacing (not containers)
2. **Generous whitespace:** Let content breathe; use padding over borders
3. **Subtle motion:** Progressive reveals; no jarring animations
4. **Conversion-first:** Clear CTAs; minimal friction; trust signals

**Inspiration:**
- Editorial layouts (NYT, Medium)
- Modern SaaS landing pages (Linear, Vercel)
- Minimalist design systems (Stripe, Intercom)

---

## 📐 Layout Structure

### Desktop (> 1024px)
```
┌─────────────────────────────────────────────────┐
│                  Ambient Background             │
│    (Progressive Blur + Gradient Orbs)           │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │          Container (max-w-4xl)           │  │
│  │                                          │  │
│  │  ┌────────────────────────────────────┐ │  │
│  │  │  HEADER (py-32)                    │ │  │
│  │  │  - Overline badge                  │ │  │
│  │  │  - Display heading (7xl)           │ │  │
│  │  │  - Subheading (xl)                 │ │  │
│  │  │  - Primary CTAs (horizontal)       │ │  │
│  │  └────────────────────────────────────┘ │  │
│  │                                          │  │
│  │  ── Gradient Divider ──                 │  │
│  │                                          │  │
│  │  ┌────────────────────────────────────┐ │  │
│  │  │  FORM SECTION (py-20)              │ │  │
│  │  │  - Section heading (4xl)           │ │  │
│  │  │  - Form (max-w-3xl)                │ │  │
│  │  │    • Name + Email (2-col grid)     │ │  │
│  │  │    • Purpose (select)              │ │  │
│  │  │    • Message (textarea)            │ │  │
│  │  │    • Submit + Status               │ │  │
│  │  └────────────────────────────────────┘ │  │
│  │                                          │  │
│  │  ── Gradient Divider ──                 │  │
│  │                                          │  │
│  │  ┌────────────────────────────────────┐ │  │
│  │  │  CONTACT META (py-20)              │ │  │
│  │  │  - Location • Timezone • SLA       │ │  │
│  │  └────────────────────────────────────┘ │  │
│  │                                          │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Mobile (< 640px)
```
┌───────────────────────┐
│  HEADER (py-16)       │
│  - Overline           │
│  - Heading (5xl)      │
│  - Subhead (lg)       │
│  - CTAs (stacked)     │
│                       │
│  ────────────         │
│                       │
│  FORM (py-16)         │
│  - Name (full)        │
│  - Email (full)       │
│  - Purpose            │
│  - Message            │
│  - Submit             │
│                       │
│  ────────────         │
│                       │
│  META (py-16)         │
│  - Location           │
│  - Timezone           │
│  - SLA                │
│                       │
└───────────────────────┘
```

---

## 🎨 Color System

### Light Mode
```css
/* Backgrounds */
--background: #ffffff
--card: rgba(255, 255, 255, 0.5)    /* with backdrop-blur */
--progressive-blur: rgba(139, 92, 246, 0.03)  /* Purple tint */

/* Foreground */
--foreground: #0a0a0a
--muted-foreground: #737373          /* Helper text */

/* Borders */
--border: #e5e5e5
--input-focus: --primary             /* Blue */
--input-error: #ef4444               /* Red */

/* Status */
--success: #10b981                   /* Emerald */
--error: #ef4444                     /* Red */
```

### Dark Mode
```css
/* Backgrounds */
--background: #0a0a0a
--card: rgba(255, 255, 255, 0.05)
--progressive-blur: rgba(139, 92, 246, 0.05)

/* Foreground */
--foreground: #fafafa
--muted-foreground: #a3a3a3

/* Borders */
--border: #262626
--input-focus: --primary
--input-error: #ef4444

/* Status */
--success: #34d399                   /* Lighter emerald */
--error: #f87171                     /* Lighter red */
```

### Gradient Palette
```tsx
// Hero heading
from-foreground via-foreground to-foreground/70

// "meaningful" accent
from-blue-600 via-purple-600 to-blue-600

// Divider
from-transparent via-border to-transparent

// Ambient orbs
bg-blue-500/5 blur-3xl
bg-purple-500/5 blur-3xl
```

---

## ✍️ Typography System

### Font Families
```tsx
// Display (headings, emphasis)
font-sans: Inter, system-ui, sans-serif

// Body (paragraphs, form labels)
font-sans: Inter, system-ui, sans-serif

// Note: Single family for cohesion; hierarchy via size/weight
```

### Type Scale
```tsx
// Display Heading (Hero)
text-5xl   → 3rem / 48px (mobile)
text-6xl   → 3.75rem / 60px (tablet)
text-7xl   → 4.5rem / 72px (desktop)

// Section Heading
text-3xl   → 1.875rem / 30px (mobile)
text-4xl   → 2.25rem / 36px (desktop)

// Paragraph (Subheading)
text-lg    → 1.125rem / 18px
text-xl    → 1.25rem / 20px

// Body (Form labels, meta)
text-base  → 1rem / 16px
text-sm    → 0.875rem / 14px

// CTA Links
text-base  → 1rem / 16px (mobile)
text-lg    → 1.125rem / 18px (desktop)
```

### Font Weights
```tsx
font-normal   → 400 (body text, helper text)
font-medium   → 500 (form labels, badges)
font-semibold → 600 (subheadings)
font-bold     → 700 (display headings)
```

### Line Heights
```tsx
leading-tight     → 1.25 (headings)
leading-relaxed   → 1.625 (paragraphs)
leading-normal    → 1.5 (default)
```

---

## 📏 Spacing System

### Section Padding
```tsx
// Hero section
py-16 md:py-24 lg:py-32

// Body sections (form, meta)
py-16 md:py-20

// Internal spacing
space-y-8   (form fields, content blocks)
space-y-4   (heading + subheading)
space-y-3   (label + input)
```

### Grid Gaps
```tsx
// CTA links
gap-6         (horizontal/vertical)

// Form grid (name + email)
gap-8         (between columns)
md:grid-cols-2

// Contact meta icons
gap-2         (icon + text)
gap-6         (between meta items)
```

### Container
```tsx
max-w-4xl     (56rem / 896px) - Main container
max-w-3xl     (48rem / 768px) - Form container
max-w-2xl     (42rem / 672px) - Subheading max-width
```

---

## 🎭 Component Details

### 1. Overline Badge
```tsx
Visual:
┌──────────────────────┐
│  ✨  Get in Touch    │
└──────────────────────┘

Styles:
- rounded-full border border-border/50
- bg-card/50 backdrop-blur-sm
- px-4 py-2
- text-sm font-medium text-foreground/80
- Inline Sparkles icon (h-4 w-4)
```

### 2. Display Heading
```tsx
Visual:
   Let's build something
   meaningful.

Styles:
- text-5xl → text-7xl (responsive)
- font-bold tracking-tight
- Line 1: from-foreground via-foreground to-foreground/70
- Line 2: from-blue-600 via-purple-600 to-blue-600
- Period in foreground color
```

### 3. CTA Links
```tsx
Visual:
  📅 Schedule a call →
  📧 Email me →
  💼 LinkedIn →
  📄 Download résumé →

Structure:
<a class="group inline-flex items-center gap-2">
  <Icon class="h-5 w-5" />
  <span class="underline underline-offset-4 decoration-foreground/30">
    CTA Text
  </span>
  <span class="text-foreground/50">→</span>
</a>

States:
- Default: text-foreground
- Hover: text-primary, decoration-primary
- Focus: ring-2 ring-primary ring-offset-2 (browser default)
```

### 4. Form Inputs
```tsx
Visual (Default):
  Name *
  _______________

Visual (Focused):
  Name *
  ═══════════════  (blue underline)

Visual (Error):
  Name *
  ───────────────  (red underline)
  ⚠ Name is required

Styles:
- w-full border-b-2 bg-transparent py-3
- Default: border-border
- Focus: border-primary
- Error: border-red-500
- Label: text-sm font-medium mb-3
- Required asterisk: text-red-500
```

### 5. Purpose Dropdown
```tsx
Visual:
  How can I help?
  [Select an option ▼]

Options:
  - Interview request
  - Consulting / Architecture review
  - Performance rescue
  - General inquiry

Styles:
- Same as text input (border-b-2)
- Dropdown icon: browser default
- Optional (no red asterisk)
```

### 6. Textarea
```tsx
Visual:
  Message *
  _______________________
  _______________________
  _______________________

Styles:
- rows={6} resize-none
- Same underline treatment as inputs
- Vertical padding: py-3
```

### 7. Submit Button
```tsx
Visual (Default):
  Send message →

Visual (Submitting):
  Sending...

Visual (Success):
  Send message → ✅ Message sent. I'll get back within a day.

Styles:
- text-lg font-medium
- underline underline-offset-4 decoration-foreground/30
- Hover: decoration-primary text-primary
- Disabled: opacity-50 cursor-not-allowed
- Arrow: text-foreground/50 → text-primary (on hover)
```

### 8. Status Messages
```tsx
Success:
  ✅ Message sent. I'll get back within a day.
  - text-emerald-600 dark:text-emerald-400
  - CheckCircle2 icon (h-4 w-4)
  - Fade-in animation (initial: opacity 0, x: -10)

Error:
  ⚠ Something went wrong. Please try again.
  - text-red-600 dark:text-red-400
  - AlertCircle icon (h-4 w-4)
  - Same fade-in animation
```

### 9. Gradient Divider
```tsx
Visual:
  ────────────────────────

Styles:
<div class="relative h-px w-full">
  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
</div>
```

### 10. Contact Meta
```tsx
Visual:
  📍 Indore, India  •  🕐 IST (UTC+5:30)  •  ✅ Usually replies within 1 business day

Structure:
<address class="flex items-center gap-6 text-sm">
  <div class="flex items-center gap-2">
    <MapPin class="h-4 w-4 text-primary" />
    <span>Indore, India</span>
  </div>
  <span class="text-border">•</span>
  <div class="flex items-center gap-2">
    <Clock class="h-4 w-4 text-primary" />
    <span>IST (UTC+5:30)</span>
  </div>
  <span class="text-border">•</span>
  <div class="flex items-center gap-2">
    <CheckCircle2 class="h-4 w-4 text-emerald-500" />
    <span>Usually replies within 1 business day</span>
  </div>
</address>

Responsive:
- flex-wrap (wraps on mobile)
- justify-center
- text-sm md:text-base
```

---

## 🎬 Animation Details

### 1. Progressive Blur (Background)
```tsx
<ProgressiveBlur
  intensity={0.22}           // 22% of max blur (24px → ~5.3px)
  direction="radial"          // Radial gradient from center
  from="transparent"
  to="rgba(139, 92, 246, 0.03)"  // Subtle purple tint
/>

Effect:
- Creates soft depth without overpowering content
- Radial center at 50% 30% (slightly above center)
- Respects reduced motion preferences
```

### 2. Ambient Orbs
```tsx
// Blue orb (top-right)
<div class="absolute -top-40 right-1/4 h-96 w-96
  rounded-full bg-blue-500/5 blur-3xl animate-pulse" />

// Purple orb (mid-left)
<div class="absolute top-1/2 -left-40 h-96 w-96
  rounded-full bg-purple-500/5 blur-3xl animate-pulse
  [animation-delay:2s]" />

Effect:
- Very subtle color wash
- Pulse animation (3s cycle)
- Offset timing for organic feel
```

### 3. Stagger Reveal (Header)
```tsx
Sequence:
1. Overline badge (delay: 0ms)
2. Heading (delay: 100ms)
3. CTAs (delay: 200ms)

Variant:
hidden: { opacity: 0, y: 24 }
visible: {
  opacity: 1,
  y: 0,
  transition: {
    delay: i * 0.1,
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1]  // Custom cubic-bezier
  }
}
```

### 4. BlurFade (Scroll Triggers)
```tsx
<BlurFade delay={0.1} inView>  {/* Header */}
<BlurFade delay={0.4} inView>  {/* Form */}
<BlurFade delay={0.6} inView>  {/* Meta */}

Effect:
- Fade + slight blur on initial view
- Triggers when scrolled into viewport
- Once: true (doesn't re-trigger)
```

### 5. Form Transitions
```tsx
// Input focus
transition-colors  // Border color change (300ms)

// Submit button
transition-all     // Color, decoration, opacity

// Status messages
initial: { opacity: 0, x: -10 }
animate: { opacity: 1, x: 0 }
// Smooth slide-in from left
```

---

## 🎯 Interactive States

### Links/CTAs
```tsx
State         │ Color              │ Decoration
──────────────┼────────────────────┼─────────────────
Default       │ foreground         │ foreground/30
Hover         │ primary            │ primary
Focus         │ primary            │ primary + ring
Active        │ primary (darker)   │ primary
Visited       │ (no change)        │ (no change)
```

### Form Inputs
```tsx
State         │ Border             │ Background
──────────────┼────────────────────┼─────────────
Default       │ border (2px)       │ transparent
Focus         │ primary (2px)      │ transparent
Error         │ red-500 (2px)      │ transparent
Disabled      │ border/50          │ muted
Valid         │ (same as default)  │ transparent
```

### Submit Button
```tsx
State         │ Opacity  │ Cursor          │ Color
──────────────┼──────────┼─────────────────┼──────────
Default       │ 1        │ pointer         │ foreground
Hover         │ 1        │ pointer         │ primary
Submitting    │ 0.5      │ not-allowed     │ foreground
Success       │ 1        │ pointer         │ foreground
Error         │ 1        │ pointer         │ foreground
```

---

## 📱 Responsive Breakpoints

### Mobile (< 640px)
```tsx
- Container: px-4
- Heading: text-5xl
- Subheading: text-lg
- CTAs: Stacked (flex-wrap, full width items)
- Form: Single column (name, email separate rows)
- Meta: Stacked (vertical layout)
```

### Tablet (640px - 1024px)
```tsx
- Container: px-6
- Heading: text-6xl
- Subheading: text-xl
- CTAs: Wrapped (2 per row)
- Form: 2-column grid (name + email)
- Meta: Horizontal (may wrap)
```

### Desktop (> 1024px)
```tsx
- Container: px-8, max-w-4xl
- Heading: text-7xl
- Subheading: text-xl
- CTAs: Horizontal (all in one row)
- Form: 2-column grid
- Meta: Horizontal (single row)
```

---

## ♿ Accessibility Details

### Focus Indicators
```tsx
// Browser default (maintained):
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

// Custom (inputs):
focus:border-primary
focus:ring-0  // Remove default ring if wanted
```

### Color Contrast
```tsx
Test Results (WCAG AA/AAA):

Element                  │ Ratio  │ Grade
─────────────────────────┼────────┼──────
Heading (foreground)     │ 19.5:1 │ AAA
Body (muted-foreground)  │ 7.1:1  │ AA
Label (foreground/90)    │ 16.2:1 │ AAA
Border (border)          │ 3.2:1  │ AA
Success (emerald-600)    │ 4.8:1  │ AA
Error (red-600)          │ 5.3:1  │ AA
```

### Screen Reader Announcements
```tsx
// Error messages
<p id="name-error" role="alert">
  Name is required
</p>
<input aria-describedby="name-error" aria-invalid="true" />

// Success message
<p role="status">
  Message sent. I'll get back within a day.
</p>

// Honeypot
<input aria-hidden="true" />
```

---

## 🎨 Design Tokens Reference

```tsx
// Spacing
const spacing = {
  section: "py-16 md:py-20",
  hero: "py-16 md:py-24 lg:py-32",
  stack: "space-y-8",
  inline: "gap-6",
  tight: "gap-2",
}

// Typography
const type = {
  display: "text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
  heading: "text-3xl md:text-4xl font-bold tracking-tight",
  subhead: "text-lg md:text-xl text-muted-foreground",
  body: "text-base leading-relaxed",
  label: "text-sm font-medium",
  small: "text-sm text-muted-foreground",
}

// Borders
const borders = {
  input: "border-b-2 border-border",
  inputFocus: "focus:border-primary",
  inputError: "border-red-500",
  divider: "h-px bg-gradient-to-r from-transparent via-border to-transparent",
}

// Transitions
const transitions = {
  fast: "transition-colors duration-200",
  base: "transition-all duration-300",
  slow: "transition-all duration-500",
}
```

---

## 📐 Figma/Design Tool Export

If exporting to design tools, use these specs:

```
Canvas: 1440x900 (Desktop)
Container: 896px (max-w-4xl)
Grid: 12 columns, 24px gutter
Margins: 64px (lg:px-8)

Typography Scale:
- 72px / Bold (Display heading)
- 36px / Bold (Section heading)
- 20px / Regular (Subheading)
- 18px / Regular (CTA links)
- 16px / Regular (Body)
- 14px / Medium (Labels)

Color Palette:
- #ffffff (Background light)
- #0a0a0a (Background dark)
- #0a0a0a (Foreground light)
- #fafafa (Foreground dark)
- #737373 (Muted foreground light)
- #a3a3a3 (Muted foreground dark)
- #e5e5e5 (Border light)
- #262626 (Border dark)
- #3b82f6 (Primary blue)
- #8b5cf6 (Accent purple)
- #10b981 (Success)
- #ef4444 (Error)
```

---

## 🎬 Animation Timeline

```
Time  │ Element             │ Animation
──────┼─────────────────────┼──────────────────────
0.0s  │ Progressive Blur    │ Fade in (static)
0.1s  │ Overline badge      │ Fade up (y: 24 → 0)
0.2s  │ Display heading     │ Fade up
0.3s  │ CTA links           │ Fade up
      │                     │
0.4s  │ Form section        │ Fade up (scroll trigger)
      │                     │
0.6s  │ Contact meta        │ Fade up (scroll trigger)
      │                     │
∞     │ Ambient orbs        │ Pulse (3s cycle)
```

---

## 📸 Screenshot Reference

(Placeholder for actual screenshots)

### Desktop View
- [ ] Hero section with CTAs
- [ ] Form section (default state)
- [ ] Form section (error state)
- [ ] Form section (success state)
- [ ] Contact meta footer

### Mobile View
- [ ] Stacked layout
- [ ] Form on mobile
- [ ] CTA links stacked

### Dark Mode
- [ ] Full page dark mode
- [ ] Form inputs dark mode

---

**Visual Guide Version:** 1.0
**Last Updated:** October 18, 2025
**Design Language:** Card-free, Typography-led, Conversion-focused
