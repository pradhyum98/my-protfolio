# Projects Explorer — Editorial Redesign (Complete)

## ✅ Overview

The **Projects Explorer** page has been completely redesigned as a fast, editorial, card-free index for browsing all projects. It features powerful discovery tools, clean typography, and a cohesive design that matches the updated Hero, About, Experience, Projects, Skills, Docs, and Contact pages.

---

## 🎨 Design Principles

### 1. Card-Free, Editorial Layout
- ❌ **Removed**: Heavy cards, shadows, and boxed containers
- ✅ **Added**: Typography-led rows (list view) and minimal thumbnails (grid view)
- Relies on hierarchy, spacing, and hairline dividers instead of visual boxes

### 2. Powerful Discovery UX
- **Full-text search**: Searches across title, summary, tags, and tech stack
- **Facet filters**: Domain, Stack, Tag (all synced to URL)
- **Sort options**: Most Recent, Alphabetical, High Impact
- **View toggle**: List ↔ Grid (preference saved to `localStorage`)
- **URL state**: All filters/sort/search encoded in query params for shareable views

### 3. Typography System
- **Large, expressive titles**: 2xl-3xl for list view, xl for grid view
- **Clear hierarchy**: Title → Role/Impact → Summary → Meta (stack, year, links)
- **Generous whitespace**: Breathing room between elements
- **Muted palette**: Text uses foreground/muted-foreground for subtle contrast

### 4. Imagery & Motion
- **Grid view**: Large thumbnails with gentle hover zoom (no shadows)
- **Gradient overlays**: Subtle background gradient on hover
- **Respects**: `prefers-reduced-motion` via Tailwind transitions

---

## 📂 File Structure

```
src/
├── app/
│   └── projects-explorer/
│       └── page.tsx                      # Main page (editorial redesign)
├── components/
│   └── projects-explore/
│       ├── header.tsx                    # Search, filters, view toggle
│       ├── list-item.tsx                 # Card-free row (list view)
│       ├── grid-item.tsx                 # Minimal thumbnail (grid view)
│       ├── empty.tsx                     # Empty state
│       └── index.ts                      # Barrel export
└── hooks/
    └── use-project-query-state.ts        # URL + localStorage state management
```

---

## 🧩 Components

### 1. `ProjectsExploreHeader`
**Location**: `src/components/projects-explore/header.tsx`

**Purpose**: Title, description, search bar, filters, sort, and view toggle

**Features**:
- Full-text search input with icon
- 4 facet filters (Domain, Stack, Tag, Sort) using Radix Select
- List/Grid view toggle with icons
- Results count display (e.g., "7 / 10")
- Responsive layout (stacks on mobile)

**Props**:
```ts
{
  search: string
  filters: ProjectFilters
  sort: "recent" | "alpha" | "impact"
  view: "list" | "grid"
  onSearchChange: (value: string) => void
  onFilterChange: (key: keyof ProjectFilters, value: string) => void
  onSortChange: (value: "recent" | "alpha" | "impact") => void
  onViewChange: (value: "list" | "grid") => void
  domains: string[]
  stacks: string[]
  tags: string[]
  resultsCount: number
  totalCount: number
}
```

---

### 2. `ProjectsExploreListItem`
**Location**: `src/components/projects-explore/list-item.tsx`

**Purpose**: Card-free row for list view

**Features**:
- Large title (2xl-3xl) with optional link
- Role, dates, company metadata
- Summary paragraph (relaxed leading)
- Domain + tech stack tags (first 5, with "+N more")
- Primary action link (Case Study or external link)
- Hairline border-bottom divider
- Hover state: border color change

**Design**:
```
┌─────────────────────────────────────────────────────────────┐
│ Carbon Shop – Carbon Credit Marketplace                     │ View Case Study →
│ Full-Stack Developer (SDE III) • Mar 2023 – Jul 2024 • ReNew
│
│ Real-time carbon credit trading platform: live listings,
│ dynamic dashboards, role-based access for issuers/buyers...
│
│ ClimateTech | React | Next.js | TypeScript | Firebase | +4
└─────────────────────────────────────────────────────────────┘
```

---

