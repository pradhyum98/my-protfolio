# Skills Page — Quick Start Guide

**Last Updated:** October 18, 2025
**Status:** Production-ready
**Page:** `/skills`

---

## 🎯 What This Page Does

The Skills page showcases your technical expertise and senior competencies using a clean, typographically-driven editorial layout — no cards, all content.

---

## 📂 File Structure

```
src/
├── app/
│   └── skills/
│       └── page.tsx          ← Main page (client component)
├── components/
│   ├── ui/
│   │   ├── blur-fade.tsx     ← Section animations
│   │   └── progressive-blur.tsx ← Ambient depth
│   └── sections/
│       └── cta-new.tsx       ← Bottom CTA
├── content/
│   └── copy.ts               ← Skills content
└── lib/
    └── constants.ts          ← SKILLS data
```

---

## 🚀 Quick Edit Guide

### Update Skills List

**File:** `src/lib/constants.ts`

```typescript
export const SKILLS = {
  frontend: [
    "React", "Next.js", "TypeScript", // ← Add/remove here
  ],
  backend: [
    "Node.js", "Express", "Nest.js", // ← Add/remove here
  ],
  cloud: [
    "Firebase", "GCP", "Module Federation", // ← Add/remove here
  ],
  other: [
    "Zod", "OOP", "Agile", // ← Add/remove here
  ]
}
```

### Update Category Titles/Descriptions

**File:** `src/content/copy.ts`

```typescript
skills: {
  // Main headings
  heading: "Skills & Tech Stack",
  subheading: "Technologies and competencies...",

  // Category titles
  frontendTitle: "Frontend",
  frontendDescription: "Building interactive...",

  backendTitle: "Backend",
  backendDescription: "Designing scalable APIs...",

  cloudTitle: "Cloud/Infra/DevOps",
  cloudDescription: "Deploying and managing...",

  otherTitle: "Data & Other",
  otherDescription: "Additional tools...",

  // Competencies section
  competenciesHeading: "Senior Competencies",
  competenciesSubheading: "Beyond code...",

  competencies: {
    architecture: {
      title: "Architecture for Modular Scale",
      description: "Micro‑frontends with Module Federation...",
    },
    // ... add more here
  }
}
```

### Update Philosophy Quote

**File:** `src/app/skills/page.tsx`

Search for:
```tsx
{/* Philosophy Quote */}
<blockquote className="relative space-y-6">
  <p className="text-2xl...">
    The best code is not the cleverest —  {/* ← Edit this */}
    it's the code that communicates intent clearly,
    scales gracefully, and empowers the team.
  </p>
</blockquote>
```

---

## 🎨 Customization Options

### Change Accent Colors

**File:** `src/app/skills/page.tsx`

```tsx
// Hero badge icon color
<Sparkles className="h-4 w-4 text-violet-500" />  {/* ← Change color */}

// Heading accent dot
<span className="text-violet-500">.</span>  {/* ← Change color */}

// Category gradient dividers
sectionIdx === 0 && "bg-gradient-to-r from-blue-500..."   // Frontend
sectionIdx === 1 && "bg-gradient-to-r from-green-500..."  // Backend
sectionIdx === 2 && "bg-gradient-to-r from-violet-500..." // Cloud
sectionIdx === 3 && "bg-gradient-to-r from-orange-500..." // Other
```

### Adjust Background Gradients

```tsx
{/* Ambient Background */}
<div className="bg-indigo-500/5 blur-3xl..." />  {/* ← Change color/opacity */}
<div className="bg-violet-500/5 blur-3xl..." />
<div className="bg-cyan-500/5 blur-3xl..." />
```

### Modify Animation Timing

```tsx
// Section delays
<BlurFade delay={0.1} inView>  {/* Hero */}
<BlurFade delay={0.3} inView>  {/* Skills */}
<BlurFade delay={0.5} inView>  {/* Competencies */}
<BlurFade delay={0.6} inView>  {/* Quote */}

// Stagger speed
transition={{ delay: idx * 0.05, duration: 0.4 }}  {/* ← Adjust multiplier */}
```

