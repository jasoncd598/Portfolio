"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [themeResolved, setThemeResolved] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(savedTheme ? savedTheme === "dark" : prefersDark);
    setThemeResolved(true);
  }, []);

  useEffect(() => {
    if (!themeResolved) return;
    const root = window.document.documentElement;
    const body = window.document.body;
    if (darkMode) {
      root.classList.add("dark");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, themeResolved]);

  return (
    <div className="relative isolate min-h-screen font-sans antialiased text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* Fixed animated gradient mesh backdrop shared by every section */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none print:hidden bg-linear-to-br from-violet-50 via-slate-50 to-fuchsia-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
        <div className="absolute top-[-20%] left-[-10%] w-176 h-176 rounded-full bg-violet-400/45 dark:bg-violet-700/20 blur-[110px] animate-blob" />
        <div className="absolute top-[10%] right-[-20%] w-xl h-xl rounded-full bg-fuchsia-400/40 dark:bg-fuchsia-800/20 blur-[120px] animate-blob-slow" />
        <div className="absolute bottom-[-25%] left-[10%] w-176 h-176 rounded-full bg-cyan-400/35 dark:bg-cyan-800/15 blur-[120px] animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute top-[40%] left-[35%] w-120 h-120 rounded-full bg-indigo-400/30 dark:bg-indigo-800/15 blur-[110px] animate-blob-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]" />
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
