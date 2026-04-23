"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppStoreButton } from "@/components/app-store-button";
import { navigationItems } from "@/lib/site-data";

export function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [spot, setSpot] = useState({ x: 120, y: 28 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeHref =
    navigationItems.find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
    )?.href ?? "/";

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`pointer-events-auto w-full max-w-6xl rounded-full border border-white/70 bg-white/62 px-3 py-2 shadow-[0_24px_80px_rgba(28,34,44,0.12)] backdrop-blur-2xl transition duration-300 ${
          scrolled ? "max-w-5xl translate-y-1" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <Link
            className="flex items-center gap-3 rounded-full px-3 py-2"
            href="/"
          >
            <Image
              alt="Memiry logo"
              className="h-9 w-9 rounded-2xl"
              height={36}
              src="/assets/memiry-logo.png"
              width={36}
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-[-0.03em] text-[var(--ink)]">
                Memiry
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                iPhone app
              </p>
            </div>
          </Link>

          <div
            className="relative hidden flex-1 items-center justify-center md:flex"
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              setSpot({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
              });
            }}
          >
            <div
              className="pointer-events-none absolute inset-x-10 inset-y-1 rounded-full opacity-90"
              style={{
                background: `radial-gradient(140px circle at ${spot.x}px ${spot.y}px, rgba(120,188,138,0.32), transparent 75%)`,
              }}
            />
            <nav className="relative flex items-center gap-1 rounded-full border border-white/75 bg-white/52 px-2 py-1.5">
              {navigationItems.map((item) => {
                const active = item.href === activeHref;
                return (
                  <Link
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "text-[var(--ink)]"
                        : "text-stone-500 hover:text-[var(--ink)]"
                    }`}
                    href={item.href}
                    key={item.href}
                  >
                    {active ? (
                      <motion.span
                        className="absolute inset-0 -z-10 rounded-full bg-white shadow-[0_12px_28px_rgba(27,31,39,0.1)]"
                        layoutId="nav-active"
                        transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      />
                    ) : null}
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="ml-auto hidden md:block">
            <AppStoreButton label="Download" subtle />
          </div>

          <button
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/75 bg-white/70 text-[var(--ink)] md:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 rounded-full bg-current" />
              <span className="h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 overflow-hidden rounded-[2rem] border border-white/75 bg-white/82 p-3 shadow-[0_20px_60px_rgba(28,34,44,0.12)] md:hidden"
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: -10 }}
            >
              <nav className="grid gap-2">
                {navigationItems.map((item) => (
                  <Link
                    className={`rounded-[1.2rem] px-4 py-3 text-sm font-semibold ${
                      item.href === activeHref
                        ? "bg-[var(--ink)] text-white"
                        : "bg-[rgba(245,245,243,0.92)] text-[var(--ink)]"
                    }`}
                    href={item.href}
                    key={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-3">
                <AppStoreButton label="Download on the App Store" />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
