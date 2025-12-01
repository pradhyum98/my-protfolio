"use client"

import { cn } from "@/lib/utils"

type SectionSkeletonProps = {
  className?: string
  height?: string
}

export function SectionSkeleton({ className, height = "h-96" }: SectionSkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted/10",
        height,
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/5 to-transparent animate-shimmer" />
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-4">
          <div className="h-8 w-1/3 bg-muted/20 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-muted/15 rounded animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-48 bg-muted/10 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
