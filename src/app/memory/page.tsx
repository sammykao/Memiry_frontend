import { AppStoreButton } from "@/components/app-store-button";
import { DeviceFrame } from "@/components/device-frame";
import { PageIntro } from "@/components/page-intro";
import { memorySignals, memoryWorkflow } from "@/lib/site-data";

export default function MemoryPage() {
  return (
    <>
      <PageIntro
        body="Memiry turns casual conversation into usable memory. Preferences, facts, and episodes stay structured enough to act on later without feeling like you are filling out forms."
        eyebrow="Memory layer"
        side={
          <DeviceFrame
            badge="Profile snapshot"
            body="The app exposes editable memory records and a profile snapshot so important context stays transparent."
            chips={memorySignals.map((signal) => signal.label)}
            eyebrow="Three memory types"
            lines={[
              "Preference: prefers late lunches",
              "Fact: birthday dinner on May 18",
              "Episode: send the studio link tomorrow",
            ]}
            title="A simple system for what matters later."
          />
        }
        title="Memory should feel like recall, not data entry."
      />

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {memorySignals.map((signal) => (
            <article className="surface-card rounded-[2rem] p-6" key={signal.label}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                {signal.type}
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                {signal.label}
              </h2>
              <p className="mt-3 text-base leading-7 text-stone-600">
                {signal.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-3">
          {memoryWorkflow.map((step, index) => (
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

      <section className="mx-auto max-w-5xl px-6 pb-24 pt-6 lg:px-10">
        <div className="surface-card rounded-[2.4rem] p-8 text-center sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
            Keep it in reach
          </p>
          <h2 className="mt-4 font-display text-5xl leading-none tracking-[-0.05em] text-[var(--ink)]">
            Edit the memory layer from the app, then use it in the keyboard.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-600">
            The website frames memory as a calm product feature instead of an
            abstract AI promise, because the iOS app already ships structured
            memory editing and free-form capture.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreButton label="Download Memiry" subtle />
          </div>
        </div>
      </section>
    </>
  );
}
