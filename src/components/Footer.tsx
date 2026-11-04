import { DEV_INFO } from "../data";

export default function Footer() {
  return (
    <footer
      className="band-dark bg-paper text-ink"
    >
      <div className="mx-auto max-w-7xl overflow-hidden px-5 sm:px-8">
        <p
          aria-hidden
          className="select-none whitespace-nowrap border-t border-line pt-6 font-serif text-[22vw] leading-[0.8] tracking-[-0.03em] text-ink/10 sm:text-[17vw]"
        >
          Jason David
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-6">
          <p className="kicker">© {new Date().getFullYear()} {DEV_INFO.name}</p>
          <p className="kicker">Built with Next.js · Hosted on Vercel</p>
          <a href="#top" className="kicker link-draw text-ink">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
