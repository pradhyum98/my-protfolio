# Project Case Study Page — Visual Guide

## 🎨 Before & After Transformation

This guide provides a visual understanding of the editorial redesign.

---

## 📐 Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  ← All Projects                                              │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  [Featured Project] [ClimateTech]                            │
│                                                               │
│  Carbon Shop –                                               │
│  Carbon Credit Marketplace                                   │
│                                                               │
│  Real-time carbon credit trading platform with...           │
│                                                               │
│  Live Demo →  Case Study PDF →                              │
│                                                               │
│  [Progressive Blur Background]                               │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                         │  │
│  │         [Hero Image — 16:9 Aspect Ratio]              │  │
│  │                                                         │  │
│  └───────────────────────────────────────────────────────┘  │
│  Caption: Main dashboard view                               │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│  Role               Company         Timeline       Stack     │
│  Senior Engineer    ReNew Power     2023-2024      React... │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  🎯 Challenge        │  💡 Solution                          │
│  The main problem... │  How we solved it...                 │
│                       │                                       │
├─────────────────────────────────────────────────────────────┤
│  Context & Background                                        │
│  Detailed background information...                          │
├─────────────────────────────────────────────────────────────┤
│  ✨ Key Contributions                                        │
│  • Built real-time dashboard...                             │
│  • Implemented role-based access...                          │
│  • Optimized performance...                                  │
├─────────────────────────────────────────────────────────────┤
│  Technical Architecture                                      │
│  System design and decisions...                              │
│  [React] [TypeScript] [Next.js] ...                         │
├─────────────────────────────────────────────────────────────┤
│  📈 Results & Impact                    [Gradient BG]       │
│  ① Reduced trading time by 70%                              │
│  ② Increased user satisfaction by 45%                       │
│  ③ Improved system performance by 3x                        │
├─────────────────────────────────────────────────────────────┤
│  What I'd Do Next                                            │
│  Future roadmap and iterations...                            │
├─────────────────────────────────────────────────────────────┤
│  Project Links                                               │
│  [Live Demo]  [Documentation]  [GitHub]                     │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│            Interested in similar work?                       │
│         I'm available for senior roles...                    │
│                                                               │
│         [Get in Touch]  [View All Projects]                 │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Section Anatomy

### Hero Section (with Progressive Blur)

```
┌─────────────────────────────────────────────────────┐
│ [Radial blur gradient from center]                  │
│                                                      │
│ [Featured Project] [Domain]                         │
│                                                      │
│ Project Title in Display Font                       │
│ (text-5xl → text-6xl → text-7xl)                   │
│                                                      │
│ Standfirst paragraph in larger body text            │
│ with generous line-height. Clear, engaging.         │
│                                                      │
│ Link 1 →  Link 2 →                                  │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**Key Elements:**
- ✨ Progressive Blur: `intensity={0.15}`, `direction="radial"`
- 🏷️ Badges: Gradient for "Featured", outline for domain
- 📝 Title: Large display font, semibold, tracking-tight
- 📄 Standfirst: `text-lg md:text-xl`, relaxed leading
- 🔗 Links: Underlined, arrow on hover

---

### Icon + Heading Pattern

```
┌─────────────────────────────────────────────────────┐
│                                                      │
│  ┌────┐                                             │
│  │ ✨ │  Section Heading                            │
│  └────┘  (font-display, text-3xl md:text-4xl)      │
│   └─ Icon in rounded background                     │
│                                                      │
│  Body text with generous leading and spacing.       │
│  Uses text-foreground/80 for softer appearance.     │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**Icon Background Sizes:**
- Circle: `h-10 w-10`
- Icon: `h-5 w-5`
- Border radius: `rounded-full`

---

### Challenge & Solution (Side-by-Side)

```
Desktop:
┌─────────────────────┬─────────────────────┐
│  🎯 Challenge       │  💡 Solution        │
│                     │                     │
│  Problem statement  │  How we solved it   │
│  in detail...       │  in detail...       │
│                     │                     │
└─────────────────────┴─────────────────────┘

Mobile (Stacked):
┌─────────────────────┐
│  🎯 Challenge       │
│                     │
│  Problem statement  │
│  in detail...       │
└─────────────────────┘
┌─────────────────────┐
│  💡 Solution        │
│                     │
│  How we solved it   │
│  in detail...       │
└─────────────────────┘
```

**Grid Behavior:**
- Mobile: `grid-cols-1` (stacked)
- Desktop: `lg:grid-cols-2` (side-by-side)
- Gap: `gap-16 md:gap-20`

