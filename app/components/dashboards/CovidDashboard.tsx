'use client';

import { useEffect, useMemo, useState } from 'react';

type Country = {
  country: string;
  countryInfo: { iso2?: string; flag?: string };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  tests: number;
  population: number;
  updated: number;
};

type Historical = {
  cases: Record<string, number>;
  deaths: Record<string, number>;
};

function fmt(n: number): string {
  if (n >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return n.toLocaleString();
}

function diff(series: Record<string, number>): { date: string; value: number }[] {
  const entries = Object.entries(series);
  const out: { date: string; value: number }[] = [];
  for (let i = 1; i < entries.length; i++) {
    out.push({ date: entries[i][0], value: Math.max(0, entries[i][1] - entries[i - 1][1]) });
  }
  return out;
}

function LineChart({ series, color }: { series: number[]; color: string }) {
  if (series.length === 0) return null;
  const max = Math.max(...series, 1);
  const w = 600;
  const h = 140;
  const pts = series.map((v, i) => {
    const x = (i / (series.length - 1)) * w;
    const y = h - (v / max) * (h - 12) - 4;
    return [x, y] as const;
  });
  const path = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const area = `${path} L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-36" preserveAspectRatio="none">
      <defs>
        <linearGradient id="covid-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.45" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#covid-grad)" />
      <path d={path} fill="none" stroke={color} strokeWidth="1.8" />
    </svg>
  );
}

function HBars({ rows, color }: { rows: { label: string; value: number }[]; color: string }) {
  const max = Math.max(...rows.map((r) => r.value), 1);
  return (
    <div className="space-y-1.5">
      {rows.map((r) => (
        <div key={r.label} className="grid grid-cols-[120px_1fr_70px] items-center gap-3 text-xs">
          <div className="truncate text-ink-dim">{r.label}</div>
          <div className="h-3 rounded-sm bg-bg-soft overflow-hidden">
            <div
              className="h-full"
              style={{
                width: `${(r.value / max) * 100}%`,
                background: `linear-gradient(90deg, ${color}66, ${color})`,
              }}
            />
          </div>
          <div className="text-right font-mono text-ink-dim">{fmt(r.value)}</div>
        </div>
      ))}
    </div>
  );
}

export function CovidDashboard() {
  const [global, setGlobal] = useState<Country | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selected, setSelected] = useState<string>('USA');
  const [history, setHistory] = useState<Historical | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch('https://disease.sh/v3/covid-19/all').then((r) => r.json()),
      fetch('https://disease.sh/v3/covid-19/countries?sort=cases').then((r) => r.json()),
    ])
      .then(([g, c]) => {
        setGlobal(g);
        setCountries(c);
      })
      .catch((e) => setError(String(e)))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!selected) return;
    fetch(`https://disease.sh/v3/covid-19/historical/${selected}?lastdays=60`)
      .then((r) => r.json())
      .then((d) => setHistory(d.timeline ?? d))
      .catch(() => setHistory(null));
  }, [selected]);

  const topCases = useMemo(
    () => countries.slice(0, 8).map((c) => ({ label: c.country, value: c.cases })),
    [countries]
  );
  const topToday = useMemo(
    () =>
      [...countries]
        .filter((c) => c.todayCases > 0)
        .sort((a, b) => b.todayCases - a.todayCases)
        .slice(0, 8)
        .map((c) => ({ label: c.country, value: c.todayCases })),
    [countries]
  );

  const caseSeries = history ? diff(history.cases).map((d) => d.value) : [];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="font-mono text-[11px] uppercase tracking-widest text-accent-cyan">
          live · disease.sh API · refreshed on load
        </div>
        {global && (
          <div className="font-mono text-[11px] text-ink-dim">
            updated · {new Date(global.updated).toUTCString()}
          </div>
        )}
      </div>

      {error && (
        <div className="card p-4 text-sm text-accent-pink">
          Couldn’t reach disease.sh: {error}. Try refreshing — the API rate-limits.
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'total cases', value: global?.cases, color: 'text-accent-cyan' },
          { label: 'active', value: global?.active, color: 'text-accent-amber' },
          { label: 'recovered', value: global?.recovered, color: 'text-accent-green' },
          { label: 'deaths', value: global?.deaths, color: 'text-accent-pink' },
        ].map((kpi) => (
          <div key={kpi.label} className="card p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
              {kpi.label}
            </div>
            <div className={`mt-1 font-mono text-2xl ${kpi.color}`}>
              {loading || !kpi.value ? '—' : fmt(kpi.value)}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="card p-5 lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-semibold text-ink">Daily new cases · 60-day trend</h3>
              <p className="text-xs text-ink-dim mt-0.5">
                Differenced cumulative cases for the selected country
              </p>
            </div>
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="rounded-md border border-bg-border bg-bg-soft px-3 py-1.5 text-sm font-mono text-ink"
            >
              {countries.slice(0, 60).map((c) => (
                <option key={c.country} value={c.countryInfo.iso2 || c.country}>
                  {c.country}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            {caseSeries.length > 0 ? (
              <LineChart series={caseSeries} color="#22d3ee" />
            ) : (
              <div className="h-36 rounded-md border border-bg-border bg-bg-soft animate-pulse" />
            )}
          </div>
        </div>

        <div className="card p-5">
          <h3 className="font-semibold text-ink">Today’s new cases · top 8</h3>
          <p className="text-xs text-ink-dim mt-0.5">latest update window</p>
          <div className="mt-4">
            {topToday.length > 0 ? (
              <HBars rows={topToday} color="#a78bfa" />
            ) : (
              <div className="h-40 rounded-md border border-bg-border bg-bg-soft animate-pulse" />
            )}
          </div>
        </div>
      </div>

      <div className="card p-5">
        <h3 className="font-semibold text-ink">Cumulative cases · top 8 countries</h3>
        <div className="mt-4">
          {topCases.length > 0 ? (
            <HBars rows={topCases} color="#34d399" />
          ) : (
            <div className="h-40 rounded-md border border-bg-border bg-bg-soft animate-pulse" />
          )}
        </div>
      </div>

      <div className="font-mono text-[11px] text-ink-dim">
        Source · disease.sh (aggregates JHU, Worldometers, official sources). Built as a static
        client-side fetch — no backend, no auth, no API key.
      </div>
    </div>
  );
}
