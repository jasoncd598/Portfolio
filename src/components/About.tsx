"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { User, ShieldCheck, MapPin, Award, CheckCircle, Flame } from "lucide-react";
import { DEV_INFO, SKILL_CATEGORIES } from "../data";

export default function About() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="about"
      className="py-24 border-t border-slate-200/60 dark:border-white/5 bg-transparent transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-fuchsia-700 dark:text-fuchsia-400 uppercase mb-2 inline-flex items-center gap-1.5 glass-chip px-3 py-1 rounded-full">
            <User size={12} /> About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            A Bit About Me
          </h2>
          <div className="w-12 h-1 gradient-fill rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          {/* Left Column: Creative Bio Story */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full ring-4 ring-white/80 dark:ring-slate-800/80 shadow-lg shadow-fuchsia-500/20 overflow-hidden shrink-0"
              >
                <Image
                  src="/jason.webp"
                  alt={DEV_INFO.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Flame className="text-violet-500 shrink-0" size={24} />
                How I Work
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-md">
              {DEV_INFO.bio}
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-md">
              Whether it&apos;s a React Native app at BC Remittance or a client site deployed on AWS, I approach it the same way: <strong>keep the code clean, keep it secure, and keep it fast</strong>.
            </p>

            {/* Micro Details checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <CheckCircle className="text-fuchsia-600 dark:text-fuchsia-400 shrink-0" size={18} />
                <span className="text-sm font-medium">App Store & Google Play Releases</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <CheckCircle className="text-fuchsia-600 dark:text-fuchsia-400 shrink-0" size={18} />
                <span className="text-sm font-medium">Security Scanning with Snyk</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <CheckCircle className="text-fuchsia-600 dark:text-fuchsia-400 shrink-0" size={18} />
                <span className="text-sm font-medium">AWS Cloud Infrastructure</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                <CheckCircle className="text-fuchsia-600 dark:text-fuchsia-400 shrink-0" size={18} />
                <span className="text-sm font-medium">Responsive & Accessible UI/UX</span>
              </div>
            </div>

            {/* Quick Card info */}
            <div className="p-4 glass-card rounded-xl flex items-center gap-4 mt-2">
              <div className="w-10 h-10 rounded-full gradient-fill flex items-center justify-center text-white shrink-0 shadow-md shadow-fuchsia-500/30">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Location & Contact
                </h4>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-250">
                  {DEV_INFO.location}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Skills Matrix */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-display font-medium text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="text-fuchsia-600 dark:text-fuchsia-400" size={18} />
                Skills & Technologies
              </h3>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                Focus Areas
              </span>
            </div>

            {/* Interactive Category selection Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {SKILL_CATEGORIES.map((category, idx) => (
                <button
                  key={idx}
                  id={`skill-tab-${idx}`}
                  onClick={() => setActiveCategory(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-display font-medium transition-all duration-200 cursor-pointer ${
                    activeCategory === idx
                      ? "btn-gradient"
                      : "glass-chip text-slate-600 hover:text-slate-900 dark:text-slate-350 dark:hover:text-white"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* Skill tag list */}
            <div className="flex flex-wrap gap-2">
              {SKILL_CATEGORIES[activeCategory].skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  className="px-3 py-1.5 rounded-lg text-sm font-heading font-semibold glass-chip text-slate-700 dark:text-slate-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Quality badge disclaimer */}
            <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-2 text-slate-400 dark:text-slate-500">
              <ShieldCheck size={16} />
              <span className="text-[11px] font-mono uppercase tracking-wide">
                Tested on iOS, Android, and across responsive viewports
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
