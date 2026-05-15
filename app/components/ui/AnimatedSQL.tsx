'use client';

import { useEffect, useState } from 'react';

const lines = [
  'with daily_flights as (',
  '  select',
  '    carrier,',
  '    date_trunc(\'day\', dep_time) as d,',
  '    count(*) as flights,',
  '    avg(delay_min) as avg_delay',
  '  from raw.flights',
  '  where dep_time >= current_date - 30',
  '  group by 1, 2',
  ')',
  'select * from daily_flights',
  'order by d desc, avg_delay desc;',
];

export default function AnimatedSQL() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setShown((s) => (s + 1) % (lines.length + 8));
    }, 220);
    return () => clearInterval(t);
  }, []);

  return (
    <pre className="pointer-events-none select-none font-mono text-[11px] leading-relaxed text-ink-dim/70">
      {lines.slice(0, Math.min(shown, lines.length)).join('\n')}
      <span className="text-accent-cyan animate-blink">▌</span>
    </pre>
  );
}