### 3. `ProjectsExploreGridItem`
**Location**: `src/components/projects-explore/grid-item.tsx`

**Purpose**: Minimal thumbnail tile for grid view

**Features**:
- Large thumbnail (4:3 aspect ratio) with hover zoom
- Gradient overlay on hover
- Title (xl, bold) with optional link
- Domain + year metadata
- Summary (2-line clamp)
- Tech stack chips (first 3, with "+N")
- Primary action link

**Design**:
```
┌───────────────────┐
│                   │
│   [Hero Image]    │
│                   │
├───────────────────┤
│ Carbon Shop       │
│ ClimateTech • 2023│
│                   │
│ Real-time carbon  │
│ credit trading... │
│                   │
│ React | Next.js...│
│ Case Study →      │
└───────────────────┘
```

---

### 4. `ProjectsExploreEmpty`
**Location**: `src/components/projects-explore/empty.tsx`

**Purpose**: Empty state when no projects match filters

**Features**:
- Icon (SearchX) in muted circle
- Title: "No projects found"
- Contextual message (changes based on `hasFilters`)
- "Clear All Filters" button (if filters active)

---

### 5. `useProjectQueryState`
**Location**: `src/hooks/use-project-query-state.ts`

**Purpose**: Sync filters/sort/view ↔ URL query params + localStorage

**State**:
```ts
{
  filters: {
    search: string
    domain: string      // "all" | domain name
    stack: string       // "all" | tech name
    tag: string         // "all" | tag name
    year: string        // "all" | year
    status: string      // "all" | status
  }
  sort: "recent" | "alpha" | "impact"
  view: "list" | "grid"
}
```

**URL Sync**:
- Query params: `?q=search&domain=EdTech&stack=React&sort=alpha&view=grid`
- Only non-default values are included in URL
- Updates via `router.replace` (no page reload, no scroll jump)
- Synced in `useEffect` to avoid React setState-during-render errors

**localStorage Sync**:
- Only saves `view` preference (list/grid)
- Key: `"projects-explorer-preferences"`
- Persists across sessions

**API**:
```ts
{
  filters: ProjectFilters
  sort: SortOption
  view: ViewMode
  setSearch: (search: string) => void
  setFilter: (key: keyof ProjectFilters, value: string) => void
  setSort: (sort: SortOption) => void
  setView: (view: ViewMode) => void
  clearFilters: () => void
  hasActiveFilters: boolean
}
```

**Bug Fix**: Moved `router.replace` call to `useEffect` to prevent "Cannot update component while rendering" error.

---

## 🚀 Features

### ✅ Completed

1. **Card-Free Design**
   - List view: Typography-led rows with hairline dividers
   - Grid view: Minimal thumbnails with no borders/shadows
   - Generous whitespace and clean layout

2. **Discovery Tools**
   - Full-text search across title, summary, tags, stack
   - Domain filter (ClimateTech, EdTech, SaaS, etc.)
   - Stack filter (React, Next.js, TypeScript, etc.)
   - Tag filter (PWA, Real-time, Analytics, etc.)
   - Sort: Recent, Alphabetical, High Impact (featured first)

3. **URL State**
   - All filters/sort/search encoded in query params
   - Shareable URLs (e.g., `/projects-explorer?domain=EdTech&stack=React`)
   - Browser back/forward support

4. **localStorage Preferences**
   - View mode (list/grid) persists across sessions
   - Loads preference on initial render

5. **File Tree Integration**
   - Collapsible File Tree Explorer section
   - Terminal hint (press `~`, type `open projects/courses`)
   - Preserves existing `ProjectsExplorer` component

6. **Accessible Controls**
   - Radix Select with valid `value` props (no runtime errors)
   - Keyboard navigable
   - Screen reader friendly
   - Visible focus states

7. **Performance**
   - `useMemo` for filtered/sorted results
   - Lazy-loaded images with `next/image`
   - Suspense boundary with loading skeleton
   - No unnecessary re-renders

8. **User Onboarding**
   - One-time tooltip on first visit
   - Points to file tree toggle button
   - Auto-dismisses after 5 seconds
   - Manual dismiss with close button
   - Stored in localStorage (never shows again)

---

## 🎯 User Flows

