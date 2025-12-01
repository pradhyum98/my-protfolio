"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ExternalLink, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { copy } from "@/content/copy"
// import { cn } from "@/lib/utils"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
}

export function ProjectsNew() {
  const shouldReduceMotion = useReducedMotion()

  // Get the first featured project for the hero card
  const featuredProject = copy.featuredProjects.projects[0]
  const otherProjects = copy.featuredProjects.projects.slice(1)

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {copy.featuredProjects.heading}
          </h2>
          <p className="max-w-2xl text-lg text-foreground/70">
            {copy.featuredProjects.subheading}
          </p>
        </motion.div>

        {/* Featured Project Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-neutral-50 to-neutral-100 shadow-sm transition-shadow hover:shadow-xl dark:border-neutral-800/50 dark:from-neutral-900 dark:to-neutral-800">
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden lg:h-auto">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-neutral-900 backdrop-blur-sm dark:bg-neutral-900/90 dark:text-neutral-100">
                  Featured Work
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-6 md:p-8 lg:p-10">
                <div className="mb-2 flex items-center gap-2">
                  <ExternalLink className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Case Study
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-50 md:text-3xl lg:text-4xl">
                  {featuredProject.title}
                </h3>

                <p className="mb-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {featuredProject.description}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {featuredProject.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Impact Metrics */}
                <div className="mb-6 grid grid-cols-3 gap-4 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
                  <div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">60%</div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">Bundle reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">3×</div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">Deploy velocity</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">200K+</div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">Daily users</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={featuredProject.href}
                    className="group/btn relative flex h-11 flex-1 items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent bg-neutral-900 px-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 md:h-12"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    href={featuredProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800 md:h-12"
                  >
                    <Play className="h-5 w-5" />
                    <span>View Project</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {otherProjects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Link
                href={project.href}
                className="group relative block h-full overflow-hidden rounded-2xl border border-neutral-200/50 bg-white shadow-sm transition-shadow hover:shadow-xl dark:border-neutral-800/50 dark:bg-neutral-900"
              >
                {/* Project Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold transition-colors duration-300 group-hover:text-foreground/90 md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mb-4 line-clamp-3 text-base leading-relaxed text-foreground/60">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="mb-4 rounded-lg border border-foreground/10 bg-foreground/5 p-3">
                    <p className="text-xs font-medium text-foreground/60">
                      {copy.featuredProjects.impactLabel}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground/80">
                      {project.impact}
                    </p>
                  </div>

                  {/* Link */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground/60 transition-colors group-hover:text-foreground/80">
                      {copy.featuredProjects.exploreButton}
                    </span>
                    <ArrowRight className="h-5 w-5 text-foreground/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground/80" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="group gap-2 border-foreground/20 backdrop-blur-sm hover:border-foreground/40"
            asChild
          >
            <Link href="/projects">
              {copy.featuredProjects.viewAllButton}
              <ExternalLink className="h-5 w-5 transition-transform group-hover:scale-110" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
