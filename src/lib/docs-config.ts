import {
  BookOpen,
  Home,
  Terminal,
  FolderTree,
  Info,
  Code2,
  Type,
  Sparkles,
  FileText,
  Briefcase,
  FolderKanban,
  LucideIcon,
} from 'lucide-react';

export type DocCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
  order: number;
};

export type DocItem = {
  title: string;
  fileName: string;
  description: string;
  category: string;
  icon: LucideIcon;
  featured?: boolean;
  order: number;
  updated?: string;
};

export const DOC_CATEGORIES: DocCategory[] = [
  { id: 'homepage', label: 'Homepage', icon: Home, order: 1 },
  { id: 'typography', label: 'Typography', icon: Type, order: 2 },
  { id: 'customizer', label: 'Customizer', icon: Sparkles, order: 3 },
  { id: 'terminal', label: 'Terminal', icon: Terminal, order: 4 },
  { id: 'file-tree', label: 'File Tree', icon: FolderTree, order: 5 },
  { id: 'about', label: 'About Page', icon: Info, order: 6 },
  { id: 'experience', label: 'Experience', icon: Briefcase, order: 7 },
  { id: 'projects', label: 'Projects', icon: FolderKanban, order: 8 },
  { id: 'skills', label: 'Skills', icon: Code2, order: 9 },
  { id: 'other', label: 'General', icon: BookOpen, order: 10 },
];

