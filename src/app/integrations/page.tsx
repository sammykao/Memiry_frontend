import { AppStoreButton } from "@/components/app-store-button";
import { DeviceFrame } from "@/components/device-frame";
import { PageIntro } from "@/components/page-intro";
import {
  integrationCategories,
  integrationFlow,
  integrationsRail,
} from "@/lib/site-data";

export default function IntegrationsPage() {
  return (
    <>
      <PageIntro
        body="Memiry already presents tool connections and provider management inside the iPhone app. The frontend turns that into a product story about moving from reply to action without leaving the thread."
        eyebrow="Connected apps"
        side={
          <DeviceFrame
            badge="Action in context"
            body="Ask for a reservation, note, schedule check, or follow-up without hopping into a second workflow."
            chips={integrationsRail}
            eyebrow="Provider graph"
            lines={[
              "Calendar: pull next Thursday after 6",
              "Docs: grab the shared studio brief",
              "Resy: make the reservation from here",
            ]}
            title="Connected apps that stay behind the conversation."
          />
        }
        title="Move from answer to action in the same thread."
      />

      <section className="mx-auto max-w-7xl overflow-hidden px-6 py-4 lg:px-10">
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

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {integrationFlow.map((step, index) => (
            <article className="surface-card rounded-[2rem] p-6" key={step.title}>
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

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-4 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          {integrationCategories.map((category) => (
            <article className="surface-card rounded-[2rem] p-6" key={category.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                {category.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                {category.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-stone-600">
                {category.body}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {category.apps.map((app) => (
                  <span className="app-pill" key={app}>
                    {app}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <AppStoreButton label="Connect through Memiry" subtle />
        </div>
      </section>
    </>
  );
}
