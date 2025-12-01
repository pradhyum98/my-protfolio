"use client";

import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type SparklesTextProps = {
  children: ReactNode;
  className?: string;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
};

type Sparkle = {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
  scale: number;
  duration: number;
};

export function SparklesText({
  children,
  className,
  sparklesCount = 10,
  colors = { first: "#A07CFE", second: "#FE8FB5" },
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < sparklesCount; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: Math.random() > 0.5 ? colors.first : colors.second,
          delay: Math.random() * 2,
          scale: 0.4 + Math.random() * 0.6,
          duration: 1 + Math.random() * 2,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);

    return () => clearInterval(interval);
  }, [sparklesCount, colors]);

  return (
    <span className={cn("relative inline-block", className)}>
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="pointer-events-none absolute"
          style={
            {
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              "--sparkle-delay": `${sparkle.delay}s`,
              "--sparkle-duration": `${sparkle.duration}s`,
            } as CSSProperties
          }
        >
          <svg
            className="animate-sparkle"
            style={
              {
                animationDelay: `var(--sparkle-delay)`,
                animationDuration: `var(--sparkle-duration)`,
                width: `${sparkle.scale * 10}px`,
                height: `${sparkle.scale * 10}px`,
              } as CSSProperties
            }
            viewBox="0 0 160 160"
            fill="none"
          >
            <path
              d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
              fill={sparkle.color}
            />
          </svg>
        </span>
      ))}
      <span className="relative z-10">{children}</span>
      <style jsx>{`
        @keyframes sparkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-sparkle {
          animation: sparkle var(--sparkle-duration, 2s) ease-in-out infinite;
        }
      `}</style>
    </span>
  );
}
