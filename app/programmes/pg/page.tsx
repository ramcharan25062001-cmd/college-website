"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EnquiryPopup from "../../components/EnquiryPopup";
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
                    Advance Your Career at JAIN College
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Industry-Ready Postgraduate Programmes
                  </p>
                  <div className="flex justify-center gap-4 mb-4">
                    <div className="bg-[#16336e] px-3 py-2 rounded">
                      <span className="text-2xl font-bold text-[#F8C300]">
                        5+
                      </span>
                      <p className="text-xs">PG Courses</p>
                    </div>
                    <div className="bg-[#16336e] px-3 py-2 rounded">
                      <span className="text-2xl font-bold text-[#F8C300]">
                        100%
                      </span>
                      <p className="text-xs">Placement Support</p>
                    </div>
                    <div className="bg-[#16336e] px-3 py-2 rounded">
                      <span className="text-2xl font-bold text-[#F8C300]">
                        30+
                      </span>
                      <p className="text-xs">Years Legacy</p>
                    </div>
                  </div>
                  <div className="bg-[#F8C300] text-[#001C54] px-4 py-2 rounded font-semibold text-sm inline-block">
                    Elevate Your Expertise!
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
              Postgraduate Courses at JAIN College
            </h1>
            <Link
              href="/#enquiry"
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
          <span className="text-gray-600">Postgraduate Courses</span>
        </div>
      </div>
    </div>
  );
};

// PG Courses Overview Section
const PGOverviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 uppercase tracking-wide mb-4">
          DISCOVER EXCELLENCE AT JAIN COLLEGE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Postgraduate Programmes
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
              <p>Campus Image Placeholder</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-gray-700 mb-4">
              Welcome to JAIN College&apos;s Postgraduate programmes, designed
              for professionals and graduates seeking to advance their careers
              and deepen their expertise. Part of the prestigious{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                JAIN Group
              </Link>
              , founded by Dr. Chenraj Roychand.
            </p>
            <p className="text-gray-700 mb-4">
              Our postgraduate courses combine advanced academic knowledge with
              practical industry exposure, preparing students for leadership
              roles in their chosen fields. With experienced faculty and modern
              infrastructure, we provide an environment conducive to research
              and professional growth.
            </p>
            <p className="text-gray-700">
              Whether you&apos;re interested in Commerce, Economics, or
              Management, JAIN College offers specialized postgraduate
              programmes to elevate your career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// PG Courses Section
const PGCoursesSection = () => {
  const courses = [
    {
      name: "M.Com (ACCA)",
      slug: "mcom-acca",
      duration: "2 Years",
      description:
        "Advanced commerce education integrated with the globally recognised ACCA qualification for international accounting and finance careers.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Our Postgraduate Courses
        </h2>
        <div className="w-24 h-1 bg-[#F8C300] mx-auto mb-12"></div>

        <div className="max-w-md mx-auto">
          {courses.map((course) => (
            <div
              key={course.slug}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold text-[#001C54] mb-2">
                {course.name}
              </h3>
              <p className="text-[#F8C300] font-semibold text-sm mb-3">
                Duration: {course.duration}
              </p>
              <p className="text-gray-600 text-sm">{course.description}</p>
              <Link
                href={`/programmes/pg/${course.slug}`}
                className="inline-block mt-4 text-[#001C54] font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Eligibility Accordion Section
const EligibilitySection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "eligibility",
  );

  const accordionItems = [
    {
      id: "eligibility",
      title: "Eligibility Criteria",
      content: (
        <div className="p-4">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Completed Bachelor&apos;s degree from a recognized university
            </li>
            <li>Minimum 50% aggregate marks (45% for reserved categories)</li>
            <li>For M.Com: B.Com or equivalent degree preferred</li>
            <li>
              For MA Economics: Any Bachelor&apos;s degree with Economics as a
              subject
            </li>
            <li>Valid degree certificate and mark sheets</li>
          </ul>
        </div>
      ),
    },
    {
      id: "admission",
      title: "Admission Process",
      content: (
        <div className="p-4">
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Fill the online application form</li>
            <li>Submit required documents and degree certificates</li>
            <li>Appear for entrance test/interview</li>
            <li>Merit list announcement</li>
            <li>Pay admission fees and confirm seat</li>
            <li>Document verification and enrollment</li>
          </ol>
        </div>
      ),
    },
    {
      id: "fees",
      title: "Fee Structure",
      content: (
        <p className="text-gray-700 p-4">
          Fee structure varies based on the course selected. Contact our
          admission office at{" "}
          <a href="tel:+917337879681" className="text-blue-600 hover:underline">
            +91 7337879681
          </a>{" "}
          or email us at{" "}
          <a
            href="mailto:puc.enquiry@jaincollege.ac.in"
            className="text-blue-600 hover:underline"
          >
            puc.enquiry@jaincollege.ac.in
          </a>{" "}
          for detailed fee information and scholarship opportunities.
        </p>
      ),
    },
    {
      id: "scholarships",
      title: "Scholarships Available",
      content: (
        <div className="p-4">
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Merit-based scholarships for academic excellence</li>
            <li>Research scholarships for outstanding projects</li>
            <li>Government scholarship schemes</li>
            <li>Corporate sponsorships for working professionals</li>
            <li>Alumni referral benefits</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Admission Information
        </h2>
        <div className="w-24 h-1 bg-[#F8C300] mx-auto mb-12"></div>

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
                <div className="border-t bg-blue-50">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Section
const WhyChooseSection = () => {
  const reasons = [
    "Research-oriented curriculum",
    "Industry expert faculty",
    "Advanced infrastructure",
    "Career advancement support",
    "Networking opportunities",
    "Flexible learning options",
  ];

  return (
    <section className="bg-[#001C54] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
          Why Choose JAIN College for PG?
        </h2>
        <div className="w-24 h-1 bg-[#F8C300] mx-auto mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ul className="space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-white">
                  <span className="w-2 h-2 bg-[#F8C300] rounded-full mt-2 flex-shrink-0"></span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

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
                Research & Learning
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

// CTA Section
const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#FFF9E6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Advance Your Career?
        </h2>
        <p className="text-gray-600 mb-8">
          Join our prestigious postgraduate programmes and take the next step in
          your professional journey.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/#enquiry"
            className="bg-[#001C54] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#16336e] transition-colors"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="bg-[#F8C300] text-[#001C54] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

// Main Page
export default function PGCoursesPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Breadcrumb />
        <PGOverviewSection />
        <PGCoursesSection />
        <EligibilitySection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
      <EnquiryPopup delayMs={8000} />
    </>
  );
}
