'use client';

import { useEffect, useRef, useState } from 'react';

type Tick = {
  product_id: string;
  price: string;
  last_size: string;
  best_bid: string;
  best_ask: string;
  time: string;
};

type SymbolState = {
  product: string;
  price: number;
  last: number;
  bid: number;
  ask: number;
  vwap1m: number;
  vwap5m: number;
  series: { t: number; price: number; size: number }[];
  lagMs: number;
  ticks: number;
  startPrice: number;
};

const PRODUCTS = ['BTC-USD', 'ETH-USD', 'SOL-USD'];

function fmtPrice(n: number) {
  if (n === 0 || !isFinite(n)) return '—';
  if (n >= 1000) return n.toLocaleString(undefined, { maximumFractionDigits: 0 });
  if (n >= 10) return n.toLocaleString(undefined, { maximumFractionDigits: 2 });
  return n.toLocaleString(undefined, { maximumFractionDigits: 4 });
}

function pct(n: number) {
  return (n >= 0 ? '+' : '') + n.toFixed(2) + '%';
}

function vwapWindow(series: { t: number; price: number; size: number }[], windowMs: number, now: number) {
  let pv = 0;
  let v = 0;
  for (let i = series.length - 1; i >= 0; i--) {
    if (now - series[i].t > windowMs) break;
    pv += series[i].price * series[i].size;
    v += series[i].size;
  }
  return v > 0 ? pv / v : 0;
}

