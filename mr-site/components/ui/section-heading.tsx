type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.45em] text-gold-soft">
        {eyebrow}
      </p>
      <h2 className="font-[var(--font-display)] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-text-secondary sm:text-lg">
        {description}
      </p>
    </div>
  );
}
