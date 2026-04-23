"use client";

import Link from "next/link";

const StickyButtons = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-2.5 py-2.5 shadow-2xl border border-white/20">
        <Link
          href="/admissions"
          className="bg-[#F8C300] text-[#001C54] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#dfb82d] hover:scale-105 hover:shadow-[0_0_16px_rgba(248,195,0,0.5)] active:scale-95 transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Apply Now
        </Link>
        <Link
          href="/enquiry"
          className="bg-[#001C54] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#0a2a6b] hover:scale-105 hover:shadow-[0_0_16px_rgba(0,28,84,0.5)] active:scale-95 transition-all duration-200 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Enquiry
        </Link>
      </div>
    </div>
  );
};

export default StickyButtons;
