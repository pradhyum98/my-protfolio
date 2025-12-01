'use client';

import Link from 'next/link';
import { ChevronRight, FileText } from 'lucide-react';
import { getCategoryLabel } from '@/lib/docs-config';
import { cn } from '@/lib/utils';

type BreadcrumbsProps = {
  category?: string;
  title?: string;
  className?: string;
};

export function DocsBreadcrumbs({ category, title, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center gap-2 text-sm mb-8', className)}
    >
      <Link
        href="/docs"
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
      >
        <FileText className="w-4 h-4" />
        <span>Docs</span>
      </Link>

      {category && (
        <>
          <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
          <span className="text-muted-foreground">{getCategoryLabel(category)}</span>
        </>
      )}

      {title && (
        <>
          <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
          <span className="text-foreground font-medium truncate max-w-xs" title={title}>
            {title}
          </span>
        </>
      )}
    </nav>
  );
}
