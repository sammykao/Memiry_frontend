import type { Metadata } from "next";
import { DeviceFrame } from "@/components/device-frame";
import { PageCta } from "@/components/page-cta";
import { PageIntro } from "@/components/page-intro";
import {
  memoryCta,
  memoryPageDevice,
  memoryPageIntro,
  memorySignals,
  memoryWorkflow,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Memory",
  description:
    "Memiry keeps a light, editable memory layer behind your conversations.",
};

export default function MemoryPage() {
  return (
    <>
      <PageIntro
        body={memoryPageIntro.body}
        eyebrow={memoryPageIntro.eyebrow}
        side={<DeviceFrame {...memoryPageDevice} />}
        title={memoryPageIntro.title}
      />

      <section className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {memorySignals.map((signal) => (
            <article className="surface-card rounded-[1.8rem] p-5 sm:p-6" key={signal.label}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                {signal.type}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                {signal.label}
              </h2>
              <p className="mt-3 text-base leading-7 text-stone-600">
                {signal.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {memoryWorkflow.map((step, index) => (
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

      <PageCta
        body={memoryCta.body}
        buttonLabel={memoryCta.buttonLabel}
        eyebrow={memoryCta.eyebrow}
        title={memoryCta.title}
      />
    </>
  );
}
