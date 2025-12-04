'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Download, Hash } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { CodeBlock } from '@/components/docs/code-block';
import { CodeTabs } from '@/components/docs/code-tabs';
import { SmartLink } from '@/components/ui/smart-link';
import { DocsBreadcrumbs } from '@/components/docs/breadcrumbs';
import { DocsToc } from '@/components/docs/toc';
import { PrevNextNav } from '@/components/docs/prev-next-nav';
import { Prose } from '@/components/docs/prose';
import { Callout } from '@/components/docs/callout';
import { getDocByFileName, getDocNavigation } from '@/lib/docs-config';



type DocData = {
  content: string;
  mdx: MDXRemoteSerializeResult;
  title: string;
};

const getDocContent = async (slug: string): Promise<DocData | null> => {
  try {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Docs] Fetching:', slug);
    }

    const response = await fetch(`/api/docs/${slug}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[Docs] Document not found: ${slug} (${response.status})`);
      }
      return null;
    }

    const data = await response.json();

    if (!data.content || !data.mdx || !data.title) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Docs] Invalid data structure for:', slug);
      }
      return null;
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('[Docs] Successfully loaded:', data.title);
    }

    return data;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[Docs] Fetch error:', error);
    }
    return null;
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable local-rules/no-hardcoded-strings */

type ComponentProps = {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  id?: string;
  [key: string]: any;
};

// Heading with anchor link
const createHeading = (level: number) => {
  const HeadingComponent = ({ children, id, ...props }: ComponentProps) => {
    const headingId = id || (typeof children === 'string'
      ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      : '');

    const headingProps = {
      id: headingId,
      className: "group relative scroll-mt-24",
      ...props,
    };

    const anchor = (
      <a
        href={`#${headingId}`}
        className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={`Link to ${children}`}
      >
        <Hash className="w-4 h-4 text-muted-foreground hover:text-primary" />
      </a>
    );

    switch (level) {
      case 1:
        return <h1 {...headingProps}>{anchor}{children}</h1>;
      case 2:
        return <h2 {...headingProps}>{anchor}{children}</h2>;
      case 3:
        return <h3 {...headingProps}>{anchor}{children}</h3>;
      case 4:
        return <h4 {...headingProps}>{anchor}{children}</h4>;
      default:
        return <h2 {...headingProps}>{anchor}{children}</h2>;
    }
  };

  HeadingComponent.displayName = `Heading${level}`;
  return HeadingComponent;
};

const components = {
  CodeBlock,
  CodeTabs,
  Callout,
  pre: ({ children, ...props }: ComponentProps) => {
    if (React.isValidElement(children)) {
      const childProps = children.props as any;
      if (childProps?.className?.startsWith('language-')) {
        const language = childProps.className.replace('language-', '');
        const code = childProps.children;

        return (
          <CodeBlock
            code={typeof code === 'string' ? code : String(code || '')}
            language={language}
            showLineNumbers={language !== 'bash' && language !== 'sh'}
          />
        );
      }
    }

    return (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4 text-sm font-mono" {...props}>
        {children}
      </pre>
    );
  },
  code: ({ children, className, ...props }: ComponentProps) => {
    if (!className) {
      return (
        <code
          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground"
          {...props}
        >
          {children}
        </code>
      );
    }
    return <code className={className} {...props}>{children}</code>;
  },
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  p: ({ children }: ComponentProps) => <p>{children}</p>,
  ul: ({ children }: ComponentProps) => <ul>{children}</ul>,
  ol: ({ children }: ComponentProps) => <ol>{children}</ol>,
  li: ({ children }: ComponentProps) => <li>{children}</li>,
  a: ({ href, children }: ComponentProps) => {
    if (!href) return <a>{children}</a>;

    return (
      <SmartLink href={href}>
        {children}
      </SmartLink>
    );
  },
  blockquote: ({ children }: ComponentProps) => <blockquote>{children}</blockquote>,
  table: ({ children }: ComponentProps) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }: ComponentProps) => (
    <th className="border px-4 py-2 bg-muted font-semibold text-left">{children}</th>
  ),
  td: ({ children }: ComponentProps) => (
    <td className="border px-4 py-2">{children}</td>
  ),
  img: ({ src, alt, ...props }: ComponentProps) => (
    <img src={src} alt={alt} className="rounded-lg shadow-md my-8" {...props} />
  ),
  hr: () => <hr className="my-12 border-border" />,
};

export default function DocClient() {
  const params = useParams();
  const router = useRouter();
  const [docData, setDocData] = useState<DocData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fileName = params?.slug as string;
  const docMeta = getDocByFileName(fileName);
  const navigation = getDocNavigation(fileName);

  useEffect(() => {
    const loadDoc = async () => {
      if (!params?.slug) return;

      try {
        const doc = await getDocContent(params.slug as string);
        if (!doc) {
          setError('Document not found');
          setTimeout(() => router.push('/docs'), 3000);
          return;
        }
        setDocData(doc);
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to load document:', err);
        }
        setError('Failed to load document');
        setTimeout(() => router.push('/docs'), 3000);
      } finally {
        setIsLoading(false);
      }
    };

    loadDoc();
  }, [params?.slug, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <div className="text-muted-foreground">Loading documentation...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-foreground">{error}</h2>
            <p className="text-muted-foreground mb-6">
              The document you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Redirecting to docs in <span className="font-semibold">3 seconds</span>...
            </p>
          </div>
          <div className="flex gap-3 justify-center">
            <Link href="/docs">
              <Button>Browse Documentation</Button>
            </Link>
            <Link href="/">
              <Button variant="outline">Go Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!docData) {
    return null;
  }

  return (
    <div className="max-w-5xl">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 -mx-4 px-4 py-4 bg-background/80 backdrop-blur-md border-b border-border mb-8 lg:hidden">
        <div className="flex items-center justify-between">
          <Link href="/docs">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => {
              const blob = new Blob([docData.content], { type: 'text/markdown' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = fileName;
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <article>
            {/* Breadcrumbs */}
            <DocsBreadcrumbs
              category={docMeta?.category}
              title={docData.title}
            />

            {/* Title */}
            <header className="mb-8 relative">
              {/* Accent decoration */}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 rounded-full opacity-60" />

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-red-400">
                {docData.title}
              </h1>
              {docMeta?.description && (
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {docMeta.description}
                </p>
              )}
            </header>

            {/* Content */}
            <Prose>
              <MDXRemote {...docData.mdx} components={components} />
            </Prose>

            {/* Navigation */}
            <PrevNextNav prev={navigation.prev} next={navigation.next} />
          </article>
        </div>

        {/* Table of Contents */}
        <aside className="hidden lg:block lg:col-span-4">
          <div className="sticky top-24">
            {/* Download Button */}
            <Button
              variant="outline"
              size="sm"
              className="gap-2 w-full mb-6"
              onClick={() => {
                const blob = new Blob([docData.content], { type: 'text/markdown' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              <Download className="w-4 h-4" />
              Download
            </Button>

            <DocsToc />
          </div>
        </aside>
      </div>
    </div>
  );
}
