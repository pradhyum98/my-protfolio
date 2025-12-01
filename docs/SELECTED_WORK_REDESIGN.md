# Selected Work Section — Editorial Redesign

## 🎯 Overview

Complete redesign of the homepage "Selected Work" section from a card-based grid to an editorial, typography-first layout. This implementation removes all card chrome (borders, shadows, boxes) in favor of pure hierarchy, asymmetric composition, and premium typography.

---

## ✨ Key Features

### 1. **Card-Free Design**
- Zero borders, shadows, or contained boxes
- Hierarchy created through typography, spacing, and subtle hairline rules
- Clean, confident editorial feel

### 2. **Editorial Composition**
- Alternating image/text layout per row for visual rhythm
- Large, edge-to-edge images with subtle hover effects
- Asymmetric grid that feels curated, not templated

### 3. **Typography System**
- **Display Font**: Space Grotesk / Syne for titles (via `font-display` utility)
- **Body Font**: Inter / Manrope for descriptions
- Hierarchical sizing: 3xl → 5xl for titles, xl for descriptions
- Reduced letter-spacing (`tracking-tight`) for modern feel

### 4. **Subtle Motion & Depth**
- Section fade/slide-up on scroll
- Staggered row animations (0.15s delay between items)
- Image hover: gentle scale (1.02) + brightness lift
- Respects `prefers-reduced-motion`

### 5. **Quality CTAs**
- Text links with underline offset (`underline-offset-4`)
- Animated arrow icons (translate on hover)
- Dual-tone hierarchy: primary (dark) and secondary (muted) links

### 6. **Performance & Accessibility**
- `next/image` with proper `sizes` attribute
- Priority loading for first project image
- Lazy loading for subsequent images
- Semantic HTML: `section > article > figure + div`
- ARIA-compliant alt text and focus states
- AA/AAA color contrast

---

## 📁 File Structure

```
src/components/sections/
└── selected-work.tsx          # Main editorial component (replaces projects-new.tsx)
```

---

## 🧱 Component Structure

```tsx
<section>
  <header>
    <h2>Selected Work</h2>
    <p>Subheading</p>
  </header>

  <div className="space-y-24">
    {projects.map((project, index) => (
      <article key={project.title}>
        {/* Hairline divider (not on first item) */}

        <div className="grid md:grid-cols-2">
          {/* Image - alternates order */}
          <figure className={isEven ? "md:order-1" : "md:order-2"}>
            <Image ... />
          </figure>

          {/* Content - alternates order */}
          <div className={isEven ? "md:order-2" : "md:order-1"}>
            <div>// Project number + hairline</div>
            <h3>// Title (3xl → 5xl)</h3>
            <p>// Description (lg → xl)</p>
            <div>// Meta: Role · Year · Stack</div>
            <div>// Impact highlight (left border)</div>
            <div>// Action links</div>
          </div>
        </div>
      </article>
    ))}
  </div>

  <div>// "View All Projects" link</div>
</section>
```

---

## 🎨 Design Details

### Typography Scale
| Element | Mobile | Desktop |
|---------|--------|---------|
| Section Title | `text-4xl` (36px) | `text-6xl` (60px) |
| Project Title | `text-3xl` (30px) | `text-5xl` (48px) |
| Description | `text-lg` (18px) | `text-xl` (20px) |
| Meta/Stack | `text-sm` (14px) | `text-sm` (14px) |

### Color Palette
| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Titles | `neutral-900` | `neutral-50` |
| Descriptions | `neutral-700` | `neutral-300` |
| Meta/Muted | `neutral-500` | `neutral-500` |
| Hairlines | `neutral-200` | `neutral-800` |

### Spacing
- Section padding: `py-24 md:py-32` (96px → 128px)
- Between projects: `space-y-24 md:space-y-32` (96px → 128px)
- Grid gap: `gap-8 md:gap-12 lg:gap-16` (32px → 48px → 64px)

