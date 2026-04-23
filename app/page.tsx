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
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <VisionMissionSection />
      <ProgramsSection />
      <PathwaysSection />
      <HighlightsSection />
      <WhyJAINSection />
      <PartnerUniversitiesSection />
      <AdmissionProcedureSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
