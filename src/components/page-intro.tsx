import type { ReactNode } from "react";

type PageIntroProps = {
  body: string;
  eyebrow: string;
  side: ReactNode;
  title: string;
};

export function PageIntro({ body, eyebrow, side, title }: PageIntroProps) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-12 pt-36 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
      <div className="flex flex-col justify-center">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
          {eyebrow}
        </p>
        <h1 className="mt-5 font-display text-6xl leading-none tracking-[-0.05em] text-[var(--ink)] sm:text-7xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
          {body}
        </p>
      </div>
      <div className="flex items-center justify-center lg:justify-end">{side}</div>
    </section>
  );
}
