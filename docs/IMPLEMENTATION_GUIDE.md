# String Centralization Implementation Guide

## Overview

All user-visible strings have been centralized to `/src/content/copy.ts`. This provides a single source of truth for all UI copy, making it easier to:

- Update copy without hunting through multiple files
- Maintain consistency across the application
- Prepare for future internationalization (i18n)
- Prevent typos and duplicates
- Audit and QA user-facing content

---

## 4) Usage Examples

### Server Component (Page)

```tsx
// src/app/example/page.tsx
import type { Metadata } from "next"
import { copy } from "@/content/copy"

export const metadata: Metadata = {
  title: copy.seo.example.title,
  description: copy.seo.example.description,
}

export default function ExamplePage() {
  return (
    <div>
      <h1>{copy.example.heading}</h1>
      <p>{copy.example.description}</p>
    </div>
  )
}
```

### Client Component

```tsx
// src/components/example-component.tsx
"use client"

import { copy } from "@/content/copy"
import { Button } from "@/components/ui/button"

export function ExampleComponent() {
  const handleClick = () => {
    alert(copy.example.successMessage)
  }

  return (
    <div>
      <h2>{copy.example.componentHeading}</h2>
      <Button onClick={handleClick}>
        {copy.example.buttonText}
      </Button>
    </div>
  )
}
```

### With Dynamic Content

```tsx
// src/components/greeting.tsx
import { copy } from "@/content/copy"

type Props = {
  userName: string
}

export function Greeting({ userName }: Props) {
  // You can still compose strings dynamically
  return (
    <div>
      <h1>{copy.greeting.welcome}</h1>
      <p>
        {copy.greeting.hello}, {userName}!
      </p>
    </div>
  )
}
```

### Aria Labels and Accessibility

```tsx
// src/components/icon-button.tsx
import { Mail } from "lucide-react"
import { copy } from "@/content/copy"

export function ContactButton() {
  return (
    <button
      aria-label={copy.nav.ariaEmail}
      className="icon-button"
    >
      <Mail />
    </button>
  )
}
```

### Form Placeholders and Labels

```tsx
// src/components/contact-form.tsx
import { copy } from "@/content/copy"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  return (
    <form>
      <label htmlFor="name">
        {copy.contact.formNameLabel}
      </label>
      <Input
        id="name"
        name="name"
        placeholder={copy.contact.formNamePlaceholder}
      />

      <label htmlFor="email">
        {copy.contact.formEmailLabel}
      </label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder={copy.contact.formEmailPlaceholder}
      />
    </form>
  )
}
```

### Metadata and SEO

```tsx
// src/app/projects/page.tsx
import type { Metadata } from "next"
import { SITE_CONFIG } from "@/lib/constants"
import { copy } from "@/content/copy"

export const metadata: Metadata = {
  title: copy.seo.projects.title,
  description: copy.seo.projects.description,
  keywords: copy.seo.projects.keywords,
  openGraph: {
    title: copy.seo.projects.title,
    description: copy.seo.projects.description,
    url: `${SITE_CONFIG.url}/projects`,
  },
}
```

### Array Mapping

```tsx
// src/components/skills-list.tsx
import { copy } from "@/content/copy"

export function SkillsList() {
  const competencies = [
    copy.skills.competencies.architecture,
    copy.skills.competencies.performance,
    copy.skills.competencies.ssr,
    copy.skills.competencies.security,
    copy.skills.competencies.accessibility,
    copy.skills.competencies.crossPlatform,
  ]

  return (
    <ul>
      {competencies.map((competency, idx) => (
        <li key={idx}>
          <h3>{competency.title}</h3>
          <p>{competency.description}</p>
        </li>
      ))}
    </ul>
  )
}
```

---

## 5) Prevent Regressions: CI Integration

### ESLint Rule

A custom ESLint rule `no-hardcoded-strings` has been added to catch new hard-coded strings during development and CI.

**Configuration:** `eslint.config.mjs`

The rule automatically ignores:
- Technical strings (URLs, paths, CSS classes, color codes)
- Configuration files
- Constants files (`copy.ts`, `constants.ts`)
- Test files

### Available Scripts

```bash
# Lint everything (including hard-coded strings check)
yarn lint

# Check only for hard-coded strings
yarn lint:strings

# Full pre-commit check (types + lint + strings + build)
yarn check:all

# CI pipeline (frozen deps + full checks)
yarn ci
```

### Pre-commit Hook (Optional)

Install Husky for automatic pre-commit checks:

```bash
yarn add -D husky lint-staged

# Initialize Husky
npx husky init

# Create pre-commit hook
echo "yarn lint:strings" > .husky/pre-commit
chmod +x .husky/pre-commit
```

Add to `package.json`:

```json
{
  "lint-staged": {
    "src/**/*.{ts,tsx}": [
      "eslint --rule 'local-rules/no-hardcoded-strings: error' --max-warnings=0"
    ]
  }
}
```

### GitHub Actions / CI

