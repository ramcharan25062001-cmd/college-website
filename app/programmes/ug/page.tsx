"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Hero page_images-02.jpg"
          alt="Undergraduate Programmes at JAIN College"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001C54]/85 via-[#001C54]/70 to-[#001C54]/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-2xl">
          Undergraduate Courses at JAIN College
        </h1>
        <p className="text-white/80 text-lg mb-8 max-w-xl">
          Industry-ready programmes designed to launch your career with a global edge.
        </p>
        <Link
          href="/#enquiry"
          className="inline-block bg-[#F8C300] text-[#001C54] px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
        >
          ENQUIRE NOW
        </Link>
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
          <span className="text-gray-600">Undergraduate Courses</span>
        </div>
      </div>
    </div>
  );
};

// UG Courses Overview Section
const UGOverviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 uppercase tracking-wide mb-4">
          DISCOVER EXCELLENCE AT JAIN COLLEGE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Undergraduate Programmes
        </h2>
        <div className="w-24 h-1 bg-[#F8C300] mx-auto mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Overview Image */}
          <div className="aspect-[4/3] rounded-lg overflow-hidden border-4 border-[#001C54] relative">
            <Image
              src="/images/about-us.jpg"
              alt="Undergraduate Programmes at JAIN College"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-gray-700 mb-4">
              Welcome to JAIN College&apos;s Undergraduate programmes, designed
              to prepare students for successful careers in various fields. Part
              of the prestigious{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                JAIN Group
              </Link>
              , founded by Dr. Chenraj Roychand.
            </p>
            <p className="text-gray-700 mb-4">
              Our undergraduate courses combine academic excellence with
              practical exposure, ensuring students are industry-ready upon
              graduation. With state-of-the-art facilities and experienced
              faculty, we provide a nurturing environment for holistic
              development.
            </p>
            <p className="text-gray-700">
              Whether you&apos;re interested in Commerce, Business
              Administration, Computer Applications, or Aviation, JAIN College
              offers diverse programmes to match your career aspirations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// UG Courses Section
const UGCoursesSection = () => {
  const courses = [
    {
      name: "B.Com Global (Bachelor of Commerce Global)",
      slug: "bcom",
      duration: "3 Years",
      description:
        "Comprehensive commerce education with specializations in Accounting, Finance, and Taxation.",
    },
    {
      name: "B.Com (Business Data Analytics)",
      slug: "bcom-bda",
      duration: "3 Years",
      description:
        "Commerce education combined with advanced data analytics skills.",
    },
    {
      name: "B.Com (International Finance with ACCA, UK)",
      slug: "bcom-acca",
      duration: "3 Years",
      description:
        "Integrated ACCA qualification with a Bachelor of Commerce degree.",
    },
    {
      name: "B.Com (Logistics & Supply Chain)",
      slug: "bcom-lscm",
      duration: "3 Years",
      description:
        "Commerce with specialised logistics and supply chain management.",
    },
    {
      name: "BBA Global(Bachelor of Business Administration Global)",
      slug: "bba",
      duration: "3 Years",
      description:
        "Develop management and leadership skills for a successful business career.",
    },
    {
      name: "BBA (Aviation Management)",
      slug: "bba-aviation",
      duration: "3 Years",
      description:
        "Specialized programme for careers in airport management and aviation industry.",
    },
    {
      name: "BBA (Business Analytics)",
      slug: "bba-analytics",
      duration: "3 Years",
      description:
        "Business administration with data analytics and decision-making skills.",
    },
    {
      name: "BBA (Digital Marketing)",
      slug: "bba-digital-marketing",
      duration: "3 Years",
      description:
        "Business administration with digital marketing specialisation.",
    },
    {
      name: "BCA (Bachelor of Computer Applications)",
      slug: "bca",
      duration: "3 Years",
      description:
        "Build expertise in software development, programming, and IT solutions.",
    },
    {
      name: "BCA (AI & Machine Learning)",
      slug: "bca-aiml",
      duration: "3 Years",
      description:
        "Computer applications with artificial intelligence and machine learning specialisation.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Our Undergraduate Courses
        </h2>
        <div className="w-24 h-1 bg-[#F8C300] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                href={`/programmes/ug/${course.slug}`}
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
              Passed 10+2 or equivalent examination from a recognized board
            </li>
            <li>Minimum 50% aggregate marks (45% for reserved categories)</li>
            <li>For BCA: Mathematics as a subject in 10+2</li>
            <li>
              For B.Com: Commerce stream preferred but Science/Arts students
              eligible
            </li>
            <li>
              Valid transfer certificate and migration certificate (if
              applicable)
            </li>
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
            <li>Submit required documents</li>
            <li>Appear for entrance test/interview (if applicable)</li>
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
            <li>Merit-based scholarships for top performers</li>
            <li>Sports quota scholarships</li>
            <li>Government scholarship schemes</li>
            <li>Need-based financial assistance</li>
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
    "Industry-aligned curriculum",
    "Experienced faculty from industry",
    "State-of-the-art infrastructure",
    "Strong placement support",
    "Internship opportunities",
    "Holistic development focus",
  ];

  return (
    <section className="bg-[#001C54] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
          Why Choose JAIN College for UG?
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

          <div className="aspect-video rounded-lg overflow-hidden relative">
            <Image
              src="/images/ug-programmes-hero.jpg"
              alt="Campus Life at JAIN College"
              fill
              className="object-cover"
            />
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
          Ready to Start Your Undergraduate Journey?
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of successful alumni who started their careers at JAIN
          College.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/admissions"
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
export default function UGCoursesPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Breadcrumb />
        <UGOverviewSection />
        <UGCoursesSection />
        <EligibilitySection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
