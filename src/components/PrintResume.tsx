import { DEV_INFO, EXPERIENCES, SKILL_CATEGORIES, PROJECTS } from "../data";

/** Only rendered when printing (window.print / Save as PDF). */
export default function PrintResume() {
  return (
    <article className="hidden print:block text-black text-[11pt] leading-snug font-sans p-0">
      <header className="border-b border-black pb-3">
        <h1 className="font-serif text-[30pt] leading-none">{DEV_INFO.name}</h1>
        <p className="mt-1">{DEV_INFO.title}</p>
        <p className="mt-1 text-[9.5pt]">
          {DEV_INFO.email} · {DEV_INFO.phone} · {DEV_INFO.location}
        </p>
      </header>

      <section className="mt-4">
        <h2 className="text-[9pt] uppercase tracking-widest font-semibold">Summary</h2>
        <p className="mt-1">{DEV_INFO.bio}</p>
      </section>

      <section className="mt-4">
        <h2 className="text-[9pt] uppercase tracking-widest font-semibold">Experience</h2>
        {EXPERIENCES.map((e) => (
          <div key={e.id} className="mt-2 break-inside-avoid">
            <div className="flex justify-between font-semibold">
              <span>{e.role}, {e.company}</span>
              <span className="font-normal">{e.period}</span>
            </div>
            <ul className="ml-4 list-disc">
              {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-4">
        <h2 className="text-[9pt] uppercase tracking-widest font-semibold">Selected projects</h2>
        {PROJECTS.map((p) => (
          <p key={p.id} className="mt-1"><strong>{p.title}</strong> ({p.duration}): {p.summary}</p>
        ))}
      </section>

      <section className="mt-4">
        <h2 className="text-[9pt] uppercase tracking-widest font-semibold">Skills</h2>
        {SKILL_CATEGORIES.map((c) => (
          <p key={c.title} className="mt-1"><strong>{c.title}:</strong> {c.skills.join(", ")}</p>
        ))}
      </section>
    </article>
  );
}
