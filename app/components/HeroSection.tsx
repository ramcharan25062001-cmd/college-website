"use client";

import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";

const heroSlides = [
  "Start Your Degree in India. Graduate with a Global Degree.",
  "Begin Your International Degree Journey with JAIN",
  "Experience the JAIN College Global Immersion Program",
  "Gain International Exposure with Top Partner Universities",
  "Career-Focused Specialisations for Global Industries",
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    programme: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", programme: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[650px] lg:min-h-[720px] bg-gradient-to-br from-[#001C54] via-[#0a2a6b] to-[#16336e] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-page.jpg"
          alt="Students at JAIN College campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001C54]/50 via-[#0a2a6b]/50 to-[#16336e]/50"></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F8C300] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#16336e] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-[#F8C300] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-[#F8C300]">
                Admissions Open 2026-27
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              JAIN College
              <br />
              <span className="text-[#F8C300]">
                Centre for International Studies
              </span>
            </h1>

            {/* Animated headline slider */}
            <div className="h-16 sm:h-12 overflow-hidden relative">
              {heroSlides.map((slide, index) => (
                <p
                  key={index}
                  className={`absolute inset-0 text-lg sm:text-xl font-light text-white/90 transition-all duration-700 ${
                    currentSlide === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {slide}
                </p>
              ))}
            </div>

            <p className="text-white/70 text-base max-w-xl leading-relaxed">
              Complete the initial part of your degree (1–2 years) in India and
              transfer to a partnered foreign university to graduate with an
              international degree.
            </p>

            {/* Slide indicators */}
            <div className="flex gap-2 pt-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-8 bg-[#F8C300]"
                      : "w-3 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Quick stats row */}
            <div className="hidden lg:flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-[#F8C300]">70+</p>
                <p className="text-white/60 text-sm">Institutions</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <p className="text-3xl font-bold text-[#F8C300]">75,000+</p>
                <p className="text-white/60 text-sm">Students</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <p className="text-3xl font-bold text-[#F8C300]">11+</p>
                <p className="text-white/60 text-sm">Partner Universities</p>
              </div>
            </div>
          </div>

          {/* Right - Enquiry Form */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h3 className="text-[#001C54] font-bold text-xl lg:text-2xl mb-1">
                Enquire Now
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Start your international degree journey
              </p>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-[#001C54] font-bold text-lg mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-500 text-sm">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all"
                    />
                  </div>
                  <select
                    value={formData.programme}
                    onChange={(e) =>
                      setFormData({ ...formData, programme: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all appearance-none bg-white"
                  >
                    <option value="">Select Programme *</option>
                    <optgroup label="B.Com Programs">
                      <option value="bcom-regular">B.Com (Regular)</option>
                      <option value="bcom-acca">B.Com (ACCA)</option>
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
                    <optgroup label="Postgraduate">
                      <option value="mcom-acca">M.Com (ACCA)</option>
                    </optgroup>
                  </select>
                  <textarea
                    placeholder="Your Message (optional)"
                    rows={2}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all resize-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F8C300] text-[#001C54] py-3.5 rounded-lg font-bold hover:bg-[#dfb82d] transition-all hover:shadow-lg text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </button>
                </form>
              )}
              <p className="text-gray-400 text-xs mt-3 text-center">
                We&apos;ll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div> */}
    </section>
  );
};

export default HeroSection;
