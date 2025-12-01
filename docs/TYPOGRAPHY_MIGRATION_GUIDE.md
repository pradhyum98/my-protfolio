# Typography System - Migration Guide

This guide explains what changed in the typography refactor and how to adapt your code if needed.

---

## 🔄 What Changed?

### Before (Broken)
```tsx
// layout.tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

```css
/* globals.css */
@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### After (Fixed)
```tsx
// layout.tsx
import { FontProvider, FontSwitcher } from "@/components/fonts";
import { jetbrainsMono } from "@/styles/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="antialiased">
        <ThemeProvider>
          <FontProvider>
            {children}
            <FontSwitcher />
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

```css
/* globals.css */
:root {
  --font-scale: 100;
}

@theme inline {
  --font-display: var(--font-display);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
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
```

---

## 📋 Breaking Changes

### 1. Font Variable Names

**Old:**
```css
--font-geist-sans
--font-geist-mono
```

**New:**
```css
--font-display  /* NEW: For headings */
--font-sans     /* For body text */
--font-mono     /* For code */
```

**Migration:**
If you were using `--font-geist-sans` or `--font-geist-mono` directly in custom CSS:

```css
/* OLD */
.my-custom-class {
  font-family: var(--font-geist-sans);
}

/* NEW */
.my-custom-class {
  font-family: var(--font-sans);
}
```

---

### 2. Font Application

**Old:**
```tsx
// Fonts were implicitly applied (but broken)
<h1>This might not use custom fonts</h1>
```

**New:**
```tsx
// Fonts are explicitly applied via CSS
<h1 className="font-display">This uses display font</h1>
<p className="font-sans">This uses body font</p>
<code className="font-mono">This uses mono font</code>
```

**Migration:**
Your existing headings and text will automatically use the new fonts. If you want to explicitly control which font is used:

```tsx
// Use display font
<div className="font-display">Custom display text</div>

// Use body font
<div className="font-sans">Custom body text</div>

// Use mono font
<span className="font-mono">Code snippet</span>
```

---

### 3. Layout Structure

**Old:**
```tsx
<body className={`${geistSans.variable} ${geistMono.variable}`}>
  <ThemeProvider>
    {children}
  </ThemeProvider>
</body>
```

**New:**
```tsx
<html className={jetbrainsMono.variable}>
  <body>
    <ThemeProvider>
      <FontProvider>
        {children}
        <FontSwitcher />
      </FontProvider>
    </ThemeProvider>
  </body>
</html>
```

**Migration:**
Already done in `src/app/layout.tsx`. No action needed.

---

## ✅ Non-Breaking Changes

These additions won't affect existing code:

### 1. New FontProvider Context

```tsx
import { useFonts } from "@/components/fonts";

const MyComponent = () => {
  const { currentPair, setPair, scale, setScale } = useFonts();
  // Use as needed
};
```

### 2. New FontSwitcher Component

```tsx
// Automatically included in layout
<FontSwitcher />
```

You can optionally hide it by removing it from `layout.tsx`.

### 3. New Font Scaling

```css
html {
  font-size: calc(var(--font-scale) * 1%);
}
```

This scales all `rem` units proportionally. Your existing `px` values are unaffected.

---

## 🔧 Upgrading Existing Components

### Headings

**Before:**
```tsx
<h1 className="text-4xl font-bold">
  My Title
</h1>
```

**After:**
No change needed! Headings automatically use `--font-display` now.

**Optional Enhancement:**
```tsx
<h1 className="font-display text-4xl font-bold">
  My Title
</h1>
```

---

### Body Text

**Before:**
```tsx
<p className="text-base">
  My paragraph
</p>
```

**After:**
No change needed! Text automatically uses `--font-sans` now.

**Optional Enhancement:**
```tsx
<p className="font-sans text-base">
  My paragraph
</p>
```

---

### Code Blocks

**Before:**
```tsx
<code className="text-sm">
  const x = 10;
</code>
```

**After:**
No change needed! Code automatically uses `--font-mono` now.

**Optional Enhancement:**
```tsx
<code className="font-mono text-sm">
  const x = 10;
</code>
```

---

## 🎯 Common Use Cases

### Accessing Current Font

**New Capability:**
```tsx
import { useFonts } from "@/components/fonts";

const MyComponent = () => {
  const { currentPair } = useFonts();

  return <div>Using: {currentPair.name}</div>;
};
```

---

### Programmatic Font Changes

**New Capability:**
```tsx
import { useFonts } from "@/components/fonts";

const FontPicker = () => {
  const { setPair } = useFonts();

  return (
    <button onClick={() => setPair("playfair_source")}>
      Use Playfair Display
    </button>
  );
};
```

---

### Programmatic Scale Changes

**New Capability:**
```tsx
import { useFonts } from "@/components/fonts";

const TextSizeControls = () => {
  const { scale, setScale } = useFonts();

  return (
    <>
      <button onClick={() => setScale(scale - 2)}>Smaller</button>
      <button onClick={() => setScale(scale + 2)}>Larger</button>
    </>
  );
};
```

---

## 📦 Package Changes

### No New Dependencies

All fonts come from `next/font/google` (already installed). The only new dependency used is `framer-motion`, which was already in your project.

**No `package.json` changes needed!**

---

## 🗑️ Removed Code

### What Was Removed

```tsx
// layout.tsx - REMOVED
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```

### Why It Was Removed

- Fonts are now managed centrally in `src/styles/fonts.ts`
- Dynamic switching requires different architecture
- Geist fonts are not included in new font pairs (but can be added)

### How to Add Geist Back

If you want Geist as a font pair option:

```ts
// src/styles/fonts.ts
import { Geist } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const FONT_PAIRS = {
  // ... existing pairs
  geist_inter: {
    id: "geist_inter",
    name: "Geist × Inter",
    displayFont: geist,
    bodyFont: inter,
    tone: "Modern & Clean",
    description: "Next.js default with Inter",
  },
};
```

---

## 🚨 Potential Issues

### Issue 1: Custom Font Utilities

**Problem:**
If you have custom Tailwind utilities referencing old variables:

```js
// tailwind.config.js
extend: {
  fontFamily: {
    custom: ['var(--font-geist-sans)'],
  },
}
```

**Solution:**
Update to new variables:

```js
extend: {
  fontFamily: {
    custom: ['var(--font-sans)'],
  },
}
```

---

### Issue 2: Direct CSS Variable Usage

**Problem:**
If you're using font variables in custom CSS:

```css
.my-class {
  font-family: var(--font-geist-sans);
}
```

**Solution:**
Update variable names:

```css
.my-class {
  font-family: var(--font-sans);
}
```

---

### Issue 3: Font Not Loading on Specific Page

**Problem:**
Font switcher works on homepage but not on other pages.

**Solution:**
Ensure `FontProvider` wraps the entire app in `layout.tsx`, not in individual pages.

```tsx
// ✅ Correct - In layout.tsx
<FontProvider>
  {children}
</FontProvider>

// ❌ Wrong - In page.tsx
<FontProvider>
  <MyPage />
</FontProvider>
```

---

## 📊 Testing Checklist

After migration, verify:

- [ ] Fonts load on all pages
- [ ] Headings use display font
- [ ] Body text uses sans font
- [ ] Code blocks use mono font
- [ ] FontSwitcher appears in bottom-right
- [ ] Changing fonts works
- [ ] Font scale slider works
- [ ] Preferences persist on reload
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Build succeeds

---

## 🆘 Rollback Plan

If you need to revert to the old system:

### 1. Restore Old Layout

```tsx
// src/app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 2. Restore Old CSS

```css
/* src/app/globals.css */
@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

/* Remove these */
html {
  /* font-size: calc(var(--font-scale) * 1%); */
}

body {
  /* font-family: ... */
}
```

### 3. Remove New Files

```bash
rm -rf src/styles/fonts.ts
rm -rf src/components/fonts/
```

**Note:** Rollback is NOT recommended. The old system was broken!

---

## 💡 Pro Tips

### 1. Customize Default Font

```ts
// src/styles/fonts.ts
export const DEFAULT_FONT_PAIR = "playfair_source"; // Instead of "space_inter"
```

### 2. Hide FontSwitcher

```tsx
// src/app/layout.tsx
// Comment out or remove:
// <FontSwitcher />
```

### 3. Preset Font on Specific Pages

```tsx
"use client";
import { useEffect } from "react";
import { useFonts } from "@/components/fonts";

export default function MyPage() {
  const { setPair } = useFonts();

  useEffect(() => {
    setPair("playfair_source"); // Use editorial font for this page
  }, [setPair]);

  return <div>Content</div>;
}
```

### 4. Add Custom Font Pair

See `src/components/fonts/README.md` for detailed instructions.

---

## 📚 Additional Resources

- **Full Documentation:** `docs/TYPOGRAPHY_SYSTEM.md`
- **Quick Start:** `docs/TYPOGRAPHY_QUICK_START.md`
- **Audit Report:** `docs/TYPOGRAPHY_AUDIT_AND_FIX.md`
- **Component README:** `src/components/fonts/README.md`

---

## ✅ Summary

### What You Need to Do

**Nothing!** The migration is complete. Your existing code continues to work with improved typography.

### What You Can Do (Optional)

1. Explicitly add `font-display`, `font-sans`, or `font-mono` classes to components
2. Use `useFonts()` hook to access/change fonts programmatically
3. Add more font pairs to `src/styles/fonts.ts`
4. Customize FontSwitcher position/styling

### What Changed Automatically

- ✅ All headings now use display font
- ✅ All body text now uses sans font
- ✅ All code blocks now use mono font
- ✅ Font scaling system is active
- ✅ Users can customize typography

---

**The migration is seamless. Enjoy your new typography system!** 🎉
