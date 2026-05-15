'use client';

import { useEffect, useState } from 'react';

const SNIPPETS = [
  `WITH fresh AS (
  SELECT
    event_id,
    user_id,
    occurred_at,
    payload:amount::number AS amount_usd
  FROM raw.events_v2
  WHERE occurred_at >= dateadd(hour, -1, current_timestamp())
), windowed AS (
  SELECT
    user_id,
    time_slice(occurred_at, 1, 'minute') AS bucket,
    sum(amount_usd) AS amt
  FROM fresh
  GROUP BY 1, 2
)
SELECT * FROM windowed
ORDER BY bucket DESC, amt DESC
LIMIT 200;`,
  `MERGE INTO mart.fact_trip AS t
USING (
  SELECT *
  FROM staging.trip_stream
  WHERE _airbyte_extracted_at > (
    SELECT coalesce(max(_loaded_at), '1970-01-01')
    FROM mart.fact_trip
  )
) AS s
ON t.trip_id = s.trip_id
WHEN MATCHED THEN UPDATE SET
  fare_amount = s.fare_amount,
  total_amount = s.total_amount,
  _loaded_at = current_timestamp()
WHEN NOT MATCHED THEN INSERT (
  trip_id, pickup_ts, fare_amount, total_amount, _loaded_at
) VALUES (
  s.trip_id, s.pickup_ts, s.fare_amount, s.total_amount, current_timestamp()
);`,
  `SELECT
  symbol,
  exchange,
  vwap_1m,
  vwap_5m,
  bid_ask_imbalance,
  watermark_lag_ms
FROM mart.fact_quote_metrics
WHERE event_time >= current_timestamp() - INTERVAL '5 minutes'
  AND watermark_lag_ms < 1500
ORDER BY event_time DESC;`,
];

function highlight(sql: string) {
  const kw = /\b(WITH|SELECT|FROM|WHERE|GROUP BY|ORDER BY|LIMIT|MERGE INTO|USING|ON|WHEN|MATCHED|THEN|UPDATE SET|INSERT|VALUES|AS|AND|OR|NOT|IN|INTERVAL|JOIN|LEFT|RIGHT|INNER|FULL|OUTER)\b/gi;
  const fn = /\b(coalesce|sum|max|min|count|current_timestamp|time_slice|dateadd|cast)\b/gi;
  const str = /'([^']*)'/g;
  const num = /\b(\d+)\b/g;

  let escaped = sql.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  escaped = escaped.replace(str, '<span class="text-accent-green">\'$1\'</span>');
  escaped = escaped.replace(kw, '<span class="text-accent-violet">$1</span>');
  escaped = escaped.replace(fn, '<span class="text-accent-cyan">$1</span>');
  escaped = escaped.replace(num, '<span class="text-accent-amber">$1</span>');
  return escaped;
}

export function AnimatedSQL() {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [shown, setShown] = useState('');

  useEffect(() => {
    let i = 0;
    const target = SNIPPETS[snippetIdx];
    setShown('');
    const interval = setInterval(() => {
      i += Math.max(1, Math.floor(target.length / 240));
      if (i >= target.length) {
        setShown(target);
        clearInterval(interval);
        setTimeout(() => setSnippetIdx((s) => (s + 1) % SNIPPETS.length), 4500);
      } else {
        setShown(target.slice(0, i));
      }
    }, 18);
    return () => clearInterval(interval);
  }, [snippetIdx]);

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-grid-mask opacity-50" aria-hidden />
      <div className="relative h-full rounded-2xl border border-bg-border bg-bg-soft/70 backdrop-blur p-5 font-mono text-[12px] leading-relaxed text-ink-dim overflow-hidden">
        <div className="flex items-center gap-2 pb-3 border-b border-bg-border/70">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-pink/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-green/70" />
          <span className="ml-3 text-[11px] text-ink-dim/80">~/queries/streaming-vwap.sql</span>
        </div>
        <pre className="mt-3 whitespace-pre-wrap break-words text-ink/90">
          <code dangerouslySetInnerHTML={{ __html: highlight(shown) }} />
          <span className="inline-block w-2 h-4 -mb-[2px] ml-0.5 bg-accent-cyan animate-blink" />
        </pre>
      </div>
    </div>
  );
}
