import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { getPostBySlug, getRelatedPosts, formatDate, getAllPosts } from '@/lib/writing-data';
import { ArticleProse } from '@/components/writing/article-prose';
import { ArticleToc } from '@/components/writing/article-toc';
import { ArticleBreadcrumbs } from '@/components/writing/article-breadcrumbs';
import { ReadingProgress } from '@/components/writing/reading-progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type PageProps = {
  params: { slug: string };
};

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: post.seo?.title || `${post.title} | Pradhyum Upadhyay`,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords || post.tags,
    openGraph: {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: ['Pradhyum Upadhyay'],
      tags: post.tags,
      images: post.hero ? [{ url: post.hero }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.hero ? [post.hero] : [],
    },
  };
}

export default function ArticlePage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug);

  return (
    <>
      {/* Reading Progress Bar */}
      <ReadingProgress />

      <div className="min-h-screen bg-background pt-24 md:pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Back Link */}
            <div className="mb-8">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/writing" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Writing
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <article>
                  {/* Breadcrumbs */}
                  <ArticleBreadcrumbs category={post.category} title={post.title} />

                  {/* Header */}
                  <header className="mb-12 space-y-6">
                    {/* Meta Badges */}
                    <div className="flex flex-wrap items-center gap-3">
                      {post.featured && (
                        <Badge variant="default" className="bg-primary/10 text-primary">
                          Featured
                        </Badge>
                      )}
                      <Badge variant="outline">{post.category}</Badge>
                      {post.series && (
                        <Badge variant="secondary">
                          Part {post.series.part} of {post.series.total}
                        </Badge>
                      )}
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                      {post.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-xl leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </span>
                      {post.updated && (
                        <span className="text-xs">
                          Updated {formatDate(post.updated)}
                        </span>
                      )}
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readingTime}
                      </span>
                    </div>

                    {/* Hero Image */}
                    {post.hero && (
                      <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                        <Image
                          src={post.hero}
                          alt={post.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/writing?tag=${encodeURIComponent(tag)}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </header>

                  <Separator className="my-8" />

                  {/* Content */}
                  <ArticleProse>
                    {/* In production, this would be MDX content */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </ArticleProse>

                  <Separator className="my-16" />

                  {/* Footer - Share & Actions */}
                  <footer className="space-y-8">
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(post.canonical || '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gap-2"
                        >
                          <Share2 className="h-4 w-4" />
                          Share on Twitter
                        </a>
                      </Button>
                    </div>

                    {/* Series Navigation (if applicable) */}
                    {post.series && (
                      <div className="p-6 border border-border rounded-lg space-y-3">
                        <div className="font-semibold text-sm">
                          Part {post.series.part} of {post.series.total} in "{post.series.name}"
                        </div>
                        <div className="flex gap-3">
                          {post.series.part > 1 && (
                            <Button variant="outline" size="sm">
                              ← Previous
                            </Button>
                          )}
                          {post.series.part < post.series.total && (
                            <Button variant="outline" size="sm">
                              Next →
                            </Button>
                          )}
                        </div>
                      </div>
                    )}
                  </footer>
                </article>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <section className="mt-24">
                    <h2 className="font-display text-2xl font-semibold mb-8">
                      Related Articles
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                      {relatedPosts.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/writing/${related.slug}`}
                          className="group p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
                        >
                          <Badge variant="outline" className="mb-3">
                            {related.category}
                          </Badge>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {related.excerpt}
                          </p>
                          <div className="mt-3 text-xs text-muted-foreground">
                            {related.readingTime}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Sidebar - Table of Contents */}
              <aside className="hidden lg:block lg:col-span-4">
                <ArticleToc />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
