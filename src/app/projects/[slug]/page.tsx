import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ExternalLink, ArrowLeft, Target, Lightbulb, Sparkles, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getProjectBySlug, projects } from "@/content/projects"
import { CtaLink } from "@/components/cta-link"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { cn } from "@/lib/utils"

// ============================================================================
// GENERATE STATIC PARAMS
// ============================================================================

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

// ============================================================================
// GENERATE METADATA
// ============================================================================

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} – Pradhyum Upadhyay`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: "article",
      publishedTime: "2024-01-01", // TODO: Add date to project data
      authors: ["Pradhyum Upadhyay"],
      images: project.image
        ? [
          {
            url: project.image,
            width: 1200,
            height: 630,
            alt: project.title,
          },
        ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: project.image ? [project.image] : [],
      creator: "@pradhyum",
    },
    alternates: {
      canonical: `/projects/${params.slug}`,
    },
  };
}

// ============================================================================
// PROJECT DETAIL PAGE — EDITORIAL CASE STUDY
// ============================================================================

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.shortDescription,
    image: project.image,
    author: {
      "@type": "Person",
      name: "Pradhyum Upadhyay",
      jobTitle: "Senior Full-Stack Engineer (SDE III)",
    },
    dateCreated: project.dates.split("–")[0].trim(),
    keywords: [...project.tags, ...project.stack].join(", "),
    image: project.heroImage || project.images?.[0]?.src,
  }

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="relative overflow-hidden bg-background">
        {/* Back Navigation */}
        <div className="container mx-auto max-w-6xl px-6 pt-8 md:pt-12">
          <Button
            variant="ghost"
            size="sm"
            className="group -ml-2 mb-6 hover:bg-transparent"
            asChild
          >
            <CtaLink href="/projects" aria-label="Back to Projects">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="ml-2">All Projects</span>
            </CtaLink>
          </Button>
        </div>

        {/* ================================================================== */}
        {/* HERO SECTION */}
        {/* ================================================================== */}
        <section className="relative py-16 md:py-24">
          <ProgressiveBlur
            className="absolute inset-0"
            intensity={0.15}
            direction="radial"
          />

          <div className="container relative mx-auto max-w-6xl px-6">
            {/* Tags */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {project.featured && (
                <Badge
                  variant="default"
                  className="bg-gradient-to-r from-indigo-600 to-violet-600 border-0"
                >
                  Featured Project
                </Badge>
              )}
              <Badge variant="outline" className="border-muted-foreground/20">
                {project.domain}
              </Badge>
            </div>

            {/* Title & Standfirst */}
            <h1 className="mb-6 max-w-4xl font-display text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {project.summary}
            </p>

            {/* Primary CTAs */}
            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {project.links
                  .filter((link) => link.href !== "[ADD LINK]")
                  .slice(0, 2)
                  .map((link, idx) => (
                    <CtaLink
                      key={idx}
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-base underline decoration-muted-foreground/30 underline-offset-4 transition-all hover:decoration-foreground"
                      aria-label={`${link.label} for ${project.title}`}
                    >
                      {link.kind === "demo" && <ExternalLink className="h-4 w-4" />}
                      <span>{link.label}</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </CtaLink>
                  ))}
              </div>
            )}
          </div>
        </section>

        {/* ================================================================== */}
        {/* HERO IMAGE */}
        {/* ================================================================== */}
        {project.heroImage && (
          <section className="container mx-auto max-w-6xl px-6 mb-20 md:mb-28">
            <figure className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted/30">
              <Image
                src={project.heroImage}
                alt={project.images?.[0]?.alt || `${project.title} hero image`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
              />
            </figure>
            {project.images?.[0]?.caption && (
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                {project.images[0].caption}
              </figcaption>
            )}
          </section>
        )}

        {/* ================================================================== */}
        {/* META INFORMATION */}
        {/* ================================================================== */}
        <section className="border-y border-border/40 bg-muted/10 py-10 md:py-12">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h2 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Role
                </h2>
                <p className="text-base font-medium">{project.role}</p>
              </div>

              {project.company && (
                <div>
                  <h2 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Company
                  </h2>
                  <p className="text-base font-medium">{project.company}</p>
                </div>
              )}

              <div>
                <h2 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Timeline
                </h2>
                <p className="text-base font-medium">{project.dates}</p>
              </div>

              <div>
                <h2 className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.stack.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.stack.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* CHALLENGE & SOLUTION */}
        {/* ================================================================== */}
        {(project.challenge || project.solution) && (
          <section className="py-20 md:py-28">
            <div className="container mx-auto max-w-5xl px-6">
              <div className="grid gap-16 md:gap-20 lg:grid-cols-2">
                {/* Challenge */}
                {project.challenge && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-950/50">
                        <Target className="h-5 w-5 text-red-600 dark:text-red-400" />
                      </div>
                      <h2 className="font-display text-3xl font-semibold tracking-tight">
                        Challenge
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed text-foreground/80">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {/* Solution */}
                {project.solution && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-950/50">
                        <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <h2 className="font-display text-3xl font-semibold tracking-tight">
                        Solution
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed text-foreground/80">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* CONTEXT & BACKGROUND */}
        {/* ================================================================== */}
        {project.context && (
          <section className="py-20 md:py-28 bg-muted/20">
            <div className="container mx-auto max-w-4xl px-6">
              <h2 className="mb-8 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Context & Background
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed text-foreground/80">
                  {project.context}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* KEY CONTRIBUTIONS */}
        {/* ================================================================== */}
        {project.contributions.length > 0 && (
          <section className="py-20 md:py-28">
            <div className="container mx-auto max-w-4xl px-6">
              <div className="mb-12 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950/50">
                  <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Key Contributions
                </h2>
              </div>

              <ul className="space-y-6">
                {project.contributions.map((contribution, idx) => (
                  <li
                    key={idx}
                    className="group flex gap-4 transition-opacity hover:opacity-80"
                  >
                    <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                    <p className="text-base leading-relaxed text-foreground/90">
                      {contribution}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* TECHNICAL ARCHITECTURE */}
        {/* ================================================================== */}
        {project.architecture && (
          <section className="py-20 md:py-28 bg-muted/20">
            <div className="container mx-auto max-w-4xl px-6">
              <h2 className="mb-8 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Technical Architecture
              </h2>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-foreground/80">
                  {project.architecture}
                </p>

                {/* Tech Stack Pills */}
                <div>
                  <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1.5 text-sm font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* RESULTS & IMPACT */}
        {/* ================================================================== */}
        {project.results.length > 0 && (
          <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-emerald-50/30 dark:from-green-950/10 dark:via-transparent dark:to-emerald-950/10" />

            <div className="container relative mx-auto max-w-4xl px-6">
              <div className="mb-12 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-950/50">
                  <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Results & Impact
                </h2>
              </div>

              <ul className="space-y-5">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 dark:bg-green-500 text-xs font-bold text-white">
                      {idx + 1}
                    </span>
                    <p className="text-base leading-relaxed text-foreground/90">
                      {result}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* WHAT'S NEXT */}
        {/* ================================================================== */}
        {project.nextSteps && (
          <section className="py-20 md:py-28">
            <div className="container mx-auto max-w-4xl px-6">
              <h2 className="mb-8 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                What I&apos;d Do Next
              </h2>
              <p className="text-base leading-relaxed text-foreground/80">
                {project.nextSteps}
              </p>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* PROJECT LINKS */}
        {/* ================================================================== */}
        {project.links.filter((link) => link.href !== "[ADD LINK]").length > 0 && (
          <section className="border-y border-border/40 bg-muted/10 py-12 md:py-16">
            <div className="container mx-auto max-w-4xl px-6">
              <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Project Links
              </h2>
              <div className="flex flex-wrap gap-4">
                {project.links
                  .filter((link) => link.href !== "[ADD LINK]")
                  .map((link, idx) => (
                    <CtaLink
                      key={idx}
                      href={link.href}
                      className={cn(
                        "group inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all",
                        idx === 0
                          ? "bg-foreground text-background hover:bg-foreground/90"
                          : "border border-border bg-background hover:bg-muted"
                      )}
                      aria-label={`${link.label} for ${project.title}`}
                    >
                      {link.kind === "demo" && <ExternalLink className="h-4 w-4" />}
                      <span>{link.label}</span>
                    </CtaLink>
                  ))}
              </div>
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* FOOTER CTA */}
        {/* ================================================================== */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="space-y-8 text-center">
              <div className="space-y-4">
                <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  Interested in similar work?
                </h3>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  I&apos;m available for senior full-stack and frontend roles. Let&apos;s discuss how I can help your team ship exceptional products.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="px-8">
                  <CtaLink href="/contact">Get in Touch</CtaLink>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <CtaLink href="/projects">View All Projects</CtaLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
