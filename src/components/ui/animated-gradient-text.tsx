import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type AnimatedGradientTextProps = {
  children: ReactNode
  className?: string
  speed?: number
  colorFrom?: string
  colorTo?: string
}

export const AnimatedGradientText = ({
  children,
  className,
  speed = 1,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
}: AnimatedGradientTextProps) => {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r bg-[length:300%_100%] bg-clip-text text-transparent",
        className
      )}
      style={
        {
          backgroundImage: `linear-gradient(to right, ${colorFrom}, ${colorTo}, ${colorFrom})`,
          animation: `gradient ${3 / speed}s ease infinite`,
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  )
}
