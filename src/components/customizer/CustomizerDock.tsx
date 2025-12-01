"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Terminal, Type, Palette, Cat, Volume2 } from "lucide-react";
import { FontModule } from "@/components/customizer/FontModule";
import { ColorModule } from "@/components/customizer/ColorModule";
import { CatModule } from "@/components/customizer/CatModule";
import { SoundModule } from "@/components/customizer/SoundModule";
import { TerminalModule } from "./TerminalModule";

// Module configuration
type ModuleId = "terminal" | "fonts" | "colors" | "cat" | "sound";

type Module = {
  id: ModuleId;
  icon: React.ReactNode;
  label: string;
  component: React.ComponentType;
  enabled: boolean;
};

const modules: Module[] = [
  {
    id: "terminal",
    icon: <Terminal className="h-4 w-4" />,
    label: "Terminal",
    component: TerminalModule,
    enabled: true,
  },
  {
    id: "fonts",
    icon: <Type className="h-4 w-4" />,
    label: "Typography",
    component: FontModule,
    enabled: true,
  },
  {
    id: "colors",
    icon: <Palette className="h-4 w-4" />,
    label: "Colors",
    component: ColorModule,
    enabled: true,
  },
  {
    id: "cat",
    icon: <Cat className="h-4 w-4" />,
    label: "Cat Companion",
    component: CatModule,
    enabled: true,
  },
  {
    id: "sound",
    icon: <Volume2 className="h-4 w-4" />,
    label: "Sound Effects",
    component: SoundModule,
    enabled: true,
  },
];

export const CustomizerDock = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeModule, setActiveModule] = useState<ModuleId | null>(null);

  const activeModuleData = modules.find((m) => m.id === activeModule);
  const ActiveComponent = activeModuleData?.component;

  const handleModuleClick = (moduleId: ModuleId) => {
    if (activeModule === moduleId) {
      setActiveModule(null);
    } else {
      setActiveModule(moduleId);
      setIsExpanded(true);
    }
  };

  const handleClose = () => {
    setActiveModule(null);
    setIsExpanded(false);
  };

  return (
    <>
      {/* Main Dock - Bottom Left */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 left-6 z-50 cursor-pointer"
      >
        {/* Dock Container with Glassmorphism */}
        <div className="relative">
          {/* Dock */}
          <div className="relative flex items-center gap-2 cursor-pointer">
            {/* Sparkle Icon - Main Trigger */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="group relative flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden transition-all bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 hover:from-primary/30 hover:via-purple-500/30 hover:to-pink-500/30 cursor-pointer"
              aria-label="Customize your experience"
              title="Customize fonts, colors, terminal & more"
            >
              {/* Animated sparkles icon */}
              <motion.div
                animate={{
                  rotate: isExpanded ? 180 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Sparkles className="h-5 w-5 text-primary drop-shadow-lg" />
              </motion.div>

              {/* Rotating gradient background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0"
              />

              {/* Pulsing glow */}
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/40 via-purple-500/40 to-pink-500/40 blur-md"
              />

              {/* Border ring */}
              <div className="absolute inset-0 rounded-xl ring-1 ring-primary/30 group-hover:ring-primary/50 transition-all" />
            </motion.button>

            {/* Divider */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "1px", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="h-6 bg-border"
                />
              )}
            </AnimatePresence>

            {/* Module Icons */}
            <AnimatePresence mode="popLayout">
              {isExpanded && modules.filter((m) => m.enabled).map((module, index) => (
                <motion.button
                  key={module.id}
                  initial={{ scale: 0, opacity: 0, x: -20 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.05 }
                  }}
                  exit={{ scale: 0, opacity: 0, x: -20 }}
                  whileHover={{
                    scale: 1.15,
                    y: -10,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleModuleClick(module.id)}
                  className={`group relative flex h-10 w-10 items-center justify-center rounded-xl transition-all overflow-hidden cursor-pointer ${
                    activeModule === module.id
                      ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/50"
                      : "bg-gradient-to-br from-muted/50 to-muted/30 hover:from-primary/20 hover:to-primary/10"
                  }`}
                  aria-label={`Open ${module.label}`}
                  title={module.label}
                >
                  {/* Icon with gradient glow */}
                  <div className={`relative z-10 ${
                    activeModule === module.id
                      ? "text-primary-foreground"
                      : "text-foreground group-hover:text-primary"
                  } transition-colors`}>
                    {module.icon}
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Border glow */}
                  <div className={`absolute inset-0 rounded-xl ring-1 transition-all ${
                    activeModule === module.id
                      ? "ring-primary/50"
                      : "ring-border/50 group-hover:ring-primary/30"
                  }`} />
                </motion.button>
              ))}
            </AnimatePresence>

            {/* Close Icon */}
            <AnimatePresence>
              {isExpanded && (
                <>
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "1px", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="h-6 bg-border"
                  />

                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClose}
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-destructive/10 cursor-pointer"
                    aria-label="Close customization dock"
                    title="Close"
                  >
                    <X className="h-4 w-4 text-muted-foreground hover:text-destructive transition-colors" />
                  </motion.button>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Module Popover/Panel */}
      <AnimatePresence>
        {activeModule && ActiveComponent && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40"
            />

            {/* Module Panel - Bottom Left Above Dock */}
            <motion.div
              initial={{ x: -100, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -100, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-24 left-6 z-50 w-full max-w-md px-4 sm:px-0"
            >
              <div className="relative rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl">
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />

                {/* Content */}
                <div className="relative">
                  <ActiveComponent />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
};
