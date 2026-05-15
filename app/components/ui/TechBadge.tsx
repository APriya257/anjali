export default function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-bg-border bg-bg-soft px-2 py-0.5 font-mono text-[11px] text-ink-dim">
      {children}
    </span>
  );
}