### Motion Timings
- Section fade-in: `0.6s` with `[0.22, 1, 0.36, 1]` ease
- Row stagger: `0.15s` delay between items
- Item fade-in: `0.7s` with `[0.22, 1, 0.36, 1]` ease
- Image hover: `0.7s` scale + brightness transition

---

## 🧩 Data Structure

Projects are pulled from `@/content/copy.ts`:

```ts
copy.featuredProjects.projects = [
  {
    title: string
    description: string
    tags: readonly string[]
    impact: string
    image: string
    href: string
  }
]
```

**Meta Derivation** (in component):
```ts
const getProjectMeta = (project) => {
  const year = "2024"  // Extracted/hardcoded
  const role = /* Based on title */
  const stack = project.tags.slice(0, 4).join(" · ")
  return { role, year, stack }
}
```

---

## 🎭 Animations

### Section Header
```tsx
variants={sectionVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: "-100px" }}
```
- Fades in from `opacity: 0, y: 20` → `opacity: 1, y: 0`
- Triggers 100px before entering viewport

### Projects List
```tsx
variants={staggerContainer}
initial="hidden"
whileInView="visible"
viewport={{ once: true, margin: "-50px" }}
```
- Container stagger: `0.15s` between children
- Each item: `opacity: 0, y: 30` → `opacity: 1, y: 0` over `0.7s`

### Image Hover
```tsx
className="... group-hover:scale-[1.02] group-hover:brightness-105"
transition-all duration-700
```
- Subtle zoom + brightness on card hover
- Smooth 700ms ease-out

### Reduced Motion
All `y` transforms disabled when `useReducedMotion()` returns `true`:
```tsx
const shouldReduceMotion = useReducedMotion()
y: shouldReduceMotion ? 0 : 20
```

---

## 🔧 Integration

### Homepage (`app/page.tsx`)
```tsx
import dynamic from 'next/dynamic'

const SelectedWork = dynamic(
  () => import('@/components/sections/selected-work').then(mod => ({
    default: mod.SelectedWork
  })),
  {
    loading: () => <SectionSkeleton height="h-96" />,
    ssr: true
  }
)

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofNew />
      <ShowcaseNew />
      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <SelectedWork />
      </Suspense>
      <ValuePropsNew />
      <CTANew />
    </>
  )
}
```

---

## 🧪 QA Checklist

### Design
- ✅ No cards, borders, or shadows
- ✅ Alternating image/text positions (even/odd)
- ✅ Hairline dividers between projects (gradient fade)
- ✅ Large typography with proper hierarchy
- ✅ Clean, confident editorial aesthetic

### Motion
- ✅ Smooth section fade-in on scroll
- ✅ Staggered row animations (150ms apart)
- ✅ Image hover: scale 1.02 + brightness 105%
- ✅ `prefers-reduced-motion` respected

### Performance
- ✅ First project image: `priority` + `eager` loading
- ✅ Subsequent images: `lazy` loading
- ✅ Proper `sizes` attribute for responsive images
- ✅ LCP optimized (first image loads immediately)

### Accessibility
- ✅ Semantic HTML: `section > article > figure`
- ✅ Descriptive alt text: `${title} preview`
- ✅ Keyboard focus visible on all links
- ✅ AA contrast ratios (neutral-700 on white, etc.)
- ✅ `aria-*` attributes not needed (semantic HTML sufficient)

### Responsive
- ✅ Mobile: stacked layout, full-width images
- ✅ Desktop: 2-column grid with alternating order
- ✅ Typography scales down gracefully (4xl → 3xl on mobile)
- ✅ Spacing adapts (py-24 → py-32, gap-8 → gap-16)

---

## 🎨 Customization

### Adjust Typography
```tsx
// Section title
className="font-display text-4xl ... lg:text-6xl"

// Project title
className="font-display text-3xl ... lg:text-5xl"

// Description
className="text-lg ... md:text-xl"
```

### Adjust Colors
```tsx
// Dark title
className="text-neutral-900 dark:text-neutral-50"

// Muted description
className="text-neutral-700 dark:text-neutral-300"

// Hairline divider
className="bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800"
```

