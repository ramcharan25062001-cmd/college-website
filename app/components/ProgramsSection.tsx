import Image from "next/image";

const ProgramsSection = () => {
  const ugPrograms = [
    {
      category: "B.Com Global Programs",
      color: "bg-[#001C54]",
      image: "/images/programs/bcom.jpg",
      programs: [
        "Bachelor of Commerce",
        "B.Com Global (Business Data Analytics – BDA)",
        "B.Com Global (International Finance with ACCA, UK)",
        "B.Com Global (Logistics & Supply Chain Management – LSCM)",
      ],
    },
    {
      category: "BBA Global Programs",
      color: "bg-[#16336e]",
      image: "/images/programs/bba.jpg",
      programs: [
        "Bachelor of Business Administration ",
        "BBA Global (Aviation Management)",
        "BBA Global (Business Analytics)",
        "BBA Global (Digital Marketing)",
      ],
    },
    {
      category: "Science & IT Global Programs",
      color: "bg-[#001C54]",
      image: "/images/programs/bca.jpg",
      programs: ["BCA Global ", "BCA Global (Artificial Intelligence & Machine Learning)"],
    },
  ];

  return (
    <section id="programmes" className="py-20 bg-[#F8C300]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#001C54] text-sm font-medium mb-2">Academic Excellence</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
            Our Academic Programs
          </h2>
          <div className="w-24 h-1 bg-[#001C54] mx-auto rounded-full"></div>
          <p className="mt-6 text-[#001C54]/80 max-w-3xl mx-auto">
            The program offers a diverse range of Undergraduate and Masters
            pathways designed to develop strong business knowledge, analytical
            thinking and employability skills required to succeed in a global
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
              className={`${group.color} rounded-2xl overflow-hidden text-white hover:shadow-2xl transition-all hover:-translate-y-1`}
            >
              <div className="relative h-44">
                <Image
                  src={group.image}
                  alt={group.category}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h4 className="absolute bottom-4 left-6 text-xl font-bold text-[#F8C300]">
                  {group.category}
                </h4>
              </div>
              <div className="p-6">
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
            </div>
          ))}
        </div>

        {/* PG Program */}
        <h3 className="text-2xl font-bold text-[#001C54] mb-6">
          Masters Programs
        </h3>
        <div className="max-w-md">
          <div className="bg-[#16336e] rounded-2xl overflow-hidden text-white hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="relative h-44">
              <Image
                src="/images/programs/bcom-acca.jpg"
                alt="M.Com Global (International Finance with ACCA, UK) Program"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h4 className="absolute bottom-4 left-6 text-xl font-bold text-[#F8C300]">
                M.Com Global Program
              </h4>
            </div>
            <div className="p-6">
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
              <span className="text-white/90">M.Com Global (International Finance with ACCA, UK)</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
