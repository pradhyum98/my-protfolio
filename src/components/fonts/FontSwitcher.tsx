"use client";

import { useState, useMemo, useEffect } from "react";
import { useFonts } from "./FontProvider";
import { FONT_PAIRS, DEFAULT_FONT_PAIR } from "@/styles/fonts";
import { Type, X, RotateCcw, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Font preset categories
const FONT_PRESETS = {
  all: "All Fonts",
  modern: "Modern & Tech",
  editorial: "Editorial & Classic",
  creative: "Bold & Creative",
  professional: "Professional & Clean",
} as const;

type PresetKey = keyof typeof FONT_PRESETS;

export const FontSwitcher = () => {
  const { currentPair, setPair, scale, setScale, isLoaded } = useFonts();
  const [isOpen, setIsOpen] = useState(false);
  const [activePreset, setActivePreset] = useState<PresetKey>("all");

  const fontPairs = Object.values(FONT_PAIRS);

  // ✅ All hooks MUST be called before any conditional returns!
  // Filter fonts based on preset
  const filteredFonts = useMemo(() => {
    if (activePreset === "all") return fontPairs;

    const presetMap: Record<Exclude<PresetKey, "all">, string[]> = {
      modern: ["space_inter", "outfit_sora", "lexend_manrope", "poppins_inter"],
      editorial: ["playfair_source", "cormorant_manrope", "merriweather_work", "dm_opensans"],
      creative: ["bebas_inter", "syne_inter", "fraunces_inter", "raleway_nunito"],
      professional: ["jakarta_inter", "ibmplex_ibmplex", "redhat_redhat", "poppins_inter"],
    };

    const allowedIds = presetMap[activePreset] || [];
    return fontPairs.filter((pair) => allowedIds.includes(pair.id));
  }, [activePreset, fontPairs]);

  const handleReset = () => {
    setPair(DEFAULT_FONT_PAIR);
    setScale(100);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // ✅ ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // ✅ NOW we can do conditional rendering AFTER all hooks
  if (!isLoaded) return null;

  return (
    <>
      {/* Floating Toggle Button - TOP RIGHT (avoiding terminal button at bottom-right) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-40 flex h-12 items-center gap-2 rounded-full border border-border/50 bg-background/80 px-4 shadow-lg backdrop-blur-xl transition-all hover:scale-105 hover:shadow-xl hover:border-primary/50"
        aria-label="Open typography settings"
      >
        <Type className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium hidden sm:inline">Fonts</span>
      </motion.button>

      {/* Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />

            {/* Panel - Slide from right on desktop, bottom on mobile */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-background border-l border-border shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border p-4 shrink-0">
                <div className="flex items-center gap-2">
                  <Type className="h-5 w-5 text-primary" />
                  <h2 className="font-display text-lg font-semibold">Typography</h2>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleReset}
                    className="rounded-lg p-2 transition-colors hover:bg-muted"
                    title="Reset to default"
                    aria-label="Reset to default fonts"
                  >
                    <RotateCcw className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <button
                    onClick={handleClose}
                    className="rounded-lg p-2 transition-colors hover:bg-muted"
                    aria-label="Close typography settings"
                  >
                    <X className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {/* Current Selection */}
                <div className="rounded-xl border border-border bg-muted/20 p-4">
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
                    Current
                  </div>
                  <div className="font-display text-base font-semibold">
                    {currentPair.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {currentPair.tone}
                  </div>
                </div>

                {/* Font Scale Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Base Size</label>
                    <span className="font-mono text-sm font-semibold text-primary">
                      {scale}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="90"
                    max="115"
                    step="1"
                    value={scale}
                    onChange={(e) => setScale(Number(e.target.value))}
                    className="w-full h-2 accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Smaller</span>
                    <span>Larger</span>
                  </div>
                </div>

                {/* Preset Filters */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Filter className="h-4 w-4" />
                    <span>Filter by Style</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(FONT_PRESETS) as PresetKey[]).map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setActivePreset(preset)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          activePreset === preset
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {FONT_PRESETS[preset]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Pair Grid */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">
                    Select Font Pair ({filteredFonts.length})
                  </div>
                  <div className="space-y-2">
                    {filteredFonts.map((pair) => (
                      <button
                        key={pair.id}
                        onClick={() => {
                          setPair(pair.id);
                        }}
                        className={`w-full text-left rounded-lg border p-3 transition-all ${
                          currentPair.id === pair.id
                            ? "border-primary bg-primary/10 shadow-sm"
                            : "border-border hover:border-primary/50 hover:bg-muted/50"
                        }`}
                      >
                        <div className="font-display font-semibold text-sm">
                          {pair.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {pair.tone}
                        </div>
                        <div className="text-xs text-muted-foreground/70 mt-1 line-clamp-1">
                          {pair.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Preview */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Preview</div>
                  <div className="rounded-lg border border-border bg-muted/20 p-4 space-y-2">
                    <div className="font-display text-2xl font-bold">
                      Display Font
                    </div>
                    <div className="font-sans text-sm text-muted-foreground leading-relaxed">
                      Body text with excellent readability for all content types.
                      The quick brown fox jumps over the lazy dog.
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      Code: const hello = "world";
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-border p-4 shrink-0 bg-muted/20">
                <div className="text-xs text-center text-muted-foreground">
                  <kbd className="px-1.5 py-0.5 rounded bg-background border border-border font-mono text-xs">
                    ESC
                  </kbd>{" "}
                  to close
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
