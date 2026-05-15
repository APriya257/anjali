import { dashboards } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';

function MiniChart({ variant }: { variant: number }) {
  // Inline placeholder SVGs — each "dashboard" thumbnail has a different feel.
  const v = variant % 4;
  if (v === 0) {
    return (
      <svg viewBox="0 0 200 100" className="h-full w-full">
        <defs>
          <linearGradient id="g0" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,80 L20,60 L40,65 L60,40 L80,45 L100,25 L120,30 L140,15 L160,20 L180,5 L200,10 L200,100 L0,100 Z"
          fill="url(#g0)"
        />
        <path
          d="M0,80 L20,60 L40,65 L60,40 L80,45 L100,25 L120,30 L140,15 L160,20 L180,5 L200,10"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.5"
        />
      </svg>
    );
  }
  if (v === 1) {
    return (
      <svg viewBox="0 0 200 100" className="h-full w-full">
        {Array.from({ length: 16 }).map((_, i) => {
          const h = 20 + ((i * 37) % 60);
          return (
            <rect
              key={i}
              x={6 + i * 12}
              y={100 - h}
              width="8"
              height={h}
              fill="#a78bfa"
              opacity={0.6 + (i % 3) * 0.15}
            />
          );
        })}
      </svg>
    );
  }
  if (v === 2) {
    return (
      <svg viewBox="0 0 200 100" className="h-full w-full">
        {Array.from({ length: 60 }).map((_, i) => {
          const x = (i % 12) * 16 + 8;
          const y = Math.floor(i / 12) * 18 + 12;
          const intensity = ((i * 53) % 100) / 100;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width="14"
              height="14"
              rx="2"
              fill="#34d399"
              opacity={0.15 + intensity * 0.75}
            />
          );
        })}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 100" className="h-full w-full">
      <circle cx="100" cy="55" r="34" fill="none" stroke="#1f2937" strokeWidth="14" />
      <circle
        cx="100"
        cy="55"
        r="34"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="14"
        strokeDasharray="160 214"
        strokeLinecap="round"
        transform="rotate(-90 100 55)"
      />
      <text x="100" y="60" textAnchor="middle" fontSize="16" fill="#e6edf3" fontFamily="JetBrains Mono">
        74%
      </text>
    </svg>
  );
}

export default function Dashboards() {
  return (
    <section id="dashboards" className="section mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="06 — dashboards"
        title="A peek at the BI work."
        intro="Thumbnails are placeholders; full dashboards are linked from each project."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboards.map((d, i) => (
          <div
            key={d.title}
            className="overflow-hidden rounded-xl border border-bg-border bg-bg-soft/60"
          >
            <div className="aspect-[2/1] bg-bg p-3">
              <MiniChart variant={i} />
            </div>
            <div className="border-t border-bg-border/70 p-4">
              <h3 className="text-sm font-semibold text-ink">{d.title}</h3>
              <p className="mt-1 text-xs text-ink-dim">{d.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
