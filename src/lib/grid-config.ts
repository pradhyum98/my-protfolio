export const GRID_CONFIG = {
  wrapper: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 [grid-auto-rows:var(--tile)] [--tile:16rem] sm:[--tile:18rem] lg:[--tile:20rem]",
  tile: {
    default: "col-span-1 row-span-1",
    hero: "col-span-1 row-span-2 sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2",
    wide: "col-span-1 sm:col-span-2 lg:col-span-2",
    full: "col-span-1 sm:col-span-2 lg:col-span-3",
  }
} as const
