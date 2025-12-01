"use client"

import { useId } from "react"
import { cn } from "@/lib/utils"

type GridPatternProps = {
  width?: number
  height?: number
  x?: number
  y?: number
  squares?: Array<[number, number]>
  strokeDasharray?: string
  className?: string
}

/**
 * Grid Pattern Component
 * Creates an animated grid pattern background
 */
export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}: GridPatternProps & React.SVGProps<SVGSVGElement>) {
  const id = useId()
  const patternId = `pattern-${id}`

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-foreground/5 stroke-foreground/10",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY], index) => (
            <rect
              key={`${squareX}-${squareY}-${index}`}
              width={width - 1}
              height={height - 1}
              x={squareX * width + 1}
              y={squareY * height + 1}
              strokeWidth="0"
              className="fill-foreground/20 animate-pulse"
            />
          ))}
        </svg>
      )}
    </svg>
  )
}
