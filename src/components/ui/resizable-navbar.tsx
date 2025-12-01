"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if viewport is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        // Only apply width animation on desktop
        width: isMobile ? "100%" : scrolled ? "90%" : "100%",
        // Only apply border-radius on desktop
        borderRadius: isMobile ? "0px" : scrolled ? "16px" : "0px",
        // Adjust padding for better mobile fit
        padding: scrolled ? (isMobile ? "0.75rem 1rem" : "0.5rem 1.5rem") : "0.75rem 1.5rem",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={cn(
        "fixed top-0 z-50",
        // Mobile: full width, no transform
        "left-0 right-0 w-full",
        // Desktop: centered with transform
        "md:left-1/2 md:-translate-x-1/2 md:w-auto",
        "border border-transparent bg-background/80 backdrop-blur-md",
        // Apply shadow and margin only on desktop when scrolled
        scrolled && !isMobile && "border-border shadow-lg mt-4",
        // Mobile: ensure no overflow clipping
        "overflow-visible",
        className
      )}
    >
      {children}
    </motion.nav>
  );
};

export const NavBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "hidden md:flex items-center justify-between w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
}: {
  items: Array<{ name: string; link: string }>;
  className?: string;
  onItemClick?: () => void;
}) => {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      {items.map((item, idx) => (
        <a
          key={`nav-item-${idx}`}
          href={item.link}
          onClick={onItemClick}
          className="relative text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
};

export const MobileNav = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("md:hidden w-full", className)}>{children}</div>;
};

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center justify-between w-full", className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
}) => {
  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
              "relative z-50",
              "w-full max-h-[70vh] overflow-y-auto",
              "border-t border-border mt-4 pt-4",
              // Ensure proper spacing and readability
              "bg-background",
              "rounded-none",
              className
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col gap-4 px-2">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="p-2 hover:bg-accent rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-nav-menu"
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
};

export const NavbarLogo = ({
  children,
  href = "/",
  className,
}: {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      className={cn(
        "flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md",
        className
      )}
    >
      {children || (
        <>
          <span className="text-xl font-bold">Logo</span>
        </>
      )}
    </a>
  );
};

export const NavbarButton = ({
  href,
  as = "a",
  children,
  className,
  variant = "primary",
  onClick,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  onClick?: () => void;
  [key: string]: unknown;
}) => {
  const Component = as;

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary",
    dark: "bg-foreground text-background hover:bg-foreground/90 focus:ring-foreground",
    gradient:
      "bg-gradient-to-r from-primary to-purple-600 text-primary-foreground hover:opacity-90 focus:ring-purple-600",
  };

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-lg font-medium text-sm transition-all",
        "inline-flex items-center gap-2 justify-center",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
