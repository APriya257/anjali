'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ExternalLink, Github, ChevronDown, ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';
import { TechBadge } from './ui/TechBadge';

const LIVE_DEMO_SLUGS = new Set(['covid-surveillance', 'crypto-streaming', 'flight-tracker']);

const MermaidDiagram = dynamic(
  () => import('./ui/MermaidDiagram').then((m) => m.MermaidDiagram),
  { ssr: false, loading: () => <DiagramSkeleton /> }
);

function DiagramSkeleton() {
  return (
    <div className="h-48 rounded-lg border border-bg-border bg-bg-soft animate-pulse" />
  );
}

const accentRing: Record<Project['accent'], string> = {
  cyan: 'hover:border-accent-cyan/40',
  violet: 'hover:border-accent-violet/40',
  green: 'hover:border-accent-green/40',
  amber: 'hover:border-accent-amber/40',
  pink: 'hover:border-accent-pink/40',
};

const accentText: Record<Project['accent'], string> = {
  cyan: 'text-accent-cyan',
  violet: 'text-accent-violet',
  green: 'text-accent-green',
  amber: 'text-accent-amber',
  pink: 'text-accent-pink',
};

function ProjectCard({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={`card ${accentRing[p.accent]} transition-colors p-6 flex flex-col`}
      id={`project-${p.slug}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest ${accentText[p.accent]}`}>
            project · {p.slug}
            {LIVE_DEMO_SLUGS.has(p.slug) && (
              <span className="inline-flex items-center gap-1 rounded-full border border-accent-green/40 bg-accent-green/5 px-1.5 py-0.5 text-[9px] text-accent-green">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse" />
                live demo
              </span>
            )}
          </div>
          <h3 className="mt-2 text-xl font-semibold text-ink leading-snug">{p.title}</h3>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-ink-dim">
          <a
            href={p.github}
            aria-label="github repo"
            className="rounded-md border border-bg-border p-1.5 hover:text-ink hover:border-accent-violet/40"
          >
            <Github size={14} />
          </a>
          <Link
            href={`/projects/${p.slug}/`}
            aria-label="open project detail"
            className="rounded-md border border-bg-border p-1.5 hover:text-ink hover:border-accent-cyan/40"
          >
            <ExternalLink size={14} />
          </Link>
        </div>
      </div>
      <p className="mt-3 text-ink-dim leading-relaxed">{p.pitch}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <TechBadge key={s} label={s} accent={p.accent} />
        ))}
      </div>

      <ul className="mt-5 space-y-2 text-sm text-ink-dim">
        {p.metrics.map((m, i) => (
          <li key={i} className="flex gap-2">
            <span className={`font-mono ${accentText[p.accent]}`}>▸</span>
            <span>{m}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Link
          href={`/projects/${p.slug}/`}
          className={`inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-mono transition-colors ${
            LIVE_DEMO_SLUGS.has(p.slug)
              ? 'border-accent-green/40 bg-accent-green/5 text-accent-green hover:bg-accent-green/10'
              : 'border-accent-cyan/40 bg-accent-cyan/5 text-accent-cyan hover:bg-accent-cyan/10'
          }`}
        >
          {LIVE_DEMO_SLUGS.has(p.slug) ? 'open live dashboard' : 'open project'}
          <ArrowUpRight size={12} />
        </Link>
        <button
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center gap-1 rounded-md border border-bg-border px-3 py-1.5 text-xs font-mono text-ink-dim hover:text-ink hover:border-accent-cyan/40"
        >
          <ChevronDown size={12} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
          {open ? 'collapse' : 'inline architecture'}
        </button>
      </div>

      {open && (
        <div className="mt-5 space-y-4">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-ink-dim">problem</div>
            <p className="mt-1 text-sm text-ink-dim leading-relaxed">{p.problem}</p>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-ink-dim">
              approach
            </div>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-dim">
              {p.approach.map((a, i) => (
                <li key={i} className="flex gap-2">
                  <span className="font-mono text-accent-cyan/70">{(i + 1).toString().padStart(2, '0')}</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-ink-dim mb-2">
              architecture
            </div>
            <MermaidDiagram chart={p.diagram} id={p.slug} />
          </div>
        </div>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" id="projects">
      <SectionHeading
        eyebrow="projects"
        title="Six pipelines, each one solving a specific kind of pain."
        intro="Click into a card for the architecture, the problem statement, and the trade-offs. Every project has a GitHub repo and a live (or placeholder) dashboard."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </section>
  );
}
