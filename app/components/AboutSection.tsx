import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-[#F8C300] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute top-4 left-4 w-full h-full bg-[#F8C300] rounded-2xl -z-10"></div>
              <Image
                src="/images/campus-building.jpg"
                alt="JAIN College campus building"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold text-[#001C54]">
                Sri Bhagawan Mahaveer Jain Educational and Cultural Trust
              </span>
              , Established in 1990, JAIN College is part of the renowned JAIN Group of Institutions,
              founded by visionary educator{" "}
              <span className="font-semibold text-[#001C54]">
                Dr. Chenraj Roychand
              </span>
              . Over the past three decades, the JAIN Group has grown into one
              of India&apos;s most respected educational ecosystems, offering programs
              across schools, pre-university colleges, undergraduate
              institutions, universities, and research centres.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              The JAIN Group operates a large academic network that includes{" "}
              <span className="font-semibold text-[#001C54]">
                70+ educational institutions, 60+ campuses and centres, 75,000+
                students, and 10,000+ faculty and staff
              </span>{" "}
              across India.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Located in{" "}
              <span className="font-semibold text-[#001C54]">
                Bengaluru — the Silicon Valley &amp; Startup capital of India
              </span>
              , JAIN College provides students with access to one of the
              world&apos;s fastest-growing technology, startup, and innovation
              ecosystems, offering valuable industry exposure and global career
              opportunities alongside their academic studies.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                "70+ Educational Institutions",
                "60+ Campuses & Centres",
                "75,000+ Students",
                "10,000+ Faculty & Staff",
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F8C300] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-[#001C54]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-[#001C54] font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centre for International Studies */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
              Centre for International Studies
            </h2>
            <div className="w-24 h-1 bg-[#F8C300] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              The Centre for International Studies at JAIN College enables
              students to begin their academic journey in India and progress to
              partner universities across the world. Through structured
              international pathways, students can seamlessly transfer abroad and
              graduate with{" "}
              <span className="font-semibold text-[#001C54]">
                internationally recognised degrees
              </span>
              .
            </p>

            <p className="text-lg text-gray-600 leading-relaxed text-center">
              With a strong focus on{" "}
              <span className="font-semibold text-[#001C54]">
                global academic partnerships, international mobility, and
                career-focused learning
              </span>
              , the Centre prepares students to succeed in an increasingly
              globalised world. JAIN College also maintains a strong
              international student network across the SAARC region and Africa,
              creating a diverse and globally connected learning environment.
            </p>

            {/* Highlight Box */}
            <div className="bg-[#001C54] rounded-2xl p-8 text-center">
              <h3 className="text-[#F8C300] font-bold text-xl mb-4">
                Program Overview
              </h3>
              <p className="text-white/90 leading-relaxed">
                Students start their academic journey at JAIN College, building
                a strong foundational curriculum before transferring approved
                academic credits to a recognised partner university abroad to
                complete their (UG/PG) degree and gain valuable international
                exposure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
