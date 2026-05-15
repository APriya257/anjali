'use client';

import { useEffect, useRef, useState } from 'react';

type Props = { chart: string; id: string };

export default function MermaidDiagram({ chart, id }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const mermaid = (await import('mermaid')).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
          background: 'transparent',
          primaryColor: '#121821',
          primaryTextColor: '#e6edf3',
          primaryBorderColor: '#22d3ee',
          lineColor: '#a78bfa',
          secondaryColor: '#0f141c',
          tertiaryColor: '#0a0e14',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '13px',
        },
      });
      try {
        const { svg } = await mermaid.render(`m-${id}`, chart);
        if (!cancelled) setSvg(svg);
      } catch (e) {
        if (!cancelled) setSvg(`<pre class="text-xs text-red-400">${(e as Error).message}</pre>`);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  return (
    <div
      ref={ref}
      className="mermaid w-full overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
