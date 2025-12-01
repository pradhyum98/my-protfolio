"use client"

import { Logo } from "@/components/logo"

export default function LogoShowcasePage() {
  const variants = ["primary", "filled", "glow", "gradient", "simple", "with-text", "orbit", "offset"] as const
  const sizes = ["xs", "sm", "md", "lg", "xl"] as const

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Logo Design System
          </h1>
          <p className="mt-2 text-muted-foreground">
            Red-Blue gradient theme with glowing effects
          </p>
        </div>

        {/* Main Hero Logo */}
        <div className="flex justify-center">
          <div className="rounded-2xl bg-gradient-to-br from-red-500/10 via-purple-500/10 to-blue-500/10 p-8 backdrop-blur">
            <Logo variant="filled" size="xl" animated />
          </div>
        </div>

        {/* All Variants */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Logo Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {variants.map((variant) => (
              <div key={variant} className="text-center space-y-2">
                <div className="flex justify-center items-center h-24 rounded-lg bg-muted/50 p-4">
                  <Logo variant={variant} size="md" animated={variant === "glow" || variant === "gradient"} />
                </div>
                <p className="text-sm font-medium capitalize">{variant}</p>
              </div>
            ))}

            {/* Horizontal variant */}
            <div className="col-span-2 text-center space-y-2">
              <div className="flex justify-center items-center h-24 rounded-lg bg-muted/50 p-4">
                <Logo variant="horizontal" size="md" showText />
              </div>
              <p className="text-sm font-medium">Horizontal</p>
            </div>
          </div>
        </div>

        {/* Size Variations */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Size System</h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {sizes.map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center rounded-lg bg-muted/50 p-4"
                  style={{ minHeight: '80px', minWidth: '80px' }}>
                  <Logo variant="gradient" size={size} />
                </div>
                <p className="text-xs font-medium uppercase">{size}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Showcase */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Animation States</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="flex justify-center items-center h-24 rounded-lg bg-gradient-to-br from-red-500/10 to-blue-500/10 p-4">
                <Logo variant="filled" size="md" animated />
              </div>
              <p className="text-sm">Filled Animated</p>
            </div>

            <div className="text-center space-y-2">
              <div className="flex justify-center items-center h-24 rounded-lg bg-gradient-to-br from-red-500/10 to-blue-500/10 p-4">
                <Logo variant="glow" size="md" animated />
              </div>
              <p className="text-sm">Glow Animated</p>
            </div>

            <div className="text-center space-y-2">
              <div className="flex justify-center items-center h-24 rounded-lg bg-gradient-to-br from-red-500/10 to-blue-500/10 p-4">
                <Logo variant="orbit" size="md" animated />
              </div>
              <p className="text-sm">Orbit Animated</p>
            </div>
          </div>
        </div>

        {/* Context Examples */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Context Examples</h2>

          {/* Navbar Example */}
          <div className="rounded-lg border bg-card">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <Logo variant="filled" size="sm" animated />
              <div className="flex items-center gap-6 text-sm">
                <span className="text-muted-foreground">Home</span>
                <span className="text-muted-foreground">About</span>
                <span className="text-muted-foreground">Projects</span>
                <span className="text-muted-foreground">Contact</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">Navigation Bar Context</p>
            </div>
          </div>

          {/* Business Card Example */}
          <div className="rounded-lg border bg-card p-8 max-w-md mx-auto">
            <div className="flex items-center gap-4">
              <Logo variant="gradient" size="lg" />
              <div>
                <h3 className="font-semibold text-lg">Pradhyum Upadhyay</h3>
                <p className="text-sm text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Dark Mode Example */}
          <div className="rounded-lg bg-slate-900 p-8 text-white">
            <div className="flex justify-center gap-8">
              <Logo variant="filled" size="md" />
              <Logo variant="glow" size="md" />
              <Logo variant="gradient" size="md" />
            </div>
            <p className="text-center mt-4 text-slate-400 text-sm">Dark Mode Appearance</p>
          </div>
        </div>
      </div>
    </div>
  )
}
