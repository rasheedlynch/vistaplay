import type { Metadata } from "next";

import { Benefits } from "@/components/marketing/benefits";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { DevicesPreview } from "@/components/marketing/devices-preview";
import { FaqPreview } from "@/components/marketing/faq-preview";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { PlansPreview } from "@/components/marketing/plans-preview";
import { buildMetadata, DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({ path: "/", description: DEFAULT_DESCRIPTION }),
  title: { absolute: DEFAULT_TITLE },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <PlansPreview />
      <DevicesPreview />
      <FaqPreview />
      <CtaBanner />
    </>
  );
}
