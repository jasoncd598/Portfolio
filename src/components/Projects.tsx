"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Eye, Github, ExternalLink, X, Calendar, Code2, ArrowRight } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

const CATEGORY_GRADIENTS: Record<string, string> = {
  "Mobile Application": "from-violet-600 via-fuchsia-600 to-indigo-700",
  "Web Apps": "from-cyan-500 via-teal-600 to-sky-700",
  "Creative Code": "from-amber-500 via-orange-500 to-fuchsia-600",
  "Interactive Design": "from-pink-500 via-fuchsia-500 to-violet-600",
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-24 border-t border-slate-200/60 dark:border-white/5 bg-transparent transition-colors duration-300 relative"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-fuchsia-700 dark:text-fuchsia-400 uppercase mb-2 inline-flex items-center gap-1.5 glass-chip px-3 py-1 rounded-full">
            <Briefcase size={12} /> Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Projects
          </h2>
          <div className="w-12 h-1 gradient-fill rounded-full mt-4" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mt-3">
            Client work and personal projects built for production — real deployments, real users.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group flex flex-col glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-fuchsia-500/10 hover:border-fuchsia-300/60 dark:hover:border-fuchsia-800/60 transition-all duration-300"
            >
              {/* Banner */}
              <div
                className={`relative h-44 overflow-hidden ${
                  project.imageUrl
                    ? "bg-slate-900"
                    : `bg-linear-to-br ${CATEGORY_GRADIENTS[project.category] ?? "from-slate-700 to-slate-900"}`
                }`}
              >
                {project.imageUrl ? (
                  <>
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[24px_24px]" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="text-9xl font-display font-extrabold text-white/10 select-none">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </>
                )}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-white/15 backdrop-blur-sm text-white rounded-full border border-white/20">
                    {project.category}
                  </span>
                </div>
                {project.duration && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-mono text-white/70">
                    <Calendar size={10} />
                    {project.duration}
                  </div>
                )}
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-3 p-5 flex-1 text-left">
                <div>
                  <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>
                  {project.client && (
                    <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {project.client}
                    </p>
                  )}
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 flex-1">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono glass-chip text-slate-500 dark:text-slate-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono glass-chip text-slate-400 rounded">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action row */}
                <div className="flex items-center justify-between pt-3 mt-auto border-t border-slate-200/60 dark:border-slate-800">
                  <button
                    id={`project-view-btn-${project.id}`}
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold gradient-text hover:opacity-80 transition-opacity cursor-pointer group/btn"
                  >
                    <Eye size={13} />
                    Case Study
                    <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                  <div className="flex items-center gap-1">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live Demo"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-white/60 dark:hover:bg-white/5 transition-all"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Source Code"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 hover:bg-white/60 dark:hover:bg-white/5 transition-all"
                      >
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Lightbox — bottom sheet on mobile, centered modal on sm+ */}
        <AnimatePresence>
          {activeProject && (
            <div
              id="lightbox-container"
              className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-slate-950/80 backdrop-blur-md"
              onClick={(e) => {
                if (e.target === e.currentTarget) setActiveProject(null);
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 48 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                id="lightbox-content"
                className="glass-card w-full sm:max-w-2xl lg:max-w-3xl rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden relative flex flex-col max-h-[92dvh] sm:max-h-[86vh]"
              >
                {/* Close */}
                <button
                  id="lightbox-close-btn"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-900/50 hover:bg-slate-900 text-white transition"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>

                {/* Banner */}
                <div
                  className={`relative h-36 sm:h-48 shrink-0 overflow-hidden ${
                    activeProject.imageUrl
                      ? "bg-slate-900"
                      : `bg-linear-to-br ${CATEGORY_GRADIENTS[activeProject.category] ?? "from-slate-700 to-slate-900"}`
                  }`}
                >
                  {activeProject.imageUrl ? (
                    <Image
                      src={activeProject.imageUrl}
                      alt={activeProject.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[24px_24px]" />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-4 left-5 right-12">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 gradient-fill text-white rounded">
                      {activeProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mt-2 leading-tight">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>

                {/* Scrollable content */}
                <div className="overflow-y-auto flex-1 overscroll-contain">
                  <div className="p-5 sm:p-6 flex flex-col gap-5 text-left">

                    {/* Meta row */}
                    <div className="flex flex-wrap gap-x-6 gap-y-3 pb-4 border-b border-slate-200/60 dark:border-slate-800">
                      {activeProject.client && (
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tight">Client</span>
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{activeProject.client}</span>
                        </div>
                      )}
                      {activeProject.role && (
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tight">Role</span>
                          <span className="text-xs font-semibold gradient-text">{activeProject.role}</span>
                        </div>
                      )}
                      {activeProject.duration && (
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tight">Timeline</span>
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1">
                            <Calendar size={11} />
                            {activeProject.duration}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Overview */}
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 font-bold">
                        Overview
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {activeProject.description}
                      </p>
                    </div>

                    {/* Key deliverables */}
                    {activeProject.features && activeProject.features.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3 font-bold">
                          Key Deliverables
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {activeProject.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full gradient-fill mt-1.5 shrink-0" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2 font-bold flex items-center gap-1">
                        <Code2 size={10} /> Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-mono glass-chip text-slate-600 dark:text-slate-300 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA buttons */}
                    {(activeProject.demoUrl || activeProject.githubUrl) && (
                      <div className="flex flex-wrap gap-3 pt-1">
                        {activeProject.demoUrl && (
                          <a
                            id="case-study-demo-link"
                            href={activeProject.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2.5 btn-gradient rounded-lg text-sm font-medium transition"
                          >
                            <ExternalLink size={13} />
                            Live Demo
                          </a>
                        )}
                        {activeProject.githubUrl && (
                          <a
                            id="case-study-github-link"
                            href={activeProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-black dark:hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition"
                          >
                            <Github size={13} />
                            Source Code
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
