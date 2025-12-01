# Selected Work — Quick Start Guide

## 🚀 5-Minute Integration

### 1. **Import the Component**
```tsx
// In app/page.tsx
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
```

### 2. **Add to Homepage**
```tsx
export default function Home() {
  return (
    <>
      <Hero />
      <ShowcaseNew />

      {/* 👇 Add here */}
      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <SelectedWork />
      </Suspense>

      <ValuePropsNew />
      <CTANew />
    </>
  )
}
```

### 3. **Configure Project Data**
```ts
// In content/copy.ts
featuredProjects: {
  heading: "Selected Work",
  subheading: "In-depth case studies with architecture, decisions, and results",

  projects: [
    {
      title: "HighLevel: Courses Platform",
      description: "Creator-led course + community builder with real-time WYSIWYG...",
      tags: ["React", "Next.js", "TypeScript", "Module Federation"],
      impact: "Faster authoring and improved engagement",
      image: "/projects/courses.jpg",
      href: "/projects/courses"
    },
    // Add more projects...
  ]
}
```

### 4. **Verify Images**
Ensure images are optimized and accessible:
```tsx
// Option 1: Local images in /public
image: "/projects/courses.jpg"

// Option 2: External URLs (add domain to next.config.ts)
image: "https://images.unsplash.com/photo-123..."
```

Update `next.config.ts`:
```ts
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}
```

---

## ✨ What You Get

### Before (Card-Based)
```tsx
// projects-new.tsx — heavy card chrome
<div className="rounded-2xl border shadow-xl bg-white p-6">
  <Image />
  <h3>Title</h3>
  <p>Description</p>
</div>
```

### After (Editorial)
```tsx
// selected-work.tsx — pure typography
<article className="grid md:grid-cols-2">
  <figure>
    <Image />
  </figure>
  <div>
    <h3 className="font-display text-5xl">Title</h3>
    <p className="text-xl">Description</p>
    <a href="..." className="underline underline-offset-4">
      View Case Study →
    </a>
  </div>
</article>
```

---

## 🎨 Key Features

| Feature | Implementation |
|---------|----------------|
| **No Cards** | Pure typography + hairline rules |
| **Alternating Layout** | Even rows: image-left, Odd: image-right |
| **Large Typography** | Display font at 3xl → 5xl for titles |
| **Subtle Motion** | Staggered fade-in, hover scale |
| **Optimized Images** | Priority first, lazy rest |
| **Accessible** | Semantic HTML, AA contrast |

---

## 🎯 Customization Shortcuts

### Change Section Title
```tsx
// In content/copy.ts
featuredProjects: {
  heading: "Case Studies",  // 👈 Change this
  subheading: "Real projects, real impact",  // 👈 And this
}
```

### Adjust Colors
```tsx
// In selected-work.tsx, find:
className="text-neutral-900 dark:text-neutral-50"  // Title
className="text-neutral-700 dark:text-neutral-300"  // Description
className="text-neutral-500 dark:text-neutral-500"  // Meta/muted
```

### Adjust Spacing
```tsx
// Section padding
className="py-24 md:py-32"  // 👈 96px → 128px

// Between projects
className="space-y-24 md:space-y-32"  // 👈 96px → 128px
```

### Disable Animations
```tsx
// The component auto-detects prefers-reduced-motion
// To manually disable:
const shouldReduceMotion = true  // 👈 Force disable
```

---

## 🧪 Quick Test

### 1. Run Dev Server
```bash
npm run dev
```

### 2. Check Localhost
Navigate to `http://localhost:3000` and scroll to "Selected Work"

### 3. Verify
- ✅ Projects alternate image left/right
- ✅ Titles are large and bold
- ✅ No card borders or shadows
- ✅ Smooth fade-in on scroll
- ✅ Image zoom on hover

---

## 🐛 Common Issues

### Issue: Images not showing
**Fix**: Check `next.config.ts` for allowed image domains
```ts
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' }
  ]
}
```

### Issue: Layout not alternating
**Fix**: Verify grid classes in component
```tsx
className={isEven ? "md:order-1" : "md:order-2"}
```

### Issue: Typography too small on mobile
**Fix**: Adjust responsive classes
```tsx
className="text-3xl md:text-4xl lg:text-5xl"  // 👈 Add md/lg breakpoints
```

---

## 📊 Performance Checklist

- ✅ First image has `priority` prop
- ✅ Other images have `loading="lazy"`
- ✅ Component is dynamically imported
- ✅ Wrapped in `<Suspense>` boundary
- ✅ Images have proper `alt` text
- ✅ `sizes` attribute set for responsive images

---

## 🚀 Next Steps

1. **Add More Projects**: Edit `content/copy.ts` → `featuredProjects.projects[]`
2. **Customize Colors**: Adjust `text-neutral-*` classes in component
3. **Enhance CTAs**: Replace text links with `LinkPreview` from Aceternity
4. **Add Metrics**: Display impact stats below each project
5. **Optimize Images**: Convert to WebP/AVIF for faster loading

---

## 📚 Learn More

- [Full Documentation](/docs/SELECTED_WORK_REDESIGN.md)
- [Visual Guide](/docs/SELECTED_WORK_VISUAL_GUIDE.md)
- [Typography System](/docs/TYPOGRAPHY_SYSTEM.md)
- [Performance Tips](/docs/PERFORMANCE_OPTIMIZATION_COMPLETE.md)

---

**Need help?** Check the full docs or inspect the component code for inline comments.
