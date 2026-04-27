import type { Metadata } from "next";
import { DeviceFrame } from "@/components/device-frame";
import { MemoryAtlas } from "@/components/memory-atlas";
import { PageCta } from "@/components/page-cta";
import { PageIntro } from "@/components/page-intro";
import {
  memoryCta,
  memoryPageDevice,
  memoryPageIntro,
  memorySignals,
  memoryWorkflow,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Memory",
  description:
    "Memiry keeps a light, editable memory layer behind your conversations.",
};

export default function MemoryPage() {
  return (
    <>
      <PageIntro
        body={memoryPageIntro.body}
        eyebrow={memoryPageIntro.eyebrow}
        side={<DeviceFrame {...memoryPageDevice} />}
        title={memoryPageIntro.title}
      />

      <MemoryAtlas signals={memorySignals} workflow={memoryWorkflow} />

      <PageCta
        body={memoryCta.body}
        buttonLabel={memoryCta.buttonLabel}
        eyebrow={memoryCta.eyebrow}
        title={memoryCta.title}
      />
    </>
  );
}
