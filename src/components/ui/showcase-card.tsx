"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ShowcaseCardProps = {
  icon: LucideIcon;
  title: string | React.ReactNode;
  description: string;
  chips?: string[];
  href?: string;
  className?: string;
  children?: React.ReactNode;
  layoutSpan?: string;
};

export function ShowcaseCard({
  icon: Icon,
  title,
  description,
  chips = [],
  href,
  className,
  children,
  layoutSpan,
}: ShowcaseCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    hover: { y: shouldReduceMotion ? 0 : -4 },
  };

  const CardWrapper = href ? motion.a : motion.div;
  const wrapperProps = href
    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-neutral-200/50 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl dark:border-neutral-800/50 dark:bg-neutral-900 md:p-8",
        layoutSpan,
        className
      )}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Icon */}
      <div className="mb-4 flex items-center justify-between">
        <div className="rounded-xl bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-purple-500/10 p-3 dark:from-blue-500/20 dark:via-violet-500/20 dark:to-purple-500/20">
          <Icon className="h-12 w-12 text-blue-600 dark:text-blue-400 md:h-16 md:w-16" strokeWidth={1.5} />
        </div>
        {href && (
          <ArrowRight className="h-6 w-6 translate-x-0 text-neutral-400 transition-transform group-hover:translate-x-1 dark:text-neutral-600" />
        )}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-50 md:text-3xl">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-xl">
        {description}
      </p>

      {/* Chips */}
      {chips.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {chips.map((chip, i) => (
            <span
              key={i}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {chip}
            </span>
          ))}
        </div>
      )}

      {/* Custom children (for special tiles) */}
      {children}
    </CardWrapper>
  );
}
