const universities = [
  { name: "Bangkok University", country: "Thailand", flag: "🇹🇭" },
  { name: "VIC University", country: "Spain", flag: "🇪🇸" },
  { name: "Frankfurt School", country: "Germany", flag: "🇩🇪" },
  { name: "Bordeaux Montaigne University", country: "France", flag: "🇫🇷" },
  { name: "Taylor's University", country: "Malaysia", flag: "🇲🇾" },
  { name: "Charles Sturt University", country: "Australia", flag: "🇦🇺" },
  {
    name: "University of Economics and Finance",
    country: "Vietnam",
    flag: "🇻🇳",
  },
  { name: "University of York", country: "UK", flag: "🇬🇧" },
  { name: "Lincoln University", country: "Malaysia", flag: "🇲🇾" },
  { name: "University of Limoges", country: "France", flag: "🇫🇷" },
  { name: "EM Normandie", country: "France", flag: "🇫🇷" },
];

const PartnerUniversitiesSection = () => {
  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-[#001C54] to-[#16336e] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Partner Universities
          </h2>
          <div className="w-24 h-1 bg-[#F8C300] mx-auto rounded-full"></div>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Graduate with internationally recognised degrees from our esteemed
            partner universities across the globe.
          </p>
          <p className="mt-2 text-white/50 text-sm">(Proposed Universities)</p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 hover:bg-white/20 transition-all hover:-translate-y-1 text-center"
            >
              <div className="text-4xl mb-3">{uni.flag}</div>
              <h3 className="text-white font-semibold text-sm lg:text-base mb-1 leading-tight">
                {uni.name}
              </h3>
              <p className="text-[#F8C300] text-xs font-medium">
                {uni.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversitiesSection;
