import { Metadata } from "next";
import PUCSciencePageContent from "./PageContent";

export const metadata: Metadata = {
  title: "PUC Science Programme (PCMB / PCMC)",
  description:
    "JAIN College's PUC Science programme in Bengaluru — Physics, Chemistry, Mathematics & Biology with experienced faculty and 97% pass rates.",
  keywords: [
    "PUC Science Bangalore",
    "PCMB Bengaluru",
    "PCMC Bengaluru",
    "JAIN College PUC Science",
    "best science PUC college Bangalore",
    "science stream 11th 12th",
  ],
  alternates: { canonical: "/programmes/puc-science" },
};

export default function PUCSciencePage() {
  return <PUCSciencePageContent />;
}
