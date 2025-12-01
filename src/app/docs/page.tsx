'use client';

import Link from 'next/link';
import { DOC_CATEGORIES, getFeaturedDocs, getDocsByCategory } from '@/lib/docs-config';
import { SearchDocs } from '@/components/docs/search';
import { ArrowRight, Star, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageHeader } from '@/components/ui/page-header';

export default function DocsIndexPage() {
  const featuredDocs = getFeaturedDocs();

  return (
    <div className="max-w-5xl">
      {/* Header */}
      <PageHeader
        overline="Technical Reference"
        overlineIcon={<BookOpen className="h-4 w-4 text-blue-500" />}
        title="Documentation"
        description="Comprehensive guides, implementation details, and technical references for every feature in this portfolio. From quick starts to deep dives."
      />

      {/* Search */}
      <div className="mb-16">
        <SearchDocs />
      </div>

      {/* Featured */}
      {featuredDocs.length > 0 && (
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-5 h-5 text-blue-500" />
            <h2 className="text-2xl font-semibold">Quick Starts</h2>
          </div>
          <div className="space-y-3">
            {featuredDocs.map((doc, index) => {
              const Icon = doc.icon;
              // Alternate between blue and red accents
              const accentColor = index % 2 === 0 ? 'blue' : 'red';
              const hoverBorderClass = accentColor === 'blue' ? 'hover:border-blue-500/30' : 'hover:border-red-500/30';
              const bgClass = accentColor === 'blue' ? 'bg-blue-500/5' : 'bg-red-500/5';
              const textClass = accentColor === 'blue' ? 'text-blue-500' : 'text-red-500';
              const hoverTextClass = accentColor === 'blue' ? 'group-hover:text-blue-500' : 'group-hover:text-red-500';

              return (
                <Link
                  key={doc.fileName}
                  href={`/docs/${doc.fileName}`}
                  className={cn("group block py-4 border-b border-border transition-all duration-200", hoverBorderClass)}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn("mt-1 p-2 rounded-md", bgClass, textClass)}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={cn("text-lg font-semibold text-foreground transition-colors", hoverTextClass)}>
                          {doc.title}
                        </h3>
                        <ArrowRight className={cn("w-4 h-4 text-muted-foreground transition-all", hoverTextClass, "group-hover:translate-x-1")} />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* All Docs by Category */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">All Documentation</h2>
        <div className="space-y-12">
          {DOC_CATEGORIES.map((category, categoryIndex) => {
            const docs = getDocsByCategory(category.id);
            if (docs.length === 0) return null;

            const Icon = category.icon;
            // Alternate category icon colors between blue and red
            const categoryColor = categoryIndex % 2 === 0 ? 'text-blue-500' : 'text-red-500';

            return (
              <div key={category.id}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border">
                  <Icon className={cn("w-5 h-5", categoryColor)} />
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.label}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    ({docs.length})
                  </span>
                </div>

                {/* Category Docs */}
                <div className="space-y-2">
                  {docs.map((doc) => (
                    <Link
                      key={doc.fileName}
                      href={`/docs/${doc.fileName}`}
                      className={cn(
                        'group block py-3 px-4 -mx-4 rounded-lg',
                        'hover:bg-muted/50 transition-all duration-150'
                      )}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {doc.title}
                            </h4>
                            {doc.featured && (
                              <Star className="w-3 h-3 text-primary fill-primary" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {doc.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                      </div>
                    </Link>
                  ))}
                </div>
            </div>
            );
          })}
      </div>
      </section>
    </div>
  );
}
