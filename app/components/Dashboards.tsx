import { dashboards } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';

function Bars() {
  const bars = [62, 41, 78, 33, 55, 70, 48, 90, 25, 60];
  return (
    <svg viewBox="0 0 220 100" className="w-full h-full">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 22 + 4}
          y={100 - h}
          width="14"
          height={h}
          rx="2"
          className="fill-accent-cyan/80"
          opacity={0.55 + (i % 3) * 0.15}
        />
      ))}
      <line x1="0" y1="99" x2="220" y2="99" stroke="#1f2937" strokeWidth="1" />
    </svg>
  );
}

function LineChart() {
  const pts = [10, 22, 18, 30, 24, 35, 28, 38, 32, 42, 36, 50, 45, 58, 52, 64, 60, 72];
  const path = pts
    .map((p, i) => {
      const x = (i / (pts.length - 1)) * 220;
      const y = 100 - p;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    })
    .join(' ');
  const area = `${path} L220,100 L0,100 Z`;
  return (
    <svg viewBox="0 0 220 100" className="w-full h-full">
      <defs>
        <linearGradient id="lg-vio" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#lg-vio)" />
      <path d={path} fill="none" stroke="#a78bfa" strokeWidth="2" />
      <line x1="0" y1="99" x2="220" y2="99" stroke="#1f2937" strokeWidth="1" />
    </svg>
  );
}

function Heatmap() {
  const rows = 6;
  const cols = 14;
  const cells: number[] = [];
  for (let i = 0; i < rows * cols; i++) {
    cells.push((Math.sin(i * 1.7) + 1) / 2);
  }
  return (
    <svg viewBox="0 0 220 100" className="w-full h-full">
      {cells.map((v, i) => {
        const r = Math.floor(i / cols);
        const c = i % cols;
        return (
          <rect
            key={i}
            x={c * 15 + 4}
            y={r * 14 + 8}
            width="13"
            height="12"
            rx="2"
            fill="#34d399"
            opacity={0.18 + v * 0.7}
          />
        );
      })}
    </svg>
  );
}

function Sankey() {
  return (
    <svg viewBox="0 0 220 100" className="w-full h-full">
      <defs>
        <linearGradient id="sk1" x1="0" x2="1">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f472b6" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="sk2" x1="0" x2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path
        d="M10,30 C80,30 140,20 210,20 L210,40 C140,40 80,55 10,55 Z"
        fill="url(#sk1)"
      />
      <path
        d="M10,60 C80,60 140,70 210,70 L210,90 C140,90 80,85 10,85 Z"
        fill="url(#sk2)"
      />
      <line x1="10" y1="20" x2="10" y2="92" stroke="#22d3ee" strokeWidth="3" />
      <line x1="210" y1="18" x2="210" y2="92" stroke="#a78bfa" strokeWidth="3" />
    </svg>
  );
}

const renderers = {
  bars: Bars,
  line: LineChart,
  heatmap: Heatmap,
  sankey: Sankey,
};

const metricAccent = {
  bars: 'text-accent-cyan',
  line: 'text-accent-violet',
  heatmap: 'text-accent-green',
  sankey: 'text-accent-amber',
} as const;

export function Dashboards() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" id="dashboards">
      <SectionHeading
        eyebrow="dashboards"
        title="A few illustrative views — mocked here, real in production."
        intro="Sketches of the kinds of dashboards I’ve shipped. Live versions live behind auth at past employers; the data engineering shape is the same."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {dashboards.map((d) => {
          const R = renderers[d.kind];
          return (
            <div key={d.title} className="card card-hover p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-ink">{d.title}</h3>
                  <p className="mt-1 text-sm text-ink-dim">{d.context}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className={`font-mono text-2xl ${metricAccent[d.kind]}`}>{d.metric}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                    {d.metricLabel}
                  </div>
                </div>
              </div>
              <div className="mt-4 h-32">
                <R />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
