import { profile } from '@/lib/data';
import { AnimatedSQL } from './ui/AnimatedSQL';

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 bg-aurora pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-grid-mask pointer-events-none opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan">
            <span className="animate-blink">█</span> available · {profile.location}
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Hey, I’m{' '}
            <span className="gradient-text">{profile.name}</span>.
            <br />
            <span className="text-ink">I make data</span>{' '}
            <span className="text-ink-dim">do the boring thing,</span>
            <br />
            <span className="text-ink-dim">on time, every time.</span>
          </h1>
          <p className="mt-6 max-w-xl text-ink-dim leading-relaxed text-base md:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan px-4 py-2 text-sm font-medium hover:bg-accent-cyan/15 transition-colors"
            >
              See projects →
            </a>
            <a
              href="#contact"
              className="rounded-md border border-bg-border px-4 py-2 text-sm font-medium text-ink hover:border-accent-violet/40 transition-colors"
            >
              Get in touch
            </a>
            <a
              href={profile.resumeUrl}
              className="rounded-md border border-bg-border px-4 py-2 text-sm font-medium text-ink-dim hover:text-ink transition-colors"
            >
              Resume (PDF)
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md font-mono text-xs text-ink-dim">
            <div>
              <div className="text-accent-cyan text-base font-medium">7+</div>
              years in data
            </div>
            <div>
              <div className="text-accent-violet text-base font-medium">12</div>
              prod pipelines
            </div>
            <div>
              <div className="text-accent-green text-base font-medium">4</div>
              certifications
            </div>
          </div>
        </div>
        <div className="relative h-[360px] md:h-[440px]">
          <AnimatedSQL />
        </div>
      </div>
    </section>
  );
}
