"use client";

import { useState } from "react";
import Link from "next/link";

const campusData = {
  "Vasavi Road": {
    name: "Vasavi Road (UG / PG)",
    address: "#15, Vasavi Temple Road\nV V Puram, Bengaluru – 560004",
    phone: "9035166090",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0094573891656!2d77.5715!3d12.9502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15891e9f0a03%3A0xbc2c5c9c2c5c5c5c!2sV%20V%20Puram%2C%20Bengaluru%2C%20Karnataka%20560004!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin",
    courses: ["B.Com", "BBA", "BCA", "BBA Aviation", "M.Com", "MA Economics"],
  },
};

export default function ContactCampusTabs() {
  const [activeCampus, setActiveCampus] = useState<keyof typeof campusData>("Vasavi Road");
  const campus = campusData[activeCampus];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Get in Touch</h1>
          <p className="text-gray-600">We&apos;re here to guide your admission journey</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          {Object.keys(campusData).map((c) => (
            <button
              key={c}
              onClick={() => setActiveCampus(c as keyof typeof campusData)}
              className={`flex-1 min-w-[150px] py-4 px-6 rounded-full font-semibold transition-all text-center ${
                activeCampus === c
                  ? "bg-[#F8C300] text-[#001C54]"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-[#001C54]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#001C54]/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#001C54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Admission Office</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#F8C300] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div className="text-gray-600 text-sm whitespace-pre-line">
                  Jain College CGS,{"\n"}15, Vasavi Temple St,{"\n"}opposite to Axis Bank{"\n"}Vishweshwarapura, Basavangudi,{"\n"}Bengaluru, Karnataka 560004{"\n"}
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#001C54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Admission Enquiry
                </p>
                <a href="tel:+917337879681" className="text-[#001C54] hover:underline flex items-center gap-2 text-sm mb-1">
                  <svg className="w-4 h-4 text-[#001C54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9035166090
                </a>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#001C54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:jccisglobal@gmail.com" className="text-[#001C54] hover:underline text-sm">
                  jccisglobal@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#001C54]/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#001C54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{campus.name}</h3>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <svg className="w-5 h-5 text-[#F8C300] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div className="text-gray-600 text-sm whitespace-pre-line">{campus.address}</div>
            </div>

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
              />
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm">{campus.phone}</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#F8C300]/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#F8C300]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Why Parents Trust JAIN College</h3>
            </div>
            <ul className="space-y-3">
              {["Safe & monitored campuses", "Experienced faculty", "Strong academic outcomes", "Dedicated admission counsellors"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-[#001C54] rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
