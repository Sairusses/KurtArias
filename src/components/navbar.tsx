"use client";

import { Button, Label } from '@heroui/react';
import { Icon } from "@iconify/react";
import { MenuIcon } from "@/components/menu-icon";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const NAV_ITEMS = [
  { name: "About Me", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
] as const;

export default function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 w-full z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <nav className="max-w-7xl mx-auto h-16 px-6 flex flex-row items-center justify-between glass-card rounded-full shadow-lg border-white/5 dark:border-white/5 backdrop-blur-xl">

        {/* Logo Branding */}
        <section className="flex-shrink-0">
          <Link href="/" className="outline-none">
            <Label className="text-lg font-extrabold text-foreground cursor-pointer tracking-tight select-none group">
              Kurt <span className="text-accent transition-colors duration-300 group-hover:text-warning">Arias</span>
            </Label>
          </Link>
        </section>

        {/* ── HIGH-FIDELITY COMPRESSED TAB CONTROLLER ── */}
        <section className="hidden sm:flex flex-row items-center p-1 bg-surface-secondary/40 dark:bg-surface-secondary/20 rounded-full border border-border/40 relative backdrop-blur-xs">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <motion.div
                key={item.name}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-5 py-2 text-xs tracking-wider font-bold rounded-full transition-colors duration-300 z-10 block ${
                    isActive
                      ? "text-accent-foreground dark:text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {/* Sliding Background Indicator Matrix */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavigationPlate"
                      className="absolute inset-0 bg-accent dark:bg-accent/15 border border-accent-secondary/30 dark:border-accent/30 rounded-full -z-10 shadow-md shadow-accent/10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}

                  <span className="relative inline-flex items-center">
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </section>

        {/* System Action Controls */}
        <section className="flex flex-row items-center space-x-2">
          <Button
            isIconOnly
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 min-w-9 glass-interactive rounded-full border-border/40 shadow-sm"
          >
            {mounted && theme === "dark" ? (
              <Icon icon="solar:sun-bold-duotone" className="h-4.5 w-4.5 text-warning transition-transform duration-500 hover:rotate-45" />
            ) : (
              <Icon icon="solar:moon-bold-duotone" className="h-4.5 w-4.5 text-accent transition-transform duration-500 hover:-rotate-12" />
            )}
          </Button>

          <Link href="https://github.com/Sairusses" target="_blank" rel="noreferrer">
            <Button isIconOnly className="w-9 h-9 min-w-9 glass-interactive rounded-full border-border/40 shadow-sm">
              <Icon icon="bi:github" className="h-4 w-4 text-foreground/80" />
            </Button>
          </Link>

          {/* Mobile Display Toggle */}
          <section className="flex sm:hidden pl-1">
            <div
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className="cursor-pointer p-2 rounded-full hover:bg-surface-secondary/60 transition-colors duration-200 text-muted hover:text-foreground"
            >
              <MenuIcon />
            </div>
          </section>
        </section>
      </nav>
    </header>
  );
}