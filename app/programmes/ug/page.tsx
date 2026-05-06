import { Metadata } from "next";
import UGPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Undergraduate Programmes (UG)",
  description:
    "Explore JAIN College's Undergraduate programmes — B.Com Global, BBA Global, BCA Global with international pathways to UK, USA, Canada & Australia partner universities.",
  keywords: [
    "undergraduate courses JAIN College",
    "B.Com Global Bangalore",
    "BBA Global Bangalore",
    "BCA Global Bangalore",
    "UG programmes international",
    "global degree Bangalore",
  ],
  alternates: { canonical: "/programmes/ug" },
};

export default function UGCoursesPage() {
  return <UGPageContent />;
}
