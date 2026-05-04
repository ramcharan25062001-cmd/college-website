"use client";

import { useState, FormEvent } from "react";

const EnquirySection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", program: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="py-16 bg-gradient-to-r from-[#001C54] to-[#16336e] relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Ready to Start Your{" "}
              <span className="text-[#F8C300]">Journey?</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-lg">
              Take the first step towards a world-class education. Fill out the
              enquiry form and our admissions team will get in touch with you
              shortly.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F8C300]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#F8C300]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Call Us</p>
                  <p className="text-white font-medium">+91 80 4343 2500</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F8C300]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#F8C300]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email Us</p>
                  <p className="text-white font-medium">jccisglobal@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F8C300]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#F8C300]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Visit Us</p>
                  <p className="text-white font-medium">Jain College CGS, Basavangudi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Enquiry Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h3 className="text-[#001C54] font-bold text-xl lg:text-2xl mb-1">
                Enquire Now
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Admissions Open for 2026-27
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all"
                />
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all appearance-none bg-white"
                >
                  <option value="">Select Program</option>
                  <optgroup label="B.Com Programs">
                    <option value="bcom-regular">B.Com (Regular)</option>
                    <option value="bcom-acca">B.Com (International Finance with ACCA, UK)</option>
                    <option value="bcom-bda">B.Com (Business Data Analytics)</option>
                    <option value="bcom-lscm">B.Com (Logistics &amp; Supply Chain Management)</option>
                  </optgroup>
                  <optgroup label="BBA Programs">
                    <option value="bba-regular">BBA (Regular)</option>
                    <option value="bba-aviation">BBA (Aviation Management)</option>
                    <option value="bba-analytics">BBA (Business Analytics)</option>
                    <option value="bba-digital-marketing">BBA (Digital Marketing)</option>
                  </optgroup>
                  <optgroup label="BCA Programs">
                    <option value="bca">BCA</option>
                    <option value="bca-aiml">BCA (AI &amp; ML)</option>
                  </optgroup>
                  <optgroup label="Masters Programs">
                    <option value="mcom-acca">M.Com (International Finance with ACCA, UK)</option>
                  </optgroup>
                </select>
                <textarea
                  placeholder="Your Message (optional)"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#F8C300] text-[#001C54] py-3.5 rounded-lg font-bold hover:bg-[#dfb82d] transition-all hover:shadow-lg text-sm"
                >
                  Submit Enquiry
                </button>
              </form>
              <p className="text-gray-400 text-xs mt-3 text-center">
                We&apos;ll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
