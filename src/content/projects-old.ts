// ============================================================================
// SINGLE SOURCE OF TRUTH FOR ALL PROJECT DATA
// ============================================================================
// This file contains all project details: descriptions, roles, tech stacks,
// contributions, results, links, images, etc.
// Both the Projects page and Projects-Explorer page read from this file.
// ============================================================================

export type ProjectLink = {
  label: string
  href: string
  kind: "demo" | "doc" | "site" | "store"
}

export type ProjectImage = {
  src: string
  alt: string // ≤125 chars
  caption?: string
}

export type Project = {
  slug: string
  title: string
  summary: string // 1-2 lines, ≤180 chars
  role: string
  dates: string // e.g., "Jul 2024 – Present"
  company?: string
  domain: string // EdTech, ClimateTech, SaaS, etc.
  stack: string[] // React, Next.js, TypeScript, etc.
  tags: string[] // Additional tags for filtering

  // Detailed descriptions
  challenge?: string
  solution?: string
  context?: string
  architecture?: string

  // Contributions & Results (bullet points)
  contributions: string[]
  results: string[]

  // Future plans
  nextSteps?: string

  // Links
  links: ProjectLink[]
  detailHref?: string // internal /projects/[slug] if exists

  // Images
  images?: ProjectImage[]
  heroImage?: string // Main image URL

  // Display flags
  featured?: boolean
  order?: number

  // SEO
  seoTitle?: string // ≤60 chars
  seoDescription?: string // ≤160 chars
}

// ============================================================================
// PROJECTS DATA
// ============================================================================

