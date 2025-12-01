# 🗺️ Contact Page - Component Map

Visual reference for the Contact page component structure and layout.

---

## 📐 Page Layout (Desktop)

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                     FIXED BACKGROUND LAYER                   ┃
┃  ┌────────────────────────────────────────────────────────┐  ┃
┃  │ <ProgressiveBlur>                                      │  ┃
┃  │   intensity={0.22}                                     │  ┃
┃  │   direction="radial"                                   │  ┃
┃  │   to="rgba(139, 92, 246, 0.03)" // Purple tint        │  ┃
┃  │                                                        │  ┃
┃  │   + Ambient Orbs (blue-500/5, purple-500/5)           │  ┃
┃  │     animate-pulse with staggered delays               │  ┃
┃  └────────────────────────────────────────────────────────┘  ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                    CONTENT CONTAINER                         ┃
┃                    max-w-4xl mx-auto                         ┃
┃                                                              ┃
┃  ┌────────────────────────────────────────────────────────┐  ┃
┃  │ <BlurFade delay={0.1}>                                 │  ┃
┃  │                                                        │  ┃
┃  │   <motion.header>                                      │  ┃
┃  │     variants={staggerContainer}                        │  ┃
┃  │     py-32                                              │  ┃
┃  │                                                        │  ┃
┃  │     ┌──────────────────────────────────────────────┐  │  ┃
┃  │     │ OVERLINE BADGE                               │  ┃
┃  │     │ <motion.div variants={fadeInUp} custom={0}>  │  ┃
┃  │     │                                              │  ┃
┃  │     │   ✨ Get in Touch                            │  ┃
┃  │     │   (rounded-full, border, bg-card/50)        │  ┃
┃  │     └──────────────────────────────────────────────┘  │  ┃
┃  │                                                        │  ┃
┃  │     ┌──────────────────────────────────────────────┐  │  ┃
┃  │     │ DISPLAY HEADING                              │  ┃
┃  │     │ <motion.div variants={fadeInUp} custom={1}>  │  ┃
┃  │     │                                              │  ┃
┃  │     │   Let's build something                      │  ┃
┃  │     │   meaningful.                                │  ┃
┃  │     │   (text-7xl, gradient)                       │  ┃
┃  │     │                                              │  ┃
┃  │     │   Subheading: I'm based in Indore...        │  ┃
┃  │     │   (text-xl, muted-foreground)               │  ┃
┃  │     └──────────────────────────────────────────────┘  │  ┃
┃  │                                                        │  ┃
┃  │     ┌──────────────────────────────────────────────┐  │  ┃
┃  │     │ CTA LINKS                                    │  ┃
┃  │     │ <motion.div variants={fadeInUp} custom={2}>  │  ┃
┃  │     │                                              │  ┃
┃  │     │   📅 Schedule a call →                       │  ┃
┃  │     │   📧 Email me →                              │  ┃
┃  │     │   💼 LinkedIn →                              │  ┃
┃  │     │   📄 Download résumé →                       │  ┃
┃  │     │                                              │  ┃
┃  │     │   (flex-wrap, gap-6, underline on hover)    │  ┃
┃  │     └──────────────────────────────────────────────┘  │  ┃
┃  │                                                        │  ┃
┃  │   </motion.header>                                     │  ┃
┃  │                                                        │  ┃
┃  │ </BlurFade>                                            │  ┃
┃  └────────────────────────────────────────────────────────┘  ┃
┃                                                              ┃
┃  ┌────────────────────────────────────────────────────────┐  ┃
┃  │ <BlurFade delay={0.3}>                                 │  ┃
┃  │                                                        │  ┃
┃  │   GRADIENT DIVIDER                                     │  ┃
┃  │   ───────────────────────────────────────────────      │  ┃
┃  │   (h-px, from-transparent via-border to-transparent)  │  ┃
┃  │                                                        │  ┃
┃  │ </BlurFade>                                            │  ┃
┃  └────────────────────────────────────────────────────────┘  ┃
┃                                                              ┃
┃  ┌────────────────────────────────────────────────────────┐  ┃
┃  │ <BlurFade delay={0.4}>                                 │  ┃
┃  │                                                        │  ┃
┃  │   <motion.section>                                     │  ┃
┃  │     py-20, max-w-3xl                                   │  ┃
┃  │                                                        │  ┃
┃  │     ┌──────────────────────────────────────────────┐  │  ┃
┃  │     │ SECTION HEADING                              │  ┃
┃  │     │   Or send a message                          │  ┃
┃  │     │   (text-4xl, font-bold)                      │  ┃
┃  │     │                                              │  ┃
┃  │     │   Helper: I usually reply within 1 day      │  ┃
┃  │     │   (text-muted-foreground)                    │  ┃
┃  │     └──────────────────────────────────────────────┘  │  ┃
┃  │                                                        │  ┃
┃  │     ┌──────────────────────────────────────────────┐  │  ┃
┃  │     │ CONTACT FORM                                 │  ┃
┃  │     │                                              │  ┃
┃  │     │   <input honeypot (hidden, aria-hidden) />   │  ┃
┃  │     │                                              │  ┃
┃  │     │   ┌─────────────┬─────────────┐             │  ┃
┃  │     │   │ Name *      │ Email *     │             │  ┃
┃  │     │   │ _________   │ _________   │             │  ┃
┃  │     │   │ [error msg] │ [error msg] │             │  ┃
┃  │     │   └─────────────┴─────────────┘             │  ┃
┃  │     │                                              │  ┃
┃  │     │   How can I help?                            │  ┃
┃  │     │   [Select an option ▼]                       │  ┃
┃  │     │                                              │  ┃
┃  │     │   Message *                                  │  ┃
┃  │     │   ________________________________            │  ┃
┃  │     │   ________________________________            │  ┃
┃  │     │   ________________________________            │  ┃
┃  │     │   [error msg]                                │  ┃
┃  │     │                                              │  ┃
┃  │     │   ┌──────────────────────────────┐          │  ┃
┃  │     │   │ Send message → [Status]      │          │  ┃
┃  │     │   │ (underline, disabled while   │          │  ┃
┃  │     │   │  submitting)                 │          │  ┃
┃  │     │   │                              │          │  ┃
┃  │     │   │ Status Messages:             │          │  ┃
┃  │     │   │ ✅ Message sent...           │          │  ┃
┃  │     │   │ ⚠️ Something went wrong...   │          │  ┃
┃  │     │   └──────────────────────────────┘          │  ┃
┃  │     │                                              │  ┃
┃  │     │   (border-b-2 inputs, focus:border-primary) │  ┃
┃  │     └──────────────────────────────────────────────┘  │  ┃
┃  │                                                        │  ┃
┃  │   </motion.section>                                    │  ┃
┃  │                                                        │  ┃
┃  │ </BlurFade>                                            │  ┃
┃  └────────────────────────────────────────────────────────┘  ┃
┃                                                              ┃
┃  ┌────────────────────────────────────────────────────────┐  ┃
┃  │ <BlurFade delay={0.5}>                                 │  ┃
┃  │                                                        │  ┃
┃  │   GRADIENT DIVIDER                                     │  ┃
┃  │   ───────────────────────────────────────────────      │  ┃
┃  │                                                        │  ┃
┃  │ </BlurFade>                                            │  ┃
┃  └────────────────────────────────────────────────────────┘  ┃
┃                                                              ┃
┃  ┌────────────────────────────────────────────────────────┐  ┃
┃  │ <BlurFade delay={0.6}>                                 │  ┃
┃  │                                                        │  ┃
┃  │   <motion.address>                                     │  ┃
┃  │     py-20, text-center                                 │  ┃
┃  │                                                        │  ┃
┃  │     📍 Indore, India  •                                │  ┃
┃  │     🕐 IST (UTC+5:30)  •                               │  ┃
┃  │     ✅ Usually replies within 1 business day           │  ┃
┃  │                                                        │  ┃
┃  │     (flex-wrap, justify-center, gap-6)                │  ┃
┃  │   </motion.address>                                    │  ┃
┃  │                                                        │  ┃
┃  │ </BlurFade>                                            │  ┃
┃  └────────────────────────────────────────────────────────┘  ┃
┃                                                              ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

