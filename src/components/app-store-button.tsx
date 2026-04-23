import { appStoreUrl } from "@/lib/app-store";

type AppStoreButtonProps = {
  label: string;
  subtle?: boolean;
};

export function AppStoreButton({
  label,
  subtle = false,
}: AppStoreButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
        subtle
          ? "border border-[var(--line)] bg-white/76 text-[var(--ink)] hover:bg-white"
          : "bg-[var(--ink)] text-white shadow-[0_24px_60px_rgba(18,22,29,0.22)] hover:bg-black"
      }`}
      href={appStoreUrl}
      rel="noreferrer"
      target="_blank"
    >
      <AppleIcon />
      <span>{label}</span>
    </a>
  );
}

function AppleIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="h-5 w-5"
    >
      <path d="M15.59 3.26c.92-1.09 1.53-2.62 1.36-4.16-1.33.09-2.95.88-3.9 1.97-.85.97-1.59 2.52-1.39 4 1.48.11 2.99-.75 3.93-1.81ZM18.97 12.63c.02-2.24 1.84-3.31 1.92-3.36-1.05-1.54-2.67-1.75-3.24-1.78-1.38-.15-2.69.81-3.39.81-.71 0-1.81-.79-2.97-.77-1.52.02-2.94.89-3.72 2.25-1.59 2.74-.4 6.8 1.13 9 1.15 1.63 2.51 3.45 4.31 3.38 1.73-.07 2.39-1.11 4.48-1.11 2.1 0 2.69 1.11 4.52 1.07 1.87-.03 3.04-1.68 4.18-3.32.66-.94.92-1.42 1.43-2.49-4.7-1.79-4.65-6.58-4.65-6.68Z" />
    </svg>
  );
}
