# Project Case Study Page — Quick Start Guide

## 🚀 Getting Started

The project case study page is now **card-free, editorial, and typographically driven**. This guide shows you how to work with the new design.

---

## 📂 File Location

```
src/app/projects/[slug]/page.tsx
```

This is a **dynamic route** that generates a page for each project based on its `slug`.

---

## 🎯 How It Works

### 1. **Data Source**
All project data comes from `/src/content/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    slug: "carbon-shop",
    title: "Carbon Shop – Carbon Credit Marketplace",
    summary: "Real-time carbon credit trading platform...",
    challenge: "Users needed a way to...",
    solution: "We built a platform that...",
    context: "The carbon credit market...",
    architecture: "The system uses Next.js...",
    contributions: [
      "Built real-time dashboard...",
      "Implemented role-based access...",
    ],
    results: [
      "Reduced trading time by 70%",
      "Increased user satisfaction by 45%",
    ],
    nextSteps: "Future improvements include...",
    // ...more fields
  }
]
```

### 2. **URL Structure**
```
/projects/carbon-shop
/projects/highlevel-courses
/projects/dmrv-platform
```

Each project's `slug` becomes its URL.

### 3. **Page Generation**
Next.js automatically generates static pages for all projects at build time using `generateStaticParams()`.

---

## 🎨 Adding a New Project

### Step 1: Add Data to `projects.ts`

```typescript
{
  slug: "my-new-project",  // URL-friendly name
  title: "My New Project — Innovative Platform",
  summary: "Short 1-2 line summary (≤180 chars)",

  // Required fields
  role: "Senior Full-Stack Engineer",
  dates: "Jan 2024 – Present",
  domain: "FinTech",
  stack: ["React", "TypeScript", "Node.js"],
  tags: ["Trading", "Real-time", "Analytics"],

  // Optional but recommended
  company: "Company Name",
  challenge: "The main problem we solved...",
  solution: "How we approached it...",
  context: "Background and business goals...",
  architecture: "Technical decisions and trade-offs...",

  contributions: [
    "Built X feature that did Y",
    "Optimized Z resulting in W",
  ],

  results: [
    "Metric 1: improved by X%",
    "Metric 2: reduced by Y%",
  ],

  nextSteps: "Future roadmap...",

  links: [
    { label: "Live Demo", href: "https://...", kind: "demo" },
    { label: "Documentation", href: "https://...", kind: "doc" },
  ],

  heroImage: "/projects/my-project/hero.jpg",
  images: [
    {
      src: "/projects/my-project/hero.jpg",
      alt: "Project hero image showing dashboard",
      caption: "Main dashboard view"
    }
  ],

  featured: true,  // Show "Featured" badge

  // SEO
  seoTitle: "My New Project – Your Name",
  seoDescription: "Short description for search engines (≤160 chars)"
}
```

### Step 2: Add Images

Place images in `/public/projects/my-project/`:
```
/public/projects/my-project/
  hero.jpg         (16:9 aspect ratio, 1200x675px minimum)
  screenshot1.jpg
  screenshot2.jpg
```

### Step 3: Build & Test

```bash
npm run build
npm run dev
```

Visit: `http://localhost:3000/projects/my-new-project`

---

## 🎭 Customizing the Design

### Change Section Order

The page follows this structure:
```tsx
1. Back Navigation
2. Hero Section
3. Hero Image
4. Meta Information
5. Challenge & Solution
6. Context & Background
7. Key Contributions
8. Technical Architecture
9. Results & Impact
10. What's Next
11. Project Links
12. Footer CTA
```

To reorder, simply move the `<section>` blocks in `page.tsx`.

### Hide Sections

Each section checks if data exists:
```tsx
{project.challenge && (
  <section>...</section>
)}
```

If you omit `challenge` from your project data, that section won't render.

### Change Colors