function Spark({ series, color }: { series: { t: number; price: number }[]; color: string }) {
  if (series.length < 2) {
    return <div className="h-12 rounded-sm bg-bg-soft animate-pulse" />;
  }
  const w = 240;
  const h = 56;
  const prices = series.map((s) => s.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const span = max - min || 1;
  const pts = series.map((s, i) => {
    const x = (i / (series.length - 1)) * w;
    const y = h - ((s.price - min) / span) * (h - 8) - 4;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-14" preserveAspectRatio="none">
      <path d={pts.join(' ')} fill="none" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

export function CryptoDashboard() {
  const [states, setStates] = useState<Record<string, SymbolState>>(() => {
    const initial: Record<string, SymbolState> = {};
    PRODUCTS.forEach((p) => {
      initial[p] = {
        product: p,
        price: 0,
        last: 0,
        bid: 0,
        ask: 0,
        vwap1m: 0,
        vwap5m: 0,
        series: [],
        lagMs: 0,
        ticks: 0,
        startPrice: 0,
      };
    });
    return initial;
  });
  const [status, setStatus] = useState<'connecting' | 'live' | 'closed' | 'error'>('connecting');
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    let cancelled = false;
    let retryTimer: ReturnType<typeof setTimeout> | null = null;

    function connect() {
      if (cancelled) return;
      const ws = new WebSocket('wss://ws-feed.exchange.coinbase.com');
      wsRef.current = ws;
      setStatus('connecting');

      ws.onopen = () => {
        if (cancelled) return;
        setStatus('live');
        ws.send(
          JSON.stringify({
            type: 'subscribe',
            product_ids: PRODUCTS,
            channels: ['ticker'],
          })
        );
      };

      ws.onmessage = (ev) => {
        if (cancelled) return;
        try {
          const msg: Tick & { type: string } = JSON.parse(ev.data);
          if (msg.type !== 'ticker' || !msg.product_id || !PRODUCTS.includes(msg.product_id)) return;
          const price = parseFloat(msg.price);
          const size = parseFloat(msg.last_size) || 0;
          const bid = parseFloat(msg.best_bid);
          const ask = parseFloat(msg.best_ask);
          const tickTime = msg.time ? new Date(msg.time).getTime() : Date.now();
          const now = Date.now();
          setStates((prev) => {
            const cur = prev[msg.product_id];
            if (!cur) return prev;
            const series = cur.series.concat({ t: tickTime, price, size }).slice(-600);
            const start = cur.startPrice || price;
            return {
              ...prev,
              [msg.product_id]: {
                ...cur,
                product: msg.product_id,
                last: cur.price,
                price,
                bid,
                ask,
                series,
                vwap1m: vwapWindow(series, 60_000, now),
                vwap5m: vwapWindow(series, 300_000, now),
                lagMs: Math.max(0, now - tickTime),
                ticks: cur.ticks + 1,
                startPrice: start,
              },
            };
          });
        } catch {
          /* ignore malformed */
        }
      };

      ws.onerror = () => {
        if (cancelled) return;
        setStatus('error');
      };

      ws.onclose = () => {
        if (cancelled) return;
        setStatus('closed');
        retryTimer = setTimeout(connect, 3000);
      };
    }

    connect();
    return () => {
      cancelled = true;
      if (retryTimer) clearTimeout(retryTimer);
      wsRef.current?.close();
    };
  }, []);

  const accent: Record<string, string> = {
    'BTC-USD': '#fbbf24',
    'ETH-USD': '#a78bfa',
    'SOL-USD': '#34d399',
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
          <span
            className={`inline-block h-2 w-2 rounded-full ${
              status === 'live'
                ? 'bg-accent-green animate-pulse'
                : status === 'connecting'
                ? 'bg-accent-amber animate-pulse'
                : 'bg-accent-pink'
            }`}
          />
          <span className="text-accent-cyan">
            {status === 'live'
              ? 'connected · coinbase ws-feed · ticker channel'
              : status === 'connecting'
              ? 'connecting…'
              : status === 'closed'
              ? 'reconnecting…'
              : 'connection error'}
          </span>
        </div>
        <div className="font-mono text-[11px] text-ink-dim">
          symbols · {PRODUCTS.join(' · ')}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {PRODUCTS.map((p) => {
          const s = states[p];
          const change = s.startPrice ? ((s.price - s.startPrice) / s.startPrice) * 100 : 0;
          const moveUp = s.price >= s.last;
          return (
            <div key={p} className="card p-5">
              <div className="flex items-baseline justify-between">
                <div className="font-mono text-sm text-ink-dim">{p}</div>
                <div className="font-mono text-[10px] text-ink-dim">
                  {s.ticks} ticks · {s.lagMs}ms lag
                </div>
              </div>
              <div
                className={`mt-1 font-mono text-3xl ${
                  moveUp ? 'text-accent-green' : 'text-accent-pink'
                }`}
              >
                ${fmtPrice(s.price)}
              </div>
              <div
                className={`font-mono text-xs ${
                  change >= 0 ? 'text-accent-green' : 'text-accent-pink'
                }`}
              >
                {pct(change)} since open
              </div>
              <div className="mt-3">
                <Spark series={s.series} color={accent[p]} />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-[11px]">
                <div className="card p-2">
                  <div className="text-ink-dim">vwap · 1m</div>
                  <div className="text-accent-cyan">${fmtPrice(s.vwap1m)}</div>
                </div>
                <div className="card p-2">
                  <div className="text-ink-dim">vwap · 5m</div>
                  <div className="text-accent-violet">${fmtPrice(s.vwap5m)}</div>
                </div>
                <div className="card p-2">
                  <div className="text-ink-dim">bid</div>
                  <div className="text-ink">${fmtPrice(s.bid)}</div>
                </div>
                <div className="card p-2">
                  <div className="text-ink-dim">ask</div>
                  <div className="text-ink">${fmtPrice(s.ask)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card p-5">
        <div className="font-mono text-[11px] uppercase tracking-widest text-ink-dim">
          how this maps to the prod pipeline
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-3 text-sm text-ink-dim">
          <div>
            <span className="text-accent-cyan font-mono">[in your browser]</span> a WebSocket to
            Coinbase, parsing JSON ticks. ~10–50 ticks/sec across 3 symbols.
          </div>
          <div>
            <span className="text-accent-violet font-mono">[Kafka + Flink in prod]</span> same shape:
            keyed state per (symbol, exchange), VWAP with allowed lateness, watermark gap alerts.
          </div>
          <div>
            <span className="text-accent-green font-mono">[Snowflake + Grafana]</span> aggregates land
            in Snowflake for history; SSE bridge keeps Grafana hot.
          </div>
        </div>
      </div>

      <div className="font-mono text-[11px] text-ink-dim">
        Source · Coinbase Exchange WebSocket feed (public, no auth). VWAP, lag, and sparkline are all
        computed client-side from the live stream — exactly what the Flink job does in prod.
      </div>
    </div>
  );
}