export const DOCS: DocItem[] = [
  // Homepage
  {
    title: 'Homepage Quick Start',
    fileName: 'HOMEPAGE_QUICK_START.md',
    description: 'Overview of portfolio homepage showcasing data analytics expertise and metrics',
    category: 'homepage',
    icon: Home,
    featured: true,
    order: 1,
  },
  {
    title: 'Homepage Implementation Summary',
    fileName: 'HOMEPAGE_IMPLEMENTATION_SUMMARY.md',
    description: 'How the homepage presents your data analytics experience and dashboard portfolio',
    category: 'homepage',
    icon: Home,
    order: 2,
  },
  {
    title: 'Homepage Redesign Complete',
    fileName: 'HOMEPAGE_REDESIGN_COMPLETE.md',
    description: 'Portfolio homepage structure for showcasing BI and analytics capabilities',
    category: 'homepage',
    icon: Home,
    order: 3,
  },
  {
    title: 'New Homepage Documentation',
    fileName: 'NEW_HOMEPAGE_DOCUMENTATION.md',
    description: 'Homepage features for presenting data analyst portfolio and achievements',
    category: 'homepage',
    icon: Home,
    order: 4,
  },

  // Typography
  {
    title: 'Typography Quick Start',
    fileName: 'TYPOGRAPHY_QUICK_START.md',
    description: 'Typography system for presenting data insights and analytics content clearly',
    category: 'typography',
    icon: Type,
    featured: true,
    order: 1,
  },
  {
    title: 'Typography System',
    fileName: 'TYPOGRAPHY_SYSTEM.md',
    description: 'Font system optimized for displaying dashboard metrics and data visualizations',
    category: 'typography',
    icon: Type,
    order: 2,
  },
  {
    title: 'Typography Audit & Fix',
    fileName: 'TYPOGRAPHY_AUDIT_AND_FIX.md',
    description: 'Typography improvements for better readability of analytics content',
    category: 'typography',
    icon: Type,
    order: 3,
  },
  {
    title: 'Typography Migration Guide',
    fileName: 'TYPOGRAPHY_MIGRATION_GUIDE.md',
    description: 'Typography updates for enhanced data presentation and readability',
    category: 'typography',
    icon: Type,
    order: 4,
  },

  // Customizer
  {
    title: 'Customizer Dock Implementation',
    fileName: 'CUSTOMIZER_DOCK_IMPLEMENTATION.md',
    description: 'Portfolio customization features for personalizing your data analyst presentation',
    category: 'customizer',
    icon: Sparkles,
    featured: true,
    order: 1,
  },
  {
    title: 'Customizer Dock Complete',
    fileName: 'CUSTOMIZER_DOCK_COMPLETE.md',
    description: 'Customization options for tailoring portfolio appearance and content display',
    category: 'customizer',
    icon: Sparkles,
    order: 2,
  },

  // Terminal
  {
    title: 'Terminal Quick Start',
    fileName: 'TERMINAL_QUICK_START.md',
    description: 'Interactive terminal feature for exploring portfolio content and navigation',
    category: 'terminal',
    icon: Terminal,
    featured: true,
    order: 1,
  },
  {
    title: 'Terminal Integration',
    fileName: 'TERMINAL_INTEGRATION.md',
    description: 'Terminal interface for quick access to portfolio sections and projects',
    category: 'terminal',
    icon: Terminal,
    order: 2,
  },
  {
    title: 'Terminal Implementation Summary',
    fileName: 'TERMINAL_IMPLEMENTATION_SUMMARY.md',
    description: 'Terminal component for enhanced portfolio navigation and user experience',
    category: 'terminal',
    icon: Terminal,
    order: 3,
  },

  // File Tree
  {
    title: 'File Tree Quick Start',
    fileName: 'FILE_TREE_QUICK_START.md',
    description: 'Interactive project explorer for browsing dashboards and analytics work',
    category: 'file-tree',
    icon: FolderTree,
    featured: true,
    order: 1,
  },
  {
    title: 'File Tree Integration',
    fileName: 'FILE_TREE_INTEGRATION.md',
    description: 'Project file tree for organizing and exploring data analytics portfolio items',
    category: 'file-tree',
    icon: FolderTree,
    order: 2,
  },
  {
    title: 'File Tree Implementation Summary',
    fileName: 'FILE_TREE_IMPLEMENTATION_SUMMARY.md',
    description: 'File tree structure for showcasing organized portfolio projects and dashboards',
    category: 'file-tree',
    icon: FolderTree,
    order: 3,
  },

  // About
  {
    title: 'About Page Quick Start',
    fileName: 'ABOUT_PAGE_QUICK_START.md',
    description: 'About page structure for presenting your data analyst background and expertise',
    category: 'about',
    icon: Info,
    order: 1,
  },
  {
    title: 'About Page Redesign',
    fileName: 'ABOUT_PAGE_REDESIGN.md',
    description: 'About page layout for showcasing data analytics skills and professional journey',
    category: 'about',
    icon: Info,
    order: 2,
  },
  {
    title: 'About Page Implementation Summary',
    fileName: 'ABOUT_PAGE_IMPLEMENTATION_SUMMARY.md',
    description: 'About page features for presenting your data analyst profile and capabilities',
    category: 'about',
    icon: Info,
    order: 3,
  },
  {
    title: 'About Page Redesign Complete',
    fileName: 'ABOUT_PAGE_REDESIGN_COMPLETE.md',
    description: 'About page design for highlighting your analytics experience and achievements',
    category: 'about',
    icon: Info,
    order: 4,
  },
  {
    title: 'About Page Visual Guide',
    fileName: 'ABOUT_PAGE_VISUAL_GUIDE.md',
    description: 'Visual presentation guide for the about page content and layout',
    category: 'about',
    icon: Info,
    order: 5,
  },

  // Experience
  {
    title: 'Experience Page Quick Start',
    fileName: 'EXPERIENCE_PAGE_QUICK_START.md',
    description: 'Experience timeline for showcasing your data analyst roles and achievements',
    category: 'experience',
    icon: Briefcase,
    order: 1,
  },
  {
    title: 'Experience Page Redesign Complete',
    fileName: 'EXPERIENCE_PAGE_REDESIGN_COMPLETE.md',
    description: 'Experience page layout for presenting your analytics career journey and impact',
    category: 'experience',
    icon: Briefcase,
    order: 2,
  },

  // Projects
  {
    title: 'Projects Page Redesign Complete',
    fileName: 'PROJECTS_PAGE_REDESIGN_COMPLETE.md',
    description: 'Projects page for showcasing your Power BI dashboards and analytics work',
    category: 'projects',
    icon: FolderKanban,
    order: 1,
  },
  {
    title: 'Project Case Study Quick Start',
    fileName: 'PROJECT_CASE_STUDY_QUICK_START.md',
    description: 'Guide for creating case studies that highlight your data analytics projects',
    category: 'projects',
    icon: FolderKanban,
    order: 2,
  },
  {
    title: 'Project Case Study Redesign',
    fileName: 'PROJECT_CASE_STUDY_REDESIGN.md',
    description: 'Case study format for presenting dashboard projects and business impact',
    category: 'projects',
    icon: FolderKanban,
    order: 3,
  },
  {
    title: 'Projects Implementation',
    fileName: 'PROJECTS_IMPLEMENTATION.md',
    description: 'Projects section for displaying your BI dashboards and SQL analytics work',
    category: 'projects',
    icon: FolderKanban,
    order: 4,
  },
  {
    title: 'Projects Refactor Complete',
    fileName: 'PROJECTS_REFACTOR_COMPLETE.md',
    description: 'Projects showcase for presenting your data analytics portfolio and solutions',
    category: 'projects',
    icon: FolderKanban,
    order: 5,
  },
  {
    title: 'Case Studies Implementation',
    fileName: 'CASE_STUDIES_IMPLEMENTATION.md',
    description: 'Case study structure for showcasing analytics projects and business outcomes',
    category: 'projects',
    icon: FolderKanban,
    order: 6,
  },

  // Skills
  {
    title: 'Skills Page Quick Start',
    fileName: 'SKILLS_PAGE_QUICK_START.md',
    description: 'Skills page for highlighting your data analytics tools and technical expertise',
    category: 'skills',
    icon: Code2,
    order: 1,
  },
  {
    title: 'Skills Page Implementation Summary',
    fileName: 'SKILLS_PAGE_IMPLEMENTATION_SUMMARY.md',
    description: 'Skills showcase for presenting Power BI, SQL, Python, and Excel capabilities',
    category: 'skills',
    icon: Code2,
    order: 2,
  },
  {
    title: 'Skills Page Redesign Complete',
    fileName: 'SKILLS_PAGE_REDESIGN_COMPLETE.md',
    description: 'Skills page layout for displaying your BI and analytics technology stack',
    category: 'skills',
    icon: Code2,
    order: 3,
  },
  {
    title: 'Skills Page Visual Guide',
    fileName: 'SKILLS_PAGE_VISUAL_GUIDE.md',
    description: 'Visual presentation of your data analytics skills and tool proficiency',
    category: 'skills',
    icon: Code2,
    order: 4,
  },

  // Other
  {
    title: 'Docs Quick Start',
    fileName: 'DOCS_QUICK_START.md',
    description: 'Documentation system for organizing portfolio content and project details',
    category: 'other',
    icon: BookOpen,
    featured: true,
    order: 1,
  },
  {
    title: 'Docs Redesign Complete',
    fileName: 'DOCS_REDESIGN_COMPLETE.md',
    description: 'Documentation structure for presenting portfolio features and capabilities',
    category: 'other',
    icon: BookOpen,
    order: 2,
  },
  {
    title: 'Docs Visual Guide',
    fileName: 'DOCS_VISUAL_GUIDE.md',
    description: 'Visual guide for navigating portfolio documentation and content',
    category: 'other',
    icon: BookOpen,
    order: 3,
  },
  {
    title: 'Docs Search Feature',
    fileName: 'DOCS_SEARCH_FEATURE.md',
    description: 'Search functionality for finding specific portfolio content and projects',
    category: 'other',
    icon: BookOpen,
    order: 4,
  },
  {
    title: 'Docs Implementation Summary',
    fileName: 'DOCS_IMPLEMENTATION_SUMMARY.md',
    description: 'Portfolio documentation system for organizing analytics projects and content',
    category: 'other',
    icon: BookOpen,
    order: 5,
  },
  {
    title: 'Implementation Guide',
    fileName: 'IMPLEMENTATION_GUIDE.md',
    description: 'Guide for managing and updating portfolio content and project showcases',
    category: 'other',
    icon: BookOpen,
    order: 6,
  },
  {
    title: 'Code Block Examples',
    fileName: 'EXAMPLE_CODE_BLOCKS.md',
    description: 'Examples for displaying SQL queries and Python code in portfolio projects',
    category: 'other',
    icon: Code2,
    order: 7,
  },
  {
    title: 'Code Block Implementation',
    fileName: 'CODE_BLOCK_IMPLEMENTATION.md',
    description: 'Code display features for showcasing analytics scripts and SQL queries',
    category: 'other',
    icon: Code2,
    order: 8,
  },
  {
    title: 'Link Preview Implementation Complete',
    fileName: 'LINK_PREVIEW_IMPLEMENTATION_COMPLETE.md',
    description: 'Link preview features for showcasing external project links and dashboards',
    category: 'other',
    icon: FileText,
    order: 9,
  },
  {
    title: 'Link Preview Integration',
    fileName: 'LINK_PREVIEW_INTEGRATION.md',
    description: 'Integration guide for displaying project links and dashboard previews',
    category: 'other',
    icon: FileText,
    order: 10,
  },
  {
    title: 'String Centralization Complete',
    fileName: 'STRING_CENTRALIZATION_COMPLETE.md',
    description: 'Content management system for organizing portfolio text and descriptions',
    category: 'other',
    icon: Code2,
    order: 11,
  },
  {
    title: 'Performance Optimization Complete',
    fileName: 'PERFORMANCE_OPTIMIZATION_COMPLETE.md',
    description: 'Performance optimizations for fast loading of dashboard images and content',
    category: 'other',
    icon: FileText,
    order: 12,
  },
  {
    title: 'Audit Report',
    fileName: 'AUDIT_REPORT.md',
    description: 'Portfolio audit report covering content, structure, and presentation quality',
    category: 'other',
    icon: FileText,
    order: 13,
  },
  {
    title: 'Final Summary',
    fileName: 'FINAL_SUMMARY.md',
    description: 'Portfolio overview and summary of data analytics projects and features',
    category: 'other',
    icon: FileText,
    order: 14,
  },
];

// Helper functions
export const getDocsByCategory = (categoryId: string) => {
  return DOCS.filter((doc) => doc.category === categoryId).sort((a, b) => a.order - b.order);
};

export const getFeaturedDocs = () => {
  return DOCS.filter((doc) => doc.featured).sort((a, b) => a.order - b.order);
};

export const getDocByFileName = (fileName: string) => {
  return DOCS.find((doc) => doc.fileName === fileName);
};

export const getDocNavigation = (fileName: string) => {
  const currentDoc = getDocByFileName(fileName);
  if (!currentDoc) return { prev: null, next: null };

  const categoryDocs = getDocsByCategory(currentDoc.category);
  const currentIndex = categoryDocs.findIndex((doc) => doc.fileName === fileName);

  return {
    prev: currentIndex > 0 ? categoryDocs[currentIndex - 1] : null,
    next: currentIndex < categoryDocs.length - 1 ? categoryDocs[currentIndex + 1] : null,
  };
};

export const getCategoryLabel = (categoryId: string) => {
  return DOC_CATEGORIES.find((cat) => cat.id === categoryId)?.label || 'Documentation';
};
