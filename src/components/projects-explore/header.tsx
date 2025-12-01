"use client"

import * as React from "react"
import { Search, LayoutList, LayoutGrid, Folder } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PageHeader } from "@/components/ui/page-header"
import { cn } from "@/lib/utils"
import type { ProjectFilters } from "@/hooks/use-project-query-state"

type HeaderProps = {
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

export const ProjectsExploreHeader: React.FC<HeaderProps> = ({
  search,
  filters,
  sort,
  view,
  onSearchChange,
  onFilterChange,
  onSortChange,
  onViewChange,
  domains,
  stacks,
  tags,
  resultsCount,
  totalCount,
}) => {
  return (
    <div className="space-y-8">
      {/* Title & Description */}
      <PageHeader
        overline="Interactive Explorer"
        overlineIcon={<Folder className="h-4 w-4 text-blue-500" />}
        title="Projects Explorer"
        description={`Browse ${totalCount} projects spanning EdTech, ClimateTech, SaaS, and more. Use filters to discover work by domain, technology, or impact.`}
        className="py-0"
      />

      {/* Search & View Toggle */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 border-muted-foreground/20 focus-visible:ring-1 focus-visible:ring-offset-0"
          />
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 border rounded-lg p-1">
          <button
            onClick={() => onViewChange("list")}
            className={cn(
              "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
              view === "list"
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-label="List view"
          >
            <LayoutList className="h-4 w-4" />
          </button>
          <button
            onClick={() => onViewChange("grid")}
            className={cn(
              "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
              view === "grid"
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-label="Grid view"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {/* Domain */}
        <Select value={filters.domain} onValueChange={(v) => onFilterChange("domain", v)}>
          <SelectTrigger className="border-muted-foreground/20">
            <SelectValue placeholder="Domain" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Domains</SelectItem>
            {domains.map((domain) => (
              <SelectItem key={domain} value={domain}>
                {domain}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Stack */}
        <Select value={filters.stack} onValueChange={(v) => onFilterChange("stack", v)}>
          <SelectTrigger className="border-muted-foreground/20">
            <SelectValue placeholder="Technology" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tech</SelectItem>
            {stacks.map((tech) => (
              <SelectItem key={tech} value={tech}>
                {tech}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Tag */}
        <Select value={filters.tag} onValueChange={(v) => onFilterChange("tag", v)}>
          <SelectTrigger className="border-muted-foreground/20">
            <SelectValue placeholder="Tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tags</SelectItem>
            {tags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select value={sort} onValueChange={(v) => onSortChange(v as "recent" | "alpha" | "impact")}>
          <SelectTrigger className="border-muted-foreground/20">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="alpha">Alphabetical</SelectItem>
            <SelectItem value="impact">High Impact</SelectItem>
          </SelectContent>
        </Select>

        {/* Results Count */}
        <div className="flex items-center justify-center sm:justify-start text-sm text-muted-foreground px-3">
          <span className="font-medium text-foreground">{resultsCount}</span>
          <span className="mx-1">/</span>
          <span>{totalCount}</span>
        </div>
      </div>
    </div>
  )
}

