import { cn } from '@/lib/utils';

type ArticleProseProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * ArticleProse Component
 * Editorial typography wrapper for writing/article content
 * Optimized for long-form reading with comfortable measure and hierarchy
 */
export function ArticleProse({ children, className }: ArticleProseProps) {
  return (
    <div
      className={cn(
        // Base prose styles
        'prose prose-neutral dark:prose-invert',
        // Comfortable measure (60-70ch for optimal reading)
        'max-w-[70ch]',
        'prose-lg',
        // Headings - strong hierarchy
        'prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-tight',
        'prose-headings:scroll-mt-28',
        'prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-12 prose-h1:first:mt-0',
        'prose-h1:leading-tight',
        'prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-5 prose-h2:mt-12',
        'prose-h2:pb-3 prose-h2:border-b prose-h2:border-border/50',
        'prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-10',
        'prose-h4:text-xl prose-h4:font-semibold prose-h4:mb-3 prose-h4:mt-8',
        // Paragraphs - generous line height
        'prose-p:leading-[1.75] prose-p:mb-6',
        'prose-p:text-foreground/90',
        // Links - underline with offset
        'prose-a:text-foreground prose-a:underline prose-a:decoration-primary/40',
        'prose-a:underline-offset-4 prose-a:transition-all prose-a:duration-150',
        'hover:prose-a:decoration-primary hover:prose-a:text-primary',
        'prose-a:font-medium',
        // Lists - comfortable spacing
        'prose-ul:my-8 prose-ul:space-y-3',
        'prose-ol:my-8 prose-ol:space-y-3',
        'prose-li:text-foreground/90 prose-li:leading-[1.75]',
        'prose-li:marker:text-primary/70',
        // Blockquotes - elegant styling
        'prose-blockquote:border-l-4 prose-blockquote:border-primary/50',
        'prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-1',
        'prose-blockquote:italic prose-blockquote:my-8',
        'prose-blockquote:text-foreground/80 prose-blockquote:bg-muted/30',
        'prose-blockquote:rounded-r',
        // Code - inline and blocks
        'prose-code:text-sm prose-code:font-mono',
        'prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5',
        'prose-code:rounded prose-code:text-foreground prose-code:font-medium',
        'prose-code:before:content-none prose-code:after:content-none',
        'prose-pre:bg-transparent prose-pre:p-0 prose-pre:my-8',
        // Strong/Em
        'prose-strong:font-semibold prose-strong:text-foreground',
        'prose-em:italic prose-em:text-foreground/90',
        // HR - subtle divider
        'prose-hr:border-border/50 prose-hr:my-16',
        // Tables
        'prose-table:my-10',
        'prose-th:text-left prose-th:font-semibold prose-th:bg-muted/50',
        'prose-th:px-4 prose-th:py-3',
        'prose-td:border prose-td:border-border/50 prose-td:px-4 prose-td:py-3',
        'prose-th:border prose-th:border-border/50',
        // Images - generous spacing
        'prose-img:rounded-lg prose-img:shadow-lg prose-img:my-10',
        'prose-img:border prose-img:border-border/20',
        'prose-figcaption:text-center prose-figcaption:text-sm',
        'prose-figcaption:text-muted-foreground prose-figcaption:mt-3 prose-figcaption:italic',
        className
      )}
    >
      {children}
    </div>
  );
}
