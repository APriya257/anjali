import { Award } from 'lucide-react';
import { certs } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';

export function Certifications() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" id="certifications">
      <SectionHeading eyebrow="certifications" title="Certifications I’ve earned." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {certs.map((c) => (
          <div key={c.name} className="card card-hover p-5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-accent-amber/30 bg-accent-amber/5 text-accent-amber">
              <Award size={16} />
            </span>
            <h3 className="mt-3 font-medium text-ink leading-snug">{c.name}</h3>
            <div className="mt-1 font-mono text-xs text-ink-dim">
              {c.issuer} · {c.year}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
