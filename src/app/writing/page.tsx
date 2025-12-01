'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PageHeader } from '@/components/ui/page-header';
import { WritingFeatured } from '@/components/writing/writing-featured';
import { WritingListItem } from '@/components/writing/writing-list-item';
import { WritingFilters } from '@/components/writing/writing-filters';
import { Button } from '@/components/ui/button';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import {
  getAllPosts,
  getFeaturedPost,
  getAllTags,
  getAllCategories,
  getAllYears,
} from '@/lib/writing-data';
import type { FilterState, SortOption } from '@/types/writing';

const POSTS_PER_PAGE = 10;

function WritingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Initialize filters from URL params
  const [filters, setFilters] = useState<FilterState>({
    search: searchParams.get('search') || '',
    tag: searchParams.get('tag') || 'all',
    year: searchParams.get('year') || 'all',
    category: searchParams.get('category') || 'all',
  });

  const [sortBy, setSortBy] = useState<SortOption>((searchParams.get('sort') as SortOption) || 'newest');
  const [currentPage, setCurrentPage] = useState(1);

  // Get data
  const featuredPost = getFeaturedPost();
  const allPosts = getAllPosts();
  const tags = getAllTags();
  const categories = getAllCategories();
  const years = getAllYears();

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    const filtered = allPosts.filter((post) => {
      // Exclude featured post from list
      if (post.slug === featuredPost?.slug) return false;

      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch =
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }

      // Tag filter
      if (filters.tag && filters.tag !== 'all') {
        if (!post.tags.includes(filters.tag)) return false;
      }

      // Category filter
      if (filters.category && filters.category !== 'all') {
        if (post.category !== filters.category) return false;
      }

      // Year filter
      if (filters.year && filters.year !== 'all') {
        const postYear = new Date(post.date).getFullYear().toString();
        if (postYear !== filters.year) return false;
      }

      return true;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'a-z':
          return a.title.localeCompare(b.title);
        case 'z-a':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [allPosts, filters, sortBy, featuredPost]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredAndSortedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.search) params.set('search', filters.search);
    if (filters.tag !== 'all') params.set('tag', filters.tag);
    if (filters.year !== 'all') params.set('year', filters.year);
    if (filters.category !== 'all') params.set('category', filters.category);
    if (sortBy !== 'newest') params.set('sort', sortBy);

    const newUrl = params.toString() ? `/writing?${params.toString()}` : '/writing';
    router.replace(newUrl, { scroll: false });

    // Save to localStorage
    localStorage.setItem('writing-filters', JSON.stringify({ filters, sortBy }));
  }, [filters, sortBy, router]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('writing-filters');
    if (saved && !searchParams.toString()) {
      const { filters: savedFilters, sortBy: savedSort } = JSON.parse(saved);
      setFilters(savedFilters);
      setSortBy(savedSort);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Subtle background accent */}
      <ProgressiveBlur
        className="absolute inset-0 pointer-events-none"
        intensity={0.08}
        direction="radial"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <PageHeader
            overline="Insights & Knowledge"
            overlineIcon={<BookOpen className="h-4 w-4 text-blue-500" />}
            title="Writing"
            description="Technical articles, tutorials, and insights on modern web development, architecture, and engineering practices."
          />

          {/* Featured Post */}
          {featuredPost && (
            <section className="mt-16 mb-24">
              <WritingFeatured post={featuredPost} />
            </section>
          )}

          {/* Filters */}
          <section>
            <WritingFilters
              filters={filters}
              sortBy={sortBy}
              tags={tags}
              categories={categories}
              years={years}
              onFilterChange={setFilters}
              onSortChange={setSortBy}
            />
          </section>

          {/* Results Count */}
          <div className="flex items-center justify-between py-6 border-b border-border/50">
            <p className="text-sm text-muted-foreground">
              {filteredAndSortedPosts.length === 0 ? (
                'No articles found'
              ) : (
                <>
                  {filteredAndSortedPosts.length} article{filteredAndSortedPosts.length !== 1 ? 's' : ''}
                  {filters.search && ` matching "${filters.search}"`}
                </>
              )}
            </p>
          </div>

          {/* Posts List */}
          <section className="mt-2">
            {paginatedPosts.length === 0 ? (
              <div className="py-24 text-center">
                <p className="text-muted-foreground">
                  No articles match your filters. Try adjusting your search or filters.
                </p>
              </div>
            ) : (
              <div className="space-y-0">
                {paginatedPosts.map((post) => (
                  <WritingListItem key={post.slug} post={post} />
                ))}
              </div>
            )}
          </section>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <div className="flex items-center gap-2 px-4">
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
              <Button
                variant="outline"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}

          {/* Newsletter CTA (Optional) */}
          <section className="mt-32 py-12 border-t border-border/50">
            <div className="text-center space-y-4">
              <Sparkles className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-display text-2xl font-semibold">
                Stay Updated
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                New articles on web development, architecture, and engineering practices.
                Subscribe to get notified.
              </p>
              <Button asChild className="mt-4">
                <a href="/contact">Get in Touch</a>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default function WritingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse">Loading...</div></div>}>
      <WritingContent />
    </Suspense>
  );
}
