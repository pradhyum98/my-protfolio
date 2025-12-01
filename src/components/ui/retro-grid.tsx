import { cn } from "@/lib/utils"

export function RetroGrid({
  className,
  angle = 65,
}: {
  className?: string
  angle?: number
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [perspective:200px]",
        className,
      )}
      style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
      aria-hidden="true"
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
            // Light mode grid
            "[background-image:linear-gradient(to_right,rgba(0,0,0,0.4)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.4)_1px,transparent_0)]",
            // Dark mode grid
            "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_0)]",
          )}
        />
      </div>

      {/* Gradient overlay for fade effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/80" />
    </div>
  )
}
