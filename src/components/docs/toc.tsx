'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type TocItem = {
  id: string;
  text: string;
  level: number;
};

type DocsTocProps = {
  className?: string;
};

export function DocsToc({ className }: DocsTocProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from the document
    const article = document.querySelector('article');
    if (!article) return;

    const headingElements = article.querySelectorAll('h2, h3, h4');
    const items: TocItem[] = Array.from(headingElements).map((heading) => ({
      id: heading.id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1)),
    }));

    setHeadings(items);

    // Scrollspy - track active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    );

    headingElements.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className={cn('sticky top-24 space-y-3', className)}>
      <div className="text-sm font-semibold text-foreground mb-3">
        On this page
      </div>
      <ul className="space-y-2 text-sm border-l border-border">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li
              key={heading.id}
              style={{ paddingLeft: `${(heading.level - 2) * 0.75}rem` }}
            >
              <a
                href={`#${heading.id}`}
                className={cn(
                  'block py-1 px-3 -ml-px border-l-2 transition-all duration-150',
                  'hover:text-foreground hover:border-primary/50',
                  isActive
                    ? 'border-primary text-primary font-medium'
                    : 'border-transparent text-muted-foreground'
                )}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(heading.id);
                  if (element) {
                    const offset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
