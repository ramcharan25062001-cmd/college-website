const ProgramsSection = () => {
  const ugPrograms = [
    {
      category: "B.Com Programs",
      color: "bg-[#001C54]",
      programs: [
        "B.Com (Regular)",
        "B.Com (Business Data Analytics – BDA)",
        "B.Com (ACCA)",
        "B.Com (Logistics & Supply Chain Management – LSCM)",
      ],
    },
    {
      category: "BBA Programs",
      color: "bg-[#16336e]",
      programs: [
        "BBA (Regular)",
        "BBA (Aviation Management)",
        "BBA (Business Analytics)",
        "BBA (Digital Marketing)",
      ],
    },
    {
      category: "Computer Applications",
      color: "bg-[#001C54]",
      programs: ["BCA", "BCA (Artificial Intelligence & Machine Learning)"],
    },
  ];

  return (
    <section id="programmes" className="py-20 bg-[#F8C300]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#001C54] font-medium mb-2">Academic Excellence</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
            Our Academic Programs
          </h2>
          <div className="w-24 h-1 bg-[#001C54] mx-auto rounded-full"></div>
          <p className="mt-6 text-[#001C54]/80 max-w-3xl mx-auto">
            The program offers a diverse range of undergraduate and postgraduate
            pathways designed to develop strong business knowledge, analytical
            thinking, and employability skills required to succeed in a global
            workplace.
          </p>
        </div>

        {/* UG Programs Grid */}
        <h3 className="text-2xl font-bold text-[#001C54] mb-6">
          Undergraduate Programs
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ugPrograms.map((group, index) => (
            <div
              key={index}
              className={`${group.color} rounded-2xl p-6 text-white hover:shadow-2xl transition-all hover:-translate-y-1`}
            >
              <h4 className="text-xl font-bold mb-4 text-[#F8C300]">
                {group.category}
              </h4>
              <ul className="space-y-3">
                {group.programs.map((program, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <svg
                      className="w-5 h-5 text-[#F8C300] flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white/90">{program}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* PG Program */}
        <h3 className="text-2xl font-bold text-[#001C54] mb-6">
          Postgraduate Programs
        </h3>
        <div className="max-w-md">
          <div className="bg-[#16336e] rounded-2xl p-6 text-white hover:shadow-2xl transition-all hover:-translate-y-1">
            <h4 className="text-xl font-bold mb-4 text-[#F8C300]">
              M.Com (ACCA) Program
            </h4>
            <div className="flex items-start gap-2 text-sm">
              <svg
                className="w-5 h-5 text-[#F8C300] flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-white/90">M.Com (ACCA)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
