"use client";

import { useState } from "react";

const WhyJainSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reasons = [
    {
      title: "Holistic Development",
      content:
        "At Jain College Global Campus, we nurture every aspect of a student's growth. Our programs extend beyond textbooks, focusing on intellectual, emotional, social, and physical development.",
    },
    {
      title: "World-Class Infrastructure",
      content:
        "Our 100+ acre campus features state-of-the-art facilities including smart classrooms, science labs, sports complexes, auditoriums, and comfortable boarding houses.",
    },
    {
      title: "International Curriculum",
      content:
        "We offer globally recognized curricula including IGCSE, IBDP, and CBSE, preparing students for admission to top universities worldwide.",
    },
    {
      title: "Experienced Faculty",
      content:
        "Our team of 200+ highly qualified educators brings diverse expertise and a passion for teaching, ensuring personalized attention to every student.",
    },
    {
      title: "Co-Curricular Excellence",
      content:
        "From sports to arts, music to drama, robotics to debate - we offer 50+ clubs and activities that help students discover and develop their passions.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
            Why Jain College Global Campus is Among the Best Colleges?
          </h2>
          <div className="w-24 h-1 bg-[#F8C300] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Choosing the right college is crucial for your
            future. Here&apos;s why students across the globe
            choose Jain College Global Campus.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Accordion */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all ${
                  activeIndex === index
                    ? "border-[#F8C300] shadow-lg"
                    : "border-gray-200 hover:border-[#001C54]/30"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? -1 : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span
                    className={`font-semibold text-lg ${
                      activeIndex === index ? "text-[#001C54]" : "text-gray-700"
                    }`}
                  >
                    {reason.title}
                  </span>
                  <span
                    className={`transform transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
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
                {activeIndex === index && (
                  <div className="px-5 pb-5 border-t border-[#F8C300]/30">
                    <p className="text-gray-600 pt-4 leading-relaxed">
                      {reason.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image with Student */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              {/* Placeholder Image */}
              <div className="w-full h-full bg-gradient-to-br from-[#F8C300] to-[#dfb82d] flex items-center justify-center">
                <div className="text-center text-[#001C54]/50">
                  <svg
                    className="w-24 h-24 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm font-medium">
                    Student Image Placeholder
                  </p>
                  <p className="text-xs mt-1">
                    Happy student with welcoming gesture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJainSection;
