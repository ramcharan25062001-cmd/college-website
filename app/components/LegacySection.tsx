import Image from "next/image";

const LegacySection = () => {
  const milestones = [
    {
      year: "1990",
      title: "Foundation",
      image: "/images/legacy-1990.jpg",
      description:
        "JAIN College was founded by Dr. Chenraj Roychand with a vision to create a premier educational institution that nurtures young minds for the challenges of tomorrow.",
    },
    {
      year: "2000",
      title: "Expansion",
      image: "/images/legacy-2000.jpg",
      description:
        "Expanded to multiple campuses across Bangalore, providing quality education to thousands of students.",
    },
    {
      year: "2010",
      title: "Academic Excellence",
      image: "/images/legacy-2010.jpg",
      description:
        "Achieved remarkable success with students consistently scoring top ranks in PUC board examinations.",
    },
    {
      year: "2015",
      title: "Excellence Award",
      image: "/images/legacy-2015.jpg",
      description:
        "Recognized as one of the top PU Colleges in India for holistic education and outstanding academic results.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      image: "/images/legacy-2020.jpg",
      description:
        "Successfully transitioned to hybrid learning model, demonstrating adaptability and commitment to uninterrupted education.",
    },
    {
      year: "2025",
      title: "35 Years of Excellence",
      image: "/images/legacy-2025.jpg",
      description:
        "Celebrating over three decades of shaping future leaders with alumni making an impact across various fields worldwide.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#F8C300] font-semibold mb-2">
            Milestones of Achievement
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
            JAIN College Legacy of Excellence
          </h2>
          <div className="w-24 h-1 bg-[#F8C300] mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#001C54] to-[#16336e]">
                {/* Year Badge */}
                <div className="absolute top-4 left-4 bg-[#F8C300] text-[#001C54] px-4 py-1 rounded-full font-bold text-sm z-10">
                  {milestone.year}
                </div>

                <Image
                  src={milestone.image}
                  alt={`${milestone.year} - ${milestone.title}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#001C54] mb-3">
                  {milestone.year} - {milestone.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
