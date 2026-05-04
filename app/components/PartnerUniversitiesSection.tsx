"use client";

import { useState } from "react";
import Image from "next/image";

interface University {
  name: string;
  country: string;
  flag: string;
  logo: string;
  description: string;
  offerings: string[];
  highlight: string;
  continent: string;
}

const universities: University[] = [
  {
    name: "Bangkok University",
    country: "Thailand",
    flag: "🇹🇭",
    continent: "Asia",
    logo: "/Partner university logo/Bangkok_University_(logo).png",
    description:
      "Bangkok University is one of Thailand's leading private universities, known for its international outlook and strong industry connections across Southeast Asia.",
    offerings: [
      "Business Administration",
      "Communication Arts",
      "Engineering",
      "Fine Arts & Design",
      "Information Technology",
      "Economics",
    ],
    highlight: "Top-ranked private university in Thailand with global partnerships.",
  },
  {
    name: "Taylor's University",
    country: "Malaysia",
    flag: "🇲🇾",
    continent: "Asia",
    logo: "/Partner university logo/Taylor's_University.png",
    description:
      "Taylor's University is one of Malaysia's top private universities, consistently ranked among the best in Asia. It is known for its vibrant campus and industry-relevant programmes.",
    offerings: [
      "Business & Management",
      "Hospitality & Tourism",
      "Architecture & Built Environment",
      "Media & Communication",
      "Law",
      "Engineering & Technology",
    ],
    highlight: "Malaysia's #1 private university — QS World University Rankings.",
  },
  {
    name: "University of Economics and Finance",
    country: "Vietnam",
    flag: "🇻🇳",
    continent: "Asia",
    logo: "/Partner university logo/Ho_Chi_Minh_City_University_of_Economics_and_Finance_UEF_Logo.png",
    description:
      "Ho Chi Minh City University of Economics and Finance (UEF) is a dynamic institution in Vietnam known for its international education standards and strong ties to ASEAN business networks.",
    offerings: [
      "Economics",
      "Finance & Banking",
      "International Business",
      "Accounting & Auditing",
      "Marketing",
      "Tourism & Hospitality",
    ],
    highlight: "Leading international-standard university in Vietnam's economic hub.",
  },
  {
    name: "Lincoln University",
    country: "Malaysia",
    flag: "🇲🇾",
    continent: "Asia",
    logo: "/Partner university logo/ea-inst-logo-lincoln-uc.png",
    description:
      "Lincoln University College is a leading Malaysian private university offering internationally recognised programmes with a strong focus on professional development and industry readiness.",
    offerings: [
      "Business & Management",
      "Computing & IT",
      "Engineering",
      "Tourism & Hospitality",
      "Mass Communication",
      "Health Sciences",
    ],
    highlight: "ISO-certified institution with globally recognised degree programmes.",
  },
  {
    name: "VIC University",
    country: "Spain",
    flag: "🇪🇸",
    continent: "Europe",
    logo: "/Partner university logo/logo_3linies_uvic_color.jpg",
    description:
      "Universitat de Vic – Universitat Central de Catalunya is a public university in Spain offering a wide range of programmes with a focus on research, health, and social sciences.",
    offerings: [
      "Business & Economics",
      "Health Sciences",
      "Education",
      "Engineering",
      "Social & Human Sciences",
      "Translation & Linguistics",
    ],
    highlight: "Recognised for excellence in health sciences and multilingual education.",
  },
  {
    name: "Frankfurt School",
    country: "Germany",
    flag: "🇩🇪",
    continent: "Europe",
    logo: "/Partner university logo/Logo_der_Frankfurt_School_of_Finance_&_Management.jpg",
    description:
      "Frankfurt School of Finance & Management is a globally ranked business school specialising in finance, management, and FinTech education, based in Germany's financial capital.",
    offerings: [
      "Finance & Accounting",
      "Banking & Investment",
      "FinTech & Digital Finance",
      "Management",
      "MBA Programs",
      "Executive Education",
    ],
    highlight: "Triple-accredited (AACSB, EQUIS, AMBA) — among the world's top business schools.",
  },
  {
    name: "Bordeaux Montaigne University",
    country: "France",
    flag: "🇫🇷",
    continent: "Europe",
    logo: "/Partner university logo/Université_Bordeaux_Montaigne_Logo.svg.png",
    description:
      "Université Bordeaux Montaigne is a prestigious French public university renowned for its programmes in arts, humanities, and social sciences situated in the heart of Bordeaux.",
    offerings: [
      "Arts & Humanities",
      "Languages & Civilisations",
      "Social Sciences",
      "Information & Communication",
      "Psychology",
      "Geography",
    ],
    highlight: "One of France's most respected institutions for humanities and arts.",
  },
  {
    name: "University of York",
    country: "UK",
    flag: "🇬🇧",
    continent: "Europe",
    logo: "/Partner university logo/University of York.jpeg",
    description:
      "The University of York is a prestigious Russell Group university in the United Kingdom, consistently ranked among the world's top 150 universities for research and teaching excellence.",
    offerings: [
      "Business & Management",
      "Economics",
      "Law",
      "Social Sciences",
      "Computer Science",
      "Health Sciences",
    ],
    highlight: "Russell Group university — top 150 globally in QS World Rankings.",
  },
  {
    name: "University of Limoges",
    country: "France",
    flag: "🇫🇷",
    continent: "Europe",
    logo: "/Partner university logo/University of Limoges.png",
    description:
      "The University of Limoges is a French public university offering a broad spectrum of disciplines, known for its research-driven approach and strong European academic networks.",
    offerings: [
      "Law & Economics",
      "Sciences & Technology",
      "Humanities",
      "Engineering",
      "Health",
      "Arts & Literature",
    ],
    highlight: "A comprehensive French public university with strong European research ties.",
  },
  {
    name: "EM Normandie Business School",
    country: "France",
    flag: "🇫🇷",
    continent: "Europe",
    logo: "/Partner university logo/EM_Normandie-Logo.jpg",
    description:
      "EM Normandie is a leading French Grande École business school with campuses across France and the UK, specialising in management, international business, and logistics.",
    offerings: [
      "International Business",
      "Management",
      "Logistics & Supply Chain",
      "Digital Marketing",
      "Finance",
      "Global MBA",
    ],
    highlight: "AACSB & EQUIS accredited — among France's top Grande École business schools.",
  },
  {
    name: "Charles Sturt University",
    country: "Australia",
    flag: "🇦🇺",
    continent: "Oceania",
    logo: "/Partner university logo/Charles Sturt University.png",
    description:
      "Charles Sturt University is an Australian public university with a strong focus on practical learning and professional outcomes, serving students across regional and global campuses.",
    offerings: [
      "Business & Commerce",
      "Information Technology",
      "Health & Nursing",
      "Education",
      "Environmental Science",
      "Agriculture",
    ],
    highlight: "Australia's leading university for practical, career-focused education.",
  },
];

