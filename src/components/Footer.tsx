"use client";
import { ArrowUp, Terminal, Mail, Phone } from "lucide-react";
import { DEV_INFO } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer
      id="main-footer"
      className="py-12 border-t border-slate-200/60 dark:border-white/5 bg-transparent transition-colors duration-300 print:hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand identity */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg gradient-fill flex items-center justify-center text-white shadow-md shadow-fuchsia-500/30">
            <Terminal size={17} />
          </div>
          <p className="text-sm font-display font-bold text-slate-800 dark:text-slate-100 text-left">
            {DEV_INFO.name}
            <span className="text-xs font-mono font-normal text-slate-400 dark:text-slate-500 ml-2">
              © {new Date().getFullYear()} • ALL RIGHTS RESERVED
            </span>
          </p>
        </div>

        {/* Contact quick links */}
        <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <a
            href={`mailto:${DEV_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition"
          >
            <Mail size={14} />
            {DEV_INFO.email}
          </a>
          <a
            href={`tel:${DEV_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition"
          >
            <Phone size={14} />
            {DEV_INFO.phone}
          </a>
        </div>

        {/* Back to top anchor */}
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          aria-label="Back to top"
          className="flex items-center gap-1 text-xs font-mono font-bold uppercase text-slate-400 hover:text-fuchsia-600 dark:text-slate-500 dark:hover:text-fuchsia-400 transition cursor-pointer"
        >
          <span>Scroll Top</span>
          <ArrowUp size={14} className="animate-bounce" />
        </button>
      </div>
    </footer>
  );
}