Icon accent colors are defined inline:
```tsx
{/* Challenge (Red) */}
<div className="bg-red-100 dark:bg-red-950/50">
  <Target className="text-red-600 dark:text-red-400" />
</div>

{/* Solution (Green) */}
<div className="bg-green-100 dark:bg-green-950/50">
  <Lightbulb className="text-green-600 dark:text-green-400" />
</div>

{/* Contributions (Indigo) */}
<div className="bg-indigo-100 dark:bg-indigo-950/50">
  <Sparkles className="text-indigo-600 dark:text-indigo-400" />
</div>
```

To change colors, swap `red` → `blue`, `green` → `purple`, etc.

### Adjust Spacing

Vertical spacing is controlled by these classes:
```tsx
py-20 md:py-28    /* Section padding */
mb-20 md:mb-28    /* Large gaps */
gap-16 md:gap-20  /* Grid gaps */
space-y-6         /* Stacked elements */
```

To make sections tighter:
```tsx
py-12 md:py-16    /* Instead of py-20 md:py-28 */
```

To make sections more generous:
```tsx
py-24 md:py-32    /* Instead of py-20 md:py-28 */
```

---

## 🎨 Progressive Blur Usage

The hero section uses a subtle Progressive Blur:

```tsx
<ProgressiveBlur
  className="absolute inset-0"
  intensity={0.15}      // 0-1 scale (lower = more subtle)
  direction="radial"    // "radial" | "top" | "bottom" | "left" | "right"
/>
```

### Intensity Guide
```
0.1  → Very subtle (recommended for hero)
0.2  → Noticeable
0.3+ → Strong (use sparingly)
```

### Direction Options
```tsx
direction="radial"   // Fades from center (default)
direction="top"      // Fades from top to bottom
direction="bottom"   // Fades from bottom to top
direction="left"     // Fades from left to right
direction="right"    // Fades from right to left
```

---

## 📱 Responsive Design

The page adapts to three breakpoints:

### Mobile (< 640px)
- Single column layout
- Smaller text sizes (`text-5xl` hero)
- Tighter spacing (`py-20`)
- Stacked grids

### Tablet (640px - 1024px)
- Larger text sizes (`text-6xl` hero)
- More generous spacing (`py-24`)
- Some grids go to 2 columns

### Desktop (> 1024px)
- Largest text sizes (`text-7xl` hero)
- Maximum spacing (`py-28`)
- Full multi-column grids

### Testing Responsive Behavior

```bash
# Mobile
Browser DevTools → Toggle Device Mode → iPhone 12 Pro

# Tablet
Browser DevTools → iPad Pro

# Desktop
Full browser window (> 1280px)
```

---

## ♿️ Accessibility Checklist

When adding content, ensure:

### Images
- [ ] All images have descriptive `alt` text (not "image" or "photo")
- [ ] Alt text describes what's in the image (≤125 chars)
- [ ] Decorative images use `alt=""`

### Links
- [ ] All links have descriptive text (not "click here")
- [ ] External links indicate they open in new context
- [ ] `aria-label` used for icon-only links

### Headings
- [ ] One `h1` per page (project title)
- [ ] `h2` for major sections (Challenge, Solution, Results)
- [ ] No skipped heading levels
- [ ] Headings describe section content

### Color Contrast
- [ ] Text on backgrounds meets WCAG AA (4.5:1)
- [ ] Interactive elements have visible focus states
- [ ] Color isn't the only way to convey information

---

## 🔍 SEO Best Practices

### Metadata
Every project should have:
```typescript
seoTitle: "Project Name – Your Name",  // ≤60 chars
seoDescription: "Compelling summary that appears in search results",  // ≤160 chars
```

### JSON-LD Structured Data
Automatically generated for each project:
```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Project Title",
  "description": "Project summary",
  "author": {
    "@type": "Person",
    "name": "Sanjay Kumar"
  },
  "dateCreated": "2024",
  "keywords": "React, TypeScript, ClimateTech",
  "image": "/projects/carbon-shop/hero.jpg"
}
```

