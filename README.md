# Pradhyum Upadhyay — Data Analyst Portfolio

A modern, production-ready portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes (Dark/Light mode)
- **Deployment**: Vercel-ready

## ✨ Features

- ✅ **Responsive Design** — Mobile-first, works beautifully on all devices
- ✅ **Dark/Light Mode** — System-aware theme with manual toggle
- ✅ **SEO Optimized** — Meta tags, Open Graph, JSON-LD schema markup
- ✅ **Accessible** — WCAG compliant, keyboard navigation, ARIA labels
- ✅ **Performance** — Optimized for Core Web Vitals, lazy loading, code splitting
- ✅ **Animations** — Smooth, performant animations with Framer Motion
- ✅ **Type-Safe** — Full TypeScript coverage
- ✅ **Modern Components** — Reusable shadcn/ui components
- ✅ **Contact Form** — Ready for integration (EmailJS/API routes)

## 📁 Project Structure

```
hellosanjay-portfolio/
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── about/                # About page
│   │   ├── contact/              # Contact page with form
│   │   ├── experience/           # Experience timeline (CAR format)
│   │   ├── projects/             # Projects & case studies
│   │   ├── services/             # Consulting services
│   │   ├── skills/               # Tech stack & competencies
│   │   ├── writing/              # Articles, talks, open source
│   │   ├── layout.tsx            # Root layout with theme & navigation
│   │   ├── page.tsx              # Homepage
│   │   └── globals.css           # Global styles
│   │
│   ├── components/               # React components
│   │   ├── ui/                   # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   └── textarea.tsx
│   │   ├── sections/             # Homepage sections
│   │   │   ├── hero.tsx
│   │   │   ├── value-props.tsx
│   │   │   ├── social-proof.tsx
│   │   │   ├── featured-projects.tsx
│   │   │   └── cta.tsx
│   │   ├── providers/
│   │   │   └── theme-provider.tsx
│   │   ├── navbar.tsx            # Main navigation
│   │   ├── footer.tsx            # Footer with links
│   │   ├── theme-toggle.tsx      # Dark/light mode switch
│   │   └── schema-markup.tsx     # JSON-LD schemas
│   │
│   └── lib/                      # Utilities & constants
│       ├── utils.ts              # cn() helper
│       ├── constants.ts          # Site config, navigation
│       └── projects-data.ts      # Projects content
│
├── public/                       # Static assets
│   └── logos/                    # Company logos (add your own)
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation Steps

1. **Clone the repository** (or use this as your starting point)
   ```bash
   cd hellosanjay-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Site Configuration

Edit `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  url: "https://yourwebsite.com",
  email: "your.email@example.com",
  phone: "+1-234-567-8900",
  location: "Your City, Country",
  timezone: "Your Timezone",
  social: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    youtube: "https://youtube.com/@yourchannel",
  },
}
```

### Add Your Content

1. **Projects**: Update `src/lib/projects-data.ts`
2. **Experience**: Edit `src/app/experience/page.tsx`
3. **Skills**: Modify `src/lib/constants.ts` (SKILLS object)
4. **About**: Update `src/app/about/page.tsx`
5. **Services**: Edit `src/app/services/page.tsx`

### Update Colors & Theme

Edit `src/app/globals.css` to customize colors:

```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  /* ... other colors */
}

.dark {
  --background: #0a0a0a;
  --foreground: #fafafa;
  /* ... other colors */
}
```

## 📧 Contact Form Integration

The contact form in `src/app/contact/page.tsx` is ready for integration. Choose one:

### Option 1: EmailJS (Recommended)

```bash
npm install @emailjs/browser
```

Update the `handleSubmit` function in `contact/page.tsx`:

```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formState,
      'YOUR_PUBLIC_KEY'
    )
    alert('Message sent successfully!')
  } catch (error) {
    alert('Failed to send message. Please try again.')
  }

  setIsSubmitting(false)
}
```

### Option 2: API Route

Create `src/app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  // Send email using your preferred service
  // (Nodemailer, SendGrid, etc.)

  return NextResponse.json({ success: true })
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

If using external services, add to `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://yourwebsite.com
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```

## 🔍 SEO Optimization

The site includes:

- ✅ Meta tags for each page
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data (Person, WebSite, FAQ)
- ✅ Semantic HTML5
- ✅ Sitemap-ready structure
- ✅ Responsive images with Next.js Image

### Generate Sitemap

Create `src/app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://yourwebsite.com', lastModified: new Date() },
    { url: 'https://yourwebsite.com/about', lastModified: new Date() },
    { url: 'https://yourwebsite.com/projects', lastModified: new Date() },
    // ... add all pages
  ]
}
```

## 🎯 Performance

Target Lighthouse scores: **90+** across all categories

Optimizations included:
- Code splitting with dynamic imports
- Lazy loading for images and components
- Efficient CSS with Tailwind
- Minimal JavaScript bundle
- Font optimization with Next.js Font
- Responsive images with next/image

## 📝 TODO: Pending Items

Before going live, complete these:

1. **Replace placeholder links**:
   - GitHub URL in `src/lib/constants.ts`
   - YouTube URL in `src/lib/constants.ts`
   - Project live/demo URLs in `src/lib/projects-data.ts`
   - Article links in `src/app/writing/page.tsx`
   - Calendly/scheduling link in CTAs

2. **Add assets**:
   - Profile image/avatar
   - Company logos in `public/logos/`
   - Project screenshots
   - Favicon (replace in `src/app/`)
   - Open Graph image

3. **Configure contact form**:
   - Set up EmailJS or API route
   - Test form submission

4. **Add metrics**:
   - Replace `[ADD METRIC]` placeholders in Experience section
   - Add specific performance improvements

5. **Update resume**:
   - Add `public/resume.pdf`

## 🤝 Support

For questions or issues:
- Email: pradhyum2098@gmail.com
- LinkedIn: [/in/pradhyum-upadhyay-b26263240/](https://www.linkedin.com/in/pradhyum-upadhyay-b26263240/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
