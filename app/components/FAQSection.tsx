"use client";

import { useState, ReactNode } from "react";

interface FAQ {
  question: string;
  answer: ReactNode;
}

const faqs: FAQ[] = [
  {
    question:
      "What are the selection criteria for the JAIN College - Centre for International Studies Program?",
    answer: (
      <div>
        <p className="mb-2">Admission to the Undergraduate (UG) / Postgraduate (PG) Program is purely merit-based and evaluated on the following parameters:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Academic performance in Class XII / &apos;A&apos; Level equivalent (for UG programs)</li>
          <li>Academic performance during the initial years of study at JAIN College</li>
          <li>Student&apos;s academic ambition and motivation</li>
          <li>Communication skills</li>
          <li>Academic credentials, testimonials and overall profile</li>
          <li>Supportive family background for overseas education</li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "Is a separate application required for the JAIN College - Centre for International Studies Program?",
    answer: (
      <p>Yes. A separate application is required and can be obtained from the Office of International Relations (IR) or downloaded from the JAIN College website.</p>
    ),
  },
  {
    question: "Is admission to a Partner University guaranteed?",
    answer: (
      <div>
        <p className="mb-2">While the Office of International Relations will make every effort to facilitate admission to the preferred Partner University, final admission is subject to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Acceptance by the Partner University</li>
          <li>Availability of seats</li>
          <li>Fulfilment of the Partner University&apos;s admission criteria</li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "What are the eligibility requirements for the Undergraduate (UG) Program?",
    answer: (
      <div>
        <p className="mb-2">Students must:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Pass 12th Standard through CBSE / ICSE / &apos;A&apos; Levels / IB / Higher Secondary Certificate (HSC) / Ontario Secondary School Diploma (OSSD) / American High School Diploma (AHSD) or equivalent examination</li>
          <li>Maintain a minimum CGPA of 8 out of 10 during the first two years of study at JAIN College</li>
        </ul>
        <p className="mt-2 text-sm italic">Note: Diploma holders (after 10th) are not eligible for the program</p>
        <p className="mt-1">Mandatory submission of <span className="font-semibold">Statement of Purpose</span> in 250 words</p>
      </div>
    ),
  },
  {
    question:
      "What is the eligibility for the master's (PG) Pathway Program?",
    answer: (
      <p>Applicants must hold a Bachelor&apos;s degree in a relevant discipline from a recognised university with a minimum of 80% marks or equivalent academic performance, subject to partner university requirements.</p>
    ),
  },
  {
    question:
      "What happens if I am unable to secure admission to the selected overseas university?",
    answer: (
      <p>In the unlikely event that a student is unable to secure admission to the chosen overseas university, the student may continue and complete the degree program at JAIN College and be awarded the degree from JAIN College.</p>
    ),
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
                  <div className="text-gray-600 pt-4 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
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
