import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import dynamic from 'next/dynamic';
import { projects } from '@/lib/data';
import { Nav } from '@/app/components/Nav';
import { Footer } from '@/app/components/Footer';
import { TechBadge } from '@/app/components/ui/TechBadge';

const MermaidDiagram = dynamic(
  () => import('@/app/components/ui/MermaidDiagram').then((m) => m.MermaidDiagram),
  { ssr: false }
);

const CovidDashboard = dynamic(
  () => import('@/app/components/dashboards/CovidDashboard').then((m) => m.CovidDashboard),
  { ssr: false, loading: () => <DashboardLoading /> }
);
const CryptoDashboard = dynamic(
  () => import('@/app/components/dashboards/CryptoDashboard').then((m) => m.CryptoDashboard),
  { ssr: false, loading: () => <DashboardLoading /> }
);
const FlightDashboard = dynamic(
  () => import('@/app/components/dashboards/FlightDashboard').then((m) => m.FlightDashboard),
  { ssr: false, loading: () => <DashboardLoading /> }
);

function DashboardLoading() {
  return (
    <div className="card p-10 text-center font-mono text-sm text-ink-dim">
      Booting dashboard…
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const Dashboard =
    project.slug === 'covid-surveillance'
      ? CovidDashboard
      : project.slug === 'crypto-streaming'
      ? CryptoDashboard
      : project.slug === 'flight-tracker'
      ? FlightDashboard
      : null;

  return (
    <main>
      <Nav />
      <section className="relative isolate overflow-hidden pt-24 md:pt-28 pb-10">
        <div className="absolute inset-0 bg-aurora opacity-50 pointer-events-none" aria-hidden />
        <div className="absolute inset-0 bg-grid-mask pointer-events-none opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1 font-mono text-xs text-ink-dim hover:text-accent-cyan"
          >
            <ArrowLeft size={12} /> back to projects
          </Link>
          <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-cyan">
            project · {project.slug}
          </div>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="mt-3 max-w-3xl text-ink-dim leading-relaxed">{project.pitch}</p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {project.stack.map((s) => (
              <TechBadge key={s} label={s} accent={project.accent} />
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={project.github}
              className="inline-flex items-center gap-1.5 rounded-md border border-bg-border px-3 py-1.5 text-sm text-ink-dim hover:text-ink hover:border-accent-violet/40"
            >
              <Github size={14} /> repo
            </a>
            <a
              href={project.dashboard}
              className="inline-flex items-center gap-1.5 rounded-md border border-bg-border px-3 py-1.5 text-sm text-ink-dim hover:text-ink hover:border-accent-cyan/40"
            >
              <ExternalLink size={14} /> source on portfolio
            </a>
          </div>
        </div>
      </section>

      {Dashboard ? (
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-green">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-green animate-pulse" />
            live demo · running in your browser
          </div>
          <Dashboard />
        </section>
      ) : (
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className="card p-6 text-sm text-ink-dim">
            <div className="font-mono text-[11px] uppercase tracking-widest text-accent-amber">
              demo
            </div>
            <p className="mt-2">
              Live demo for this project isn’t embedded — the upstream data either isn’t available
              as a public CORS-friendly feed, or the volume is too large for a browser-side
              dashboard. The architecture, approach, and metrics are below; the repo has the full
              implementation.
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-6 text-ink-dim leading-relaxed">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-ink-dim">
                problem
              </div>
              <p className="mt-2">{project.problem}</p>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-ink-dim">
                approach
              </div>
              <ul className="mt-2 space-y-2">
                {project.approach.map((a, i) => (
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
              <div className="font-mono text-[11px] uppercase tracking-widest text-ink-dim">
                outcomes
              </div>
              <ul className="mt-2 space-y-2">
                {project.metrics.map((m, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-mono text-accent-green">▸</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-widest text-ink-dim mb-2">
              architecture
            </div>
            <MermaidDiagram chart={project.diagram} id={`detail-${project.slug}`} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
