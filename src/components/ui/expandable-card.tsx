"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type ExpandableCardContextType = {
  active: number | null
  setActive: (id: number | null) => void
}

const ExpandableCardContext = createContext<ExpandableCardContextType>({
  active: null,
  setActive: () => {},
})

export function ExpandableCardProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null)
      }
    }

    if (active !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  return (
    <ExpandableCardContext.Provider value={{ active, setActive }}>
      {children}
    </ExpandableCardContext.Provider>
  )
}

export function ExpandableCard({
  id,
  children,
  className,
}: {
  id: number
  children: React.ReactNode
  className?: string
}) {
  const { active, setActive } = useContext(ExpandableCardContext)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(null)
      }
    }

    if (active === id) {
      document.addEventListener("mousedown", onClickOutside)
      document.addEventListener("touchstart", onClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", onClickOutside)
      document.removeEventListener("touchstart", onClickOutside)
    }
  }, [active, id, setActive])

  return (
    <>
      <motion.div
        layoutId={`card-${id}`}
        onClick={() => setActive(id)}
        className={cn(
          "cursor-pointer overflow-hidden rounded-2xl border border-neutral-200/50 bg-white dark:border-neutral-800/50 dark:bg-neutral-900",
          className
        )}
      >
        {children}
      </motion.div>
      <AnimatePresence>
        {active === id && (
          <div className="fixed inset-0 z-[100] grid h-full w-full place-items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              ref={ref}
              layoutId={`card-${id}`}
              className="relative z-[100] flex h-fit max-h-[90%] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-neutral-200/50 bg-white dark:border-neutral-800/50 dark:bg-neutral-900 md:h-fit md:max-h-[90%]"
            >
              <div className="overflow-auto">{children}</div>
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900/80 text-white backdrop-blur-sm transition-colors hover:bg-neutral-900 dark:bg-neutral-100/80 dark:text-black dark:hover:bg-neutral-100"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export function ExpandableCardImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  const { active } = useContext(ExpandableCardContext)

  return (
    <motion.div
      layout
      className={cn("relative overflow-hidden", className, active !== null ? "h-80" : "h-48")}
    >
      <motion.img
        layout
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </motion.div>
  )
}

export function ExpandableCardTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.h3
      layout
      className={cn(
        "text-xl font-semibold text-neutral-900 dark:text-neutral-50 md:text-2xl",
        className
      )}
    >
      {children}
    </motion.h3>
  )
}

export function ExpandableCardDescription({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { active } = useContext(ExpandableCardContext)

  return (
    <motion.div
      layout
      className={cn(
        "text-neutral-600 dark:text-neutral-400",
        active !== null ? "text-base" : "line-clamp-2 text-sm",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function ExpandableCardContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div layout className={cn("p-6", className)}>
      {children}
    </motion.div>
  )
}

export function ExpandableCardExpanded({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const { active } = useContext(ExpandableCardContext)

  if (active === null) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn("p-6 pt-0", className)}
    >
      {children}
    </motion.div>
  )
}
