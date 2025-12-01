"use client"

import { motion } from "framer-motion"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Marquee } from "@/components/ui/marquee"

const companies: Array<{
  name: string
  role: string
  period: string
  logo: string
}> = [
  { name: "HASPR LLP", role: "Data Analyst", period: "2020–Present", logo: "/company_logo/haspr logo.svg" },
  { name: "Upwork / Fiverr", role: "Freelance Data Analyst", period: "2021–Present", logo: "/company_logo/haspr logo.svg" },
  { name: "Newton School", role: "Professional Data Science Trainee", period: "2022", logo: "/company_logo/newton.avif" },
]

// Split companies into two rows for dual marquee effect
const firstRow = companies.slice(0, 4)
const secondRow = companies.slice(4)

const CompanyCard = ({ company }: { company: typeof companies[0] }) => {
  return (
    <div className="group mx-6 flex items-center gap-4 md:mx-8 md:gap-6">
      {/* Logo */}
      <div className="relative flex h-12 w-24 shrink-0 items-center justify-center rounded-lg bg-white p-2 transition-transform group-hover:scale-110 dark:bg-white md:h-16 md:w-32 md:p-3">
        <img
          src={company.logo}
          alt={company.name}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Role and Period */}
      <div className="flex flex-col">
        <span className="whitespace-nowrap text-lg font-semibold text-neutral-700 dark:text-neutral-300 md:text-xl lg:text-2xl">
          {company.role}
        </span>
        <span className="whitespace-nowrap text-sm font-medium text-neutral-500 dark:text-neutral-500 md:text-base">
          {company.period}
        </span>
      </div>

      {/* Red Dot Separator */}
      <div className="h-2 w-2 rounded-full bg-red-500 md:h-3 md:w-3" />
    </div>
  )
}

