'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ArticleBreadcrumbsProps = {
  category?: string;
  title: string;
  className?: string;
};

export function ArticleBreadcrumbs({ category, title, className }: ArticleBreadcrumbsProps) {
  return (
    <nav
      className={cn('flex items-center gap-2 text-sm text-muted-foreground mb-6', className)}
      aria-label="Breadcrumb"
    >
      <Link
        href="/writing"
        className="hover:text-foreground transition-colors"
      >
        Writing
      </Link>

      {category && (
        <>
          <ChevronRight className="h-4 w-4" />
          <Link
            href={`/writing?category=${encodeURIComponent(category)}`}
            className="hover:text-foreground transition-colors"
          >
            {category}
          </Link>
        </>
      )}

      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground truncate max-w-[200px] md:max-w-none">
        {title}
      </span>
    </nav>
  );
}
