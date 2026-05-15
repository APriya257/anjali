import { profile } from '@/lib/data';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import AnimatedSQL from './ui/AnimatedSQL';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-aurora" aria-hidden />
      <div className="absolute inset-0 bg-grid-mask" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div className="animate-fade-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-bg-border bg-bg-soft/60 px-3 py-1 font-mono text-xs text-ink-dim">
            <span className="size-2 rounded-full bg-accent-green shadow-glow" />
            available for new roles
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            {profile.name}
            <span className="block gradient-text">{profile.role}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-dim">{profile.tagline}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink-dim">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {profile.location}
            </span>
            <span className="text-bg-border">·</span>
            <a className="hover:text-ink" href={profile.socials.email}>
              {profile.email}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-accent px-4 py-2 text-sm font-semibold text-bg shadow-glow transition hover:opacity-90"
            >
              See projects <ArrowRight size={16} />
            </a>
            <a
              href={profile.resume}
              className="inline-flex items-center gap-2 rounded-md border border-bg-border bg-bg-soft px-4 py-2 text-sm text-ink hover:bg-bg-card"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex size-9 items-center justify-center rounded-md border border-bg-border bg-bg-soft text-ink hover:bg-bg-card"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-9 items-center justify-center rounded-md border border-bg-border bg-bg-soft text-ink hover:bg-bg-card"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={profile.socials.email}
              aria-label="Email"
              className="inline-flex size-9 items-center justify-center rounded-md border border-bg-border bg-bg-soft text-ink hover:bg-bg-card"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative overflow-hidden rounded-xl border border-bg-border bg-bg-soft/80 p-5 shadow-card">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-accent-pink/70" />
              <span className="size-2.5 rounded-full bg-accent-amber/70" />
              <span className="size-2.5 rounded-full bg-accent-green/70" />
              <span className="ml-3 font-mono text-[11px] text-ink-faint">
                flights.sql
              </span>
            </div>
            <AnimatedSQL />
          </div>
        </div>
      </div>
    </section>
  );
}
