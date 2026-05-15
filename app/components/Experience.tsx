import { experience } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';
import { TechBadge } from './ui/TechBadge';

export function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" id="experience">
      <SectionHeading
        eyebrow="experience"
        title="Roles, in reverse-chronological order, with the metrics that mattered."
      />
      <ol className="relative ml-2 border-l border-bg-border pl-6 md:pl-8">
        {experience.map((e, i) => (
          <li key={i} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[9px] top-2 h-3 w-3 rounded-full bg-accent-cyan shadow-[0_0_0_4px_rgba(34,211,238,0.15)]" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold text-ink">
                {e.role} · <span className="text-accent-violet">{e.company}</span>
              </h3>
              <span className="font-mono text-xs text-ink-dim">
                {e.period} · {e.location}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {e.stack.map((s) => (
                <TechBadge key={s} label={s} />
              ))}
            </div>
            <ul className="mt-4 space-y-2.5 text-ink-dim leading-relaxed">
              {e.bullets.map((b, j) => (
                <li key={j} className="flex gap-3">
                  <span className="select-none font-mono text-accent-cyan/70">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
