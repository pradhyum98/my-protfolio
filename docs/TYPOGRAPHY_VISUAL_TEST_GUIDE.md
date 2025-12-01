# Typography System - Visual Testing Guide

Quick visual guide to test the new typography system.

---

## 🚀 Start the Dev Server

```bash
npm run dev
```

Open: http://localhost:3000

---

## 👀 What You Should See

### 1. Initial Page Load

**Check:**
- ✅ Text uses custom fonts (not system UI fonts)
- ✅ Headings look distinct from body text
- ✅ Code blocks use monospace font
- ✅ No flash of unstyled text (FOUT)

**How to Verify:**
1. Open DevTools → Elements
2. Select `<html>` element
3. Check computed styles → `font-family`
4. Should show custom font names, not "system-ui" or "Arial"

---

### 2. FontSwitcher Appearance

**Location:** Bottom-right corner of screen (24px from edges)

**What it looks like:**

```
┌─────────────────────────────────┐
│  📝 Typography              ▼   │ ← Header with Type icon
├─────────────────────────────────┤
│                                 │
│  FONT PAIR                      │
│  ┌───────────────────────────┐ │
│  │ Space Grotesk × Inter  ▼│ │ ← Dropdown
│  │ Futuristic & Tech        │ │
│  └───────────────────────────┘ │
│                                 │
│  BASE SIZE              100%   │
│  ├──────────●──────────┤       │ ← Slider
│  90%                  112%      │
│                                 │
│  ┌───────────────────────────┐ │
│  │ Display Font            │ │ ← Preview
│  │ Body text with excellent│ │
│  │ readability...          │ │
│  └───────────────────────────┘ │
└─────────────────────────────────┘
```

**Minimized:**
```
   ┌────┐
   │ 📝 │ ← Small button
   └────┘
```

---

### 3. Font Pair Dropdown

**Click the dropdown to see:**

```
┌────────────────────────────────────┐
│ Fraunces × Inter                   │
│ Elegant & Modern                   │
├────────────────────────────────────┤
│ Playfair Display × Source Sans 3   │
│ Editorial & Refined                │
├────────────────────────────────────┤
│ Cormorant Garamond × Manrope       │
│ Sophisticated & Humanist           │
├────────────────────────────────────┤
│ Syne × Inter                       │
│ Bold & Geometric                   │
├────────────────────────────────────┤
│ Space Grotesk × Inter         ⭐   │ ← Currently selected
│ Futuristic & Tech                  │
├────────────────────────────────────┤
│ Red Hat Display × Text             │
│ Cohesive & Clean                   │
├────────────────────────────────────┤
│ Outfit × Sora                      │
│ Minimal & Futuristic               │
├────────────────────────────────────┤
│ Plus Jakarta Sans × Inter          │
│ Neutral & Professional             │
├────────────────────────────────────┤
│ IBM Plex Serif × Sans              │
│ Corporate & Structured             │
├────────────────────────────────────┤
│ Merriweather × Work Sans           │
│ Classic & Human                    │
└────────────────────────────────────┘
```

---

## ✅ Interactive Testing

### Test 1: Change Font Pair

**Steps:**
1. Click FontSwitcher to open panel
2. Click the font pair dropdown
3. Select "Playfair Display × Source Sans 3"

**Expected Result:**
- ✅ Dropdown closes
- ✅ All headings change to Playfair Display instantly
- ✅ All body text changes to Source Sans 3 instantly
- ✅ Preview updates to show new fonts
- ✅ No page flash or reload

**Visual Check:**
- Headings should look more "editorial" (serif font)
- Body text should look clean and modern (sans-serif)

---

### Test 2: Adjust Font Scale

**Steps:**
1. Drag the "Base Size" slider to 110%

**Expected Result:**
- ✅ Slider moves smoothly
- ✅ Percentage updates (shows "110%")
- ✅ ALL text on page increases in size
- ✅ Layout adapts to larger text
- ✅ No layout break

