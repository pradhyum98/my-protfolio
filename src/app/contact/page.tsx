"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "motion/react"
import { MapPin, Clock, Mail, Linkedin, CheckCircle2, AlertCircle, Sparkles } from "lucide-react"
import { copy } from "@/content/copy"
import { SITE_CONFIG } from "@/lib/constants"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { BlurFade } from "@/components/ui/blur-fade"
import { ResumeDownloadLink } from "@/components/resume-download-button"
import { cn } from "@/lib/utils"

// ============================================================================
// TYPES
// ============================================================================

type FormState = {
  name: string
  email: string
  purpose: string
  message: string
  honeypot: string // spam trap
}

type FormStatus = "idle" | "submitting" | "success" | "error"

type ValidationErrors = {
  [K in keyof FormState]?: string
}

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
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

// ============================================================================
// VALIDATION HELPERS
// ============================================================================

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateForm = (formState: FormState): ValidationErrors => {
  const errors: ValidationErrors = {}

  if (!formState.name.trim()) {
    errors.name = copy.contact.validationNameRequired
  }

  if (!formState.email.trim()) {
    errors.email = copy.contact.validationEmailRequired
  } else if (!validateEmail(formState.email)) {
    errors.email = copy.contact.validationEmailInvalid
  }

  if (!formState.message.trim()) {
    errors.message = copy.contact.validationMessageRequired
  }

  return errors
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function ContactPage() {
  // Contact form state
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    purpose: "",
    message: "",
    honeypot: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errors, setErrors] = useState<ValidationErrors>({})
  const formStartTime = useRef<number | null>(null)

  // Track when user starts interacting with forms (spam heuristic)
  useEffect(() => {
    formStartTime.current = Date.now()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error for this field
    if (errors[name as keyof FormState]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name as keyof FormState]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Spam check: honeypot
    if (formState.honeypot) {
      console.warn("[Contact] Honeypot triggered")
      return
    }

    // Spam check: time heuristic (submitted too quickly)
    const timeElapsed = formStartTime.current ? Date.now() - formStartTime.current : 0
    if (timeElapsed < 2000) {
      console.warn("[Contact] Form submitted too quickly")
      return
    }

    // Validate
    const validationErrors = validateForm(formState)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus("submitting")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      console.log("[Contact] Form submitted successfully:", data.id)

      setStatus("success")
      setFormState({
        name: "",
        email: "",
        purpose: "",
        message: "",
        honeypot: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("[Contact] Submission failed:", error)
      setStatus("error")

      // Reset error state after 5 seconds
      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    }
  }


  return (
    <div className="relative overflow-hidden">
      {/* Soft background depth */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <ProgressiveBlur
          className="absolute inset-0"
          intensity={0.22}
          direction="radial"
          from="transparent"
          to="rgba(139, 92, 246, 0.03)"
        />
        <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-red-500/5 blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl animate-pulse [animation-delay:4s]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <BlurFade delay={0.1} inView>
            <motion.header
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="py-16 md:py-24 lg:py-32 text-center space-y-8"
            >
              {/* Overline */}
              <motion.div variants={fadeInUp} custom={0}>
                <div className="inline-flex items-center gap-3 rounded-full border border-border/50 bg-card/50 px-4 py-2 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground/80">
                    Get in Touch
                  </span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={fadeInUp} custom={1} className="space-y-6">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Let&apos;s build something
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    meaningful
                    <span className="text-red-500">.</span>
                  </span>
                </h1>

                {/* Decorative Line */}
                <div className="mx-auto w-fit">
                  <div className="relative h-1 w-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 blur-sm" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500" />
                  </div>
                </div>

                <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                  {copy.contact.subheading}
                </p>
              </motion.div>

              {/* Primary & Secondary CTAs */}
              <motion.div
                variants={fadeInUp}
                custom={2}
                className="flex flex-wrap items-center justify-center gap-6 text-base md:text-lg"
              >
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                  <span className="underline underline-offset-4 decoration-foreground/30 group-hover:decoration-primary transition-colors">
                    Email me
                  </span>
                  <span className="text-foreground/50">→</span>
                </a>

                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="underline underline-offset-4 decoration-foreground/30 group-hover:decoration-primary transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-foreground/50">→</span>
                </a>

                <ResumeDownloadLink
                  className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
                  iconClassName="h-5 w-5"
                >
                  <span className="underline underline-offset-4 decoration-foreground/30 group-hover:decoration-primary transition-colors">
                    Download résumé
                  </span>
                  <span className="text-foreground/50">→</span>
                </ResumeDownloadLink>
              </motion.div>
            </motion.header>
          </BlurFade>

          {/* Divider */}
          <BlurFade delay={0.3} inView>
            <div className="relative h-px w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </BlurFade>

          {/* Form */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-16 md:py-20"
          >
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="text-center space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    Send a message<span className="text-blue-500">.</span>
                  </h2>

                  {/* Decorative Line */}
                  <div className="mx-auto w-fit">
                    <div className="relative h-0.5 w-12">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent blur-sm" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  I usually reply within 1 business day. Add links if helpful.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-8"
                aria-describedby="contact-note"
              >
                {/* Honeypot (hidden from users, visible to bots) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formState.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Name & Email */}
                <div className="grid gap-8 md:grid-cols-2">
                  <label className="block group">
                    <span className="block text-sm font-medium mb-3 text-foreground/90">
                      Name <span className="text-red-500">*</span>
                    </span>
                    <input
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full border-b-2 bg-transparent py-3 outline-none transition-colors",
                        "placeholder:text-muted-foreground/50",
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-border focus:border-primary"
                      )}
                      placeholder="Your name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-sm text-red-500" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </label>

                  <label className="block group">
                    <span className="block text-sm font-medium mb-3 text-foreground/90">
                      Email <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full border-b-2 bg-transparent py-3 outline-none transition-colors",
                        "placeholder:text-muted-foreground/50",
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-border focus:border-primary"
                      )}
                      placeholder="your.email@example.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm text-red-500" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </label>
                </div>

                {/* Purpose - Enhanced Select */}
                <label className="block group relative">
                  <span className="flex items-center gap-2 text-sm font-medium mb-3 text-foreground/90">
                    How can I help?
                    <span className="text-xs text-muted-foreground">(optional)</span>
                  </span>
                  <div className="relative">
                    <select
                      name="purpose"
                      value={formState.purpose}
                      onChange={handleChange}
                      className={cn(
                        "w-full appearance-none border-b-2 bg-transparent py-3 pr-10 outline-none transition-all",
                        "border-border focus:border-blue-500",
                        "cursor-pointer",
                        formState.purpose && "border-blue-500/50"
                      )}
                      aria-label="Select purpose"
                    >
                      <option value="">Select an option...</option>
                      <option value="interview">💼 Interview request</option>
                      <option value="consulting">🎯 Consulting / Architecture review</option>
                      <option value="performance">⚡ Performance rescue</option>
                      <option value="general">💬 General inquiry</option>
                    </select>

                    {/* Custom Dropdown Arrow */}
                    <div className="pointer-events-none absolute right-0 bottom-3 flex items-center">
                      <svg
                        className={cn(
                          "h-5 w-5 transition-all duration-300",
                          formState.purpose
                            ? "text-blue-500"
                            : "text-muted-foreground group-hover:text-foreground"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {/* Accent Indicator */}
                    {formState.purpose && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute bottom-0 left-0 h-0.5 w-full origin-left"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 blur-sm" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-red-500 to-blue-500" />
                      </motion.div>
                    )}
                  </div>
                </label>

                {/* Message */}
                <label className="block group">
                  <span className="block text-sm font-medium mb-3 text-foreground/90">
                    Message <span className="text-red-500">*</span>
                  </span>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className={cn(
                      "w-full border-b-2 bg-transparent py-3 outline-none transition-colors resize-none",
                      "placeholder:text-muted-foreground/50",
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-border focus:border-primary"
                    )}
                    placeholder="Tell me about your project or question..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-red-500" role="alert">
                      {errors.message}
                    </p>
                  )}
                </label>

                {/* Submit Button */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={cn(
                      "group inline-flex items-center gap-2 text-lg font-medium transition-all relative",
                      "underline underline-offset-4 decoration-foreground/30",
                      status === "submitting"
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:decoration-blue-500 hover:text-blue-500"
                    )}
                  >
                    <span>
                      {status === "submitting" ? "Sending..." : "Send message"}
                    </span>
                    <span className={cn(
                      "transition-colors",
                      status === "submitting"
                        ? "text-foreground/50"
                        : "text-foreground/50 group-hover:text-red-500"
                    )}>
                      →
                    </span>
                  </button>

                  {/* Status Messages */}
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2"
                      role="status"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-500" />
                      <p className="text-sm font-medium">
                        <span className="text-blue-500">Message sent</span>
                        <span className="text-muted-foreground">. I&apos;ll get back within a day.</span>
                      </p>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2"
                      role="alert"
                    >
                      <AlertCircle className="h-4 w-4 text-red-500" />
                      <p className="text-sm font-medium">
                        <span className="text-red-500">Something went wrong</span>
                        <span className="text-muted-foreground">. Please try again.</span>
                      </p>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.section>

          {/* Divider */}
          <BlurFade delay={0.5} inView>
            <div className="relative h-px w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </BlurFade>

          {/* Contact Meta / Trust Builders */}
          <BlurFade delay={0.6} inView>
            <motion.address
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="not-italic py-16 md:py-20"
            >
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground md:text-base">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span>{SITE_CONFIG.location}</span>
                </div>

                <span className="text-border">•</span>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-red-500" />
                  <span>{SITE_CONFIG.timezone}</span>
                </div>

                <span className="text-border">•</span>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  <span>Usually replies within 1 business day</span>
                </div>
              </div>
            </motion.address>
          </BlurFade>
        </div>
      </div>
    </div>
  )
}
