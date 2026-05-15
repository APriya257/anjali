import { writing } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';

export default function Writing() {
  return (
    <section id="writing" className="section mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="08 — writing"
        title="Notes from the pipeline trenches."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {writing.map((w) => (
          <a
            key={w.title}
            href={w.href}
            className="group rounded-xl border border-bg-border bg-bg-soft/60 p-5 transition hover:border-accent-violet/60"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-ink">{w.title}</h3>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-ink-faint transition group-hover:text-accent-violet"
              />
            </div>
            <p className="mt-2 text-sm text-ink-dim">{w.note}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
