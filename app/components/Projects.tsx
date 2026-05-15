'use client';

import { useState } from 'react';
import { projects, type Project } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';
import TechBadge from './ui/TechBadge';
import MermaidDiagram from './ui/MermaidDiagram';
import { ChevronDown, ExternalLink, Github } from 'lucide-react';

const accentRing: Record<NonNullable<Project['accent']>, string> = {
  cyan: 'ring-accent-cyan/40 hover:ring-accent-cyan',
  violet: 'ring-accent-violet/40 hover:ring-accent-violet',
  green: 'ring-accent-green/40 hover:ring-accent-green',
  amber: 'ring-accent-amber/40 hover:ring-accent-amber',
  pink: 'ring-accent-pink/40 hover:ring-accent-pink',
};

const accentDot: Record<NonNullable<Project['accent']>, string> = {
  cyan: 'bg-accent-cyan',
  violet: 'bg-accent-violet',
  green: 'bg-accent-green',
  amber: 'bg-accent-amber',
  pink: 'bg-accent-pink',
};

export default function Projects() {
  const [openSlug, setOpenSlug] = useState<string | null>(projects[0]?.slug ?? null);

  return (
    <section id="projects" className="section mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="04 — projects"
        title="Pipelines I've built end-to-end."
        intro="Click a card to peek at the architecture and the numbers."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => {
          const open = openSlug === p.slug;
          const accent = p.accent ?? 'cyan';
          return (
            <article
              key={p.slug}
              className={`group rounded-xl border border-bg-border bg-bg-soft/60 p-5 ring-1 transition ${accentRing[accent]}`}
            >
              <button
                onClick={() => setOpenSlug(open ? null : p.slug)}
                className="flex w-full items-start justify-between gap-4 text-left"
                aria-expanded={open}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`size-2 rounded-full ${accentDot[accent]}`} />
                    <h3 className="text-base font-semibold tracking-tight text-ink">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm text-ink-dim">{p.pitch}</p>
                </div>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-ink-faint transition-transform ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <TechBadge key={t}>{t}</TechBadge>
                ))}
              </div>

              {open ? (
                <div className="mt-5 space-y-4 border-t border-bg-border/70 pt-4">
                  <div className="rounded-lg border border-bg-border/60 bg-bg/60 p-3">
                    <MermaidDiagram chart={p.diagram} id={p.slug} />
                  </div>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-ink/90 marker:text-accent-cyan">
                    {p.impact.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  {p.links?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          className="inline-flex items-center gap-1.5 rounded-md border border-bg-border bg-bg-soft px-2.5 py-1 text-xs text-ink hover:bg-bg-card"
                        >
                          {l.label === 'GitHub' ? (
                            <Github size={12} />
                          ) : (
                            <ExternalLink size={12} />
                          )}
                          {l.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
