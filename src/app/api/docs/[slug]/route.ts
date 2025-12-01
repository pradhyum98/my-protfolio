import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_request: Request, { params }: Params) {
  try {
    const resolvedParams = await params;
    const docsDirectory = join(process.cwd(), 'docs');
    const filePath = join(docsDirectory, resolvedParams.slug);

    // Security: Ensure the file is within the docs directory
    if (!filePath.startsWith(docsDirectory)) {
      return NextResponse.json(
        { error: 'Invalid file path' },
        { status: 400 }
      );
    }

    const content = await readFile(filePath, 'utf8');

    // Extract title from first heading
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1] : resolvedParams.slug.replace('.md', '');

    // Try MDX processing, but fallback to plain content if it fails
    let mdx;
    try {
      // Process markdown with custom code block handling
      const processedContent = content.replace(
        /```(\w+)?\s*(?:filename=["']?([^"'\n]+)["']?)?\s*\n([\s\S]*?)```/g,
        (_match, lang, filename, code) => {
          const language = lang || 'text';
          const filenameProp = filename ? `filename="${filename}"` : '';

          // Escape backticks and dollars in code
          const escapedCode = code.trim().replace(/`/g, '\\`').replace(/\$/g, '\\$');

          return `<CodeBlock code={\`${escapedCode}\`} language="${language}" ${filenameProp} />`;
        }
      );

      // Serialize MDX
      mdx = await serialize(processedContent, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [],
          development: process.env.NODE_ENV === 'development',
        },
        parseFrontmatter: true,
      });
    } catch (mdxError) {
      console.error('MDX processing failed, using plain markdown:', mdxError);
      // Fallback: Just serialize the original content without code block conversion
      mdx = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [],
          development: process.env.NODE_ENV === 'development',
        },
        parseFrontmatter: true,
      });
    }

    return NextResponse.json({ content, mdx, title });
  } catch (error) {
    console.error('Error processing doc:', error);
    return NextResponse.json(
      { error: 'File not found' },
      { status: 404 }
    );
  }
}
