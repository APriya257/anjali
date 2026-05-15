'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/lib/data';

const STAGES = [
  { msg: '[scheduler] picking up DAG run anjali_portfolio_v1', cls: 'text-ink-dim' },
  { msg: '[airflow] task ingest_raw → SUCCESS  (3.2s)', cls: 'text-accent-cyan' },
  { msg: '[dbt] running 84 models, 612 tests…', cls: 'text-accent-violet' },
  { msg: '[dbt] all 612 tests passed in 4m 41s', cls: 'text-accent-green' },
  { msg: '[great_expectations] all expectations met', cls: 'text-accent-green' },
  { msg: '[publish] portfolio refreshed at ' + new Date().toISOString(), cls: 'text-ink' },
  { msg: '[scheduler] pipeline ran successfully ✓', cls: 'text-accent-green' },
];

export function Footer() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (idx >= STAGES.length) return;
    const t = setTimeout(() => setIdx((i) => i + 1), 900 + idx * 60);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <footer className="mt-10 border-t border-bg-border">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="card p-5 font-mono text-[12px] leading-relaxed">
          <div className="flex items-center justify-between border-b border-bg-border pb-2">
            <span className="text-ink-dim">~/portfolio · scheduler log</span>
            <span className="text-ink-dim">tail -f</span>
          </div>
          <div className="mt-3 space-y-1">
            {STAGES.slice(0, idx + 1).map((s, i) => (
              <div key={i} className={s.cls}>
                <span className="text-ink-dim mr-2">{`>`}</span>
                {s.msg}
              </div>
            ))}
            {idx < STAGES.length && (
              <span className="inline-block w-2 h-3.5 bg-accent-cyan animate-blink align-middle ml-1" />
            )}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-dim">
          <div>
            © {new Date().getFullYear()} {profile.name} · built with Next.js & deployed to GitHub Pages.
          </div>
          <div className="font-mono text-xs">
            commit · main · <span className="text-accent-green">green</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
