"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

// Campus data
const campusData = {
  
  "Vasavi Road": {
    name: "Vasavi Road (UG / PG)",
    address: "#15, Vasavi Temple Road\nV V Puram, Bengaluru – 560004",
    phone: "080 4650 1738",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0094573891656!2d77.5715!3d12.9502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15891e9f0a03%3A0xbc2c5c9c2c5c5c5c!2sV%20V%20Puram%2C%20Bengaluru%2C%20Karnataka%20560004!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin",
    courses: ["B.Com", "BBA", "BCA", "BBA Aviation", "M.Com", "MA Economics"],
  },
};

// Get in Touch Section
const GetInTouchSection = () => {
  const [activeCampus, setActiveCampus] =
    useState<keyof typeof campusData>("Vasavi Road");
  const campus = campusData[activeCampus];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Get in Touch
          </h1>
          <p className="text-gray-600">
            We&apos;re here to guide your admission journey
          </p>
        </div>

        {/* Campus Tabs */}
        <div className="flex flex-wrap gap-4 mb-10">
          {Object.keys(campusData).map((campus) => (
            <button
              key={campus}
              onClick={() => setActiveCampus(campus as keyof typeof campusData)}
              className={`flex-1 min-w-[150px] py-4 px-6 rounded-full font-semibold transition-all text-center ${
                activeCampus === campus
                  ? "bg-[#F8C300] text-[#001C54]"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-[#001C54]"
              }`}
            >
              {campus}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Admission Office Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#001C54]/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#001C54]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Admission Office
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#F8C300] mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-gray-600 text-sm whitespace-pre-line">
                  #44 / 4, District Fund Road{"\n"}
                  Jayanagar 9th Block{"\n"}
                  Bengaluru – 560069
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#001C54]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Admission Enquiry
                </p>
                <a
                  href="tel:+917337879681"
                  className="text-[#001C54] hover:underline flex items-center gap-2 text-sm mb-1"
                >
                  <svg
                    className="w-4 h-4 text-[#001C54]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +91 7337879681
                </a>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#001C54]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:puc.enquiry@jaincollege.ac.in"
                  className="text-[#001C54] hover:underline text-sm"
                >
                  puc.enquiry@jaincollege.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Campus Details with Map */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#001C54]/10 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#001C54]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{campus.name}</h3>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <svg
                className="w-5 h-5 text-[#F8C300] mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-gray-600 text-sm whitespace-pre-line">
                {campus.address}
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-100 rounded-lg h-48 mb-4 overflow-hidden relative">
              <iframe
                src={campus.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of JAIN College ${campus.name}`}
              ></iframe>
            </div>

            <Link
              href={`https://www.google.com/maps/search/JAIN+College+${activeCampus}+Bangalore`}
              target="_blank"
              className="text-red-500 hover:underline text-sm flex items-center gap-2 mb-3"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              View on Google Maps
            </Link>

            <div className="flex items-center gap-2 text-gray-700">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm">{campus.phone}</span>
            </div>
          </div>

          {/* Why Parents Trust */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#F8C300]/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#F8C300]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Why Parents Trust JAIN College
              </h3>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-2 h-2 bg-[#001C54] rounded-full mt-2 flex-shrink-0"></span>
                <span>Safe & monitored campuses</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-2 h-2 bg-[#001C54] rounded-full mt-2 flex-shrink-0"></span>
                <span>Experienced faculty</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-2 h-2 bg-[#001C54] rounded-full mt-2 flex-shrink-0"></span>
                <span>Strong academic outcomes</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-2 h-2 bg-[#001C54] rounded-full mt-2 flex-shrink-0"></span>
                <span>Dedicated admission counsellors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Admissions CTA Section
const AdmissionsCTASection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Admissions Open 2025-26
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/#admissions"
            className="bg-white text-[#001C54] border-2 border-[#001C54] px-8 py-3 rounded-lg font-semibold hover:bg-[#001C54] hover:text-white transition-colors"
          >
            Apply Now
          </Link>
          <button className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Request Call Back
          </button>
        </div>
      </div>
    </section>
  );
};

// Contact Form Section
const ContactFormSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Form */}
          <div>
            <h2 className="text-3xl font-bold text-[#001C54] mb-6">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Have a question? Fill out the form below and we&apos;ll get back
              to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interested In
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a programme
                  </option>
                  <optgroup label="Undergraduate (UG)">
                    <option value="bcom">B.Com (Bachelor of Commerce)</option>
                    <option value="bcom-bda">B.Com (Business Data Analytics)</option>
                    <option value="bcom-acca">B.Com (ACCA)</option>
                    <option value="bcom-lscm">B.Com (Logistics &amp; Supply Chain Management)</option>
                    <option value="bba">BBA (Bachelor of Business Administration)</option>
                    <option value="bba-aviation">BBA (Aviation Management)</option>
                    <option value="bba-analytics">BBA (Business Analytics)</option>
                    <option value="bba-digital-marketing">BBA (Digital Marketing)</option>
                    <option value="bca">BCA (Bachelor of Computer Applications)</option>
                    <option value="bca-aiml">BCA (AI &amp; Machine Learning)</option>
                  </optgroup>
                  <optgroup label="Postgraduate (PG)">
                    <option value="mcom">M.Com (Master of Commerce)</option>
                    <option value="ma-economics">MA Economics</option>
                    <option value="mba">MBA (Master of Business Administration)</option>
                    <option value="mca">MCA (Master of Computer Applications)</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#001C54] text-white py-4 rounded-lg font-semibold hover:bg-[#16336e] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="lg:pl-8">
            <h2 className="text-3xl font-bold text-[#001C54] mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Main Office */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#F8C300]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Main Office
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  # 91 / 2, Dr. A N Krishna Rao Road
                  <br />
                  V V Puram, Bengaluru - 560 004
                  <br />
                  Karnataka, India
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#F8C300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Contact for Admissions
                </h3>
                <div className="space-y-2 text-sm">
                  <a
                    href="tel:+917619158068"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#001C54]"
                  >
                    <svg
                      className="w-4 h-4 text-[#F8C300]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +91 7619158068
                  </a>
                  <a
                    href="tel:+918861630701"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#001C54]"
                  >
                    <svg
                      className="w-4 h-4 text-[#F8C300]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +91 88616 30701
                  </a>
                  <a
                    href="tel:+919606045276"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#001C54]"
                  >
                    <svg
                      className="w-4 h-4 text-[#F8C300]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +91 96060 45276
                  </a>
                  <a
                    href="tel:+919902645173"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#001C54]"
                  >
                    <svg
                      className="w-4 h-4 text-[#F8C300]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +91 99026 45173
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#F8C300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email Us
                </h3>
                <div className="space-y-2 text-sm">
                  <a
                    href="mailto:info@jaincollege.ac.in"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#001C54]"
                  >
                    <svg
                      className="w-4 h-4 text-[#F8C300]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    info@jaincollege.ac.in
                  </a>
                  <a
                    href="mailto:puc.enquiry@jaincollege.ac.in"
                    className="flex items-center gap-2 text-gray-700 hover:text-[#001C54]"
                  >
                    <svg
                      className="w-4 h-4 text-[#F8C300]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    puc.enquiry@jaincollege.ac.in
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#001C54] rounded-full flex items-center justify-center text-white hover:bg-[#16336e] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#001C54] rounded-full flex items-center justify-center text-white hover:bg-[#16336e] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#001C54] rounded-full flex items-center justify-center text-white hover:bg-[#16336e] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#001C54] rounded-full flex items-center justify-center text-white hover:bg-[#16336e] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Contact Page
export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <GetInTouchSection />
        <AdmissionsCTASection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
