"use client";
// Force rebuild

import { useState, useEffect, memo, useCallback, useMemo } from "react";
import { m, useReducedMotion, LazyMotion, domAnimation } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { TerminalHint } from "@/components/terminal";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { ResumeDownloadButton } from "@/components/resume-download-button";
import { copy } from "@/content/copy";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Faster stagger
      delayChildren: 0.1, // Less delay
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 }, // Reduced Y movement
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Faster animation
      ease: "easeOut" as const,
    },
  },
};

// const floatingAnimation = {
//   y: [0, -20, 0],
//   transition: {
//     duration: 3,
//     repeat: Infinity,
//     ease: "easeInOut" as any,
//   },
// }

// Memoize the Hero component for better performance
export const Hero = memo(function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [gridConfig, setGridConfig] = useState({ rows: 10, cols: 27, cellSize: 60 });

  // Memoize the grid calculation function
  const calculateGridConfig = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Target 50% of viewport height and full width
    const targetHeight = height * 0.5;
    const targetWidth = width;

    // Calculate optimal cell size (adjust for better visuals)
    const cellSize = 60; // Fixed cell size for consistency

    // Calculate cols and rows based on dimensions
    const cols = Math.ceil(targetWidth / cellSize);
    const rows = Math.ceil(targetHeight / cellSize);

    setGridConfig({ rows, cols, cellSize });
  }, []);

  useEffect(() => {
    calculateGridConfig();

    // Debounce resize handler for better performance
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(calculateGridConfig, 150);
    };

    window.addEventListener("resize", debouncedResize, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", debouncedResize);
    };
  }, [calculateGridConfig]);

  // Memoize gradient style
  const bottomGradientStyle = useMemo(() => ({
    background: 'linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background)) 20%, hsl(var(--background) / 0.95) 40%, hsl(var(--background) / 0.7) 60%, hsl(var(--background) / 0.4) 80%, transparent 100%)'
  }), []);

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-screen overflow-hidden bg-background pt-20 md:pt-24">
        {/* Background Ripple Effect Container with gradient blend */}
        <div className="absolute inset-x-0 top-0 h-[50vh] overflow-hidden z-0">
          <BackgroundRippleEffect
            rows={gridConfig.rows}
            cols={gridConfig.cols}
            cellSize={gridConfig.cellSize}
          />
          {/* Bottom gradient blur for smooth blending */}
          <div
            className="absolute inset-x-0 bottom-0 h-64 z-[2] pointer-events-none"
            style={bottomGradientStyle}
            aria-hidden="true"
          />
        </div>

        {/* Subtle radial gradient overlay for text contrast */}
        <div
          className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,transparent_0%,hsl(var(--background)/0.8)_100%)] pointer-events-none"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 py-20 pointer-events-none">
          <div className="w-full">
            <m.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mx-auto max-w-5xl text-center pointer-events-none"
            >
              {/* Floating Badge with Animated Gradient */}
              <m.div variants={item} className="mb-2 sm:mb-4 flex justify-center">
                <div className="inline-flex">
                  <div className="group relative mx-auto flex items-center justify-center rounded-full px-2 py-1 sm:px-4 sm:py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                    <span
                      className={cn(
                        shouldReduceMotion ? "" : "animate-gradient",
                        "absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                      )}
                      style={{
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "destination-out",
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "subtract",
                        WebkitClipPath: "padding-box",
                      }}
                    />
                    {/* <Sparkles className="mr-2 h-4 w-4 relative z-10" /> */}
                    <AnimatedGradientText className="text-xs sm:text-sm font-medium">
                      🚀 | {copy.hero.badge}
                    </AnimatedGradientText>
                  </div>
                </div>
              </m.div>

              {/* Subtitle */}
              <m.div variants={item}>
                <TypingAnimation
                  className="mb-10 text-xs text-foreground/80 sm:text-base md:text-lg"
                  cursorStyle="underscore"
                  startOnView={false}

                >
                  I connect data sources, engineer clean pipelines, and deliver insights that drive action, not confusion.
                </TypingAnimation>
              </m.div>

              {/* Main Heading with Sparkles */}
              <m.div variants={item} className="relative">
                <h1 className="mb-4 mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl relative z-20 whitespace-nowrap inline-flex flex-col items-center gap-2">
                  <span>Transforming Data Into</span>
                  <PointerHighlight
                    pointerClassName="text-blue-400"
                    rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                    containerClassName="inline-block"
                  >
                    <span className="px-4 py-2 inline-block relative z-20">
                      Decisions That Matter
                    </span>
                  </PointerHighlight>
                </h1>

                {/* Supporting Text */}
                <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
                  {/* Hardcoded for cache busting */}
                  Powered by <span className="font-bold text-foreground">SQL,</span> <span className="font-bold text-foreground">Python,</span> <span className="font-bold text-foreground">Excel,</span> and <span className="font-bold text-foreground">Power BI</span> to architect dashboards, automation, and insight engines
                </p>

                {/* Sparkles Effect */}
                <div className="w-full h-24 md:h-32 relative flex items-center justify-center mt-4">
                  <div className="w-full md:w-[90vw] h-full relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
                    <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
                    <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-[calc(100%-5rem)] blur-sm" />
                    <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-[calc(100%-5rem)]" />

                    {/* Core component */}
                    {!shouldReduceMotion && (
                      <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={800}
                        className="w-full h-full"
                      />
                    )}

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                  </div>
                </div>
              </m.div>

              {/* CTA Buttons */}
              <m.div
                variants={item}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row pointer-events-auto"
              >
                <HoverBorderGradient containerClassName="rounded-lg" duration={1}>
                  <Button size="lg" className="gap-2" asChild>
                    <a href="/contact" className="group">
                      <Calendar className="h-5 w-5 transition-transform group-hover:scale-110" />
                      {copy.cta.requestInterview}
                    </a>
                  </Button>
                </HoverBorderGradient>

                <Button
                  variant="outline"
                  size="lg"
                  className="hidden sm:flex group gap-2 border-foreground/20 backdrop-blur-sm hover:border-foreground/40"
                  asChild
                >
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    View Resume
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                {/* .docx link removed to avoid hydration mismatches; resume.docx is available via Downloads menu and floating dock */}

                <ResumeDownloadButton
                  variant="ghost"
                  size="lg"
                  className="hidden sm:flex"
                  label={copy.cta.downloadResume}
                />
              </m.div>

              {/* Scroll Indicator - CSS animation instead of framer-motion */}
              {!shouldReduceMotion && (
                <m.div variants={item} className="mt-20">
                  <div className="mx-auto h-8 w-5 rounded-full border-2 border-foreground/20 p-1 animate-bounce">
                    <div className="h-2 w-2 rounded-full bg-foreground/40" />
                  </div>
                </m.div>
              )}

              {/* Terminal Hint */}
              <m.div variants={item} className="mt-12 pointer-events-auto hidden md:block">
                <TerminalHint className="opacity-80 hover:opacity-100 transition-opacity scale-110" />
              </m.div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
});
