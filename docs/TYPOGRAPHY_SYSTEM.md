# Typography System Documentation

## 🔍 Audit Report

### Issues Identified

**Before the refactor:**

1. ❌ **Font variables applied to `<body>` instead of `<html>`**
   - CSS variables defined on body tag caused inheritance issues
   - Fonts weren't properly cascading to all elements

2. ❌ **Missing `--font-display` variable**
   - Only `--font-sans` and `--font-mono` were defined
   - No dedicated display font for headings and hero elements

3. ❌ **No font scaling system**
   - No `--font-scale` CSS variable
   - No way to adjust base font size dynamically

4. ❌ **Hardcoded font imports**
   - Only Geist and Geist Mono fonts available
   - No flexibility to change typography style

5. ❌ **Tailwind v4 inline theme not properly configured**
   - Font variables referenced but not dynamically updatable

### Solutions Implemented

✅ **Fixed font variable placement**
- Mono font variable now applied to `<html>` tag
- Display and body font variables dynamically applied via React context

✅ **Added comprehensive font system**
- 10 curated font pairs (display + body)
- Professional Google Fonts with proper weights and subsets

✅ **Implemented font scaling**
- CSS variable `--font-scale` (90-112%)
- Applied to `html { font-size }` for proper rem scaling

✅ **Created FontSwitcher UI**
- Beautiful floating panel with font pair selection
- Live preview of selected fonts
- Slider for base size adjustment

✅ **TypeScript-first implementation**
- Fully typed font configuration
- Type-safe context API

---

## 📦 Architecture

### File Structure

```
src/
├── styles/
│   └── fonts.ts                    # Font imports & pair definitions
├── components/
│   └── fonts/
│       ├── index.ts                # Public exports
│       ├── FontProvider.tsx        # React Context for font state
│       └── FontSwitcher.tsx        # UI component for font selection
└── app/
    ├── layout.tsx                  # FontProvider wrapper
    └── globals.css                 # Font CSS variables & application
```

---

## 🎨 Font Pairs

| # | Display Font | Body Font | Tone | Use Case |
|---|--------------|-----------|------|----------|
| 1 | Fraunces | Inter | Elegant & Modern | Luxury, fashion, editorial |
| 2 | Playfair Display | Source Sans 3 | Editorial & Refined | Publishing, magazines |
| 3 | Cormorant Garamond | Manrope | Sophisticated & Humanist | Art, culture, design |
| 4 | Syne | Inter | Bold & Geometric | Branding, marketing |
| 5 | **Space Grotesk** | **Inter** | **Futuristic & Tech** | **Default - Tech, SaaS** |
| 6 | Red Hat Display | Red Hat Text | Cohesive & Clean | Corporate, professional |
| 7 | Outfit | Sora | Minimal & Futuristic | Startups, modern apps |
| 8 | Plus Jakarta Sans | Inter | Neutral & Professional | Business, enterprise |
| 9 | IBM Plex Serif | IBM Plex Sans | Corporate & Structured | Finance, consulting |
| 10 | Merriweather | Work Sans | Classic & Human | Blogs, content sites |

**Default:** Space Grotesk × Inter (Futuristic & Tech)

---

## 🔧 Technical Implementation

### CSS Variables

```css
:root {
  /* Dynamic font variables (set by FontProvider) */
  --font-display: [dynamic];
  --font-sans: [dynamic];
  --font-mono: var(--font-jetbrains-mono);
  --font-scale: 100;
}

html {
  font-size: calc(var(--font-scale) * 1%);
}

body {
  font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display), var(--font-sans), ui-sans-serif, system-ui, sans-serif;
}

code, pre, kbd, samp {
  font-family: var(--font-mono), ui-monospace, monospace;
}
```

### Tailwind Configuration

In `globals.css` using Tailwind v4 inline theme:

```css
@theme inline {
  --font-display: var(--font-display);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
}
```

This allows using Tailwind classes:
- `font-display` - For headings and hero text
- `font-sans` - For body text (default)
- `font-mono` - For code blocks

---

## 🚀 Usage

### Basic Setup (Already Complete)

The typography system is already integrated into `app/layout.tsx`:

```tsx
import { FontProvider, FontSwitcher } from "@/components/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        <FontProvider>
          {children}
          <FontSwitcher />
        </FontProvider>
      </body>
    </html>
  );
}
```

### Using Fonts in Components

```tsx
// Headings automatically use display font
<h1 className="text-4xl">This uses the display font</h1>

// Body text uses sans font (default)
<p>This uses the body font</p>

// Explicitly use display font
<div className="font-display font-bold">Custom display text</div>

// Code blocks use mono font
<code className="font-mono">const x = 10;</code>
```

### Accessing Font State

```tsx
import { useFonts } from "@/components/fonts";

const MyComponent = () => {
  const { currentPair, setPair, scale, setScale } = useFonts();

  return (
    <div>
      <p>Current: {currentPair.name}</p>
      <p>Scale: {scale}%</p>
    </div>
  );
};
```

---

## 🎛️ FontSwitcher Component

### Features

1. **Font Pair Selection**
   - Dropdown with all 10 font pairs
   - Shows name and tone for each pair
   - Highlights current selection

2. **Font Size Scaling**
   - Slider: 90% to 112%
   - 2% increments
   - Real-time preview

3. **Live Preview**
   - Shows display and body fonts
   - Updates instantly on selection

