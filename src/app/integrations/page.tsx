import type { Metadata } from "next";
import { DeviceFrame } from "@/components/device-frame";
import { IntegrationBoard } from "@/components/integration-board";
import { PageCta } from "@/components/page-cta";
import { PageIntro } from "@/components/page-intro";
import {
  integrationCategories,
  integrationFlow,
  integrationsCta,
  integrationsPageDevice,
  integrationsPageIntro,
  integrationsRail,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Connect your mail, calendar, and docs so Memiry can move from reply to action.",
};

export default function IntegrationsPage() {
  return (
    <>
      <PageIntro
        body={integrationsPageIntro.body}
        eyebrow={integrationsPageIntro.eyebrow}
        side={<DeviceFrame {...integrationsPageDevice} />}
        title={integrationsPageIntro.title}
      />

      <IntegrationBoard
        categories={integrationCategories}
        flow={integrationFlow}
        rail={integrationsRail}
      />

      <PageCta
        body={integrationsCta.body}
        buttonLabel={integrationsCta.buttonLabel}
        eyebrow={integrationsCta.eyebrow}
        title={integrationsCta.title}
      />
    </>
  );
}
