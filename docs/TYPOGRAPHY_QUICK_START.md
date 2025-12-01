# Typography System - Quick Start Guide

## 🎯 TL;DR

We fixed broken fonts and built a **FontSwitcher** that lets users choose from 10 professional font pairs and adjust base font size.

---

## ⚡ What Was Fixed

### Before ❌
```tsx
// Font variables on <body> (wrong)
<body className={`${geistSans.variable} ${geistMono.variable}`}>

// Only 2 fonts available (Geist Sans & Mono)
// No font-display variable
// No dynamic font switching
// No font scaling
```

### After ✅
```tsx
// Mono font on <html>, display/body fonts applied dynamically
<html className={jetbrainsMono.variable}>
<body>
  <FontProvider>
    {children}
    <FontSwitcher />
  </FontProvider>
</body>

// 10 font pairs available
// Full font-display, font-sans, font-mono system
// Dynamic switching with localStorage persistence
// Font scaling (90-112%)
```

---

## 🎨 Using Fonts in Your Components

### Headings (Display Font)

```tsx
// Automatically uses display font
<h1 className="text-4xl font-bold">Hero Title</h1>
<h2 className="text-3xl">Section Header</h2>

// Explicit display font
<span className="font-display text-2xl">Custom Display Text</span>
```

### Body Text (Sans Font)

```tsx
// Default font (no className needed)
<p>This paragraph uses the body font automatically.</p>

// Explicit sans font
<div className="font-sans">Body content</div>
```

### Code (Mono Font)

```tsx
// Automatically uses mono font
<code>const x = 10;</code>
<pre>function() { }</pre>

// Explicit mono font
<span className="font-mono">Terminal text</span>
```

---

## 🎛️ Available Font Pairs

| Pair Name | Display | Body | Tone |
|-----------|---------|------|------|
| **Space Grotesk × Inter** ⭐ | Space Grotesk | Inter | Tech/Modern |
| Fraunces × Inter | Fraunces | Inter | Elegant |
| Playfair × Source Sans 3 | Playfair Display | Source Sans 3 | Editorial |
| Cormorant × Manrope | Cormorant Garamond | Manrope | Sophisticated |
| Syne × Inter | Syne | Inter | Bold |
| Red Hat Display × Text | Red Hat Display | Red Hat Text | Clean |
| Outfit × Sora | Outfit | Sora | Minimal |
| Plus Jakarta × Inter | Plus Jakarta Sans | Inter | Professional |
| IBM Plex Serif × Sans | IBM Plex Serif | IBM Plex Sans | Corporate |
| Merriweather × Work Sans | Merriweather | Work Sans | Classic |

⭐ Default on first visit

---

## 🔧 Accessing Font State

```tsx
import { useFonts } from "@/components/fonts";

const MyComponent = () => {
  const { currentPair, setPair, scale, setScale } = useFonts();

  return (
    <div>
      <h2>Current Font: {currentPair.name}</h2>
      <p>Tone: {currentPair.tone}</p>
      <p>Scale: {scale}%</p>

      <button onClick={() => setPair("playfair_source")}>
        Switch to Playfair
      </button>

      <button onClick={() => setScale(110)}>
        Increase Size
      </button>
    </div>
  );
};
```

---

## 📦 What Was Added

### New Files

1. **`src/styles/fonts.ts`** - Font imports and pair definitions
2. **`src/components/fonts/FontProvider.tsx`** - Context provider
3. **`src/components/fonts/FontSwitcher.tsx`** - UI component
4. **`src/components/fonts/index.ts`** - Public exports

### Modified Files

1. **`src/app/layout.tsx`** - Added FontProvider and FontSwitcher
2. **`src/app/globals.css`** - Added font CSS variables and scaling

---

## 🎯 User Experience

### Opening the FontSwitcher

1. Look for **Type icon** (📝) in bottom-right corner
2. Click to open the typography panel
3. See current font pair and scale

### Changing Fonts

1. Click the font pair dropdown
2. Browse 10 options with live names and tones
3. Click to select → instant update
4. Preview shows new fonts immediately

### Adjusting Size

1. Drag the slider (90% to 112%)
2. Text updates in real-time
3. Affects all text proportionally

### Minimizing

1. Click the down arrow to minimize
2. Panel collapses to small button
3. Click button to re-open

---

## 💾 Persistence

User preferences are automatically saved to `localStorage`:

- **Key:** `portfolio-font-pair`
- **Value:** Font pair ID (e.g., `"space_inter"`)

- **Key:** `portfolio-font-scale`
- **Value:** Scale percentage (e.g., `"100"`)

Preferences persist across:
- Page reloads
- Browser restarts
- Different pages on the site

---

## 🧪 Testing Your Changes

### Quick Test

```bash
npm run dev
```

1. ✅ Open http://localhost:3000
2. ✅ Text should use **Space Grotesk** for headings
3. ✅ Text should use **Inter** for body
4. ✅ Open FontSwitcher (bottom-right)
5. ✅ Change to "Playfair × Source Sans 3"
6. ✅ Headings change to Playfair immediately
7. ✅ Adjust scale slider → text size changes
8. ✅ Refresh page → preferences persist

### Browser DevTools Check

1. Open DevTools → Elements
2. Select `<html>` element
3. Check computed styles:
   - `--font-display` should be defined
   - `--font-sans` should be defined
   - `--font-mono` should be defined
   - `--font-scale` should be `100` (or user value)

---

## 🐛 Common Issues

### "Fonts not changing"

**Cause:** Font variables not applied to `<html>`

**Fix:** Check `FontProvider` is wrapping the app in `layout.tsx`

### "FontSwitcher not visible"

**Cause:** z-index conflict or provider missing

**Fix:** Ensure `<FontSwitcher />` is inside `<FontProvider>`

### "TypeScript errors"

**Cause:** Font object type issues

**Fix:** All fonts in `fonts.ts` must include `variable: "--font-xxx"`

---

## 🚀 Next Steps

### Customize Font Pairs

Edit `src/styles/fonts.ts`:

```ts
import { Your_Font } from "next/font/google";

export const yourFont = Your_Font({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Add to FONT_PAIRS
export const FONT_PAIRS = {
  // ... existing pairs
  custom_pair: {
    id: "custom_pair",
    name: "Your Font × Inter",
    displayFont: yourFont,
    bodyFont: inter,
    tone: "Your Tone",
    description: "Your description",
  },
};
```

### Change Default Font

Edit `src/styles/fonts.ts`:

```ts
// Change this line:
export const DEFAULT_FONT_PAIR = "playfair_source"; // instead of "space_inter"
```

### Customize FontSwitcher Position

Edit `src/components/fonts/FontSwitcher.tsx`:

```tsx
// Change position classes:
<div className="fixed bottom-6 right-6">
// to:
<div className="fixed top-6 left-6"> // Top-left
```

---

## 📚 Full Documentation

See **[TYPOGRAPHY_SYSTEM.md](./TYPOGRAPHY_SYSTEM.md)** for:
- Complete architecture details
- Performance optimization notes
- Troubleshooting guide
- Future enhancement ideas

---

## ✅ Summary

✅ Fonts are now working correctly
✅ 10 professional font pairs available
✅ User can switch fonts instantly
✅ User can adjust base font size
✅ Preferences persist across sessions
✅ Beautiful, minimizable UI
✅ Fully typed with TypeScript

**Your typography system is ready!** 🎉
