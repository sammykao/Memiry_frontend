import { AppStoreButton } from "@/components/app-store-button";
import { DeviceFrame } from "@/components/device-frame";
import { StoryScroll } from "@/components/story-scroll";
import {
  featureColumns,
  heroMetrics,
  homeStorySteps,
  voiceFeatures,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid min-h-screen max-w-7xl gap-12 px-6 pb-16 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="flex flex-col justify-center gap-8">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/65 bg-white/72 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-stone-600 shadow-[0_18px_60px_rgba(42,48,64,0.08)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Memiry for iPhone
          </div>

          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-500">
              The AI agent built to stay inside the conversation
            </p>
            <h1 className="font-display text-6xl leading-none tracking-[-0.05em] text-[var(--ink)] sm:text-7xl lg:text-[5.8rem]">
              Your memory,
              <br />
              your tools,
              <br />
              your keyboard.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
              Memiry turns your iPhone keyboard into a quiet operator. Capture
              facts, preferences, and promises while you chat, then pull the
              right app into the thread when something needs to happen now.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <AppStoreButton label="Download on the App Store" />
            <a
              className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              href="#story"
            >
              See the flow
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                className="surface-card rounded-[2rem] p-5"
                key={metric.label}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                  {metric.label}
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {metric.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="pointer-events-none absolute inset-x-8 top-10 h-72 rounded-full bg-[radial-gradient(circle,rgba(180,230,194,0.55),transparent_62%)] blur-3xl" />
          <DeviceFrame
            badge="Live in the keyboard"
            body="Start a chat, save a detail, or trigger a tool without bouncing between tabs."
            chips={["Memory", "Tools", "Voice", "Preferences"]}
            eyebrow="Quietly capable"
            lines={[
              "Remember that Sam prefers late lunches.",
              "Pull next Thursday from my calendar.",
              "Draft a follow-up in the same thread.",
            ]}
            title="Built for the moments where context-switching kills the mood."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-12 lg:grid-cols-3 lg:px-10">
        {featureColumns.map((feature) => (
          <article className="surface-card rounded-[2rem] p-6" key={feature.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
              {feature.eyebrow}
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
              {feature.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-stone-600">
              {feature.body}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-stone-600">
              {feature.points.map((point) => (
                <li className="flex items-start gap-3" key={point}>
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <StoryScroll steps={homeStorySteps} />

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card rounded-[2.25rem] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
              Voice + response style
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
              Tune the default voice before the next message starts.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-stone-600">
              Memiry already exposes tone, response depth, and timezone controls
              in the iPhone app. The website mirrors that positioning so users
              understand the product as a configurable assistant, not a static
              chatbot.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {voiceFeatures.map((item) => (
              <div className="surface-card rounded-[1.8rem] p-5" key={item.title}>
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/65 bg-[linear-gradient(140deg,rgba(255,255,255,0.84),rgba(236,243,241,0.74))] p-8 shadow-[0_22px_80px_rgba(38,44,58,0.12)] sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                Ready to install
              </p>
              <h2 className="mt-4 font-display text-5xl leading-none tracking-[-0.05em] text-[var(--ink)] sm:text-6xl">
                Keep the thread warm. Let Memiry carry the context.
              </h2>
              <p className="mt-4 text-base leading-7 text-stone-600">
                The web experience sets the story. The iPhone app does the work.
              </p>
            </div>
            <AppStoreButton label="Get Memiry" subtle />
          </div>
        </div>
      </section>
    </>
  );
}
