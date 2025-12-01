'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { DOC_CATEGORIES, getDocsByCategory } from '@/lib/docs-config';
import { cn } from '@/lib/utils';

export function DocsSidebar() {
  const pathname = usePathname();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(DOC_CATEGORIES.map((cat) => cat.id))
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  return (
    <nav className="space-y-6">
      <div className="mb-6 relative">
        <Link
          href="/docs"
          className="block text-lg font-semibold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-red-500 transition-all"
        >
          Documentation
        </Link>
        <p className="text-sm text-muted-foreground mt-1">
          Guides and references
        </p>
      </div>

      <div className="space-y-4">
        {DOC_CATEGORIES.map((category, index) => {
          const docs = getDocsByCategory(category.id);
          if (docs.length === 0) return null;

          const isExpanded = expandedCategories.has(category.id);
          const Icon = category.icon;
          // Alternate accent colors
          const accentColor = index % 2 === 0 ? 'text-blue-500' : 'text-red-500';
          const hoverColor = index % 2 === 0 ? 'group-hover:text-blue-500' : 'group-hover:text-red-500';

          return (
            <div key={category.id} className="space-y-1">
              <button
                onClick={() => toggleCategory(category.id)}
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                aria-expanded={isExpanded}
              >
                <div className="flex items-center gap-2">
                  <Icon className={cn("w-4 h-4 text-muted-foreground transition-colors", hoverColor)} />
                  <span>{category.label}</span>
                </div>
                {isExpanded ? (
                  <ChevronDown className={cn("w-4 h-4 transition-colors", accentColor)} />
                ) : (
                  <ChevronRight className={cn("w-4 h-4 transition-colors", accentColor)} />
                )}
              </button>

              {isExpanded && (
                <div className="pl-6 space-y-0.5 border-l border-border">
                  {docs.map((doc) => {
                    const isActive = pathname === `/docs/${doc.fileName}`;
                    const activeBorderClass = index % 2 === 0 ? 'border-blue-500' : 'border-red-500';
                    const activeBgClass = index % 2 === 0 ? 'bg-blue-500/10' : 'bg-red-500/10';
                    const activeTextClass = index % 2 === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-red-600 dark:text-red-400';

                    return (
                      <Link
                        key={doc.fileName}
                        href={`/docs/${doc.fileName}`}
                        className={cn(
                          'block py-2 px-3 text-sm rounded-md transition-all duration-150',
                          'hover:bg-muted hover:text-foreground',
                          isActive
                            ? `${activeBgClass} ${activeTextClass} font-medium border-l-2 ${activeBorderClass} -ml-px pl-[11px]`
                            : 'text-muted-foreground'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <div className="line-clamp-1">{doc.title}</div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
