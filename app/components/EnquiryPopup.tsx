"use client";

import { useState, useEffect, FormEvent } from "react";

interface EnquiryPopupProps {
  programName?: string;
  delayMs?: number;
}

const EnquiryPopup = ({ programName, delayMs = 5000 }: EnquiryPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    programme: programName || "",
    message: "",
  });

  useEffect(() => {
    const key = programName
      ? `enquiry_popup_dismissed_${programName}`
      : "enquiry_popup_dismissed";
    const dismissed = sessionStorage.getItem(key);
    if (dismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs, programName]);

  const handleClose = () => {
    setIsOpen(false);
    const key = programName
      ? `enquiry_popup_dismissed_${programName}`
      : "enquiry_popup_dismissed";
    sessionStorage.setItem(key, "true");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
      setSubmitted(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-[slideUp_0.3s_ease-out]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#001C54] to-[#16336e] p-6 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#F8C300] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#001C54]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold">Interested in this Programme?</h3>
              <p className="text-white/80 text-sm">Admissions Open for 2026-27</p>
            </div>
          </div>
          {programName && (
            <p className="text-[#F8C300] text-sm font-medium mt-1">
              {programName}
            </p>
          )}
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900">Thank You!</h4>
              <p className="text-gray-600 mt-2">Our admissions team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all"
              />
              <select
                value={formData.programme}
                onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all"
              >
                <option value="">Select Programme</option>
                <optgroup label="Undergraduate">
                  <option value="B.Com">B.Com</option>
                  <option value="B.Com (BDA)">B.Com (Business Data Analytics)</option>
                  <option value="B.Com (ACCA)">B.Com (ACCA)</option>
                  <option value="B.Com (LSCM)">B.Com (Logistics & Supply Chain)</option>
                  <option value="BBA">BBA</option>
                  <option value="BBA (Aviation)">BBA (Aviation Management)</option>
                  <option value="BBA (Analytics)">BBA (Business Analytics)</option>
                  <option value="BBA (Digital Marketing)">BBA (Digital Marketing)</option>
                  <option value="BCA">BCA</option>
                  <option value="BCA (AI/ML)">BCA (AI & Machine Learning)</option>
                </optgroup>
                <optgroup label="Postgraduate">
                  <option value="M.Com">M.Com</option>
                  <option value="MA Economics">MA Economics</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                </optgroup>
              </select>
              <textarea
                placeholder="Any specific questions? (Optional)"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#F8C300] text-[#001C54] py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors text-sm"
              >
                Submit Enquiry
              </button>
              <p className="text-center text-gray-400 text-xs">
                By submitting, you agree to our privacy policy and terms.
              </p>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default EnquiryPopup;
