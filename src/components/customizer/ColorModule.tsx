"use client";

import { useState } from "react";
import { Palette, Check } from "lucide-react";
import { motion } from "framer-motion";

// Placeholder color themes
const COLOR_THEMES = [
  { id: "default", name: "Default", primary: "#000000", accent: "#6366f1" },
  { id: "ocean", name: "Ocean Blue", primary: "#0ea5e9", accent: "#06b6d4" },
  { id: "forest", name: "Forest Green", primary: "#10b981", accent: "#059669" },
  { id: "sunset", name: "Sunset Orange", primary: "#f97316", accent: "#ea580c" },
  { id: "lavender", name: "Lavender", primary: "#a78bfa", accent: "#8b5cf6" },
  { id: "rose", name: "Rose Pink", primary: "#f43f5e", accent: "#e11d48" },
];

export const ColorModule = () => {
  const [activeTheme, setActiveTheme] = useState("default");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <Palette className="h-5 w-5 text-blue-500" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold">Color Themes</h3>
          <p className="text-xs text-muted-foreground">Coming soon - Choose your palette</p>
        </div>
      </div>

      {/* Theme Grid */}
      <div className="grid grid-cols-2 gap-3">
        {COLOR_THEMES.map((theme) => (
          <motion.button
            key={theme.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTheme(theme.id)}
            className={`relative rounded-xl border p-4 transition-all ${
              activeTheme === theme.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/30"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-sm font-medium text-left">{theme.name}</div>
              {activeTheme === theme.id && (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </div>
              )}
            </div>

            {/* Color Preview */}
            <div className="flex gap-2">
              <div
                className="h-8 w-8 rounded-lg shadow-sm"
                style={{ backgroundColor: theme.primary }}
              />
              <div
                className="h-8 w-8 rounded-lg shadow-sm"
                style={{ backgroundColor: theme.accent }}
              />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Coming Soon Badge */}
      <div className="rounded-lg border border-dashed border-muted-foreground/30 bg-muted/20 p-4 text-center">
        <div className="text-sm text-muted-foreground">
          🎨 Full color customization coming in v2.0
        </div>
      </div>
    </div>
  );
};
