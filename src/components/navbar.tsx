"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { MAIN_NAV_ITEMS, RESOURCES_NAV_GROUP } from "@/lib/constants"
import { ThemeToggleButton2 } from "@/components/ui/skiper-theme-toggles"
import { ResumeDownloadButton } from "@/components/resume-download-button"
import { Logo } from "@/components/logo"
import { copy } from "@/content/copy"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import {
  Navbar as ResizableNavbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false)
  const pathname = usePathname()

  // Check if any resource route is active
  const isResourcesActive = RESOURCES_NAV_GROUP.items.some(
    (item) => pathname === item.href
  )

  return (
    <ResizableNavbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo href="/">
          <Logo variant="filled" size="sm" animated />
        </NavbarLogo>

        <div className="flex items-center gap-6">
          {/* Main Navigation Items */}
          {MAIN_NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* Resources Dropdown */}
          <DropdownMenu open={isResourcesOpen} onOpenChange={setIsResourcesOpen}>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1 -mx-2",
                  isResourcesActive
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
                aria-label="Resources menu"
              >
                {RESOURCES_NAV_GROUP.name}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    isResourcesOpen && "rotate-180"
                  )}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 rounded-xl border bg-background shadow-lg"
              sideOffset={8}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground uppercase">
                {RESOURCES_NAV_GROUP.name}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {RESOURCES_NAV_GROUP.items.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  asChild
                  className="cursor-pointer"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "w-full transition-colors duration-200 flex items-center justify-between",
                      pathname === item.href && "bg-accent text-accent-foreground"
                    )}
                  >
                    <span>{item.name}</span>
                    {item.href === '/docs' && (
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" aria-hidden="true" />
                    )}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-2">
          <ResumeDownloadButton
            variant="secondary"
            size="default"
            label={copy.nav.resumeButton}
          />
          <ThemeToggleButton2 className="h-10 w-10 p-2" />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo href="/">
            <Logo variant="filled" size="sm" animated />
          </NavbarLogo>
          <div className="flex items-center gap-2">
            <ThemeToggleButton2 className="h-10 w-10 p-2" />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {/* Main Nav Items */}
          {MAIN_NAV_ITEMS.map((item, idx) => (
            <Link
              key={`mobile-main-${idx}`}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}

          {/* Resources Section */}
          <div className="mt-4 pt-4 border-t border-border">
            <div className="text-xs font-semibold text-muted-foreground uppercase mb-2 px-1">
              {RESOURCES_NAV_GROUP.name}
            </div>
            {RESOURCES_NAV_GROUP.items.map((item, idx) => (
              <Link
                key={`mobile-resource-${idx}`}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground pl-3 flex items-center justify-between",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                <span className="block">{item.name}</span>
                {item.href === '/docs' && (
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" aria-hidden="true" />
                )}
              </Link>
            ))}
          </div>

          {/* Resume Button */}
          <div className="flex w-full flex-col gap-4 mt-4">
            <ResumeDownloadButton
              variant="default"
              size="default"
              className="w-full"
              label={copy.nav.downloadResume}
            />
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  )
}
