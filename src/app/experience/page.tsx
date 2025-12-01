'use client'

import { motion, type Variants, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { PageHeader } from "@/components/ui/page-header"
import { copy } from "@/content/copy"
import { MapPin, Calendar, Award } from "lucide-react"
import { CTANew } from "@/components/sections/cta-new"

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const timelineDot: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
}

// ============================================================================
// EXPERIENCE ENTRY COMPONENT
// ============================================================================

type ExperienceEntryProps = {
  experience: typeof copy.experience.experiences[number]
  isLast: boolean
}

function ExperienceEntry({ experience, isLast }: ExperienceEntryProps) {
  const entryRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: entryRef,
    offset: ["start center", "end center"]
  })

  // Transform scroll progress to determine if this entry is "active" (passed)
  const dotScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])
  const dotColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["rgb(59, 130, 246)", "rgb(239, 68, 68)"] // blue-500 to red-500
  )

  return (
    <motion.div
      ref={entryRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="group relative"
    >
      {/* Timeline Connector */}
      <div className="absolute left-0 top-0 flex h-full w-12 flex-col items-center md:w-16">
        {/* Dot */}
        <motion.div
          variants={timelineDot}
          className="relative z-10 mt-2 flex h-4 w-4 items-center justify-center"
        >
          <motion.div
            className="absolute h-4 w-4 rounded-full border-2 bg-background"
            style={{
              borderColor: dotColor,
              scale: dotScale
            }}
          />
          <motion.div
            className="absolute h-2 w-2 rounded-full transition-opacity duration-500 group-hover:opacity-100"
            style={{
              backgroundColor: dotColor,
              opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1])
            }}
          />
        </motion.div>

        {/* Vertical Line */}
        {!isLast && (
          <div className="relative mt-1 h-full w-px flex-1 overflow-hidden">
            {/* Background line (gray) */}
            <div className="absolute inset-0 bg-gradient-to-b from-border via-border to-transparent" />
            {/* Progress line (blue fills with red) */}
            <motion.div
              className="absolute inset-0 origin-top"
              style={{
                scaleY: scrollYProgress,
                background: `linear-gradient(to bottom, rgb(239, 68, 68), rgb(59, 130, 246))`,
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="ml-12 pb-20 md:ml-16 md:pb-24">
        {/* Header */}
        <motion.div variants={fadeInUp} custom={0} className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex-1 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {experience.title}
            </h2>

            <div className="flex flex-wrap items-center gap-3 text-base text-muted-foreground md:text-lg">
              <span className="font-semibold text-foreground">{experience.company}</span>
              <span className="text-muted-foreground/40">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {experience.location}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{experience.period}</span>
            </div>
          </div>

          {/* Company Logo */}
          {experience.logo && (
            <motion.div
              variants={fadeInUp}
              custom={0.5}
              className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-background/50 p-2 backdrop-blur-sm md:h-20 md:w-20"
            >
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={80}
                height={80}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Description */}
        <motion.div variants={fadeInUp} custom={1} className="mb-6">
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            <span className="font-medium text-foreground/90">{copy.experience.whatIChangedLabel}</span>{" "}
            {experience.description}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={fadeInUp} custom={1.5} className="mb-8">
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-3 py-1 text-xs font-medium transition-all duration-300 hover:scale-105 hover:border-primary/50"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={fadeInUp} custom={2} className="space-y-6">
          <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight md:text-2xl">
            <Award className="h-5 w-5 text-primary" />
            {copy.experience.achievementsHeading}
          </h3>

          <div className="space-y-6">
            {experience.achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group/achievement relative border-l-2 border-primary/20 pl-6 transition-all duration-300 hover:border-primary/60"
              >
                {/* Decorative dot */}
                <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-primary/40 transition-all duration-300 group-hover/achievement:bg-primary group-hover/achievement:scale-150" />

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {copy.experience.challengeLabel}
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/90 md:text-base">
                      {achievement.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                      {copy.experience.actionLabel}
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {achievement.action}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-500">
                      {copy.experience.resultLabel}
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {achievement.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function ExperiencePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <ProgressiveBlur
          className="absolute inset-0"
          intensity={0.2}
          direction="radial"
        />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute -bottom-40 right-1/3 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl animate-pulse [animation-delay:4s]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <PageHeader
            overline="Professional Journey"
            animated
            title="Experience"
            description="A decade of engineering leadership, innovation, and craftsmanship — building solutions that scale beautifully."
          />

          {/* Timeline Section */}
          <BlurFade delay={0.3} inView>
            <section className="relative py-8 md:py-12">
              {copy.experience.experiences.map((exp, index) => (
                <ExperienceEntry
                  key={`${exp.company}-${exp.period}`}
                  experience={exp}
                  isLast={index === copy.experience.experiences.length - 1}
                />
              ))}
            </section>
          </BlurFade>

          {/* Closing Statement */}
          <BlurFade delay={0.5} inView>
            <section className="relative py-16 md:py-24">
              <div className="relative">
                {/* Quote marks decoration */}
                <div className="absolute -left-4 -top-4 text-8xl font-serif text-primary/10 md:-left-8 md:text-9xl">
                  &ldquo;
                </div>
                <div className="absolute -right-4 -bottom-4 text-8xl font-serif text-primary/10 md:-right-8 md:text-9xl">
                  &rdquo;
                </div>

                <blockquote className="relative space-y-6">
                  <p className="text-2xl font-light italic leading-relaxed text-foreground/90 md:text-3xl lg:text-4xl">
                    Every project is an opportunity to build something meaningful.
                    Every challenge is a chance to raise the bar.
                  </p>
                  <footer className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="h-px w-8 bg-primary/50" />
                    <span>My approach to engineering</span>
                  </footer>
                </blockquote>
              </div>
            </section>
          </BlurFade>
        </div>
      </div>

      {/* CTA Section */}
      <CTANew />
    </div>
  )
}
