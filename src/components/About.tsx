import Image from "next/image";
import { DEV_INFO, SKILL_CATEGORIES } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const PRINCIPLES = [
  ["Clean", "Code the next person can read without a tour guide."],
  ["Secure", "Recurring vulnerability scans, not a checkbox before launch."],
  ["Fast", "Interfaces that respond before you wonder if they will."],
];

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead index="02" title={<>About <em>me</em></>} aside={DEV_INFO.location} />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <figure className="group relative w-full max-w-[14rem] sm:max-w-xs">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-paper">
                <Image
                  src="/jason.webp"
                  alt={`Portrait of ${DEV_INFO.name}`}
                  fill
                  sizes="320px"
                  className="object-cover grayscale-[35%] transition-[filter,transform] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <figcaption className="kicker mt-3 flex justify-between">
                <span>{DEV_INFO.name}</span>
                <span>Est. 2021</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-serif text-3xl leading-[1.2] sm:text-[2.6rem]">
                Five years of shipping apps to real people: from React Native to Flutter, from App Store
                review queues to <em className="text-accent">server-authoritative</em> multiplayer.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl leading-relaxed text-ink-2">{DEV_INFO.bio}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-3">
                {PRINCIPLES.map(([title, text], i) => (
                  <li
                    key={title}
                    className={`py-6 sm:pr-6 ${i > 0 ? "border-t border-line sm:border-t-0 sm:border-l sm:pl-6" : ""}`}
                  >
                    <span className="font-mono text-xs text-accent">0{i + 1}</span>
                    <h3 className="mt-2 font-serif text-3xl">{title}</h3>
                    <p className="mt-2 text-sm text-ink-2">{text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="kicker mt-14">Toolkit</h3>
              <dl className="mt-4">
                {SKILL_CATEGORIES.map((cat) => (
                  <div
                    key={cat.title}
                    className="group grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-3 sm:gap-6"
                  >
                    <dt className="text-sm font-medium transition-colors group-hover:text-accent">{cat.title}</dt>
                    <dd className="text-sm text-ink-2 sm:col-span-2">{cat.skills.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
