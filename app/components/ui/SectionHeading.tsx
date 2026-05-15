type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function SectionHeading({ eyebrow, title, intro }: Props) {
  return (
    <div className="mb-10">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
        {eyebrow}
      </div>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 max-w-2xl text-ink-dim">{intro}</p>
      ) : null}
    </div>
  );
}
