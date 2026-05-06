import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import AdmissionsHeroForm from "./AdmissionsHeroForm";

export const metadata: Metadata = {
  title: "Admissions 2026-27",
  description:
    "Apply to JAIN College Centre for International Studies. Admissions open for B.Com Global, BBA Global, BCA Global and M.Com Global programmes at Vasavi Road Campus, Bengaluru.",
  keywords: [
    "JAIN College admissions",
    "apply JAIN College",
    "BBA Global admission",
    "B.Com Global admission",
    "BCA admission Bangalore",
    "degree admission 2026",
  ],
  alternates: { canonical: "/admissions" },
};

const programmes = {
  "Undergraduate (UG)": [
    "B.Com Global",
    "B.Com Global (Business Data Analytics)",
    "B.Com Global (International Finance with ACCA, UK)",
    "B.Com Global (Logistics & Supply Chain Management)",
    "BBA Global",
    "BBA Global (Aviation Management)",
    "BBA Global (Business Analytics)",
    "BBA Global (Digital Marketing)",
    "BCA Global",
    "BCA Global (AI & Machine Learning)",
  ],
  "Masters Programs": ["M.Com Global (International Finance with ACCA, UK)"],
};

const ProgrammesSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
        Our Programs
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Vasavi Road Campus (VV Puram, Bengaluru)
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="relative h-100 bg-gray-100">
            <Image
              src="/images/about-us.jpg"
              alt="Vasavi Road Campus"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <h3 className="text-white text-xl font-bold">Vasavi Road Campus</h3>
              <p className="text-white/80 text-sm">#15, Vasavi Temple Road, V V Puram, Bengaluru – 560004</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {Object.entries(programmes).map(([category, courses]) => (
              <div key={category} className="mb-6 last:mb-0">
                <h4 className="text-lg font-bold text-[#001C54] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F8C300] rounded-full" />
                  {category}
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {courses.map((course) => (
                    <div
                      key={course}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-[#001C54]/5 transition-colors"
                    >
                      <svg className="w-4 h-4 text-[#F8C300] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <Link
                href="/programmes/ug"
                className="inline-block bg-[#001C54] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#16336e] transition-colors text-sm"
              >
                Explore All Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function AdmissionsPage() {
  return (
    <>
      <Header />
      <main>
        <AdmissionsHeroForm />
        <ProgrammesSection />
      </main>
      <Footer />
    </>
  );
}
