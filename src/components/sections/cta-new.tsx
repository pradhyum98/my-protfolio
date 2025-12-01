"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Calendar, Mail, ArrowRight, FileText } from "lucide-react"
import { copy } from "@/content/copy"
import { RetroGrid } from "@/components/ui/retro-grid"
import { ResumeDownloadLink } from "@/components/resume-download-button"

export function CTANew() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-neutral-900 py-10 sm:py-20 dark:bg-neutral-950 md:py-32">
      {/* Retro Grid Background */}
      <RetroGrid
        className="absolute inset-0"
        angle={65}
      />

      {/* Animated Gradient Orbs */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/30 to-blue-600/30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="hidden sm:block absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-red-500/30 to-red-600/30 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </>
      )}

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          {/* Main Content */}
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-3 sm:mb-6 inline-flex"
            >
              <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 sm:px-4 py-0.5 sm:py-1.5 text-xs sm:text-sm font-medium text-blue-400 backdrop-blur-sm">
                <span className="mr-1 sm:mr-2">✨</span>
                <span className="hidden sm:inline">Let's build something amazing together</span>
                <span className="sm:hidden">Let's build together</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-3 sm:mb-6 text-2xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {copy.cta.heading}
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-5 sm:mb-10 text-sm sm:text-lg text-neutral-300 md:text-xl px-4 sm:px-0"
            >
              {copy.cta.subheading}
            </motion.p>

            {/* CTA Buttons Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-6 sm:mb-12 grid gap-2.5 sm:grid-cols-2 sm:gap-4 md:gap-6"
            >
              {/* Primary CTA - Schedule Call */}
              <a
                href="/contact"
                className="group relative overflow-hidden rounded-lg sm:rounded-xl border border-blue-500/50 bg-blue-600 p-3 sm:p-6 text-left shadow-lg transition-all hover:border-blue-400 hover:bg-blue-500 hover:shadow-xl"
              >
                <div className="relative z-10">
                  <div className="mb-1.5 sm:mb-3 flex items-center gap-1.5 sm:gap-3">
                    <div className="rounded-md sm:rounded-lg bg-white/20 p-1 sm:p-2">
                      <Calendar className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-base sm:text-xl font-semibold text-white">Schedule a Call</h3>
                  </div>
                  <p className="mb-2 sm:mb-4 text-xs sm:text-sm text-blue-100 line-clamp-2 sm:line-clamp-none">
                    Let's discuss your project requirements
                  </p>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-white">
                    Book a meeting
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={!shouldReduceMotion ? {
                    x: ["100%", "-100%"],
                  } : {}}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </a>

              {/* Secondary CTA - Email */}
              <a
                href="mailto:pradhyum2098@gmail.com"
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-background/50 px-5 py-3 text-sm font-medium text-foreground ring-1 ring-border transition-all hover:bg-background hover:ring-foreground/20"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-muted-foreground">Email me directly</span>
                  <div className="flex items-center gap-1">
                    <span className="truncate">pradhyum2098@gmail.com</span>
                  </div>
                  <p className="mb-2 sm:mb-4 text-xs sm:text-sm text-neutral-400 line-clamp-2 sm:line-clamp-none">
                    Drop me a message
                  </p>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-neutral-300">
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Extra Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400"
            >
              <a
                href="/projects"
                className="group inline-flex items-center gap-2 transition-colors hover:text-neutral-300"
              >
                <FileText className="h-4 w-4" />
                View case studies
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <span className="h-4 w-px bg-neutral-700" />

              <ResumeDownloadLink
                className="group inline-flex items-center gap-2 transition-colors hover:text-neutral-300 text-neutral-400"
                iconClassName="h-4 w-4"
              >
                Download résumé
              </ResumeDownloadLink>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
