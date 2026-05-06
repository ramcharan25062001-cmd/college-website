import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import EnquiryForm from "./EnquiryForm";

export const metadata: Metadata = {
  title: "Enquire Now",
  description:
    "Submit an enquiry to JAIN College Centre for International Studies. Ask about our B.Com, BBA, BCA and M.Com Global programmes. Our team responds within 24 hours.",
  keywords: [
    "JAIN College enquiry",
    "international studies enquiry",
    "college enquiry Bangalore",
    "BBA BCA B.Com enquiry",
  ],
  alternates: { canonical: "/enquiry" },
};

export default function EnquiryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[350px] lg:min-h-[400px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Hero page_images-01.jpg"
              alt="Enquiry - JAIN College"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001C54]/80 via-[#001C54]/60 to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Enquire <span className="text-[#F8C300]">Now</span>
              </h1>
              <p className="text-white/80 text-lg">
                Have questions about our programmes? Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#001C54] mb-4">
                    Get in <span className="text-[#F8C300]">Touch</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Take the first step towards a world-class education. Our admissions team is ready to help you explore the right program for your career goals.
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    { label: "Call Us", value: "+91 80 4343 2500", iconPath: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" },
                    { label: "Email Us", value: "jccisglobal@gmail.com", iconPath: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" },
                    { label: "Visit Us", value: "Jain College CGS, Basavangudi, Bengaluru", iconPath: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" },
                  ].map(({ label, value, iconPath }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#001C54]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#001C54]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d={iconPath} clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">{label}</p>
                        <p className="text-[#001C54] font-semibold">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#001C54] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-4 text-[#F8C300]">Why Choose JAIN College?</h3>
                  <ul className="space-y-3">
                    {[
                      "70+ Institutions under the JAIN Group",
                      "11+ International Partner Universities",
                      "Global Degree Pathways (1+2, 2+1, 2+2)",
                      "75,000+ Students across all campuses",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#F8C300] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white/90 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100">
                  <h3 className="text-[#001C54] font-bold text-xl lg:text-2xl mb-1">Enquiry Form</h3>
                  <p className="text-gray-500 text-sm mb-6">Admissions Open for 2026-27</p>
                  <EnquiryForm />
                  <p className="text-gray-400 text-xs mt-3 text-center">
                    We&apos;ll get back to you within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
