# Skills Page — Visual Design Guide

**Last Updated:** October 18, 2025
**Designer:** Staff-level Front-End Engineer + Creative UI/UX Designer
**Design System:** Typographically-led, Editorial, Motion-enhanced

---

## 🎨 Design Transformation

### Before: Card-Heavy Layout ❌

```
┌─────────────────────────────────────────┐
│  Skills & Tech Stack                    │
│  Technologies and competencies...       │
└─────────────────────────────────────────┘

┌──────────────────┬──────────────────────┐
│ ┌──────────────┐ │ ┌──────────────────┐ │
│ │ 🔷 Frontend  │ │ │ 🟢 Backend       │ │
│ │ Building...  │ │ │ Designing...     │ │
│ │              │ │ │                  │ │
│ │ [Badge] [Badge] │ │ [Badge] [Badge]  │ │
│ │ [Badge] [Badge] │ │ [Badge] [Badge]  │ │
│ └──────────────┘ │ └──────────────────┘ │
├──────────────────┼──────────────────────┤
│ ┌──────────────┐ │ ┌──────────────────┐ │
│ │ 🟣 Cloud     │ │ │ 🟠 Other         │ │
│ │ Deploying... │ │ │ Additional...    │ │
│ └──────────────┘ │ └──────────────────┘ │
└──────────────────┴──────────────────────┘
```

**Problems:**
- Too much visual chrome (borders, backgrounds)
- Generic badge pills
- Rigid 2x2 grid
- No visual hierarchy beyond containers
- Disconnected from portfolio design language

---

### After: Typography-First Editorial Layout ✅

```
┌─────────────────────────────────────────────────────────┐
│  ✨ TECHNICAL EXPERTISE                                 │
│                                                          │
│  Skills & Expertise.                                     │
│  (text-8xl, gradient, massive)                          │
│                                                          │
│  A collection of technical disciplines...               │
│  (text-2xl, muted)                                      │
└─────────────────────────────────────────────────────────┘

┌────────────────────┬────────────────────────────────────┐
│  Frontend          │  ● React                           │
│  ━━━━━━━━━━        │  ● Next.js                         │
│  (text-5xl)        │  ● TypeScript                      │
│                    │  ● React Native                    │
│  Building          │  ● Vue                             │
│  interactive...    │  ... (all items with left border)  │
│                    │                                     │
└────────────────────┴────────────────────────────────────┘

┌────────────────────┬────────────────────────────────────┐
│  Backend           │  ● Node.js                         │
│  ━━━━━━━━━━        │  ● Express                         │
│  (text-5xl)        │  ● Nest.js                         │
│                    │  ... (green gradient divider)      │
└────────────────────┴────────────────────────────────────┘

... (repeat for Cloud and Other)

┌─────────────────────────────────────────────────────────┐
│  Senior Competencies                                     │
│  ━━━━━━━━━━━━━━━━━━━━━━                                 │
│  (text-6xl + gradient divider)                          │
│                                                          │
│  Beyond code: architectural thinking...                 │
│                                                          │
│  ┌─────┐  ┌─────┐  ┌─────┐                             │
│  │  1  │  │  2  │  │  3  │                             │
│  │ ──  │  │ ──  │  │ ──  │                             │
│  │Title│  │Title│  │Title│                             │
│  │Desc │  │Desc │  │Desc │                             │
│  └─────┘  └─────┘  └─────┘                             │
│                                                          │
│  ┌─────┐  ┌─────┐  ┌─────┐                             │
│  │  4  │  │  5  │  │  6  │                             │
│  └─────┘  └─────┘  └─────┘                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  "                                                       │
│                                                          │
│  The best code is not the cleverest —                   │
│  it's the code that communicates intent clearly...      │
│  (italic, text-4xl, light weight)                       │
│                                                          │
│  ━━ Engineering philosophy                         "    │
└─────────────────────────────────────────────────────────┘
```

**Benefits:**
- Content is the hero
- Clear typographic hierarchy
- Professional editorial feel
- Matches portfolio design system
- Subtle motion enhances UX

