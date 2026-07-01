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
    <div className="min-h-screen font-sans antialiased text-slate-800 bg-slate-50 dark:text-slate-100 dark:bg-slate-950 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="w-full flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
