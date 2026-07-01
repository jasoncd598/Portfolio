"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, Award, Building2, MapPin, Printer, Download, ChevronDown, ChevronUp, FileCode } from "lucide-react";
import { DEV_INFO, EXPERIENCES, SKILL_CATEGORIES } from "../data";

export default function Resume() {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const triggerPrint = () => {
    window.print();
  };

  return (
    <section
      id="resume"
      className="py-24 border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative print:bg-white print:text-black print:p-0 print:border-none"
    >
      <div className="max-w-7xl mx-auto px-6 print:max-w-full print:p-0">
        {/* Header - Hidden on printing */}
        <div className="flex flex-col items-center text-center mb-16 print:hidden">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2 inline-flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/45 px-3 py-1 rounded-full">
            <Award size={12} /> Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Timeline & Resume
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-4" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mt-3 text-center">
            A record of where I've worked, what I built, and the impact it delivered.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Timeline (Compressed on print) */}
          <div className="lg:col-span-7 flex flex-col gap-6 print:hidden">
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2 text-left">
              <Building2 className="text-indigo-600 dark:text-indigo-400" size={20} />
              Chronological History
            </h3>

            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 pl-6 flex flex-col gap-8 text-left">
              {EXPERIENCES.map((exp, index) => {
                const isExpanded = expandedId === exp.id;
                return (
                  <div key={exp.id} className="relative group">
                    {/* Circle Anchor */}
                    <div className="absolute -left-7.75 top-1 w-4 h-4 rounded-full border-2 border-indigo-600 bg-white dark:bg-slate-950 group-hover:bg-indigo-600 transition-colors" />

                    <div className="flex flex-col gap-2 p-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850/80 rounded-xl hover:shadow-md transition-shadow">
                      {/* Timeline top headers */}
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex flex-col">
                          <h4 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white leading-tight">
                            {exp.role}
                          </h4>
                          <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-1 font-semibold flex items-center gap-1">
                            {exp.company}
                          </span>
                        </div>

                        {/* Expandable toggler */}
                        <button
                          id={`exp-collapse-btn-${exp.id}`}
                          onClick={() => toggleExpand(exp.id)}
                          className="p-1 rounded bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-850 text-slate-500 cursor-pointer"
                        >
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      </div>

                      {/* Period Label */}
                      <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>

                      {/* Expandable Content body */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden mt-2"
                          >
                            <p className="text-sm text-slate-605 dark:text-slate-300 mt-2 mb-4 leading-relaxed">
                              {exp.description}
                            </p>

                            <div className="flex flex-col gap-2 pl-4 border-l-2 border-slate-100 dark:border-slate-800">
                              {exp.bullets.map((b, bIdx) => (
                                <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mt-2 shrink-0" />
                                  <p className="text-left leading-normal">{b}</p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Printable styled Resume Page Mockup */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left print:col-span-12 print:w-full">
            <div className="flex items-center justify-between print:hidden">
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <FileCode className="text-indigo-600 dark:text-indigo-400" size={20} />
                Printable PDF Copy
              </h3>
              <button
                id="doc-print-btn"
                onClick={triggerPrint}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 border border-indigo-150 dark:border-indigo-900/30 rounded-lg text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 cursor-pointer transition"
              >
                <Printer size={13} />
                Print Resume
              </button>
            </div>

            {/* Stylized physical sheet view representing the physical document */}
            <div
              id="resume-document-sheet"
              className="bg-white text-slate-900 border border-slate-200 shadow-xl rounded-xl p-8 flex flex-col gap-6 max-h-160 lg:max-h-180 overflow-y-auto print:max-h-none print:shadow-none print:border-none print:p-0"
            >
              {/* Sheet header */}
              <div className="flex justify-between items-start border-b border-slate-200 pb-5">
                <div className="text-left">
                  <h4 className="text-2xl font-display font-extrabold tracking-tight text-slate-950">
                    {DEV_INFO.name}
                  </h4>
                  <p className="text-xs font-mono font-semibold text-indigo-700 uppercase mt-0.5 tracking-wider">
                    Software Developer
                  </p>
                </div>
                <div className="text-right text-[11px] font-mono text-slate-450 leading-relaxed">
                  <p>{DEV_INFO.email}</p>
                  <p>{DEV_INFO.phone}</p>
                  <p>{DEV_INFO.location}</p>
                </div>
              </div>

              {/* Bio summary */}
              <div className="text-left flex flex-col gap-1.5">
                <h5 className="text-xs font-mono uppercase font-bold tracking-widest text-slate-400 border-b border-slate-100 pb-1">
                  Profile
                </h5>
                <p className="text-[13px] leading-relaxed text-slate-650">
                  Cross-platform mobile developer and frontend engineer with 5+ years shipping production apps on iOS, Android, and the web. Experienced in Flutter, React Native, Next.js, and AWS cloud infrastructure. Focused on clean code, security-conscious development, and UI that users actually enjoy.
                </p>
              </div>

              {/* Education */}
              <div className="text-left flex flex-col gap-1.5">
                <h5 className="text-xs font-mono uppercase font-bold tracking-widest text-slate-400 border-b border-slate-100 pb-1">
                  Education
                </h5>
                <div className="flex justify-between items-baseline">
                  <span className="text-[13px] font-bold text-slate-900">City College of Angeles</span>
                  <span className="text-[11px] font-mono text-slate-450">2016 – 2020</span>
                </div>
              </div>

              {/* Experience layout */}
              <div className="text-left flex flex-col gap-3">
                <h5 className="text-xs font-mono uppercase font-bold tracking-widest text-slate-400 border-b border-slate-100 pb-1">
                  Work Experience
                </h5>
                <div className="flex flex-col gap-4">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-baseline">
                        <span className="text-[13px] font-bold text-slate-900">{exp.company}</span>
                        <span className="text-[11px] font-mono text-slate-450">{exp.period}</span>
                      </div>
                      <div className="text-[11px] text-indigo-700/80 font-mono font-semibold">
                        {exp.role}
                      </div>
                      <ul className="mt-1 flex flex-col gap-1">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-500">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="text-left flex flex-col gap-2">
                <h5 className="text-xs font-mono uppercase font-bold tracking-widest text-slate-400 border-b border-slate-100 pb-1">
                  Skills
                </h5>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[12px] text-slate-650">
                  <div className="flex items-start gap-1.5"><span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />Cross-Platform Mobile Development</div>
                  <div className="flex items-start gap-1.5"><span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />APIs & SDKs Integration</div>
                  <div className="flex items-start gap-1.5"><span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />Web Development</div>
                  <div className="flex items-start gap-1.5"><span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />Version Control (Git)</div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-150 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span>{DEV_INFO.email}</span>
                <span>{DEV_INFO.phone}</span>
              </div>
            </div>

            {/* Print action trigger prompt */}
            <div className="flex justify-center items-center gap-3 mt-1 print:hidden">
              <span className="text-xs text-slate-400 dark:text-slate-500">
                To download, select "Save as PDF" during printing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
