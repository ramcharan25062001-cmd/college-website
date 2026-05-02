const steps = [
  {
    number: "01",
    title: "Admission to JAIN College Autonomous",
    description:
      "Secure admission to an equivalent Undergraduate or Postgraduate (PG) degree programme at JAIN College through the standard admission process.",
  },
  {
    number: "02",
    title: "Program Enrolment",
    description:
      "Complete enrolment in your chosen academic program and begin your foundational studies at JAIN College.",
  },
  {
    number: "03",
    title: "Register with the Office of International Relations",
    description:
      "Apply for the JAIN Centre for International Studies Program by registering with the Office of International Relations (IR) at the earliest.",
  },
  {
    number: "04",
    title: "Counselling & Partner University Selection",
    description:
      "Receive personalised academic guidance to select the most suitable international partner university based on your academic performance, career aspirationsand financial considerations.",
  },
];

const AdmissionProcedureSection = () => {
  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#F8C300] font-semibold mb-2">How to Apply</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
            Admission Procedure
          </h2>
          <div className="w-24 h-1 bg-[#F8C300] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Follow these structured steps to enrol in the JAIN Centre for
            International Studies Program and begin your journey toward earning
            an international degree.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-50 rounded-2xl p-6 h-full border border-gray-100 hover:border-[#F8C300] hover:shadow-lg transition-all">
                {/* Step Number */}
                <div className="w-12 h-12 bg-[#001C54] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F8C300] transition-colors">
                  <span className="text-[#F8C300] font-bold text-lg group-hover:text-[#001C54] transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-[#001C54] font-bold text-lg mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg
                    className="w-6 h-6 text-[#F8C300]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcedureSection;
