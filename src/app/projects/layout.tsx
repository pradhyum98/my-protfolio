import type { Metadata } from "next"
import { copy } from "@/content/copy"
import { getFeaturedProjects } from "@/content/projects"

// ============================================================================
// SEO METADATA
// ============================================================================

export const metadata: Metadata = {
  title: copy.seo.projects.title,
  description: copy.seo.projects.description,
  keywords: copy.seo.projects.keywords,
  openGraph: {
    title: copy.seo.projects.title,
    description: copy.seo.projects.description,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pradhyum Upadhyay - Projects & Case Studies",
      },
    ],
    locale: "en_US",
    url: "https://pradhyum-data-analyst.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: copy.seo.projects.title,
    description: copy.seo.projects.description,
  },
}

// ============================================================================
// JSON-LD STRUCTURED DATA
// ============================================================================

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects & Case Studies",
  description: copy.seo.projects.description,
  author: {
    "@type": "Person",
    name: copy.about.personal.name,
    jobTitle: copy.about.personal.title,
    url: "https://pradhyum-data-analyst.vercel.app",
  },
  hasPart: getFeaturedProjects().map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    dateCreated: project.dates.split("–")[0].trim(),
    keywords: project.tags.join(", "),
  })),
}

// ============================================================================
// LAYOUT COMPONENT
// ============================================================================

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
