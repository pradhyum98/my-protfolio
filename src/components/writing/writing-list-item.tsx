import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import type { PostMetadata } from '@/types/writing';
import { formatDate } from '@/lib/writing-data';
import { Badge } from '@/components/ui/badge';

type WritingListItemProps = {
  post: PostMetadata;
};

export function WritingListItem({ post }: WritingListItemProps) {
  return (
    <article className="group py-8 border-b border-border/50 last:border-0">
      <Link href={`/writing/${post.slug}`} className="block space-y-4">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Badge variant="outline" className="font-normal">
            {post.category}
          </Badge>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
          {post.updated && (
            <span className="text-muted-foreground text-xs">
              Updated {formatDate(post.updated)}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight leading-tight group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-base leading-relaxed text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-muted-foreground/70 hover:text-foreground transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
