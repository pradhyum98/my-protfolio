"use client"

import * as React from "react"
import Image from "next/image"
import { ExternalLink, ArrowRight } from "lucide-react"
import { CtaLink } from "@/components/cta-link"
import type { Project } from "@/content/projects"

type GridItemProps = {
  project: Project
}

export const ProjectsExploreGridItem: React.FC<GridItemProps> = ({ project }) => {
  const primaryLink = project.detailHref || project.links[0]?.href
  const isExternal = primaryLink && !primaryLink.startsWith("/")

  return (
    <article className="group space-y-4">
      {/* Thumbnail */}
      {project.heroImage && (
        <CtaLink href={primaryLink || "#"} className="block relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
          <Image
            src={project.heroImage}
            alt={project.images?.[0]?.alt || `${project.title} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </CtaLink>
      )}

      {/* Content */}
      <div className="space-y-3">
        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight leading-tight group-hover:text-foreground/80 transition-colors">
          {primaryLink && primaryLink !== "[ADD LINK]" ? (
            <CtaLink href={primaryLink} className="hover:underline">
              {project.title}
            </CtaLink>
          ) : (
            project.title
          )}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground/70">{project.domain}</span>
          <span>•</span>
          <span>{project.dates.split("–")[0].trim()}</span>
        </div>

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.summary}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded bg-muted/50 text-muted-foreground border border-border/30"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-xs px-2 py-0.5 text-muted-foreground/60">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        {/* Action */}
        {primaryLink && primaryLink !== "[ADD LINK]" && (
          <CtaLink
            href={primaryLink}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground group/link transition-colors"
          >
            {project.detailHref ? "Case Study" : project.links[0]?.label || "View"}
            {isExternal ? (
              <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            ) : (
              <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
            )}
          </CtaLink>
        )}
      </div>
    </article>
  )
}