## 🧩 Component Hierarchy

```
ContactPage (Client Component)
│
├── ProgressiveBlur (Background Layer)
│   ├── Radial gradient blur
│   └── Ambient orbs (2x)
│
└── Container (max-w-4xl)
    │
    ├── BlurFade(0.1) → Header Section
    │   └── motion.header (staggerContainer)
    │       ├── Overline Badge (fadeInUp, custom=0)
    │       │   └── Sparkles icon
    │       ├── Display Heading (fadeInUp, custom=1)
    │       │   ├── "Let's build something"
    │       │   ├── "meaningful." (gradient)
    │       │   └── Subheading
    │       └── CTA Links (fadeInUp, custom=2)
    │           ├── Schedule a call (Calendar icon)
    │           ├── Email me (Mail icon)
    │           ├── LinkedIn (Linkedin icon)
    │           └── Download résumé (FileText icon)
    │
    ├── BlurFade(0.3) → Divider 1
    │   └── Gradient hairline
    │
    ├── BlurFade(0.4) → Form Section
    │   └── motion.section
    │       ├── Section Heading
    │       │   ├── "Or send a message"
    │       │   └── Helper text
    │       └── <form>
    │           ├── Honeypot (hidden)
    │           ├── Name input (required)
    │           ├── Email input (required, validated)
    │           ├── Purpose select (optional)
    │           ├── Message textarea (required)
    │           └── Submit button + Status
    │               ├── Success message (CheckCircle2 icon)
    │               └── Error message (AlertCircle icon)
    │
    ├── BlurFade(0.5) → Divider 2
    │   └── Gradient hairline
    │
    └── BlurFade(0.6) → Contact Meta
        └── motion.address
            ├── Location (MapPin icon)
            ├── Timezone (Clock icon)
            └── Response SLA (CheckCircle2 icon)
```

