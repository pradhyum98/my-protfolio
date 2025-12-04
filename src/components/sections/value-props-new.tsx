"use client"

import React, { useRef } from "react"
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"
import { copy } from "@/content/copy"
import { Highlighter } from "@/components/ui/highlighter"

// Helper function to highlight keywords in text with different styles
const highlightText = (
  text: string,
  keywords: Array<{ word: string, action: "highlight" | "underline" | "circle", color: string }> = []
) => {
  let result: (string | React.ReactElement)[] = [text]

  keywords.forEach(({ word, action, color }) => {
    const newResult: (string | React.ReactElement)[] = []
    result.forEach((part) => {
      if (typeof part === 'string') {
        const regex = new RegExp(`(${word})`, 'gi')
        const parts = part.split(regex)
        parts.forEach((p, i) => {
          if (p.toLowerCase() === word.toLowerCase()) {
            newResult.push(
              <Highlighter key={`${word}-${i}`} color={color} action={action} isView={true}>
                {p}
              </Highlighter>
            )
          } else if (p) {
            newResult.push(p)
          }
        })
      } else {
        newResult.push(part)
      }
    })
    result = newResult
  })

  return result
}

const valuePropsContent = [
  {
    label: "Data Architecture",
    title: copy.valueProps.cto.title,
    description: copy.valueProps.cto.item1,
    items: [
      copy.valueProps.cto.item1,
      copy.valueProps.cto.item2,
    ],
    highlights: [
      [
        { word: "data models", action: "highlight" as const, color: "#93c5fd" },
      ],
      [
        { word: "SQL pipelines", action: "underline" as const, color: "#60a5fa" },
        { word: "KPI", action: "circle" as const, color: "#3b82f6" },
      ],
    ],
    number: ".1",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    labelGradient: "from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400",
    dotColor: "bg-blue-500 dark:bg-blue-400",
  },
  {
    label: "Experience",
    title: copy.valueProps.hr.title,
    description: copy.valueProps.hr.item1,
    items: [
      copy.valueProps.hr.item1,
      copy.valueProps.hr.item2,
      copy.valueProps.hr.item3,
    ],
    highlights: [
      [
        { word: "5+ years", action: "highlight" as const, color: "#93c5fd" },
      ],
      [
        { word: "analytics", action: "underline" as const, color: "#60a5fa" },
      ],
      [
        { word: "Power BI", action: "circle" as const, color: "#3b82f6" },
      ]
    ],
    number: ".2",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    labelGradient: "from-purple-600 via-pink-600 to-rose-600 dark:from-purple-400 dark:via-pink-400 dark:to-rose-400",
    dotColor: "bg-purple-500 dark:bg-purple-400",
  },
  {
    label: "Delivery",
    title: copy.valueProps.em.title,
    description: copy.valueProps.em.item1,
    items: [
      copy.valueProps.em.item1,
      copy.valueProps.em.item2,
      copy.valueProps.em.item3,
    ],
    highlights: [
      [
        { word: "requirement gathering", action: "highlight" as const, color: "#93c5fd" },
      ],
      [
        { word: "dashboard deployment", action: "underline" as const, color: "#60a5fa" },
      ],
      [
        { word: "storytelling", action: "circle" as const, color: "#3b82f6" },
      ]
    ],
    number: ".3",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    labelGradient: "from-orange-600 via-amber-600 to-yellow-600 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-400",
    dotColor: "bg-orange-500 dark:bg-orange-400",
  },
]

export function ValuePropsNew() {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })

  const cardLength = valuePropsContent.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = valuePropsContent.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0,
    )
    setActiveCard(closestBreakpointIndex)
  })

  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-b from-white via-neutral-50/50 to-white py-20 dark:from-neutral-950 dark:via-neutral-900/30 dark:to-neutral-950 md:py-32">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_40%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="mb-6 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" strokeWidth={2} />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text font-medium tracking-wide text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-rose-400">
              VALUE PROPOSITION
            </span>
          </div>

          <h2 className="mb-6 max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-neutral-900 dark:text-neutral-50 md:text-6xl lg:text-7xl">
            {copy.valueProps.heading}
          </h2>

          <p className="max-w-2xl text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-2xl">
            {copy.valueProps.subheading}
          </p>
        </div>

        {/* Sticky Scroll Container */}
        <div
          ref={ref}
          className="relative flex h-[600px] justify-center gap-10 overflow-y-auto rounded-2xl scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:h-[800px] lg:gap-20"
          style={{
            scrollBehavior: 'smooth',
            scrollPaddingTop: '2rem',
          }}
        >
          {/* Left: Scrolling Content */}
          <div className="relative flex items-start px-2 md:px-4">
            <div className="max-w-2xl">
              {valuePropsContent.map((item, index) => (
                <div key={item.number} className="my-48 md:my-64">
                  {/* Label Only */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mb-10"
                  >
                    <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-lg font-bold uppercase tracking-wider text-transparent dark:from-blue-400 dark:via-blue-400 dark:to-blue-400 md:text-xl lg:text-2xl">
                      {item.label}
                    </span>
                  </motion.div>

                  {/* Items List */}
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {item.items.map((itemText, itemIdx) => (
                      <li key={itemIdx} className="group/item relative">
                        <div className="flex gap-4">
                          {/* Dot Bullet Point */}
                          <div className="relative mt-2.5 flex-shrink-0">
                            <div className="h-2.5 w-2.5 rounded-full bg-blue-600 transition-all duration-300 group-hover/item:scale-150 dark:bg-blue-400" />
                          </div>

                          {/* Text with Highlights */}
                          <p className="text-lg leading-relaxed text-neutral-700 transition-colors group-hover/item:text-neutral-900 dark:text-neutral-400 dark:group-hover/item:text-neutral-200 md:text-xl lg:text-2xl">
                            {highlightText(itemText, item.highlights[itemIdx] || [])}
                          </p>
                        </div>
                      </li>
                    ))}
                  </motion.ul>
                </div>
              ))}
              <div className="h-40" />
            </div>
          </div>

          {/* Right: Sticky Heading Display with Slide Up Animation */}
          <div className="sticky top-10 hidden h-[600px] w-[500px] items-center justify-center overflow-visible px-8 py-8 md:h-[700px] lg:flex lg:w-[650px] lg:px-12">
            <div className="relative h-full w-full">
              <AnimatePresence mode="wait">
                {valuePropsContent.map((item, idx) => {
                  if (activeCard !== idx) return null

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 flex flex-col items-start justify-center"
                    >
                      {/* Title with Red Dot */}
                      <h3 className="text-3xl font-bold leading-tight text-neutral-900 dark:text-neutral-50 md:text-4xl lg:text-5xl">
                        {item.title}
                        <span className="text-red-600 dark:text-red-500">.</span>
                      </h3>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
