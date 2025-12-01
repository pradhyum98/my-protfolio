"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { TerminalProvider } from "@/components/terminal";
import { FontProvider } from "@/components/fonts";
import { CustomizerDock } from "@/components/customizer";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingDockNav } from "@/components/floating-dock-nav";
import { Toaster } from "sonner";

type RootProviderProps = {
  children: React.ReactNode;
};

export const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <FontProvider>
        <TerminalProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingDockNav />
          </div>
          <CustomizerDock />
          <Toaster position="bottom-right" richColors />
        </TerminalProvider>
      </FontProvider>
    </ThemeProvider>
  );
};
