import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import type { PostMetadata } from '@/types/writing';
import { formatDate } from '@/lib/writing-data';
import { Badge } from '@/components/ui/badge';

type WritingFeaturedProps = {
  post: PostMetadata;
};

export function WritingFeatured({ post }: WritingFeaturedProps) {
  return (
    <article className="group relative">
      <Link href={`/writing/${post.slug}`} className="block">
        {/* Hero Image (optional) */}
        {post.hero && (
          <div className="relative w-full h-[400px] md:h-[500px] mb-8 overflow-hidden rounded-lg">
            <Image
              src={post.hero}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="space-y-6">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="default" className="bg-primary/10 text-primary hover:bg-primary/20">
              Featured
            </Badge>
            <Badge variant="outline">{post.category}</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
          </div>

          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h2>

          {/* Standfirst/Excerpt */}
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
