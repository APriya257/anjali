'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/lib/data';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#case-study', label: 'Case Study' },
  { href: '#dashboards', label: 'Dashboards' },
  { href: '#writing', label: 'Writing' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-md border-b border-bg-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:py-4">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm">
          <span className="inline-block h-2 w-2 rounded-sm bg-accent-cyan group-hover:bg-accent-violet transition-colors" />
          <span className="text-ink">{profile.name.toLowerCase()}</span>
          <span className="text-ink-dim">@{profile.location.split(',')[0].toLowerCase()}</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-md text-sm text-ink-dim hover:text-ink hover:bg-bg-soft transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            className="ml-2 rounded-md border border-accent-cyan/40 px-3 py-1.5 text-sm text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
          >
            Resume
          </a>
        </div>
        <button
          aria-label="toggle nav"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-md border border-bg-border px-2 py-1 text-sm text-ink-dim"
        >
          {open ? 'close' : 'menu'}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-bg-border bg-bg/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-ink-dim hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a href={profile.resumeUrl} className="py-2 text-sm text-accent-cyan">
              Resume →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
