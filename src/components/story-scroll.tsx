"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { DeviceFrame } from "@/components/device-frame";
import type { StoryStep } from "@/lib/site-data";

type StoryScrollProps = {
  steps: readonly StoryStep[];
};

export function StoryScroll({ steps }: StoryScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = Math.min(
      steps.length - 1,
      Math.floor(value * steps.length),
    );
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  const activeStep = steps[activeIndex];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-10 lg:px-10" id="story" ref={ref}>
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">
          Scroll-driven product story
        </p>
        <h2 className="mt-4 font-display text-5xl leading-none tracking-[-0.05em] text-[var(--ink)] sm:text-6xl">
          A site that moves the way the product does.
        </h2>
        <p className="mt-4 text-base leading-7 text-stone-600">
          The key section is pinned and scrubbed so the site tells one sequence:
          stay in the thread, save context, then act through connected apps.
        </p>
      </div>

      <div className={shouldReduceMotion ? "grid gap-6 lg:grid-cols-2" : "h-[260vh]"}>
        <div className={shouldReduceMotion ? "grid gap-4" : "sticky top-28 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"}>
          <div className="space-y-4">
            {steps.map((step, index) => {
              const active = index === activeIndex;
              return (
                <motion.article
                  animate={shouldReduceMotion ? {} : { opacity: active ? 1 : 0.42, y: active ? 0 : 10 }}
                  className="surface-card rounded-[2rem] p-6"
                  key={step.title}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500">
                    {step.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-stone-600">
                    {step.body}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            animate={shouldReduceMotion ? {} : { y: activeIndex * -4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <DeviceFrame
              badge={activeStep.badge}
              body={activeStep.previewBody}
              chips={activeStep.chips}
              eyebrow={activeStep.previewEyebrow}
              lines={activeStep.lines}
              title={activeStep.previewTitle}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
