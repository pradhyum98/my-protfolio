"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

type SoundEffect = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

const SOUND_EFFECTS: SoundEffect[] = [
  { id: "click", name: "Click Sounds", description: "Button click feedback", icon: "👆" },
  { id: "hover", name: "Hover Sounds", description: "Subtle hover feedback", icon: "✨" },
  { id: "success", name: "Success Chime", description: "Action completed", icon: "✅" },
  { id: "ambient", name: "Ambient Music", description: "Background lo-fi", icon: "🎵" },
];

export const SoundModule = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(50);
  const [enabledSounds, setEnabledSounds] = useState<Set<string>>(new Set());

  const toggleSound = (id: string) => {
    const newSet = new Set(enabledSounds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setEnabledSounds(newSet);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10">
            {isMuted ? (
              <VolumeX className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Volume2 className="h-5 w-5 text-green-500" />
            )}
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Sound Effects</h3>
            <p className="text-xs text-muted-foreground">Audio feedback & ambience</p>
          </div>
        </div>

        {/* Master Mute Toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`relative h-7 w-12 rounded-full transition-colors ${
            !isMuted ? "bg-green-500" : "bg-muted"
          }`}
          aria-label="Toggle all sounds"
        >
          <motion.div
            animate={{ x: !isMuted ? 20 : 2 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute top-1 h-5 w-5 rounded-full bg-background shadow-sm"
          />
        </button>
      </div>

      {/* Volume Slider */}
      {!isMuted && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Master Volume</label>
            <span className="font-mono text-sm font-semibold text-primary">{volume}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full h-2 accent-green-500 cursor-pointer"
          />
        </motion.div>
      )}

      {/* Sound Effect List */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Sound Effects</label>
        <div className="space-y-2">
          {SOUND_EFFECTS.map((sound) => (
            <div
              key={sound.id}
              className={`rounded-lg border p-3 transition-all ${
                enabledSounds.has(sound.id) && !isMuted
                  ? "border-green-500/30 bg-green-500/5"
                  : "border-border bg-muted/20"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{sound.icon}</div>
                  <div>
                    <div className="font-medium text-sm">{sound.name}</div>
                    <div className="text-xs text-muted-foreground">{sound.description}</div>
                  </div>
                </div>
                <button
                  onClick={() => toggleSound(sound.id)}
                  disabled={isMuted}
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    enabledSounds.has(sound.id) && !isMuted
                      ? "bg-green-500"
                      : "bg-muted"
                  } ${isMuted ? "opacity-50" : ""}`}
                  aria-label={`Toggle ${sound.name}`}
                >
                  <motion.div
                    animate={{ x: enabledSounds.has(sound.id) ? 18 : 2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute top-1 h-4 w-4 rounded-full bg-background shadow-sm"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="rounded-lg border border-dashed border-muted-foreground/30 bg-muted/20 p-4 text-center">
        <div className="text-sm text-muted-foreground">
          🔊 Sound system coming in v2.0
        </div>
      </div>
    </div>
  );
};
