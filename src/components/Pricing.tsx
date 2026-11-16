"use client";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

// Starting prices in PHP; final quote depends on scope.
const PLANS = [
  {
    name: "Website",
    price: "From ₱5,000",
    blurb: "Landing pages, business and clinic sites, and web apps.",
    includes: [
      "Responsive design for every screen",
      "Contact forms and email delivery",
      "Domain, hosting and deployment setup",
      "SEO and performance basics",
    ],
  },
  {
    name: "Mobile app",
    price: "From ₱20,000",
    blurb: "iOS and Android apps built with Flutter or React Native.",
    includes: [
      "UI design and cross-platform build",
      "Backend with Supabase or Firebase",
      "App Store and Google Play submission",
      "Release management and compliance",
    ],
  },
  {
    name: "Ongoing support",
    price: "From ₱2,000 / month",
    blurb: "Keep an existing app or site healthy after launch.",
    includes: [
      "Bug fixes and small features",
      "Dependency and OS updates",
      "Recurring vulnerability scans",
      "Store policy updates",
    ],
  },
];

export const PREFILL_EVENT = "contact:prefill";

function requestQuote(plan: string) {
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: { subject: `Quote request: ${plan}` } }));
}

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-line bg-paper-2">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead
          index="04"
          title={<>Pricing &amp; <em>quotes</em></>}
          aside="Fixed-price quotes, no obligation"
        />

        <Reveal>
          <p className="mt-14 max-w-2xl text-2xl font-medium leading-[1.3] tracking-tight sm:text-[2.1rem]">
            Every project is different, so I quote per project. Send a short brief and I&apos;ll reply with a{" "}
            <span className="text-accent">fixed price</span> and timeline.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 border-t border-line md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.name}
              as="li"
              delay={0.05 * i}
              className={`flex flex-col py-8 md:pr-8 ${i > 0 ? "border-t border-line md:border-t-0 md:border-l md:pl-8" : ""}`}
            >
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-2 display text-5xl">{plan.name}</h3>
                <p className="kicker mt-3 text-ink">{plan.price}</p>
                <p className="mt-4 text-sm text-ink-2">{plan.blurb}</p>
                <ul className="mt-6 flex-1 border-t border-line">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-3 border-b border-line py-3 text-sm">
                      <span aria-hidden className="text-accent">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={() => requestQuote(plan.name)}
                  className="kicker link-draw mt-6 self-start text-ink"
                >
                  Get a quote →
                </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