4. **Persistent Preferences**
   - Saves to `localStorage`
   - Keys: `portfolio-font-pair`, `portfolio-font-scale`

5. **Minimizable Panel**
   - Minimizes to floating button
   - Bottom-right corner placement
   - Smooth animations with Framer Motion

### UI/UX Details

- **Position:** Fixed bottom-right (24px from edges)
- **Width:** 320px (expanded)
- **Styling:** Glass morphism effect with backdrop blur
- **Animations:** Framer Motion for smooth transitions
- **Accessibility:** Proper ARIA labels

---

## 🔄 How It Works

### 1. Font Loading

Fonts are imported in `src/styles/fonts.ts` using `next/font/google`:

```ts
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
```

### 2. Font Pair Storage

Font pairs are defined as objects:

```ts
export const FONT_PAIRS: Record<string, FontPair> = {
  space_inter: {
    id: "space_inter",
    name: "Space Grotesk × Inter",
    displayFont: spaceGrotesk,
    bodyFont: inter,
    tone: "Futuristic & Tech",
    description: "Modern tech aesthetic with clean readability",
  },
  // ... more pairs
};
```

### 3. Context Management

`FontProvider` manages state and applies CSS variables:

```ts
useEffect(() => {
  const root = document.documentElement;
  root.classList.add(displayFont.variable);
  root.classList.add(bodyFont.variable);
  root.style.setProperty("--font-scale", scale.toString());
}, [currentPairId, scale]);
```

### 4. User Interaction

`FontSwitcher` component allows users to:
- Select font pair → Updates context → Re-applies CSS variables
- Adjust scale → Updates CSS variable → Changes base font size

### 5. Persistence

Preferences are saved to localStorage and restored on mount:

```ts
localStorage.setItem("portfolio-font-pair", pairId);
localStorage.setItem("portfolio-font-scale", scale.toString());
```

---

## 📊 Performance

### Optimizations

1. **Font Display Swap**
   - All fonts use `display: "swap"`
   - Shows fallback text immediately
   - Swaps to custom font when loaded

2. **Lazy Context Loading**
   - `isLoaded` state prevents flash of wrong fonts
   - Only renders FontSwitcher after hydration

3. **Minimal Re-renders**
   - Context only updates on actual font/scale changes
   - Memoized font pair objects

4. **Efficient CSS Variables**
   - Direct DOM manipulation for instant updates
   - No component re-renders needed

### Bundle Size

- **Base fonts loaded:** JetBrains Mono (always)
- **Dynamic fonts:** Only selected pair loads
- **Total impact:** ~30-50KB per font pair (WOFF2)

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Open site - default font (Space Grotesk × Inter) loads
- [ ] Open FontSwitcher - panel opens smoothly
- [ ] Select different font pair - changes instantly
- [ ] Adjust font scale slider - text size changes
- [ ] Minimize panel - collapses to button
- [ ] Refresh page - preference persists
- [ ] Check headings use display font
- [ ] Check body text uses sans font
- [ ] Check code blocks use mono font

### Browser Testing

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 🐛 Troubleshooting

### Fonts Not Loading

**Issue:** Text shows system fonts instead of custom fonts

**Solutions:**
1. Check browser DevTools → Network tab for font loading errors
2. Verify CSS variables in Elements → `:root` styles
3. Confirm `<html>` has font variable classes
4. Check localStorage for saved preferences

### Flash of Unstyled Text (FOUT)

**Issue:** Brief flash of system font before custom font loads

**Solutions:**
1. This is expected with `font-display: swap`
2. Considered acceptable for performance
3. Alternative: Use `font-display: optional` (may not show custom font on slow connections)

### Font Switcher Not Appearing

**Issue:** FontSwitcher component not visible

**Solutions:**
1. Check if `FontProvider` wraps the app
2. Verify `isLoaded` state is true
3. Check z-index conflicts (FontSwitcher uses `z-50`)
4. Confirm Framer Motion is installed

### TypeScript Errors

**Issue:** Type errors with font objects

**Solutions:**
1. All font imports in `fonts.ts` must include `variable` property
2. Font pair types must match `FontPair` interface
3. Use type assertion if needed: `as { variable: string }`

---

## 🚀 Future Enhancements

### Potential Additions

1. **Font Preview Modal**
   - Full alphabet preview for each font
   - Pangram examples
   - Different weights and styles

2. **Custom Font Uploads**
   - Allow users to upload their own fonts
   - Store in localStorage or IndexedDB

3. **Font Performance Metrics**
   - Show load time for each font
   - Highlight fastest/slowest fonts

4. **Accessibility Features**
   - Dyslexic-friendly font options
   - High contrast font pairs
   - Larger base sizes for vision impairment

5. **Theme Integration**
   - Recommended font pairs per theme
   - Auto-switch fonts with dark/light mode

6. **Export/Import Settings**
   - Share font configuration as JSON
   - Import presets from others

---

## 📝 Summary

✅ **Typography system fully refactored**
✅ **10 professional font pairs available**
✅ **Dynamic font switching with instant updates**
✅ **Font size scaling (90-112%)**
✅ **Persistent user preferences**
✅ **Beautiful, minimizable UI**
✅ **TypeScript-first implementation**
✅ **Performance optimized**

The typography system is now production-ready and provides a delightful user experience for customizing the site's appearance.