---

### Bulleted List (Contributions)

```
┌─────────────────────────────────────────────────────┐
│  ✨ Key Contributions                               │
│                                                      │
│  • Built real-time dashboard with live updates      │
│    and WebSocket integration for instant data.      │
│                                                      │
│  • Implemented role-based access control (RBAC)     │
│    with fine-grained permissions system.            │
│                                                      │
│  • Optimized database queries reducing latency      │
│    by 60% through caching and indexing.             │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**List Style:**
- Bullet: Small dot (`h-1.5 w-1.5 rounded-full`)
- Color: Matches section theme (indigo for Contributions)
- Spacing: `space-y-6` between items
- Alignment: Flex with `gap-4`

---

### Numbered List (Results)

```
┌─────────────────────────────────────────────────────┐
│  [Subtle gradient background]                       │
│                                                      │
│  📈 Results & Impact                                │
│                                                      │
│  ① Reduced trading time by 70% through optimized    │
│    workflows and real-time processing.              │
│                                                      │
│  ② Increased user satisfaction by 45% based on      │
│    NPS surveys and user feedback.                   │
│                                                      │
│  ③ Improved system performance by 3x with better    │
│    caching and database optimization.               │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**Number Badge:**
- Size: `h-6 w-6`
- Background: `bg-green-600`
- Text: `text-xs font-bold text-white`
- Shape: `rounded-full`

---

### Meta Information Grid

```
Desktop (4 columns):
┌──────────┬──────────┬──────────┬──────────┐
│ ROLE     │ COMPANY  │ TIMELINE │ STACK    │
│ Senior   │ ReNew    │ 2023-24  │ React... │
│ Engineer │ Power    │          │ +5       │
└──────────┴──────────┴──────────┴──────────┘

Tablet (2 columns):
┌──────────┬──────────┐
│ ROLE     │ COMPANY  │
│ Senior   │ ReNew    │
│ Engineer │ Power    │
├──────────┼──────────┤
│ TIMELINE │ STACK    │
│ 2023-24  │ React... │
│          │ +5       │
└──────────┴──────────┘

Mobile (1 column):
┌──────────┐
│ ROLE     │
│ Senior   │
│ Engineer │
├──────────┤
│ COMPANY  │
│ ReNew    │
│ Power    │
├──────────┤
│ TIMELINE │
│ 2023-24  │
├──────────┤
│ STACK    │
│ React... │
│ +5       │
└──────────┘
```

**Label Style:**
- `text-xs uppercase tracking-wider text-muted-foreground`

**Value Style:**
- `text-base font-medium`

---

## 🎨 Color System

### Icon Backgrounds

```
Challenge (Red):
┌────────────────────────────────┐
│ Light: bg-red-100              │
│ Dark:  bg-red-950/50           │
│ Icon:  text-red-600            │
│ Icon Dark: text-red-400        │
└────────────────────────────────┘

Solution (Green):
┌────────────────────────────────┐
│ Light: bg-green-100            │
│ Dark:  bg-green-950/50         │
│ Icon:  text-green-600          │
│ Icon Dark: text-green-400      │
└────────────────────────────────┘

Contributions (Indigo):
┌────────────────────────────────┐
│ Light: bg-indigo-100           │
│ Dark:  bg-indigo-950/50        │
│ Icon:  text-indigo-600         │
│ Icon Dark: text-indigo-400     │
└────────────────────────────────┘

Results (Green):
┌────────────────────────────────┐
│ Badge: bg-green-600            │
│ Badge Dark: bg-green-500       │
│ Badge Text: text-white         │
└────────────────────────────────┘
```

### Background Variations

```
White Section:
┌────────────────────────────────┐
│ bg-background                  │
│ (Pure white / Pure black)      │
└────────────────────────────────┘

Subtle Gray Section:
┌────────────────────────────────┐
│ bg-muted/20                    │
│ (Very light gray / dark gray)  │
└────────────────────────────────┘

Bordered Section:
┌────────────────────────────────┐
│ border-y border-border/40      │
│ bg-muted/10                    │
└────────────────────────────────┘

Gradient Section (Results):
┌────────────────────────────────┐
│ Light:                         │
│ from-green-50/50               │
│ via-transparent                │
│ to-emerald-50/30               │
│                                │
│ Dark:                          │
│ from-green-950/10              │
│ via-transparent                │
│ to-emerald-950/10              │
└────────────────────────────────┘
```

---

