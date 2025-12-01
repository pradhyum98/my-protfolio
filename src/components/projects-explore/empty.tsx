"use client"

import * as React from "react"
import { SearchX } from "lucide-react"
import { Button } from "@/components/ui/button"

type EmptyProps = {
  hasFilters: boolean
  onClearFilters: () => void
}

export const ProjectsExploreEmpty: React.FC<EmptyProps> = ({
  hasFilters,
  onClearFilters,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center space-y-6">
      <div className="rounded-full bg-muted p-6">
        <SearchX className="h-12 w-12 text-muted-foreground" />
      </div>

      <div className="space-y-2 max-w-md">
        <h3 className="text-2xl font-bold tracking-tight">No projects found</h3>
        <p className="text-muted-foreground leading-relaxed">
          {hasFilters
            ? "Try adjusting your filters or search query to discover more projects."
            : "There are no projects to display at the moment."}
        </p>
      </div>

      {hasFilters && (
        <Button
          variant="outline"
          onClick={onClearFilters}
          className="mt-4"
        >
          Clear All Filters
        </Button>
      )}
    </div>
  )
}
