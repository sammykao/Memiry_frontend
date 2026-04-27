import type { Metadata } from "next";
import { AppStoreButton } from "@/components/app-store-button";
import { DeviceFrame } from "@/components/device-frame";
import { PageCta } from "@/components/page-cta";
import { StoryScroll } from "@/components/story-scroll";
import {
  homeAccessCards,
  homeCta,
  homeHero,
  homeHeroDevice,
  homeStoryIntro,
  homeStorySteps,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "Memiry is an iPhone AI agent you can reach from the keyboard, the app, or Siri.",
};

export default function HomePage() {
  return (
    <>
      <section className="mx-auto grid min-h-[100svh] max-w-7xl gap-10 px-5 pb-14 pt-32 sm:px-6 sm:pt-36 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:px-10">
        <div className="flex flex-col justify-center gap-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-stone-500">
              {homeHero.eyebrow}
            </p>
            <h1 className="text-balance font-display text-[3.4rem] leading-[0.92] tracking-[-0.06em] text-[var(--ink)] sm:text-6xl lg:text-[5.35rem]">
              {homeHero.title}
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-7 text-stone-600 sm:text-lg sm:leading-8 lg:text-xl">
              {homeHero.body}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="w-full sm:w-auto">
              <AppStoreButton label="Download on the App Store" />
            </div>
            <a
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[var(--line)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--ink)] transition duration-300 hover:-translate-y-0.5 hover:bg-white sm:w-auto"
              href="#story"
            >
              {homeHero.secondaryCtaLabel}
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {homeAccessCards.map((card) => (
              <article
                className="surface-card rounded-[1.8rem] p-5 sm:p-6"
                key={card.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                  {card.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                  {card.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-stone-600">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="pointer-events-none absolute inset-x-6 top-8 h-64 rounded-full bg-[radial-gradient(circle,rgba(145,198,160,0.42),transparent_62%)] blur-3xl sm:inset-x-8 sm:top-10 sm:h-72" />
          <DeviceFrame {...homeHeroDevice} />
        </div>
      </section>

      <StoryScroll
        body={homeStoryIntro.body}
        eyebrow={homeStoryIntro.eyebrow}
        steps={homeStorySteps}
        title={homeStoryIntro.title}
      />

      <PageCta
        body={homeCta.body}
        buttonLabel={homeCta.buttonLabel}
        eyebrow={homeCta.eyebrow}
        title={homeCta.title}
      />
    </>
  );
}
