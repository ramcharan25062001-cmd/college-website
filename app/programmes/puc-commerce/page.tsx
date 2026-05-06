import { Metadata } from "next";
import PUCCommercePageContent from "./PageContent";

export const metadata: Metadata = {
  title: "PUC Commerce Programme",
  description:
    "JAIN College's PUC Commerce programme in Bengaluru — Accountancy, Economics, Business Studies with experienced faculty and 97% pass rates.",
  keywords: [
    "PUC Commerce Bangalore",
    "commerce stream Bengaluru",
    "JAIN College PUC Commerce",
    "best commerce PUC college Bangalore",
    "commerce 11th 12th",
  ],
  alternates: { canonical: "/programmes/puc-commerce" },
};

export default function PUCCommercePage() {
  return <PUCCommercePageContent />;
}
