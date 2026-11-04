import Reveal from "./Reveal";

export default function SectionHead({
  index,
  title,
  aside,
}: {
  index: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-accent">({index})</span>
        <h2 className="font-serif text-5xl leading-none tracking-[-0.01em] sm:text-7xl">{title}</h2>
      </div>
      {aside && <div className="kicker max-w-xs sm:text-right">{aside}</div>}
    </Reveal>
  );
}
