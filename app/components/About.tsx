import { about, profile } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';
import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="01 — about" title="Hi, I'm Anjali." />
      <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4 text-ink/90 leading-relaxed">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="rounded-xl border border-bg-border bg-bg-soft/60 p-5">
          <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-violet">
            <Sparkles size={14} /> Now
          </div>
          <p className="text-sm text-ink-dim">{profile.now}</p>
        </div>
      </div>
    </section>
  );
}
