import { Metadata } from "next";
import PUCArtsPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "PUC Arts Programme",
  description:
    "JAIN College's PUC Arts programme in Bengaluru — Languages, Humanities and Social Sciences with experienced faculty and 97% pass rates.",
  keywords: [
    "PUC Arts Bangalore",
    "PUC Humanities Bengaluru",
    "JAIN College PUC Arts",
    "best PUC college Bangalore",
    "arts stream 11th 12th",
  ],
  alternates: { canonical: "/programmes/puc-arts" },
};

export default function PUCArtsPage() {
  return <PUCArtsPageContent />;
}
