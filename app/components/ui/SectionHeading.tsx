type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, intro, id }: Props) {
  return (
    <div id={id} className="mb-10 max-w-3xl">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
        <span className="opacity-70">/&gt;</span> {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-ink-dim leading-relaxed">{intro}</p>}
    </div>
  );
}
