import Link from "next/link";
import { AppStoreButton } from "@/components/app-store-button";
import { navigationItems } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/60 bg-white/36">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
            Memiry
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-4xl">
            Keyboard, app, and Siri.
          </h2>
          <p className="mt-3 text-sm leading-6 text-stone-600">
            One Memiry agent across the places you already reach for on iPhone.
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:items-end">
          <nav className="flex flex-wrap gap-3">
            {navigationItems.map((item) => (
              <Link
                className="rounded-full border border-[var(--line)] bg-white/60 px-4 py-2 text-sm font-medium text-stone-600 transition hover:bg-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <AppStoreButton label="Get Memiry" subtle />
          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500">
            <Link
              className="transition hover:text-[var(--ink)] hover:underline"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
