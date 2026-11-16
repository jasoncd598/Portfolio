"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";

const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

function useLocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "Asia/Manila",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="group relative grid h-8 w-8 place-items-center rounded-full border border-line hover:border-ink transition-colors"
    >
      {/* Half-filled disc that turns over */}
      <span
        className="block h-3.5 w-3.5 rounded-full border border-ink transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
        style={{
          background: "linear-gradient(90deg, var(--ink) 50%, transparent 50%)",
          transform: dark ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const time = useLocalTime();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open ? "bg-paper border-b border-line" : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
            <span className="display text-2xl">Jason David</span>
            <span className="kicker hidden sm:inline transition-colors group-hover:text-accent">/ dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item, i) => (
              <a key={item.id} href={`#${item.id}`} className="group flex items-baseline gap-1.5 text-sm">
                <span className="font-mono text-[10px] text-ink-3 group-hover:text-accent transition-colors">
                  0{i + 1}
                </span>
                <span className="link-draw">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="kicker hidden lg:inline tabular-nums" title="Local time in Angeles City">
              PH {time}
            </span>
            <ThemeToggle />
            <button
              className="md:hidden kicker text-ink"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        <motion.div
          className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-accent"
          style={{ scaleX: progress }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-paper pt-24 px-5 md:hidden"
          >
            <ul className="flex flex-col">
              {NAV.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.2, 0.75, 0.15, 1] }}
                  className="border-b border-line"
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5"
                  >
                    <span className="display text-6xl">{item.label}</span>
                    <span className="font-mono text-xs text-ink-3">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="kicker mt-10">Angeles City, PH · {time}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
