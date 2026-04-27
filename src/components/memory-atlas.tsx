import type { MemorySignal, WorkflowStep } from "@/lib/site-data";

type MemoryAtlasProps = {
  signals: readonly MemorySignal[];
  workflow: readonly WorkflowStep[];
};

export function MemoryAtlas({ signals, workflow }: MemoryAtlasProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-10">
      <div className="feature-panel overflow-hidden rounded-[2.4rem] p-5 sm:p-7 lg:p-9">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <div className="space-y-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
                Memory atlas
              </p>
              <h2 className="mt-4 text-balance font-display text-4xl leading-none tracking-[-0.05em] text-[var(--ink)] sm:text-5xl">
                Preference, fact, and episode each get their own weight.
              </h2>
            </div>

            <div className="divide-y divide-[rgba(19,22,27,0.08)] rounded-[2rem] border border-white/65 bg-white/55">
              {signals.map((signal, index) => (
                <article
                  className="grid gap-4 px-5 py-5 sm:px-6 sm:py-6 md:grid-cols-[auto_1fr]"
                  key={signal.type}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-semibold text-stone-400">
                      0{index + 1}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                      {signal.type}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                      {signal.label}
                    </h3>
                    <p className="max-w-2xl text-base leading-7 text-stone-600">
                      {signal.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col justify-between gap-6 rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(245,248,244,0.88))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] sm:p-6">
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
                Recall loop
              </p>
              <p className="mt-4 text-pretty text-base leading-7 text-stone-600 sm:text-lg">
                Instead of saving everything as the same object, Memiry keeps a
                lighter hierarchy so review stays fast and recall stays clean.
              </p>
            </div>

            <ol className="space-y-6 border-l border-[rgba(25,62,40,0.18)] pl-6">
              {workflow.map((step, index) => (
                <li className="relative" key={step.title}>
                  <span
                    aria-hidden="true"
                    className="absolute left-[-1.5rem] top-1.5 h-3.5 w-3.5 rounded-full border border-white/80 bg-[var(--accent)] shadow-[0_0_0_6px_rgba(120,188,138,0.12)]"
                  />
                  <p className="text-sm font-semibold text-stone-400">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-base leading-7 text-stone-600">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
