"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { ProgramData, ProgramLevel } from "../programmes/programmes-data";

// Hero Banner
const ProgramHero = ({ program }: { program: ProgramData }) => (
  <section className="relative bg-[#001C54] overflow-hidden">
    {/* Background program image */}
    <Image
      src={program.image}
      alt={program.programTitle}
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#001C54]/90 to-[#16336e]/70" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <p className="text-white/70 text-sm mb-2">{program.programSubtitle}</p>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
        {program.programTitle}
      </h1>
      <div className="w-20 h-1 bg-[#F8C300] mb-8" />

      <div className="flex flex-wrap items-end gap-8 lg:gap-16">
        <div>
          <p className="text-[#F8C300] text-xs font-semibold tracking-widest uppercase mb-1">
            Duration
          </p>
          <p className="text-white text-xl font-bold">{program.duration}</p>
        </div>
        <div>
          <p className="text-[#F8C300] text-xs font-semibold tracking-widest uppercase mb-1">
            Mode of Study
          </p>
          <p className="text-white text-xl font-bold">{program.modeOfStudy}</p>
        </div>
        <div className="ml-auto">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#001C54] transition-all"
          >
            Apply Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// Breadcrumb
const Breadcrumb = ({ program }: { program: ProgramData }) => (
  <div className="bg-white py-4 border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2 text-sm flex-wrap">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <span className="text-gray-400">›</span>
        <Link
          href={`/programmes/${program.category}`}
          className="text-blue-600 hover:underline"
        >
          {program.parentCategory}
        </Link>
        <span className="text-gray-400">›</span>
        <span className="text-gray-600">{program.programTitle}</span>
      </div>
    </div>
  </div>
);

// Overview Section
const OverviewSection = ({ program }: { program: ProgramData }) => (
  <section className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-gray-700 leading-relaxed mb-6">{program.overview}</p>
      <h2 className="text-3xl font-bold text-[#001C54] mb-6">Overview</h2>
      <p className="text-gray-700 leading-relaxed">{program.overviewDetails}</p>
    </div>
  </section>
);

// Pathway data
const UG_PATHWAYS = [
  { name: "1 + 2 Pathway", structure: "1 year at JAIN College → 2 years at a Partner University abroad", advantage: "Begin your international journey early", popular: false },
  { name: "1 + 3 Pathway", structure: "1 year at JAIN College → 3 years at a Partner University abroad", advantage: "Complete most of your degree internationally", popular: false },
  { name: "2 + 1 Pathway", structure: "2 years at JAIN College → 1 year at a Partner University abroad", advantage: "Graduate with a global degree after a strong foundation", popular: false },
  { name: "2 + 2 Pathway", structure: "2 years at JAIN College → 2 years at a Partner University abroad", advantage: "Balanced and cost-effective global education", popular: true },
  { name: "UG + Master's at Partnered University", structure: "Complete your undergraduate degree at JAIN College → Progress to a Master's degree at a Partner University abroad", advantage: "Complete your degree and specialise globally", popular: false },
];

const PG_PATHWAYS = [
  { name: "1 + 1 Pathway", structure: "1 year at JAIN College → 1 year at a Partner University abroad", advantage: "Earn a globally recognised postgraduate degree", popular: false },
  { name: "UG + Master's at Partner University Abroad", structure: "Complete undergraduate at JAIN College → Master's at Partner University abroad", advantage: "Seamless global academic progression", popular: false },
];

// International Pathway Section
const PathwaySection = ({ program }: { program: ProgramData }) => {
  const pathways = program.category === "ug" ? UG_PATHWAYS : PG_PATHWAYS;

  return (
    <section className="py-16 bg-[#001C54]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          International Pathway Progression Options
        </h2>
        <div className="w-20 h-1 bg-[#F8C300] mb-8" />

        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F8C300]">
                <th className="text-left text-[#001C54] py-4 px-5 font-bold">Pathway</th>
                <th className="text-left text-[#001C54] py-4 px-5 font-bold">Structure</th>
                <th className="text-left text-[#001C54] py-4 px-5 font-bold">Your Pathway Advantage</th>
              </tr>
            </thead>
            <tbody>
              {pathways.map((p, i) => (
                <tr key={p.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-4 px-5 font-semibold text-[#001C54] whitespace-nowrap">
                    {p.name}
                    {p.popular && (
                      <span className="ml-2 inline-block bg-[#F8C300] text-[#001C54] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-5 text-gray-700">{p.structure}</td>
                  <td className="py-4 px-5 text-gray-700">{p.advantage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Program Structure with tabs
const ProgramStructureSection = ({ program }: { program: ProgramData }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#001C54] mb-4">
          Program Structure
        </h2>
        <p className="text-gray-700 mb-8">{program.programStructureIntro}</p>

        {/* Tabs */}
        <div className="flex gap-1 mb-6">
          {program.levels.map((level: ProgramLevel, index: number) => (
            <button
              key={level.name}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-t-lg font-semibold text-sm transition-colors ${
                activeTab === index
                  ? "bg-[#001C54] text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {level.name}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-[#001C54]">
                <th className="text-left text-white py-4 px-6 font-semibold">Module Title</th>
              </tr>
            </thead>
            <tbody>
              {program.levels[activeTab]?.modules.map((mod, index) => (
                <tr
                  key={mod.title}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-4 px-6 text-gray-700">{mod.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};



// Career Opportunities & Higher Education
const CareerSection = ({ program }: { program: ProgramData }) => {
  const careers = program.progressionContent.split(",").map((s) => s.trim()).filter(Boolean);
  const higherEd = program.progressionNote.split(",").map((s) => s.trim()).filter(Boolean);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Career Opportunities */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-[#001C54]">Career Opportunities</h2>
            <div className="flex-1 h-1 bg-[#F8C300] rounded-full" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {careers.map((career) => (
              <div
                key={career}
                className="flex items-start gap-3 bg-[#001C54] rounded-xl p-4 shadow-sm"
              >
                <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#F8C300] flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#001C54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium leading-snug">{career}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Higher Education */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold text-[#001C54]">Higher Education Pathways</h2>
            <div className="flex-1 h-1 bg-[#F8C300] rounded-full" />
          </div>
          <div className="flex flex-wrap gap-3">
            {higherEd.map((item) => (
              <span
                key={item}
                className="bg-[#FFF9E6] border border-[#F8C300] text-[#001C54] text-sm font-semibold px-4 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Related Programs
const RelatedProgramsSection = ({
  programs,
  currentCategory,
}: {
  programs: ProgramData[];
  currentCategory: "ug" | "pg";
}) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-[#001C54] text-center mb-2">
        Explore Other Programs
      </h2>
      <div className="w-24 h-1 bg-[#F8C300] mx-auto mb-12" />

      <div className="flex flex-wrap justify-center gap-6">
        {programs.map((prog) => (
          <div
            key={prog.slug}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          >
            {/* Program image */}
            <div className="aspect-[4/3] relative">
              <Image
                src={prog.image}
                alt={prog.programTitle}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold text-[#001C54] text-sm mb-3">
                {prog.programTitle}
              </h3>
              <div className="space-y-1 text-xs text-gray-500 mb-4">
                <p className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Duration: {prog.duration}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Mode: {prog.modeOfStudy}
                </p>
              </div>
              <Link
                href={`/programmes/${currentCategory}/${prog.slug}`}
                className="inline-flex items-center gap-1 bg-[#001C54] text-white text-xs font-bold px-4 py-2 rounded hover:bg-[#16336e] transition-colors"
              >
                VIEW PROGRAM
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Inline Enquiry CTA
const InlineEnquiryCTA = ({ program }: { program: ProgramData }) => (
  <section id="enquiry-section" className="py-16 bg-gradient-to-r from-[#001C54] to-[#16336e]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Ready to Apply for {program.programTitle}?
      </h2>
      <p className="text-white/80 mb-8">
        Take the first step towards a world-class education. Our admissions team is here to help.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/admissions"
          className="bg-[#F8C300] text-[#001C54] px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
        >
          Apply Now
        </Link>
        <Link
          href="/contact"
          className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#001C54] transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </section>
);

// Main Program Detail Page
interface ProgramDetailPageProps {
  program: ProgramData;
  relatedPrograms: ProgramData[];
}

export default function ProgramDetailPage({ program, relatedPrograms }: ProgramDetailPageProps) {
  return (
    <>
      <Header />
      <main>
        <ProgramHero program={program} />
        <Breadcrumb program={program} />
        <OverviewSection program={program} />
        <PathwaySection program={program} />
        {/* <ProgramStructureSection program={program} /> */}
        <CareerSection program={program} />
        <RelatedProgramsSection programs={relatedPrograms} currentCategory={program.category} />
        <InlineEnquiryCTA program={program} />
      </main>
      <Footer />
    </>
  );
}
