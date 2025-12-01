# Documentation Quick Start

Get up and running with the redesigned documentation system in 5 minutes.

---

## Overview

The documentation system provides a premium, editorial reading experience with:
- **Card-free design** — Typography-led, generous whitespace
- **Smart navigation** — Sidebar, TOC, breadcrumbs, search
- **Premium rendering** — MDX with code blocks, callouts, link previews
- **Full accessibility** — Keyboard navigation, screen readers, high contrast

---

## Quick Navigation

### Desktop Experience

1. **Left Sidebar** — Browse all docs by category
   - Click categories to expand/collapse
   - Active page highlighted in primary color
   - Sticky positioning for easy access

2. **Main Content** — Read documentation
   - Click headings to get shareable links
   - Use code block copy buttons
   - Navigate with prev/next at bottom

3. **Right TOC** — Jump within the page
   - Auto-generated from headings
   - Active section highlighted
   - Smooth scroll to sections

### Mobile Experience

1. **Search** — Press the search bar or `⌘K`
2. **Sidebar** — Scroll to top for category navigation
3. **Content** — Main reading area
4. **Sticky Header** — Back button and download always accessible

---

## Key Features

### 1. Search (⌘K)

Press `⌘K` (Mac) or `Ctrl+K` (Windows/Linux) anywhere to open search:

```
┌─────────────────────────────────────┐
│ 🔍 Search documentation...      ⌘K │
└─────────────────────────────────────┘
  ↓
┌─────────────────────────────────────┐
│ ⎕ Typography Quick Start           │
│   Quick start guide for...          │
│   Typography                        │
│                                     │
│ ⎕ Terminal Quick Start              │
│   Get started with...               │
│   Terminal                          │
└─────────────────────────────────────┘
```

Search finds:
- Document titles
- Descriptions
- Categories
- File names

### 2. Anchored Headings

Hover over any heading to see a `#` link icon:

```
## Getting Started  #  ← appears on hover
```

Click to get a shareable URL like:
```
/docs/TYPOGRAPHY_QUICK_START.md#getting-started
```

### 3. Code Blocks

Code blocks include:
- Syntax highlighting
- Copy button
- Line numbers
- File names
- Multi-tab support

Example:
```typescript
const example: string = 'Hello, world!';
console.log(example);
```

### 4. Callouts

Four callout types for important information:

<Callout type="info" title="Info">
Informational callouts use blue accents.
</Callout>

<Callout type="tip" title="Tip">
Helpful tips use green accents.
</Callout>

<Callout type="warning" title="Warning">
Warnings use yellow accents.
</Callout>

<Callout type="danger" title="Danger">
Critical warnings use red accents.
</Callout>

### 5. Link Previews

External links show rich previews on hover:
- Website title
- Description
- Favicon
- Preview image

### 6. Prev/Next Navigation

At the bottom of each doc:
```
┌────────────────────┬────────────────────┐
│ ← PREVIOUS         │         NEXT →     │
│ Typography System  │ Typography Audit   │
│ Complete docs...   │ Detailed audit...  │
└────────────────────┴────────────────────┘
```

Click to navigate within a category.

---

## Navigation Patterns

### Finding Documentation

1. **Browse by Category**
   - Use the sidebar to explore categories
   - Each category shows document count
   - Click to expand and see all docs

2. **Search by Keyword**
   - Press `⌘K` to open search
   - Type keywords
   - Click result to navigate

3. **Follow Breadcrumbs**
   - See your location in the hierarchy
   - Click breadcrumbs to go back

4. **Use Prev/Next**
   - Read docs sequentially within a category
   - Navigate at the bottom of each page

### Reading Documentation

1. **Scan the TOC**
   - See all headings in the right sidebar
   - Click to jump to sections
   - Active section highlighted

2. **Read the Content**
   - Optimized typography for comfortable reading
   - Generous spacing and whitespace
   - Clear hierarchy

3. **Try the Code**
   - Click copy button on code blocks
   - Paste into your editor
   - Follow step-by-step instructions

4. **Share Sections**
   - Hover over headings
   - Click the `#` icon
   - Copy the URL from your browser

---

## Mobile Tips

1. **Search First**
   - Mobile navigation can be cumbersome
   - Use search to find docs quickly
   - `⌘K` works on mobile keyboards

2. **Use Breadcrumbs**
   - Navigate back easily
   - See your location

3. **Sticky Header**
   - Back button always accessible
   - Download button always available

---

## Keyboard Shortcuts

```
⌘K / Ctrl+K    →  Open search
Escape         →  Close search
Tab            →  Navigate links
Enter          →  Follow link
```

---

## Pro Tips

1. **Bookmark Frequently Used Docs**
   - Save common guides to browser bookmarks
   - Use anchored heading links for specific sections

2. **Use Search for Everything**
   - Faster than browsing categories
   - Search descriptions and content
   - Results limited to 8 for focus

3. **Read on Desktop When Possible**
   - Three-column layout optimized for reading
   - TOC makes navigation faster
   - More screen real estate

4. **Download for Offline**
   - Click download button in TOC
   - Get original markdown file
   - Read in your favorite editor

5. **Share Specific Sections**
   - Use anchored heading links
   - Direct colleagues to exact content
   - No scrolling required

---

## Common Tasks

### Finding a Quick Start Guide

1. Press `⌘K`
2. Type "quick start"
3. See all quick start guides
4. Click the one you need

### Understanding a Feature

1. Navigate to feature category in sidebar
2. Look for "Implementation" or "Quick Start" doc
3. Read overview and examples
4. Try the code

### Exploring All Typography Docs

1. Scroll sidebar to "Typography" category
2. Click to expand
3. See all 9 typography docs
4. Start with "Typography Quick Start"

### Sharing a Specific Section

1. Navigate to the doc
2. Hover over the heading
3. Click the `#` icon
4. Copy URL from browser
5. Share with team

---

## Troubleshooting

**Search not working?**
- Make sure JavaScript is enabled
- Try refreshing the page
- Check browser console for errors

**Sidebar not showing?**
- You may be on mobile (sidebar is at top)
- Try expanding your browser window
- Check responsive breakpoint (1024px)

**TOC not updating?**
- Scroll down to trigger IntersectionObserver
- Try refreshing the page
- Check browser compatibility

**Code blocks not copying?**
- Enable clipboard permissions
- Try clicking the copy button again
- Manually select and copy if needed

---

## Next Steps

1. **Explore Featured Docs** — Start with Quick Start guides
2. **Browse Categories** — See all available documentation
3. **Try Search** — Press `⌘K` and search for anything
4. **Read Full Guide** — Check out `DOCS_REDESIGN_COMPLETE.md`

---

*Start exploring the documentation at `/docs` →*
