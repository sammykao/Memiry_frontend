import type { IntegrationCategory, WorkflowStep } from "@/lib/site-data";

type IntegrationBoardProps = {
  categories: readonly IntegrationCategory[];
  flow: readonly WorkflowStep[];
  rail: readonly string[];
};

export function IntegrationBoard({
  categories,
  flow,
  rail,
}: IntegrationBoardProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-10">
      <div className="feature-panel overflow-hidden rounded-[2.4rem] p-5 sm:p-7 lg:p-9">
        <div className="grid gap-8 border-b border-[rgba(19,22,27,0.08)] pb-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
          <div className="space-y-5">
            <div className="max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
                Connected apps
              </p>
              <h2 className="mt-4 text-balance font-display text-4xl leading-none tracking-[-0.05em] text-[var(--ink)] sm:text-5xl">
                Keep the tools in the background until the message needs one.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {rail.map((item) => (
                <div
                  className="rounded-[1.4rem] border border-white/70 bg-white/58 px-4 py-4 text-sm font-semibold text-[var(--ink)] shadow-[0_12px_34px_rgba(38,44,58,0.06)]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(243,247,244,0.86))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-6">
            <span
              aria-hidden="true"
              className="absolute left-12 right-12 top-11 hidden h-px bg-[linear-gradient(90deg,rgba(19,22,27,0.08),rgba(25,62,40,0.32),rgba(19,22,27,0.08))] lg:block"
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {flow.map((step, index) => (
                <article className="relative space-y-3" key={step.title}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/85 bg-white/86 text-sm font-semibold text-[var(--ink)] shadow-[0_10px_28px_rgba(38,44,58,0.08)]">
                      0{index + 1}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                      Stage
                    </p>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="max-w-sm text-base leading-7 text-stone-600">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div className="grid gap-3">
            {categories.map((category) => (
              <article
                className="grid gap-4 rounded-[1.7rem] border border-white/65 bg-white/52 px-4 py-5 sm:px-5 lg:grid-cols-[0.92fr_1.08fr]"
                key={category.title}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                    {category.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <p className="max-w-xl text-base leading-7 text-stone-600">
                    {category.body}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {category.apps.map((app) => (
                      <span className="app-pill app-pill-soft" key={app}>
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
