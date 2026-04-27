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
    <div className="surface-card relative w-full max-w-[32rem] overflow-hidden rounded-[2.4rem] p-4 sm:max-w-[34rem] sm:rounded-[2.8rem] sm:p-6">
      <div className="absolute inset-x-6 top-0 h-28 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.68),transparent_64%)] blur-2xl sm:inset-x-8 sm:h-32" />
      <div className="relative rounded-[2rem] border border-white/70 bg-[rgba(244,246,242,0.84)] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:rounded-[2.2rem] sm:p-5">
        <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-[rgba(19,22,27,0.09)] sm:mb-5 sm:w-24" />
        <div className="rounded-[1.6rem] border border-white/80 bg-[rgba(255,255,255,0.76)] p-4 sm:rounded-[1.8rem] sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-stone-500">
                {eyebrow}
              </p>
              <h3 className="mt-2 text-balance text-xl font-semibold leading-tight tracking-[-0.04em] text-[var(--ink)] sm:text-2xl">
                {title}
              </h3>
            </div>
            <span className="w-fit rounded-full bg-[var(--ink)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white">
              {badge}
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-stone-600">{body}</p>

          <div className="mt-5 space-y-3 sm:mt-6">
            {lines.map((line, index) => (
              <div
                className={`rounded-[1.2rem] px-3.5 py-3 text-sm leading-6 shadow-[0_12px_32px_rgba(28,34,44,0.07)] sm:rounded-[1.3rem] sm:px-4 ${
                  index === 1
                    ? "ml-auto max-w-[88%] bg-[var(--ink)] text-white"
                    : "max-w-[92%] bg-white text-stone-700"
                }`}
                key={line}
              >
                {line}
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {chips.map((chip) => (
              <span
                className="rounded-full border border-[rgba(19,22,27,0.08)] bg-[rgba(244,248,245,0.96)] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-stone-600 sm:py-2 sm:text-xs"
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