---

## 🎨 Component Breakdown

### 1. ProgressiveBlur
```tsx
<ProgressiveBlur
  className="absolute inset-0"
  intensity={0.22}
  direction="radial"
  from="transparent"
  to="rgba(139, 92, 246, 0.03)"
/>
```
**Purpose:** Subtle background depth
**Visual:** Soft radial blur with purple tint
**Performance:** GPU-accelerated, will-change: backdrop-filter

---

### 2. Ambient Orbs
```tsx
// Blue orb
<div className="absolute -top-40 right-1/4 h-96 w-96
  rounded-full bg-blue-500/5 blur-3xl animate-pulse" />

// Purple orb
<div className="absolute top-1/2 -left-40 h-96 w-96
  rounded-full bg-purple-500/5 blur-3xl animate-pulse
  [animation-delay:2s]" />
```
**Purpose:** Ambient depth, visual interest
**Visual:** Pulsing gradient blobs (very subtle)
**Performance:** Positioned absolute, no layout impact

---

### 3. Overline Badge
```tsx
<div className="inline-flex items-center gap-3
  rounded-full border border-border/50
  bg-card/50 px-4 py-2 backdrop-blur-sm">
  <Sparkles className="h-4 w-4 text-primary" />
  <span className="text-sm font-medium text-foreground/80">
    Get in Touch
  </span>
</div>
```
**Purpose:** Section identifier, visual anchor
**Animation:** fadeInUp, delay: 0ms
**Accessibility:** Decorative, not focusable

---

