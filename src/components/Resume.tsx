"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EXPERIENCES } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Resume() {
  const [openId, setOpenId] = useState<string | null>(EXPERIENCES[0]?.id ?? null);

  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHead
        index="03"
        title={<>Experience</>}
        aside={
          <button onClick={() => window.print()} className="link-draw text-ink">
            Print / save résumé as PDF ↗
          </button>
        }
      />

      <ol>
        {EXPERIENCES.map((exp, i) => {
          const isOpen = openId === exp.id;
          return (
            <Reveal as="li" key={exp.id} delay={i * 0.06} className="border-b border-line">
              <button
                onClick={() => setOpenId(isOpen ? null : exp.id)}
                aria-expanded={isOpen}
                className="group grid w-full grid-cols-12 items-baseline gap-x-4 gap-y-2 py-8 text-left"
              >
                <span className="col-span-12 kicker sm:col-span-3">{exp.period}</span>
                <span className="col-span-10 sm:col-span-8">
                  <span className="block font-serif text-3xl leading-tight transition-colors group-hover:text-accent sm:text-4xl">
                    {exp.role}
                  </span>
                  <span className="mt-1 block text-sm text-ink-2">
                    {exp.company} · {exp.location}
                  </span>
                </span>
                <span
                  className={`col-span-2 justify-self-end text-2xl transition-transform duration-300 sm:col-span-1 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.2, 0.75, 0.15, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-12 gap-x-4 pb-10">
                      <div className="col-span-12 sm:col-span-8 sm:col-start-4">
                        <p className="leading-relaxed text-ink-2">{exp.description}</p>
                        <ul className="mt-6">
                          {exp.bullets.map((b, j) => (
                            <li key={j} className="flex gap-4 border-t border-line py-3 text-sm">
                              <span className="text-accent">—</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
