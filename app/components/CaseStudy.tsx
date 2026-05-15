'use client';

import dynamic from 'next/dynamic';
import { projects } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';
import { TechBadge } from './ui/TechBadge';

const MermaidDiagram = dynamic(
  () => import('./ui/MermaidDiagram').then((m) => m.MermaidDiagram),
  { ssr: false }
);

const caseSlug = 'nyc-taxi-lakehouse';

export function CaseStudy() {
  const p = projects.find((x) => x.slug === caseSlug)!;
  return (
    <section className="relative py-20" id="case-study">
      <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="case study"
          title="NYC Taxi Trip Lakehouse — Iceberg from raw to gold."
          intro="A deep dive on the project I keep iterating on. Why Iceberg over Delta for this use case, how I structured bronze/silver/gold, and the trade-offs of hidden partitioning."
        />
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-6 text-ink-dim leading-relaxed">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent-amber">
                problem
              </div>
              <p className="mt-1">{p.problem}</p>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent-amber">
                what I built
              </div>
              <ul className="mt-2 space-y-2">
                {p.approach.map((a, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-mono text-accent-cyan/70">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent-amber">
                trade-offs worth naming
              </div>
              <ul className="mt-2 space-y-2">
                <li className="flex gap-3">
                  <span className="font-mono text-accent-violet/70">·</span>
                  <span>
                    <strong className="text-ink">Iceberg vs Delta:</strong> chose Iceberg for hidden
                    partitioning + branching + the more open metadata model. Delta would have been
                    fine with Databricks; on bare Trino/Spark, Iceberg felt cleaner.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-accent-violet/70">·</span>
                  <span>
                    <strong className="text-ink">Bucketing on pickup_location_id:</strong> sped up
                    zone-grain queries but means we re-bucket on hot-zone evolution. Acceptable for
                    this workload; would be a smell if zones changed weekly.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-accent-violet/70">·</span>
                  <span>
                    <strong className="text-ink">Snapshot expiration policy:</strong> 14-day
                    retention. Long enough to time-travel for incident response, short enough that
                    we’re not paying to keep historical snapshots indefinitely.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {p.stack.map((s) => (
                <TechBadge key={s} label={s} accent="amber" />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="card p-5">
              <div className="font-mono text-[11px] uppercase tracking-widest text-accent-amber">
                outcomes
              </div>
              <ul className="mt-3 space-y-3 text-sm text-ink-dim">
                {p.metrics.map((m, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="font-mono text-accent-amber">▸</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <MermaidDiagram chart={p.diagram} id="case-study-diagram" />
            </div>
            <div className="card p-5 font-mono text-xs text-ink-dim">
              <div className="text-accent-cyan mb-2">$ trino --execute "SELECT count(*) FROM iceberg.gold.fact_trip"</div>
              <div className="text-accent-green">     1,478,302,617</div>
              <div className="text-ink-dim/70 mt-2">(8 years · ~280 GB on S3 after compaction)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
