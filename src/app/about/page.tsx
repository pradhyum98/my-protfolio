'use client'

import { motion } from "framer-motion"
import {
  MapPin,
  Code2,
  Sparkles,
  TrendingUp,
  BookOpen,
  Zap,
} from "lucide-react"
import { copy } from "@/content/copy"
import { BlurFade } from "@/components/ui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { CTANew } from "@/components/sections/cta-new"
import { Highlighter } from "@/components/ui/highlighter"
import { PageHeader } from "@/components/ui/page-header"
import { cn } from "@/lib/utils"


// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-red-500/5 blur-3xl animate-pulse [animation-delay:4s]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section */}
          <PageHeader
            overline="Who I Am"
            animated
            title={copy.about.personal.name}
            description={copy.about.personal.title}
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium">
                <Code2 className="mr-2 h-4 w-4" />
                Data Analyst
              </Badge>
              <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium">
                <Code2 className="mr-2 h-4 w-4" />
                BI Specialist
              </Badge>
              <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium">
                <BookOpen className="mr-2 h-4 w-4" />
                Data Engineer
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{copy.about.personal.location}</span>
              </div>
            </div>
          </PageHeader>

          {/* Professional Journey */}
          <BlurFade delay={0.3} inView>
            <section className="py-16 md:py-20">
              <div className="grid gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                    Turning Data Into
                    <br />
                    Decisions That Matter<span className="text-blue-500">.</span>
                  </h2>
                  <div className="relative h-1 w-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent blur-sm" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent" />
                  </div>
                </div>

                <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <p className="text-foreground/90">
                    {copy.about.technicalLeaderContent.paragraph1}
                  </p>
                  <p>
                    {copy.about.technicalLeaderContent.paragraph2}
                  </p>
                  <p>
                    {copy.about.technicalLeaderContent.paragraph3}
                  </p>
                </div>
              </div>
            </section>
          </BlurFade>

          {/* Tech Stack */}
          <BlurFade delay={0.5} inView>
            <section className="py-16 md:py-20">
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Code2 className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                      Tech Stack & Expertise
                    </h2>
                  </div>
                  <p className="text-base text-muted-foreground md:text-lg">
                    Modern technologies I work with daily
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {copy.about.techStack.map((tech, idx) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                    >
                      <Badge
                        variant="outline"
                        className={cn(
                          "px-4 py-2 text-sm font-medium transition-all duration-300",
                          "hover:scale-110 hover:shadow-lg hover:border-primary/50"
                        )}
                        style={{
                          borderColor: `${tech.color}30`,
                        }}
                      >
                        <span
                          className="mr-2 inline-block h-2 w-2 rounded-full"
                          style={{ backgroundColor: tech.color }}
                        />
                        {tech.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </BlurFade>

          {/* Philosophy Quote */}
          <BlurFade delay={0.6} inView>
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
                    Clean data pipelines, clear dashboards, and measurable impact. That&apos;s the foundation of every insight I deliver.
                  </p>
                  <footer className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="h-px w-8 bg-primary/50" />
                    <span>My data philosophy</span>
                  </footer>
                </blockquote>
              </div>
            </section>
          </BlurFade>

          {/* Principles */}
          <BlurFade delay={0.7} inView>
            <section className="py-16 md:py-20">
              <div className="space-y-12">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                      How I Work
                    </h2>
                  </div>
                  <p className="text-base text-muted-foreground md:text-lg">
                    Core principles that guide my approach to data analytics
                  </p>
                </div>

                <div className="space-y-8">
                  {Object.values(copy.about.principles).map((principle, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="group relative"
                    >
                      <div className="flex gap-6">
                        <div className="relative">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                            <span className="text-xl font-bold">{idx + 1}</span>
                          </div>
                          {idx < Object.values(copy.about.principles).length - 1 && (
                            <div className="absolute left-6 top-12 h-8 w-px bg-gradient-to-b from-primary/30 to-transparent" />
                          )}
                        </div>
                        <div className="flex-1 space-y-2 pb-4">
                          <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                            {principle.title}
                          </h3>
                          <p className="leading-relaxed text-muted-foreground">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </BlurFade>

          {/* Recent Highlights */}
          <BlurFade delay={0.8} inView>
            <section className="py-16 md:py-20">
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                      Recent Highlights
                    </h2>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {copy.about.recentHighlights.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="group relative overflow-hidden rounded-lg border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                    >
                      <div className="absolute right-4 top-4 text-4xl opacity-20 transition-transform duration-300 group-hover:scale-125">
                        {item.icon}
                      </div>
                      <div className="relative space-y-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </BlurFade>

          {/* Beyond Code */}
          <BlurFade delay={0.9} inView>
            <section className="py-16 md:py-20">
              <div className="grid gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-6 w-6 text-primary" />
                      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Beyond Code
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                      When I&apos;m not crafting user experiences, you&apos;ll find me staying active at the gym
                      or strumming my ukulele. I believe in maintaining a{" "}
                      <Highlighter action="underline" color="#fbbf24" strokeWidth={2} padding={2} isView>
                        balance between technical excellence and personal growth
                      </Highlighter>.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border bg-card/50 p-6 text-center backdrop-blur-sm">
                      <div className="text-4xl mb-2">🏋️</div>
                      <p className="text-sm font-medium">Fitness</p>
                    </div>
                    <div className="rounded-lg border bg-card/50 p-6 text-center backdrop-blur-sm">
                      <div className="text-4xl mb-2">🎸</div>
                      <p className="text-sm font-medium">Music</p>
                    </div>
                  </div>
                </div>
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
