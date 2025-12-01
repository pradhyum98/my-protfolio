"use client"

import * as React from "react"
import { Suspense } from "react"
import { ProjectsExplorer } from "@/components/file-tree"
import {
  getAllProjects,
  getAllDomains,
  getAllTags,
  getAllStack,
  filterProjects,
} from "@/content/projects"
import { ProjectsExploreHeader } from "@/components/projects-explore/header"
import { ProjectsExploreListItem } from "@/components/projects-explore/list-item"
import { ProjectsExploreGridItem } from "@/components/projects-explore/grid-item"
import { ProjectsExploreEmpty } from "@/components/projects-explore/empty"
import { useProjectQueryState } from "@/hooks/use-project-query-state"
import { cn } from "@/lib/utils"

// ============================================================================
// PROJECTS EXPLORER PAGE - EDITORIAL, CARD-FREE INDEX
// ============================================================================
// Fast, typography-led discovery with List/Grid views, full-text search,
// facet filters, URL state, and localStorage preferences.
// ============================================================================

function ProjectsExplorerContent() {
  const {
    filters,
    sort,
    view,
    setSearch,
    setFilter,
    setSort,
    setView,
    clearFilters,
    hasActiveFilters,
  } = useProjectQueryState()

  const [showFileTree, setShowFileTree] = React.useState(true)
  const [showTooltip, setShowTooltip] = React.useState(false)
  const [isClient, setIsClient] = React.useState(false)

  // Ensure client-side hydration is complete
  React.useEffect(() => {
    setIsClient(true)
  }, [])

  // Show tooltip on first visit only (after hydration)
  React.useEffect(() => {
    if (!isClient) return

    const hasSeenTooltip = localStorage.getItem("projects-explorer-tooltip-seen")
    if (!hasSeenTooltip) {
      setShowTooltip(true)
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setShowTooltip(false)
        localStorage.setItem("projects-explorer-tooltip-seen", "true")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isClient])

  const dismissTooltip = () => {
    setShowTooltip(false)
    localStorage.setItem("projects-explorer-tooltip-seen", "true")
  }

  // Get all available filter options
  const domains = getAllDomains()
  const stacks = getAllStack()
  const tags = getAllTags()
  const allProjects = getAllProjects()

  // Filter and sort projects
  const filteredProjects = React.useMemo(() => {
    const filtered = filterProjects({
      domain: filters.domain,
      tag: filters.tag,
      stack: filters.stack,
      search: filters.search || undefined,
    })

    // Sort
    if (sort === "alpha") {
      return filtered.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sort === "impact") {
      // Featured projects first, then by order
      return filtered.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return (a.order ?? 999) - (b.order ?? 999)
      })
    } else {
      // Recent (by order field, lower = more recent)
      return filtered.sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    }
  }, [filters, sort])

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="container mx-auto px-4 py-12 md:py-20 space-y-12">
        <ProjectsExploreHeader
          search={filters.search}
          filters={filters}
          sort={sort}
          view={view}
          onSearchChange={setSearch}
          onFilterChange={setFilter}
          onSortChange={setSort}
          onViewChange={setView}
          domains={domains}
          stacks={stacks}
          tags={tags}
          resultsCount={filteredProjects.length}
          totalCount={allProjects.length}
        />

        {/* File Tree Section */}
        <div className="space-y-4">
          {/* Toggle Button with Tooltip */}
          <div className="relative inline-block">
            <button
              onClick={() => setShowFileTree(!showFileTree)}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                className={cn("h-4 w-4 transition-transform", showFileTree && "rotate-90")}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {showFileTree ? "Hide" : "Show"} File Tree Explorer
            </button>

            {/* One-time Tooltip */}
            {showTooltip && (
              <div className="absolute left-0 top-full mt-2 z-50 w-72 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="relative bg-foreground text-background rounded-lg shadow-lg p-4">
                  {/* Arrow */}
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-foreground rotate-45" />

                  {/* Content */}
                  <div className="relative space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium">💡 Pro Tip</p>
                      <button
                        onClick={dismissTooltip}
                        className="text-background/70 hover:text-background transition-colors"
                        aria-label="Dismiss tooltip"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-xs text-background/90 leading-relaxed">
                      Click here to collapse the file tree and focus on the filtered project list below.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* File Tree */}
          {showFileTree && (
            <div className="border-l-2 border-border/50 pl-6 py-2">
              <ProjectsExplorer />

              {/* Hint */}
              <div className="mt-6 text-sm text-muted-foreground">
                <strong className="text-foreground">Tip:</strong> Press{" "}
                <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs font-mono border border-border">
                  ~
                </kbd>
                {" "}to open the terminal and type{" "}
                <code className="text-emerald-600 dark:text-emerald-400 font-mono text-xs">
                  open projects/courses
                </code>
                {" "}to navigate directly.
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-border/50" />
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 pb-20">
        {filteredProjects.length > 0 ? (
          <>
            {/* List View */}
            {view === "list" && (
              <div className="max-w-5xl mx-auto">
                {filteredProjects.map((project) => (
                  <ProjectsExploreListItem key={project.slug} project={project} />
                ))}
              </div>
            )}

            {/* Grid View */}
            {view === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project) => (
                  <ProjectsExploreGridItem key={project.slug} project={project} />
                ))}
              </div>
            )}
          </>
        ) : (
          <ProjectsExploreEmpty
            hasFilters={hasActiveFilters}
            onClearFilters={clearFilters}
          />
        )}
      </section>
    </div>
  )
}

export default function ProjectsExplorerPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/2" />
            <div className="h-6 bg-muted rounded w-3/4" />
            <div className="h-10 bg-muted rounded w-full" />
          </div>
        </div>
      }
    >
      <ProjectsExplorerContent />
    </Suspense>
  )
}