### Adjust Spacing
```tsx
// Section padding
className="py-24 md:py-32"  // 96px → 128px

// Between projects
className="space-y-24 md:space-y-32"  // 96px → 128px

// Grid gap
className="gap-8 md:gap-12 lg:gap-16"  // 32px → 48px → 64px
```

### Adjust Animations
```tsx
// Stagger timing
staggerChildren: 0.15  // 150ms between items

// Item duration
duration: 0.7  // 700ms fade-in

// Image hover
duration-700  // 700ms scale/brightness
```

---

## 📊 Performance Metrics

### Expected Results
- **LCP**: < 2.5s (first image priority-loaded)
- **CLS**: < 0.02 (proper image aspect ratios)
- **FCP**: < 1.8s (lazy-loaded section)
- **TTI**: < 3.8s (minimal JavaScript)

### Optimization Techniques
1. **Code Splitting**: Dynamic import with `next/dynamic`
2. **Image Optimization**: `next/image` with WebP/AVIF
3. **Lazy Loading**: `loading="lazy"` for non-priority images
4. **Reduced Motion**: Disables animations for accessibility
5. **Minimal Re-renders**: Static data, memoized variants

---

## 🚀 Future Enhancements

### Optional Additions
1. **Link Preview**: Integrate Aceternity `LinkPreview` for external links
   ```tsx
   import { LinkPreview } from "@/components/ui/link-preview"

   <LinkPreview url={project.href}>
     <a href={project.href}>View Case Study →</a>
   </LinkPreview>
   ```

2. **Progressive Blur**: Add Motion Primitives blur behind section header
   ```tsx
   import { ProgressiveBlur } from "@/components/ui/progressive-blur"

   <header className="relative">
     <ProgressiveBlur className="absolute inset-0 -z-10" />
     <h2>Selected Work</h2>
   </header>
   ```

3. **Parallax Scroll**: Subtle image parallax on scroll
   ```tsx
   import { useScroll, useTransform } from "framer-motion"

   const { scrollYProgress } = useScroll()
   const y = useTransform(scrollYProgress, [0, 1], [0, -50])

   <motion.div style={{ y }}>
     <Image ... />
   </motion.div>
   ```

4. **Dynamic Meta**: Pull year/role from project metadata
   ```ts
   // In copy.ts
   projects: [{
     ...existing,
     meta: { role: "Staff Engineer", year: "2024" }
   }]
   ```

---

## 🐛 Troubleshooting

### Images not loading
- Verify `next.config.ts` allows image domains
- Check `public/` folder for local images
- Ensure Unsplash URLs are valid

### Animations not working
- Verify `framer-motion` is installed
- Check `prefers-reduced-motion` system setting
- Inspect browser console for errors

### Layout shifts
- Ensure all `Image` components have `fill` or `width/height`
- Add `aspect-ratio` classes to `<figure>` elements
- Use `sizes` attribute for responsive images

### Typography not loading
- Verify `font-display` utility is defined in `tailwind.config`
- Check font imports in `layout.tsx` or global CSS
- Use fallback: `font-display font-sans` → defaults to system

---

## 📚 Related Documentation

- [Typography System](/docs/TYPOGRAPHY_SYSTEM.md)
- [Motion Primitives](/docs/MOTION_PRIMITIVES.md)
- [Performance Optimization](/docs/PERFORMANCE_OPTIMIZATION_COMPLETE.md)
- [Accessibility Guidelines](/docs/A11Y_GUIDELINES.md)

---

## ✅ Deliverables Summary

| File | Status | Description |
|------|--------|-------------|
| `components/sections/selected-work.tsx` | ✅ Created | Editorial, card-free project showcase |
| `app/page.tsx` | ✅ Updated | Replaced `ProjectsNew` with `SelectedWork` |
| `docs/SELECTED_WORK_REDESIGN.md` | ✅ Created | This documentation |

---

**Last Updated**: October 18, 2025
**Author**: Staff Frontend Engineer + Creative UI/UX Designer
**Version**: 1.0.0
