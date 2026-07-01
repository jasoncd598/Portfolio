"use client";
import { motion } from "motion/react";
import { ArrowDown, Code2, Sparkles, Layers, ArrowRight } from "lucide-react";
import { DEV_INFO } from "../data";

export default function Hero() {
  const codePills = ["React Native", "Flutter", "Next.js", "PostgreSQL", "TypeScript", "AWS"];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-transparent transition-colors duration-300"
    >
      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 glass-chip rounded-full text-fuchsia-700 dark:text-fuchsia-400 font-mono text-xs font-semibold uppercase tracking-wider shadow-sm"
          >
            <Sparkles size={13} className="animate-spin-slow" />
            <span>Open to Work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight text-left"
          >
            I build apps and interfaces{" "}
            <span className="gradient-text bg-size-[200%_auto] animate-gradient-x">
              people enjoy using
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-md sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl text-left"
          >
            Hi, I'm <strong className="text-slate-930 dark:text-white font-semibold">{DEV_INFO.name}</strong>. {DEV_INFO.subTitle}
          </motion.p>

          {/* Code pills wrapper */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-2 pt-2"
          >
            {codePills.map((pill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium font-mono glass-chip text-slate-600 dark:text-slate-300 rounded-md"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Main Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center gap-2 px-6 py-3 btn-gradient active:scale-[0.98] rounded-lg font-display font-medium text-[15px] transition-all cursor-pointer"
            >
              Explore Work
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 px-6 py-3 glass-chip hover:bg-white/80 dark:hover:bg-white/10 text-slate-800 dark:text-slate-100 font-display font-medium text-[15px] rounded-lg transition-all cursor-pointer"
            >
              Let's Talk
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </button>
          </motion.div>
        </div>

        {/* Right column: Interactive Premium Panel/Card */}
        <div className="lg:col-span-5 relative w-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-full max-w-sm sm:max-w-md glass-card glow-violet rounded-2xl p-6 overflow-hidden group"
          >
            {/* Gradient glow ring */}
            <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-violet-500/20 via-transparent to-cyan-500/20 pointer-events-none" />

            {/* Top Bar decorative header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 glass-chip px-2 py-0.5 rounded">
                jason-david.tsx
              </span>
            </div>

            {/* Simulated styled micro code console */}
            <div className="py-4 font-mono text-xs text-left leading-relaxed text-slate-600 dark:text-slate-300">
              <span className="text-violet-500">const</span>{" "}
              <span className="text-fuchsia-500">developer</span> = {"{"}
              <div className="pl-4">
                role: <span className="text-emerald-500">"Software Developer"</span>,
                <br />
                location: <span className="text-emerald-500">"Angeles City, PH"</span>,
                <br />
                availability: <span className="text-emerald-500">"Open to Opportunities"</span>,
                <br />
                coreTech: [
                <div className="pl-4 flex flex-wrap gap-x-2 text-indigo-500 dark:text-indigo-400">
                  <span>"React Native"</span>, <span>"Expo"</span>, <span>"PostgreSQL"</span>,
                  <br />
                  <span>"Express"</span>, <span>"React"</span>, <span>"Node.js"</span>
                </div>
                ],
                <br />
                solvingFor: <span className="text-amber-500">() =&gt;</span> {"{"}
                <div className="pl-4 text-slate-400 dark:text-slate-500">
                  // Performant mobile & web apps
                  <br />
                  // with clean code & great UX
                </div>
                {"}"}
              </div>
              {"};"}
            </div>

            {/* Real metric stats embedded right in hero card */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 mt-2">
              {DEV_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl glass-chip hover:border-fuchsia-300/60 dark:hover:border-fuchsia-800/60 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-display font-extrabold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-tight mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Glowing floating visual elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-3 gradient-fill text-white rounded-full shadow-lg shadow-fuchsia-500/30 scale-75 group-hover:scale-95 transition-transform duration-300 pointer-events-none"
            >
              <Code2 size={24} />
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, delay: 1, ease: "easeInOut" }}
              className="absolute bottom-16 -left-4 p-2 bg-linear-to-tr from-cyan-500 to-teal-400 text-white rounded-full shadow-lg shadow-cyan-500/30 scale-75 pointer-events-none"
            >
              <Layers size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Down indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Scroll Down
        </span>
        <button
          onClick={() => scrollToSection("about")}
          className="p-1 rounded-full text-slate-450 hover:text-fuchsia-600 dark:text-slate-500 dark:hover:text-fuchsia-400 animate-bounce cursor-pointer"
        >
          <ArrowDown size={16} />
        </button>
      </div>
    </section>
  );
}
