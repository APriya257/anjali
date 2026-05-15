import { Database, Workflow, Cloud, BarChart3, Code2, ShieldCheck } from 'lucide-react';
import { skills } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';
import { TechBadge } from './ui/TechBadge';

const iconMap = {
  database: Database,
  workflow: Workflow,
  cloud: Cloud,
  chart: BarChart3,
  code: Code2,
  shield: ShieldCheck,
};

export function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" id="skills">
      <SectionHeading
        eyebrow="skills"
        title="What I reach for, grouped by where in the stack it lives."
        intro="I’m happiest with SQL + Python + a strong opinion about modeling. Below is the working set — things I use enough to have opinions about."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => {
          const Icon = iconMap[g.icon];
          return (
            <div key={g.heading} className="card card-hover p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan">
                  <Icon size={16} />
                </span>
                <h3 className="font-semibold text-ink">{g.heading}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <TechBadge key={s} label={s} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
