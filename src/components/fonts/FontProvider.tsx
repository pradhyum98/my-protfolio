"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { FONT_PAIRS, DEFAULT_FONT_PAIR, type FontPair } from "@/styles/fonts";

type FontContextType = {
  currentPair: FontPair;
  setPair: (pairId: string) => void;
  scale: number;
  setScale: (scale: number) => void;
  isLoaded: boolean;
};

const FontContext = createContext<FontContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PAIR: "portfolio-font-pair",
  SCALE: "portfolio-font-scale",
} as const;

export const FontProvider = ({ children }: { children: ReactNode }) => {
  const [currentPairId, setCurrentPairId] = useState(DEFAULT_FONT_PAIR);
  const [scale, setScaleState] = useState(100);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedPair = localStorage.getItem(STORAGE_KEYS.PAIR);
    const savedScale = localStorage.getItem(STORAGE_KEYS.SCALE);

    if (savedPair && FONT_PAIRS[savedPair]) {
      setCurrentPairId(savedPair);
    }

    if (savedScale) {
      const parsedScale = parseInt(savedScale, 10);
      if (parsedScale >= 90 && parsedScale <= 112) {
        setScaleState(parsedScale);
      }
    }

    setIsLoaded(true);
  }, []);

  // Apply font variables to document root
  useEffect(() => {
    if (!isLoaded) return;

    const pair = FONT_PAIRS[currentPairId];
    const root = document.documentElement;

    // ✅ FIX: Properly remove Next.js font variable classes (__variable_*)
    // Get all current classes
    const currentClasses = Array.from(root.classList);

    // Remove all __variable_ classes (Next.js font variables)
    currentClasses.forEach((cls) => {
      if (cls.startsWith("__variable_") || cls.includes("variable")) {
        root.classList.remove(cls);
      }
    });

    // Apply new font variables - our fonts always have the variable property
    const displayFont = pair.displayFont as { variable: string; className: string };
    const bodyFont = pair.bodyFont as { variable: string; className: string };

    // Add new font classes
    root.classList.add(displayFont.variable);
    root.classList.add(bodyFont.variable);

    // Apply scale with proper value
    root.style.setProperty("--font-scale", scale.toString());

    // Force a reflow to ensure styles apply immediately
    void root.offsetHeight;
  }, [currentPairId, scale, isLoaded]);

  const setPair = (pairId: string) => {
    if (!FONT_PAIRS[pairId]) return;
    setCurrentPairId(pairId);
    localStorage.setItem(STORAGE_KEYS.PAIR, pairId);
  };

  const setScale = (newScale: number) => {
    const clampedScale = Math.max(90, Math.min(112, newScale));
    setScaleState(clampedScale);
    localStorage.setItem(STORAGE_KEYS.SCALE, clampedScale.toString());
  };

  return (
    <FontContext.Provider
      value={{
        currentPair: FONT_PAIRS[currentPairId],
        setPair,
        scale,
        setScale,
        isLoaded,
      }}
    >
      {children}
    </FontContext.Provider>
  );
};

export const useFonts = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFonts must be used within FontProvider");
  }
  return context;
};
