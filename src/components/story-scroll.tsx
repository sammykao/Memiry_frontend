"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { DeviceFrame } from "@/components/device-frame";
import { SectionHeading } from "@/components/section-heading";
import type { StoryStep } from "@/lib/site-data";

type StoryScrollProps = {
  body: string;
  eyebrow: string;
  steps: readonly StoryStep[];
  title: string;
};

export function StoryScroll({
  body,
  eyebrow,
  steps,
  title,
}: StoryScrollProps) {
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

  if (shouldReduceMotion) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-10">
        <SectionHeading body={body} eyebrow={eyebrow} title={title} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article className="surface-card rounded-[1.8rem] p-5 sm:p-6" key={step.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500">
                {step.label}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-stone-600">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-10" id="story" ref={ref}>
      <SectionHeading body={body} eyebrow={eyebrow} title={title} />

      <div className="mt-8 grid gap-4 lg:hidden">
        {steps.map((step) => (
          <article className="surface-card rounded-[1.8rem] p-5 sm:p-6" key={step.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500">
              {step.label}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
              {step.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-stone-600">
              {step.body}
            </p>
          </article>
        ))}
      </div>

      <div className="hidden lg:block lg:h-[230vh]">
        <div className="sticky top-28 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            {steps.map((step, index) => {
              const active = index === activeIndex;
              return (
                <motion.article
                  animate={{ opacity: active ? 1 : 0.42, y: active ? 0 : 10 }}
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
            animate={{ y: activeIndex * -4 }}
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
