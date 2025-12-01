"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Network,
  Zap,
  Smartphone,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { ShowcaseBento } from "@/components/ui/showcase-bento";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import { SparklesText } from "@/components/ui/sparkles-text";
import { RetroGrid } from "@/components/ui/retro-grid";

export function ShowcaseNew() {
  const shouldReduceMotion = useReducedMotion();

  // Simplified animation variants for better performance
  const sectionVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05, // Reduced stagger
        delayChildren: 0.1, // Reduced delay
      },
    },
  };

  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-white py-20 dark:bg-neutral-950 md:py-32"
    >
      {/* Retro Grid Background - static on mobile for performance */}
      <div className="hidden lg:block">
        <RetroGrid
          className="absolute inset-0 opacity-[0.15]"
          angle={65}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Section Header - reduced animation */}
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50 md:text-4xl">
            Expertise in Motion
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
            Full-stack engineering with a focus on scalable architecture, performance, and developer
            experience
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div variants={sectionVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <ShowcaseBento>
            {/* 1. Architecture & Systems Design - spans 2 cols on lg */}
            <ShowcaseCard
              icon={Network}
              title="Architecture & Systems Design"
              description="Micro-frontends, module federation, distributed state, and scalable component libraries."
              chips={["Module Federation", "Micro-FE", "Design Systems"]}
              layoutSpan="lg:col-span-2"
              className="relative"
            >
              {/* Pulsing node animation - simplified */}
              {!shouldReduceMotion && (
                <div className="absolute right-6 top-6 h-3 w-3 rounded-full bg-blue-500">
                  <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping" />
                </div>
              )}
            </ShowcaseCard>

            {/* 2. Performance Engineering */}
            <ShowcaseCard
              icon={Zap}
              title="Performance Engineering"
              description="Sub-second FMP, code splitting, lazy loading, and real-time optimization metrics."
              chips={["SSR/SSG", "Web Vitals", "Lighthouse 100"]}
              className="relative overflow-hidden"
            >
              {/* Speed line sweep - removed for performance */}
            </ShowcaseCard>

            {/* 3. Real-time & Mobile-First */}
            <ShowcaseCard
              icon={Smartphone}
              title="Real-time & Mobile-First"
              description="WebSocket integrations, responsive layouts, touch optimization, and offline-first PWAs."
              chips={["WebSockets", "PWA", "Touch UX"]}
              className="relative"
            >
              {/* Static icon for better performance */}
              <div className="absolute right-8 top-8">
                <Smartphone className="h-8 w-8 text-neutral-300 dark:text-neutral-700" />
              </div>
            </ShowcaseCard>

            {/* 4. AI-Assisted Development */}
            <ShowcaseCard
              icon={Sparkles}
              title={
                <SparklesText sparklesCount={8} colors={{ first: "#3b82f6", second: "#a855f7" }}>
                  AI-Assisted Development
                </SparklesText>
              }
              description="Code generation, intelligent refactoring, and AI-powered testing workflows."
              chips={["Copilot", "v0", "Cursor"]}
            />

            {/* 5. Teaching & Enablement */}
            <ShowcaseCard
              icon={GraduationCap}
              title="Teaching & Enablement"
              description="Workshops, technical writing, code reviews, and mentoring junior to senior engineers."
              chips={["Workshops", "Docs", "Mentoring"]}
              href="/writing"
              className="group relative overflow-hidden"
            >
              {/* Removed confetti dots for performance */}
            </ShowcaseCard>

          </ShowcaseBento>
        </motion.div>
      </div>
    </section>
  );
}
