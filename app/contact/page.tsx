import { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import ContactCampusTabs from "./ContactCampusTabs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with JAIN College Centre for International Studies. Visit us at Vasavi Road Campus, Bengaluru, or call +91 9035166090 for admission enquiries.",
  keywords: [
    "JAIN College contact",
    "JAIN College Bangalore address",
    "admission enquiry Bangalore",
    "contact international studies college",
  ],
  alternates: { canonical: "/contact" },
};

const AdmissionsCTASection = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Admissions Open 2025-26
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/admissions"
          className="bg-white text-[#001C54] border-2 border-[#001C54] px-8 py-3 rounded-lg font-semibold hover:bg-[#001C54] hover:text-white transition-colors"
        >
          Apply Now
        </Link>
        <button className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          Request Call Back
        </button>
      </div>
    </div>
  </section>
);

const ContactFormSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-[#001C54] mb-6">Send us a Message</h2>
          <p className="text-gray-600 mb-8">
            Please fill out the form below and our team will get back to you shortly.
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20" placeholder="Enter your first name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20" placeholder="Enter your last name" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20" placeholder="Enter your email" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20" placeholder="Enter your phone number" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Interested In</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 bg-white" defaultValue="">
                <option value="" disabled>Select a program</option>
                <optgroup label="Undergraduate (UG)">
                  <option value="bcom">B.Com Global (Bachelor of Commerce)</option>
                  <option value="bcom-bda">B.Com (Business Data Analytics)</option>
                  <option value="bcom-acca">B.Com (International Finance with ACCA, UK)</option>
                  <option value="bcom-lscm">B.Com (Logistics &amp; Supply Chain Management)</option>
                  <option value="bba">BBA Global (Bachelor of Business Administration)</option>
                  <option value="bba-aviation">BBA (Aviation Management)</option>
                  <option value="bba-analytics">BBA (Business Analytics)</option>
                  <option value="bba-digital-marketing">BBA (Digital Marketing)</option>
                  <option value="bca">BCA (Bachelor of Computer Applications)</option>
                  <option value="bca-aiml">BCA (AI &amp; Machine Learning)</option>
                </optgroup>
                <optgroup label="Masters Programs">
                  <option value="mcom-acca">M.Com (International Finance with ACCA, UK)</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 resize-none" placeholder="Write your message here..." />
            </div>

            <button type="submit" className="w-full bg-[#001C54] text-white py-4 rounded-lg font-semibold hover:bg-[#16336e] transition-colors">
              Send Message
            </button>
          </form>
        </div>

        <div className="lg:pl-8">
          <h2 className="text-3xl font-bold text-[#001C54] mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F8C300]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Main Office
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Jain College CGS, 15, Vasavi Temple St,<br />
                opposite to Axis Bank Vishweshwarapura,<br />
                Basavangudi, Bengaluru, Karnataka 560004
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F8C300]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact for Admissions
              </h3>
              <a href="tel:+919035166090" className="flex items-center gap-2 text-gray-700 hover:text-[#001C54] text-sm">
                <svg className="w-4 h-4 text-[#F8C300]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 9035166090
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F8C300]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </h3>
              <a href="mailto:jccisglobal@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-[#001C54] text-sm">
                <svg className="w-4 h-4 text-[#F8C300]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                jccisglobal@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                ].map((icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-[#001C54] rounded-full flex items-center justify-center text-white hover:bg-[#16336e] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={icon.d} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactCampusTabs />
        <AdmissionsCTASection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
