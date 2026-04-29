const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-[#001C54] rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-[#F8C300]"
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
            <h2 className="text-2xl font-bold text-[#001C54] mb-2">Vision</h2>
            <div className="w-12 h-1 bg-[#F8C300] mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              To be a globally recognised academic institution that empowers
              students with internationally aligned education, innovative
              learning experiences, and transformative global pathways, preparing
              them to thrive as responsible leaders in an evolving world.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-[#F8C300] rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-[#001C54]"
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
            <h2 className="text-2xl font-bold text-[#001C54] mb-2">Mission</h2>
            <div className="w-12 h-1 bg-[#F8C300] mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              To deliver holistic, high-quality education that integrates
              academic excellence with global exposure, critical design thinking, and
              experiential learning. Through our JAIN Centre for International
              Studies Programme and student-centric approach, we aim to nurture
              adaptable, ethical, and future-ready professionals equipped for
              international success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
