"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { DEV_INFO } from "../data";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background blur change
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120; // offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav id="main-nav" className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 pt-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto flex justify-between items-center rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-panel shadow-xl shadow-violet-950/5 dark:shadow-black/30 px-5 py-3"
            : "bg-transparent px-5 py-4"
        }`}
      >
        {/* Brand Logo */}
        <button
          id="logo-btn"
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 text-xl font-display font-bold text-slate-900 dark:text-white cursor-pointer select-none group"
        >
          <div className="w-8 h-8 rounded-lg gradient-fill flex items-center justify-center text-white group-hover:scale-105 group-hover:rotate-3 transition-transform duration-200 shadow-md shadow-fuchsia-500/30">
            <Terminal size={18} />
          </div>
          <span>
            {DEV_INFO.name.split(" ")[0]}
            <span className="gradient-text">.</span>
            <span className="font-mono text-xs font-normal tracking-widest text-slate-400 dark:text-slate-500 ml-1 uppercase hidden md:inline-block">
              dev
            </span>
          </span>
        </button>

        {/* Desktop Nav Items */}
        <div id="desktop-menu" className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-display text-[15px] font-medium transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 gradient-fill rounded-full shadow-md shadow-fuchsia-500/30 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />

          {/* Theme Toggle & Hire CTAs */}
          <div className="flex items-center gap-3">
            <button
              id="theme-toggler"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full text-slate-600 hover:text-fuchsia-600 hover:bg-white/60 dark:text-slate-300 dark:hover:text-fuchsia-400 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              id="hier-me-btn"
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-1.5 px-4 py-2 text-[14px] font-display font-medium rounded-full btn-gradient transition-all duration-200 cursor-pointer"
            >
              Hire Me
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="theme-toggler-mobile"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 cursor-pointer"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-white/60 dark:hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden max-w-6xl mx-auto mt-2 glass-panel shadow-xl shadow-violet-950/5 dark:shadow-black/30 rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 font-display text-[16px] font-medium transition-colors ${
                    activeSection === item.id
                      ? "gradient-text font-semibold"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-slate-200 dark:bg-slate-800 my-1" />
              <button
                id="hire-me-mobile-btn"
                onClick={() => scrollToSection("contact")}
                className="w-full text-center py-2.5 btn-gradient rounded-lg font-display font-medium text-sm transition-colors"
              >
                Hire Me Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
