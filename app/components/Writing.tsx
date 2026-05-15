import { ArrowUpRight } from 'lucide-react';
import { writing } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';

export function Writing() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" id="writing">
      <SectionHeading
        eyebrow="writing"
        title="Notes from the trenches."
        intro="Short pieces from work I keep running into in real pipelines. More to come."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {writing.map((w) => (
          <a
            key={w.title}
            href={w.url}
            className="card card-hover group flex flex-col p-5"
          >
            <div className="font-mono text-[11px] uppercase tracking-widest text-ink-dim">
              {w.publication} · {w.date}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-ink leading-snug">{w.title}</h3>
            <p className="mt-2 text-sm text-ink-dim leading-relaxed">{w.blurb}</p>
            <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm text-accent-cyan group-hover:gap-2 transition-all">
              read <ArrowUpRight size={14} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