**Visual Check:**
- Text should be noticeably larger
- Spacing should remain proportional
- No text overflow or broken layouts

---

### Test 3: Minimize & Restore

**Steps:**
1. Click the down arrow (▼) in header
2. Panel should minimize to small button
3. Click the button again

**Expected Result:**
- ✅ Smooth animation when minimizing
- ✅ Button appears in same position
- ✅ Button shows Type icon (📝)
- ✅ Clicking button re-opens panel
- ✅ Settings are preserved

---

### Test 4: Persistence

**Steps:**
1. Change font to "IBM Plex Serif × Sans"
2. Adjust scale to 106%
3. Refresh the page (⌘+R / Ctrl+R)

**Expected Result:**
- ✅ Page reloads
- ✅ Font is still IBM Plex Serif × Sans
- ✅ Scale is still 106%
- ✅ Settings persisted across reload

**Visual Check:**
- Same fonts as before reload
- Same size as before reload

---

### Test 5: Different Pages

**Steps:**
1. Set font to "Outfit × Sora"
2. Navigate to different pages (About, Projects, etc.)
3. Return to homepage

**Expected Result:**
- ✅ Font stays "Outfit × Sora" on all pages
- ✅ FontSwitcher appears on all pages
- ✅ Settings are global across site

---

## 🔍 Browser DevTools Verification

### Check CSS Variables

1. Open DevTools → Elements
2. Select `<html>` element
3. Check Computed styles

**Should see:**
```css
--font-display: "__className_..." (font variable)
--font-sans: "__className_..." (font variable)
--font-mono: "__className_..." (font variable)
--font-scale: "100" (or user-set value)
```

### Check Font Classes

1. Inspect `<html>` element
2. Look at classes

**Should include:**
```html
<html class="__variable_abc123 __variable_def456 __variable_ghi789">
```

Three `__variable_*` classes (display, sans, mono fonts)

### Check Applied Fonts

1. Inspect any `<h1>` element
2. Check Computed → `font-family`

**Should show:**
```
font-family: "Space Grotesk", var(--font-sans), ui-sans-serif, system-ui, sans-serif
```

Custom font name first, then fallbacks.

---

## 🎨 Visual Comparison

### Before (Broken)

```
┌─────────────────────────────────┐
│ My Portfolio                    │ ← System UI font (Arial/SF Pro)
│                                 │
│ This is body text using the     │ ← System UI font
│ default browser font because    │
│ custom fonts aren't loading.    │
│                                 │
│ <code>const x = 10;</code>      │ ← System monospace
└─────────────────────────────────┘

No FontSwitcher component
No customization
```

### After (Fixed)

```
┌─────────────────────────────────┐
│ My Portfolio                    │ ← Space Grotesk (custom)
│                                 │
│ This is body text using Inter,  │ ← Inter (custom)
│ a professional custom font that │
│ loaded correctly from Google.   │
│                                 │
│ <code>const x = 10;</code>      │ ← JetBrains Mono (custom)
└─────────────────────────────────┘
                         ┌────┐
FontSwitcher present →   │ 📝 │
                         └────┘
```

---

## 🌐 Cross-Browser Testing

### Desktop Browsers

**Chrome/Edge:**
- [ ] Fonts load correctly
- [ ] FontSwitcher appears
- [ ] Font switching works
- [ ] Scale slider works
- [ ] Animations smooth

**Firefox:**
- [ ] Fonts load correctly
- [ ] FontSwitcher appears
- [ ] Font switching works
- [ ] Scale slider works
- [ ] Animations smooth

**Safari:**
- [ ] Fonts load correctly
- [ ] FontSwitcher appears
- [ ] Font switching works
- [ ] Scale slider works
- [ ] Animations smooth

### Mobile Browsers

