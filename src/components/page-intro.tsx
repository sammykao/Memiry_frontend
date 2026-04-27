import type { ReactNode } from "react";
import { SectionHeading } from "@/components/section-heading";

type PageIntroProps = {
  body: string;
  eyebrow: string;
  side: ReactNode;
  title: string;
};

export function PageIntro({ body, eyebrow, side, title }: PageIntroProps) {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-10 pt-32 sm:px-6 sm:pt-36 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-10">
      <div className="flex flex-col justify-center">
        <SectionHeading
          body={body}
          eyebrow={eyebrow}
          title={title}
          titleAs="h1"
        />
      </div>
      <div className="flex items-center justify-center lg:justify-end">{side}</div>
    </section>
  );
}