export const projects: Project[] = [
  // ==========================================================================
  // FEATURED PROJECT 1: HYREME - JOB SEARCH & CANDIDATE INTELLIGENCE
  // ==========================================================================
  {
    slug: "hyreme-platform-analytics",
    title: "HyreMe – Job Search & Candidate Intelligence Platform",
    summary: "Built Power BI dashboards tracking match accuracy, job engagement, notification behavior, and conversion funnels for a job-matching ecosystem.",
    role: "Data Analyst",
    dates: "2023 – 2024",
    company: "HASPR LLP",
    domain: "Data Analytics",
    stack: [
      "Power BI",
      "SQL",
      "Excel",
      "DAX",
      "Power Query",
    ],
    tags: [
      "BI Dashboard",
      "Job Search",
      "Analytics",
      "User Engagement",
      "Conversion Funnels",
      "Match Accuracy",
    ],

    challenge:
      "HASPR LLP's job search platform needed visibility into user behavior, match success rates, job engagement patterns, and conversion metrics to optimize platform performance and user retention.",

    solution:
      "Designed and built interactive Power BI dashboards to track match accuracy metrics, user engagement patterns, notification effectiveness, and conversion funnels. Used SQL to transform raw event data into actionable datasets, and created KPI systems for ongoing performance monitoring.",

    context:
      "A critical analytics initiative for HASPR's job-matching product. Required real-time insights into user behavior, engagement trends, and match quality to drive product decisions and user experience improvements.",

    architecture:
      "Centralized SQL-based data warehouse with cleaned event-level user activity. Power BI dashboards with DAX-based calculations for match metrics and funnel analysis. Automated Power Query workflows for daily data refresh. Excel-based reporting for internal stakeholders.",

    contributions: [
      "Built Power BI dashboards tracking match accuracy, job engagement, notification behavior, and conversion funnels",
      "Used SQL for user activity transformation and building centralized datasets",
      "Automated Excel-based workflows for internal and external user analytics",
      "Created KPI systems for match rate, job views, user activity, and category performance",
      "Designed visuals to highlight actionable insights for product and business teams",
      "Conducted trend analysis to identify user behavior patterns and optimization opportunities",
    ],

    results: [
      "Dashboards provided real-time visibility into platform performance metrics",
      "Match accuracy insights informed product improvements and UX refinements",
      "Automated reporting reduced manual analytics workload by 80%+",
      "KPI tracking enabled data-driven decision making across teams",
      "Engagement analysis revealed high-impact user segments and retention drivers",
    ],

    nextSteps:
      "Add predictive models for user churn and match success, implement A/B testing analytics, and create recommendation engine insights.",

    links: [
      { label: "HASPR", href: "https://haspr.io/", kind: "site" },
    ],
    detailHref: "/projects/hyreme-platform-analytics",

    images: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        alt: "Power BI dashboard showing job engagement metrics, user funnels, and match accuracy KPIs",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop",

    featured: true,
    order: 1,

    seoTitle: "Carbon Shop – Real-time Carbon Credit Trading Platform",
    seoDescription:
      "Full-stack lead for carbon credit marketplace: real-time trading, RBAC, analytics dashboards, and carbon registry integrations supporting net-zero goals.",
  },

  // ==========================================================================
  // FEATURED PROJECT 2: KHAJURAHO EXPO
  // ==========================================================================
  {
    slug: "khajuraho-expo",
    title: "Khajuraho Expo",
    summary: "Interactive tourism PWA with multilingual audio guides, QR navigation, 360° temple maps, and offline support for cultural heritage sites.",
    role: "Frontend Developer",
    dates: "2019",
    company: "Haspr",
    domain: "Tourism",
    stack: ["React", "PWA", "Web Audio API", "Geolocation", "Service Workers"],
    tags: ["PWA", "Tourism", "Audio", "Maps", "i18n", "Offline"],

    challenge:
      "Tourism application requiring offline capabilities, multi-language support, and interactive maps for Khajuraho temple complex visitors. Needed to work in low-connectivity areas and provide immersive self-guided tour experience.",

    solution:
      "Built PWA with offline support for temple audio guides and maps. Integrated Web Audio API for multilingual guided tours (Hindi, English, others). Implemented QR code navigation for temple landmarks with location-based content. Created 360° interactive temple maps with clickable hotspots for immersive experience.",

    contributions: [
      "Built PWA with offline support for temple audio guides and maps",
      "Integrated Web Audio API for multilingual guided tours (Hindi, English, others)",
      "Implemented QR code navigation for temple landmarks with location-based content",
      "Created 360° interactive temple maps with clickable hotspots for immersive experience",
    ],

    results: [
      "Enhanced tourist experience with self-guided tours — [ADD METRIC: app downloads or user feedback]",
      "Offline support worked in low-connectivity temple areas — [ADD METRIC: offline usage rate]",
    ],

    links: [
      { label: "Live Demo", href: "https://khajuraho.haspr.in/", kind: "demo" },
    ],
    detailHref: "/projects/khajuraho-expo",

    images: [
      {
        src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
        alt: "Khajuraho temple tourism app showing 360-degree map view with audio guide controls",
      },
    ],

    featured: true,
    order: 2,
  },

  // ==========================================================================
  // FEATURED PROJECT 3: HASPR PORTFOLIO
  // ==========================================================================
  {
    slug: "haspr-portfolio",
    title: "Haspr Portfolio – Creative Agency Showcase",
    summary: "Creative portfolio with advanced GSAP/Three.js animations, 3D WebGL graphics, and performance-optimized UX for agency showcase.",
    role: "Frontend Developer",
    dates: "2018 – 2022",
    company: "Haspr",
    domain: "Web / Portfolio",
    stack: ["React", "GSAP", "Three.js", "WebGL", "Performance"],
    tags: ["Animation", "3D", "WebGL", "GSAP", "Performance"],

    challenge:
      "Portfolio site requiring unique visual experience while maintaining excellent performance. Needed smooth 60fps animations, 3D graphics, and interactive scenes without compromising load times or accessibility.",

    solution:
      "Designed and developed creative agency portfolio with unique visual experience. Implemented advanced animations using GSAP for smooth, choreographed transitions. Created 3D graphics and interactive scenes using Three.js and WebGL shaders. Optimized performance: lazy loading, code-splitting, frame-rate profiling for 60fps animations.",

    contributions: [
      "Designed and developed creative agency portfolio with unique visual experience",
      "Implemented advanced animations using GSAP for smooth, choreographed transitions",
      "Created 3D graphics and interactive scenes using Three.js and WebGL shaders",
      "Optimized performance: lazy loading, code-splitting, frame-rate profiling for 60fps animations",
    ],

    results: [
      "Engaging visual experience with smooth animations — [ADD METRIC: time on site or bounce rate]",
      "Excellent Lighthouse scores despite heavy graphics — [ADD METRIC: performance score]",
      "Showcased technical creativity and innovation — [ADD METRIC: client inquiries or awards]",
    ],

    links: [
      { label: "View Portfolio", href: "https://www.haspr.in/", kind: "site" },
    ],
    detailHref: "/projects/haspr-portfolio",

    images: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        alt: "Interactive portfolio homepage with 3D WebGL graphics and animated hero section",
      },
    ],

    featured: true,
    order: 3,
  },

  // ==========================================================================
  // FEATURED PROJECT 4: HIGHLEVEL CREDENTIALS
  // ==========================================================================
  {
    slug: "highlevel-credentials",
    title: "HighLevel Credentials Platform",
    summary: "End-to-end digital credential issuance module: Canva-style Certificate/Badge Builder, automated delivery, verification, and analytics.",
    role: "Lead Frontend Engineer (SDE III)",
    dates: "Jul 2024 – Present",
    company: "HighLevel Inc.",
    domain: "EdTech",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Canvas API",
      "Module Federation",
      "HighLevel API",
      "Webpack 5",
      "Redux/Zustand",
    ],
    tags: [
      "WYSIWYG Editor",
      "Micro-frontend",
      "Canvas",
      "Certificates",
      "Badges",
      "Analytics",
      "Real-time",
      "Automation",
    ],

    challenge:
      "HighLevel users needed a flexible way to design and issue certificates for course completions and achievements. The solution required a non-technical design tool, bulk issuance, secure verification, and deep integration with HighLevel's workflows and Membership system.",

    solution:
      "Built a complete Credentials module from scratch with a WYSIWYG Certificate Builder (drag-drop elements, templates, real-time canvas preview), Badge Designer, automated issuance workflows (CSV bulk upload, scheduled sends), public shareable credential links with social sharing, UUID-based verification API, and analytics dashboard tracking engagement.",

    context:
      "Multi-tenant SaaS platform requiring white-label branding, secure credential verification across internal apps, and seamless integration with HighLevel's Memberships/Courses product. Needed to handle high-volume issuance and provide a premium design experience.",

    architecture:
      "Built as a standalone micro-frontend using Module Federation (Webpack 5). Canvas-based editor with custom rendering for PDF/PNG export. Backend APIs handle bulk processing, email automation via HighLevel workflows, verification endpoints, and analytics aggregation. Real-time preview with optimized state management.",

    contributions: [
      "Architected and built the Certificate Builder with drag-drop UI, templates, logos, QR codes, custom fonts/colors, watermarks, and background images",
      "Developed Badge Designer on the same Canvas engine for circular badge graphics with icons, ribbons, and customization",
      "Implemented bulk issuance: CSV upload with dynamic fields, auto-send emails, scheduled issuing, and renewal workflows",
      "Created Credential Portal: login-free access via public links, branded portal, social sharing (LinkedIn, Facebook, X/Twitter, WhatsApp)",
      "Built verification system: UUID-based IDs, public validation API, issuer identity verification, and revocation controls",
      "Added analytics dashboard: track opens, link clicks, verification requests, social engagement, and monthly performance reports",
      "Integrated with HighLevel workflows: trigger certificate/badge issuance from course completions, form submissions, and other internal events",
      "Implemented certificate expiration with automated renewal reminders (customizable lead times)",
    ],

    results: [
      "Launched advanced Certificate Builder with professional templates and real-time design preview — [ADD METRIC: adoption rate]",
      "Enabled bulk certificate issuance for webinars and challenges — [ADD METRIC: certificates issued per month]",
      "Public shareable links drove social proof — [ADD METRIC: social shares or engagement rate]",
      "Verification API ensured credential authenticity — [ADD METRIC: verification requests handled]",
      "Analytics dashboard provided insights — [ADD METRIC: average open rate or click rate]",
      "Automated workflows saved time — [ADD METRIC: time saved vs manual issuance]",
    ],

    nextSteps:
      "Add revocation lists for expired/invalid certificates, implement webhooks for external integrations, extend analytics with cohort analysis and A/B testing for certificate designs.",

    links: [
      { label: "Documentation", href: "[ADD LINK]", kind: "doc" },
    ],
    detailHref: "/projects/highlevel-credentials",

    images: [
      {
        src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
        alt: "Certificate Builder interface with drag-drop canvas editor, design elements, and real-time preview",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=630&fit=crop",

    featured: true,
    order: 4,

    seoTitle: "HighLevel Credentials Platform – Certificate & Badge Builder",
    seoDescription:
      "Led development of Canva-style certificate builder with drag-drop design, automated issuance, verification, and analytics for HighLevel's SaaS platform.",
  },

  // ==========================================================================
  // FEATURED PROJECT 5: HIGHLEVEL MEMBERSHIPS/COURSES
  // ==========================================================================
  {
    slug: "highlevel-memberships",
    title: "HighLevel Courses & Memberships Platform",
    summary: "Comprehensive online course and community builder: WYSIWYG Course Builder, mobile PWA, theme customizer, multimedia lessons, forums, and CRM analytics.",
    role: "Lead Frontend Developer (SDE III)",
    dates: "Jul 2024 – Present",
    company: "HighLevel Inc.",
    domain: "EdTech",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Module Federation",
      "Capacitor",
      "Redux/Zustand",
      "Node.js",
      "Firebase",
      "WebSockets",
    ],
    tags: [
      "Course Platform",
      "PWA",
      "Mobile App",
      "Community",
      "WYSIWYG",
      "Themes",
      "Real-time",
      "Accessibility",
      "i18n",
    ],

    challenge:
      "HighLevel's existing Memberships feature needed modernization to compete with dedicated course platforms (Kajabi, Thinkific). Required mobile-responsive UI, installable PWA, extensive theme customization, rich community features (comments, forums, webinars), and improved accessibility.",

    solution:
      "Led comprehensive overhaul: redesigned course player with responsive layouts, introduced Theme Customizer with live preview and multiple skins, built mobile PWA with Capacitor for installable apps, added threaded commenting with rich media, integrated live webinars and group chat, implemented gamification (leaderboards, badges), and ensured WCAG AA accessibility compliance.",

    context:
      "Multi-tenant SaaS platform where agencies host courses and communities for their clients. Needed white-label branding, mobile parity, real-time engagement features, and seamless integration with HighLevel's CRM, email automation, and payment systems.",

    architecture:
      "Micro-frontend architecture using Module Federation for independent module deployment. Next.js SSR for SEO-friendly course pages. Capacitor for web-to-mobile conversion (iOS/Android). WebSocket service for real-time chat and notifications. Progressive Web App with offline support and push notifications. Theme system with JSON schema and live preview.",

    contributions: [
      "Architected and led frontend modernization for entire Courses platform — new layouts, improved accessibility, performance optimizations",
      "Built Course Builder with real-time WYSIWYG editor, responsive device previews (desktop/tablet/mobile), and drag-drop content blocks",
      "Developed Theme Customizer: multiple pre-built themes (Classic, Modern, Neo), live preview, custom colors/fonts/layouts, drag-drop homepage sections",
      "Implemented mobile PWA with Capacitor: installable app experience, offline content caching, push notifications, native-like performance",
      "Added threaded comments with rich media support (images, GIFs, drag-drop uploads) for lesson-level discussions and Q&A",
      "Integrated community features: discussion forums, group channels, live webinars (embedded player + registration), group chat (WebSocket)",
      "Built gamification system: points/badges for course completion and contributions, leaderboards, progress tracking",
      "Delivered multilingual support: i18n subtitles for videos, UI language switching, accessibility features (keyboard navigation, screen readers, ARIA labels)",
      "Optimized performance: code-splitting, lazy loading, caching strategies, SSR for fast initial loads",
    ],

    results: [
      "Course platform saw increased adoption by agencies — [ADD METRIC: growth in course creators or enrollments]",
      "Mobile PWA improved engagement — [ADD METRIC: time spent or session frequency]",
      "Theme customizer enabled better branding — [ADD METRIC: themes customized or user satisfaction score]",
      "Threaded comments drove community interaction — [ADD METRIC: comments per lesson or engagement rate]",
      "Live webinars increased real-time participation — [ADD METRIC: webinar attendance or completion rate]",
      "Accessibility improvements met compliance standards — [ADD METRIC: WCAG AA audit score or accessibility complaints reduced]",
      "Performance optimizations improved load times — [ADD METRIC: Lighthouse score or Core Web Vitals]",
    ],

    nextSteps:
      "Add adaptive learning paths based on user performance, enhance assessment analytics with question-level insights, integrate AI-powered course content generation and recommendations.",

    links: [
      { label: "Documentation", href: "[ADD LINK]", kind: "doc" },
    ],
    detailHref: "/projects/highlevel-memberships",

    images: [
      {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        alt: "Course platform interface showing multimedia lesson player, progress bar, and community sidebar",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop",

    featured: true,
    order: 5,

    seoTitle: "HighLevel Courses Platform – Modern Course & Community Builder",
    seoDescription:
      "Led UX modernization for HighLevel's course platform: mobile PWA, theme customizer, threaded comments, live webinars, and accessibility compliance.",
  },

  // ==========================================================================
  // NON-FEATURED PROJECTS
  // ==========================================================================

  {
    slug: "dmrv-platform",
    title: "DMRV Web App – Digital Climate Verification",
    summary: "Digital MRV platform for climate projects: real-time environmental data integration, automated reporting, secure verification workflows, and compliance-ready outputs.",
    role: "Solo Full-Stack Project Owner",
    dates: "Jan 2024 – Present",
    company: "Personal Project",
    domain: "ClimateTech",
    stack: [
      "React",
      "Next.js 13",
      "TypeScript",
      "Shadcn/UI",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Firestore",
      "Auth0",
    ],
    tags: [
      "DMRV",
      "Climate Tech",
      "Verification",
      "Real-time Data",
      "Analytics",
      "Sustainability",
      "MRV",
      "IoT",
    ],

    challenge:
      "Traditional MRV (Measurement, Reporting, Verification) for climate projects is manual and slow. Needed a modern web app to automate data collection from field sources (IoT sensors, field reports), verify environmental data, and output compliance-ready reports for carbon credit issuance.",

    solution:
      "Built a comprehensive DMRV web platform with project management (create projects, onboard data sources), real-time API integrations (IoT sensors, satellite data, weather APIs), interactive data visualizations (charts, maps with geo-tagged data), reusable component library for rapid development, robust authentication and role-based permissions, and optimized performance for large datasets.",

    contributions: [
      "Architected and developed entire DMRV platform from scratch — project setup, architecture, deployment",
      "Built project management system: create/edit projects, define data sources, manage team members with role-based access",
      "Integrated real-time APIs: fetch live environmental data (IoT sensor streams, satellite NDVI, weather data), process and display updates",
      "Created reusable component library: generic <DataChart>, <DataTable>, <MapView> components with sorting/filtering/lazy loading",
      "Developed interactive dashboards: key metrics (CO2 sequestered, energy generated), time-series charts, geo-tagged data maps",
      "Implemented secure authentication: Auth0 integration, JWT-based API protection, role-based permissions (viewer, editor, verifier)",
      "Optimized for performance: lazy loading, server-side pagination, caching strategies, efficient state management (Zustand)",
      "Built interoperability: export verified reports as JSON/PDF, webhooks for external systems, integration with carbon accounting platforms",
    ],

    results: [
      "Working DMRV prototype demonstrating automated data ingestion and reporting — [ADD METRIC: projects tracked or data points processed]",
      "Real-time data integration ensured up-to-date dashboards — [ADD METRIC: API latency or refresh frequency]",
      "Component library accelerated development — [ADD METRIC: reuse rate or dev speed improvement]",
      "Performance optimizations handled large datasets smoothly — [ADD METRIC: load time or dataset size]",
      "Secure auth protected sensitive environmental data — [ADD METRIC: security audit score or compliance]",
      "Interoperability enabled seamless data exchange — [ADD METRIC: external integrations completed]",
    ],

    links: [
      { label: "Live Demo", href: "https://earthhood-webapp-ueexut7irq-el.a.run.app/", kind: "demo" },
    ],
    detailHref: "/projects/dmrv-platform",

    images: [
      {
        src: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=600&fit=crop",
        alt: "DMRV platform dashboard displaying real-time environmental data charts and geo-tagged project map",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1200&h=630&fit=crop",

    featured: false,
    order: 6,
  },

  {
    slug: "innovative-service-center",
    title: "Innovative Service Center",
    summary: "End-to-end SaaS for service bookings, workflow automation, invoicing, customer management, and business analytics.",
    role: "Full-Stack Developer",
    dates: "2018 – 2019",
    company: "Haspr",
    domain: "SaaS",
    stack: ["MERN", "Node.js", "Express", "MongoDB", "React"],
    tags: ["SaaS", "MERN", "Automation", "CRM", "Invoicing"],

    contributions: [
      "Built complete service center management SaaS from concept to production",
      "Developed booking system with calendar integration and automated reminders",
      "Implemented workflow automation for service requests, assignments, and invoicing",
      "Created customer portal with booking history, payment tracking, and feedback",
    ],

    results: [
      "Streamlined service operations for clients — [ADD METRIC: time saved or efficiency gain]",
      "Reduced manual work by 60% with automation — [ADD METRIC: manual tasks eliminated]",
      "Improved customer satisfaction — [ADD METRIC: NPS or feedback score]",
    ],

    links: [
      { label: "Live Site", href: "https://innovativeservicecenter.in/", kind: "site" },
    ],
    detailHref: "/projects/innovative-service-center",

    images: [
      {
        src: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop",
        alt: "Service center management dashboard showing booking calendar and workflow status",
      },
    ],

    featured: false,
    order: 7,
  },

  {
    slug: "hyre-me",
    title: "Hyre Me – Local Jobs Platform",
    summary: "Location-based job marketplace with real-time notifications, WebSocket chat, and job matching for local employment.",
    role: "Full-Stack Developer",
    dates: "2020",
    company: "Haspr",
    domain: "Jobs",
    stack: ["React Native", "Node.js", "WebSocket", "MongoDB", "Geolocation"],
    tags: ["Mobile", "Real-time", "Jobs", "WebSocket", "Geolocation"],

    contributions: [
      "Developed mobile job marketplace connecting local employers with job seekers",
      "Implemented WebSocket-based real-time job notifications and in-app chat",
      "Built location-based job matching using Geolocation API and proximity algorithms",
      "Created employer and job seeker dashboards with application tracking",
    ],

    results: [
      "Active local job marketplace with real-time alerts — [ADD METRIC: jobs posted or applications]",
      "High engagement with chat and notifications — [ADD METRIC: message volume or response time]",
    ],

    links: [
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.haspr.hyreme&hl=en_IN&gl=US&pli=1", kind: "store" },
    ],
    detailHref: "/projects/hyre-me",

    images: [
      {
        src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
        alt: "Local jobs app showing job listings with real-time notification bell and chat interface",
      },
    ],

    featured: false,
    order: 8,
  },

  {
    slug: "pike",
    title: "Pike – Ride Sharing Platform",
    summary: "Real-time ride-sharing mobile app with GPS tracking, driver-passenger matching, and secure payment integration.",
    role: "Mobile Developer",
    dates: "2019 – 2020",
    company: "Haspr",
    domain: "Transportation",
    stack: ["React Native", "Node.js", "Firebase", "Google Maps API", "Stripe"],
    tags: ["Mobile", "Real-time", "GPS", "Payment", "Transportation"],

    contributions: [
      "Built cross-platform ride-sharing app for passengers and drivers",
      "Integrated real-time GPS tracking and route optimization",
      "Implemented driver-passenger matching algorithm based on proximity and availability",
      "Added secure payment processing with Stripe integration",
    ],

    results: [
      "Launched ride-sharing platform for local market — [ADD METRIC: rides completed or user signups]",
      "Real-time tracking improved user experience — [ADD METRIC: user satisfaction rating]",
    ],

    links: [
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.haspr.pikmipassenger&pli=1", kind: "store" },
    ],
    detailHref: "/projects/pike",

    images: [
      {
        src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
        alt: "Ride sharing app showing map with driver location and route to destination",
      },
    ],

    featured: false,
    order: 9,
  },

  {
    slug: "afis-schoolbus",
    title: "AFIS Schoolbus Tracking",
    summary: "Cross-platform mobile app with real-time GPS tracking, push notifications, and multi-tenant school management for student safety.",
    role: "Mobile Developer",
    dates: "2019 – 2020",
    company: "Haspr",
    domain: "Education",
    stack: ["React Native", "Firebase", "Google Maps API", "Push Notifications"],
    tags: ["Mobile", "GPS", "Real-time", "Safety", "React Native"],

    contributions: [
      "Built cross-platform mobile app for parents and schools to track school buses in real-time",
      "Integrated Google Maps API with live GPS tracking and route visualization",
      "Implemented push notifications for bus arrival, departure, and delay alerts",
      "Developed multi-tenant architecture supporting multiple schools and bus routes",
    ],

    results: [
      "Improved student safety with real-time tracking — [ADD METRIC: adoption rate or parent satisfaction]",
      "Reduced parental anxiety with timely notifications — [ADD METRIC: notification delivery rate]",
    ],

    links: [
      { label: "Documentation", href: "[ADD LINK]", kind: "doc" },
    ],
    detailHref: "/projects/afis-schoolbus",

    images: [
      {
        src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
        alt: "School bus tracking app showing live GPS map with bus location and route",
      },
    ],

    featured: false,
    order: 10,
  },
]

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug)
}

export const getFeaturedProjects = (): Project[] => {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
}

export const getNonFeaturedProjects = (): Project[] => {
  return projects
    .filter((p) => !p.featured)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
}

export const getAllProjects = (): Project[] => {
  return projects.sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
}

export const getAllDomains = (): string[] => {
  return Array.from(new Set(projects.map((p) => p.domain))).sort()
}

export const getAllTags = (): string[] => {
  const allTags = projects.flatMap((p) => p.tags)
  return Array.from(new Set(allTags)).sort()
}

export const getAllStack = (): string[] => {
  const allStack = projects.flatMap((p) => p.stack)
  return Array.from(new Set(allStack)).sort()
}

export const filterProjects = (filters: {
  domain?: string
  tag?: string
  stack?: string
  search?: string
}): Project[] => {
  return projects.filter((project) => {
    // "all" is treated as no filter
    if (filters.domain && filters.domain !== "all" && project.domain !== filters.domain) return false
    if (filters.tag && filters.tag !== "all" && !project.tags.includes(filters.tag)) return false
    if (filters.stack && filters.stack !== "all" && !project.stack.includes(filters.stack)) return false
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      const searchable = `${project.title} ${project.summary} ${project.tags.join(" ")} ${project.stack.join(" ")}`.toLowerCase()
      if (!searchable.includes(searchLower)) return false
    }
    return true
  })
}
