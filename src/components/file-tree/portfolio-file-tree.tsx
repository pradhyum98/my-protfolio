"use client"

import * as React from "react"
import {
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
  FileTextIcon,
  FileJsonIcon,
  VideoIcon,
  LinkIcon,
  FileCodeIcon,
} from "lucide-react"
import { Tree, Folder, File, type TreeViewElement } from "@/components/ui/file-tree"
import { type FileTreeNode, type FileTreeFile } from "@/types/file-tree"
import { cn } from "@/lib/utils"

// ============================================================================
// ICON MAPPING
// ============================================================================

const getFileIcon = (file: FileTreeFile): React.ReactNode => {
  switch (file.ext) {
    case "md":
    case "mdx":
      return <FileTextIcon className="h-4 w-4 text-blue-500" />
    case "json":
      return <FileJsonIcon className="h-4 w-4 text-yellow-500" />
    case "mp4":
      return <VideoIcon className="h-4 w-4 text-purple-500" />
    case "url":
      return <LinkIcon className="h-4 w-4 text-emerald-500" />
    case "ts":
    case "tsx":
      return <FileCodeIcon className="h-4 w-4 text-blue-600" />
    default:
      return <FileIcon className="h-4 w-4 text-zinc-500" />
  }
}

// ============================================================================
// RECURSIVE TREE RENDERER
// ============================================================================

type TreeNodeProps = {
  node: FileTreeNode
  onSelectFile?: (file: FileTreeFile) => void
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, onSelectFile }) => {
  if (node.type === "folder") {
    return (
      <Folder
        value={node.id}
        element={node.name}
        openIcon={<FolderOpenIcon className="h-4 w-4 text-emerald-500" />}
        closeIcon={<FolderIcon className="h-4 w-4 text-emerald-600" />}
      >
        {node.children.map((child) => (
          <TreeNode key={child.id} node={child} onSelectFile={onSelectFile} />
        ))}
      </Folder>
    )
  }

  return (
    <File
      value={node.id}
      fileIcon={getFileIcon(node)}
      onClick={() => onSelectFile?.(node)}
    >
      <span className="truncate">{node.name}</span>
    </File>
  )
}

// ============================================================================
// PORTFOLIO FILE TREE COMPONENT
// ============================================================================

export type PortfolioFileTreeProps = {
  data: FileTreeNode
  onSelectFile?: (file: FileTreeFile) => void
  initialSelectedId?: string
  initialExpandedItems?: string[]
  className?: string
}

export const PortfolioFileTree: React.FC<PortfolioFileTreeProps> = ({
  data,
  onSelectFile,
  initialSelectedId,
  initialExpandedItems,
  className,
}) => {
  // Convert our data to TreeViewElement format
  const elements: TreeViewElement[] = React.useMemo(() => {
    if (data.type === "folder") {
      return data.children.map((child) => convertToTreeViewElement(child))
    }
    return []
  }, [data])

  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-lg border border-border bg-card",
        className
      )}
    >
      <div className="border-b border-border bg-muted/30 px-4 py-2">
        <div className="flex items-center gap-2">
          <FolderIcon className="h-4 w-4 text-emerald-500" />
          <span className="text-sm font-medium">{data.name}</span>
        </div>
      </div>

      <div className="h-[calc(100%-40px)]">
        <Tree
          elements={elements}
          initialSelectedId={initialSelectedId}
          initialExpandedItems={initialExpandedItems}
          className="p-2"
        >
          {data.type === "folder" &&
            data.children.map((child) => (
              <TreeNode key={child.id} node={child} onSelectFile={onSelectFile} />
            ))}
        </Tree>
      </div>
    </div>
  )
}

// Helper to convert FileTreeNode to TreeViewElement
function convertToTreeViewElement(node: FileTreeNode): TreeViewElement {
  if (node.type === "folder") {
    return {
      id: node.id,
      name: node.name,
      isSelectable: true,
      children: node.children.map(convertToTreeViewElement),
    }
  }
  return {
    id: node.id,
    name: node.name,
    isSelectable: true,
  }
}
