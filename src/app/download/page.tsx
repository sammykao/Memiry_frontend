import { AppStoreButton } from "@/components/app-store-button";
import { DeviceFrame } from "@/components/device-frame";
import { PageIntro } from "@/components/page-intro";
import { downloadHighlights, downloadQuestions } from "@/lib/site-data";

export default function DownloadPage() {
  return (
    <>
      <PageIntro
        body="The iOS paywall already frames Memiry as a single Apple subscription with a free trial. This page keeps that model clean, direct, and Apple-adjacent without cloning the App Store visual language."
        eyebrow="Download"
        side={
          <DeviceFrame
            badge="One Apple subscription"
            body="The app currently positions Memiry as a full experience membership with a free-trial start."
            chips={["1 week free", "$12.99 / month", "Apple billing"]}
            eyebrow="Simple pricing"
            lines={[
              "Keyboard + app access",
              "Memory editing and retrieval",
              "Connected tools and support",
            ]}
            title="Install once. Keep it available everywhere you type."
          />
        }
        title="A clean download page with one path forward."
      />

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="surface-card rounded-[2.2rem] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
              Membership
            </p>
            <h2 className="mt-4 font-display text-5xl leading-none tracking-[-0.05em] text-[var(--ink)]">
              1 week free
              <br />
              then $12.99 / month
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
              Auto-renews through your Apple account until cancelled. The site
              keeps the choice simple and pushes users directly to the App Store
              link from environment config.
            </p>
            <div className="mt-8">
              <AppStoreButton label="Download on the App Store" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {downloadHighlights.map((item) => (
              <article className="surface-card rounded-[1.8rem] p-5" key={item.title}>
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 pt-8 lg:px-10">
        <div className="grid gap-4">
          {downloadQuestions.map((item) => (
            <article className="surface-card rounded-[1.8rem] p-6" key={item.question}>
              <p className="text-lg font-semibold text-[var(--ink)]">
                {item.question}
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
