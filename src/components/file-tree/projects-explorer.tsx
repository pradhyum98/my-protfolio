"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { PortfolioFileTree } from "./portfolio-file-tree"
import { FilePreviewPanel } from "./file-preview-panel"
import { type FileTreeFile } from "@/types/file-tree"
import { projectsFileTree, findNodeById, getAllFolderIds } from "@/lib/file-tree-data"
import { cn } from "@/lib/utils"

// ============================================================================
// PROJECTS EXPLORER - SPLIT VIEW (DESKTOP) / DRAWER (MOBILE)
// ============================================================================

export type ProjectsExplorerProps = {
  initialSelectedId?: string
  className?: string
}

export const ProjectsExplorer: React.FC<ProjectsExplorerProps> = ({
  initialSelectedId,
  className,
}) => {
  const [selectedFile, setSelectedFile] = React.useState<FileTreeFile | null>(null)
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false)

  // Initialize selected file if initialSelectedId provided
  React.useEffect(() => {
    if (initialSelectedId) {
      const node = findNodeById(projectsFileTree, initialSelectedId)
      if (node && node.type === "file") {
        setSelectedFile(node)
      }
    }
  }, [initialSelectedId])

  const handleSelectFile = React.useCallback((file: FileTreeFile) => {
    setSelectedFile(file)
    setMobileDrawerOpen(false) // Close drawer on mobile after selection

    // Perform action if file has one
    if (file.action) {
      switch (file.action.kind) {
        case "route":
          // Don't navigate, just show preview
          break
        case "link":
          if (file.action.external) {
            window.open(file.action.href, "_blank", "noopener,noreferrer")
          } else {
            window.location.href = file.action.href
          }
          break
        case "mailto":
          window.location.href = `mailto:${file.action.email}`
          break
        case "download":
          window.open(file.action.url, "_blank")
          break
      }
    }
  }, [])

  // Get all folder IDs to expand by default
  const initialExpandedItems = React.useMemo(
    () => getAllFolderIds(projectsFileTree),
    []
  )

  return (
    <div className={cn("relative", className)}>
      {/* Desktop: Split View */}
      <div className="hidden lg:grid lg:grid-cols-[300px_1fr] lg:gap-6">
        {/* File Tree */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="h-[calc(100vh-12rem)]"
        >
          <PortfolioFileTree
            data={projectsFileTree}
            onSelectFile={handleSelectFile}
            initialSelectedId={initialSelectedId}
            initialExpandedItems={initialExpandedItems}
          />
        </motion.div>

        {/* Preview Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="h-[calc(100vh-12rem)]"
        >
          <FilePreviewPanel file={selectedFile} />
        </motion.div>
      </div>

      {/* Mobile: Drawer + Preview */}
      <div className="lg:hidden space-y-4">
        {/* Drawer Trigger */}
        <Sheet open={mobileDrawerOpen} onOpenChange={setMobileDrawerOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <MenuIcon className="mr-2 h-4 w-4" />
              Browse Files {selectedFile && `(${selectedFile.name})`}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:max-w-md p-0">
            <SheetHeader className="border-b border-border px-6 py-4">
              <SheetTitle>Project Files</SheetTitle>
            </SheetHeader>
            <div className="h-[calc(100vh-80px)] overflow-hidden">
              <PortfolioFileTree
                data={projectsFileTree}
                onSelectFile={handleSelectFile}
                initialSelectedId={initialSelectedId}
                initialExpandedItems={initialExpandedItems}
                className="border-0 rounded-none h-full"
              />
            </div>
          </SheetContent>
        </Sheet>

        {/* Preview Panel */}
        <div className="min-h-[60vh]">
          <FilePreviewPanel file={selectedFile} />
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// EXPOSE SELECT NODE API (FOR TERMINAL INTEGRATION)
// ============================================================================

// Create a ref to the explorer instance
export type ProjectsExplorerHandle = {
  selectNode: (id: string) => void
  getSelectedNode: () => FileTreeFile | null
}

export const useProjectsExplorerRef = () => {
  return React.useRef<ProjectsExplorerHandle>(null)
}
