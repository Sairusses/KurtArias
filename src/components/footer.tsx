"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function CustomFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-border/40 bg-surface/30 backdrop-blur-md text-muted py-10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Timestamp & Integrity Branding */}
        <div className="order-3 sm:order-1">
          <p className="text-xs font-light tracking-wider opacity-80 text-center sm:text-left">
            © {new Date().getFullYear()} Kurt Arias. Engineered with pristine matrix telemetry.
          </p>
        </div>

        {/* Hyper-Interactive Social Elements */}
        <div className="flex items-center gap-2 order-1 sm:order-2">
          {[
            { icon: Github, href: "https://github.com", color: "hover:text-foreground" },
            { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-accent" },
            { icon: Mail, href: "mailto:your.email@example.com", color: "hover:text-danger" }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={`w-9 h-9 flex items-center justify-center rounded-full glass-interactive border-border/30 text-muted/80 ${social.color}`}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Dynamic Back-To-Top Node */}
        <button
          onClick={scrollToTop}
          className="order-2 sm:order-3 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold glass-interactive border-border/50 text-foreground px-4 py-2.5 rounded-full shadow-sm group"
        >
          Scroll to Apex
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out text-accent" />
        </button>
      </div>
    </footer>
  );
}