"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Download, Video, Brain, Cpu, BarChart3, Briefcase, ExternalLink } from "lucide-react";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
} as const;

export default function Index() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const getSpotlightAnimation = (sectionId: string) => ({
    opacity: activeSection === null || activeSection === sectionId ? 1 : 0.25,
    filter: activeSection === null || activeSection === sectionId ? "blur(0px)" : "blur(4px)",
    scale: activeSection === null || activeSection === sectionId ? 1 : 0.97,
  });

  const spotlightTransition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] } as const;

  return (
    <>
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] relative px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-accent uppercase glass-card rounded-full inline-flex items-center gap-1.5 mb-6 shadow-sm border-accent/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            Available for Opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            Hi, I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-warning to-accent bg-[length:200%_auto] tracking-tight">Product Engineer</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Crafting intelligent software layers, interactive user interfaces, and robust systems powered by AI and NLP.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/projects" className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-field shadow-xl shadow-accent/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-accent/20">
              View My Work
            </a>
            <a href="/contact" className="px-6 py-3 glass-interactive text-foreground font-semibold rounded-field shadow-md">
              Let's Talk
            </a>
          </div>
        </motion.div>
      </section>

      {/* WORK EXPERIENCE SECTION */}
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
        className="py-20 max-w-5xl mx-auto px-6"
      >
        <div className="glass-card p-8 md:p-12 rounded-field shadow-xl">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-accent w-8 h-8" />
            <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
          </div>
          <div className="border-l border-border/80 ml-4 space-y-12 pl-8 relative">
            <div className="relative">
              <div className="absolute -left-[41px] bg-accent w-4 h-4 rounded-full ring-4 ring-background shadow-md" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">2024 - Present</span>
              <h3 className="text-xl font-bold text-foreground mt-1">Lead Software Engineer</h3>
              <p className="text-sm font-medium text-muted mb-3">Tech Innovation Labs</p>
              <p className="text-muted max-w-3xl font-light leading-relaxed">Architected full-stack enterprise features, leading migrations to Next.js App Router and implementing complex layout animations.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] bg-border w-4 h-4 rounded-full ring-4 ring-background" />
              <span className="text-xs font-bold text-muted uppercase tracking-widest">2022 - 2024</span>
              <h3 className="text-xl font-bold text-foreground mt-1">Full Stack Developer</h3>
              <p className="text-sm font-medium text-muted mb-3">Alpha Web Studio</p>
              <p className="text-muted max-w-3xl font-light leading-relaxed">Built high-performance localized web applications. Refactored layout frameworks yielding a 40% uptick in fluid scroll performance.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PROJECTS SECTIONS */}
      <div id="projects" className="space-y-24 pb-32">

        {/* Project 1: SignSpeak */}
        <motion.section
          id="project-signspeak"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          onViewportEnter={() => setActiveSection("project-signspeak")}
          onViewportLeave={() => setActiveSection(null)}
          animate={getSpotlightAnimation("project-signspeak")}
          transition={spotlightTransition}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center min-h-[60vh]"
        >
          <div className="space-y-6">
            <span className="text-xs font-bold text-success uppercase tracking-wider glass-card px-3 py-1 rounded-full border-success/30">Computer Vision</span>
            <h3 className="text-4xl font-bold text-foreground tracking-tight">SignSpeak</h3>
            <p className="text-muted font-light leading-relaxed">
              An advanced real-time sign language translator designed to bridge the gap between communication styles. Translates gestures seamlessly into text and audio.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#video-showcase" className="inline-flex items-center gap-2 px-5 py-2.5 glass-interactive text-foreground hover:text-accent hover:border-accent/40 text-sm font-semibold rounded-field shadow-sm">
                <Video className="w-4 h-4" /> Watch Demo
              </a>
              <a href="https://example.com/download" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-success text-success-foreground text-sm font-semibold rounded-field transition-all duration-300 shadow-lg shadow-success/10">
                <Download className="w-4 h-4" /> Download App
              </a>
            </div>
          </div>
          <div id="video-showcase" className="glass-interactive p-4 rounded-field shadow-2xl">
            <div className="aspect-video w-full rounded-theme bg-surface-secondary/40 backdrop-blur-sm flex flex-col items-center justify-center border border-separator overflow-hidden relative group-hover:bg-surface-secondary/60 transition-colors duration-300">
              <Video className="w-12 h-12 text-muted mb-2 transition-transform duration-300" />
              <p className="text-xs font-semibold tracking-wider text-muted uppercase">Video Showcase</p>
            </div>
          </div>
        </motion.section>

        {/* Project 2: F-And-R */}
        <motion.section
          id="project-fandr"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          onViewportEnter={() => setActiveSection("project-fandr")}
          onViewportLeave={() => setActiveSection(null)}
          animate={getSpotlightAnimation("project-fandr")}
          transition={spotlightTransition}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center min-h-[60vh]"
        >
          <div className="md:order-2 space-y-6">
            <span className="text-xs font-bold text-accent uppercase tracking-wider glass-card px-3 py-1 rounded-full border-accent/30">Natural Language Processing</span>
            <h3 className="text-4xl font-bold text-foreground tracking-tight">F-And-R Platform</h3>
            <p className="text-muted font-light leading-relaxed">
              An AI-driven recruitment web platform using cutting-edge Natural Language Processing algorithms to analyze resumes and dynamically map potential talent directly to open job criteria.
            </p>
            <div className="flex gap-4 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground glass-card px-3 py-1.5 rounded-theme">
                <Brain className="w-3.5 h-3.5 text-accent" /> NLP Engine
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground glass-card px-3 py-1.5 rounded-theme">
                <Cpu className="w-3.5 h-3.5 text-accent" /> Deep Matching
              </span>
            </div>
          </div>
          <div className="md:order-1 glass-interactive p-6 rounded-field shadow-2xl space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-separator/60">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-danger rounded-full opacity-60" />
                <div className="w-3 h-3 bg-warning rounded-full opacity-60" />
                <div className="w-3 h-3 bg-success rounded-full opacity-60" />
              </div>
              <span className="text-xs text-muted font-mono tracking-tight opacity-70">f-and-r-matchmaker.ai</span>
            </div>
            <div className="space-y-3">
              <div className="h-12 bg-field-background/40 border border-border/60 rounded-field flex items-center justify-between px-4 backdrop-blur-xs">
                <div className="h-3 w-1/3 bg-surface-tertiary/60 rounded" />
                <div className="h-6 w-20 bg-success/20 text-success text-[11px] flex items-center justify-center font-bold rounded-md tracking-wide">98% Match</div>
              </div>
              <div className="h-12 bg-field-background/40 border border-border/60 rounded-field flex items-center justify-between px-4 backdrop-blur-xs">
                <div className="h-3 w-1/2 bg-surface-tertiary/60 rounded" />
                <div className="h-6 w-20 bg-surface-tertiary/80 rounded-md text-[11px] text-muted flex items-center justify-center font-bold">81% Match</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Project 3: Wizz */}
        <motion.section
          id="project-wizz"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          onViewportEnter={() => setActiveSection("project-wizz")}
          onViewportLeave={() => setActiveSection(null)}
          animate={getSpotlightAnimation("project-wizz")}
          transition={spotlightTransition}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center min-h-[60vh]"
        >
          <div className="space-y-6">
            <span className="text-xs font-bold text-warning uppercase tracking-wider glass-card px-3 py-1 rounded-full border-warning/30">Business Intelligence</span>
            <h3 className="text-4xl font-bold text-foreground tracking-tight">Wizz</h3>
            <p className="text-muted font-light leading-relaxed">
              A robust project management app that tracks granular workspace metrics, channeling structured telemetry to an AI-powered Business Intelligence layer delivering automated operational feedback.
            </p>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-warning text-warning-foreground text-sm font-semibold rounded-field transition-all duration-300 shadow-lg shadow-warning/10">
              Explore BI Insights Layer <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          <div className="glass-interactive p-6 rounded-field shadow-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-sm font-semibold tracking-wide text-foreground">Workspace Activity Telemetry</h4>
              <BarChart3 className="w-4 h-4 text-warning" />
            </div>
            <div className="flex items-end gap-3 h-32 pt-4 border-b border-separator/40 px-2">
              <div className="bg-surface-tertiary/50 w-full rounded-t-md group-hover:h-[40%] h-[25%] transition-all duration-500 ease-out" />
              <div className="bg-surface-tertiary/50 w-full rounded-t-md group-hover:h-[85%] h-[60%] transition-all duration-500 ease-out" />
              <div className="bg-warning w-full rounded-t-md group-hover:h-[100%] h-[45%] transition-all duration-500 ease-out shadow-lg shadow-warning/20" />
              <div className="bg-surface-tertiary/50 w-full rounded-t-md group-hover:h-[70%] h-[30%] transition-all duration-500 ease-out" />
            </div>
            <div className="mt-4 p-3 bg-surface-secondary/40 border border-border/50 rounded-theme text-xs font-light text-muted backdrop-blur-xs">
              💡 <span className="text-warning font-semibold">AI Insights:</span> Dev velocity increased by 14% after cross-functional backlog cleanups.
            </div>
          </div>
        </motion.section>

      </div>
    </>
  );
}