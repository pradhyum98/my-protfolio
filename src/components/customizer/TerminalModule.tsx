"use client";

import { Terminal } from "lucide-react";
import { useTerminal } from "@/components/terminal";

export const TerminalModule = () => {
  const { open, isOpen } = useTerminal();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/10 to-green-500/10">
          <Terminal className="h-5 w-5 text-emerald-500" />
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold">Interactive Terminal</h3>
          <p className="text-xs text-muted-foreground">Run commands & explore</p>
        </div>
      </div>

      {/* Terminal Status */}
      <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
              Status
            </div>
            <div className="font-display text-base font-semibold">
              {isOpen ? "Terminal Active" : "Terminal Ready"}
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              {isOpen ? "Close to dismiss" : "Click to launch"}
            </div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
            <span className="text-2xl">{isOpen ? "🟢" : "⚫"}</span>
          </div>
        </div>
      </div>

      {/* Launch Button */}
      <button
        onClick={open}
        disabled={isOpen}
        className={`w-full rounded-xl border p-4 transition-all ${
          isOpen
            ? "border-border bg-muted/20 opacity-50 cursor-not-allowed"
            : "border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-green-500/10 hover:from-emerald-500/20 hover:to-green-500/20 hover:border-emerald-500/50"
        }`}
      >
        <div className="flex items-center justify-center gap-3">
          <Terminal className="h-5 w-5 text-emerald-500" />
          <span className="font-medium">
            {isOpen ? "Terminal is Open" : "Launch Terminal"}
          </span>
        </div>
        {!isOpen && (
          <div className="text-xs text-muted-foreground mt-2">
            Or press <kbd className="px-1.5 py-0.5 bg-muted rounded font-mono">~</kbd> key
          </div>
        )}
      </button>

      {/* Features List */}
      <div className="space-y-2">
        <div className="text-sm font-medium">Available Commands</div>
        <div className="space-y-1">
          {[
            { cmd: "help", desc: "Show all commands" },
            { cmd: "skills", desc: "View tech stack" },
            { cmd: "projects", desc: "Browse projects" },
            { cmd: "contact", desc: "Get in touch" },
            { cmd: "clear", desc: "Clear terminal" },
          ].map((item) => (
            <div
              key={item.cmd}
              className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-emerald-500">$</span>
                <code className="font-mono text-sm">{item.cmd}</code>
              </div>
              <span className="text-xs text-muted-foreground">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="rounded-lg border border-dashed border-emerald-500/30 bg-emerald-500/5 p-4 text-center">
        <div className="text-sm text-muted-foreground">
          💡 Tip: Press <kbd className="px-1.5 py-0.5 bg-background rounded text-xs font-mono border border-border">~</kbd> anywhere to toggle terminal
        </div>
      </div>
    </div>
  );
};
