"use client";

import { useState, useMemo } from "react";
import { useFonts } from "@/components/fonts/FontProvider";
import { FONT_PAIRS, DEFAULT_FONT_PAIR } from "@/styles/fonts";
import { Type, RotateCcw, Filter, ChevronDown } from "lucide-react";
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

export const FontModule = () => {
  const { currentPair, setPair, scale, setScale } = useFonts();
  const [activePreset, setActivePreset] = useState<PresetKey>("all");
  const [showPreview, setShowPreview] = useState(true);

  const fontPairs = Object.values(FONT_PAIRS);

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
    setActivePreset("all");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Type className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Typography</h3>
            <p className="text-xs text-muted-foreground">Customize fonts & size</p>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="rounded-lg p-2 transition-colors hover:bg-muted"
          title="Reset to default"
          aria-label="Reset typography to default"
        >
          <RotateCcw className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>

      {/* Current Selection Card */}
      <motion.div
        layout
        className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-4"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
              Active Font
            </div>
            <div className="font-display text-base font-semibold">
              {currentPair.name}
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              {currentPair.tone}
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-2xl font-bold text-primary">
              {scale}%
            </div>
            <div className="text-xs text-muted-foreground">Size</div>
          </div>
        </div>
      </motion.div>

      {/* Font Scale Slider */}
      <div className="space-y-3">
        <label className="text-sm font-medium">Base Font Size</label>
        <div className="relative">
          <input
            type="range"
            min="90"
            max="115"
            step="1"
            value={scale}
            onChange={(e) => setScale(Number(e.target.value))}
            className="w-full h-2 accent-primary cursor-pointer"
          />
          {/* Scale indicators */}
          <div className="flex justify-between mt-1 text-xs text-muted-foreground/60">
            <span>90%</span>
            <span>100%</span>
            <span>115%</span>
          </div>
        </div>
      </div>

      {/* Preset Filters */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filter Styles</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(FONT_PRESETS) as PresetKey[]).map((preset) => (
            <button
              key={preset}
              onClick={() => setActivePreset(preset)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activePreset === preset
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              {FONT_PRESETS[preset]}
            </button>
          ))}
        </div>
      </div>

      {/* Font Pair List */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">
            Available Fonts ({filteredFonts.length})
          </span>
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            Preview
            <ChevronDown className={`h-3 w-3 transition-transform ${showPreview ? "rotate-180" : ""}`} />
          </button>
        </div>

        <div className="max-h-64 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
          {filteredFonts.map((pair) => (
            <motion.button
              key={pair.id}
              layout
              onClick={() => setPair(pair.id)}
              className={`w-full text-left rounded-lg border p-3 transition-all ${
                currentPair.id === pair.id
                  ? "border-primary bg-primary/5 shadow-sm shadow-primary/10"
                  : "border-border hover:border-primary/30 hover:bg-muted/30"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-sm truncate">
                    {pair.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {pair.tone}
                  </div>
                </div>
                {currentPair.id === pair.id && (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    ✓
                  </div>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Live Preview */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-lg border border-border/50 bg-muted/20 p-4 space-y-2">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Live Preview
              </div>
              <div className="font-display text-xl font-bold">
                Display Font
              </div>
              <div className="font-sans text-sm text-muted-foreground leading-relaxed">
                Body text with excellent readability. The quick brown fox jumps over the lazy dog.
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                Code: const hello = "world";
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

