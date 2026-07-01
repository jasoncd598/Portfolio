import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jason David | Software Developer',
  description: 'Freelance software developer specializing in cross-platform mobile apps and production web applications — React Native, Flutter, PERN stack, Next.js, AWS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
