import type { Metadata } from "next";
import PilotForm from "./PilotForm";

export const metadata: Metadata = {
  title: "3Nails.ai - Apply for Church OS Pilot",
  description: "Apply to be one of the first churches on Church OS. Pilot pricing, personal onboarding, and direct access to the founding team.",
  openGraph: {
    title: "Apply for Church OS Pilot | 3Nails.ai",
    description: "Join the Church OS pilot program. Limited spots. Apply now.",
    url: "https://3nails.ai/pilot",
    siteName: "3Nails.ai",
    type: "website",
  },
  alternates: {
    canonical: "https://3nails.ai/pilot",
  },
};

export default function PilotPage() {
  return <PilotForm />;
}
