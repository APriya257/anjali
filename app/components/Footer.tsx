import { profile } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-bg-border/60 bg-bg-soft/40">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 md:flex-row md:items-center">
        <div className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js + Tailwind.
        </div>
        <div className="inline-flex items-center gap-2 font-mono text-xs text-ink-dim">
          <CheckCircle2 size={14} className="text-accent-green" />
          pipeline ran successfully — last build {new Date().toISOString().slice(0, 10)}
        </div>
      </div>
    </footer>
  );
}
