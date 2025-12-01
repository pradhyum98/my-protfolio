"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  BarChart3,
  Database,
  FileSpreadsheet,
  Code2,
  Target,
  LucideIcon,
} from "lucide-react"

type ExpertiseArea = {
  icon: LucideIcon
  title: string
  description: string
  chips: string[]
}

const expertiseAreas: ExpertiseArea[] = [
  {
    icon: BarChart3,
    title: "Business Intelligence & Dashboards",
    description: "Interactive dashboards, KPI models, and reporting systems.",
    chips: ["Power BI", "DAX", "Data Modeling", "Power Query"],
  },
  {
    icon: Database,
    title: "SQL Analytics & ETL",
    description: "Data extraction, transformation, cleaning, and validation.",
    chips: ["MySQL", "Joins", "CTEs", "Window Functions"],
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Automation & Reporting",
    description: "Advanced Excel workflows that reduce manual work.",
    chips: ["Pivot Tables", "Power Query", "Formulas", "Automation"],
  },
  {
    icon: Code2,
    title: "Python for Analysis",
    description: "EDA, data cleaning, trend modeling, and automation scripts.",
    chips: ["Pandas", "NumPy", "Jupyter", "Visualization"],
  },
  {
    icon: Target,
    title: "Business Problem Solving",
    description: "Translating messy data into clear, actionable insights.",
    chips: ["Stakeholder Communication", "Documentation", "Data Storytelling"],
  },
]

export function ShowcaseEditorial() {
  const shouldReduceMotion = useReducedMotion()

  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  }

  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-white py-16 dark:bg-neutral-950 md:py-20"
    >
      <div className="container relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {/* Section Header */}
        <motion.header
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10 md:mb-12"
        >
          <div className="overflow-hidden">
            <motion.h2
              className="font-display text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Expertise in Motion
            </motion.h2>
          </div>
          <motion.p
            className="mt-2 max-w-2xl text-base text-neutral-600 dark:text-neutral-400 md:text-lg"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Turning raw data into decision-ready insights.
          </motion.p>
        </motion.header>

        {/* Text-Only Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon

            return (
              <motion.article
                key={area.title}
                variants={itemVariants}
                className="group relative"
              >
                {/* Hairline separator */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs font-medium text-neutral-400 dark:text-neutral-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-neutral-200 to-transparent dark:from-neutral-800" />
                </div>

                <div className="space-y-3">
                  {/* Icon - simple, no background */}
                  <Icon
                    className="h-6 w-6 text-neutral-700 transition-colors duration-300 group-hover:text-blue-600 dark:text-neutral-400 dark:group-hover:text-blue-400"
                    strokeWidth={1.5}
                  />

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-neutral-50 dark:group-hover:text-blue-400 md:text-2xl">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
                    {area.description}
                  </p>

                  {/* Tech Stack - animated marquee */}
                  <div className="relative overflow-hidden">
                    <motion.div
                      className="flex items-center gap-4 whitespace-nowrap text-xs text-neutral-500 dark:text-neutral-500"
                      animate={{
                        x: [0, -100],
                      }}
                      transition={{
                        x: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 15,
                          ease: "linear",
                        },
                      }}
                    >
                      {/* Render chips twice for seamless loop */}
                      {[...area.chips, ...area.chips].map((chip, idx) => (
                        <span key={idx} className="flex items-center gap-4">
                          <span className="font-mono">{chip}</span>
                          <span className="text-neutral-300 dark:text-neutral-700">•</span>
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
