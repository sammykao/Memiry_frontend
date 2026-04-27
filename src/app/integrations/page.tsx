import type { Metadata } from "next";
import { DeviceFrame } from "@/components/device-frame";
import { PageCta } from "@/components/page-cta";
import { PageIntro } from "@/components/page-intro";
import {
  integrationCategories,
  integrationFlow,
  integrationsCta,
  integrationsPageDevice,
  integrationsPageIntro,
  integrationsRail,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Connect your mail, calendar, and docs so Memiry can move from reply to action.",
};

export default function IntegrationsPage() {
  return (
    <>
      <PageIntro
        body={integrationsPageIntro.body}
        eyebrow={integrationsPageIntro.eyebrow}
        side={<DeviceFrame {...integrationsPageDevice} />}
        title={integrationsPageIntro.title}
      />

      <section className="mx-auto max-w-7xl overflow-hidden px-5 py-2 sm:px-6 lg:px-10">
        <div className="marquee-shell">
          <div className="marquee-track">
            {[...integrationsRail, ...integrationsRail].map((item, index) => (
              <span className="app-pill" key={`${item}-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {integrationFlow.map((step, index) => (
            <article className="surface-card rounded-[1.8rem] p-5 sm:p-6" key={step.title}>
              <p className="text-sm font-semibold text-stone-500">
                0{index + 1}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                {step.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-stone-600">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-2 sm:px-6 lg:px-10">
        <div className="grid gap-4 md:grid-cols-2">
          {integrationCategories.map((category) => (
            <article className="surface-card rounded-[1.8rem] p-5 sm:p-6" key={category.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                {category.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                {category.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-stone-600">
                {category.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {category.apps.map((app) => (
                  <span className="app-pill" key={app}>
                    {app}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <PageCta
        body={integrationsCta.body}
        buttonLabel={integrationsCta.buttonLabel}
        eyebrow={integrationsCta.eyebrow}
        title={integrationsCta.title}
      />
    </>
  );
}
