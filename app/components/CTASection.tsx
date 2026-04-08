import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-16 bg-[#F8C300]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
              Ready to Start Your International Degree Journey?
            </h2>
            <p className="text-[#001C54]/80 text-lg max-w-xl">
              Take the first step towards a globally recognised degree.
              Admissions are open for the academic year 2026-27.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
            <Link
              href="/#admissions"
              className="bg-[#001C54] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#16336e] transition-colors shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#001C54] text-[#001C54] px-8 py-4 rounded-full font-semibold hover:bg-[#001C54] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
