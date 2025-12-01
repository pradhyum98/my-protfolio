// ============================================================================
// WRITING DATA & UTILITIES
// ============================================================================

import type { Post, PostMetadata } from '@/types/writing';

// Sample posts - In production, these would come from MDX files or CMS
export const posts: Post[] = [
  {
    slug: 'micro-frontends-module-federation',
    title: 'Implementing Micro-frontends with Module Federation',
    excerpt: 'A deep dive into architecting scalable frontend applications using Module Federation in Webpack 5. Learn how to build independently deployable modules that work together seamlessly.',
    content: `# Implementing Micro-frontends with Module Federation

Module Federation is a game-changer for large-scale frontend applications...

## Why Micro-frontends?

As applications grow, monolithic frontends become harder to maintain...

## Setting Up Module Federation

Let's start with the basics...`,
    date: '2024-03-15',
    updated: '2024-03-20',
    tags: ['Micro-frontends', 'Module Federation', 'Architecture', 'Webpack'],
    category: 'Architecture',
    readingTime: '12 min read',
    featured: true,
    hero: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
    canonical: 'https://pradhyum.dev/writing/micro-frontends-module-federation',
    seo: {
      title: 'Implementing Micro-frontends with Module Federation | Pradhyum Upadhyay',
      description: 'Complete guide to building scalable frontend applications using Module Federation',
      keywords: ['micro-frontends', 'module federation', 'webpack 5', 'architecture'],
    },
  },
  {
    slug: 'building-wysiwyg-editors-react',
    title: 'Building Real-time WYSIWYG Editors with React',
    excerpt: 'Lessons learned from building production-grade WYSIWYG editors with React and TypeScript. From state management to performance optimization.',
    content: `# Building Real-time WYSIWYG Editors with React

Creating a production-ready WYSIWYG editor is challenging...`,
    date: '2024-02-10',
    tags: ['WYSIWYG', 'React', 'Real-time', 'TypeScript'],
    category: 'Tutorial',
    readingTime: '15 min read',
    featured: true,
    hero: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
  },
  {
    slug: 'web-to-mobile-capacitor-guide',
    title: 'Web to Mobile with Capacitor: Complete Guide',
    excerpt: 'Convert your web applications to mobile apps without duplicating your stack. A comprehensive guide to Capacitor for cross-platform development.',
    content: `# Web to Mobile with Capacitor: Complete Guide

Capacitor allows you to build mobile apps using web technologies...`,
    date: '2024-01-22',
    tags: ['Capacitor', 'Mobile', 'Cross-platform', 'React'],
    category: 'Tutorial',
    readingTime: '10 min read',
    featured: false,
  },
  {
    slug: 'accessibility-modern-web-apps',
    title: 'Accessibility in Modern Web Applications',
    excerpt: 'Practical guide to implementing WCAG compliance, keyboard navigation, and screen reader support in your React applications.',
    content: `# Accessibility in Modern Web Applications

Accessibility isn't optional—it's essential...`,
    date: '2023-12-05',
    tags: ['Accessibility', 'a11y', 'Best Practices', 'WCAG'],
    category: 'Technical Article',
    readingTime: '8 min read',
    featured: false,
  },
  {
    slug: 'typescript-zod-type-safety',
    title: 'TypeScript + Zod: Runtime Type Safety',
    excerpt: 'How to combine TypeScript static types with Zod runtime validation for bulletproof type safety in your applications.',
    content: `# TypeScript + Zod: Runtime Type Safety

TypeScript gives us compile-time safety, but what about runtime?`,
    date: '2023-11-18',
    tags: ['TypeScript', 'Zod', 'Type Safety', 'Validation'],
    category: 'Technical Article',
    readingTime: '7 min read',
    featured: false,
  },
  {
    slug: 'nextjs-performance-optimization',
    title: 'Next.js Performance Optimization Strategies',
    excerpt: 'Advanced techniques for optimizing Core Web Vitals in Next.js applications. From image optimization to smart caching strategies.',
    content: `# Next.js Performance Optimization Strategies

Performance is a feature, not an afterthought...`,
    date: '2023-10-30',
    tags: ['Next.js', 'Performance', 'Web Vitals', 'Optimization'],
    category: 'Performance',
    readingTime: '11 min read',
    featured: false,
  },
  {
    slug: 'state-management-2024',
    title: 'State Management in 2024: A Pragmatic Guide',
    excerpt: 'Choosing the right state management solution for your React app. From Context to Zustand, Pinia to Redux Toolkit.',
    content: `# State Management in 2024: A Pragmatic Guide

The state management landscape has evolved significantly...`,
    date: '2023-09-15',
    tags: ['State Management', 'React', 'Zustand', 'Pinia'],
    category: 'Opinion',
    readingTime: '9 min read',
    featured: false,
  },
  {
    slug: 'firebase-ssr-patterns',
    title: 'Firebase + SSR: Patterns and Best Practices',
    excerpt: 'Collection of patterns for implementing server-side rendering with Firebase. Real-world examples from production applications.',
    content: `# Firebase + SSR: Patterns and Best Practices

Combining Firebase with SSR requires careful planning...`,
    date: '2023-08-20',
    tags: ['Firebase', 'SSR', 'Next.js', 'Patterns'],
    category: 'Case Study',
    readingTime: '13 min read',
    featured: false,
    series: {
      name: 'Firebase in Production',
      part: 1,
      total: 3,
    },
  },
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export function getAllPosts(): PostMetadata[] {
  return posts
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPost(): PostMetadata | null {
  const featured = posts.find(post => post.featured);
  if (!featured) return null;
  const { content, ...meta } = featured;
  return meta;
}

export function getPostBySlug(slug: string): Post | null {
  return posts.find(post => post.slug === slug) || null;
}

export function getPostsByTag(tag: string): PostMetadata[] {
  return posts
    .filter(post => post.tags.includes(tag))
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsByCategory(category: string): PostMetadata[] {
  return posts
    .filter(post => post.category === category)
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  posts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

export function getAllCategories(): string[] {
  const categorySet = new Set<string>();
  posts.forEach(post => categorySet.add(post.category));
  return Array.from(categorySet).sort();
}

export function getAllYears(): string[] {
  const yearSet = new Set<string>();
  posts.forEach(post => {
    const year = new Date(post.date).getFullYear().toString();
    yearSet.add(year);
  });
  return Array.from(yearSet).sort((a, b) => parseInt(b) - parseInt(a));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function getRelatedPosts(currentSlug: string, limit = 3): PostMetadata[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const related = posts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      const { content, ...meta } = post;
      const tagOverlap = post.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const categoryMatch = post.category === currentPost.category ? 1 : 0;
      return { ...meta, score: tagOverlap + categoryMatch };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return related;
}
