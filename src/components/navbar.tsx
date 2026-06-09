"use client";

import { Button, Label } from '@heroui/react';
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Automatically close mobile menu when route changing
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
      <header className="sticky top-0 w-full z-50 px-4 sm:px-8 py-4 transition-all duration-300">
        <nav className="max-w-7xl mx-auto h-16 px-6 flex flex-row items-center justify-between glass-card rounded-full shadow-lg border-white/5 dark:border-white/5 backdrop-blur-xl relative z-50">

          {/* Logo Branding */}
          <section className="flex-shrink-0">
            <Link href="/" className="outline-none">
              <Label className="text-lg font-extrabold text-foreground cursor-pointer tracking-tight select-none group">
                Kurt <span className="text-accent transition-colors duration-300 group-hover:text-warning">Arias</span>
              </Label>
            </Link>
          </section>

          {/* ── DESKTOP: TAB CONTROLLER ── */}
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

            <Link href="https://github.com/Sairusses" target="_blank" rel="noreferrer" className="hidden xs:inline-block">
              <Button isIconOnly className="w-9 h-9 min-w-9 glass-interactive rounded-full border-border/40 shadow-sm">
                <Icon icon="bi:github" className="h-4 w-4 text-foreground/80" />
              </Button>
            </Link>

            {/* Mobile Display Toggle (Clean, raw icon without glass-card wrapper) */}
            <section className="flex sm:hidden pl-1">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle Menu"
                  className="w-9 h-9 flex items-center justify-center text-muted hover:text-foreground transition-colors duration-200 focus:outline-none"
              >
                <motion.div
                    animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <Icon
                      icon={isOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"}
                      className={`h-6 w-6 ${isOpen ? "text-danger" : "text-foreground"}`}
                  />
                </motion.div>
              </button>
            </section>
          </section>
        </nav>

        {/* ── MOBILE: DRAWER EXPANSION MENU OVERLAY ── */}
        <AnimatePresence>
          {isOpen && (
              <>
                {/* Backdrop Dimmer Blur */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 top-24 bg-background/40 backdrop-blur-md z-30 sm:hidden"
                    transition={{ duration: 0.2 }}
                />

                {/* Menu Drop Content */}
                <motion.div
                    initial={{ opacity: 0, y: -15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                    className="absolute top-24 left-4 right-4 bg-background/80 dark:bg-surface-secondary/20 backdrop-blur-2xl rounded-field p-4 border border-border/40 shadow-2xl z-40 sm:hidden flex flex-col gap-2"
                >
                  {NAV_ITEMS.map((item, index) => {
                    const isActive = pathname === item.href;

                    return (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                        >
                          <Link
                              href={item.href}
                              className={`flex items-center gap-4 px-4 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all ${
                                  isActive
                                      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/10"
                                      : "text-muted hover:text-foreground hover:bg-surface-secondary/40"
                              }`}
                          >
                            <Icon icon={item.icon} className={`w-5 h-5 ${isActive ? "text-accent-foreground" : "text-muted"}`} />
                            <span>{item.name}</span>
                            {isActive && (
                                <motion.span
                                    layoutId="activeDot"
                                    className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-foreground"
                                />
                            )}
                          </Link>
                        </motion.div>
                    );
                  })}

                  {/* Mini Social Link Row inside Mobile Menu */}
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center justify-between mt-2 pt-3 border-t border-border/20 px-2 text-[11px] font-mono text-muted/60"
                  >
                    <span>SYSTEM NODES AVAILABLE</span>
                    <Link
                        href="https://github.com/Sairusses"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-muted hover:text-accent font-semibold transition-colors"
                    >
                      <Icon icon="bi:github" className="w-3.5 h-3.5" />
                      GitHub Repository
                    </Link>
                  </motion.div>
                </motion.div>
              </>
          )}
        </AnimatePresence>
      </header>
  );
}

const NAV_ITEMS = [
  { name: "About Me", href: "/", icon: "solar:user-id-linear" },
  { name: "Projects", href: "/projects", icon: "solar:folder-with-files-linear" }, // Fixed string name matching Iconify sets
  { name: "Contact", href: "/contact", icon: "solar:letter-linear" }
] as const;
