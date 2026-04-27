type SectionHeadingProps = {
  body?: string;
  centered?: boolean;
  eyebrow: string;
  title: string;
  titleAs?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  body,
  centered = false,
  eyebrow,
  title,
  titleAs = "h2",
}: SectionHeadingProps) {
  const Title = titleAs;

  return (
    <div className={`${centered ? "mx-auto text-center" : ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
        {eyebrow}
      </p>
      <Title className="mt-4 text-balance font-display text-4xl leading-none tracking-[-0.05em] text-[var(--ink)] sm:text-5xl lg:text-6xl">
        {title}
      </Title>
      {body ? (
        <p className={`mt-4 max-w-2xl text-pretty text-base leading-7 text-stone-600 sm:text-lg ${centered ? "mx-auto" : ""}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
