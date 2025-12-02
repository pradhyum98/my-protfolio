export const SITE_CONFIG = {
  name: "Pradhyum Upadhyay",
  title: "Senior Data Analyst",
  description:
    "Senior Data Analyst specializing in Power BI, SQL, Excel, and Python to build dashboards, automate reporting, and turn raw data into clear business insights.",
  url: "https://pradhyum.dev",
  email: "pradhyum2098@gmail.com",
  phone: "7987872930",
  location: "Indore, India",
  timezone: "IST (UTC+5:30)",
  education: "B.Tech, RGPV",
  social: {
    linkedin: "https://www.linkedin.com/in/pradhyum-upadhyay-b26263240/",
    github: "https://github.com/pradhyum98",
    youtube: "[ADD YOUTUBE LINK]",
  },
} as const

// ============================================================================
// NAVIGATION STRUCTURE WITH GROUPING
// ============================================================================

export type NavItem = {
  name: string
  href: string
}

export type NavGroup = {
  name: string
  items: NavItem[]
}

export type NavItemOrGroup = NavItem | NavGroup

// Type guard to check if item is a group
export const isNavGroup = (item: NavItemOrGroup): item is NavGroup => {
  return 'items' in item
}

// Main navigation items (primary routes)
export const MAIN_NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
]

// Resources group (secondary routes)
export const RESOURCES_NAV_GROUP: NavGroup = {
  name: "Resources",
  items: [
    { name: "Documentation", href: "/docs" },
    { name: "Projects Explorer", href: "/projects-explorer" },
    { name: "Services", href: "/services" },
    { name: "Writing & Speaking", href: "/writing" },
  ],
}

// Complete navigation structure
export const NAVIGATION_STRUCTURE: NavItemOrGroup[] = [
  ...MAIN_NAV_ITEMS,
  // RESOURCES_NAV_GROUP, // Hidden - pages still accessible via direct URL
]

// Flat list for backward compatibility
export const NAVIGATION_ITEMS = [
  ...MAIN_NAV_ITEMS,
  // ...RESOURCES_NAV_GROUP.items, // Hidden - pages still accessible via direct URL
] as const

export const SKILLS = {
  frontend: [
    "Power BI", "Dashboard Development", "KPI & Metric Design", "Data Modeling",
    "DAX", "Data Visualization Best Practices", "Drill-downs & Dynamic Reporting",
    "Power Query (M)"
  ],
  backend: [
    "SQL (MySQL / PostgreSQL)", "Joins, Subqueries, CTEs", "Window Functions",
    "Aggregations & Grouping", "ETL Preparation", "Data Cleaning",
    "Query Optimization", "Database Design for Analytics"
  ],
  cloud: [
    "Advanced Excel", "Pivot Tables & Charts", "VLOOKUP / INDEX-MATCH",
    "Conditional Formatting", "Excel Automation", "Reporting Templates",
    "Data Cleaning & Transformation", "Google Analytics", "BigQuery (Basic)",
    "Git & Version Control", "Jupyter / Google Colab", "Power BI Service",
    "Reporting Distribution"
  ],
  other: [
    "Pandas", "NumPy", "EDA (Exploratory Data Analysis)", "Matplotlib / Seaborn",
    "Automation Scripts", "Data Validation", "Feature Engineering (Basic ML tasks)",
    "User Behavior Analytics", "Customer Insights", "HR Analytics",
    "Sales & Inventory Analytics", "Job Search Platform Analytics",
    "Trend Analysis & Forecasting", "Workflow Automation", "Performance Dashboards",
    "Stakeholder Collaboration"
  ]
} as const

export const COMPANIES = [
  { name: "HighLevel", logo: "/logos/highlevel.svg" },
  { name: "ReNew Power", logo: "/logos/renew.svg" },
  { name: "Climate Connect Digital", logo: "/logos/climate-connect.svg" },
  { name: "Haspr", logo: "/logos/haspr.svg" },
  { name: "Let's Upgrade", logo: "/logos/letsupgrade.svg" },
  { name: "Newton School", logo: "/logos/newton.svg" },
  { name: "Coding Ninjas", logo: "/logos/codingninjas.svg" },
] as const
