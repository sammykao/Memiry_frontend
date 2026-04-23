type DeviceFrameProps = {
  badge: string;
  body: string;
  chips: readonly string[];
  eyebrow: string;
  lines: readonly string[];
  title: string;
};

export function DeviceFrame({
  badge,
  body,
  chips,
  eyebrow,
  lines,
  title,
}: DeviceFrameProps) {
  return (
    <div className="surface-card relative w-full max-w-[34rem] overflow-hidden rounded-[2.8rem] p-5 sm:p-6">
      <div className="absolute inset-x-8 top-0 h-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.68),transparent_64%)] blur-2xl" />
      <div className="relative rounded-[2.2rem] border border-white/70 bg-[rgba(244,246,242,0.84)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:p-5">
        <div className="mx-auto mb-5 h-1.5 w-24 rounded-full bg-[rgba(19,22,27,0.09)]" />
        <div className="rounded-[1.8rem] border border-white/80 bg-[rgba(255,255,255,0.76)] p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-stone-500">
                {eyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.04em] text-[var(--ink)]">
                {title}
              </h3>
            </div>
            <span className="rounded-full bg-[var(--ink)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white">
              {badge}
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-stone-600">{body}</p>

          <div className="mt-6 space-y-3">
            {lines.map((line, index) => (
              <div
                className={`rounded-[1.3rem] px-4 py-3 text-sm leading-6 shadow-[0_12px_32px_rgba(28,34,44,0.07)] ${
                  index === 1
                    ? "ml-auto max-w-[85%] bg-[var(--ink)] text-white"
                    : "max-w-[88%] bg-white text-stone-700"
                }`}
                key={line}
              >
                {line}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                className="rounded-full border border-[rgba(19,22,27,0.08)] bg-[rgba(244,248,245,0.96)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-600"
                key={chip}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
