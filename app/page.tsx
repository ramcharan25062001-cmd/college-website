import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the selection criteria for the JAIN College - Centre for International Studies Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Admission is merit-based and evaluated on: academic performance in Class XII or equivalent, performance during initial years at JAIN College, student's academic ambition and motivation, communication skills, academic credentials and overall profile, and supportive family background for overseas education.",
      },
    },
    {
      "@type": "Question",
      name: "Is a separate application required for the JAIN College - Centre for International Studies Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A separate application is required and can be obtained from the Office of International Relations (IR) or downloaded from the JAIN College website.",
      },
    },
    {
      "@type": "Question",
      name: "Is admission to a Partner University guaranteed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While the Office of International Relations will make every effort to facilitate admission to the preferred Partner University, final admission is subject to: acceptance by the Partner University, availability of seats, and fulfilment of the Partner University's admission criteria.",
      },
    },
    {
      "@type": "Question",
      name: "What are the eligibility requirements for the Undergraduate (UG) Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Students must pass 12th Standard through CBSE / ICSE / A Levels / IB / HSC / OSSD / AHSD or equivalent, and maintain a minimum CGPA of 8 out of 10 during the first two years at JAIN College. Diploma holders (after 10th) are not eligible. A Statement of Purpose of 250 words is mandatory.",
      },
    },
    {
      "@type": "Question",
      name: "What is the eligibility for the Master's (PG) Pathway Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Applicants must hold a Bachelor's degree in a relevant discipline from a recognised university with a minimum of 80% marks or equivalent academic performance, subject to partner university requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I am unable to secure admission to the selected overseas university?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the unlikely event that a student is unable to secure admission to the chosen overseas university, the student may continue and complete the degree program at JAIN College and be awarded the degree from JAIN College.",
      },
    },
  ],
};

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import VisionMissionSection from "./components/VisionMissionSection";
import ProgramsSection from "./components/ProgramsSection";
import PathwaysSection from "./components/PathwaysSection";
import HighlightsSection from "./components/HighlightsSection";
import WhyJAINSection from "./components/WhyJAINSection";
import PartnerUniversitiesSection from "./components/PartnerUniversitiesSection";
import AdmissionProcedureSection from "./components/AdmissionProcedureSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <VisionMissionSection />
      <HighlightsSection />
      <ProgramsSection />
      <PathwaysSection />
      <WhyJAINSection />
      <PartnerUniversitiesSection />
      <AdmissionProcedureSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
