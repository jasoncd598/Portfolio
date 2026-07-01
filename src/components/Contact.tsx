"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2, RefreshCw, MessageSquareCode, Trash2, XCircle } from "lucide-react";
import { DEV_INFO } from "../data";
import { ContactInquiry } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [recentInquiries, setRecentInquiries] = useState<ContactInquiry[]>([]);

  // Load sent messages from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_inquiries");
    if (saved) {
      try {
        setRecentInquiries(JSON.parse(saved));
      } catch (err) {
        console.error("Failed to parse local contact logs", err);
      }
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on write
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please tell me your name so I can address you appropriately.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please state your email address so I can respond to your proposal.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "This email address format doesn't look correct.";
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please specify a brief subject line for your project inquiry.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief description of what you are building.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Please detail your request a bit further (at least 15 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setIsError(false);

    try {
      const res = await fetch("https://formspree.io/f/mkolbkrr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Formspree error");

      const newInquiry: ContactInquiry = {
        ...formData,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const updatedLogs = [newInquiry, ...recentInquiries].slice(0, 5);
      localStorage.setItem("portfolio_inquiries", JSON.stringify(updatedLogs));
      setRecentInquiries(updatedLogs);

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5500);
    } catch {
      setIsError(true);
      setTimeout(() => setIsError(false), 5500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearSentHistory = () => {
    localStorage.removeItem("portfolio_inquiries");
    setRecentInquiries([]);
  };

  return (
    <section
      id="contact"
      className="py-24 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors duration-300 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-2 inline-flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/45 px-3 py-1 rounded-full">
            <Mail size={12} /> Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Initiate An Engagement
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-4" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mt-3 text-center">
            Ready to convert your visual concept into a robust codebase? Drop a message detailing your requirements.
          </p>
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          {/* Left Column: Coordination details & Mock offline DB */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              Let's build something together
            </h3>
            <p className="text-slate-605 dark:text-slate-300 leading-relaxed text-sm">
              I'm open to freelance projects, contract work, and full-time opportunities. Whether you need a mobile app, a web build, or someone to take over an existing codebase — send me the details and let's figure out if we're a good fit.
            </p>

            {/* Direct coordination items */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-slate-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-tight">Direct Email</h4>
                  <a href={`mailto:${DEV_INFO.email}`} className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                    {DEV_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-slate-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-tight">Direct Line / Signal</h4>
                  <a href={`tel:${DEV_INFO.phone}`} className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                    {DEV_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-slate-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-tight">HQ Coordinates</h4>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-250">
                    {DEV_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Local sandbox log visual representation */}
            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200/60 dark:border-slate-800 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-bold flex items-center gap-1.5">
                  <MessageSquareCode size={13} /> Saved Sent History
                </span>
                {recentInquiries.length > 0 && (
                  <button
                    id="clear-sent-history-btn"
                    onClick={clearSentHistory}
                    className="text-[10px] font-mono text-red-500 hover:text-red-600 flex items-center gap-0.5"
                  >
                    <Trash2 size={11} /> Clear
                  </button>
                )}
              </div>

              <div className="flex flex-col gap-2 max-h-35 overflow-y-auto pr-1">
                {recentInquiries.length === 0 ? (
                  <p className="text-xs text-slate-400 dark:text-slate-500 italic py-2">
                    No recent submissions found in local browser storage. Try sending one!
                  </p>
                ) : (
                  recentInquiries.map((inq, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded bg-white dark:bg-slate-950 border border-slate-150 dark:border-slate-850 flex flex-col gap-1 text-[11px]"
                    >
                      <div className="flex justify-between font-mono text-[10px] text-slate-400">
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400 truncate max-w-30">
                          To: {DEV_INFO.name.split(" ")[0]}
                        </span>
                        <span>{inq.date}</span>
                      </div>
                      <div className="font-bold text-slate-800 dark:text-slate-200">
                        Re: {inq.subject}
                      </div>
                      <p className="text-slate-500 line-clamp-1 italic">
                        "{inq.message}"
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Interaction Form Canvas */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm">
            <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
              {/* Name & Email Multi Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Emily Watson"
                    className={`px-4 py-2 text-sm bg-white dark:bg-slate-950 border ${
                      errors.name ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                    } hover:border-slate-350 focus:border-indigo-500 dark:hover:border-slate-700 dark:focus:border-indigo-400 rounded-lg outline-none transition`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-0.5">
                      <AlertCircle size={11} className="shrink-0" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="emily@company.io"
                    className={`px-4 py-2 text-sm bg-white dark:bg-slate-950 border ${
                      errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                    } hover:border-slate-350 focus:border-indigo-500 dark:hover:border-slate-700 dark:focus:border-indigo-400 rounded-lg outline-none transition`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-0.5">
                      <AlertCircle size={11} className="shrink-0" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                  Subject Line
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry about new dashboard layout..."
                  className={`px-4 py-3 text-sm bg-white dark:bg-slate-950 border ${
                    errors.subject ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                  } hover:border-slate-350 focus:border-indigo-500 dark:hover:border-slate-700 dark:focus:border-indigo-400 rounded-lg outline-none transition`}
                />
                {errors.subject && (
                  <span className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-0.5">
                    <AlertCircle size={11} className="shrink-0" />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message Box */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                  Project Brief or Inquiry Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your goals, tech stack, timeline & coordinate constraints..."
                  className={`px-4 py-3 text-sm bg-white dark:bg-slate-950 border ${
                    errors.message ? "border-red-500" : "border-slate-200 dark:border-slate-800"
                  } hover:border-slate-350 focus:border-indigo-500 dark:hover:border-slate-700 dark:focus:border-indigo-400 rounded-lg outline-none transition resize-none`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-500 font-medium flex items-center gap-1 mt-0.5">
                    <AlertCircle size={11} className="shrink-0" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Form trigger submission button */}
              <button
                type="submit"
                id="contact-submit-btn"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 cursor-pointer bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-450 dark:disabled:bg-slate-800 disabled:cursor-not-allowed text-white rounded-lg py-3 text-sm font-semibold shadow hover:shadow-lg transition-all"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    Validating & Dispatching...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Project Inquiry
                  </>
                )}
              </button>

              {/* Status alerts notifications */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40 rounded-xl text-emerald-800 dark:text-emerald-300 flex items-start gap-3 mt-1"
                  >
                    <CheckCircle2 size={18} className="text-emerald-650 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-bold text-xs sm:text-sm">Message sent!</span>
                      <p className="text-[11px] sm:text-xs text-emerald-700 dark:text-emerald-400/80 mt-0.5">
                        Got it — I'll get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
                {isError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 rounded-xl text-red-800 dark:text-red-300 flex items-start gap-3 mt-1"
                  >
                    <XCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-bold text-xs sm:text-sm">Something went wrong</span>
                      <p className="text-[11px] sm:text-xs text-red-700 dark:text-red-400/80 mt-0.5">
                        Couldn't send your message. Try emailing me directly at {DEV_INFO.email}.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
