import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Memiry",
  description: "Memiry privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
          Privacy
        </p>
        <h1 className="mt-4 font-display text-5xl leading-none tracking-[-0.05em] text-[var(--ink)] sm:text-6xl">
          Privacy Policy
        </h1>
        <a
          className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/76 px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:bg-white"
          href="/privacy-policy/privacy-policy.pdf"
          rel="noreferrer"
          target="_blank"
        >
          Open PDF
        </a>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-white/70 bg-white/84 shadow-[0_24px_80px_rgba(28,34,44,0.12)]">
        <object
          className="h-[78vh] w-full bg-white"
          data="/privacy-policy/privacy-policy.pdf#view=FitH"
          type="application/pdf"
        >
          <div className="flex h-[78vh] items-center justify-center px-6 text-center text-sm leading-6 text-stone-500">
            The rendered PDF is not in this folder yet. Place{" "}
            <code className="mx-1 rounded bg-white/80 px-1.5 py-0.5 text-[0.8rem] text-[var(--ink)]">
              privacy-policy.pdf
            </code>
            in{" "}
            <code className="mx-1 rounded bg-white/80 px-1.5 py-0.5 text-[0.8rem] text-[var(--ink)]">
              public/privacy-policy/
            </code>
            and reload this page.
          </div>
        </object>
      </div>
    </section>
  );
}
