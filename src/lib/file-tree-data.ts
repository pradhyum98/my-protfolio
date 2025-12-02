import { FileTreeNode } from "@/types/file-tree"
import { getFeaturedProjects } from "@/content/projects"

// ============================================================================
// PROJECTS FILE TREE DATA
// ============================================================================

export const projectsFileTree: FileTreeNode = {
  type: "folder",
  id: "projects",
  name: "projects",
  path: "/projects",
  children: getFeaturedProjects().map((project) => ({
    type: "folder" as const,
    id: project.slug,
    name: project.slug,
    path: `/projects/${project.slug}`,
    children: [
      {
        type: "file" as const,
        id: `${project.slug}-readme`,
        name: "README.md",
        path: `/projects/${project.slug}/README.md`,
        ext: "md" as const,
        preview: {
          type: "markdown" as const,
          content: `# ${project.title}

## Summary
${project.summary}

## Role & Dates
**${project.role}** | ${project.dates}${project.company ? ` | ${project.company}` : ""}

## Domain & Stack
**Domain:** ${project.domain}
**Tech Stack:** ${project.stack.join(", ")}

## Challenge
${project.challenge || "N/A"}

## Solution
${project.solution || "N/A"}

## Key Contributions
${project.contributions.map((c, i) => `${i + 1}. ${c}`).join("\n")}

## Results & Impact
${project.results.map((r, i) => `${i + 1}. ${r}`).join("\n")}

${project.nextSteps ? `## What's Next\n${project.nextSteps}` : ""}

## Links
${project.links.map((link) => `- [${link.label}](${link.href})`).join("\n")}
`,
        },
        action: {
          kind: "route" as const,
          href: "/projects",
        },
      },
      {
        type: "file" as const,
        id: `${project.slug}-architecture`,
        name: "architecture.mdx",
        path: `/projects/${project.slug}/architecture.mdx`,
        ext: "mdx" as const,
        preview: {
          type: "markdown" as const,
          content: `# Architecture & Tech Stack

## Overview
${project.architecture || "Architecture details coming soon."}

## Tech Stack
${project.stack.map((tech) => `- **${tech}**`).join("\n")}

## Tags
${project.tags.map((tag) => `\`${tag}\``).join(", ")}
`,
        },
      },
      {
        type: "file" as const,
        id: `${project.slug}-results`,
        name: "results.json",
        path: `/projects/${project.slug}/results.json`,
        ext: "json" as const,
        preview: {
          type: "json" as const,
          data: {
            slug: project.slug,
            title: project.title,
            role: project.role,
            dates: project.dates,
            company: project.company,
            domain: project.domain,
            results: project.results,
            contributions: project.contributions,
            context: project.context,
            nextSteps: project.nextSteps,
          },
        },
      },
      ...(project.links
        .filter((link) => link.href !== "[ADD LINK]")
        .map((link, idx) => ({
          type: "file" as const,
          id: `${project.slug}-link-${idx}`,
          name: `${link.label.toLowerCase().replace(/\s+/g, "-")}.url`,
          path: `/projects/${project.slug}/${link.label.toLowerCase().replace(/\s+/g, "-")}.url`,
          ext: "url" as const,
          action: {
            kind: "link" as const,
            href: link.href,
            external: true,
          },
        }))),
    ],
  })),
}

// ============================================================================
// SKILLS FILE TREE DATA
// ============================================================================

export const skillsFileTree: FileTreeNode = {
  type: "folder",
  id: "skills",
  name: "skills",
  path: "/skills",
  children: [
    {
      type: "folder",
      id: "frontend",
      name: "frontend",
      path: "/skills/frontend",
      children: [
        {
          type: "file",
          id: "frontend-react",
          name: "react.json",
          path: "/skills/frontend/react.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "frontend",
            skillName: "React",
          },
        },
        {
          type: "file",
          id: "frontend-nextjs",
          name: "nextjs.json",
          path: "/skills/frontend/nextjs.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "frontend",
            skillName: "Next.js",
          },
        },
        {
          type: "file",
          id: "frontend-typescript",
          name: "typescript.json",
          path: "/skills/frontend/typescript.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "frontend",
            skillName: "TypeScript",
          },
        },
      ],
    },
    {
      type: "folder",
      id: "backend",
      name: "backend",
      path: "/skills/backend",
      children: [
        {
          type: "file",
          id: "backend-nodejs",
          name: "nodejs.json",
          path: "/skills/backend/nodejs.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "backend",
            skillName: "Node.js",
          },
        },
        {
          type: "file",
          id: "backend-nestjs",
          name: "nestjs.json",
          path: "/skills/backend/nestjs.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "backend",
            skillName: "Nest.js",
          },
        },
      ],
    },
    {
      type: "folder",
      id: "cloud",
      name: "cloud",
      path: "/skills/cloud",
      children: [
        {
          type: "file",
          id: "cloud-firebase",
          name: "firebase.json",
          path: "/skills/cloud/firebase.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "cloud",
            skillName: "Firebase",
          },
        },
        {
          type: "file",
          id: "cloud-gcp",
          name: "gcp.json",
          path: "/skills/cloud/gcp.json",
          ext: "json",
          preview: {
            type: "skill",
            category: "cloud",
            skillName: "GCP",
          },
        },
      ],
    },
  ],
}

// ============================================================================
// CONTACT FILE TREE DATA
// ============================================================================

export const contactFileTree: FileTreeNode = {
  type: "folder",
  id: "contact",
  name: "contact",
  path: "/contact",
  children: [
    {
      type: "file",
      id: "contact-booking",
      name: "booking.url",
      path: "/contact/booking.url",
      ext: "url",
      preview: {
        type: "contact",
        method: "booking",
      },
      action: {
        kind: "link",
        href: "[ADD BOOKING LINK]",
        external: true,
      },
    },
    {
      type: "file",
      id: "contact-email",
      name: "email.url",
      path: "/contact/email.url",
      ext: "url",
      preview: {
        type: "contact",
        method: "email",
      },
      action: {
        kind: "mailto",
        email: "pradhyum2098@gmail.com",
      },
    },
    {
      type: "file",
      id: "contact-linkedin",
      name: "linkedin.url",
      path: "/contact/linkedin.url",
      ext: "url",
      preview: {
        type: "contact",
        method: "linkedin",
      },
      action: {
        kind: "link",
        href: "https://www.linkedin.com/in/luv-jeri",
        external: true,
      },
    },
    {
      type: "file",
      id: "contact-github",
      name: "github.url",
      path: "/contact/github.url",
      ext: "url",
      preview: {
        type: "contact",
        method: "github",
      },
      action: {
        kind: "link",
        href: "https://github.com/pradhyum98",
        external: true,
      },
    },
  ],
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

// Find a node by ID in the tree
export const findNodeById = (
  tree: FileTreeNode,
  id: string
): FileTreeNode | null => {
  if (tree.id === id) return tree

  if (tree.type === "folder") {
    for (const child of tree.children) {
      const found = findNodeById(child, id)
      if (found) return found
    }
  }

  return null
}

// Find a node by path in the tree
export const findNodeByPath = (
  tree: FileTreeNode,
  path: string
): FileTreeNode | null => {
  if (tree.path === path) return tree

  if (tree.type === "folder") {
    for (const child of tree.children) {
      const found = findNodeByPath(child, path)
      if (found) return found
    }
  }

  return null
}

// Get all file IDs from a tree
export const getAllFileIds = (tree: FileTreeNode): string[] => {
  if (tree.type === "file") return [tree.id]

  return tree.children.flatMap(getAllFileIds)
}

// Get all folder IDs from a tree
export const getAllFolderIds = (tree: FileTreeNode): string[] => {
  if (tree.type === "file") return []

  return [tree.id, ...tree.children.flatMap(getAllFolderIds)]
}