### Open Graph
Automatically generated:
- Title
- Description
- Image (uses `heroImage`)
- Type: "article"

---

## 🎯 Common Tasks

### Change Hero Background Blur
```tsx
<ProgressiveBlur
  intensity={0.25}  // Change this (0.1 - 0.3 recommended)
/>
```

### Update Footer CTA Text
```tsx
<h3>Interested in similar work?</h3>  {/* Change this */}
<p>I'm available for...</p>            {/* And this */}
```

### Add More Links
In `projects.ts`:
```typescript
links: [
  { label: "Live Demo", href: "https://...", kind: "demo" },
  { label: "GitHub", href: "https://...", kind: "doc" },
  { label: "Case Study PDF", href: "https://...", kind: "doc" },
  { label: "Press Release", href: "https://...", kind: "site" },
]
```

### Change Icon for Section
Replace the icon import and component:
```tsx
import { Rocket } from "lucide-react"  // New icon

<Rocket className="h-5 w-5 text-indigo-600" />  {/* Use it */}
```

Browse all icons: [lucide.dev](https://lucide.dev)

---

## 🐛 Troubleshooting

### "Project not found" error
**Cause**: `slug` in URL doesn't match any project in `projects.ts`
**Fix**: Check spelling, ensure project exists in data

### Hero image not loading
**Cause**: Image path incorrect or file doesn't exist
**Fix**: Verify path in `public/projects/[slug]/` matches `heroImage` field

### Section not appearing
**Cause**: Data field is empty or undefined
**Fix**: Add content to the field in `projects.ts`:
```typescript
challenge: "Add your challenge text here",
```

### Dark mode colors look wrong
**Cause**: Missing `dark:` variants
**Fix**: Always pair colors with dark mode:
```tsx
bg-red-100 dark:bg-red-950/50
text-red-600 dark:text-red-400
```

### Spacing looks off
**Cause**: Inconsistent spacing classes
**Fix**: Use the standard spacing scale:
```tsx
py-20 md:py-28    /* Sections */
gap-8             /* Grids */
space-y-6         /* Stacks */
```

---

## 📊 Performance Tips

### Optimize Images
```bash
# Resize hero images to 1200x675 (16:9)
# Use WebP/AVIF for smaller file sizes
# Compress with tools like ImageOptim or Squoosh
```

### Check Build Output
```bash
npm run build

# Look for:
# - Static pages generated: ✓ /projects/[slug]
# - No build errors
# - Reasonable bundle size
```

### Lighthouse Audit
```
Chrome DevTools → Lighthouse → Generate report
Target scores:
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100
```

---

## 🎉 Quick Reference

### Essential Classes
```css
/* Containers */
container mx-auto max-w-4xl px-6

/* Section Padding */
py-20 md:py-28

/* Typography */
font-display text-3xl md:text-4xl font-semibold tracking-tight

/* Colors */
text-foreground/80
bg-muted/20
border-border/40

/* Spacing */
space-y-6
gap-8
mb-12
```

### Icon Backgrounds
```tsx
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950/50">
  <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
</div>
```

### Links
```tsx
<CtaLink
  href="/path"
  className="underline decoration-muted-foreground/30 underline-offset-4 hover:decoration-foreground"
>
  Link Text →
</CtaLink>
```

---

## 📚 Next Steps

1. ✅ Read the [Full Design Documentation](./PROJECT_CASE_STUDY_REDESIGN.md)
2. ✅ Review the [Projects Data Structure](/src/content/projects.ts)
3. ✅ Explore [Progressive Blur Component](/src/components/ui/progressive-blur.tsx)
4. ✅ Check [Typography System](/docs/TYPOGRAPHY_SYSTEM.md)

---

**Last Updated**: October 18, 2025
**Version**: 2.0
