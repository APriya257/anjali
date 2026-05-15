import { caseStudy, projects } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';
import TechBadge from './ui/TechBadge';

export default function CaseStudy() {
  const p = projects.find((x) => x.slug === caseStudy.projectSlug);
  return (
    <section
      id="case-study"
      className="section mx-auto max-w-6xl px-5 py-20"
    >
      <SectionHeading
        eyebrow="05 — case study"
        title={caseStudy.title}
        intro="One project, deeper. The problem, the architecture decisions, and what they actually moved."
      />
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-xl border border-bg-border bg-bg-soft/60 p-5">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-pink">
            Problem
          </div>
          <p className="text-sm text-ink/90">{caseStudy.problem}</p>
        </div>
        <div className="rounded-xl border border-bg-border bg-bg-soft/60 p-5">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-violet">
            Key decisions
          </div>
          <ul className="list-disc space-y-1 pl-5 text-sm text-ink/90 marker:text-accent-violet">
            {caseStudy.decisions.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-bg-border bg-bg-soft/60 p-5">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-green">
            Results
          </div>
          <ul className="list-disc space-y-1 pl-5 text-sm text-ink/90 marker:text-accent-green">
            {caseStudy.results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
      {p ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>
      ) : null}
    </section>
  );
}