Add to `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint-and-build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'yarn'

      - name: Install dependencies
        run: yarn install --frozen-lockfile

      - name: Type check
        run: yarn ts:check

      - name: Lint
        run: yarn lint

      - name: Check for hard-coded strings
        run: yarn lint:strings

      - name: Build
        run: yarn build
```

---

## Guidelines for Adding New Copy

### 1. Add to `copy.ts` First

**❌ BAD:**
```tsx
// src/components/new-feature.tsx
export function NewFeature() {
  return <h1>Welcome to our new feature!</h1>
}
```

**✅ GOOD:**

Step 1: Add to `/src/content/copy.ts`:
```ts
export const copy = {
  // ... existing keys
  newFeature: {
    heading: "Welcome to our new feature!",
    description: "Explore the latest capabilities.",
    ctaButton: "Get Started",
  },
} as const
```

Step 2: Use in component:
```tsx
// src/components/new-feature.tsx
import { copy } from "@/content/copy"

export function NewFeature() {
  return (
    <div>
      <h1>{copy.newFeature.heading}</h1>
      <p>{copy.newFeature.description}</p>
      <button>{copy.newFeature.ctaButton}</button>
    </div>
  )
}
```

### 2. Use Semantic Naming

Keys should be hierarchical and descriptive:

```ts
// ✅ Good naming
copy.hero.badge
copy.cta.requestInterview
copy.contact.formEmailPlaceholder
copy.seo.projects.title

// ❌ Avoid flat or cryptic names
copy.text1
copy.btn
copy.label
```

### 3. Group by Feature/Section

Organize keys by UI section or feature:

```ts
export const copy = {
  nav: { /* navigation copy */ },
  hero: { /* hero section */ },
  about: { /* about page */ },
  contact: { /* contact page */ },
  // ...
}
```

### 4. When to Allow Hard-coded Strings

Some strings are **okay** to hard-code:
- Technical identifiers (class names, IDs)
- Route paths (`/projects`, `/about`)
- Import paths (`@/components/...`)
- CSS values (`text-sm`, `px-4`, `#FF5733`)
- Environment variables (`process.env.NODE_ENV`)

The ESLint rule already ignores these patterns.

---

## Migration Checklist

- [x] Create `/src/content/copy.ts` with all strings
- [x] Update `navbar.tsx`
- [x] Update `hero.tsx`
- [x] Update `value-props.tsx`
- [x] Update `social-proof.tsx`
- [x] Update `featured-projects.tsx`
- [x] Update `cta.tsx`
- [x] Update `footer.tsx`
- [x] Update `floating-dock-nav.tsx`
- [x] Update `schema-markup.tsx`
- [x] Update all page files (`about`, `projects`, `experience`, `skills`, `services`, `contact`, `writing`)
- [x] Update root `layout.tsx` metadata
- [x] Create custom ESLint rule
- [x] Configure ESLint to use custom rule
- [x] Add `yarn lint:strings` script
- [x] Update `yarn check:all` to include string checks
- [ ] Apply all refactor diffs from `REFACTOR_DIFFS.md`
- [ ] Run `yarn lint:strings` and fix any violations
- [ ] Run `yarn build` to verify no runtime errors
- [ ] Test in browser to verify UI unchanged
- [ ] Add pre-commit hook (optional)
- [ ] Add CI workflow (optional)

---

## Troubleshooting

### ESLint Rule Not Working

Make sure:
1. `eslint-rules/` directory exists at project root
2. `eslint-rules/index.js` exports the rule
3. `eslint.config.mjs` imports and registers the plugin
4. Run `yarn lint:strings` to specifically test the rule

### False Positives

If the rule flags technical strings incorrectly, you can:

1. Add to allowed patterns in `eslint.config.mjs`:
```js
allowedPatterns: [
  "^your-pattern$",
]
```

2. Add inline ESLint disable (sparingly):
```tsx
// eslint-disable-next-line local-rules/no-hardcoded-strings
const technicalValue = "some-id-123"
```

### Type Errors with `copy.*`

If TypeScript can't find the type:
```tsx
import { copy } from "@/content/copy"
import type { Copy } from "@/content/copy"
```

The `Copy` type is exported for advanced use cases.

---

## Future: i18n Migration Path

When ready for internationalization:

1. Keep `copy.ts` as the English source
2. Create `/messages/en.json` from `copy.ts`
3. Add translations: `/messages/es.json`, `/messages/fr.json`, etc.
4. Use `next-intl` or similar library
5. Replace direct `copy.*` references with `t('key.path')`

The existing hierarchical structure is i18n-ready!

---

## Summary

✅ **Centralized:** All strings in one place
✅ **Type-safe:** Full TypeScript autocomplete
✅ **Consistent:** No duplicate or conflicting copy
✅ **Guarded:** ESLint prevents new hard-coded strings
✅ **CI-ready:** Automated checks in pipeline
✅ **Future-proof:** Easy path to i18n

**Questions? Issues?**
Check `REFACTOR_DIFFS.md` for detailed diffs of all component changes.
