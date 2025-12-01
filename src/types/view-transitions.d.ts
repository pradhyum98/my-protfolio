// TypeScript definitions for View Transitions API
interface Document {
  startViewTransition?(callback: () => void | Promise<void>): {
    finished: Promise<void>
    ready: Promise<void>
    updateCallbackDone: Promise<void>
  }
}