### 4. Display Heading
```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl
  font-bold tracking-tight">
  <span className="bg-gradient-to-br from-foreground
    via-foreground to-foreground/70 bg-clip-text
    text-transparent">
    Let's build something
  </span>
  <br />
  <span className="bg-gradient-to-r from-blue-600
    via-purple-600 to-blue-600 bg-clip-text
    text-transparent">
    meaningful<span className="text-foreground">.</span>
  </span>
</h1>
```
**Purpose:** Hero heading, sets tone
**Animation:** fadeInUp, delay: 100ms
**Accessibility:** Semantic `<h1>`, proper hierarchy

---

### 5. CTA Links
```tsx
<a
  href="[CALENDLY_LINK]"
  className="group inline-flex items-center gap-2
    text-foreground transition-colors hover:text-primary"
>
  <Calendar className="h-5 w-5" />
  <span className="underline underline-offset-4
    decoration-foreground/30
    group-hover:decoration-primary">
    Schedule a call
  </span>
  <span className="text-foreground/50
    group-hover:text-primary">→</span>
</a>
```
**Purpose:** Primary conversion actions
**Animation:** fadeInUp, delay: 200ms
**Accessibility:** Semantic `<a>`, keyboard navigable

---

### 6. Form Inputs
```tsx
<label className="block group">
  <span className="block text-sm font-medium mb-3
    text-foreground/90">
    Name <span className="text-red-500">*</span>
  </span>
  <input
    name="name"
    className={cn(
      "w-full border-b-2 bg-transparent py-3",
      errors.name
        ? "border-red-500"
        : "border-border focus:border-primary"
    )}
    aria-required="true"
    aria-invalid={!!errors.name}
    aria-describedby={errors.name ? "name-error" : undefined}
  />
  {errors.name && (
    <p id="name-error" className="mt-2 text-sm text-red-500"
      role="alert">
      {errors.name}
    </p>
  )}
</label>
```
**Purpose:** User input with validation
**States:** Default, Focus, Error
**Accessibility:** ARIA labels, error associations

---

### 7. Submit Button + Status
```tsx
<button
  type="submit"
  disabled={status === "submitting"}
  className={cn(
    "group inline-flex items-center gap-2 text-lg",
    "underline underline-offset-4",
    status === "submitting"
      ? "opacity-50 cursor-not-allowed"
      : "hover:decoration-primary hover:text-primary"
  )}
>
  <span>
    {status === "submitting" ? "Sending..." : "Send message"}
  </span>
  <span>→</span>
</button>

{status === "success" && (
  <motion.p
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center gap-2
      text-sm text-emerald-600"
    role="status"
  >
    <CheckCircle2 className="h-4 w-4" />
    Message sent. I'll get back within a day.
  </motion.p>
)}
```
**Purpose:** Form submission + feedback
**States:** Idle, Submitting, Success, Error
**Accessibility:** Disabled state, status announcements

---

### 8. Contact Meta
```tsx
<address className="flex items-center justify-center
  gap-6 text-sm text-muted-foreground">
  <div className="flex items-center gap-2">
    <MapPin className="h-4 w-4 text-primary" />
    <span>Indore, India</span>
  </div>
  <span className="text-border">•</span>
  <div className="flex items-center gap-2">
    <Clock className="h-4 w-4 text-primary" />
    <span>IST (UTC+5:30)</span>
  </div>
  <span className="text-border">•</span>
  <div className="flex items-center gap-2">
    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
    <span>Usually replies within 1 business day</span>
  </div>
</address>
```
**Purpose:** Trust signals, expectations
**Animation:** fadeInUp, delay: 600ms
**Accessibility:** Semantic `<address>`, not-italic

---

## 🎬 Animation Timeline