---

## 📏 Layout Grid System

### Desktop (> 1024px)

```
┌─ Container (max-w-6xl) ───────────────────────────────┐
│  ┌─ Section ──────────────────────────────────────┐   │
│  │  ┌─ Grid [1fr_2fr] ─────────────────────────┐ │   │
│  │  │                  │                         │ │   │
│  │  │   Category       │   Skills List           │ │   │
│  │  │   Title (4xl)    │   ● Item 1 ← dot       │ │   │
│  │  │   ━━━━━━         │   ● Item 2             │ │   │
│  │  │   Description    │   ● Item 3             │ │   │
│  │  │                  │   ● Item 4             │ │   │
│  │  │   (33%)          │   (67%)                │ │   │
│  │  └──────────────────┴─────────────────────────┘ │   │
│  └────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────┘

Competencies:
┌─ Grid [1fr_1fr_1fr] ──────────────────────────────────┐
│  ┌───────┐   ┌───────┐   ┌───────┐                    │
│  │   1   │   │   2   │   │   3   │                    │
│  │ Title │   │ Title │   │ Title │                    │
│  │ Desc  │   │ Desc  │   │ Desc  │                    │
│  └───────┘   └───────┘   └───────┘                    │
│  ┌───────┐   ┌───────┐   ┌───────┐                    │
│  │   4   │   │   5   │   │   6   │                    │
│  └───────┘   └───────┘   └───────┘                    │
└────────────────────────────────────────────────────────┘
```

### Mobile (< 768px)

```
┌─ Single Column ──────────────┐
│  Category Title              │
│  ━━━━━━━━━━                  │
│                              │
│  Description text...         │
│                              │
│  ● Skill 1                   │
│  ● Skill 2                   │
│  ● Skill 3                   │
│  ● Skill 4                   │
│  ...                         │
└──────────────────────────────┘

┌─ Competencies Stack ─────────┐
│  ┌───────────────────────┐   │
│  │   1                   │   │
│  │   Title               │   │
│  │   Description         │   │
│  └───────────────────────┘   │
│  ┌───────────────────────┐   │
│  │   2                   │   │
│  └───────────────────────┘   │
│  ...                         │
└──────────────────────────────┘
```

---

## 🎨 Color Palette

### Background (Ambient Gradients)

```
Position       Color              Opacity    Effect
─────────────────────────────────────────────────────
Top Left       indigo-500         5%         blur-3xl
Middle Right   violet-500         5%         blur-3xl, delay 2s
Bottom Center  cyan-500           5%         blur-3xl, delay 4s
```

### Category Gradient Dividers

```
Category    Gradient From    To              Width   Height
──────────────────────────────────────────────────────────
Frontend    blue-500         transparent     4rem    0.25rem
Backend     green-500        transparent     4rem    0.25rem
Cloud       violet-500       transparent     4rem    0.25rem
Other       orange-500       transparent     4rem    0.25rem
```

### Accent Colors

```
Element                 Color           Usage
───────────────────────────────────────────────────────
Hero badge icon         violet-500      Sparkles icon
Main heading dot        violet-500      Punctuation accent
Skill item dot          primary/40      Default state
Skill item dot (hover)  primary         Hover state + scale
Border (default)        border/30       Skill item left border
Border (hover)          primary/60      Skill item hover
Number badge bg         primary/10      Competency badges
Number badge bg (hover) primary/20      Hover state
```

---

## 📐 Typography Scale

### Hierarchy Map

```
Element                    Size (Mobile → Desktop)           Weight
─────────────────────────────────────────────────────────────────────
Hero Badge                 text-sm                           medium
Hero Heading               text-5xl → text-8xl               bold
Hero Subheading            text-xl → text-2xl                normal
Category Title             text-4xl → text-5xl               bold
Category Description       text-base → text-lg               normal
Skill Item                 text-base → text-lg               medium
Competencies Heading       text-4xl → text-6xl               bold
Competencies Subheading    text-lg → text-xl                 normal
Competency Title           text-xl → text-2xl                semibold
Competency Description     text-base                         normal
Quote Text                 text-2xl → text-4xl               light (italic)
Quote Footer               text-sm                           normal
```

