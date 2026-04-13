import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Jain College Global Campus",
  description:
    "Learn about Jain College Global Campus, founded in 1999 by Dr. Chenraj Roychand. Discover our vision, mission, leadership, and world-class facilities.",
};

// About Hero Section
const AboutHero = () => {
  return (
    <section className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-[#001C54]">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#001C54] font-medium">About</span>
        </nav>
      </div>
    </section>
  );
};

// About Content Section
const AboutContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Images */}
          <div className="flex gap-6">
            {/* About Image */}
            <div className="relative w-full">
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#F8C300] rounded-lg -z-10"></div>
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/about-us.jpg"
                  alt="About Jain College Global Campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl font-bold text-[#001C54] mb-2">About Us</h1>
            <div className="w-16 h-1 bg-[#F8C300] mb-6"></div>

            <h2 className="text-2xl font-bold text-[#001C54] mb-4">
              Welcome to Jain College Global Campus!
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 1999 by the visionary educator and philanthropist{" "}
                <span className="font-semibold text-[#001C54]">
                  Dr. Chenraj Roychand
                </span>
                , the JAIN Group has been committed to delivering excellence in
                education. With a passion for shaping future leaders, we
                continue to provide top-quality learning experiences for all.
              </p>

              <p>
                Our school, renowned as one of the{" "}
                <Link
                  href="#"
                  className="text-[#001C54] font-semibold hover:text-[#F8C300] underline"
                >
                  best International Residential Schools in Bangalore
                </Link>
                , focuses on holistic development, ensuring students reach their
                full potential. At Jain College Global Campus, we provide a
                variety of educational programs guided by experienced faculty,
                supporting both academic and personal growth. Our co-curricular
                activities further inspire creativity and curiosity among
                students.
              </p>

              <p>
                We provide ample opportunities for developing leadership skills
                through various student-led activities. Our unique teaching
                techniques prepare students for the future, shaping them into
                well-rounded, detail-oriented, and skilled professionals.
              </p>

              <p className="font-medium text-[#001C54]">
                Experience limitless possibilities at Jain College Global
                Campus—where your path to success is shaped by innovation,
                excellence, and a future-ready education!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Vision & Mission Section
