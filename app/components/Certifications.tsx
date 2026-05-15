import { certifications } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';
import { BadgeCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="section mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="07 — certifications"
        title="What I've certified, formally."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c) => (
          <div
            key={c.title}
            className="rounded-xl border border-bg-border bg-bg-soft/60 p-5"
          >
            <BadgeCheck size={20} className="text-accent-green" />
            <h3 className="mt-3 text-sm font-semibold text-ink">{c.title}</h3>
            <p className="mt-1 text-xs text-ink-dim">
              {c.issuer} · {c.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
