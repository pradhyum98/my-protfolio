"use client";

import { cn } from "@/lib/utils";

type ShowcaseBentoProps = {
  children: React.ReactNode;
  className?: string;
};

export function ShowcaseBento({ children, className }: ShowcaseBentoProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[minmax(280px,auto)] grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}
