"use client"

import { memo, useMemo } from "react"
import { m, useReducedMotion, LazyMotion, domAnimation } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { copy } from "@/content/copy"

export const SelectedWork = memo(function SelectedWork() {
  const shouldReduceMotion = useReducedMotion()
  const projects = copy.featuredProjects.projects

  // Memoize animation variants to prevent recreating on every render
  const sectionVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  }), [shouldReduceMotion])

  const staggerContainer = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.15,
      },
    },
  }), [shouldReduceMotion])

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  }), [shouldReduceMotion])

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="relative overflow-hidden bg-neutral-50 py-16 dark:bg-neutral-900 md:py-20">
        <div className="container relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {/* Section Header */}
        <m.header
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 md:mb-12"
        >
          <div className="overflow-hidden">
            <m.h2
              className="font-display text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {copy.featuredProjects.heading}
            </m.h2>
          </div>
          <m.p
            className="mt-2 max-w-2xl text-base text-neutral-600 dark:text-neutral-400 md:text-lg"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {copy.featuredProjects.subheading}
          </m.p>
        </m.header>

        {/* Text-Only Projects List */}
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {projects.map((project, index) => {
            return (
              <m.article
                key={project.title}
                variants={itemVariants}
                className="group relative"
              >
                {/* Hairline divider (except first) */}
                {index > 0 && (
                  <div className="absolute -top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent dark:via-neutral-800" />
                )}

                <div className="space-y-3">
                  {/* Project Number */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-medium text-neutral-400 dark:text-neutral-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-neutral-200 to-transparent dark:from-neutral-800" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-neutral-50 dark:group-hover:text-blue-400 md:text-3xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
                    {project.description}
                  </p>

                  {/* Tech Stack - animated marquee */}
                  <div className="relative overflow-hidden">
                    <m.div
                      className="flex items-center gap-4 whitespace-nowrap text-xs text-neutral-500 dark:text-neutral-500"
                      animate={{
                        x: [0, -150],
                      }}
                      transition={{
                        x: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 20,
                          ease: "linear",
                        },
                      }}
                    >
                      {/* Render tags twice for seamless loop */}
                      {[...project.tags, ...project.tags].map((tag, idx) => (
                        <span key={idx} className="flex items-center gap-4">
                          <span className="font-mono">{tag}</span>
                          <span className="text-neutral-300 dark:text-neutral-700">•</span>
                        </span>
                      ))}
                    </m.div>
                  </div>

                  {/* Impact - with left border */}
                  <div className="border-l-2 border-neutral-900 pl-4 dark:border-neutral-100">
                    <p className="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-500">
                      Impact
                    </p>
                    <p className="mt-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {project.impact}
                    </p>
                  </div>

                  {/* CTA Link */}
                  <Link
                    href={project.href}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-all hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-700 dark:hover:decoration-neutral-100"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </m.article>
            )
          })}
        </m.div>

        {/* View All Projects Link */}
        <m.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="group/cta inline-flex items-center gap-2 text-base font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-all hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-700 dark:hover:decoration-neutral-100"
          >
            <span>{copy.featuredProjects.viewAllButton}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
          </Link>
        </m.div>
        </div>
      </section>
    </LazyMotion>
  )
});
