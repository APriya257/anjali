'use client';

import { useEffect, useRef, useState } from 'react';

type State = [
  string, // icao24
  string | null, // callsign
  string | null, // origin country
  number | null, // time_position
  number | null, // last_contact
  number | null, // longitude
  number | null, // latitude
  number | null, // baro_altitude
  boolean | null, // on_ground
  number | null, // velocity (m/s)
  number | null, // true_track (deg)
  number | null, // vertical_rate
  number[] | null, // sensors
  number | null, // geo_altitude
  string | null, // squawk
  boolean | null, // spi
  number | null // position_source
];

const BBOX = { lamin: 24.5, lamax: 49.5, lomin: -125, lomax: -66.5 };

export function FlightDashboard() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState<number | null>(null);
  const [status, setStatus] = useState<'loading' | 'live' | 'rate-limited' | 'error'>('loading');
  const [stats, setStats] = useState<{
    avgAltFt: number;
    avgSpeedKt: number;
    onGround: number;
    countries: number;
  }>({ avgAltFt: 0, avgSpeedKt: 0, onGround: 0, countries: 0 });

  useEffect(() => {
    let map: import('leaflet').Map | null = null;
    let layer: import('leaflet').LayerGroup | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;
    let cancelled = false;

    (async () => {
      const L = (await import('leaflet')).default;
      // Inject Leaflet CSS once
      if (!document.querySelector('link[data-leaflet]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.setAttribute('data-leaflet', 'true');
        document.head.appendChild(link);
      }

      if (cancelled || !mapRef.current) return;
      map = L.map(mapRef.current, {
        center: [39.5, -97],
        zoom: 4,
        worldCopyJump: true,
        attributionControl: true,
        zoomControl: true,
      });
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · &copy; <a href="https://carto.com/attributions">CARTO</a> · flight data &copy; <a href="https://opensky-network.org">OpenSky Network</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }
      ).addTo(map);
      layer = L.layerGroup().addTo(map);

      async function tick() {
        if (cancelled) return;
        try {
          const url = `https://opensky-network.org/api/states/all?lamin=${BBOX.lamin}&lomin=${BBOX.lomin}&lamax=${BBOX.lamax}&lomax=${BBOX.lomax}`;
          const r = await fetch(url);
          if (r.status === 429 || r.status === 503) {
            setStatus('rate-limited');
            return;
          }
          if (!r.ok) {
            setStatus('error');
            return;
          }
          const j = await r.json();
          const states: State[] = j.states ?? [];
          if (!layer || !map || cancelled) return;
          layer.clearLayers();

          let altSum = 0,
            altN = 0,
            spdSum = 0,
            spdN = 0,
            onGround = 0;
          const countries = new Set<string>();

          for (const s of states) {
            const lon = s[5],
              lat = s[6],
              alt = s[7],
              ground = s[8],
              speed = s[9],
              track = s[10],
              cc = s[2],
              cs = (s[1] ?? '').trim();
            if (lon == null || lat == null) continue;
            if (cc) countries.add(cc);
            if (alt != null && !ground) {
              altSum += alt;
              altN++;
            }
            if (speed != null) {
              spdSum += speed;
              spdN++;
            }
            if (ground) onGround++;

            const rotation = track ?? 0;
            const color = ground
              ? '#9aa7b4'
              : (alt ?? 0) > 9000
              ? '#22d3ee'
              : (alt ?? 0) > 3000
              ? '#a78bfa'
              : '#fbbf24';

            const icon = L.divIcon({
              className: 'flight-marker',
              html: `<svg viewBox="0 0 16 16" width="14" height="14" style="transform:rotate(${rotation}deg);display:block">
  <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill="${color}" stroke="#0a0e14" stroke-width="0.6"/>
</svg>`,
              iconSize: [14, 14],
              iconAnchor: [7, 7],
            });
            const m = L.marker([lat, lon], { icon });
            m.bindPopup(
              `<div style="font-family:'JetBrains Mono',monospace;font-size:11px;line-height:1.55;color:#0a0e14">
                <div style="font-weight:600">${cs || s[0]}</div>
                <div>country · ${cc ?? '—'}</div>
                <div>alt · ${alt != null ? Math.round(alt * 3.281).toLocaleString() + ' ft' : '—'}</div>
                <div>speed · ${speed != null ? Math.round(speed * 1.944) + ' kt' : '—'}</div>
                <div>track · ${track != null ? Math.round(track) + '°' : '—'}</div>
              </div>`
            );
            m.addTo(layer);
          }

          setCount(states.length);
          setLastUpdate(Date.now());
          setStatus('live');
          setStats({
            avgAltFt: altN ? Math.round((altSum / altN) * 3.281) : 0,
            avgSpeedKt: spdN ? Math.round((spdSum / spdN) * 1.944) : 0,
            onGround,
            countries: countries.size,
          });
        } catch {
          if (!cancelled) setStatus('error');
        }
      }

      await tick();
      interval = setInterval(tick, 15000);
    })();

    return () => {
      cancelled = true;
      if (interval) clearInterval(interval);
      map?.remove();
    };
  }, []);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
          <span
            className={`inline-block h-2 w-2 rounded-full ${
              status === 'live'
                ? 'bg-accent-green animate-pulse'
                : status === 'loading'
                ? 'bg-accent-amber animate-pulse'
                : 'bg-accent-pink'
            }`}
          />
          <span className="text-accent-cyan">
            {status === 'live'
              ? `connected · opensky · ${count} aircraft in view`
              : status === 'loading'
              ? 'loading from opensky…'
              : status === 'rate-limited'
              ? 'opensky rate-limited · retrying'
              : 'connection error · retrying'}
          </span>
        </div>
        <div className="font-mono text-[11px] text-ink-dim">
          poll · 15s · bbox · continental US
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'aircraft in bbox', value: count.toLocaleString(), color: 'text-accent-cyan' },
          {
            label: 'avg altitude',
            value: stats.avgAltFt ? `${stats.avgAltFt.toLocaleString()} ft` : '—',
            color: 'text-accent-violet',
          },
          {
            label: 'avg speed',
            value: stats.avgSpeedKt ? `${stats.avgSpeedKt} kt` : '—',
            color: 'text-accent-amber',
          },
          {
            label: 'origin countries',
            value: stats.countries.toString(),
            color: 'text-accent-green',
          },
        ].map((kpi) => (
          <div key={kpi.label} className="card p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
              {kpi.label}
            </div>
            <div className={`mt-1 font-mono text-2xl ${kpi.color}`}>{kpi.value}</div>
          </div>
        ))}
      </div>

      <div
        ref={mapRef}
        className="h-[460px] rounded-lg border border-bg-border overflow-hidden"
        style={{ background: '#0f141c' }}
      />

      <div className="card p-5 text-sm text-ink-dim">
        <div className="font-mono text-[11px] uppercase tracking-widest text-ink-dim">
          legend
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 16 16" width="12" height="12">
              <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill="#22d3ee" />
            </svg>
            cruise · &gt;30k ft
          </span>
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 16 16" width="12" height="12">
              <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill="#a78bfa" />
            </svg>
            mid · 10k–30k
          </span>
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 16 16" width="12" height="12">
              <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill="#fbbf24" />
            </svg>
            low · climb/descent
          </span>
          <span className="flex items-center gap-1.5">
            <svg viewBox="0 0 16 16" width="12" height="12">
              <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill="#9aa7b4" />
            </svg>
            on ground
          </span>
        </div>
      </div>

      <div className="font-mono text-[11px] text-ink-dim">
        Source · OpenSky Network public API (anonymous, rate-limited). Polls every 15s; in production
        the same shape comes off a Kafka topic at 18K events/sec with Flink doing interval joins
        against airline reference data.
      </div>
    </div>
  );
}
