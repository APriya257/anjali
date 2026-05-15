import { skills } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';
import TechBadge from './ui/TechBadge';

export default function Skills() {
  return (
    <section id="skills" className="section mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="02 — toolbox"
        title="The modern data stack I actually ship with."
        intro="Grouped, not just a wall of logos — these are the tools I use day-to-day."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => (
          <div
            key={g.label}
            className="rounded-xl border border-bg-border bg-bg-soft/60 p-5"
          >
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-cyan">
              {g.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <TechBadge key={s}>{s}</TechBadge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
