import { profile } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="09 — contact"
        title="Let's build something with data."
        intro="The fastest way to reach me is email. I usually reply within a day."
      />
      <div className="rounded-xl border border-bg-border bg-bg-soft/60 p-6 md:p-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <a
              href={profile.socials.email}
              className="font-mono text-2xl text-ink hover:text-accent-cyan"
            >
              {profile.email}
            </a>
            <div className="mt-4 flex gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-bg-border bg-bg px-3 py-1.5 text-sm text-ink-dim hover:text-ink"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-bg-border bg-bg px-3 py-1.5 text-sm text-ink-dim hover:text-ink"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={profile.socials.email}
                className="inline-flex items-center gap-2 rounded-md border border-bg-border bg-bg px-3 py-1.5 text-sm text-ink-dim hover:text-ink"
              >
                <Mail size={14} /> Email
              </a>
            </div>
          </div>
          <a
            href={profile.socials.email}
            className="inline-flex items-center gap-2 rounded-md bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-bg shadow-glow"
          >
            Say hello
          </a>
        </div>
      </div>
    </section>
  );
}
