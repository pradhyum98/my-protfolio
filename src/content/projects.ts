// ============================================================================
// SINGLE SOURCE OF TRUTH FOR ALL PROJECT DATA - DATA ANALYST PORTFOLIO
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
// PROJECTS DATA - DATA ANALYST PORTFOLIO
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
    stack: ["Power BI", "SQL", "Excel", "DAX", "Power Query"],
    tags: ["BI Dashboard", "Job Search", "Analytics", "User Engagement", "Conversion Funnels", "Match Accuracy"],

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

    seoTitle: "HyreMe Job Platform Analytics – Match & Engagement BI",
    seoDescription:
      "Data analyst role building Power BI dashboards for job-matching platform: match accuracy, user engagement, conversion funnels, and performance KPIs.",
  },

  // ==========================================================================
  // FEATURED PROJECT 2: AUTOMOBILE MANAGEMENT SYSTEM
  // ==========================================================================
  {
    slug: "automobile-management-system",
    title: "Automobile Management System – Inventory & Sales Analytics",
    summary: "Developed a complete analytics layer for an automobile dealership ecosystem with inventory movement dashboards and demand forecasting.",
    role: "Data Analyst",
    dates: "2023",
    company: "HASPR LLP",
    domain: "Data Analytics",
    stack: ["Power BI", "SQL", "Excel", "Python", "DAX"],
    tags: ["BI Dashboard", "Inventory Analytics", "Sales Forecasting", "Business Intelligence", "Data Analysis"],

    challenge:
      "An automobile dealership needed comprehensive analytics to track inventory movement, understand accessory purchase patterns, forecast demand, and optimize cross-selling opportunities.",

    solution:
      "Built an integrated analytics solution combining Power BI dashboards for visualization, SQL for data transformation, and Python for advanced analysis. Created inventory movement dashboards, accessory recommendation engine, and demand forecasting models.",

    context:
      "Critical project for dealership operational excellence. Required real-time inventory tracking, sales cycle analysis, and predictive insights to improve inventory management and accessory revenue.",

    architecture:
      "SQL-based data warehouse with inventory transactions and sales data. Power BI dashboards with DAX for KPI calculations and trend analysis. Python scripts for demand forecasting and recommendation algorithms. Automated Excel reporting for dealership managers.",

    contributions: [
      "Designed inventory movement dashboards tracking model performance, stock levels, and aging inventory",
      "Built an SQL-driven recommendation system for cross-selling accessories based on purchase patterns",
      "Conducted trend and anomaly analysis using Excel & SQL to identify sales opportunities",
      "Created KPIs for model performance, aging inventory, and sales cycles",
      "Developed demand forecasting visuals to support purchasing decisions",
      "Automated weekly reporting workflows for dealership stakeholders",
    ],

    results: [
      "Dashboards improved inventory visibility and reduced aging inventory by tracking cycles",
      "Recommendation system identified high-value cross-sell opportunities",
      "Forecasting models improved purchasing accuracy and reduced stockouts",
      "Automated reports saved 5+ hours per week in manual reporting",
      "KPI tracking enabled data-driven dealership management",
    ],

    nextSteps:
      "Implement machine learning for predictive maintenance scheduling, add customer lifetime value analysis, and create trade-in valuation models.",

    links: [
      { label: "HASPR", href: "https://haspr.io/", kind: "site" },
    ],
    detailHref: "/projects/automobile-management-system",

    images: [
      {
        src: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=600&fit=crop",
        alt: "Automobile inventory dashboard showing sales trends, model performance, and stock levels",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=630&fit=crop",

    featured: true,
    order: 2,

    seoTitle: "Automobile Inventory & Sales Analytics Dashboard",
    seoDescription:
      "Power BI dashboards for automotive dealership: inventory tracking, sales forecasting, accessory cross-sell recommendation system, and performance KPIs.",
  },

  // ==========================================================================
  // FEATURED PROJECT 3: ACCENTURE NORTH AMERICA
  // ==========================================================================
  {
    slug: "accenture-business-insights",
    title: "Accenture North America – Business Insights Dashboarding",
    summary: "Created executive dashboards for Accenture's business analytics structure, translating business requirements into BI-ready datasets and performance metrics.",
    role: "Data Analyst (Project Completed for Accenture)",
    dates: "2023",
    company: "Accenture",
    domain: "Data Analytics",
    stack: ["Power BI", "DAX", "Documentation", "KPI Design"],
    tags: ["Executive Dashboard", "Business Insights", "KPI Design", "BI Project"],

    challenge:
      "Accenture required executive-level dashboards to consolidate business metrics, performance indicators, and strategic insights for leadership decision-making.",

    solution:
      "Translated business requirements into BI-ready datasets and KPI documentation. Built interactive Power BI dashboards highlighting performance metrics and decision insights. Designed visuals aligned with executive reporting standards.",

    context:
      "High-impact project for Accenture's business intelligence infrastructure. Credential ID: S3cEoKwMZtsMYosZ2",

    architecture:
      "Clean data modeling following BI best practices. DAX-based KPI calculations for executive metrics. Dashboard design optimized for executive-level presentations and board-room readiness.",

    contributions: [
      "Translated business requirements into BI-ready datasets and KPI documents",
      "Prepared acceptance criteria, validation checks, and project documentation",
      "Built interactive dashboards highlighting performance metrics and decision insights",
      "Designed visuals to support executive-level presentations",
      "Ensured dashboard alignment with Accenture's reporting standards",
    ],

    results: [
      "Delivered executive dashboards on schedule and within scope",
      "Dashboards provided clear visibility into key business metrics",
      "Documentation enabled stakeholder buy-in and adoption",
      "Metrics tracking supported strategic decision-making",
    ],

    links: [
      { label: "Accenture", href: "https://www.accenture.com/", kind: "site" },
    ],
    detailHref: "/projects/accenture-business-insights",

    images: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        alt: "Executive dashboard with business performance metrics and strategic KPIs",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop",

    featured: true,
    order: 3,

    seoTitle: "Accenture Executive BI Dashboard – Business Metrics",
    seoDescription:
      "Power BI dashboards for Accenture: executive-level business metrics, KPI design, performance tracking, and strategic decision support.",
  },

  // ==========================================================================
  // FEATURED PROJECT 4: PWC SWITZERLAND
  // ==========================================================================
  {
    slug: "pwc-gender-equality-bi",
    title: "PwC Switzerland – Gender Equality & KPIs BI Project",
    summary: "Delivered a full-scale Power BI solution featuring multi-page dashboards with DAX, KPI cards, and drill-downs for organizational insights.",
    role: "Power BI Analyst (Project Completed for PwC)",
    dates: "2023",
    company: "PwC",
    domain: "Data Analytics",
    stack: ["Power BI", "DAX", "Data Modeling"],
    tags: ["Power BI", "DAX", "Data Modeling", "KPI Design", "Executive Reporting"],

    challenge:
      "PwC Switzerland needed comprehensive dashboards to analyze gender balance, hiring patterns, and departmental distribution across the organization.",

    solution:
      "Built multi-page Power BI dashboards using DAX calculations and interactive slicers. Modeled clean, efficient datasets following BI best practices. Designed insights revealing gender balance trends and organizational patterns.",

    context:
      "Strategic diversity and inclusion initiative for PwC. Credential ID: kqHECTk3ePZRpFnuM",

    architecture:
      "Optimized data model with dimension and fact tables. DAX-based calculations for gender metrics and organizational KPIs. Multi-page dashboard structure for different stakeholder views.",

    contributions: [
      "Built multi-page dashboards using DAX, KPI cards, slicers, and drill-downs",
      "Modeled a clean, efficient dataset following BI best practices",
      "Designed insights revealing gender balance, hiring patterns, and departmental distribution",
      "Created dashboard flows aligned with PwC's reporting style and storytelling standards",
      "Implemented interactive filtering for stakeholder exploration",
    ],

    results: [
      "Delivered comprehensive gender equality dashboards for executive review",
      "Dashboards revealed actionable insights on hiring and retention patterns",
      "Data-driven approach supported diversity and inclusion initiatives",
      "Multi-page design enabled stakeholder-specific insights",
    ],

    links: [
      { label: "PwC", href: "https://www.pwc.com/", kind: "site" },
    ],
    detailHref: "/projects/pwc-gender-equality-bi",

    images: [
      {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        alt: "PwC gender equality dashboard with organizational metrics and diversity insights",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop",

    featured: true,
    order: 4,

    seoTitle: "PwC Gender Equality BI Dashboard – Organizational Insights",
    seoDescription:
      "Power BI dashboards for PwC Switzerland: gender balance analysis, hiring patterns, departmental insights, and diversity metrics.",
  },

  // ==========================================================================
  // FEATURED PROJECT 5: COGNIZANT AI & ANALYTICS
  // ==========================================================================
  {
    slug: "cognizant-ai-analytics",
    title: "Cognizant – AI & Advanced Analytics Project",
    summary: "Executed a real machine-learning project with Python EDA, model training, and documentation for Cognizant's Data Science team.",
    role: "Data Analyst / Python Developer (Project Completed for Cognizant)",
    dates: "2023",
    company: "Cognizant",
    domain: "Data Analytics",
    stack: ["Python", "EDA", "ML Metrics", "Google Colab"],
    tags: ["Python", "Machine Learning", "EDA", "Data Science", "Project Management"],

    challenge:
      "Cognizant needed a complete analytics and machine-learning project executed end-to-end, including EDA, model training, and documentation for engineering handoff.",

    solution:
      "Performed rich exploratory data analysis using Python and Google Colab. Built a machine-learning training module with accuracy, F1, and precision metrics. Documented the full ML pipeline for Cognizant's engineering team.",

    context:
      "Production machine-learning project for Cognizant's Data Science team. Credential ID: fbHmHvk2qaxJ85AL9",

    architecture:
      "Python-based EDA pipeline in Google Colab. Scikit-learn models with cross-validation and hyperparameter tuning. Comprehensive documentation for model reproducibility and engineering handoff.",

    contributions: [
      "Performed rich EDA using Python & Google Colab for comprehensive data exploration",
      "Built a machine-learning training module with accuracy, F1, and precision metrics output",
      "Cleaned, analyzed, and prepared datasets for model consumption",
      "Documented the full ML pipeline for engineering handoff",
      "Implemented model evaluation and validation protocols",
    ],

    results: [
      "Delivered end-to-end ML project on schedule and within scope",
      "EDA revealed key data patterns and feature insights",
      "Model achieved target performance metrics",
      "Complete documentation enabled Cognizant engineering team handoff",
      "Pipeline design supports production deployment",
    ],

    links: [
      { label: "Cognizant", href: "https://www.cognizant.com/", kind: "site" },
    ],
    detailHref: "/projects/cognizant-ai-analytics",

    images: [
      {
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
        alt: "Python machine learning analysis with model metrics and performance evaluation",
      },
    ],
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop",

    featured: true,
    order: 5,

    seoTitle: "Cognizant ML & Analytics Project – Python & AI",
    seoDescription:
      "Machine learning project for Cognizant: Python EDA, model training, accuracy/F1/precision metrics, and complete ML pipeline documentation.",
  },

  // ==========================================================================
  // NON-FEATURED PROJECT 1: TATA GROUP
  // ==========================================================================
  {
    slug: "tata-executive-visualization",
    title: "Tata Group – Executive Visualization & BI Reporting Project",
    summary: "Created decision-making dashboards and executive-level insights for Tata's leadership.",
    role: "Data Visualization Specialist (Project Completed for Tata Group)",
    dates: "2023",
    company: "Tata Group",
    domain: "Data Analytics",
    stack: ["Power BI", "Documentation", "Visualization Design"],
    tags: ["Power BI", "Executive Reporting", "Visualization", "Business Intelligence"],

    challenge:
      "Tata Group required clear, compelling executive visualizations to support strategic decision-making and leadership reporting.",

    solution:
      "Developed clear, executive-friendly Power BI visuals. Prepared client questions and business requirement documents. Built dashboards to support scenario planning and leadership decisions. Focused heavily on clarity, communication, and storytelling.",

    context:
      "Executive visualization initiative for Tata Group leadership. Credential ID: Ap4Ka3QFiidvAiXoo",

    contributions: [
      "Developed clear, executive-friendly Power BI visuals",
      "Prepared client questions and business requirement documents",
      "Built dashboards to support scenario planning and leadership decisions",
      "Focused heavily on clarity, communication, and storytelling",
      "Aligned visuals with Tata Group's corporate reporting standards",
    ],

    results: [
      "Delivered executive dashboards aligned with leadership needs",
      "Visualizations enabled clear communication of business metrics",
      "Documentation supported stakeholder alignment",
      "Dashboards supported strategic scenario planning",
    ],

    links: [
      { label: "Tata Group", href: "https://www.tatagroup.com/", kind: "site" },
    ],

    featured: false,

    seoTitle: "Tata Group Executive BI Dashboards – Leadership Insights",
    seoDescription:
      "Executive Power BI dashboards for Tata Group: strategic metrics, scenario planning, and leadership decision support.",
  },

  // ==========================================================================
  // NON-FEATURED PROJECT 2: GLOBAL HEALTH EXPENDITURE DASHBOARD
  // ==========================================================================
  {
    slug: "global-health-expenditure",
    title: "Global Health Expenditure Dashboard",
    summary: "Built a comprehensive dashboard to visualize global spending patterns across countries and time periods.",
    role: "BI Developer",
    dates: "2023",
    company: "Personal Project",
    domain: "Data Analytics",
    stack: ["Power BI", "Power Query", "Excel"],
    tags: ["Power BI", "Data Visualization", "Public Data", "Time-Intelligence"],

    challenge:
      "Needed to visualize complex global health expenditure data across multiple countries, years, and spending categories.",

    solution:
      "Cleaned and transformed multi-year datasets using Power Query. Created visuals for expenditure categories, geography, and trend comparisons. Built DAX-based time-intelligence KPIs.",

    contributions: [
      "Cleaned and transformed multi-year datasets using Power Query",
      "Created visuals for expenditure categories, geography, and trend comparisons",
      "Built DAX-based time-intelligence KPIs",
      "Designed interactive filtering for geographic and temporal exploration",
    ],

    results: [
      "Dashboard provided clear visibility into global health spending patterns",
      "Time-intelligence KPIs enabled year-over-year and trend analysis",
      "Interactive visuals supported exploration and insight discovery",
    ],

    links: [],

    featured: false,
  },

  // ==========================================================================
  // NON-FEATURED PROJECT 3: IMDB MOVIES SQL ANALYSIS
  // ==========================================================================
  {
    slug: "imdb-movies-sql-analysis",
    title: "IMDb Movies SQL Analysis",
    summary: "Executed deep SQL-based exploration of movie ratings, genres, and time-period trends.",
    role: "SQL & BI Developer",
    dates: "2023",
    company: "Personal Project",
    domain: "Data Analytics",
    stack: ["SQL", "Excel", "Power BI"],
    tags: ["SQL", "Data Analysis", "Window Functions", "Power BI"],

    challenge:
      "Analyze complex movie dataset to uncover patterns in ratings, genres, and trends across time periods.",

    solution:
      "Used advanced SQL techniques (joins, CTEs, window functions, subqueries) to explore and prepare data. Built Power BI and Excel dashboards for rating patterns and movie trends.",

    contributions: [
      "Used joins, CTEs, window functions, and subqueries for data exploration",
      "Prepared datasets for BI visualization",
      "Built Power BI & Excel dashboards for rating patterns and movie trends",
      "Identified key patterns in movie performance and genre trends",
    ],

    results: [
      "Revealed key trends in movie ratings and genres across time periods",
      "Dashboards provided clear visualization of industry patterns",
      "SQL analysis supported data-driven insights",
    ],

    links: [],

    featured: false,
  },

  // ==========================================================================
  // NON-FEATURED PROJECT 4: HR ANALYTICS DASHBOARD
  // ==========================================================================
  {
    slug: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    summary: "A multi-metric HR insights product covering attrition, demographics, and tenure patterns.",
    role: "Power BI Developer",
    dates: "2023",
    company: "Personal Project",
    domain: "Data Analytics",
    stack: ["Power BI", "DAX", "Data Modeling"],
    tags: ["Power BI", "HR Analytics", "DAX", "People Analytics"],

    challenge:
      "Needed HR insights dashboard to analyze workforce attrition, demographics, and tenure trends for strategic workforce planning.",

    solution:
      "Imported and cleaned HR datasets. Built DAX measures for attrition, retention, and tenure. Designed interactive visuals for HR leadership planning.",

    contributions: [
      "Imported and cleaned HR datasets",
      "Built DAX measures for attrition, retention, and tenure",
      "Designed interactive visuals for HR leadership planning",
      "Created drill-down capabilities for deep analysis",
    ],

    results: [
      "Dashboard provided clear visibility into workforce metrics",
      "Attrition analysis revealed key retention drivers",
      "Demographic insights supported inclusive hiring strategies",
      "Tenure analysis informed career development planning",
    ],

    links: [],

    featured: false,
  },
]

// ============================================================================
// EXPORT HELPER FUNCTIONS
// ============================================================================

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug)
}

export const getAllProjects = (): Project[] => {
  return projects.sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
}

export const getFeaturedProjects = (): Project[] => {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
}

export const getNonFeaturedProjects = (): Project[] => {
  return projects
    .filter((p) => !p.featured)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
}

export const getAllDomains = (): string[] => {
  const allDomains = projects.map((p) => p.domain)
  return Array.from(new Set(allDomains)).sort()
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
