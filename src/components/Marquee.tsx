const ITEMS = [
  "Flutter",
  "React Native",
  "Next.js",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Node.js",
  "AWS Amplify",
  "Firebase",
  "Cloudflare",
  "Play Console",
  "App Store Connect",
];

function Row() {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden>
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 font-serif text-3xl italic sm:text-4xl">{item}</span>
          <span className="text-accent text-lg">✳</span>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-line bg-paper-2 py-5">
      <p className="sr-only">Tools I work with: {ITEMS.join(", ")}</p>
      <div className="marquee-track flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