const continentOrder = ["Asia", "Europe", "Oceania"];

const continentIcons: Record<string, string> = {
  Asia: "",
  Europe: "",
  Oceania: "",
  Africa: "",
  "North America": "",
  "South America": "",
};

// Modal Component
const UniversityModal = ({
  university,
  onClose,
}: {
  university: University;
  onClose: () => void;
}) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    {/* Backdrop */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

    {/* Modal */}
    <div
      className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col sm:flex-row">
        {/* Left — Logo & Name */}
        <div className="sm:w-48 shrink-0 bg-[#001C54] rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none flex flex-col items-center justify-center p-6 gap-4">
          <div className="w-28 h-28 bg-white rounded-xl flex items-center justify-center p-2 shadow-md">
            <Image
              src={university.logo}
              alt={university.name}
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center">
            <p className="text-white font-bold text-sm leading-tight text-center">
              {university.name}
            </p>
            <p className="text-[#F8C300] text-xs mt-1">
              {university.flag} {university.country}
            </p>
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex-1 p-6">
          {/* Highlight badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#FFF9E6] border border-[#F8C300] text-[#001C54] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <svg className="w-3.5 h-3.5 text-[#F8C300]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {university.highlight}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {university.description}
          </p>

          <h4 className="text-[#001C54] font-bold text-sm uppercase tracking-wide mb-3">
            What They Offer
          </h4>
          <div className="flex flex-wrap gap-2">
            {university.offerings.map((item) => (
              <span
                key={item}
                className="bg-[#001C54] text-white text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PartnerUniversitiesSection = () => {
  const [selected, setSelected] = useState<University | null>(null);

  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-[#001C54] to-[#16336e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Partner Universities
          </h2>
          <div className="w-24 h-1 bg-[#F8C300] mx-auto rounded-full"></div>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Graduate with internationally recognised degrees from our esteemed
            partner universities across the globe.
          </p>
          <p className="mt-2 text-white/50 text-sm">(Proposed Universities)</p>
        </div>

        {/* Universities grouped by Continent */}
        <div className="space-y-14">
          {continentOrder
            .filter((continent) => universities.some((u) => u.continent === continent))
            .map((continent) => {
              const group = universities.filter((u) => u.continent === continent);
              return (
                <div key={continent}>
                  {/* Continent Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{continentIcons[continent]}</span>
                    <h3 className="text-xl font-bold text-white">{continent}</h3>
                    <div className="flex-1 h-px bg-white/20 ml-2" />
                    <span className="text-white/50 text-sm shrink-0">
                      {group.length} {group.length === 1 ? "University" : "Universities"}
                    </span>
                  </div>

                  {/* Grid for this continent */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {group.map((uni, index) => (
                      <button
                        key={index}
                        onClick={() => setSelected(uni)}
                        className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/20 transition-all hover:-translate-y-1 text-center flex flex-col items-center"
                      >
                        <div className="w-full h-16 mb-3 flex items-center justify-center">
                          <Image
                            src={uni.logo}
                            alt={uni.name}
                            width={120}
                            height={64}
                            className="max-h-16 w-auto object-contain rounded bg-white/90 p-1"
                          />
                        </div>
                        <h3 className="text-white font-bold text-sm lg:text-base mb-1 leading-tight">
                          {uni.name}
                        </h3>
                        <p className="text-[#F8C300] text-xs font-medium mb-3">
                          {uni.country}
                        </p>
                        <span className="mt-auto text-[10px] font-bold tracking-widest uppercase text-[#001C54] bg-[#F8C300] px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn More
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <UniversityModal university={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default PartnerUniversitiesSection;
