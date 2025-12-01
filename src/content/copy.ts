// ============================================================================
// SINGLE SOURCE OF TRUTH FOR ALL USER-VISIBLE STRINGS
// ============================================================================
// Do NOT add hard-coded strings in components. Reference this file instead.
// For new strings, add them here first, then reference by key.
// ============================================================================

// Force update
export const copy = {
  // ========== BRAND & NAVIGATION ==========
  brand: {
    initials: "PU",
    fullName: "Pradhyum Upadhyay",
  },

  nav: {
    home: "Home",
    projects: "Projects",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    skills: "Skills",
    services: "Services",
    writing: "Writing & Speaking",
    resume: "Resume",
    resumeButton: "Resume",
    downloadResume: "Download Resume",
    linkedin: "LinkedIn",
    github: "GitHub",
  },

  // ========== HERO SECTION ==========
  hero: {
    badge: "Available for Data Projects",
    titlePart1: "Transforming Data Into",
    titlePart2: "Decisions That Matter",
    subtitle: "I connect data sources, engineer clean pipelines, and deliver insights that drive action, not confusion.",
    supportingText: "Powered by SQL, Python, Excel, and Power BI to architect dashboards, automation, and insight engines",
  },

  // ========== CALL-TO-ACTION BUTTONS ==========
  cta: {
    requestInterview: "Explore Dashboards",
    seeCaseStudies: "See case studies",
    downloadResume: "Download résumé",
    scheduleCall: "Schedule a call",
    sendEmail: "Send an email",
    heading: "Let's build something great",
    subheading: "I respond fast and keep things simple. Choose what works for you.",
  },

  // ========== VALUE PROPOSITIONS ==========
  valueProps: {
    heading: "Why work with me",
    subheading: "Tailored value for every stakeholder",
    cto: {
      title: "For CTO/CXO",
      item1: "Architecture that balances speed, safety, and scale—micro-frontends, SSR, web→mobile with Capacitor, and performance budgets",
      item2: "Module Federation for independently deployable modules and reduced coupling",
      item3: "End-to-end ownership from architecture to production and mobile parity",
    },
    hr: {
      title: "For HR/Recruiter",
      item1: "Senior full-stack (React/Next.js/TypeScript/Node/GCP/Firebase), SDE III ownership, cross-team delivery",
      item2: "Education & credentialing domain expertise with 7+ years across SaaS, EdTech, EnergyTech",
      item3: "English/Hindi fluent; mentored developers and taught MERN/MEAN as part-time trainer",
    },
    em: {
      title: "For Engineering Manager",
      item1: "Own the lifecycle—scoping, building, testing, releasing, mentoring, and iterating with UI/UX, QA, backend, and DevOps",
      item2: "Real-time WYSIWYG editors, Canvas-based Badge Builder, and accessibility (keyboard navigation, screen readers)",
      item3: "AI-assisted workflows (Cursor/MCP/agents) for faster, safer delivery without compromising quality",
    },
  },

  // ========== SOCIAL PROOF ==========
  socialProof: {
    heading: "Worked at / Built for / Trained with",
    companies: [
      "HighLevel",
      "ReNew Power",
      "Climate Connect Digital",
      "Haspr",
      "Let's Upgrade",
      "Newton School",
      "Coding Ninjas",
      "B.Tech, RGPV",
    ] as const,
  },

  // ========== FEATURED PROJECTS ==========
  featuredProjects: {
    heading: "Selected Work",
    subheading: "In‑depth case studies with architecture, decisions, and results",
    impactLabel: "Impact:",
    exploreButton: "Explore projects",
    viewAllButton: "View all projects",

    projects: [
      {
        title: "HighLevel: Courses Platform",
        description: "Creator-led course + community builder with multimedia, quizzes, drip, payments, and CRM analytics. Real-time WYSIWYG Course Builder with device previews.",
        tags: ["React", "Next.js", "TypeScript", "Module Federation", "Capacitor"] as string[],
        impact: "Faster authoring and improved engagement",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
        href: "/projects",
      },
      {
        title: "Credentials/Badge Platform",
        description: "Certifier/Canvas-style credentialing tool with visual editor, CSV bulk issuance, verification system, and analytics dashboard.",
        tags: ["React", "Canvas APIs", "TypeScript", "Module Federation"] as string[],
        impact: "Faster credential turnaround, better tracking",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
        href: "/projects",
      },
      {
        title: "DMRV Web App",
        description: "Digital Measurement, Reporting & Verification for environmental data with secure real-time reporting and high-performance data views.",
        tags: ["Next.js", "TypeScript", "SSR", "Shadcn UI"] as string[],
        impact: "High-performance UI, reliable reporting",
        image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&h=600&fit=crop",
        href: "/projects",
      },
    ] as const,
  },

  // ========== FOOTER ==========
  footer: {
    navigationHeading: "Navigation",
    quickLinksHeading: "Quick Links",
    skills: "Skills",
    services: "Services",
    writing: "Writing & Speaking",
    downloadResume: "Download Resume",
    contactHeading: "Contact",
    builtWith: "Built with Next.js, TypeScript & Tailwind CSS.",
    ariaLinkedin: "LinkedIn",
    ariaGithub: "GitHub",
    ariaYoutube: "YouTube",
    ariaEmail: "Email",
  },

  // ========== ABOUT PAGE ==========
  about: {
    heading: "About Me",
    subheading: "Senior full‑stack developer who ships complex products end‑to‑end",
    technicalLeaderTitle: "Technical Leader",
    quickOverviewTitle: "Quick Overview",
    quickOverviewDescription: "The elevator pitch version",
    workingWithMeHeading: "Working with me",

    technicalLeaderContent: {
      paragraph1: "Data analyst with 5+ years of experience turning raw data into clear, actionable insights. I build automated reporting pipelines, design interactive Power BI dashboards, write production-grade SQL, and use advanced Excel + Python to answer business questions and help stakeholders make informed decisions.",
      paragraph2: "My core strengths span business intelligence & visualization (Power BI, dashboard design, DAX, Power Query, KPI definition, storytelling), data engineering for analytics (SQL, ETL preparation, data cleaning, window functions), and analysis & reporting (Advanced Excel, ad-hoc analysis, trend & cohort analysis).",
      paragraph3: "I've delivered dashboards and analytics for platforms like Hyreme (job search analytics), automotive inventory & sales BI, global health expenditure dashboards, and HR analytics for workforce planning. Each project combined SQL pipelines, Power BI design, and stakeholder collaboration to drive measurable business outcomes.",
      paragraph4: "I work with a product mindset: start with the business question, ship reliable pipelines that teams trust, design dashboards for clarity and action, and measure impact through adoption and outcomes. My toolkit includes Power BI, DAX, Power Query, MySQL/SQL, Advanced Excel, Python (pandas), data modeling, ETL workflows, and Git.",
      paragraph5: "If you need clean dashboards, automated reporting, or a data partner who can translate questions into action—let's talk.",
    },

    quickOverviewContent: "Data analyst with 5+ years building automated reporting pipelines and designing Power BI dashboards. I specialize in turning raw data into actionable insights—combining SQL, DAX, Power Query, Advanced Excel, and Python. Experienced with platform analytics (Hyreme), sales & inventory BI, and HR analytics. I partner with product, sales, and leadership to define data-driven decisions, ship reliable pipelines, and design dashboards that drive impact. English/Hindi; based in Indore, India (remote-friendly).",

    principles: {
      principle1: {
        title: "Start with the question. Partner with product, sales, Ops and leadership to define the decisions the data should enable.",
        description: "I work backward from business goals to define what data insights are needed and how to measure success.",
      },
      principle2: {
        title: "Ship reliable pipelines. Clean, documented ETL; reproducible SQL; refreshable reports—so insights are trusted.",
        description: "Reproducible, well-documented workflows ensure stakeholders trust the data and can refresh insights confidently.",
      },
      principle3: {
        title: "Design for clarity. Dashboards that highlight action: clear KPIs, drilldowns, and guided narratives.",
        description: "Every dashboard is built to guide decisions—with intuitive visuals, clear hierarchies, and actionable insights.",
      },
      principle4: {
        title: "Measure impact. Turn dashboards into experiments—track adoption and business outcomes, then iterate.",
        description: "I validate that dashboards drive decisions and iterate based on usage patterns and business outcomes.",
      },
    },

    // Personal Details
    personal: {
      name: "Pradhyum Upadhyay",
      title: "Data Analyst | Business Intelligence & Dashboarding Specialist",
      location: "Indore, India",
      timezone: "IST (UTC+5:30)",
      email: "pradhyum2098@gmail.com",
      linkedin: "https://linkedin.com/in/pradhyumupadhyay",
      github: "https://github.com/pradhyumupadhyay",
      portraitPlaceholder: "[ADD_PORTRAIT_URL]",
      teachingImagePlaceholder: "[ADD_TEACHING_URL]",

      hobbies: {
        gym: {
          name: "Fitness",
          imagePlaceholder: "[ADD_GYM_URL]",
          alt: "Pradhyum at gym doing strength training",
        },
        ukulele: {
          name: "Playing Ukulele",
          imagePlaceholder: "[ADD_UKULELE_URL]",
          alt: "Pradhyum playing ukulele",
        },
        reading: {
          name: "Data & Tech Reading",
          imagePlaceholder: "[ADD_WORKSPACE_URL]",
          alt: "Pradhyum's workspace with data insights",
        },
      },

      traits: {
        quickLearner: {
          label: "Detail-Oriented",
          description: "Precision in data & dashboards",
        },
        riskTaker: {
          label: "Problem Solver",
          description: "Turns questions into insights",
        },
        systemsThinker: {
          label: "Systems Thinker",
          description: "Holistic data approach",
        },
        collaborative: {
          label: "Collaborative",
          description: "Partner with stakeholders",
        },
      },

      beyondCode: {
        heading: "Beyond the Desk",
        paragraph: "When I'm not building dashboards or analyzing data, you'll find me staying active at the gym or playing the ukulele. I believe steady personal routines help me bring clear, calm thinking to messy data problems. Fitness and music keep me grounded and energized for the analytical work I do.",
      },
    },

    // Bento Card Content
    bentoCards: {
      aboutMe: {
        name: "About Me",
        description: "Turning raw data into clear, actionable business insights.",
        cta: "Read More",
      },
      stats: {
        name: "5+ Years",
        description: "Building dashboards and pipelines across SaaS, platforms, and analytics",
        cta: "Timeline",
      },
      techStack: {
        name: "Analytics Toolkit",
        description: "Interactive visualization of my core BI and analytics tools",
        cta: "All Skills",
      },
      highlights: {
        name: "Recent Highlights",
        description: "Key projects and dashboards from the last few years",
        cta: "Projects",
      },
      skills: {
        name: "Skills Showcase",
        description: "Power BI · DAX · SQL · Excel · Python · Power Query · ETL",
        cta: "Deep Dive",
      },
      principles: {
        name: "Working Principles",
        description: "Data-driven decisions · Reliable pipelines · Clear dashboards · Measure impact",
        cta: "Learn More",
      },
      location: {
        description: "Remote-friendly · English/Hindi fluent",
        cta: "Contact",
      },
      beyondCode: {
        name: "Beyond the Desk",
        description: "Fitness enthusiast, ukulele player, and data-driven thinker",
        cta: "More",
      },
      teaching: {
        name: "Share Knowledge",
        description: "Demos, docs, and training to help teams become more data-driven",
        cta: "Learn",
      },
      connect: {
        name: "Let's Work Together",
        description: "Open to data analytics and BI roles with impact-focused teams",
        cta: "Get in Touch",
      },
    },

    // Tech Stack - Most Important Skills
    techStack: [
      { name: "Power BI", color: "#F2CC8F" },
      { name: "DAX", color: "#81B29A" },
      { name: "SQL", color: "#336791" },
      { name: "Power Query", color: "#00A4EF" },
      { name: "Excel", color: "#217346" },
      { name: "Python", color: "#3776AB" },
      { name: "Pandas", color: "#150458" },
      { name: "Data Modeling", color: "#4A90E2" },
      { name: "ETL Workflows", color: "#FF6B6B" },
      { name: "KPI Design", color: "#FFA500" },
      { name: "Dashboard Design", color: "#9D4EDD" },
      { name: "MySQL", color: "#00758F" },
      { name: "Google Sheets", color: "#34A853" },
      { name: "Git", color: "#F1502F" },
      { name: "Advanced Excel", color: "#70AD47" },
      { name: "Data Visualization", color: "#FF7F50" },
    ],

    // Recent Highlights
    recentHighlights: [
      {
        icon: "�",
        title: "Hyreme Platform Analytics",
        date: "2024",
        description: "Dynamic Power BI dashboards for match success and engagement funnels",
      },
      {
        icon: "🚗",
        title: "Automobile Inventory & Sales BI",
        date: "2023",
        description: "Forecasting widgets and SQL-based recommendation engine",
      },
      {
        icon: "🌍",
        title: "Global Health Expenditure Dashboard",
        date: "2023",
        description: "Multi-year dataset cleaning with policy-level KPI insights",
      },
      {
        icon: "�",
        title: "HR Analytics & Workforce Planning",
        date: "2022",
        description: "Attrition analysis and retention strategy dashboards",
      },
    ],

    // Section Headings
    sections: {
      professionalJourney: "Professional Journey",
      socialLinks: {
        linkedin: "LinkedIn",
        github: "GitHub",
      },
    },
  },

  // ========== PROJECTS PAGE ==========
  projects: {
    heading: "Projects & Case Studies",
    subheading: "In-depth case studies with architecture, decisions, and results",
    featuredHeading: "Featured Case Studies",
    moreProjectsHeading: "More Projects",
    featuredBadge: "Featured",
    contextLabel: "Context & Goals",
    roleLabel: "Role & Decisions",
    architectureLabel: "Architecture & Tech",
    resultsLabel: "Results",
    nextStepsLabel: "What's Next",
    liveDemoButton: "Live Demo",
    sourceCodeButton: "Source Code",
    liveButton: "Live",
    codeButton: "Code",
    demoButton: "Demo",
  },

  // ========== EXPERIENCE PAGE ==========
  experience: {
    whatIChangedLabel: "What I changed:",
    achievementsHeading: "Key Achievements",
    challengeLabel: "Challenge",
    actionLabel: "Action",
    resultLabel: "Result",
    projectPreview1: "Project Preview 1",
    projectPreview2: "Project Preview 2",
    dashboardView: "Dashboard View",
    mobileAppView: "Mobile App View",

    experiences: [
      {
        title: "SDE III — Senior Frontend/Full-stack Developer",
        company: "HighLevel",
        location: "Remote",
        period: "07/2024 – Present",
        description: "Modernized the product experience and modularized delivery across Courses and Credentials; enabled mobile parity.",
        logo: "/company_logo/goHighLevel.webp",
        achievements: [
          {
            challenge: "Build two new product lines with high customization and scale.",
            action: "Led end-to-end architecture; designed real-time WYSIWYG Course Builder and device previews.",
            result: "Faster iteration and better authoring UX. [ADD METRIC]",
          },
          {
            challenge: "Fragile monolith delivery.",
            action: "Implemented Module Federation for micro-frontends.",
            result: "Independently deployable modules and reduced coupling. [ADD METRIC]",
          },
          {
            challenge: "Branding and accessibility.",
            action: "Added theme customization, multi-language subtitles, keyboard navigation, screen-reader support.",
            result: "Improved accessibility and adoption. [ADD METRIC]",
          },
          {
            challenge: "Web-only surface.",
            action: "Converted platform to Capacitor mobile app.",
            result: "Cross-platform parity and increased engagement. [ADD METRIC]",
          },
          {
            challenge: "Delivery speed.",
            action: "Mentored peers, improved modularity/caching, and drove code reviews.",
            result: "Cleaner releases and performance gains. [ADD METRIC]",
          },
        ],
        tags: ["React", "TypeScript", "Module Federation", "Capacitor", "Firebase", "Canvas APIs", "Next.js"],
      },
      {
        title: "SDE 3 — Full-stack Developer",
        company: "ReNew Power (Climate Connect Digital)",
        location: "Remote",
        period: "03/2023 – 07/2024",
        description: "Brought SSR, TypeScript, and real-time data to a climate-tech platform.",
        logo: "/company_logo/ReNew.svg",
        achievements: [
          {
            challenge: "Slow initial loads.",
            action: "Implemented Next.js SSR.",
            result: "Faster first paint and better SEO. [ADD METRIC]",
          },
          {
            challenge: "Unreliable data sync.",
            action: "Integrated Firebase realtime APIs; structured state management.",
            result: "Consistent live data at scale. [ADD METRIC]",
          },
          {
            challenge: "Quality and safety.",
            action: "TypeScript, auth flows, and code reviews.",
            result: "Fewer regressions and safer releases. [ADD METRIC]",
          },
        ],
        tags: ["React", "Next.js", "TypeScript", "Firebase", "GCP", "Redux", "SSR", "Node.js"],
      },
      {
        title: "Senior Full-Stack Developer",
        company: "Haspr",
        location: "Indore, India",
        period: "09/2018 – 01/2023",
        description: "Delivered end-to-end web apps and adopted modern frameworks (Next.js, PWAs).",
        logo: "/company_logo/haspr logo.svg",
        achievements: [
          {
            challenge: "Fragmented UX.",
            action: "Owned front- and back-end integration with a developer-centric approach.",
            result: "Seamless experiences. [ADD METRIC]",
          },
          {
            challenge: "Evolving tools.",
            action: "Continuous learning and tech adoption.",
            result: "Upgraded capabilities and delivery speed. [ADD METRIC]",
          },
        ],
        tags: ["React", "Next.js", "Node.js", "Express", "PWA", "TypeScript", "MongoDB"],
      },
      {
        title: "Full-Stack Trainer (Part-time)",
        company: "Let's Upgrade / Newton School / Coding Ninjas",
        location: "Remote",
        period: "01/2021 – 01/2022",
        description: "Taught MERN/MEAN, JS best practices, SDLC; delivered live and offline sessions. [ADD LINK]",
        logo: "/company_logo/lets upgrade.png",
        achievements: [
          {
            challenge: "New developers needed practical, industry-ready skills.",
            action: "Designed curriculum and delivered hands-on training on MERN/MEAN stack, JavaScript best practices, and SDLC.",
            result: "Successfully trained developers with live classes and seminars; improved job placement rates.",
          },
        ],
        tags: ["Teaching", "MERN", "MEAN", "JavaScript", "Training", "Mentoring"],
      },
    ] as const,
  },

  // ========== SKILLS PAGE ==========
  skills: {
    heading: "Skills & Expertise",
    subheading: "A collection of analytical skills, data tools, and business-intelligence capabilities built across 5+ years — from data cleaning and ETL workflows to dashboard development and stakeholder-ready insights.",
    frontendTitle: "Data Analysis & BI Development",
    frontendDescription: "Turning raw data into business-ready insights and interactive visual dashboards.",
    backendTitle: "SQL & Database Management",
    backendDescription: "Extracting, transforming, and preparing data for analysis.",
    cloudTitle: "Excel & Reporting Automation",
    cloudDescription: "Building fast, dependable reporting systems using advanced Excel.",
    otherTitle: "Python for Data Workflows",
    otherDescription: "Solving analytical problems and automating processes.",
    competenciesHeading: "Senior Competencies",
    competenciesSubheading: "Beyond tools — strategic thinking, clear communication, and analytical design.",

    competencies: {
      architecture: {
        title: "End-to-End BI Workflow",
        description: "Requirement gathering → Data modeling → ETL → Dashboard design → Insights (Delivered repeatedly across multiple projects at HASPR LLP)",
      },
      performance: {
        title: "Data Quality & Validation",
        description: "Building reliable reports through SQL-based cleaning, mapping, and verification.",
      },
      ssr: {
        title: "KPI Framework Design",
        description: "Creating metrics that align with business goals, conversions, retention, growth, etc.",
      },
      security: {
        title: "Insight Storytelling",
        description: "Visual narratives that help stakeholders understand performance fast.",
      },
      accessibility: {
        title: "Automation & Efficiency",
        description: "Excel automation, Power Query refresh models, reusable SQL pipelines.",
      },
      crossPlatform: {
        title: "Stakeholder-Centric Approach",
        description: "Clear explanations, logical insights, fast iteration cycles, and documentation.",
      },
    },
  },

  // ========== SERVICES PAGE ==========
  services: {
    heading: "Consulting Services",
    subheading: "Strategic reviews, modernization sprints, and custom builds",
    deliverablesLabel: "Deliverables",
    bookButton: "Book a consult",
    ctaHeading: "Have a different project in mind?",
    ctaSubheading: "Let's discuss your specific needs and create a custom engagement plan.",
    scheduleButton: "Schedule a call",

    offerings: [
      {
        title: "Architecture Review",
        duration: "1–2 weeks",
        description: "Comprehensive review of your frontend architecture with actionable recommendations.",
        pricing: "From [ADD RATE]",
        tags: ["Architecture", "Consultation", "Strategic"] as string[],
        deliverables: [
          "Micro‑frontend assessment and Module Federation recommendations",
          "SSR/caching strategy evaluation",
          "Auth and security review",
          "Performance budget recommendations",
          "Architecture Decision Records (ADRs)",
          "System diagrams and technical roadmap",
        ],
      },
      {
        title: "Frontend Modernization Sprint",
        duration: "2–4 weeks",
        description: "Upgrade your frontend stack with modern best practices and technologies.",
        pricing: "From [ADD RATE]",
        tags: ["Development", "Migration", "Performance"] as string[],
        deliverables: [
          "React/Next.js migration planning and execution",
          "TypeScript + Zod contract implementation",
          "Accessibility (a11y) upgrades and WCAG compliance",
          "Performance optimizations (Core Web Vitals)",
          "Component library modernization",
          "Testing strategy and implementation",
        ],
      },
      {
        title: "Web→Mobile Parity",
        duration: "3–6 weeks",
        description: "Convert your web application to mobile using Capacitor without duplicating stacks.",
        pricing: "From [ADD RATE]",
        tags: ["Mobile", "Capacitor", "Cross-platform"] as string[],
        deliverables: [
          "Capacitor setup and configuration",
          "Feature parity assessment and implementation",
          "Offline-first strategy and caching",
          "Native bridge integrations",
          "App store release pipeline",
          "Performance optimization for mobile",
        ],
      },
      {
        title: "Credentialing Platform Build",
        duration: "Custom (6+ weeks)",
        description: "Build a complete credentials/badge issuance platform from scratch.",
        pricing: "From [ADD RATE]",
        tags: ["Custom Build", "Full-stack", "SaaS"] as string[],
        deliverables: [
          "Canvas‑based credential editor",
          "CSV bulk issuance system",
          "Verification portal and QR codes",
          "Analytics dashboard",
          "Recipient management portal",
          "API integrations and webhooks",
        ],
      },
    ] as const,
  },

  // ========== CONTACT PAGE ==========
  contact: {
    heading: "Let's Connect",
    subheading: "I'm based in Indore (IST, UTC+5:30). I typically reply within 1 business day.",
    infoTitle: "Contact Information",
    infoDescription: "Multiple ways to reach me",
    emailLabel: "Email",
    phoneLabel: "Phone/WhatsApp",
    locationLabel: "Location",
    timezoneLabel: "Timezone",
    quickActionsTitle: "Quick Actions",
    bookTimeButton: "Book time",
    requestResumeButton: "Request résumé",
    formTitle: "Send a Message",
    formDescription: "Fill out the form below and I'll get back to you shortly",
    formNameLabel: "Name *",
    formNamePlaceholder: "Your name",
    formEmailLabel: "Email *",
    formEmailPlaceholder: "your.email@example.com",
    formSubjectLabel: "Subject *",
    formSubjectPlaceholder: "What's this about?",
    formMessageLabel: "Message *",
    formMessagePlaceholder: "Tell me about your project or question...",
    formSendingText: "Sending...",
    formSubmitButton: "Send Message",
    successMessage: "Thank you! I'll get back to you soon.",

    // Validation messages
    validationNameRequired: "Name is required",
    validationEmailRequired: "Email is required",
    validationEmailInvalid: "Please enter a valid email address",
    validationMessageRequired: "Message is required",
    validationDescriptionRequired: "Brief description is required",
  },

  // ========== WRITING PAGE ==========
  writing: {
    heading: "Writing",
    subheading: "Technical articles, tutorials, and insights on modern web development, architecture, and engineering practices.",
    overline: "Insights & Knowledge",

    // Index page
    allArticlesHeading: "All Articles",
    featuredBadge: "Featured",
    searchPlaceholder: "Search articles...",
    filterByCategory: "Filter by category",
    filterByTag: "Filter by tag",
    filterByYear: "Filter by year",
    sortBy: "Sort by",
    allCategories: "All Categories",
    allTags: "All Tags",
    allYears: "All Years",
    sortNewest: "Newest First",
    sortOldest: "Oldest First",
    sortAZ: "A → Z",
    sortZA: "Z → A",
    noResults: "No articles found",
    resultsCount: "{count} article{plural}",
    resultsWithSearch: "{count} article{plural} matching \"{search}\"",
    previousPage: "Previous",
    nextPage: "Next",
    pageOf: "Page {current} of {total}",

    // Article page
    backToWriting: "Back to Writing",
    onThisPage: "On this page",
    shareOnTwitter: "Share on Twitter",
    relatedArticles: "Related Articles",
    seriesLabel: "Part {part} of {total} in \"{name}\"",
    previousInSeries: "← Previous",
    nextInSeries: "Next →",

    // Newsletter CTA
    newsletterHeading: "Stay Updated",
    newsletterDescription: "New articles on web development, architecture, and engineering practices. Subscribe to get notified.",
    newsletterButton: "Get in Touch",

    // Legacy content (for backwards compatibility)
    talksHeading: "Training & Talks",
    articlesHeading: "Technical Articles",
    openSourceHeading: "Open Source",
    watchButton: "Watch on YouTube",
    readArticleButton: "Read article",
    viewGithubButton: "View on GitHub",

    talks: [
      {
        title: "Full-Stack Development with MERN",
        platform: "Let's Upgrade",
        date: "2021",
        description: "Comprehensive training series on MERN stack development, covering MongoDB, Express, React, and Node.js",
        type: "Training Series",
        link: "[ADD YOUTUBE LINK]",
      },
      {
        title: "Advanced JavaScript & Modern Frameworks",
        platform: "Newton School",
        date: "2021",
        description: "Live seminars on advanced JavaScript concepts, modern frameworks, and best practices",
        type: "Seminar",
        link: "[ADD YOUTUBE LINK]",
      },
      {
        title: "Building Production-Ready Applications",
        platform: "Coding Ninjas",
        date: "2021-2022",
        description: "Workshop series on SDLC, testing, deployment, and maintaining production applications",
        type: "Workshop",
        link: "[ADD YOUTUBE LINK]",
      },
    ] as const,

    articles: [
      {
        title: "Implementing Micro-frontends with Module Federation",
        description: "A deep dive into architecting scalable frontend applications using Module Federation in Webpack 5",
        topics: ["Micro-frontends", "Module Federation", "Architecture"] as string[],
        link: "[ADD LINK]",
      },
      {
        title: "Building Real-time WYSIWYG Editors",
        description: "Lessons learned from building production-grade WYSIWYG editors with React and TypeScript",
        topics: ["WYSIWYG", "React", "Real-time"] as string[],
        link: "[ADD LINK]",
      },
      {
        title: "Web to Mobile with Capacitor",
        description: "Complete guide to converting web applications to mobile apps without duplicating your stack",
        topics: ["Capacitor", "Mobile", "Cross-platform"] as string[],
        link: "[ADD LINK]",
      },
      {
        title: "Accessibility in Modern Web Applications",
        description: "Practical guide to implementing WCAG compliance, keyboard navigation, and screen reader support",
        topics: ["Accessibility", "a11y", "Best Practices"] as string[],
        link: "[ADD LINK]",
      },
    ] as const,

    openSource: [
      {
        title: "Micro-frontend Boilerplate",
        description: "Starter template for Module Federation-based micro-frontends with TypeScript",
        link: "[ADD GITHUB LINK]",
      },
      {
        title: "Canvas Editor Utils",
        description: "Utility library for building canvas-based editors and credential builders",
        link: "[ADD GITHUB LINK]",
      },
      {
        title: "Firebase SSR Patterns",
        description: "Collection of patterns for implementing server-side rendering with Firebase",
        link: "[ADD GITHUB LINK]",
      },
    ] as const,
  },

  // ========== SEO METADATA ==========
  seo: {
    keywords: [
      "senior full-stack developer",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Firebase",
      "GCP",
      "micro-frontends",
      "Capacitor",
      "SDE III",
    ] as string[],

    about: {
      title: "About Sanjay Kumar — Senior Full-stack Engineer",
      description: "Seven-plus years across SaaS, EdTech, EnergyTech; leadership at HighLevel; trainer and mentor.",
      keywords: ["software engineer bio", "senior frontend", "MERN", "MEAN", "mentoring", "accessibility"] as string[],
    },

    projects: {
      title: "Projects & Case Studies — Courses, Credentials, DMRV",
      description: "In-depth architecture notes and results for education, credentialing, and climate-tech builds.",
      keywords: ["case studies", "WYSIWYG editor", "certificate builder", "DMRV", "real-time", "analytics"] as string[],
    },

    experience: {
      title: "Experience — HighLevel, ReNew Power, Haspr",
      description: "Challenge → Action → Result outcomes from SDE III and prior roles, including SSR, real-time, and micro-frontends.",
      keywords: ["SDE III", "SSR", "Firebase", "GCP", "Module Federation", "performance optimization"] as string[],
    },

    skills: {
      title: "Skills",
      description: "Frontend, backend, cloud, and data skills with senior competencies.",
      keywords: ["TypeScript", "Module Federation", "SSR", "performance", "accessibility"] as string[],
    },

    services: {
      title: "Services",
      description: "Consulting services including architecture review, performance optimization, and Capacitor migration.",
      keywords: ["architecture review", "performance optimization", "Capacitor", "micro‑frontends"] as string[],
    },

    writing: {
      title: "Writing & Speaking",
      description: "Training, talks, and articles on micro‑frontends, editors, and accessibility.",
      keywords: ["engineering talks", "training", "micro‑frontends article"] as string[],
    },
  },

  // ========== SCHEMA.ORG STRUCTURED DATA ==========
  schema: {
    faq: {
      roles: {
        question: "What roles are you targeting?",
        answer: "Senior Full-Stack Engineer/SDE III, staff-leaning frontend, or product-focused platform roles.",
      },
      remote: {
        question: "Do you work remote?",
        answer: "Yes. I work remote from Indore, India (IST, UTC+5:30).",
      },
      stacks: {
        question: "What stacks do you use?",
        answer: "React/Next/TypeScript on the frontend; Node/Nest/Express APIs; Firebase/GCP and related services.",
      },
    },

    organizations: {
      highlevel: "HighLevel",
      renewPower: "ReNew Power (Climate Connect Digital)",
      haspr: "Haspr",
    },

    address: {
      locality: "Indore",
      country: "IN",
    },
  },
} as const

// ============================================================================
// TYPE EXPORTS
// ============================================================================
export type Copy = typeof copy

// ============================================================================
// HELPER FUNCTIONS (OPTIONAL - FOR FUTURE i18n)
// ============================================================================

/**
 * Get a copy string by dot-notation key path
 * Example: getCopy('hero.title') => "Build it. Ship it."
 *
 * This helper is useful if you need to migrate to i18n later.
 * For now, direct property access is preferred: copy.hero.title
 */
export function getCopy(keyPath: string): string {
  const keys = keyPath.split('.')
  let value: unknown = copy

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key]
    } else {
      console.warn(`[Copy] Key path not found: ${keyPath}`)
      return keyPath // Fallback to key path
    }
  }

  return typeof value === 'string' ? value : keyPath
}
