"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Send, Loader2, ArrowRight } from "lucide-react";

export default function ContactPage() {
    // Form state for Resend integration
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

    // Pre-filled data parameters
    const emailAddress = "kurtarias1@gmail.com";
    const emailSubject = "Data Engineering Opportunities / Project Inquiry";
    const emailBody = "Hi Kurt,\n\nI came across your portfolio and would love to connect regarding...";

    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);

    // Real fallback string for copying/long-pressing on mobile devices
    const fallbackMailtoString = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;

    // Dynamic handler to detect device and execute the proper deep-link strategy
    const handleGmailRedirect = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // Check if the user agent matches mobile devices
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            // Force mobile OS to execute deep-linking into native Gmail application
            window.location.href = `googlegmail:///co?to=${emailAddress}&subject=${encodedSubject}&body=${encodedBody}`;

            // Fallback: If they are on mobile but don't have the Gmail App installed specifically,
            // it kicks over to standard mail handling after a tiny fraction of a second.
            setTimeout(() => {
                window.location.href = fallbackMailtoString;
            }, 300);
        } else {
            // Open explicit Web Gmail compose tab on desktop PCs
            const webGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodedSubject}&body=${encodedBody}`;
            window.open(webGmailUrl, "_blank", "noopener,noreferrer");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Placeholder for your API route handler that hooks into Resend
            // const res = await fetch('/api/send', { method: 'POST', body: JSON.stringify(formData) });

            // Simulate API network latency
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setSubmitStatus({ type: "success", text: "Pipeline executing successfully! Your message was sent." });
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            setSubmitStatus({ type: "error", text: "Inbound stream failure. Please try again or use direct email." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-5rem)] relative ">

            {/* ── LEFT VERTICAL: SOCIAL DISCOVERY NODES (First on Mobile) ── */}
            <div className="lg:col-span-5 p-6 md:p-12 lg:p-16 flex flex-col justify-between lg:border-r border-border/40 relative group">
                <div className="space-y-6 pt-4 lg:pt-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="px-3 py-1 text-xs font-mono tracking-wider text-accent uppercase glass-card rounded-md inline-flex items-center gap-1.5 border border-accent/20 mb-4 bg-accent/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            Indexing External Nodes
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-none">
                            Connect <br />with me.
                        </h1>
                    </motion.div>
                    <p className="text-muted font-light leading-relaxed max-w-sm text-sm md:text-base">
                        Initialize a fast data sync across formal platforms or route a secure communication draft natively directly to my terminal.
                    </p>
                </div>

                <div className="space-y-4 my-12 lg:my-0 lg:pb-12 max-w-md w-full">
                    {/* LinkedIn */}
                    <motion.a
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        href="https://www.linkedin.com/in/kurt-russel-arias-984a10146"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-4 rounded-field glass-interactive border border-border/40 group/item transition-all duration-300 hover:bg-surface-secondary/40"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-field bg-accent/5 border border-accent/10 text-accent group-hover/item:bg-accent/10 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-foreground tracking-tight">LinkedIn</h4>
                                <p className="text-xs text-muted">Professional Grid & Endorsements</p>
                            </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted group-hover/item:text-accent group-hover/item:translate-x-1 transition-all" />
                    </motion.a>

                    {/* GitHub */}
                    <motion.a
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        href="https://github.com/Sairusses"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-4 rounded-field glass-interactive border border-border/40 group/item transition-all duration-300 hover:bg-surface-secondary/40"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-field bg-foreground/5 border border-border/40 text-foreground group-hover/item:bg-foreground/10 transition-colors">
                                <Github className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-foreground tracking-tight">GitHub</h4>
                                <p className="text-xs text-muted">Source Infrastructure & Logs</p>
                            </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted group-hover/item:text-foreground group-hover/item:translate-x-1 transition-all" />
                    </motion.a>

                    {/* Structured Gmail Draft Link */}
                    <motion.a
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        href={fallbackMailtoString}
                        onClick={handleGmailRedirect}
                        className="flex items-center justify-between p-4 rounded-field glass-interactive border border-border/40 group/item transition-all duration-300 hover:bg-surface-secondary/40 shadow-sm"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-field bg-success/5 border border-success/10 text-success group-hover/item:bg-success/10 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-foreground tracking-tight">Email Directly</h4>
                                <p className="text-xs text-muted">Auto-compile automated draft app payload</p>
                            </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted group-hover/item:text-success group-hover/item:translate-x-1 transition-all" />
                    </motion.a>
                </div>
            </div>

            {/* ── RIGHT VERTICAL: DIRECT INGESTION FORM (Second on Mobile) ── */}
            <div className="lg:col-span-7 p-6 md:p-12 lg:p-16 flex flex-col justify-center relative border-t lg:border-t-0 border-border/40 bg-surface-secondary/5 backdrop-blur-[2px]">
                <div className="max-w-xl w-full mx-auto space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-foreground">Direct Message Ingestion</h2>
                        <p className="text-sm text-muted font-light mt-1">Pipe validation schemas directly using the form container below.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-[11px] font-mono uppercase tracking-wider text-muted font-semibold">Identifier / Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-field bg-field-background/30 border border-border/60 text-foreground placeholder:text-muted/30 focus:outline-none focus:border-accent text-sm focus:bg-field-background/60 transition-all focus:ring-1 focus:ring-accent/20"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[11px] font-mono uppercase tracking-wider text-muted font-semibold">Return Vector / Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="name@company.com"
                                    className="w-full px-4 py-3 rounded-field bg-field-background/30 border border-border/60 text-foreground placeholder:text-muted/30 focus:outline-none focus:border-accent text-sm focus:bg-field-background/60 transition-all focus:ring-1 focus:ring-accent/20"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-[11px] font-mono uppercase tracking-wider text-muted font-semibold">Payload / Message</label>
                            <textarea
                                rows={5}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Describe query configuration, schema requirements, or deployment scope metrics..."
                                className="w-full px-4 py-3 rounded-field bg-field-background/30 border border-border/60 text-foreground placeholder:text-muted/30 focus:outline-none focus:border-accent text-sm focus:bg-field-background/60 transition-all focus:ring-1 focus:ring-accent/20 resize-none"
                            />
                        </div>

                        {/* Centered Button Wrapper */}
                        <div className="pt-2 w-full flex justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full sm:w-auto min-w-[160px] flex items-center justify-center gap-2.5 px-6 py-3.5 bg-accent text-accent-foreground font-semibold rounded-field shadow-xl shadow-accent/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-sm tracking-wide"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" /> Stream Executing...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" /> Ship Payload
                                    </>
                                )}
                            </button>
                        </div>

                        {submitStatus && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-3.5 rounded-field text-xs border font-mono ${
                                    submitStatus.type === "success"
                                        ? "bg-success/10 border-success/30 text-success"
                                        : "bg-danger/10 border-danger/30 text-danger"
                                }`}
                            >
                                {submitStatus.text}
                            </motion.div>
                        )}
                    </form>
                </div>
            </div>

        </div>
    );
}