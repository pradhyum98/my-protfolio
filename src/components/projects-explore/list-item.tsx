"use client"

import * as React from "react"
import { ExternalLink, ArrowRight } from "lucide-react"
import { CtaLink } from "@/components/cta-link"
import type { Project } from "@/content/projects"

type ListItemProps = {
  project: Project
}

export const ProjectsExploreListItem: React.FC<ListItemProps> = ({ project }) => {
  const primaryLink = project.detailHref || project.links[0]?.href
  const isExternal = primaryLink && !primaryLink.startsWith("/")

  return (
    <article className="group relative py-8 border-b border-border/50 last:border-0 hover:border-foreground/20 transition-colors">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">
        {/* Content */}
        <div className="space-y-4">
          {/* Title & Meta */}
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-foreground/80 transition-colors">
              {project.detailHref ? (
                <CtaLink href={project.detailHref} className="hover:underline">
                  {project.title}
                </CtaLink>
              ) : (
                project.title
              )}
            </h3>

            {/* Role & Impact */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground/80">{project.role}</span>
              <span className="text-xs">•</span>
              <span>{project.dates}</span>
              {project.company && (
                <>
                  <span className="text-xs">•</span>
                  <span>{project.company}</span>
                </>
              )}
            </div>
          </div>

          {/* Summary */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wide">
              {project.domain}
            </span>
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-md bg-muted/50 text-muted-foreground border border-border/30"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="text-xs px-2 py-1 text-muted-foreground/60">
                +{project.stack.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Action */}
        {primaryLink && primaryLink !== "[ADD LINK]" && (
          <div className="flex items-center justify-start lg:justify-end">
            <CtaLink
              href={primaryLink}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground group/link transition-colors"
            >
              {project.detailHref ? "View Case Study" : project.links[0]?.label || "View Project"}
              {isExternal ? (
                <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              ) : (
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              )}
            </CtaLink>
          </div>
        )}
      </div>
    </article>
  )
}