### Font Families

```typescript
// Display (headings)
font-sans // Inter/system default

// Body (descriptions, lists)
font-sans // Inter/system default

// Quotes
font-serif // Georgia/Times fallback for quote marks
```

---

## 🎭 Animation Timeline

### Page Load Sequence

```
Time    Component           Animation
────────────────────────────────────────────────────────
0.0s    [Page visible]      Initial state
0.1s    Hero Badge          BlurFade in
0.2s    Hero Heading        BlurFade in
0.25s   Hero Subheading     BlurFade in
[scroll]
0.3s    Skills Section      BlurFade in (scroll-trigger)
0.35s   Category 1          Fade + slide up
0.40s   ● Skill 1           Fade + slide left (stagger)
0.45s   ● Skill 2           Fade + slide left
0.50s   ● Skill 3           Fade + slide left
...
[scroll]
0.5s    Competencies        BlurFade in (scroll-trigger)
0.6s    Competency 1        Fade + slide up
0.7s    Competency 2        Fade + slide up (stagger)
0.8s    Competency 3        Fade + slide up
...
[scroll]
0.6s    Philosophy Quote    BlurFade in (scroll-trigger)
```

### Interaction States

#### Skill Item Hover
```
State       Border             Dot Scale    Dot Color     Duration
────────────────────────────────────────────────────────────────────
Default     border/30          1.0          primary/40    —
Hover       primary/60         1.5          primary       300ms ease
```

#### Competency Card Hover
```
State       Badge Scale    Badge BG        Duration
──────────────────────────────────────────────────────
Default     1.0            primary/10      —
Hover       1.1            primary/20      300ms ease
```

---

## 🧩 Component Anatomy

### Skill Item Structure

```tsx
<div className="group relative border-l-2 border-border/30 pl-6 py-2">
  {/* Decorative Dot */}
  <div className="absolute -left-[5px] top-1/2 -translate-y-1/2
                  h-2 w-2 rounded-full bg-primary/40
                  group-hover:bg-primary group-hover:scale-150" />

  {/* Skill Name */}
  <span className="text-base md:text-lg font-medium
                   text-foreground/90 group-hover:text-foreground">
    React
  </span>
</div>
```

Visual breakdown:
```
│ ← border-l-2 (border/30 → primary/60 on hover)
│
● ← dot (absolute, left -5px, scales 1.0 → 1.5)
  React ← text (medium weight, 90% → 100% opacity)
```

### Competency Card Structure

```tsx
<article className="group space-y-4">
  {/* Number Badge */}
  <div className="h-10 w-10 rounded-lg bg-primary/10
                  group-hover:scale-110 group-hover:bg-primary/20">
    <span className="text-lg font-bold">1</span>
  </div>

  {/* Content */}
  <div className="space-y-3">
    <h3 className="text-xl md:text-2xl font-semibold">
      Architecture for Modular Scale
    </h3>
    <p className="text-base text-muted-foreground">
      Micro‑frontends with Module Federation...
    </p>
  </div>
</article>
```

Visual breakdown:
```
┌─────────┐
│    1    │ ← Number badge (rounded, bg changes on hover)
└─────────┘

Title Text
(semibold, 2xl)

Description text in muted color
(base, normal weight)
```

---

## 🎯 Accessibility Features

### Semantic Structure

```html
<main>
  <section> ← Hero
    <h1>Skills & Expertise</h1>
    <p>Description</p>
  </section>

  <section> ← Skills Categories
    <div> ← Category 1
      <div>
        <h2>Frontend</h2>
        <p>Description</p>
      </div>
      <div> ← Skills list
        <div> ← Skill item (semantic div, could be <ul><li>)
          <span>React</span>
        </div>
      </div>
    </div>
  </section>

  <section> ← Competencies
    <h2>Senior Competencies</h2>
    <div> ← Grid container
      <article> ← Each competency
        <h3>Title</h3>
        <p>Description</p>
      </article>
    </div>
  </section>

  <section> ← Philosophy Quote
    <blockquote>
      <p>Quote text</p>
      <footer>Attribution</footer>
    </blockquote>
  </section>
</main>
```

