import { cn } from '@/lib/utils';

type ProseProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Prose Component
 * Editorial typography wrapper for documentation content
 * Optimized for readability with comfortable measure and line height
 */
export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        // Base prose styles
        'prose prose-neutral dark:prose-invert max-w-none',
        // Comfortable measure (60-75 characters)
        'prose-lg md:prose-xl',
        // Headings
        'prose-headings:font-semibold prose-headings:tracking-tight',
        'prose-headings:scroll-mt-24', // Offset for sticky header
        'prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-8 prose-h1:mt-12 prose-h1:first:mt-0',
        'prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-12 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border',
        'prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-8',
        'prose-h4:text-xl prose-h4:font-semibold prose-h4:mb-3 prose-h4:mt-6',
        // Paragraphs
        'prose-p:leading-relaxed prose-p:mb-6',
        'prose-p:text-muted-foreground',
        // Links
        'prose-a:text-foreground prose-a:underline prose-a:decoration-primary/30',
        'prose-a:underline-offset-4 prose-a:transition-colors',
        'hover:prose-a:decoration-primary hover:prose-a:text-primary',
        'prose-a:font-medium',
        // Lists
        'prose-ul:my-6 prose-ul:space-y-2',
        'prose-ol:my-6 prose-ol:space-y-2',
        'prose-li:text-muted-foreground prose-li:leading-relaxed',
        'prose-li:marker:text-primary',
        // Blockquotes
        'prose-blockquote:border-l-4 prose-blockquote:border-primary',
        'prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-6',
        'prose-blockquote:text-muted-foreground',
        // Code
        'prose-code:text-sm prose-code:font-mono',
        'prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5',
        'prose-code:rounded prose-code:text-foreground',
        'prose-code:before:content-none prose-code:after:content-none',
        'prose-pre:bg-transparent prose-pre:p-0 prose-pre:my-6',
        // Strong/Em
        'prose-strong:font-semibold prose-strong:text-foreground',
        'prose-em:italic',
        // HR
        'prose-hr:border-border prose-hr:my-12',
        // Tables
        'prose-table:my-8',
        'prose-th:text-left prose-th:font-semibold prose-th:bg-muted',
        'prose-td:border prose-td:border-border',
        'prose-th:border prose-th:border-border',
        // Images
        'prose-img:rounded-lg prose-img:shadow-md prose-img:my-8',
        'prose-figcaption:text-center prose-figcaption:text-sm',
        'prose-figcaption:text-muted-foreground prose-figcaption:mt-2',
        className
      )}
    >
      {children}
    </div>
  );
}