## 📏 Typography Scale

```
H1 (Hero Title):
┌────────────────────────────────────────┐
│ Carbon Shop – Carbon Credit Marketplace│
│ font-display text-5xl md:text-6xl     │
│ lg:text-7xl font-semibold              │
└────────────────────────────────────────┘

H2 (Section Heading):
┌────────────────────────────────────────┐
│ Key Contributions                      │
│ font-display text-3xl md:text-4xl     │
│ font-semibold tracking-tight           │
└────────────────────────────────────────┘

Standfirst:
┌────────────────────────────────────────┐
│ Real-time carbon credit trading        │
│ platform with live listings...         │
│ text-lg md:text-xl leading-relaxed     │
│ text-muted-foreground                  │
└────────────────────────────────────────┘

Body Text:
┌────────────────────────────────────────┐
│ Regular paragraph text with generous   │
│ line height for readability.           │
│ text-base leading-relaxed              │
│ text-foreground/80                     │
└────────────────────────────────────────┘

Meta Label:
┌────────────────────────────────────────┐
│ ROLE                                   │
│ text-xs uppercase tracking-wider       │
│ text-muted-foreground                  │
└────────────────────────────────────────┘
```

---

## 🎭 Motion & Interaction

### Back Button Hover

```
Before Hover:
← All Projects

During Hover:
←  All Projects
 └─ Arrow slides left (transform: -translate-x-1)
```

### Link Arrow Hover

```
Before Hover:
Live Demo →

During Hover:
Live Demo  →
          └─ Arrow slides right (transform: translate-x-1)
```

### Link Underline Hover

```
Before Hover:
Live Demo →
─────────── (decoration-muted-foreground/30)

During Hover:
Live Demo →
─────────── (decoration-foreground)
```

---

## 📱 Responsive Breakpoints

### Mobile (< 640px)

```
┌─────────────────────────┐
│ ← All Projects          │
│                         │
│ [Featured] [Domain]     │
│                         │
│ Project Title           │
│ (text-5xl)              │
│                         │
│ Standfirst paragraph    │
│                         │
│ Link 1 →                │
│ Link 2 →                │
│                         │
├─────────────────────────┤
│ [Hero Image]            │
├─────────────────────────┤
│ ROLE                    │
│ Senior Engineer         │
│                         │
│ COMPANY                 │
│ ReNew Power             │
│ ...                     │
├─────────────────────────┤
│ 🎯 Challenge            │
│ Problem...              │
│                         │
│ 💡 Solution             │
│ Solution...             │
└─────────────────────────┘
```

**Characteristics:**
- Single column
- Smaller text sizes
- Stacked grids
- Tighter spacing: `py-20`
- Full-width elements

### Desktop (> 1024px)

```
┌────────────────────────────────────────────────┐
│  ← All Projects                                 │
│                                                 │
│  [Featured Project] [ClimateTech]              │
│                                                 │
│  Carbon Shop – Carbon Credit                   │
│  Marketplace                                   │
│  (text-7xl)                                    │
│                                                 │
│  Real-time carbon credit trading platform...   │
│                                                 │
│  Live Demo →  Case Study PDF →                 │
│                                                 │
├────────────────────────────────────────────────┤
│           [Wide Hero Image]                     │
├────────────────────────────────────────────────┤
│  ROLE        COMPANY      TIMELINE    STACK    │
│  Senior Eng  ReNew Power  2023-2024   React... │
├────────────────────────────────────────────────┤
│  🎯 Challenge            💡 Solution            │
│  Problem statement...    How we solved...      │
└────────────────────────────────────────────────┘
```

**Characteristics:**
- Multi-column grids
- Largest text sizes
- Side-by-side layouts
- Maximum spacing: `py-28`
- Centered, max-width containers

---

## 🎨 Design Patterns

### Pattern 1: Icon + Heading

**When to Use:** Section intros (Challenge, Solution, Contributions, Results)

**Anatomy:**
```tsx
<div className="flex items-center gap-3">
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-{color}-100 dark:bg-{color}-950/50">
    <Icon className="h-5 w-5 text-{color}-600 dark:text-{color}-400" />
  </div>
  <h2 className="font-display text-3xl font-semibold tracking-tight">
    Section Title
  </h2>
</div>
```

### Pattern 2: Underlined Link with Arrow

**When to Use:** CTAs, external links

