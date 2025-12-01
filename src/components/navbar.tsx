"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { MAIN_NAV_ITEMS } from "@/lib/constants"
import { ThemeToggleButton2 } from "@/components/ui/skiper-theme-toggles"
import { ResumeDownloadButton } from "@/components/resume-download-button"
import { Logo } from "@/components/logo"
import { copy } from "@/content/copy"
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
  const pathname = usePathname()

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
