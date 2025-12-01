// ============================================================================
// WRITING TYPE DEFINITIONS
// ============================================================================

export type PostCategory =
  | 'Technical Article'
  | 'Tutorial'
  | 'Architecture'
  | 'Performance'
  | 'Opinion'
  | 'Case Study';

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // MDX content
  date: string; // ISO format
  updated?: string; // ISO format
  tags: string[];
  category: PostCategory;
  readingTime: string; // "6 min read"
  hero?: string; // image path
  canonical?: string;
  featured?: boolean;
  series?: {
    name: string;
    part: number;
    total: number;
  };
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
};

export type PostMetadata = Omit<Post, 'content'>;

export type FilterState = {
  search: string;
  tag: string;
  year: string;
  category: string;
};

export type SortOption = 'newest' | 'oldest' | 'a-z' | 'z-a';
