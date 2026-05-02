const pathways = [
  {
    id: 1,
    label: "Pathway Progression",
    title: "1 + 2 or 3 International Pathway",
    structure: "1 Year at JAIN College → 2–3 Years at a partner university abroad",
    description:
      "Begin with one foundational year at JAIN College, then transfer to a partner university abroad for the remaining two to three years of your degree. This pathway is ideal for students seeking early international exposure.",
    benefits: [
      "Early international exposure",
      "Smooth academic transfer",
      "Cost-effective progression for global education",  
    ],
    popular: false,
  },
  {
    id: 2,
    label: "Pathway Progression",
    title: "2 + 1 International Pathway",
    structure: "2 Years at JAIN College → 1 Year at a partner university abroad",
    description:
      "Complete the majority of your studies at JAIN College for two years, then transfer abroad for the final year to graduate with an internationally recognised degree from the partner university.",
    benefits: [
      "Strong academic foundation in India",
      "Cost-effective international degree",
      "Final year international experience",
    ],
    popular: false,
  },
  {
    id: 3,
    label: "Pathway Progression",
    title: "2 + 2 International Pathway",
    structure: "2 Years at JAIN College → 2 Years at a partner university abroad",
    description:
      "One of the most widely recognised global education models. Students spend two years at JAIN College building a strong academic foundation and complete the final two years at a partner university abroad, earning a Bachelor's degree from the international institution.",
    benefits: [
      "Most recognised global model",
      "Balanced India & international experience",
      "Bachelor's from international institution",
    ],
    popular: true,
  },
  {
    id: 4,
    label: "Master's Pathway Progression - I",
    title: "1 + 1 International Pathway",
    structure:
      "1 Year at JAIN College → 1 Year at a partner university abroad",
    description:
      "A Masters pathway where students complete one year of study at JAIN College before transferring to a partner university abroad for the final year to earn an internationally recognised Master's degree.",
    benefits: [
      "Accelerated Master's pathway",
      "International Masters degree",
      "Multiple country options: UK, USA, Canada, Europe, Australia",
    ],
    popular: false,
  },
  {
    id: 5,
    label: "Master's Pathway Progression - II",
    title: "Bachelor's in India + Master's Abroad",
    structure:
      "Undergraduate at JAIN College → Master's at a partner university abroad",
    description:
      "Students complete their undergraduate degree at JAIN College India and then progress to a Masters program abroad at partner universities in the UK, USA, Canada, Europe, or Australia.",
    benefits: [
      "Complete UG in India",
      "Master's degree from abroad",
      "Multiple country options: UK, USA, Canada, Europe, Australia",
    ],
    popular: false,
  },
];

const PathwaysSection = () => {
  return (
    <section id="pathways" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <p className="text-[#F8C300] font-semibold mb-2">Program Structure</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
            International Pathways
          </h2>
          <div className="w-24 h-1 bg-[#F8C300] mx-auto rounded-full"></div>
        </div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          JAIN College&apos;s Centre for International Studies offers flexible
          academic pathways designed to suit different goals, timelinesand
          financial plans — all leading to internationally recognised degrees
          from partner universities abroad.
        </p>

        {/* Subheading */}
        <h3 className="text-center text-xl font-semibold text-[#001C54] mb-8">
          Choose Your Global Journey
        </h3>

        {/* Pathways Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pathways.map((pathway) => (
            <div
              key={pathway.id}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border ${
                pathway.popular
                  ? "border-[#F8C300] ring-2 ring-[#F8C300]/20"
                  : "border-gray-100"
              }`}
            >
              {pathway.popular && (
                <div className="absolute top-0 right-0 bg-[#F8C300] text-[#001C54] px-4 py-1 rounded-bl-xl text-xs font-bold uppercase">
                  Most Popular
                </div>
              )}

              <div className="p-6 lg:p-8">
                <span className="text-[#F8C300] font-semibold text-sm uppercase tracking-wider">
                  {pathway.label}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-[#001C54] mt-2 mb-3">
                  {pathway.title}
                </h3>

                {/* Structure Pill */}
                <div className="bg-[#001C54] text-white rounded-lg px-4 py-3 mb-4">
                  <p className="text-sm font-medium">{pathway.structure}</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {pathway.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {pathway.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-[#F8C300] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
