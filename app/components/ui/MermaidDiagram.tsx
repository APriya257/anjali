'use client';

import { useEffect, useRef, useState } from 'react';

let mermaidPromise: Promise<typeof import('mermaid').default> | null = null;
function loadMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import('mermaid').then((m) => {
      m.default.initialize({
        startOnLoad: false,
        theme: 'base',
        securityLevel: 'loose',
        fontFamily: 'JetBrains Mono, ui-monospace, monospace',
        themeVariables: {
          background: '#0f141c',
          primaryColor: '#121821',
          primaryTextColor: '#e6edf3',
          primaryBorderColor: '#22d3ee',
          lineColor: '#a78bfa',
          secondaryColor: '#121821',
          tertiaryColor: '#0f141c',
          fontSize: '13px',
        },
      });
      return m.default;
    });
  }
  return mermaidPromise;
}

export function MermaidDiagram({ chart, id }: { chart: string; id: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadMermaid()
      .then(async (mermaid) => {
        try {
          const { svg } = await mermaid.render(`m-${id}`, chart);
          if (!cancelled && ref.current) {
            ref.current.innerHTML = svg;
          }
        } catch (e: unknown) {
          if (!cancelled) setError(e instanceof Error ? e.message : 'diagram error');
        }
      })
      .catch((e) => {
        if (!cancelled) setError(e instanceof Error ? e.message : 'mermaid load failed');
      });
    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (error) {
    return (
      <pre className="rounded-lg border border-bg-border bg-bg-soft p-4 font-mono text-xs text-ink-dim overflow-x-auto">
        {chart}
      </pre>
    );
  }

  return (
    <div
      ref={ref}
      className="overflow-x-auto rounded-lg border border-bg-border bg-bg-soft p-4 [&_svg]:mx-auto [&_svg]:max-w-full [&_svg]:h-auto"
    />
  );
}
