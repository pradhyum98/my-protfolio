'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { DocItem } from '@/lib/docs-config';
import { cn } from '@/lib/utils';

type PrevNextNavProps = {
  prev: DocItem | null;
  next: DocItem | null;
  className?: string;
};

export function PrevNextNav({ prev, next, className }: PrevNextNavProps) {
  if (!prev && !next) return null;

  return (
    <nav
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 pt-8 border-t border-border',
        className
      )}
    >
      {/* Previous */}
      <div className="md:col-span-1">
        {prev && (
          <Link
            href={`/docs/${prev.fileName}`}
            className="group block p-6 rounded-lg border border-border bg-card/30 hover:bg-card hover:border-primary/30 transition-all duration-200"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="uppercase tracking-wide text-xs font-medium">Previous</span>
            </div>
            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {prev.title}
            </div>
            <div className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {prev.description}
            </div>
          </Link>
        )}
      </div>

      {/* Next */}
      <div className="md:col-span-1">
        {next && (
          <Link
            href={`/docs/${next.fileName}`}
            className="group block p-6 rounded-lg border border-border bg-card/30 hover:bg-card hover:border-primary/30 transition-all duration-200 text-right"
          >
            <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
              <span className="uppercase tracking-wide text-xs font-medium">Next</span>
              <ArrowRight className="w-4 h-4" />
            </div>
            <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {next.title}
            </div>
            <div className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {next.description}
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}
