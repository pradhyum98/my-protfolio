"use client"

import React from "react"
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
  IconChartBar,
} from "@tabler/icons-react"
import { SITE_CONFIG } from "@/lib/constants"
import { copy } from "@/content/copy"

export function FloatingDockNav() {
  // Main navigation links (including Skills now)
  const links = [
    {
      title: copy.nav.home,
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: copy.nav.about,
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: copy.nav.projects,
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: copy.nav.skills,
      icon: (
        <IconChartBar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/skills",
    },
    {
      title: copy.nav.experience,
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/experience",
    },
    {
      title: copy.nav.contact,
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
    {
      title: "Full Résumé",
      icon: (
        <IconFileDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resume.pdf",
    },
    {
      title: "Full Résumé (Docx)",
      icon: (
        <IconFileDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resume.docx",
    },
    {
      title: "Compact Résumé",
      icon: (
        <IconFileDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resume-compact.pdf",
    },
    {
      title: "Compact Résumé (Docx)",
      icon: (
        <IconFileDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resume-compact.docx",
    },
    {
      title: copy.nav.linkedin,
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: SITE_CONFIG.social.linkedin,
    },
    {
      title: copy.nav.github,
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: SITE_CONFIG.social.github,
    },
  ]

  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:left-1/2 md:right-auto md:-translate-x-1/2">
      <FloatingDock items={links} />
    </div>
  )
}