```
Time    Element                 Animation
─────────────────────────────────────────────────────────
0.0s    Progressive Blur        Static (no animation)
        Ambient Orbs           Pulse (infinite, 3s cycle)

0.1s    BlurFade (Header)      Blur + Fade in
        ├─ 0.0s  Overline      Fade up (y: 24→0, 0.6s)
        ├─ 0.1s  Heading       Fade up (y: 24→0, 0.6s)
        └─ 0.2s  CTAs          Fade up (y: 24→0, 0.6s)

0.3s    BlurFade (Divider 1)   Blur + Fade in

0.4s    BlurFade (Form)        Blur + Fade in
        └─ Form                Fade up (y: 16→0, 0.6s)

0.5s    BlurFade (Divider 2)   Blur + Fade in

0.6s    BlurFade (Meta)        Blur + Fade in
        └─ Meta                Fade up (y: 16→0, 0.6s)

User    Status Messages        Fade in + slide left
Action                         (x: -10→0, opacity: 0→1)
```

---

## 🔧 State Management

```tsx
// Form state
const [formState, setFormState] = useState<FormState>({
  name: "",
  email: "",
  purpose: "",
  message: "",
  honeypot: "",
})

// UI state
const [status, setStatus] = useState<FormStatus>("idle")
const [errors, setErrors] = useState<ValidationErrors>({})

// Spam prevention
const formStartTime = useRef<number | null>(null)
```

**State Diagram:**
```
                    ┌──────┐
                    │ idle │ ◄─────┐
                    └──┬───┘       │
                       │ submit    │
                       ▼           │
              ┌────────────────┐   │
              │  submitting    │   │
              └────────┬───────┘   │
                       │           │
            success ◄──┴──► error  │
                       │           │
                       └───────────┘
                       (5s auto-reset)
```

---

## 📊 Data Flow

```
User Input
    │
    ▼
handleChange()
    │
    ├─► Update formState
    └─► Clear field error
    │
    ▼
handleSubmit()
    │
    ├─► Honeypot check
    ├─► Time heuristic check
    ├─► validateForm()
    │   └─► Set errors (if any)
    │
    ├─► Submit to backend
    │   ├─► EmailJS
    │   └─► API route
    │
    ├─► Set status (success/error)
    └─► Reset form (if success)
```

---

## 🎯 Conversion Funnel

```
Page Load
    │
    ├─► [Above Fold] CTAs Visible
    │   ├─► 📅 Schedule → Calendly
    │   ├─► 📧 Email → mailto:
    │   ├─► 💼 LinkedIn → Profile
    │   └─► 📄 Résumé → Download
    │
    ├─► Scroll Down
    │   └─► Form Section Revealed
    │
    ├─► Fill Form
    │   ├─► Name (required)
    │   ├─► Email (required, validated)
    │   ├─► Purpose (optional)
    │   └─► Message (required)
    │
    ├─► Submit
    │   ├─► Validation
    │   ├─► Spam Check
    │   └─► Backend
    │
    └─► Success
        └─► Confirmation Message
            └─► Expectation Set (1 day)
```

---

## 📱 Responsive Behavior

### Mobile (< 640px)
- Single column layout
- Stacked CTAs (vertical)
- Form: Name, Email in separate rows
- Meta: Vertical stack

### Tablet (640px - 1024px)
- 2-column form grid (Name + Email)
- Wrapped CTAs (2 per row)
- Larger text sizes

### Desktop (> 1024px)
- Max-width 4xl container (56rem)
- Horizontal CTAs (all in one row)
- Largest text sizes (text-7xl heading)

---

## ♿ Accessibility Features

### Semantic HTML
```
<section>    Hero section
<header>     Page header
<form>       Contact form
<label>      Form labels
<address>    Contact meta
```

### ARIA Attributes
```
aria-required="true"           Required fields
aria-invalid={!!errors.field}  Validation state
aria-describedby="field-error" Error association
aria-hidden="true"             Honeypot
role="status"                  Success message
role="alert"                   Error message
```

### Keyboard Navigation
```
Tab Order:
1. Schedule link
2. Email link
3. LinkedIn link
4. Résumé link
5. Name input
6. Email input
7. Purpose select
8. Message textarea
9. Submit button
```

---

**Component Map Version:** 1.0
**Last Updated:** October 18, 2025
**Total Components:** 8 major sections, 15+ sub-components
