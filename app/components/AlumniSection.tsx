const AlumniSection = () => {
  const alumni = [
    { name: "Student 1", field: "Technology", initials: "AK", color: "from-blue-400 to-blue-600" },
    { name: "Student 2", field: "Sports", initials: "RS", color: "from-green-400 to-green-600" },
    { name: "Student 3", field: "Arts", initials: "PM", color: "from-purple-400 to-purple-600" },
    { name: "Student 4", field: "Business", initials: "VN", color: "from-orange-400 to-orange-600" },
    { name: "Student 5", field: "Medicine", initials: "SK", color: "from-red-400 to-red-600" },
    { name: "Student 6", field: "Research", initials: "DP", color: "from-teal-400 to-teal-600" },
    { name: "Student 7", field: "Entertainment", initials: "RJ", color: "from-pink-400 to-pink-600" },
    { name: "Student 8", field: "Social Work", initials: "NR", color: "from-indigo-400 to-indigo-600" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#001C54] to-[#16336e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            — JAIN Changemakers —
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our alumni are making a global impact across various fields. From
            sports to technology, arts to entrepreneurship - JAIN College graduates are
            leading the change.
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {alumni.map((person, index) => (
            <div key={index} className="relative group">
              {/* Avatar Placeholder */}
              <div className={`w-24 h-32 lg:w-28 lg:h-40 rounded-lg overflow-hidden bg-gradient-to-b ${person.color} flex items-end justify-center transition-transform group-hover:scale-105`}>
                <div className="text-center pb-2">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xl lg:text-2xl">{person.initials}</span>
                  </div>
                  <p className="text-white text-xs font-medium">
                    {person.field}
                  </p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#F8C300] rounded-lg opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                <p className="text-[#001C54] font-bold text-sm text-center px-2">
                  {person.name}
                  <br />
                  <span className="text-xs font-normal">{person.field}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/alumni"
            className="inline-flex items-center gap-2 bg-[#F8C300] text-[#001C54] px-8 py-3 rounded-full font-semibold hover:bg-[#dfb82d] transition-colors"
          >
            Meet Our Alumni
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
