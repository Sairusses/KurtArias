"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import {
  Code2,
  MapPin,
  User,
  ExternalLink,
  Mail,
  Terminal,
  Database,
  Smartphone,
  Layers,
  GraduationCap
} from "lucide-react";

// --- Data ---
const personalInfo = {
  name: "Kurt Arias",
  role: "Software Developer",
  location: "Marilao, Bulacan",
  age: 22,
  education: "BS Computer Science (4th Year Graduating)",
  email: "kurtarias123@gmail.com",
  image: "/next.svg",
};

const skillCategories = [
  {
    title: "Core Languages",
    icon: <Terminal size={18} />,
    skills: [
      { name: "Dart", level: 80 },
      { name: "Python", level: 60 },
      { name: "Java", level: 70 },
      { name: "TypeScript", level: 75 },
      { name: "PHP", level: 50 },
      { name: "C#", level: 70 },
    ]
  },
  {
    title: "Frontend & Mobile",
    icon: <Smartphone size={18} />,
    skills: [
      { name: "Flutter", level: 80 },
      { name: "Native Android", level: 60 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 65 },
      { name: "HTML/CSS", level: 80 },
    ]
  },
  {
    title: "Backend & DB",
    icon: <Database size={18} />,
    skills: [
      { name: "SQL", level: 75 },
      { name: "Supabase", level: 80 },
      { name: "Firebase", level: 60 },
    ]
  },
  {
    title: "AI & Tools",
    icon: <Layers size={18} />,
    skills: [
      { name: "MediaPipe", level: 50 },
      { name: "TensorFlow", level: 50 },
      { name: "Git/GitHub", level: 85 },
    ]
  }
];

const projects = [
  {
    title: "SignSpeak",
    url: "https://www.signspeak.website/",
    tech: "Flutter / AI / MediaPipe / TensorFlow",
    description: "An innovative application bridging communication gaps using sign language recognition with AI processing."
  },
  {
    title: "F & R Recruitment Platform",
    url: "https://www.f-and-r.site/",
    tech: "React / Supabase / PostgreSQL",
    description: "A professional recruitment hub for 'F and R' Agency. Features a custom matching algorithm that analyzes candidate profiles against job requirements to rank opportunities by percentage match, streamlining the connection between employers and job seekers."
  }
];

// --- Animation Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const fadeUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 70, damping: 20 }
  }
};

const progressBar: Variants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 1, delay: 0.5, ease: "easeOut" }
  })
};

export default function Portfolio() {
  // Now that we removed the inner 'overflow-y-auto', the main window scrolls.
  // This means useScroll() will work correctly by default.
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-yellow-400 selection:text-zinc-950 font-sans">

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-[100]"
        style={{ scaleX }}
      />

      <div className="flex flex-col lg:flex-row w-full">
        <motion.header
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:fixed lg:left-0 lg:top-0 lg:bottom-0 lg:w-[30%] w-full h-screen flex flex-col justify-center relative overflow-hidden border-r border-zinc-900"
        >
          <div className="absolute inset-0 -z-10 bg-zinc-900">
            <motion.div
              animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
              className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
          </div>

          <div className="relative z-10 space-y-8 px-10 lg:px-16">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-32 h-32 rounded-full border-4 border-yellow-400/20 overflow-hidden shadow-2xl shadow-yellow-900/20 bg-zinc-900 flex items-center justify-center"
            >
              <img src={personalInfo.image} alt="Profile" className="w-full h-full object-cover p-2" />
            </motion.div>

            <div>
              <div className="inline-block px-3 py-1 mb-3 border border-yellow-400/30 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-mono tracking-widest uppercase">
                Open to Work
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-none">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl text-yellow-400 mt-4 font-medium">{personalInfo.role}</h2>
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              Bridging the gap between complex logic and elegant user interfaces. Building the future from {personalInfo.location}.
            </p>

            <div className="flex flex-col gap-4 text-sm font-mono text-zinc-500 pt-6 border-t border-zinc-800/50">
              <InfoItem icon={<User />} text={`${personalInfo.age} Years Old`} />
              <InfoItem icon={<GraduationCap />} text={personalInfo.education} />
              <InfoItem icon={<MapPin />} text={personalInfo.location} />
              <InfoItem icon={<Mail />} text={personalInfo.email} />
            </div>
          </div>
        </motion.header>

        <main className="lg:ml-[40%] lg:w-[70%] w-full relative z-10 bg-zinc-950">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="px-6 py-20 lg:px-20 lg:py-32 space-y-32"
          >

            <Section title="About Me">
              <div className="bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                <p className="leading-relaxed text-zinc-300 text-lg">
                  I am a graduating <strong className="text-yellow-400">Computer Science</strong> student driven by the challenge of creating efficient, scalable systems.
                  From architecting robust website front-ends and training AI models with TensorFlow to building fluid mobile interfaces in Flutter,
                  My core mission is centered on creating <span className="italic text-zinc-100"> high-impact solutions to real-world problems</span>.
                </p>
              </div>
            </Section>

            <Section title="Technical Stack">
              <div className="grid grid-cols-1 gap-6">
                {skillCategories.map((cat, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="bg-zinc-900/30 p-8 rounded-xl border border-zinc-800 hover:bg-zinc-900/60 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-8 text-yellow-400 border-b border-zinc-800 pb-4">
                      <div className="p-3 bg-yellow-400/10 rounded-lg">
                        {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 24 })}
                      </div>
                      <h3 className="text-xl font-bold text-zinc-100">{cat.title}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                      {cat.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-xs font-mono text-zinc-500 mb-2">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                              variants={progressBar}
                              custom={skill.level}
                              className="h-full bg-yellow-400 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section title="Featured Projects">
              <div className="grid gap-12">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </Section>

            <footer className="pt-20 border-t border-zinc-800/50 text-center text-zinc-600 text-sm font-mono">
              <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
              <p className="mt-2">Designed with Next.js & TailwindCSS</p>
            </footer>

          </motion.div>
        </main>
      </div>
    </div>
  );
}


function InfoItem({ icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-3 text-zinc-400 hover:text-yellow-400 transition-colors duration-200 group cursor-default">
      <span className="text-zinc-600 group-hover:text-yellow-400 transition-colors">
        {React.cloneElement(icon, { size: 18 })}
      </span>
      <span>{text}</span>
    </div>
  );
}

function Section({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <motion.section variants={fadeUp} className="relative">
      <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
        <span className="w-12 h-1.5 bg-yellow-400 rounded-full"></span>
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      whileHover={{ scale: 1.01 }}
      className="group relative block p-10 bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-yellow-400/30 transition-colors duration-500"
    >
      <div className="absolute top-8 right-8 p-3 bg-zinc-800/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity -rotate-45 group-hover:rotate-0 duration-300">
        <ExternalLink className="text-yellow-400" size={20} />
      </div>

      {/* Glow Effect */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl group-hover:bg-yellow-400/10 transition-colors duration-500" />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-yellow-400">
            <Code2 size={28} />
          </div>
          <h3 className="text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.tech.split(" / ").map((tech: string, i: number) => (
            <span key={i} className="px-4 py-1.5 bg-zinc-950 border border-zinc-800 rounded-full text-sm font-mono text-zinc-400 group-hover:border-yellow-400/30 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}