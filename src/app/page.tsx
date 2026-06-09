"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ExternalLink,
  Database,
  Video,
  Layers,
  BarChart3,
  Download,
  X
} from "lucide-react";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

export default function Index() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const getSpotlightAnimation = (sectionId: string) => ({
    opacity: activeSection === null || activeSection === sectionId ? 1 : 0.25,
    filter: activeSection === null || activeSection === sectionId ? "blur(0px)" : "blur(4px)",
    scale: activeSection === null || activeSection === sectionId ? 1 : 0.97,
  });

  const spotlightTransition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] } as const;

  return (
      <>
        {/* ── HERO ENGINE SECTION ── */}
        <section className="flex flex-col items-center justify-start md:justify-center min-h-fit md:min-h-[calc(100vh-5rem)] pt-16 pb-12 md:py-0 relative px-4 sm:px-6 text-center">
          <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
          >
          <span className="px-3 py-1 text-[10px] md:text-xs font-semibold tracking-wider text-accent uppercase inline-flex items-center gap-1.5 mb-4 md:mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            Active Data Node • Open to Opportunities
          </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-4 md:mb-6 leading-tight">
              Hi, I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-warning to-accent bg-[length:200%_auto] tracking-tight block sm:inline">Data Engineer</span>
            </h1>
            <p className="text-base md:text-xl text-muted max-w-2xl mx-auto mb-8 md:mb-10 font-light leading-relaxed px-2">
              Architecting robust ETL/ELT pipelines, production-ready data assets, and highly optimized schema architectures for scalable modern systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
              <Link href="/projects" className="w-full sm:w-auto px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-field shadow-xl shadow-accent/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-accent/20">
                Analyze My Work
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-6 py-3 glass-interactive text-foreground font-semibold rounded-field shadow-md">
                Initialize Connection
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ── DATA WORK EXPERIENCE TIMELINE ── */}
        <motion.section
            id="experience"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            onViewportEnter={() => setActiveSection("experience")}
            onViewportLeave={() => setActiveSection(null)}
            animate={getSpotlightAnimation("experience")}
            transition={spotlightTransition}
            className="py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6"
        >
          <div className="glass-card p-6 md:p-12 rounded-field shadow-xl">
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <Briefcase className="text-accent w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Data Engineering Roadmap</h2>
            </div>
            <div className="border-l border-border/80 ml-3 md:ml-4 space-y-8 md:space-y-12 pl-6 md:pl-8 relative">

              {/* Tenet GBC Node */}
              <div className="relative">
                <div className="absolute -left-[33px] md:-left-[41px] bg-accent w-3 h-3 md:w-4 md:h-4 rounded-full ring-4 ring-background shadow-md top-1.5 md:top-0" />
                <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-widest block mb-1 md:mb-0">March 2026 - Present</span>
                <h3 className="text-lg md:text-xl font-bold text-foreground mt-1">Data Engineer Intern</h3>
                <p className="text-xs md:text-sm font-medium text-muted mb-2 md:mb-3">Tenet Global Business Center — BGC, Taguig</p>
                <p className="text-sm md:text-base text-muted max-w-3xl font-light leading-relaxed">
                  Translating BI team user stories into production-ready data assets by designing fact tables and ingestion layers. Minimizing system downtime through stored procedure query optimization and orchestrating automated CI/CD deployment logic inside Azure environments.
                </p>
              </div>

              {/* Freelance Node */}
              <div className="relative">
                <div className="absolute -left-[33px] md:-left-[41px] bg-border w-3 h-3 md:w-4 md:h-4 rounded-full ring-4 ring-background top-1.5 md:top-0" />
                <span className="text-[10px] md:text-xs font-bold text-muted uppercase tracking-widest block mb-1 md:mb-0">2024 - 2026</span>
                <h3 className="text-lg md:text-xl font-bold text-foreground mt-1">Freelance Software Engineer</h3>
                <p className="text-xs md:text-sm font-medium text-muted mb-2 md:mb-3">Remote Operations</p>
                <p className="text-sm md:text-base text-muted max-w-3xl font-light leading-relaxed">
                  Delivered clean end-to-end systems architectures and thorough technical data workflows for diverse clients, targeting highly resilient backend foundations and complete validation lifecycle structures.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── PROJECT INGESTION SPECIFICATIONS ── */}
        <div id="projects" className="space-y-16 md:space-y-24 pb-20 md:pb-32 mt-4 md:mt-0">

          {/* Project 1: SignSpeak */}
          <motion.section
              id="project-signspeak"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              onViewportEnter={() => setActiveSection("project-signspeak")}
              onViewportLeave={() => setActiveSection(null)}
              animate={getSpotlightAnimation("project-signspeak")}
              transition={spotlightTransition}
              className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center md:min-h-[60vh]"
          >
            <div className="space-y-4 md:space-y-6">
              <span className="text-[10px] md:text-xs font-bold text-success uppercase tracking-wider glass-card px-3 py-1 rounded-full border-success/30 inline-block">Computer Vision & Data</span>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">SignSpeak</h3>
              <p className="text-sm md:text-base text-muted font-light leading-relaxed">
                An advanced real-time sign language translator designed to bridge the gap between communication styles. Acts as a high-speed data pipeline that captures, normalizes, and translates complex gesture matrices seamlessly into structured text and audio outputs.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 glass-interactive text-foreground hover:text-accent hover:border-accent/40 text-xs md:text-sm font-semibold rounded-field shadow-sm w-full sm:w-auto justify-center transition-all"
                >
                  <Video className="w-4 h-4" /> View Promo
                </button>
                <a href="https://signspeak.website" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-success text-success-foreground text-xs md:text-sm font-semibold rounded-field transition-all duration-300 shadow-lg shadow-success/10 w-full sm:w-auto justify-center">
                  <Download className="w-4 h-4" /> Download App
                </a>
              </div>
            </div>

            {/* Inline Autoplay Preview (Clickable) */}
            <div
                className="glass-interactive p-1.5 md:p-2 rounded-field shadow-2xl w-full cursor-pointer group relative"
                onClick={() => setIsVideoModalOpen(true)}
            >
              <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-background/80 backdrop-blur-md p-3 rounded-full text-foreground shadow-xl">
                  <Video className="w-6 h-6" />
                </div>
              </div>
              <div className="aspect-video w-full rounded-theme bg-surface-secondary/40 border border-separator/40 overflow-hidden relative">
                <video
                    src="/Signspeak_promo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.section>

          {/* Project 2: F&R Recruitment Platform */}
          <motion.section
              id="project-fandr"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              onViewportEnter={() => setActiveSection("project-fandr")}
              onViewportLeave={() => setActiveSection(null)}
              animate={getSpotlightAnimation("project-fandr")}
              transition={spotlightTransition}
              className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center md:min-h-[60vh]"
          >
            <div className="md:order-2 space-y-4 md:space-y-6">
              <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-wider glass-card px-3 py-1 rounded-full border-accent/30 inline-block">Schema & Modeling</span>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">F&R Recruitment</h3>
              <p className="text-sm md:text-base text-muted font-light leading-relaxed">
                Designed automated relational ingestion matrices that systematically scale, process, and normalize talent profiles. Formulated structural table entity layers and data streams supporting massive request triggers alongside auto-generated administrative diagnostic reporting blocks.
              </p>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
                <a href="https://f-and-r.site" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-accent text-accent-foreground text-xs md:text-sm font-semibold rounded-field transition-all duration-300 shadow-lg shadow-accent/10 w-full sm:w-auto justify-center">
                  Launch Platform <ExternalLink className="w-4 h-4" />
                </a>
                <span className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-medium text-foreground glass-card px-3 py-1.5 md:py-2 rounded-theme w-full sm:w-auto justify-center">
                <Database className="w-3.5 h-3.5 text-accent" /> Relational Schemas
              </span>
              </div>
            </div>
            <div className="md:order-1 glass-interactive p-4 md:p-6 rounded-field shadow-2xl space-y-4">
              <div className="flex justify-between items-center pb-3 md:pb-4 border-b border-separator/60">
                <div className="flex gap-1.5 md:gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-danger rounded-full opacity-60" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-warning rounded-full opacity-60" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-success rounded-full opacity-60" />
                </div>
                <span className="text-[10px] md:text-xs text-muted font-mono tracking-tight opacity-70">f-and-r.site / Ingestion</span>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="h-10 md:h-12 bg-field-background/40 border border-border/60 rounded-field flex items-center justify-between px-3 md:px-4 backdrop-blur-xs">
                  <div className="h-2 md:h-3 w-1/3 bg-surface-tertiary/60 rounded" />
                  <div className="h-5 md:h-6 w-20 md:w-24 bg-success/20 text-success text-[9px] md:text-[10px] flex items-center justify-center font-bold rounded-md tracking-wide">Normalized</div>
                </div>
                <div className="h-10 md:h-12 bg-field-background/40 border border-border/60 rounded-field flex items-center justify-between px-3 md:px-4 backdrop-blur-xs">
                  <div className="h-2 md:h-3 w-1/2 bg-surface-tertiary/60 rounded" />
                  <div className="h-5 md:h-6 w-20 md:w-24 bg-accent/20 text-accent text-[9px] md:text-[10px] flex items-center justify-center font-bold rounded-md tracking-wide">Generated</div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Project 3: Wizz AI Project Manager */}
          <motion.section
              id="project-wizz"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              onViewportEnter={() => setActiveSection("project-wizz")}
              onViewportLeave={() => setActiveSection(null)}
              animate={getSpotlightAnimation("project-wizz")}
              transition={spotlightTransition}
              className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center md:min-h-[60vh]"
          >
            <div className="space-y-4 md:space-y-6">
              <span className="text-[10px] md:text-xs font-bold text-warning uppercase tracking-wider glass-card px-3 py-1 rounded-full border-warning/30 inline-block">Telemetry & BI</span>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">Wizz AI Manager</h3>
              <p className="text-sm md:text-base text-muted font-light leading-relaxed">
                Built a high-performance analytics monitoring layout capturing granular real-time operational user telemetry. Ingested activity data is systematically piped directly into an isolated AI-driven Business Intelligence layer, converting heavy operational logs into actionable productivity parameters.
              </p>
              <button disabled className="inline-flex items-center justify-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-surface-secondary/40 text-muted text-xs md:text-sm font-semibold rounded-field border border-border/40 cursor-not-allowed w-full sm:w-auto">
                Deployment Pending <Layers className="w-4 h-4 opacity-50" />
              </button>
            </div>
            <div className="glass-interactive p-4 md:p-6 rounded-field shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h4 className="text-xs md:text-sm font-semibold tracking-wide text-foreground">Workspace Telemetry</h4>
                <BarChart3 className="w-4 h-4 text-warning" />
              </div>
              <div className="flex items-end gap-2 md:gap-3 h-24 md:h-32 pt-4 border-b border-separator/40 px-1 md:px-2">
                <div className="bg-surface-tertiary/50 w-full rounded-t-md group-hover:h-[40%] h-[25%] transition-all duration-500 ease-out" />
                <div className="bg-surface-tertiary/50 w-full rounded-t-md group-hover:h-[85%] h-[60%] transition-all duration-500 ease-out" />
                <div className="bg-warning w-full rounded-t-md group-hover:h-[100%] h-[45%] transition-all duration-500 ease-out shadow-lg shadow-warning/20" />
                <div className="bg-surface-tertiary/50 w-full rounded-t-md group-hover:h-[70%] h-[30%] transition-all duration-500 ease-out" />
              </div>
              <div className="mt-3 md:mt-4 p-2.5 md:p-3 bg-surface-secondary/40 border border-border/50 rounded-theme text-[10px] md:text-xs font-light text-muted backdrop-blur-xs leading-relaxed">
                📊 <span className="text-warning font-semibold">BI Data Sync:</span> Raw cluster activity aggregated dynamically inside backend datastores.
              </div>
            </div>
          </motion.section>
        </div>

        {/* ── FULLSCREEN VIDEO MODAL OVERLAY ── */}
        <AnimatePresence>
          {isVideoModalOpen && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-background/90 backdrop-blur-lg"
                  onClick={() => setIsVideoModalOpen(false)}
              >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-5xl aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    onClick={(e) => e.stopPropagation()} // Prevent clicks inside the video box from closing the modal
                >
                  <button
                      onClick={() => setIsVideoModalOpen(false)}
                      className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
                      aria-label="Close video"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  {/* Native HTML5 video provides robust play, pause, volume, and seek UI */}
                  <video
                      src="/Signspeak_promo.mp4"
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                  />
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>
      </>
  );
}