"use client";

import { useState } from "react";

const faqs = [
  {
    question:
      "What are the selection criteria for the JAIN College - Centre for International Studies Programme?",
    answer:
      "Admission to the Undergraduate (UG) / Postgraduate (PG) Program is purely merit-based and evaluated on the following parameters: Academic performance in Class XII / equivalent (for UG programs), Academic performance during the initial years of study at JAIN College, Student's academic ambition and motivation, Communication skills, Academic credentials, testimonials, and overall profile, and Supportive family background for overseas education.",
  },
  {
    question:
      "Is a separate application required for the JAIN College - Centre for International Studies Program?",
    answer:
      "Yes. A separate application is required and can be obtained from the Office of International Relations (IR) or downloaded from the JAIN College website.",
  },
  {
    question: "Is admission to the partner university guaranteed?",
    answer:
      "While the Office of International Relations will make every effort to facilitate admission to the preferred partner university, final admission is subject to: Acceptance by the host foreign university, Availability of seats, and Fulfilment of the host university's admission criteria.",
  },
  {
    question:
      "What are the eligibility requirements for the Undergraduate (UG) in this Program?",
    answer:
      "Students must: Pass 12th Standard through CBSE / ICSE / 'A' Levels / IB / Higher Secondary Certificate (HSC) / Ontario Secondary School Diploma (OSSD) / American High School Diploma (AHSD) or equivalent examination, and Maintain a minimum CGPA of 8 out of 10 during the first two years of study at JAIN College. Note: Diploma holders (after 10th) are not eligible for the program. Mandatory submission of Statement of Purpose in 250 words.",
  },
  {
    question:
      "What is the eligibility for the Postgraduate (PG) Pathway Program?",
    answer:
      "Applicants must hold a Bachelor's degree in a relevant discipline from a recognised university with a minimum of 80% marks or equivalent academic performance, subject to partner university requirements.",
  },
  {
    question:
      "What happens if I am unable to secure admission to the selected overseas university?",
    answer:
      "In the unlikely event that a student is unable to secure admission to the chosen overseas university, the student may continue and complete the degree program at JAIN College and be awarded the degree from JAIN College.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#F8C300] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about the Centre for International
            Studies at JAIN College.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden transition-all border ${
                openIndex === index
                  ? "border-[#F8C300] shadow-lg"
                  : "border-gray-200 hover:border-[#001C54]/30"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-start justify-between p-5 text-left gap-4"
              >
                <span
                  className={`font-semibold text-base lg:text-lg ${
                    openIndex === index ? "text-[#001C54]" : "text-gray-700"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 transform transition-transform mt-1 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 border-t border-[#F8C300]/30">
                  <p className="text-gray-600 pt-4 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
