import { experience } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';
import TechBadge from './ui/TechBadge';

export default function Experience() {
  return (
    <section id="experience" className="section mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="03 — experience"
        title="Roles, in metric-led bullets."
        intro="What I built and what it moved — not just what I touched."
      />
      <ol className="relative space-y-8 border-l border-bg-border pl-6">
        {experience.map((e, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[31px] top-1.5 inline-flex size-3 items-center justify-center rounded-full bg-bg ring-2 ring-accent-cyan/70" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold text-ink">
                {e.role} <span className="text-ink-dim">· {e.company}</span>
              </h3>
              <span className="font-mono text-xs text-ink-faint">{e.period}</span>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink/90 marker:text-accent-cyan">
              {e.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {e.stack.map((s) => (
                <TechBadge key={s}>{s}</TechBadge>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