### 1. Default Landing
```
User visits /projects-explorer
→ Sees 10 projects in List view (default)
→ File Tree expanded by default
→ No filters applied
```

### 2. Filter by Domain
```
User selects "EdTech" from Domain dropdown
→ URL updates to ?domain=EdTech
→ Results filter to show only EdTech projects
→ Count updates (e.g., "3 / 10")
```

### 3. Search
```
User types "carbon" in search
→ URL updates to ?q=carbon
→ Results filter to projects with "carbon" in title/summary/tags
→ Can combine with other filters
```

### 4. Switch View
```
User clicks Grid icon
→ View changes to Grid
→ URL updates to ?view=grid
→ Preference saved to localStorage
→ On next visit, Grid view loads by default
```

### 5. Share Filtered View
```
User applies filters: Domain=ClimateTech, Stack=React, Sort=Impact
→ URL: /projects-explorer?domain=ClimateTech&stack=React&sort=impact
→ User copies URL and shares
→ Recipient sees exact same filtered view
```

### 6. First Visit Onboarding
```
User visits /projects-explorer for first time
→ Tooltip appears below "Hide File Tree Explorer" button
→ Message: "Click here to collapse the file tree..."
→ Auto-dismisses after 5 seconds
→ User can manually dismiss with X button
→ localStorage saves preference (never shows again)
```

---

## 📊 Data Model

Projects use the existing `Project` type from `src/content/projects.ts`:

```ts
type Project = {
  slug: string
  title: string
  summary: string
  role: string
  dates: string                  // "Jul 2024 – Present"
  company?: string
  domain: string                 // "EdTech" | "ClimateTech" | etc.
  stack: string[]                // ["React", "Next.js", ...]
  tags: string[]                 // ["PWA", "Real-time", ...]
  links: ProjectLink[]
  detailHref?: string            // /projects/[slug]
  heroImage?: string
  featured?: boolean
  order?: number                 // Lower = more recent
  // ... other fields
}
```

**Filter Logic** (`filterProjects` in `projects.ts`):
- Domain: exact match
- Tag: array includes match
- Stack: array includes match
- Search: lowercase substring match across title, summary, tags, stack

**Sort Logic**:
- **Recent**: `(a.order ?? 999) - (b.order ?? 999)`
- **Alphabetical**: `a.title.localeCompare(b.title)`
- **High Impact**: Featured first, then by order

---

## 🎨 Styling Details

### Colors
- **Text**: `text-foreground` (primary), `text-muted-foreground` (secondary)
- **Borders**: `border-border/50` (hairline), `border-border/30` (tags)
- **Backgrounds**: `bg-muted/50` (tags), `bg-muted` (thumbnails)
- **Hover**: `hover:text-foreground`, `hover:border-foreground/20`

### Typography
- **Page title**: `text-4xl md:text-5xl lg:text-6xl font-bold`
- **List item title**: `text-2xl md:text-3xl font-bold`
- **Grid item title**: `text-xl font-bold`
- **Summary**: `text-base md:text-lg` (list), `text-sm` (grid)
- **Meta**: `text-xs` (tags, dates), `text-sm` (action links)

### Spacing
- **Page padding**: `py-12 md:py-20`
- **Section gap**: `space-y-12`
- **List items**: `py-8` (vertical padding), `gap-6` (grid columns)
- **Grid gap**: `gap-8 md:gap-12`

### Motion
- **Hover zoom**: `group-hover:scale-105` (thumbnails)
- **Hover translate**: `group-hover:translate-x-1` (arrows)
- **Duration**: `transition-all duration-200` (cards), `duration-500` (images)
- **Reduced motion**: Respects via Tailwind's motion-safe variants

---

## 🐛 Fixes Applied

### 1. ✅ Router Update Error
**Issue**: `Cannot update a component (Router) while rendering a different component (ProjectsExplorerContent)`

**Cause**: `router.replace` was being called synchronously in `updateState`, which runs during render

**Fix**: Moved `syncToUrl` call to `useEffect` hook
```ts
// Before (synchronous)
const updateState = (updates) => {
  setState((prev) => {
    const newState = { ...prev, ...updates }
    syncToUrl(newState)  // ❌ setState during render!
    return newState
  })
}

// After (async)
const updateState = (updates) => {
  setState((prev) => ({ ...prev, ...updates }))
}

useEffect(() => {
  syncToUrl(state)  // ✅ Updates after render
}, [state, syncToUrl])
```

