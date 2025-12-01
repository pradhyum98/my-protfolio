"use client";

import { useState } from "react";
import { Cat } from "lucide-react";
import { motion } from "framer-motion";

export const CatModule = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [catMood, setCatMood] = useState<"happy" | "sleepy" | "playful">("happy");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/10 to-pink-500/10">
          <Cat className="h-5 w-5 text-orange-500" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold">Cat Companion</h3>
          <p className="text-xs text-muted-foreground">Your friendly coding buddy</p>
        </div>
      </div>

      {/* Enable Toggle */}
      <div className="flex items-center justify-between rounded-xl border border-border bg-muted/20 p-4">
        <div>
          <div className="font-medium text-sm">Enable Cat Companion</div>
          <div className="text-xs text-muted-foreground">Shows a cute cat on your screen</div>
        </div>
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          className={`relative h-7 w-12 rounded-full transition-colors ${
            isEnabled ? "bg-primary" : "bg-muted"
          }`}
          aria-label="Toggle cat companion"
        >
          <motion.div
            animate={{ x: isEnabled ? 20 : 2 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute top-1 h-5 w-5 rounded-full bg-background shadow-sm"
          />
        </button>
      </div>

      {/* Cat Mood Selector */}
      {isEnabled && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <label className="text-sm font-medium">Cat Mood</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "happy", emoji: "😸", label: "Happy" },
              { id: "sleepy", emoji: "😴", label: "Sleepy" },
              { id: "playful", emoji: "😺", label: "Playful" },
            ].map((mood) => (
              <button
                key={mood.id}
                onClick={() => setCatMood(mood.id as typeof catMood)}
                className={`rounded-lg border p-3 transition-all ${
                  catMood === mood.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <div className="text-2xl mb-1">{mood.emoji}</div>
                <div className="text-xs font-medium">{mood.label}</div>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Preview */}
      <div className="rounded-xl border border-dashed border-muted-foreground/30 bg-muted/20 p-8 text-center">
        <div className="text-6xl mb-3">
          {isEnabled ? (
            catMood === "happy" ? "😸" :
            catMood === "sleepy" ? "😴" : "😺"
          ) : "🐱"}
        </div>
        <div className="text-sm text-muted-foreground">
          {isEnabled ? `Your ${catMood} cat companion` : "Cat is sleeping... Enable to wake up!"}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="rounded-lg border border-dashed border-muted-foreground/30 bg-muted/20 p-4 text-center">
        <div className="text-sm text-muted-foreground">
          🐾 Interactive cat companion coming soon!
        </div>
      </div>
    </div>
  );
};

