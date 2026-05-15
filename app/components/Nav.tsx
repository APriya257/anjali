'use client';

import { useEffect, useState } from 'react';
import { navSections, profile } from '@/lib/data';
import { Menu, X } from 'lucide-react';

export default function Nav() {
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? 'border-b border-bg-border/60 bg-bg/80 backdrop-blur'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight text-ink"
        >
          <span className="text-accent-cyan">{'>'}</span> {profile.name.toLowerCase()}
          <span className="text-accent-violet">.dev</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-md px-3 py-1.5 text-sm text-ink-dim transition-colors hover:bg-bg-card hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="rounded-md p-2 text-ink-dim hover:bg-bg-card hover:text-ink md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-bg-border/60 bg-bg/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-ink-dim hover:bg-bg-card hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
