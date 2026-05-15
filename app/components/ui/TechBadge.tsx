type Props = { label: string; accent?: 'cyan' | 'violet' | 'green' | 'amber' | 'pink' };

const accentMap: Record<NonNullable<Props['accent']>, string> = {
  cyan: 'text-accent-cyan border-accent-cyan/40',
  violet: 'text-accent-violet border-accent-violet/40',
  green: 'text-accent-green border-accent-green/40',
  amber: 'text-accent-amber border-accent-amber/40',
  pink: 'text-accent-pink border-accent-pink/40',
};

export function TechBadge({ label, accent }: Props) {
  return (
    <span
      className={`chip ${accent ? accentMap[accent] : ''}`}
      style={accent ? { background: 'rgba(15,20,28,0.7)' } : undefined}
    >
      {label}
    </span>
  );
}
