import { MetadataRoute } from 'next'
import { projects } from '@/content/projects'
import { getAllPosts } from '@/lib/writing-data'

export const dynamic = 'force-static'

const SITE_URL = 'https://pradhyum-data-analyst.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/projects',
    '/skills',
    '/experience',
    '/contact',
    '/docs',
    '/writing',
    '/services',
    '/projects-explorer',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Project pages
  const projectPages = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Writing/blog posts
  const posts = getAllPosts()
  const writingPages = posts.map((post) => ({
    url: `${SITE_URL}/writing/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...projectPages, ...writingPages]
}

