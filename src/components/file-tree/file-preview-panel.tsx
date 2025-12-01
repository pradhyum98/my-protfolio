"use client"

import * as React from "react"
import { ExternalLinkIcon, GithubIcon, PlayIcon, FileTextIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type FileTreeFile, type FilePreviewContent } from "@/types/file-tree"
import { projects } from "@/lib/projects-data"
import { SKILLS } from "@/lib/constants"
import { cn } from "@/lib/utils"

// ============================================================================
// PREVIEW RENDERERS
// ============================================================================

type PreviewProps = {
  content: FilePreviewContent
}

const ProjectPreview: React.FC<{ projectId: string }> = ({ projectId }) => {
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Project details not available
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-muted-foreground">{project.shortDescription}</p>
          </div>
          {project.featured && (
            <Badge variant="secondary" className="shrink-0">
              Featured
            </Badge>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Full Description */}
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <p>{project.fullDescription}</p>
      </div>

      {/* Context & Results */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <h3 className="text-sm font-semibold mb-2">Context</h3>
          <p className="text-sm text-muted-foreground">{project.context}</p>
        </div>
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <h3 className="text-sm font-semibold mb-2">Results</h3>
          <p className="text-sm text-muted-foreground">{project.results}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 pt-4">
        <Button asChild>
          <a href="/projects">
            <FileTextIcon className="mr-2 h-4 w-4" />
            Full Case Study
          </a>
        </Button>

        {project.liveUrl && project.liveUrl !== "[ADD LINK]" && (
          <Button variant="outline" asChild>
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}

        {project.githubUrl && project.githubUrl !== "[ADD LINK]" && (
          <Button variant="outline" asChild>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" />
              Source Code
            </a>
          </Button>
        )}

        {project.demoUrl && project.demoUrl !== "[ADD LINK]" && (
          <Button variant="outline" asChild>
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              <PlayIcon className="mr-2 h-4 w-4" />
              Watch Demo
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

const MarkdownPreview: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="p-6">
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <pre className="whitespace-pre-wrap text-sm">{content}</pre>
      </div>
    </div>
  )
}

const JsonPreview: React.FC<{ data: unknown }> = ({ data }) => {
  return (
    <div className="p-6">
      <pre className="rounded-lg bg-zinc-950 p-4 text-sm text-zinc-100 overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

const SkillPreview: React.FC<{ category: string; skillName: string }> = ({
  category,
  skillName,
}) => {
  const categorySkills = (SKILLS as unknown as Record<string, string[]>)[category] || []
  const hasSkill = categorySkills.includes(skillName)

  return (
    <div className="p-6 space-y-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">{skillName}</h2>
        <p className="text-muted-foreground capitalize">Category: {category}</p>
      </div>

      {hasSkill ? (
        <div className="space-y-3">
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <h3 className="text-sm font-semibold mb-2">Proficiency</h3>
            <p className="text-sm text-muted-foreground">
              7+ years of hands-on experience in production environments
            </p>
          </div>

          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <h3 className="text-sm font-semibold mb-2">Recent Usage</h3>
            <p className="text-sm text-muted-foreground">
              Actively used in current role at HighLevel for building scalable web applications
            </p>
          </div>
        </div>
      ) : (
        <p className="text-muted-foreground">Skill details not available</p>
      )}
    </div>
  )
}

const ContactPreview: React.FC<{ method: string }> = ({ method }) => {
  const contactInfo: Record<string, { title: string; description: string; action?: string }> = {
    booking: {
      title: "Book a Call",
      description: "Schedule a 30-minute intro call to discuss opportunities, projects, or collaborations.",
      action: "[ADD BOOKING LINK]",
    },
    email: {
      title: "Email Me",
      description: "Send me an email at pradhyum2098@gmail.com. I typically respond within 1 business day.",
      action: "mailto:pradhyum2098@gmail.com",
    },
    linkedin: {
      title: "LinkedIn",
      description: "Connect with me on LinkedIn to stay updated on my professional journey.",
      action: "https://www.linkedin.com/in/luv-jeri",
    },
    github: {
      title: "GitHub",
      description: "Check out my open source work and contributions on GitHub.",
      action: "[ADD GITHUB LINK]",
    },
  }

  const info = contactInfo[method]

  if (!info) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Contact method not found
      </div>
    )
  }

  return (
    <div className="p-6 space-y-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">{info.title}</h2>
        <p className="text-muted-foreground">{info.description}</p>
      </div>

      {info.action && info.action !== "[ADD BOOKING LINK]" && info.action !== "[ADD GITHUB LINK]" && (
        <div className="pt-4">
          <Button asChild>
            <a href={info.action} target="_blank" rel="noreferrer">
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              {info.title}
            </a>
          </Button>
        </div>
      )}
    </div>
  )
}

const PreviewRenderer: React.FC<PreviewProps> = ({ content }) => {
  switch (content.type) {
    case "project":
      return <ProjectPreview projectId={content.projectId} />
    case "markdown":
      return <MarkdownPreview content={content.content} />
    case "json":
      return <JsonPreview data={content.data} />
    case "skill":
      return <SkillPreview category={content.category} skillName={content.skillName} />
    case "contact":
      return <ContactPreview method={content.method} />
    default:
      return (
        <div className="flex h-full items-center justify-center text-muted-foreground">
          Preview not available
        </div>
      )
  }
}

// ============================================================================
// FILE PREVIEW PANEL COMPONENT
// ============================================================================

export type FilePreviewPanelProps = {
  file: FileTreeFile | null
  className?: string
}

export const FilePreviewPanel: React.FC<FilePreviewPanelProps> = ({ file, className }) => {
  if (!file) {
    return (
      <div
        className={cn(
          "flex h-full flex-col items-center justify-center rounded-lg border border-border bg-card p-8 text-center",
          className
        )}
      >
        <FileTextIcon className="h-16 w-16 text-muted-foreground/50 mb-4" />
        <h3 className="text-lg font-semibold mb-2">No File Selected</h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          Select a file from the tree to view its contents and details.
        </p>
      </div>
    )
  }

  return (
    <div className={cn("flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card", className)}>
      {/* File Header */}
      <div className="border-b border-border bg-muted/30 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileTextIcon className="h-5 w-5 text-emerald-500" />
            <div>
              <h3 className="font-semibold">{file.name}</h3>
              <p className="text-xs text-muted-foreground">{file.path}</p>
            </div>
          </div>
          {file.ext && (
            <Badge variant="outline" className="font-mono text-xs">
              .{file.ext}
            </Badge>
          )}
        </div>
      </div>

      {/* File Content */}
      <div className="flex-1 overflow-y-auto">
        {file.preview ? (
          <PreviewRenderer content={file.preview} />
        ) : (
          <div className="flex h-full items-center justify-center p-8 text-center">
            <div>
              <FileTextIcon className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                No preview available for this file type
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
