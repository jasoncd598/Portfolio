"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DEV_INFO } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const EMPTY = { name: "", email: "", subject: "", message: "", _gotcha: "" };
type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(({ [name]: _, ...rest }) => rest);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "That email address doesn't look right.";
    if (!form.subject.trim()) e.subject = "Please add a subject.";
    if (!form.message.trim()) e.message = "Please add a message.";
    else if (form.message.trim().length < 15) e.message = "Please add a bit more detail (at least 15 characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const flash = (s: Status) => {
    setStatus(s);
    setTimeout(() => setStatus("idle"), 5500);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honeypot: real users never fill it, so fake success without spending the Formspree quota.
    if (form._gotcha) {
      setForm(EMPTY);
      return flash("sent");
    }

    setStatus("sending");
    try {
      const { _gotcha, ...payload } = form;
      const res = await fetch("https://formspree.io/f/mkolbkrr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Formspree error");
      setForm(EMPTY);
      flash("sent");
    } catch {
      flash("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DEV_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const field = (name: "name" | "email" | "subject", label: string, type = "text") => (
    <label className="block">
      <span className="kicker">{label}</span>
      <input
        name={name}
        type={type}
        value={form[name]}
        onChange={onChange}
        autoComplete={name === "subject" ? "off" : name}
        aria-invalid={Boolean(errors[name])}
        className="field"
      />
      {errors[name] && <span className="mt-1 block text-xs text-accent">{errors[name]}</span>}
    </label>
  );

  return (
    <section
      id="contact"
      className="band-dark border-t border-line bg-paper text-ink"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead index="04" title={<>Let&apos;s <em>talk</em></>} aside="Usually replies within a day" />

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-serif text-4xl leading-[1.1] sm:text-6xl">
                Have an app or site in mind? I&apos;d like to hear about it.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${DEV_INFO.email}`}
                  className="link-draw font-serif text-3xl italic text-accent sm:text-4xl break-all"
                >
                  {DEV_INFO.email}
                </a>
                <button onClick={copyEmail} className="kicker rounded-full border border-line px-3 py-1.5 hover:border-ink transition-colors">
                  {copied ? "Copied ✓" : "Copy"}
                </button>
              </div>
              <dl className="mt-10 grid grid-cols-2 border-t border-line">
                <div className="py-4">
                  <dt className="kicker">Phone</dt>
                  <dd className="mt-1 text-sm">
                    <a href={`tel:${DEV_INFO.phone.replace(/\s/g, "")}`} className="link-draw">{DEV_INFO.phone}</a>
                  </dd>
                </div>
                <div className="border-l border-line py-4 pl-4">
                  <dt className="kicker">Based in</dt>
                  <dd className="mt-1 text-sm">{DEV_INFO.location}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8">
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-7">
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                {field("name", "Name")}
                {field("email", "Email", "email")}
              </div>
              {field("subject", "Subject")}
              <label className="block">
                <span className="kicker">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  aria-invalid={Boolean(errors.message)}
                  className="field resize-none"
                />
                {errors.message && <span className="mt-1 block text-xs text-accent">{errors.message}</span>}
              </label>
              <input
                type="text"
                name="_gotcha"
                value={form._gotcha}
                onChange={onChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn bg-accent text-accent-ink hover:bg-ink hover:text-paper disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"} <span aria-hidden>→</span>
                </button>
                <AnimatePresence mode="wait">
                  {(status === "sent" || status === "error") && (
                    <motion.p
                      key={status}
                      role="status"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-ink-2"
                    >
                      {status === "sent"
                        ? "Thanks, your message is on its way."
                        : `Couldn't send that. Email me directly at ${DEV_INFO.email}.`}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