export function SocialProofNew() {
  // const _shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-white pb-32 pt-8 dark:bg-neutral-950 md:pb-48 md:pt-12 overflow-visible">
      {/* Dot Pattern Background */}


      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl space-y-20 text-center md:space-y-48"
        >

          {/* Main Stats - Refined Design */}
          <div>
            <div className="mb-20 grid grid-cols-1 gap-y-40 sm:grid-cols-2 sm:gap-x-20 sm:gap-y-32 md:grid-cols-4 md:gap-x-28 md:gap-y-0">
              {/* Years Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="group relative text-center"
              >
                {/* Number */}
                <div className="relative mb-6 px-8 py-4 sm:px-10 sm:py-6 md:px-12 md:py-8">
                  {/* Animated Glow */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 blur-[60px] sm:h-40 sm:w-40 md:h-48 md:w-48"
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      scale: [0.9, 1.2, 0.9],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="h-full w-full rounded-full bg-neutral-400/70 dark:bg-white/20" />
                  </motion.div>

                  <div className="relative flex items-baseline justify-center gap-1.5">
                    <NumberTicker
                      value={5}
                      direction="up"
                      delay={0.4}
                      className="tabular-nums text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-7xl md:text-8xl"
                    />
                    <span className="text-4xl font-semibold text-blue-600 dark:text-blue-400 sm:text-5xl md:text-6xl">
                      +
                    </span>
                  </div>
                </div>

                {/* Label */}
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300 sm:text-base">
                  Years Experience
                </h3>

                {/* Description */}
                <p className="mx-auto max-w-[180px] text-xs leading-relaxed text-neutral-500 dark:text-neutral-500 sm:text-sm">
                  Data analytics, BI reporting, and dashboard automation
                </p>

                {/* Subtle Accent Line */}
                <div className="mx-auto mt-6 h-px w-12 bg-gradient-to-r from-transparent via-blue-600 to-transparent dark:via-blue-400" />
              </motion.div>

              {/* Dashboards & Analytics Systems Built */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative text-center"
              >
                {/* Number */}
                <div className="relative mb-6 px-8 py-4 sm:px-10 sm:py-6 md:px-12 md:py-8">
                  {/* Animated Glow */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 blur-[60px] sm:h-40 sm:w-40 md:h-48 md:w-48"
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      scale: [0.9, 1.2, 0.9],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="h-full w-full rounded-full bg-neutral-400/70 dark:bg-white/20" />
                  </motion.div>

                  <div className="relative flex items-baseline justify-center gap-1.5">
                    <NumberTicker
                      value={15}
                      direction="up"
                      delay={0.5}
                      className="tabular-nums text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-7xl md:text-8xl"
                    />
                    <span className="text-4xl font-semibold text-blue-600 dark:text-blue-400 sm:text-5xl md:text-6xl">
                      +
                    </span>
                  </div>
                </div>

                {/* Label */}
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300 sm:text-base">
                  Dashboards & Analytics Systems Built
                </h3>

                {/* Description */}
                <p className="mx-auto max-w-[180px] text-xs leading-relaxed text-neutral-500 dark:text-neutral-500 sm:text-sm">
                  Power BI • Excel Automation • SQL-Driven Insights
                </p>

                {/* Subtle Accent Line */}
                <div className="mx-auto mt-6 h-px w-12 bg-gradient-to-r from-transparent via-blue-600 to-transparent dark:via-blue-400" />
              </motion.div>

              {/* Business Problems Solved */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative text-center"
              >
                {/* Number */}
                <div className="relative mb-6 px-8 py-4 sm:px-10 sm:py-6 md:px-12 md:py-8">
                  {/* Animated Glow */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 blur-[60px] sm:h-40 sm:w-40 md:h-48 md:w-48"
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      scale: [0.9, 1.2, 0.9],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="h-full w-full rounded-full bg-neutral-400/70 dark:bg-white/20" />
                  </motion.div>

                  <div className="relative flex items-baseline justify-center gap-1.5">
                    <NumberTicker
                      value={20}
                      direction="up"
                      delay={0.6}
                      className="tabular-nums text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-7xl md:text-8xl"
                    />
                    <span className="text-4xl font-semibold text-blue-600 dark:text-blue-400 sm:text-5xl md:text-6xl">
                      +
                    </span>
                  </div>
                </div>

                {/* Label */}
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300 sm:text-base">
                  Business Problems Solved
                </h3>

                {/* Description */}
                <p className="mx-auto max-w-[180px] text-xs leading-relaxed text-neutral-500 dark:text-neutral-500 sm:text-sm">
                  User behavior analytics • Sales forecasting • HR & financial insights
                </p>

                {/* Subtle Accent Line */}
                <div className="mx-auto mt-6 h-px w-12 bg-gradient-to-r from-transparent via-blue-600 to-transparent dark:via-blue-400" />
              </motion.div>

              {/* Data Points Analyzed Weekly */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative text-center"
              >
                {/* Number */}
                <div className="relative mb-6 px-8 py-4 sm:px-10 sm:py-6 md:px-12 md:py-8">
                  {/* Animated Glow */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 blur-[60px] sm:h-40 sm:w-40 md:h-48 md:w-48"
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                      scale: [0.9, 1.2, 0.9],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="h-full w-full rounded-full bg-neutral-400/70 dark:bg-white/20" />
                  </motion.div>

                  <div className="relative flex items-baseline justify-center gap-1.5">
                    <NumberTicker
                      value={50}
                      direction="up"
                      delay={0.7}
                      className="tabular-nums text-6xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-7xl md:text-8xl"
                    />
                    <span className="text-4xl font-semibold text-blue-600 dark:text-blue-400 sm:text-5xl md:text-6xl">
                      K+
                    </span>
                  </div>
                </div>

                {/* Label */}
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300 sm:text-base">
                  Data Points Analyzed Weekly
                </h3>

                {/* Description */}
                <p className="mx-auto max-w-[180px] text-xs leading-relaxed text-neutral-500 dark:text-neutral-500 sm:text-sm">
                  Across product usage, HR metrics, and operational datasets
                </p>

                {/* Subtle Accent Line */}
                <div className="mx-auto mt-6 h-px w-12 bg-gradient-to-r from-transparent via-blue-600 to-transparent dark:via-blue-400" />
              </motion.div>
            </div>
          </div>

        </motion.div>
      </div>

      {/* Dual Marquee - Companies with 3D Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative mt-24 md:mt-32"
      >
        <div className="relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden [perspective:1000px]">
          <div
            className="flex w-full flex-col gap-4 [transform:rotateX(10deg)]"
          >
            {/* First Row - Forward */}
            <Marquee repeat={6} className="[--duration:60s]">
              {firstRow.map((company) => (
                <CompanyCard key={`${company.name}-1`} company={company} />
              ))}
            </Marquee>

            {/* Second Row - Reverse */}
            <Marquee reverse repeat={6} className="[--duration:50s]">
              {secondRow.map((company) => (
                <CompanyCard key={`${company.name}-2`} company={company} />
              ))}
            </Marquee>
          </div>

          {/* Gradient Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-neutral-950"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-neutral-950"></div>
        </div>
      </motion.div>
    </section>
  )
}
