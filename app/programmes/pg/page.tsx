import { Metadata } from "next";
import PGPageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Masters Programmes (PG)",
  description:
    "Explore JAIN College's Masters programmes — M.Com Global with international pathways to partner universities in UK, USA, Canada & Australia.",
  keywords: [
    "masters courses JAIN College",
    "M.Com Global Bangalore",
    "PG programmes international",
    "postgraduate degree Bangalore",
    "global masters degree India",
  ],
  alternates: { canonical: "/programmes/pg" },
};

export default function PGCoursesPage() {
  return <PGPageContent />;
}
