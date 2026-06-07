"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Synchronized physics configuration to match page-transition.tsx
const fluidTransition = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1]
} as const;

const formAnimationVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -15, filter: "blur(6px)" }
} as const;

export default function Page() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] relative px-6 py-12 transition-colors duration-500">

      {/* ── INTERNAL CONTACT GRADIENT NOISE MATRICES ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-accent/8 dark:bg-accent/6 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
            backgroundSize: '3rem 3rem'
          }}
        />
      </div>

      {/* Main Glass Shell Container */}
      <div className="max-w-lg w-full glass-card rounded-field p-8 md:p-10 shadow-2xl border-white/5 dark:border-white/5 relative z-10 transition-all duration-300 overflow-hidden">
        <h2 className="text-3xl font-extrabold tracking-tight mb-2 text-foreground">Let's Connect</h2>
        <p className="text-sm text-muted font-light mb-8 leading-relaxed">
          Have a system layer that needs optimization or want to build an outstanding feature together? Drop me a line below.
        </p>

        {/* ── MOTION ANCHORED PRESENTATION FIELD ── */}
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success-display"
              variants={formAnimationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={fluidTransition}
              className="text-center py-10 space-y-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 20 }}
                className="w-14 h-14 bg-success/10 border border-success/30 flex items-center justify-center rounded-full mx-auto shadow-inner"
              >
                <CheckCircle2 className="w-7 h-7 text-success" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground">Transmission Success</h3>
              <p className="text-xs text-muted font-light max-w-xs mx-auto leading-relaxed">
                Message dispatched securely. I'll analyze your project parameter fields and reach out to your inbox promptly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="contact-input-form"
              onSubmit={handleSubmit}
              variants={formAnimationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={fluidTransition}
              className="space-y-6"
            >
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Identification</label>
                <input
                  type="text"
                  required
                  className="w-full bg-field-background/30 border border-border/60 focus:border-accent text-foreground placeholder-muted/50 rounded-field px-4 py-3 text-sm backdrop-blur-xs outline-none transition-all duration-300 focus:ring-4 focus:ring-accent/5"
                  placeholder="Alex Mercer"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Secure Routing Mail</label>
                <input
                  type="email"
                  required
                  className="w-full bg-field-background/30 border border-border/60 focus:border-accent text-foreground placeholder-muted/50 rounded-field px-4 py-3 text-sm backdrop-blur-xs outline-none transition-all duration-300 focus:ring-4 focus:ring-accent/5"
                  placeholder="alex@example.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2">Project Scope Specs</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-field-background/30 border border-border/60 focus:border-accent text-foreground placeholder-muted/50 rounded-field px-4 py-3 text-sm backdrop-blur-xs outline-none transition-all duration-300 focus:ring-4 focus:ring-accent/5 resize-none"
                  placeholder="Tell me about your tech requirements..."
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }} // Elastic physical push down response
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-accent-foreground font-bold text-sm rounded-field shadow-xl shadow-accent/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent/20 cursor-pointer"
              >
                Initialize Transmission <Send className="w-3.5 h-3.5" />
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}