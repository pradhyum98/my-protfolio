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
    description: 'Quick start guide for the new homepage design',
    category: 'homepage',
    icon: Home,
    featured: true,
    order: 1,
  },
  {
    title: 'Homepage Implementation Summary',
    fileName: 'HOMEPAGE_IMPLEMENTATION_SUMMARY.md',
    description: 'Detailed implementation summary of homepage features',
    category: 'homepage',
    icon: Home,
    order: 2,
  },
  {
    title: 'Homepage Redesign Complete',
    fileName: 'HOMEPAGE_REDESIGN_COMPLETE.md',
    description: 'Complete redesign documentation for the homepage',
    category: 'homepage',
    icon: Home,
    order: 3,
  },
  {
    title: 'New Homepage Documentation',
    fileName: 'NEW_HOMEPAGE_DOCUMENTATION.md',
    description: 'Complete documentation for the redesigned homepage',
    category: 'homepage',
    icon: Home,
    order: 4,
  },

  // Typography
  {
    title: 'Typography Quick Start',
    fileName: 'TYPOGRAPHY_QUICK_START.md',
    description: 'Quick start guide for the typography system',
    category: 'typography',
    icon: Type,
    featured: true,
    order: 1,
  },
  {
    title: 'Typography System',
    fileName: 'TYPOGRAPHY_SYSTEM.md',
    description: 'Complete typography system documentation and architecture',
    category: 'typography',
    icon: Type,
    order: 2,
  },
  {
    title: 'Typography Audit & Fix',
    fileName: 'TYPOGRAPHY_AUDIT_AND_FIX.md',
    description: 'Detailed audit report of font issues and fixes applied',
    category: 'typography',
    icon: Type,
    order: 3,
  },
  {
    title: 'Typography Migration Guide',
    fileName: 'TYPOGRAPHY_MIGRATION_GUIDE.md',
    description: 'Guide for migrating to the new typography system',
    category: 'typography',
    icon: Type,
    order: 4,
  },

  // Customizer
  {
    title: 'Customizer Dock Implementation',
    fileName: 'CUSTOMIZER_DOCK_IMPLEMENTATION.md',
    description: 'Complete guide to the customization dock system',
    category: 'customizer',
    icon: Sparkles,
    featured: true,
    order: 1,
  },
  {
    title: 'Customizer Dock Complete',
    fileName: 'CUSTOMIZER_DOCK_COMPLETE.md',
    description: 'Summary of customizer dock features and implementation',
    category: 'customizer',
    icon: Sparkles,
    order: 2,
  },

  // Terminal
  {
    title: 'Terminal Quick Start',
    fileName: 'TERMINAL_QUICK_START.md',
    description: 'Get started with the interactive terminal component',
    category: 'terminal',
    icon: Terminal,
    featured: true,
    order: 1,
  },
  {
    title: 'Terminal Integration',
    fileName: 'TERMINAL_INTEGRATION.md',
    description: 'Integration guide for the terminal overlay feature',
    category: 'terminal',
    icon: Terminal,
    order: 2,
  },
  {
    title: 'Terminal Implementation Summary',
    fileName: 'TERMINAL_IMPLEMENTATION_SUMMARY.md',
    description: 'Overview of terminal implementation details',
    category: 'terminal',
    icon: Terminal,
    order: 3,
  },

  // File Tree
  {
    title: 'File Tree Quick Start',
    fileName: 'FILE_TREE_QUICK_START.md',
    description: 'Quick start guide for implementing the interactive file tree explorer',
    category: 'file-tree',
    icon: FolderTree,
    featured: true,
    order: 1,
  },
  {
    title: 'File Tree Integration',
    fileName: 'FILE_TREE_INTEGRATION.md',
    description: 'Complete integration guide for the file tree component',
    category: 'file-tree',
    icon: FolderTree,
    order: 2,
  },
  {
    title: 'File Tree Implementation Summary',
    fileName: 'FILE_TREE_IMPLEMENTATION_SUMMARY.md',
    description: 'Summary of the file tree implementation approach',
    category: 'file-tree',
    icon: FolderTree,
    order: 3,
  },

  // About
  {
    title: 'About Page Quick Start',
    fileName: 'ABOUT_PAGE_QUICK_START.md',
    description: 'Quick start guide for the about page design',
    category: 'about',
    icon: Info,
    order: 1,
  },
  {
    title: 'About Page Redesign',
    fileName: 'ABOUT_PAGE_REDESIGN.md',
    description: 'Redesign documentation for the about page',
    category: 'about',
    icon: Info,
    order: 2,
  },
  {
    title: 'About Page Implementation Summary',
    fileName: 'ABOUT_PAGE_IMPLEMENTATION_SUMMARY.md',
    description: 'Summary of about page implementation',
    category: 'about',
    icon: Info,
    order: 3,
  },
  {
    title: 'About Page Redesign Complete',
    fileName: 'ABOUT_PAGE_REDESIGN_COMPLETE.md',
    description: 'Complete about page redesign summary',
    category: 'about',
    icon: Info,
    order: 4,
  },
  {
    title: 'About Page Visual Guide',
    fileName: 'ABOUT_PAGE_VISUAL_GUIDE.md',
    description: 'Visual guide for the about page design',
    category: 'about',
    icon: Info,
    order: 5,
  },

  // Experience
  {
    title: 'Experience Page Quick Start',
    fileName: 'EXPERIENCE_PAGE_QUICK_START.md',
    description: 'Quick start guide for the experience page',
    category: 'experience',
    icon: Briefcase,
    order: 1,
  },
  {
    title: 'Experience Page Redesign Complete',
    fileName: 'EXPERIENCE_PAGE_REDESIGN_COMPLETE.md',
    description: 'Complete experience page redesign documentation',
    category: 'experience',
    icon: Briefcase,
    order: 2,
  },

  // Projects
  {
    title: 'Projects Page Redesign Complete',
    fileName: 'PROJECTS_PAGE_REDESIGN_COMPLETE.md',
    description: 'Complete projects page redesign documentation',
    category: 'projects',
    icon: FolderKanban,
    order: 1,
  },
  {
    title: 'Project Case Study Quick Start',
    fileName: 'PROJECT_CASE_STUDY_QUICK_START.md',
    description: 'Quick start guide for project case studies',
    category: 'projects',
    icon: FolderKanban,
    order: 2,
  },
  {
    title: 'Project Case Study Redesign',
    fileName: 'PROJECT_CASE_STUDY_REDESIGN.md',
    description: 'Redesign documentation for project case studies',
    category: 'projects',
    icon: FolderKanban,
    order: 3,
  },
  {
    title: 'Projects Implementation',
    fileName: 'PROJECTS_IMPLEMENTATION.md',
    description: 'Implementation guide for the projects section',
    category: 'projects',
    icon: FolderKanban,
    order: 4,
  },
  {
    title: 'Projects Refactor Complete',
    fileName: 'PROJECTS_REFACTOR_COMPLETE.md',
    description: 'Summary of projects refactor',
    category: 'projects',
    icon: FolderKanban,
    order: 5,
  },
  {
    title: 'Case Studies Implementation',
    fileName: 'CASE_STUDIES_IMPLEMENTATION.md',
    description: 'Implementation guide for case studies',
    category: 'projects',
    icon: FolderKanban,
    order: 6,
  },

  // Skills
  {
    title: 'Skills Page Quick Start',
    fileName: 'SKILLS_PAGE_QUICK_START.md',
    description: 'Quick start guide for the skills page',
    category: 'skills',
    icon: Code2,
    order: 1,
  },
  {
    title: 'Skills Page Implementation Summary',
    fileName: 'SKILLS_PAGE_IMPLEMENTATION_SUMMARY.md',
    description: 'Implementation summary for the skills page',
    category: 'skills',
    icon: Code2,
    order: 2,
  },
  {
    title: 'Skills Page Redesign Complete',
    fileName: 'SKILLS_PAGE_REDESIGN_COMPLETE.md',
    description: 'Complete skills page redesign documentation',
    category: 'skills',
    icon: Code2,
    order: 3,
  },
  {
    title: 'Skills Page Visual Guide',
    fileName: 'SKILLS_PAGE_VISUAL_GUIDE.md',
    description: 'Visual guide for the skills page',
    category: 'skills',
    icon: Code2,
    order: 4,
  },

  // Other
  {
    title: 'Docs Quick Start',
    fileName: 'DOCS_QUICK_START.md',
    description: 'Quick start guide for using the documentation system',
    category: 'other',
    icon: BookOpen,
    featured: true,
    order: 1,
  },
  {
    title: 'Docs Redesign Complete',
    fileName: 'DOCS_REDESIGN_COMPLETE.md',
    description: 'Complete documentation redesign summary',
    category: 'other',
    icon: BookOpen,
    order: 2,
  },
  {
    title: 'Docs Visual Guide',
    fileName: 'DOCS_VISUAL_GUIDE.md',
    description: 'Visual guide to the documentation layout and design',
    category: 'other',
    icon: BookOpen,
    order: 3,
  },
  {
    title: 'Docs Search Feature',
    fileName: 'DOCS_SEARCH_FEATURE.md',
    description: 'Documentation for the search functionality',
    category: 'other',
    icon: BookOpen,
    order: 4,
  },
  {
    title: 'Docs Implementation Summary',
    fileName: 'DOCS_IMPLEMENTATION_SUMMARY.md',
    description: 'Technical implementation summary',
    category: 'other',
    icon: BookOpen,
    order: 5,
  },
  {
    title: 'Implementation Guide',
    fileName: 'IMPLEMENTATION_GUIDE.md',
    description: 'General implementation guide and best practices',
    category: 'other',
    icon: BookOpen,
    order: 6,
  },
  {
    title: 'Code Block Examples',
    fileName: 'EXAMPLE_CODE_BLOCKS.md',
    description: 'Interactive examples showcasing premium code block features',
    category: 'other',
    icon: Code2,
    order: 7,
  },
  {
    title: 'Code Block Implementation',
    fileName: 'CODE_BLOCK_IMPLEMENTATION.md',
    description: 'Complete implementation guide for premium code blocks',
    category: 'other',
    icon: Code2,
    order: 8,
  },
  {
    title: 'Link Preview Implementation Complete',
    fileName: 'LINK_PREVIEW_IMPLEMENTATION_COMPLETE.md',
    description: 'Complete implementation guide for link previews',
    category: 'other',
    icon: FileText,
    order: 9,
  },
  {
    title: 'Link Preview Integration',
    fileName: 'LINK_PREVIEW_INTEGRATION.md',
    description: 'Integration guide for link preview component',
    category: 'other',
    icon: FileText,
    order: 10,
  },
  {
    title: 'String Centralization Complete',
    fileName: 'STRING_CENTRALIZATION_COMPLETE.md',
    description: 'Complete guide to string centralization implementation',
    category: 'other',
    icon: Code2,
    order: 11,
  },
  {
    title: 'Performance Optimization Complete',
    fileName: 'PERFORMANCE_OPTIMIZATION_COMPLETE.md',
    description: 'Performance optimization summary',
    category: 'other',
    icon: FileText,
    order: 12,
  },
  {
    title: 'Audit Report',
    fileName: 'AUDIT_REPORT.md',
    description: 'Comprehensive audit report of the portfolio',
    category: 'other',
    icon: FileText,
    order: 13,
  },
  {
    title: 'Final Summary',
    fileName: 'FINAL_SUMMARY.md',
    description: 'Final project summary and overview',
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
