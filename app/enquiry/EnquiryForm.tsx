"use client";

import { useState, FormEvent } from "react";

export default function EnquiryForm() {
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

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-[#001C54] font-bold text-lg mb-2">Thank You!</h4>
        <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
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
        rows={4}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all resize-none"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
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
  );
}
