import { Mail, Github, Linkedin, FileDown } from 'lucide-react';
import { profile } from '@/lib/data';
import { SectionHeading } from './ui/SectionHeading';

export function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20" id="contact">
      <SectionHeading
        eyebrow="contact"
        title="Email me. I read everything."
        intro="Best for: data engineering roles, lakehouse builds, streaming architectures, BI rescue missions, and friendly arguments about semantic layers."
      />
      <div className="grid gap-5 md:grid-cols-2">
        <a
          href={`mailto:${profile.email}`}
          className="card card-hover group flex items-center justify-between gap-4 p-5"
        >
          <div className="flex items-center gap-4">
            <span className="grid h-11 w-11 place-items-center rounded-md border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan">
              <Mail size={18} />
            </span>
            <div>
              <div className="text-sm text-ink-dim">email</div>
              <div className="font-mono text-ink">{profile.email}</div>
            </div>
          </div>
          <span className="font-mono text-xs text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
            send →
          </span>
        </a>
        <a
          href={profile.github}
          className="card card-hover group flex items-center justify-between gap-4 p-5"
        >
          <div className="flex items-center gap-4">
            <span className="grid h-11 w-11 place-items-center rounded-md border border-accent-violet/30 bg-accent-violet/5 text-accent-violet">
              <Github size={18} />
            </span>
            <div>
              <div className="text-sm text-ink-dim">github</div>
              <div className="font-mono text-ink">apriya257</div>
            </div>
          </div>
          <span className="font-mono text-xs text-accent-violet opacity-0 group-hover:opacity-100 transition-opacity">
            visit →
          </span>
        </a>
        <a
          href={profile.linkedin}
          className="card card-hover group flex items-center justify-between gap-4 p-5"
        >
          <div className="flex items-center gap-4">
            <span className="grid h-11 w-11 place-items-center rounded-md border border-accent-green/30 bg-accent-green/5 text-accent-green">
              <Linkedin size={18} />
            </span>
            <div>
              <div className="text-sm text-ink-dim">linkedin</div>
              <div className="font-mono text-ink">in/anjalipara</div>
            </div>
          </div>
          <span className="font-mono text-xs text-accent-green opacity-0 group-hover:opacity-100 transition-opacity">
            connect →
          </span>
        </a>
        <a
          href={profile.resumeUrl}
          className="card card-hover group flex items-center justify-between gap-4 p-5"
        >
          <div className="flex items-center gap-4">
            <span className="grid h-11 w-11 place-items-center rounded-md border border-accent-amber/30 bg-accent-amber/5 text-accent-amber">
              <FileDown size={18} />
            </span>
            <div>
              <div className="text-sm text-ink-dim">resume</div>
              <div className="font-mono text-ink">/resume.pdf</div>
            </div>
          </div>
          <span className="font-mono text-xs text-accent-amber opacity-0 group-hover:opacity-100 transition-opacity">
            download →
          </span>
        </a>
      </div>
    </section>
  );
}
