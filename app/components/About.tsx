import { profile } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" id="about">
      <SectionHeading
        eyebrow="about"
        title="The short version, the longer version, and what I’m doing now."
      />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-5 text-ink-dim leading-relaxed">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <aside className="card card-hover p-5">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-cyan">
            <span className="inline-block h-2 w-2 rounded-full bg-accent-cyan animate-blink" />
            now
          </div>
          <h3 className="mt-2 text-lg font-semibold text-ink">What I’m on right now</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-dim">
            {profile.now.map((n, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-accent-violet font-mono">»</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-bg-border pt-3 font-mono text-[11px] text-ink-dim">
            last updated · {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </div>
        </aside>
      </div>
    </section>
  );
}
