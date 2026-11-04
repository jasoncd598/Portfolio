"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, type MotionValue } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const year = (p: Project) => p.duration?.match(/\d{4}/)?.[0] ?? "";
const isPhone = (p: Project) => Boolean(p.gallery?.length);

/* ---------- Cursor-following preview (desktop, fine pointers only) ---------- */

function FloatingPreview({ active, x, y }: { active: number | null; x: MotionValue<number>; y: MotionValue<number> }) {
  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-30 hidden h-0 w-0 md:block"
      style={{ x, y }}
      aria-hidden
    >
      <motion.div
        animate={{ opacity: active === null ? 0 : 1, scale: active === null ? 0.85 : 1, rotate: active === null ? -6 : -2 }}
        transition={{ duration: 0.3, ease: [0.2, 0.75, 0.15, 1] }}
        className="relative"
      >
        {PROJECTS.map((p, i) =>
          p.imageUrl ? (
            <div
              key={p.id}
              className={`absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border border-line bg-paper-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] transition-opacity duration-200 ${
                i === active ? "opacity-100" : "opacity-0"
              } ${isPhone(p) ? "h-[22rem] w-[10rem]" : "h-[14rem] w-[22rem]"}`}
            >
              <Image src={p.imageUrl} alt="" fill sizes="352px" className="object-cover object-top" />
            </div>
          ) : null
        )}
      </motion.div>
    </motion.div>
  );
}

/* ---------- Case study sheet ---------- */

function CaseSheet({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const images = project.gallery ?? (project.imageUrl ? [project.imageUrl] : []);

  return (
    <motion.div className="fixed inset-0 z-[60]" initial={{ opacity: 1 }} exit={{ opacity: 1 }}>
      <motion.div
        className="absolute inset-0 bg-ink/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5, ease: [0.2, 0.75, 0.15, 1] }}
        className="absolute right-0 top-0 h-full w-full max-w-3xl overflow-y-auto overscroll-contain bg-paper border-l border-line"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper px-6 py-4 sm:px-10">
          <span className="kicker">{project.category}</span>
          <button ref={closeRef} onClick={onClose} className="kicker text-ink link-draw">
            Close ✕
          </button>
        </div>

        <div className="px-6 pb-16 pt-10 sm:px-10">
          <h3 id="case-title" className="font-serif text-6xl leading-none sm:text-8xl">
            {project.title}
          </h3>
          <p className="mt-6 text-xl leading-relaxed text-ink-2">{project.summary}</p>

          {images.length > 0 && (
            <div
              className={`mt-10 ${
                isPhone(project) ? "flex gap-4 overflow-x-auto pb-2 snap-x" : ""
              }`}
            >
              {images.map((src, i) => (
                <div
                  key={src}
                  className={`relative shrink-0 snap-start overflow-hidden rounded-lg border border-line bg-paper-2 ${
                    isPhone(project) ? "aspect-[9/20] w-[44%] sm:w-[30%]" : "aspect-[16/9] w-full"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 700px"
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          )}

          <dl className="mt-10 grid grid-cols-3 border-y border-line">
            {[
              ["Role", project.role],
              ["Client", project.client],
              ["Year", project.duration],
            ].map(([k, v], i) => (
              <div key={k} className={`py-4 ${i > 0 ? "border-l border-line pl-4" : ""}`}>
                <dt className="kicker">{k}</dt>
                <dd className="mt-1 text-sm">{v}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 text-lg leading-relaxed">{project.description}</p>

          {project.features && (
            <>
              <h4 className="kicker mt-12">What went into it</h4>
              <ol className="mt-4">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-5 border-b border-line py-4 text-ink-2">
                    <span className="font-mono text-xs text-accent pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ol>
            </>
          )}

          <ul className="mt-10 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-2">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
                {project.demoIconUrl && (
                  <Image src={project.demoIconUrl} alt="" width={16} height={16} />
                )}
                {project.demoLabel ?? "Visit live site"} <span aria-hidden>↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Source on GitHub <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      </motion.aside>
    </motion.div>
  );
}

/* ---------- Section ---------- */

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [open, setOpen] = useState<Project | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 30, mass: 0.5 });
  const y = useSpring(my, { stiffness: 260, damping: 30, mass: 0.5 });

  const onMove = (e: React.MouseEvent) => {
    mx.set(e.clientX + 120);
    my.set(e.clientY);
  };

  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHead
        index="01"
        title={<>Selected <em>work</em></>}
        aside="Shipped products and client builds. Open any row for the full story."
      />

      <ul onMouseMove={onMove} onMouseLeave={() => setHovered(null)}>
        {PROJECTS.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 0.06} className="border-b border-line">
            <button
              onClick={() => setOpen(p)}
              onMouseEnter={() => setHovered(i)}
              onFocus={() => setHovered(null)}
              className="group grid w-full grid-cols-12 items-baseline gap-x-4 gap-y-2 py-8 text-left sm:py-10"
            >
              <span className="col-span-2 font-mono text-xs text-ink-3 sm:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-10 sm:col-span-6">
                <span className="block font-serif text-5xl leading-none transition-[transform,color] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-3 group-hover:text-accent sm:text-7xl">
                  {p.title}
                </span>
                <span className="mt-3 block max-w-md text-sm text-ink-2">{p.summary}</span>
              </span>
              <span className="col-span-6 col-start-3 kicker sm:col-span-3 sm:col-start-auto">
                {p.category}
              </span>
              <span className="col-span-4 flex items-baseline justify-end gap-4 sm:col-span-2">
                <span className="kicker">{year(p)}</span>
                <span className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </span>

              {/* Inline thumbnail on touch / small screens */}
              {p.imageUrl && (
                <span
                  className={`relative col-span-10 col-start-3 mt-4 block overflow-hidden rounded-lg border border-line bg-paper-2 md:hidden ${
                    isPhone(p) ? "aspect-[4/3]" : "aspect-[16/9]"
                  }`}
                >
                  <Image src={p.imageUrl} alt="" fill sizes="90vw" className="object-cover object-top" />
                </span>
              )}
            </button>
          </Reveal>
        ))}
      </ul>

      <FloatingPreview active={hovered} x={x} y={y} />

      <AnimatePresence>{open && <CaseSheet project={open} onClose={close} />}</AnimatePresence>
    </section>
  );
}
