"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"
import { encode } from "qss"
import { LoaderFour } from "@/components/ui/loader"

type LinkPreviewProps = {
  children: React.ReactNode
  url: string
  className?: string
  width?: number
  height?: number
  quality?: number
  layout?: string
  isStatic?: boolean
  imageSrc?: string
  description?: string
  title?: string
  "aria-label"?: string
  target?: string
  rel?: string
}

export const LinkPreview = ({
  children,
  url,
  className,
  width = 400,
  height = 250,
  quality: _quality = 50,
  layout: _layout = "fixed",
  isStatic = false,
  imageSrc = "",
  description: _description,
  title: _title,
  "aria-label": ariaLabel,
  target = "_blank",
  rel = "noopener noreferrer",
}: LinkPreviewProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isMounted, setIsMounted] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  const springConfig = { stiffness: 100, damping: 15 }
  const x = useMotionValue(0)
  const translateX = useSpring(x, springConfig)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  const handleImageError = () => {
    setIsLoading(false)
  }

  // Reset loading state when URL or open state changes
  React.useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
    }
  }, [isOpen])

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetRect = event.currentTarget.getBoundingClientRect()
    const eventOffsetX = event.clientX - targetRect.left
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2
    x.set(offsetFromCenter)
  }

  // Generate Microlink screenshot URL
  let src: string
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    })
    src = `https://api.microlink.io/?${params}`
  } else {
    src = imageSrc
  }

  return (
    <>
      {isMounted ? (
        <>
          <div className="hidden">
            <img
              src={src}
              width={width}
              height={height}
              alt="hidden image"
            />
          </div>
          <HoverCardPrimitive.Root
            openDelay={50}
            closeDelay={100}
            onOpenChange={(open) => {
              setIsOpen(open)
            }}
          >
            <HoverCardPrimitive.Trigger
              onMouseMove={handleMouseMove}
              className={cn("text-foreground", className)}
              href={url}
              target={target}
              rel={rel}
              aria-label={ariaLabel}
            >
              {children}
            </HoverCardPrimitive.Trigger>

            <HoverCardPrimitive.Content
              className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
              side="top"
              align="center"
              sideOffset={10}
            >
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      },
                    }}
                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                    className="shadow-xl rounded-xl"
                    style={{
                      x: translateX,
                    }}
                  >
                    <div
                      className="block p-1 bg-white dark:bg-neutral-900 border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800 relative"
                      style={{ fontSize: 0 }}
                    >
                      {/* Loading State */}
                      {isLoading && (
                        <div
                          className="absolute inset-0 flex items-center justify-center bg-white/90 dark:bg-neutral-900/90 rounded-xl z-10"
                          style={{ width, height }}
                        >
                          <LoaderFour size="md" />
                        </div>
                      )}

                      {/* Preview Image */}
                      <a
                        href={url}
                        target={target}
                        rel={rel}
                        className="block"
                      >
                        <img
                          src={isStatic ? imageSrc : src}
                          width={width}
                          height={height}
                          className="rounded-lg"
                          alt="preview image"
                          onLoad={handleImageLoad}
                          onError={handleImageError}
                          style={{ display: isLoading ? 'none' : 'block' }}
                        />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </HoverCardPrimitive.Content>
          </HoverCardPrimitive.Root>
        </>
      ) : (
        <a
          href={url}
          className={cn("text-foreground", className)}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      )}
    </>
  )
}