### Contrast Ratios

```
Element                Light Mode    Dark Mode    WCAG Level
─────────────────────────────────────────────────────────────
Body text              4.5:1+        4.5:1+       AA
Headings               7:1+          7:1+         AAA
Muted text             4.5:1+        4.5:1+       AA
Interactive elements   4.5:1+        4.5:1+       AA
Gradient dividers      N/A           N/A          Decorative
```

### Motion Preferences

```typescript
// Framer Motion automatically respects:
@media (prefers-reduced-motion: reduce) {
  // All animations disabled or simplified
  // Only position changes, no transforms
}
```

---

## 🧪 Visual Testing Scenarios

### Smoke Test
```
1. Load /skills page
2. Verify hero heading visible and large
3. Scroll down, verify category sections appear
4. Hover over skill items, verify border + dot change
5. Hover over competency cards, verify badge scales
6. Verify quote section has quotation marks
7. Check CTA section at bottom
```

### Responsive Test
```
Mobile (375px):
- Single column layout
- Headings readable (not truncated)
- Skills stack vertically
- Competencies stack vertically

Tablet (768px):
- Two-column editorial layout
- Competencies in 2 columns

Desktop (1280px+):
- Full layout with proper gaps
- Competencies in 3 columns
- Max-width container centered
```

### Dark Mode Test
```
- Background gradients subtle (not overpowering)
- Text contrast sufficient
- Border colors visible
- Hover states clear
```

---

## 💡 Design Decision Rationale

### Why Editorial Layout?
- **Professional:** Mimics high-quality magazine/journal design
- **Scannable:** Clear left-right hierarchy guides eye flow
- **Spacious:** Generous whitespace lets content breathe
- **Differentiated:** Stands out from generic card grids

### Why Left Border + Dot?
- **Visual Anchor:** Provides vertical rhythm without boxes
- **Interactive:** Hover feedback feels tactile and intentional
- **Minimal:** Doesn't compete with text content
- **Consistent:** Matches timeline design in Experience page

### Why Numbered Badges for Competencies?
- **Hierarchy:** Visually distinct from skills list
- **Ordered:** Implies importance/priority (even if arbitrary)
- **Interactive:** Hover scaling adds playfulness
- **Compact:** Saves space compared to icons

### Why Philosophy Quote?
- **Humanizes:** Adds personality beyond technical lists
- **Breaks Rhythm:** Visual variety in long-scroll page
- **Memorable:** Quotable insight reinforces brand
- **Editorial:** Echoes design language from About page

---

## 📚 References

- **Typography:** [Practical Typography](https://practicaltypography.com/)
- **Editorial Design:** [Swiss Style](https://en.wikipedia.org/wiki/International_Typographic_Style)
- **Motion:** [Motion Primitives](https://motion-primitives.com/)
- **Accessibility:** [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## ✅ Visual QA Checklist

Before marking complete:

- [ ] Hero heading properly sized at all breakpoints
- [ ] Gradient dividers visible under category titles
- [ ] Skill items have visible left border and dot
- [ ] Skill items change on hover (border + dot)
- [ ] Competencies display in correct grid (2 cols → 3 cols)
- [ ] Number badges scale on hover
- [ ] Quote has decorative quotation marks
- [ ] CTA section renders at bottom
- [ ] All text readable in light/dark modes
- [ ] No layout shift during animations
- [ ] Animations smooth (60fps)
- [ ] No horizontal scroll on mobile

---

**Result:** A clean, professional, typographically-driven Skills page that matches the portfolio's design language and showcases technical expertise without relying on generic card patterns.
