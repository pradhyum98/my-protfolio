"use client"

import React, { useState } from "react"
import { FloatingDock } from "@/components/ui/floating-dock"
import {
  IconHome,
  IconBriefcase,
  IconCode,
  IconUser,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileDownload,
  IconSettings,
  IconStar,
} from "@tabler/icons-react"

export default function FloatingDockDemoPage() {
  const [position, setPosition] = useState<"bottom" | "top">("bottom")
  const [iconCount, setIconCount] = useState(8)

  const allLinks = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "Projects",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "Resume",
      icon: (
        <IconFileDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#resume",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#linkedin",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#github",
    },
    {
      title: "Settings",
      icon: (
        <IconSettings className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#settings",
    },
    {
      title: "Favorites",
      icon: (
        <IconStar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#favorites",
    },
  ]

  const displayedLinks = allLinks.slice(0, iconCount)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-foreground/10 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">FloatingDock Component Demo</h1>
          <p className="mt-2 text-muted-foreground">
            Interactive demonstration of the Mac OS-style FloatingDock component
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Control Panel */}
        <div className="mb-8 rounded-lg border border-foreground/10 bg-card p-6">
          <h2 className="mb-4 text-xl font-semibold">Controls</h2>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Position:
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setPosition("bottom")}
                  className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                    position === "bottom"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  Bottom
                </button>
                <button
                  onClick={() => setPosition("top")}
                  className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                    position === "top"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  Top
                </button>
              </div>
            </div>

            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium">
                Number of Icons: {iconCount}
              </label>
              <input
                type="range"
                min="3"
                max="10"
                value={iconCount}
                onChange={(e) => setIconCount(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Feature Explanation */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-foreground/10 bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">🖱️ Magnification Effect</h3>
            <p className="text-sm text-muted-foreground">
              Hover over the dock icons on desktop to see the Mac OS-style magnification
              effect. Icons scale from 40px to 80px based on mouse proximity.
            </p>
          </div>

          <div className="rounded-lg border border-foreground/10 bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">📱 Responsive Design</h3>
            <p className="text-sm text-muted-foreground">
              On mobile devices (&lt;768px), the dock transforms into a compact
              expandable menu with staggered animations.
            </p>
          </div>

          <div className="rounded-lg border border-foreground/10 bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">🎨 Spring Animations</h3>
            <p className="text-sm text-muted-foreground">
              Smooth physics-based animations using Framer Motion springs with
              customizable mass, stiffness, and damping values.
            </p>
          </div>

          <div className="rounded-lg border border-foreground/10 bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">💡 Tooltips</h3>
            <p className="text-sm text-muted-foreground">
              Hover over icons to see animated tooltips that display above each icon
              with smooth fade-in effects.
            </p>
          </div>

          <div className="rounded-lg border border-foreground/10 bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">🌓 Theme Support</h3>
            <p className="text-sm text-muted-foreground">
              Automatically adapts to light and dark themes with appropriate colors
              for backgrounds and text.
            </p>
          </div>

          <div className="rounded-lg border border-foreground/10 bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">⚡ Performance</h3>
            <p className="text-sm text-muted-foreground">
              Optimized with motion values and transforms to prevent unnecessary
              re-renders during mouse movement.
            </p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-8 rounded-lg border border-foreground/10 bg-card p-6">
          <h2 className="mb-4 text-xl font-semibold">Technical Details</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-foreground">Animation System:</strong>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>
                  <code className="rounded bg-muted px-1 py-0.5">useMotionValue</code>:
                  Tracks mouse position without re-renders
                </li>
                <li>
                  <code className="rounded bg-muted px-1 py-0.5">useTransform</code>:
                  Maps distance to size [-150, 0, 150] → [40, 80, 40]
                </li>
                <li>
                  <code className="rounded bg-muted px-1 py-0.5">useSpring</code>:
                  Applies physics (mass: 0.1, stiffness: 150, damping: 12)
                </li>
              </ul>
            </div>

            <div>
              <strong className="text-foreground">Component Structure:</strong>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>FloatingDock: Main wrapper component</li>
                <li>FloatingDockDesktop: Horizontal dock with magnification (≥md)</li>
                <li>FloatingDockMobile: Expandable vertical menu (&lt;md)</li>
                <li>IconContainer: Individual animated icon with tooltip</li>
              </ul>
            </div>

            <div>
              <strong className="text-foreground">Dependencies:</strong>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>motion/react (Framer Motion v12)</li>
                <li>@tabler/icons-react</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-8 rounded-lg border border-foreground/10 bg-card p-6">
          <h2 className="mb-4 text-xl font-semibold">Usage Example</h2>
          <pre className="overflow-x-auto rounded bg-muted p-4 text-sm">
            <code>{`import { FloatingDock } from "@/components/ui/floating-dock"
import { IconHome, IconCode } from "@tabler/icons-react"

const links = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full" />,
    href: "/",
  },
  {
    title: "Projects",
    icon: <IconCode className="h-full w-full" />,
    href: "/projects",
  },
]

export function MyDock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
      <FloatingDock items={links} />
    </div>
  )
}`}</code>
          </pre>
        </div>

        {/* Placeholder for dock positioning */}
        <div className="mt-8 text-center text-muted-foreground">
          <p className="text-sm">
            ↓ The FloatingDock is positioned at the {position} of the page ↓
          </p>
        </div>
      </div>

      {/* Floating Dock */}
      <div
        className={`fixed left-1/2 z-50 -translate-x-1/2 ${
          position === "bottom" ? "bottom-6" : "top-20"
        }`}
      >
        <FloatingDock items={displayedLinks} />
      </div>
    </div>
  )
}