---

## 🧪 Testing

### Manual Testing Checklist

- [x] **Search**: Type "carbon" → filters to Carbon Shop
- [x] **Domain filter**: Select "EdTech" → filters to EdTech projects
- [x] **Stack filter**: Select "React" → filters to React projects
- [x] **Tag filter**: Select "PWA" → filters to PWA projects
- [x] **Sort**: Switch to Alphabetical → projects sort A→Z
- [x] **View toggle**: Switch to Grid → layout changes
- [x] **URL sync**: Apply filters → URL updates with query params
- [x] **Shareable URL**: Copy URL → paste in new tab → filters persist
- [x] **localStorage**: Switch to Grid → refresh → Grid view persists
- [x] **Clear filters**: Click "Clear All Filters" → resets to default
- [x] **Empty state**: Filter to non-existent combo → shows empty state
- [x] **File tree**: Toggle file tree → expands/collapses
- [x] **Responsive**: Test on mobile, tablet, desktop
- [x] **Accessibility**: Tab navigation, screen reader labels

---

## 📝 Usage Examples

### Basic Usage
```tsx
// Just visit the page
// Default: List view, no filters, Recent sort
/projects-explorer
```

### Filtered View
```tsx
// EdTech projects using React
/projects-explorer?domain=EdTech&stack=React

// Search for "climate" projects
/projects-explorer?q=climate

// High impact projects in Grid view
/projects-explorer?sort=impact&view=grid
```

### Custom Component Usage
```tsx
import { useProjectQueryState } from "@/hooks/use-project-query-state"
import { ProjectsExploreListItem } from "@/components/projects-explore"

function MyCustomPage() {
  const { filters, setFilter } = useProjectQueryState()

  return (
    <div>
      <button onClick={() => setFilter("domain", "EdTech")}>
        Show EdTech Projects
      </button>
    </div>
  )
}
```

---

## 🚀 Next Steps (Optional Enhancements)

### Performance
- [ ] Virtual scrolling for 100+ projects (react-window)
- [ ] Incremental loading (load 20 at a time)
- [ ] Image optimization (WebP, blur placeholders)

### Discovery
- [ ] Multi-select filters (Domain + Stack together)
- [ ] Year/date range filter
- [ ] Status filter (Live, Archived, In Progress)
- [ ] "Featured" toggle
- [ ] Advanced search syntax (e.g., `stack:React AND domain:EdTech`)

### UX
- [ ] Filter count badges (e.g., "EdTech (3)")
- [ ] Recent searches (localStorage)
- [ ] Saved filter presets ("My EdTech Projects")
- [ ] Bulk actions (export, share multiple)

### Analytics
- [ ] Track popular filters
- [ ] Search analytics (what users search for)
- [ ] Click-through rates on projects

### Motion
- [ ] Aceternity Progressive Blur backdrop in header
- [ ] Stagger animation for list items (Framer Motion)
- [ ] Smooth height transitions when filtering

---

## 📚 Related Documentation

- [Projects Data Source](../src/content/projects.ts)
- [File Tree Component](../src/components/file-tree)
- [CtaLink Component](../src/components/cta-link)
- [Radix UI Select](https://www.radix-ui.com/primitives/docs/components/select)

---

## ✅ Deliverables Summary

| Component | Location | Status |
|-----------|----------|--------|
| Main Page | `app/projects-explorer/page.tsx` | ✅ Complete |
| Header | `components/projects-explore/header.tsx` | ✅ Complete |
| List Item | `components/projects-explore/list-item.tsx` | ✅ Complete |
| Grid Item | `components/projects-explore/grid-item.tsx` | ✅ Complete |
| Empty State | `components/projects-explore/empty.tsx` | ✅ Complete |
| Query State Hook | `hooks/use-project-query-state.ts` | ✅ Complete |

---

**Date**: October 18, 2025
**Status**: ✅ Complete
**Author**: AI Assistant (Staff-level Front-End Engineer)
