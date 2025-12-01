// ============================================================================
// FILE TREE DATA MODEL
// ============================================================================

export type FileType = "mdx" | "json" | "url" | "mp4" | "ts" | "tsx" | "md"

export type FileAction =
  | { kind: "route"; href: string }
  | { kind: "link"; href: string; external?: boolean }
  | { kind: "mailto"; email: string }
  | { kind: "download"; url: string }

export type FileTreeNode = FileTreeFolder | FileTreeFile

export type FileTreeFolder = {
  type: "folder"
  id: string
  name: string
  path: string
  children: FileTreeNode[]
  meta?: Record<string, string>
  icon?: React.ReactNode
}

export type FileTreeFile = {
  type: "file"
  id: string
  name: string
  path: string
  ext?: FileType
  meta?: Record<string, string>
  action?: FileAction
  icon?: React.ReactNode
  preview?: FilePreviewContent
}

// Preview content types
export type FilePreviewContent =
  | { type: "project"; projectId: string }
  | { type: "skill"; category: string; skillName: string }
  | { type: "contact"; method: string }
  | { type: "markdown"; content: string }
  | { type: "json"; data: unknown }
  | { type: "video"; url: string }
  | { type: "image"; url: string; alt: string }

// Convert our FileTreeNode to MagicUI TreeViewElement
export type TreeViewElement = {
  id: string
  name: string
  isSelectable?: boolean
  children?: TreeViewElement[]
}

export const fileTreeNodeToTreeViewElement = (
  node: FileTreeNode
): TreeViewElement => {
  if (node.type === "folder") {
    return {
      id: node.id,
      name: node.name,
      isSelectable: true,
      children: node.children.map(fileTreeNodeToTreeViewElement),
    }
  }
  return {
    id: node.id,
    name: node.name,
    isSelectable: true,
  }
}