**Anatomy:**
```tsx
<CtaLink
  href="/path"
  className="group inline-flex items-center gap-2 underline decoration-muted-foreground/30 underline-offset-4 hover:decoration-foreground"
>
  <span>Link Text</span>
  <span className="transition-transform group-hover:translate-x-1">→</span>
</CtaLink>
```

### Pattern 3: Badge Group

**When to Use:** Tech stack, tags, categories

**Anatomy:**
```tsx
<div className="flex flex-wrap gap-2">
  <Badge variant="secondary">React</Badge>
  <Badge variant="secondary">TypeScript</Badge>
  <Badge variant="secondary">+5</Badge>
</div>
```

### Pattern 4: List Item with Bullet/Number

**Bulleted (Contributions):**
```tsx
<li className="flex gap-4">
  <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
  <p>Contribution text...</p>
</li>
```

**Numbered (Results):**
```tsx
<li className="flex gap-4">
  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
    1
  </span>
  <p>Result text...</p>
</li>
```

---

## 🎯 Visual Hierarchy

```
┌─────────────────────────────────────────┐
│                                          │  LEVEL 1
│  Display Title (text-7xl)               │  Dominant
│                                          │  Most important
├─────────────────────────────────────────┤
│                                          │  LEVEL 2
│  Standfirst (text-xl)                   │  Supporting
│  Larger than body text                  │  Context
├─────────────────────────────────────────┤
│                                          │  LEVEL 3
│  Section Headings (text-4xl)            │  Structure
│  Clear visual breaks                    │  Organization
├─────────────────────────────────────────┤
│                                          │  LEVEL 4
│  Body Text (text-base)                  │  Content
│  Most readable size                     │  Information
├─────────────────────────────────────────┤
│  Meta Labels (text-xs uppercase)        │  LEVEL 5
│  De-emphasized, supportive              │  Metadata
└─────────────────────────────────────────┘
```

**Techniques Used:**
1. **Size**: Larger = more important
2. **Weight**: `font-semibold` for headings, `font-medium` for emphasis
3. **Color**: `foreground` for primary, `foreground/80` for body, `muted-foreground` for meta
4. **Spacing**: Generous margins create breathing room
5. **Typography**: `font-display` for headings, default for body

---

## 🎨 Before/After Comparison

### Challenge Section

**BEFORE (Card-Based):**
```
┌─────────────────────────────────────┐
│ ┌─────────────────────────────────┐ │
│ │ 1  Challenge                    │ │
│ ├─────────────────────────────────┤ │
│ │                                 │ │
│ │ Problem statement text...       │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│   └─ Shadowed card with border     │
└─────────────────────────────────────┘
```

**AFTER (Editorial):**
```
┌─────────────────────────────────────┐
│                                      │
│ 🎯 Challenge                         │
│                                      │
│ Problem statement text with          │
│ generous leading and spacing.        │
│                                      │
└─────────────────────────────────────┘
    └─ No card, just typography
```

**Changes:**
- ❌ Removed: Card, border, shadow, padding box
- ✅ Added: Icon, generous spacing, better typography
- ✅ Improved: Readability, visual weight, breathing room

---

## 📐 Spacing System

```
SECTION VERTICAL SPACING:
py-20 md:py-28
═════════════════════════════════════
           80px → 112px
═════════════════════════════════════

ELEMENT VERTICAL SPACING:
space-y-6
─────────────────────────────────────
  24px between stacked elements
─────────────────────────────────────

GRID GAPS:
gap-16 md:gap-20
─────────────────────────────────────
      64px → 80px
─────────────────────────────────────

HEADING MARGINS:
mb-8
─────────────────────────────────────
        32px
─────────────────────────────────────
```

---

## 🎉 Key Takeaways

### What Makes This Design Work

1. **No Visual Clutter**
   - Zero cards, borders, or shadows
   - Whitespace creates structure
   - Typography does the heavy lifting

2. **Clear Hierarchy**
   - Size, weight, and color convey importance
   - Predictable structure aids scanning
   - Icons provide visual anchors

3. **Generous Spacing**
   - `py-20 md:py-28` gives sections room
   - `leading-relaxed` improves readability
   - Gaps scaled appropriately for content

4. **Subtle Sophistication**
   - Progressive Blur adds depth without weight
   - Muted gradients create rhythm
   - Transitions feel refined, not flashy

5. **Responsive Excellence**
   - Mobile: stacked, readable, touch-friendly
   - Tablet: balanced, transitional
   - Desktop: spacious, editorial, elegant

---

**Last Updated**: October 18, 2025
**Version**: 2.0 (Editorial Redesign)
