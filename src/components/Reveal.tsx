"use client";
import { useEffect, useRef } from "react";

/**
 * Fades + lifts its children once when they scroll into view.
 * Pure CSS transition toggled by one shared IntersectionObserver — content stays
 * visible if JS never runs (the hidden state only applies under html.js).
 */
let observer: IntersectionObserver | null = null;
function getObserver() {
  if (observer || typeof IntersectionObserver === "undefined") return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          observer?.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px" }
  );
  return observer;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = getObserver();
    if (!io) {
      el.classList.add("in");
      return;
    }
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