**Safari (iOS):**
- [ ] Fonts load correctly
- [ ] FontSwitcher appears (bottom-right)
- [ ] Can tap to open/close
- [ ] Font selection works
- [ ] Scale slider works (touch)

**Chrome (Android):**
- [ ] Fonts load correctly
- [ ] FontSwitcher appears (bottom-right)
- [ ] Can tap to open/close
- [ ] Font selection works
- [ ] Scale slider works (touch)

---

## 🐛 Common Issues & Fixes

### Issue: Fonts Not Loading

**Symptoms:**
- Text uses system fonts (Arial, Helvetica, etc.)
- DevTools shows no custom font-family

**Check:**
1. Open DevTools → Console
2. Look for font loading errors
3. Check Network tab → Fonts
4. Verify CSS variables in `:root`

**Fix:**
```tsx
// Ensure FontProvider wraps app in layout.tsx
<FontProvider>
  {children}
</FontProvider>
```

---

### Issue: FontSwitcher Not Visible

**Symptoms:**
- No Type icon in bottom-right
- Can't find FontSwitcher

**Check:**
1. Is `<FontSwitcher />` in `layout.tsx`?
2. Is it inside `<FontProvider>`?
3. Check z-index conflicts

**Fix:**
```tsx
// In layout.tsx
<FontProvider>
  {children}
  <FontSwitcher />  {/* Must be here */}
</FontProvider>
```

---

### Issue: Font Changes Don't Persist

**Symptoms:**
- Fonts reset on page reload
- Preferences not saving

**Check:**
1. Open DevTools → Application → Local Storage
2. Look for keys:
   - `portfolio-font-pair`
   - `portfolio-font-scale`

**Fix:**
- Clear localStorage and try again
- Check browser doesn't block localStorage
- Verify no errors in console

---

### Issue: Fonts Flash on Load

**Symptoms:**
- Brief flash of system font before custom font loads
- Text size jumps

**This is expected!**
- Using `font-display: swap` for performance
- Shows text immediately with fallback
- Swaps to custom font when ready
- Acceptable tradeoff for faster load times

**Alternative (slower):**
Edit `src/styles/fonts.ts` and change:
```ts
display: "swap"  // Shows fallback immediately
// to:
display: "block" // Hides text until font loads (slower UX)
```

---

## 📸 Screenshot Checklist

### Take screenshots of:

1. **Homepage with default fonts**
   - Shows Space Grotesk × Inter
   - FontSwitcher visible in bottom-right

2. **FontSwitcher panel open**
   - Shows all controls
   - Current selection highlighted

3. **Font dropdown open**
   - All 10 font pairs visible
   - Current selection marked

4. **Different font pair selected**
   - Example: Playfair Display × Source Sans 3
   - Shows visual difference in typography

5. **Minimized state**
   - Small button with Type icon
   - Clean, unobtrusive

6. **Mobile view**
   - FontSwitcher on mobile
   - Responsive design

---

## ✅ Final Checklist

Before considering testing complete:

- [ ] Default fonts load (Space Grotesk × Inter)
- [ ] FontSwitcher appears in bottom-right
- [ ] All 10 font pairs work
- [ ] Font changes are instant (no reload)
- [ ] Scale slider adjusts all text
- [ ] Minimize/expand works smoothly
- [ ] Preferences persist on reload
- [ ] Works on all pages
- [ ] Works on Chrome
- [ ] Works on Firefox
- [ ] Works on Safari
- [ ] Works on mobile
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] No layout breaks

---

## 🎉 Success Criteria

**Typography system is working if:**

✅ Custom fonts load (not system fonts)
✅ Headings use display font
✅ Body text uses sans font
✅ Code blocks use mono font
✅ FontSwitcher is visible and functional
✅ Font changes happen instantly
✅ Settings persist across sessions
✅ No errors in console
✅ No visual bugs

---

**Your typography system is ready to use!** 🚀

Enjoy the new professional, customizable typography experience!
