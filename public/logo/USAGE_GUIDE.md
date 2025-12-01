# SK Logo Usage Guide

## Quick Start

```tsx
import { Logo } from "@/components/logo"

// Basic usage
<Logo variant="filled" size="md" />

// Animated with glow
<Logo variant="filled" size="lg" animated />

// Horizontal with text
<Logo variant="horizontal" size="md" showText />
```

## Available Variants

### 1. **Filled** (Recommended Primary)
- Black silhouette with red-blue glow
- High impact and visibility
- Perfect for headers and hero sections
- Best for dark and light backgrounds

### 2. **Primary**
- Black filled circle with glowing edges
- Red to blue gradient glow
- Clean and professional

### 3. **Glow**
- Enhanced glowing effects
- Multiple blur layers
- Best for emphasis and CTAs

### 4. **Gradient**
- Subtle red-blue gradient
- Lighter glow effect
- Good for inline usage

### 5. **Simple**
- Basic design with gradient
- Thicker strokes for clarity
- Ideal for small sizes (<32px)

### 6. **With Text**
- SK initials inside circle
- Good for business cards
- Professional contexts

### 7. **Orbit**
- Orbital dots around center
- Dynamic feel
- Good for loading states

### 8. **Offset**
- Eccentric dot placement
- Creative and unique
- Good for creative contexts

### 9. **Horizontal**
- Includes "Sanjay Kumar" text
- Perfect for navigation bars
- Use with `showText` prop

## Size Guidelines

| Size | Pixels | Use Case |
|------|--------|----------|
| xs | 24×24 | Favicons, tiny icons |
| sm | 32×32 | Navigation bars |
| md | 48×48 | Default, cards |
| lg | 64×64 | Headers, features |
| xl | 96×96 | Hero sections |

## Color Scheme

- **Primary Red**: `#ef4444` / `#dc2626`
- **Transition Purple**: `#a855f7` / `#8b5cf6`
- **Primary Blue**: `#3b82f6` / `#2563eb`
- **Black Fill**: `#000000`
- **White Accent**: `#ffffff`

## Animation

Add `animated` prop for:
- Pulse effect on glow layers
- Smooth breathing animation
- Draws attention without distraction

## Context-Specific Usage

### Navigation Bar
```tsx
<Logo variant="filled" size="sm" animated />
```

### Hero Section
```tsx
<Logo variant="filled" size="xl" animated />
```

### Footer
```tsx
<Logo variant="simple" size="md" />
```

### Business Card
```tsx
<Logo variant="gradient" size="lg" />
```

### Loading State
```tsx
<Logo variant="orbit" size="md" animated />
```

## Theme Compatibility

The logo automatically adapts to theme changes:
- Colors adjust for dark/light mode
- Glow intensity adapts to background
- Maintains visibility in all contexts

## File Formats

### SVG Files Available:
- `sk-logo-primary.svg` - Main filled logo
- `sk-logo-filled.svg` - Enhanced filled version
- `sk-logo-silhouette.svg` - Dramatic silhouette
- `sk-logo-glow.svg` - Maximum glow effect
- `sk-logo-gradient.svg` - Subtle gradient
- `sk-logo-simple.svg` - Simplified design
- `sk-logo-horizontal.svg` - With text
- `sk-logo-favicon.svg` - Optimized for favicon
- `sk-logo-with-text.svg` - SK initials
- `sk-logo-orbit.svg` - Orbital dots
- `sk-logo-offset.svg` - Offset dot

## Best Practices

### DO:
✅ Use `filled` variant as primary logo
✅ Maintain minimum clear space (50% of logo width)
✅ Use animated version for key CTAs
✅ Ensure sufficient contrast with background
✅ Use simple variant for sizes below 32px

### DON'T:
❌ Stretch or distort the logo
❌ Change colors outside the defined palette
❌ Add additional effects or shadows
❌ Place on busy backgrounds
❌ Use multiple animated logos on same page

## Implementation Examples

### React Component
```tsx
import { Logo } from "@/components/logo"

function Header() {
  return (
    <header className="flex items-center">
      <Logo variant="filled" size="sm" animated />
      <nav>...</nav>
    </header>
  )
}
```

### Direct SVG Import
```tsx
import LogoSVG from "@/public/logo/sk-logo-filled.svg"

function Card() {
  return <LogoSVG className="w-12 h-12" />
}
```

### CSS Background
```css
.logo-background {
  background-image: url('/logo/sk-logo-filled.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
```

## Support

For questions or custom variations, refer to:
- Component: `/src/components/logo/Logo.tsx`
- SVG Files: `/public/logo/`
- Demo Page: `/demo/logo-showcase`
- Design Rationale: `/public/logo/LOGO_DESIGN_RATIONALE.md`
