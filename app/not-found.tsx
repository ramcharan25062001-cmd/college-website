import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#001C54] via-[#0a2a6b] to-[#16336e] flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F8C300] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#16336e] rounded-full blur-3xl"></div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-4 border-[#F8C300] mx-auto shadow-lg">
            <span className="text-[#001C54] font-bold text-xl">JGI</span>
          </div>
        </div>

        {/* 404 Number */}
        <h1 className="text-8xl sm:text-9xl font-bold text-[#F8C300] mb-4 leading-none">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on your academic journey.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#F8C300] text-[#001C54] px-8 py-3.5 rounded-full font-semibold hover:bg-[#dfb82d] transition-colors shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm mb-4">Quick Links</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/programmes/ug"
              className="text-[#F8C300] hover:text-[#dfb82d] text-sm font-medium transition-colors"
            >
              UG Programmes
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/programmes/pg"
              className="text-[#F8C300] hover:text-[#dfb82d] text-sm font-medium transition-colors"
            >
              Master&apos;s Programmes
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/#admissions"
              className="text-[#F8C300] hover:text-[#dfb82d] text-sm font-medium transition-colors"
            >
              Admissions
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/about"
              className="text-[#F8C300] hover:text-[#dfb82d] text-sm font-medium transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Wave Divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>
      </div>
    </main>
  );
}
