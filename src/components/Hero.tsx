import { DEV_INFO } from "../data";

const LINES: { text: React.ReactNode; delay: number }[] = [
  { text: "I build apps", delay: 0.1 },
  { text: <>people <em className="text-accent">actually</em></>, delay: 0.22 },
  { text: "enjoy using.", delay: 0.34 },
];

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-24">
      <div className="fade-up flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4" style={{ animationDelay: "0s" }}>
        <p className="kicker">Software developer · {DEV_INFO.location.split(",")[0]}, PH</p>
        <p className="kicker flex items-center gap-2 text-ink">
          <span className="relative inline-flex h-2 w-2">
            <span className="pulse-dot absolute inset-0 rounded-full bg-moss" />
            <span className="relative h-2 w-2 rounded-full bg-moss" />
          </span>
          Available for work
        </p>
      </div>

      <h1 className="mt-10 font-serif text-[clamp(3.4rem,11.5vw,10.5rem)] leading-[0.92] tracking-[-0.02em]">
        {LINES.map((line, i) => (
          <span key={i} className="block">
            <span className="rise-mask">
              <span className="rise" style={{ animationDelay: `${line.delay}s` }}>
                {line.text}
              </span>
            </span>
          </span>
        ))}
      </h1>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <p
          className="fade-up text-lg leading-relaxed text-ink-2 md:col-span-6 lg:col-span-5"
          style={{ animationDelay: "0.55s" }}
        >
          Hi, I&apos;m <span className="text-ink">{DEV_INFO.name}</span>. {DEV_INFO.subTitle}
        </p>

        <div className="fade-up md:col-span-6 lg:col-span-6 lg:col-start-7" style={{ animationDelay: "0.65s" }}>
          <dl className="grid grid-cols-3 border-t border-line">
            {DEV_INFO.stats.map((s, i) => (
              <div key={s.label} className={`pt-4 ${i > 0 ? "border-l border-line pl-4 sm:pl-6" : ""}`}>
                <dt className="kicker">{s.label}</dt>
                <dd className="mt-2 font-serif text-5xl sm:text-6xl leading-none">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-solid">
              See the work <span aria-hidden>↓</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Start a project
            </a>
          </div>
        </div>
      </div>

      {/* Slowly turning badge */}
      <a
        href="#work"
        aria-label="Scroll to selected work"
        className="fade-up absolute right-8 top-[19rem] hidden h-32 w-32 xl:block"
        style={{ animationDelay: "0.9s" }}
      >
        <svg viewBox="0 0 100 100" className="spin-slow h-full w-full text-ink-2" aria-hidden>
          <defs>
            <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <text className="font-mono" fontSize="8.6" letterSpacing="2.4" fill="currentColor">
            <textPath href="#circle">SELECTED WORK · 2021 — 2026 · </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 grid place-items-center font-serif text-3xl text-accent">↓</span>
      </a>
    </section>
  );
}
