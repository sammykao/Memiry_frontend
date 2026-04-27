import { AppStoreButton } from "@/components/app-store-button";
import { SectionHeading } from "@/components/section-heading";

type PageCtaProps = {
  body: string;
  buttonLabel: string;
  eyebrow: string;
  title: string;
};

export function PageCta({
  body,
  buttonLabel,
  eyebrow,
  title,
}: PageCtaProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-6 lg:px-10">
      <div className="overflow-hidden rounded-[2.25rem] border border-white/65 bg-[linear-gradient(140deg,rgba(255,255,255,0.84),rgba(236,243,241,0.74))] p-6 shadow-[0_22px_80px_rgba(38,44,58,0.12)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            body={body}
            eyebrow={eyebrow}
            title={title}
          />
          <div className="w-full lg:w-auto">
            <AppStoreButton label={buttonLabel} subtle />
          </div>
        </div>
      </div>
    </section>
  );
}