const VisionMission = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16 pb-16 border-b border-gray-200">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 border-2 border-[#001C54] rounded-lg flex items-center justify-center">
              <svg
                className="w-12 h-12 text-[#001C54]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#001C54] mb-2">Vision</h2>
            <div className="w-16 h-1 bg-[#F8C300] mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              At Jain College Global Campus, we believe in the transformative
              power of education and entrepreneurship, which empower individuals
              and communities. We envision a supportive environment that
              nurtures holistic human development. Our goal is to empower
              students to become capable and responsible global citizens, making
              meaningful contributions to society. Through a diverse range of
              educational programmes, we provide the best knowledge, skills, and
              values essential for success in their chosen fields.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 border-2 border-[#001C54] rounded-lg flex items-center justify-center">
              <svg
                className="w-12 h-12 text-[#001C54]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#001C54] mb-2">Mission</h2>
            <div className="w-16 h-1 bg-[#F8C300] mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              Jain College Global Campus actively pursues its mission of
              delivering quality education at all levels, shaping individuals
              into valuable human assets. We aim to fuel economic growth and
              create systemic changes and sustainable improvements by developing
              new-generation social entrepreneurs. Our focus is on creating a
              globally networked community of leaders, technocrats, scientists,
              professionals, sportspersons, and artists. We strive to foster an
              ethical environment founded on human values, where both spirit and
              skills thrive to enrich the quality of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Leadership Section
const LeadershipSection = () => {
  const leaders = [
    {
      name: "Dr. Chenraj Roychand",
      designation: "Founder - Chairman, JAIN Group",
      image: null,
    },
    {
      name: "Principal Name",
      designation: "Principal - Jain College Global Campus",
      image: null,
    },
    {
      name: "Vice Principal Name",
      designation: "Vice Principal - Jain College Global Campus",
      image: null,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#001C54] mb-2">
            People at the Helm
          </h2>
          <div className="w-16 h-1 bg-[#F8C300] mx-auto"></div>
        </div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center group">
              {/* Photo */}
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <div className="text-center text-gray-400">
                  <svg
                    className="w-20 h-20 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-[#001C54]">
                {leader.name}
              </h3>
              <p className="text-gray-600 text-sm">{leader.designation}</p>
            </div>
          ))}
        </div>

        {/* Additional Leaders Row */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-8">
          {[
            {
              name: "Academic Director Name",
              designation: "Academic Director - Jain College Global Campus",
            },
            {
              name: "Dean Name",
              designation: "Dean of Students - Jain College Global Campus",
            },
          ].map((leader, index) => (
            <div key={index} className="text-center group">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <div className="text-center text-gray-400">
                  <svg
                    className="w-20 h-20 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#001C54]">
                {leader.name}
              </h3>
              <p className="text-gray-600 text-sm">{leader.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Facilities Section
const FacilitiesSection = () => {
  const facilities = [
    {
      title: "Technology Enabled Classrooms",
      description:
        "Our classrooms are designed with ample space and equipped with cutting-edge technology, including video cameras for video conferencing and recording, screens with projectors, and laptop ports. We have customised these classrooms to accommodate innovative curricula and interactive teaching methods, ensuring comfort and convenience for every student.",
      imagePosition: "left",
    },
    {
      title: "Computer Labs",
      description:
        "We are committed to empowering today's students with the technology of tomorrow, shaping future-ready innovators and leaders. Our state-of-the-art computer labs feature sleek 15-inch TFT monitors, high-performance PCs, and round-the-clock internet access, Wi-Fi connectivity, and network data storage.",
      imagePosition: "right",
    },
    {
      title: "Seminar Hall",
      description:
        "Experience the perfect venue for a wide range of events at Jain College Global Campus. Our air-conditioned seminar hall is ideal for engaging seminars, student club activities, and performances. This dynamic space fosters learning, innovation, and meaningful connections.",
      imagePosition: "left",
    },
    {
      title: "Auditoriums",
      description:
        "Step into our world-class auditoriums, where modern acoustics and state-of-the-art facilities set the stage for impactful seminars, events, and student activities. Our auditoriums offer an extraordinary cultural and educational experience for students, faculty, and visiting executives.",
      imagePosition: "right",
    },
    {
      title: "Library",
      description:
        "At Jain College Global Campus, we believe knowledge is power, and our libraries are the ultimate source of this power! With a vast collection of print materials and online resources, our libraries unlock your full potential. Our expert staff provides personalised research assistance, helping you navigate the digital landscape with ease.",
      imagePosition: "left",
    },
    {
      title: "Fully Equipped Science Labs",
      description:
        "Prepare for a thrilling scientific journey at Jain College Global Campus! Our state-of-the-art labs are equipped with the latest tools, ensuring an exceptional learning experience. With open and flexible spaces promoting interdisciplinary collaboration, you'll have boundless opportunities to unleash your creativity and explore scientific passions.",
      imagePosition: "right",
    },
    {
      title: "Sports Facilities",
      description:
        "Our campus features world-class sports facilities including Olympic-sized swimming pool, cricket grounds, football fields, basketball and tennis courts, athletics track, and indoor sports complexes. We believe in nurturing both physical and mental excellence.",
      imagePosition: "left",
    },
    {
      title: "Accommodation",
      description:
        "At Jain College Global Campus, we believe your living space should be as comfortable as your learning space. We provide well-furnished, spacious accommodation for both girls and boys. Our hostels offer a unique opportunity to connect with individuals from diverse backgrounds, fostering growth, community, and lifelong friendships.",
      imagePosition: "right",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#001C54] mb-2">Facilities</h2>
          <div className="w-16 h-1 bg-[#F8C300] mx-auto"></div>
        </div>

        {/* Facilities List */}
        <div className="space-y-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                facility.imagePosition === "right"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              } gap-8 items-center pb-12 ${
                index !== facilities.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-2/5">
                <div className="w-full h-64 bg-gradient-to-br from-[#001C54] to-[#16336e] rounded-lg flex items-center justify-center">
                  <div className="text-center text-white/50">
                    <svg
                      className="w-16 h-16 mx-auto mb-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs">{facility.title}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`w-full md:w-3/5 ${facility.imagePosition === "right" ? "text-right" : ""}`}
              >
                <h3 className="text-2xl font-bold text-[#001C54] mb-4">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main About Page
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <AboutContent />
      <VisionMission />
      <LeadershipSection />
      <FacilitiesSection />
      <Footer />
    </main>
  );
}
