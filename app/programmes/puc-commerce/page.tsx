"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

// Hero Section
const HeroSection = () => {
  return (
    <section className="bg-[#001C54] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Banner Image Placeholder */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
              <div className="text-center p-8">
                <div className="bg-[#001C54] text-white p-6 rounded-lg mb-4">
                  <h3 className="text-xl font-bold mb-2">
                    Excellence Redefined: PUC Results 2025 at JAIN College
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Consistent Excellence. Unmatched Results
                  </p>
                  <div className="flex justify-center gap-4 mb-4">
                    <div className="bg-[#16336e] px-3 py-2 rounded">
                      <span className="text-2xl font-bold text-[#F8C300]">
                        97%
                      </span>
                      <p className="text-xs">in Science</p>
                    </div>
                    <div className="bg-[#16336e] px-3 py-2 rounded">
                      <span className="text-2xl font-bold text-[#F8C300]">
                        97%
                      </span>
                      <p className="text-xs">in Commerce</p>
                    </div>
                    <div className="bg-[#16336e] px-3 py-2 rounded">
                      <span className="text-2xl font-bold text-[#F8C300]">
                        99%
                      </span>
                      <p className="text-xs">in Humanities</p>
                    </div>
                  </div>
                  <div className="bg-[#F8C300] text-[#001C54] px-4 py-2 rounded font-semibold text-sm inline-block">
                    Academic Excellence Starts Here!
                  </div>
                </div>
                <p className="text-gray-500 text-sm">
                  Banner Image Placeholder
                </p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Top PU Commerce Colleges Bangalore
            </h1>
            <Link
              href="/#admissions"
              className="inline-block bg-[#F8C300] text-[#001C54] px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Breadcrumb
const Breadcrumb = () => {
  return (
    <div className="bg-white py-4 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-600">
            Top PU Commerce Colleges Bangalore
          </span>
        </div>
      </div>
    </div>
  );
};

// Commerce Colleges Section
const CommerceCollegesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 uppercase tracking-wide mb-4">
          DISCOVER EXCELLENCE AT JAIN COLLEGE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Commerce Colleges in Bangalore
        </h2>
        <div className="w-24 h-1 bg-[#F8C300] mx-auto mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image Placeholder */}
          <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border-4 border-[#001C54]">
            <div className="text-center text-gray-500">
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p>Students Image Placeholder</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-gray-700 mb-4">
              Welcome to JAIN College, recognised as one of the{" "}
              <em className="font-semibold">
                Top PU colleges for Commerce in Bangalore
              </em>{" "}
              and part of the{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                JAIN Group
              </Link>
              , founded by Dr. Chenraj Roychand.
            </p>
            <p className="text-gray-700 mb-4">
              JAIN PU College in Bangalore is one of the{" "}
              <strong>best Commerce colleges in Bangalore</strong>. Our Commerce
              programme offers comprehensive education in Accountancy, Business
              Studies, Economics, and more. We are proud to be recognised among
              the Top-ranked PU colleges in Bangalore.
            </p>
            <p className="text-gray-700">
              From core subjects such as Accountancy, Business Studies, and
              Economics to elective courses, students gain a deep understanding
              of business principles through theoretical knowledge, practical
              applications, and industry exposure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Best Commerce Colleges Section
const BestCommerceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Best Commerce Colleges in Bangalore
        </h2>
        <div className="w-24 h-1 bg-[#F8C300] mx-auto mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <div>
            <p className="text-gray-700 mb-4">
              Bangalore is home to some of the top Commerce colleges, providing
              excellent opportunities for students pursuing classes 11th and
              12th in the Commerce stream.
            </p>
            <p className="text-gray-700">
              Renowned institutions, such as JAIN PU College, offer
              comprehensive Commerce courses with specializations in
              Accountancy, Business Management, and Economics. These colleges
              are known for their industry-aligned curriculum, experienced
              faculty, and excellent placement records, making them ideal
              choices for students aspiring to build successful careers in
              business and finance.
            </p>
          </div>

          {/* Right - Image Placeholder */}
          <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center max-w-sm ml-auto">
            <div className="text-center text-gray-500">
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p>Student Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Integrated Programmes Section
const IntegratedProgrammesSection = () => {
  const programmes = [
    { name: "CA Foundation", href: "#" },
    { name: "CMA", href: "#" },
    { name: "CS", href: "#" },
    { name: "ACCA", href: "#" },
    { name: "CFA", href: "#" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          An edge with the JAIN College Integrated Programmes
        </h2>
        <div className="w-24 h-1 bg-[#F8C300] mx-auto mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Placeholder */}
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <p>Library/Study Image Placeholder</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-gray-700 mb-6">
              Whether you aspire to become a Chartered Accountant, Company
              Secretary, or pursue higher studies in management, JAIN College
              has structured programmes to help students prepare for
              professional courses. Students receive specialized coaching
              alongside their regular PUC curriculum.
            </p>
            <p className="font-semibold text-gray-900 mb-4">
              Integrated programmes offered by JAIN College:
            </p>
            <div className="flex flex-wrap gap-3">
              {programmes.map((prog) => (
                <Link
                  key={prog.name}
                  href={prog.href}
                  className="bg-[#F8C300] text-[#001C54] px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                >
                  {prog.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// PUC Commerce Subjects Accordion Section
const SubjectsAccordionSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>("subjects");

  const courseCombinations = [
    {
      combination: "ABMS",
      subjects: "Accountancy, Business Studies, Mathematics, Statistics",
    },
    {
      combination: "ABES",
      subjects: "Accountancy, Business Studies, Economics, Statistics",
    },
    {
      combination: "ABEM",
      subjects: "Accountancy, Business Studies, Economics, Mathematics",
    },
    {
      combination: "ABCS",
      subjects: "Accountancy, Business Studies, Computer Science, Statistics",
    },
  ];

  const accordionItems = [
    {
      id: "subjects",
      title: "PUC Commerce subjects",
      content: (
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Course Combination
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Subjects
              </th>
            </tr>
          </thead>
          <tbody>
            {courseCombinations.map((course) => (
              <tr key={course.combination} className="border-b">
                <td className="py-3 px-4 text-gray-600">
                  {course.combination}
                </td>
                <td className="py-3 px-4 text-gray-600">{course.subjects}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ),
    },
    {
      id: "duration",
      title: "Course Duration",
      content: (
        <p className="text-gray-700 p-4">
          The PUC Commerce programme is a 2-year course covering classes 11th
          and 12th. Students undergo comprehensive training in their chosen
          subject combination, with regular assessments and board exam
          preparation.
        </p>
      ),
    },
    {
      id: "eligibility",
      title: "Course Eligibility",
      content: (
        <div className="p-4">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Passed Class 10 (SSLC/CBSE/ICSE) with minimum 55% aggregate</li>
            <li>Basic understanding of Mathematics and Commerce concepts</li>
            <li>Valid transfer certificate from previous school</li>
            <li>
              Age should not exceed 17 years as on June 1st of admission year
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "languages",
      title: "Languages",
      content: (
        <div className="p-4">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>English (Compulsory)</li>
            <li>Kannada</li>
            <li>Hindi</li>
            <li>Sanskrit</li>
            <li>French (Optional)</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Student Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p>
                  Student with Books
                  <br />
                  Image Placeholder
                </p>
              </div>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="space-y-4">
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm border overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenAccordion(openAccordion === item.id ? null : item.id)
                  }
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span
                    className={`font-semibold ${openAccordion === item.id ? "text-blue-600" : "text-gray-900"}`}
                  >
                    {item.title}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform ${openAccordion === item.id ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openAccordion === item.id && (
                  <div className="border-t bg-gray-50">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Scopes of Studying Commerce Section
const ScopesSection = () => {
  const degrees = [
    "Bachelor of Commerce (B.Com)",
    "Bachelor of Business Administration (BBA)",
    "Chartered Accountancy (CA)",
    "Company Secretary (CS)",
    "Cost and Management Accountant (CMA)",
    "Bachelor of Economics (B.A. Economics)",
  ];

  return (
    <section className="bg-[#001C54] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
          Scopes of studying Commerce from Best PU College in Bangalore
        </h2>
        <div className="w-24 h-1 bg-[#F8C300] mx-auto mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - List */}
          <div>
            <ul className="space-y-3">
              {degrees.map((degree) => (
                <li key={degree} className="flex items-start gap-3 text-white">
                  <span className="w-2 h-2 bg-[#F8C300] rounded-full mt-2 flex-shrink-0"></span>
                  <span>{degree}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Image Placeholder */}
          <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
            <div className="text-center text-white/60">
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p>
                Students Collaboration
                <br />
                Image Placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Career Opportunities Section
const CareerOpportunitiesSection = () => {
  const careers = [
    "Chartered Accountant",
    "Financial Analyst",
    "Investment Banker",
    "Tax Consultant",
    "Auditor",
    "Business Analyst",
    "Entrepreneur",
    "Marketing Manager",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Career Opportunities for Commerce Students
        </h2>
        <div className="w-24 h-1 bg-[#F8C300] mx-auto mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Placeholder */}
          <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p>
                Group Discussion
                <br />
                Image Placeholder
              </p>
            </div>
          </div>

          {/* Right - Career Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {careers.map((career) => (
              <div
                key={career}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-gray-700 font-medium text-sm">
                  {career}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Facilities Accordion Section
const FacilitiesAccordionSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "facilities",
  );

  const accordionItems = [
    {
      id: "facilities",
      title: "State-of-the-Art Facilities",
      content: (
        <div className="p-4 text-gray-700 space-y-4">
          <p>
            JAIN PU Colleges established in 1990 with campuses in{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              VV Puram
            </Link>{" "}
            and{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              Jayanagar
            </Link>
            , stands out as one of the top PU colleges in Bangalore for
            Pre-University education.
          </p>
          <p>
            Our state-of-the-art facilities include modern computer labs,
            well-stocked libraries, and dedicated study spaces. Students have
            access to the latest accounting software and business simulation
            tools for practical learning.
          </p>
        </div>
      ),
    },
    {
      id: "beyond",
      title: "Beyond the Classroom",
      content: (
        <div className="p-4 text-gray-700 space-y-4">
          <p>
            At JAIN College, education extends beyond textbooks. We organize
            industry visits, guest lectures from business leaders, and
            entrepreneurship workshops.
          </p>
          <p>
            Students participate in business plan competitions, stock market
            simulations, and commerce fests that help them apply theoretical
            knowledge in real-world scenarios.
          </p>
        </div>
      ),
    },
    {
      id: "guidance",
      title: "Guidance and Support",
      content: (
        <div className="p-4 text-gray-700 space-y-4">
          <p>
            Our dedicated counseling team provides academic and career guidance
            to help students make informed decisions about their future in
            commerce and business.
          </p>
          <p>
            We offer specialized coaching for CA Foundation, CS Foundation, and
            other professional courses to give our students a competitive edge
            in their career pursuits.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {accordionItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === item.id ? null : item.id)
                }
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span
                  className={`font-semibold ${openAccordion === item.id ? "text-blue-600" : "text-gray-900"}`}
                >
                  {item.title}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform ${openAccordion === item.id ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openAccordion === item.id && (
                <div className="border-t bg-blue-50">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// JAIN Changemakers Section
const ChangemakersSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aspect-[3/1] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-400">
              — JAIN Changemakers —
            </p>
            <p className="text-gray-500 mt-2">
              Alumni Banner Image Placeholder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Hallmarks Section
const HallmarksSection = () => {
  const hallmarks = [
    { icon: "🏛️", title: "A Legacy of", subtitle: "3 Decades" },
    { icon: "👨‍🏫", title: "Experienced", subtitle: "and Dedicated Faculty" },
    { icon: "📍", title: "Located", subtitle: "in the Heart of Bangalore" },
    { icon: "📚", title: "Academics", subtitle: "and Co-curricular Synergy" },
    { icon: "🎓", title: "Industry", subtitle: "Aligned Curriculum" },
    { icon: "👤", title: "Individual", subtitle: "Attention to Students" },
    {
      icon: "🎯",
      title: "Skill-Building",
      subtitle: "Events for Future Success",
    },
    { icon: "🏆", title: "Professional", subtitle: "Course Integration" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#FFF9E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          The Hallmark of JAIN College
        </h2>
        <div className="w-24 h-1 bg-[#F8C300] mx-auto mb-4"></div>
        <p className="text-center text-gray-600 mb-12">
          One of the Top PU Colleges in Bangalore
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {hallmarks.slice(0, 5).map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 bg-[#001C54] rounded-full flex items-center justify-center mb-2 relative">
                <div className="text-3xl">{item.icon}</div>
                <div className="absolute inset-0 border-4 border-[#F8C300] rounded-full"></div>
              </div>
              <p className="text-center text-sm font-semibold text-gray-900">
                {item.title}
              </p>
              <p className="text-center text-sm text-gray-600">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {hallmarks.slice(5).map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 bg-[#001C54] rounded-full flex items-center justify-center mb-2 relative">
                <div className="text-3xl">{item.icon}</div>
                <div className="absolute inset-0 border-4 border-[#F8C300] rounded-full"></div>
              </div>
              <p className="text-center text-sm font-semibold text-gray-900">
                {item.title}
              </p>
              <p className="text-center text-sm text-gray-600">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Page
export default function PUCCommercePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Breadcrumb />
        <CommerceCollegesSection />
        <BestCommerceSection />
        <IntegratedProgrammesSection />
        <SubjectsAccordionSection />
        <ScopesSection />
        <CareerOpportunitiesSection />
        <FacilitiesAccordionSection />
        <ChangemakersSection />
        <HallmarksSection />
      </main>
      <Footer />
    </>
  );
}
