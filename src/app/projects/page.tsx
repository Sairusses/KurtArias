"use client";

import { motion } from "framer-motion";
import { Construction, Database, ShieldCheck, Zap } from "lucide-react";

export default function ProjectsPage() {
    return (
        // Changed to pt-12 to remove excessive top space on mobile
        <div className="min-h-screen pt-12 pb-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                // Added max-auto to keep content centered without forcing flex-center
                className="w-full max-w-xl mx-auto text-center"
            >
                <div className="flex justify-center mb-6 md:mb-8">
                    <div className="p-3 md:p-4 bg-accent/10 rounded-2xl border border-accent/20">
                        <Construction className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                    </div>
                </div>

                <h1 className="text-2xl md:text-4xl font-extrabold mb-6 text-foreground tracking-tight">
                    Data Infrastructure in Progress
                </h1>

                <p className="text-sm md:text-base text-muted leading-relaxed mb-8 max-w-md mx-auto">
                    I am currently finalizing the documentation for my data engineering projects. These architectures are being structured to demonstrate:
                </p>

                <div className="space-y-1 mb-8 max-w-md mx-auto text-left">
                    <DetailItem icon={<Database className="w-4 h-4" />} text="Scalable ETL/ELT pipeline design." />
                    <DetailItem icon={<Zap className="w-4 h-4" />} text="Optimized schema for low-latency queries." />
                    <DetailItem icon={<ShieldCheck className="w-4 h-4" />} text="Robust production-ready data assets." />
                </div>

                <p className="text-xs md:text-sm font-mono text-accent/80 bg-accent/5 py-2 px-4 rounded-full inline-block">
                    Deployment in progress...
                </p>
            </motion.div>
        </div>
    );
}

function DetailItem({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <div className="flex items-center gap-3 text-sm text-foreground/80 font-medium py-3 border-b border-border/20 last:border-0">
            <span className="text-accent shrink-0">{icon}</span>
            <span>{text}</span>
        </div>
    );
}