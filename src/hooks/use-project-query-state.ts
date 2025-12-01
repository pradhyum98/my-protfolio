import { useState, useEffect, useCallback } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"

type ViewMode = "list" | "grid"

type SortOption = "recent" | "alpha" | "impact"

export type ProjectFilters = {
  search: string
  domain: string
  stack: string
  tag: string
  year: string
  status: string
}

export type ProjectQueryState = {
  filters: ProjectFilters
  sort: SortOption
  view: ViewMode
}

const DEFAULT_FILTERS: ProjectFilters = {
  search: "",
  domain: "all",
  stack: "all",
  tag: "all",
  year: "all",
  status: "all",
}

const STORAGE_KEY = "projects-explorer-preferences"

export const useProjectQueryState = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Initialize state from URL params only (consistent on server and client)
  const [state, setState] = useState<ProjectQueryState>(() => {
    const urlSearch = searchParams.get("q") || ""
    const urlDomain = searchParams.get("domain") || "all"
    const urlStack = searchParams.get("stack") || "all"
    const urlTag = searchParams.get("tag") || "all"
    const urlYear = searchParams.get("year") || "all"
    const urlStatus = searchParams.get("status") || "all"
    const urlSort = (searchParams.get("sort") as SortOption) || "recent"
    const urlView = (searchParams.get("view") as ViewMode) || "list"

    return {
      filters: {
        search: urlSearch,
        domain: urlDomain,
        stack: urlStack,
        tag: urlTag,
        year: urlYear,
        status: urlStatus,
      },
      sort: urlSort,
      view: urlView,
    }
  })

  // After hydration, apply localStorage preference if no URL view param
  useEffect(() => {
    // Only apply localStorage if view is not in URL
    if (!searchParams.get("view")) {
      try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
          const parsed = JSON.parse(saved)
          if (parsed.view && parsed.view !== state.view) {
            setState((prev) => ({ ...prev, view: parsed.view }))
          }
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_e) {
        // Ignore parsing errors
      }
    }
    // Only run once after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Sync to URL
  const syncToUrl = useCallback(
    (newState: ProjectQueryState) => {
      const params = new URLSearchParams()

      if (newState.filters.search) params.set("q", newState.filters.search)
      if (newState.filters.domain !== "all") params.set("domain", newState.filters.domain)
      if (newState.filters.stack !== "all") params.set("stack", newState.filters.stack)
      if (newState.filters.tag !== "all") params.set("tag", newState.filters.tag)
      if (newState.filters.year !== "all") params.set("year", newState.filters.year)
      if (newState.filters.status !== "all") params.set("status", newState.filters.status)
      if (newState.sort !== "recent") params.set("sort", newState.sort)
      if (newState.view !== "list") params.set("view", newState.view)

      const queryString = params.toString()
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname

      router.replace(newUrl, { scroll: false })
    },
    [pathname, router]
  )

  // Sync to localStorage (view preference only)
  const syncToStorage = useCallback((newState: ProjectQueryState) => {
    if (typeof window === "undefined") return
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ view: newState.view })
      )
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_e) {
      // Ignore storage errors
    }
  }, [])

  // Update state and sync
  const updateState = useCallback(
    (updates: Partial<ProjectQueryState>) => {
      setState((prev) => {
        const newState = {
          ...prev,
          ...updates,
          filters: updates.filters ? { ...prev.filters, ...updates.filters } : prev.filters,
        }
        syncToStorage(newState)
        return newState
      })
    },
    [syncToStorage]
  )

  // Sync to URL in effect (not during render)
  useEffect(() => {
    syncToUrl(state)
  }, [state, syncToUrl])

  // Convenience methods
  const setSearch = useCallback(
    (search: string) => updateState({ filters: { ...state.filters, search } }),
    [state.filters, updateState]
  )

  const setFilter = useCallback(
    (key: keyof ProjectFilters, value: string) =>
      updateState({ filters: { ...state.filters, [key]: value } }),
    [state.filters, updateState]
  )

  const setSort = useCallback(
    (sort: SortOption) => updateState({ sort }),
    [updateState]
  )

  const setView = useCallback(
    (view: ViewMode) => updateState({ view }),
    [updateState]
  )

  const clearFilters = useCallback(() => {
    updateState({ filters: DEFAULT_FILTERS })
  }, [updateState])

  const hasActiveFilters = Boolean(
    state.filters.search ||
      state.filters.domain !== "all" ||
      state.filters.stack !== "all" ||
      state.filters.tag !== "all" ||
      state.filters.year !== "all" ||
      state.filters.status !== "all"
  )

  return {
    filters: state.filters,
    sort: state.sort,
    view: state.view,
    setSearch,
    setFilter,
    setSort,
    setView,
    clearFilters,
    hasActiveFilters,
  }
}