---

## 🔧 Common Tasks

### Add a New Skill Category

1. **Add data** to `constants.ts`:
```typescript
export const SKILLS = {
  // ... existing categories
  tools: ["Git", "Docker", "VS Code"], // ← New category
}
```

2. **Add copy** to `copy.ts`:
```typescript
skills: {
  toolsTitle: "Development Tools",
  toolsDescription: "Essential tools for modern development",
  // ...
}
```

3. **Update component** in `page.tsx`:
```typescript
const skillSections = [
  // ... existing sections
  {
    title: copy.skills.toolsTitle,
    description: copy.skills.toolsDescription,
    skills: SKILLS.tools,
  },
]
```

### Add a New Competency

**File:** `src/content/copy.ts`

```typescript
competencies: {
  // ... existing
  newCompetency: {
    title: "Your Competency Title",
    description: "Detailed description here",
  },
}
```

The page will automatically pick it up via `Object.values(copy.skills.competencies)`.

### Change Layout Columns

**Skills sections (default: 1fr / 2fr):**
```tsx
<div className="grid md:grid-cols-[1fr_2fr] gap-16">
  {/* ↑ Adjust ratio here */}
```

**Competencies (default: 3 columns):**
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
  {/* ↑ Change column count */}
```

---

## 📱 Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Headings scale down (text-5xl → text-6xl)
- Skills list full width
- Competencies stack vertically

### Tablet (768px - 1024px)
- Two-column editorial layout for skills
- Competencies in 2 columns
- Full typography scale

### Desktop (> 1024px)
- Max width: 1280px (max-w-6xl)
- Competencies in 3 columns
- Full animation effects

---

## 🎭 Animation Breakdown

### Entry Sequence
1. Hero badge fades in (delay: 0.1s)
2. Main heading fades in (delay: 0.2s)
3. Subheading fades in (delay: 0.25s)
4. Skills categories scroll-trigger (margin: -100px)
5. Individual skills stagger (0.05s each)
6. Competencies scroll-trigger
7. Philosophy quote scroll-trigger

### Hover Effects
- Skill items: border color change + dot scale/color
- Competency badges: scale (1 → 1.1) + background opacity

---

## 🧪 Testing Checklist

Before deploying changes:

- [ ] Skills display correctly in all categories
- [ ] Gradient dividers visible under category titles
- [ ] Hover effects work on skill items
- [ ] Competencies number badges scale on hover
- [ ] Philosophy quote quotation marks positioned correctly
- [ ] CTA section renders at bottom
- [ ] Mobile layout stacks properly
- [ ] No console errors or warnings
- [ ] Animations respect `prefers-reduced-motion`

---

## 🐛 Troubleshooting

### Skills not showing up
- Check `constants.ts` for correct array syntax
- Verify skill category matches in `skillSections` array

### Gradient dividers not visible
- Check `cn()` conditional classes
- Ensure `sectionIdx` is correct in map

### Animations not working
- Verify Framer Motion installed: `npm ls framer-motion`
- Check browser DevTools for motion errors
- Ensure `'use client'` directive at top of file

### Competencies missing
- Verify `copy.skills.competencies` object structure
- Check `Object.values()` is correctly mapped

---

## 📚 Related Documentation

- [Skills Page Redesign Complete](./SKILLS_PAGE_REDESIGN_COMPLETE.md) — Full redesign documentation
- [About Page Redesign](./ABOUT_PAGE_REDESIGN_COMPLETE.md) — Similar design patterns
- [Typography System](./TYPOGRAPHY_SYSTEM.md) — Typography scale reference

---

## 🎓 Key Principles

1. **Typography First:** Use heading hierarchy, not visual containers
2. **Editorial Layout:** Two-column split for professional appearance
3. **Subtle Motion:** Micro-interactions enhance, don't distract
4. **Consistency:** Match design language across portfolio
5. **Content Focus:** Skills are the hero, not the chrome

---

**Questions?** Check the full documentation or inspect the component code directly.
