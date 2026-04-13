"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Mega menu data structure
  const megaMenus: Record<string, React.ReactNode> = {
    Programmes: (
      <div className="flex gap-8 p-6">
        {/* UG Programmes */}
        <div className="min-w-48">
          <h3 className="font-bold text-[#001C54] mb-3">
            UG Programmes
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
             <li>
              <Link
                href="/programmes/ug/bcom"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › B.Com 
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/ug/bcom-acca"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › B.Com (ACCA)
              </Link>
            </li>
             <li>
              <Link
                href="/programmes/ug/bcom-bda"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › B.Com (Business Data Analytics)
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/ug/bcom-lscm"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › B.Com (Logistics & Supply Chain Management)
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/ug/bba"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › BBA 
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/ug/bba-aviation"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › BBA (Aviation Management)
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/ug/bba-analytics"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › BBA (Business Analytics)
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/ug/bba-digital-marketing"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › BBA (Digital Marketing)
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/ug/bca"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › BCA 
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/ug/bca-aiml"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › BCA (Artificial Intelligence & Machine Learning)
              </Link>
            </li>
          </ul>
        </div>

        {/* PG Programme */}
        <div className="min-w-48">
          <h3 className="font-bold text-[#001C54] mb-3">PG Programme</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/programmes/pg/mcom-acca"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › M.Com (International Finance with ACCA, UK)
              </Link>
            </li>
          </ul>
          <h3 className="font-bold text-[#001C54] mt-6 mb-3">Browse All</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/programmes/ug"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › All UG Programmes
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/pg"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › All PG Programmes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    ),
    Pathways: (
      <div className="flex gap-8 p-6">
        <div className="min-w-52">
          <h3 className="font-bold text-[#001C54] mb-3">International Pathways</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <Link
                href="/#pathways"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                <span className="bg-[#001C54] text-white text-xs px-2 py-0.5 rounded mr-2">1+2/3</span>
                Study 1 year in India + 2/3 years abroad
              </Link>
            </li>
            <li>
              <Link
                href="/#pathways"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                <span className="bg-[#001C54] text-white text-xs px-2 py-0.5 rounded mr-2">2+1</span>
                Study 2 years in India + 1 year abroad
              </Link>
            </li>
            <li>
              <Link
                href="/#pathways"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                <span className="bg-[#F8C300] text-[#001C54] text-xs px-2 py-0.5 rounded mr-2 font-bold">2+2</span>
                Study 2 years in India + 2 years abroad
              </Link>
            </li>
            <li>
              <Link
                href="/#pathways"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                <span className="bg-[#001C54] text-white text-xs px-2 py-0.5 rounded mr-2">1+1</span>
                1 year PG in India + 1 year PG abroad
              </Link>
            </li>
          </ul>
        </div>

        <div className="min-w-52">
          <h3 className="font-bold text-[#001C54] mb-3">Partner Universities</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span>🇹🇭</span>
              <span>Bangkok University, Thailand</span>
            </li>
            <li className="flex items-center gap-2">
              <span>🇪🇸</span>
              <span>VIC University, Spain</span>
            </li>
            <li className="flex items-center gap-2">
              <span>🇩🇪</span>
              <span>Frankfurt School, Germany</span>
            </li>
            <li className="flex items-center gap-2">
              <span>🇲🇾</span>
              <span>Taylor&apos;s University, Malaysia</span>
            </li>
            <li className="flex items-center gap-2">
              <span>🇦🇺</span>
              <span>Charles Sturt University, Australia</span>
            </li>
            <li className="flex items-center gap-2">
              <span>🇬🇧</span>
              <span>University of York, UK</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  };

  const navItems = [
    { name: "Home", href: "/", icon: "home" },
    { name: "About", href: "/#about" },
    { name: "Programmes", href: "/programmes/ug", hasMegaMenu: true },
    { name: "Pathways", href: "/#pathways", hasMegaMenu: true },
    { name: "Admissions", href: "/admissions" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-[#001C54] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/JAIN_College_International_White.png"
              alt="JAIN College - Centre for International Studies"
              width={240}
              height={64}
              className="h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasMegaMenu && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`font-medium flex items-center gap-1 py-2 text-sm transition-colors ${
                    activeDropdown === item.name
                      ? "text-[#F8C300]"
                      : "text-white hover:text-[#F8C300]"
                  }`}
                >
                  {item.icon === "home" ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  ) : (
                    item.name
                  )}
                  {item.hasMegaMenu && (
                    <svg
                      className={`w-3 h-3 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.hasMegaMenu && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-b-lg border-t-4 border-[#F8C300] min-w-max"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {megaMenus[item.name]}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Apply Now Button */}
          <div className="hidden lg:block">
            <Link
              href="/admissions"
              className="bg-[#F8C300] text-[#001C54] px-5 py-2 rounded-md font-semibold hover:bg-[#dfb82d] transition-colors text-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  href={item.href}
                  className="block text-white font-medium"
                  onClick={() => !item.hasMegaMenu && setIsMenuOpen(false)}
                >
                  {item.icon === "home" ? "Home" : item.name}
                </Link>
                {item.hasMegaMenu && item.name === "Programmes" && (
                  <div className="pl-4 mt-2 space-y-2 text-sm">
                    <p className="text-[#F8C300] font-semibold">UG Programmes</p>
                    <Link
                      href="/programmes/ug/bcom"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › B.Com
                    </Link>
                    <Link
                      href="/programmes/ug/bcom-acca"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › B.Com (ACCA)
                    </Link>
                    <Link
                      href="/programmes/ug/bcom-bda"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › B.Com (Business Data Analytics)
                    </Link>
                    <Link
                      href="/programmes/ug/bcom-lscm"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › B.Com (Logistics & Supply Chain Management)
                    </Link>
                    <Link
                      href="/programmes/ug/bba"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › BBA
                    </Link>
                    <Link
                      href="/programmes/ug/bba-aviation"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › BBA (Aviation Management)
                    </Link>
                    <Link
                      href="/programmes/ug/bba-analytics"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › BBA (Business Analytics)
                    </Link>
                    <Link
                      href="/programmes/ug/bba-digital-marketing"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › BBA (Digital Marketing)
                    </Link>
                    <Link
                      href="/programmes/ug/bca"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › BCA
                    </Link>
                    <Link
                      href="/programmes/ug/bca-aiml"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › BCA (AI & Machine Learning)
                    </Link>
                    <p className="text-[#F8C300] font-semibold mt-3">PG Programme</p>
                    <Link
                      href="/programmes/pg/mcom-acca"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › M.Com (International Finance with ACCA, UK)
                    </Link>
                  </div>
                )}
                {item.hasMegaMenu && item.name === "Pathways" && (
                  <div className="pl-4 mt-2 space-y-2 text-sm">
                    <Link
                      href="/#pathways"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › 1+2/3 Pathway
                    </Link>
                    <Link
                      href="/#pathways"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › 2+1 Pathway
                    </Link>
                    <Link
                      href="/#pathways"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › 2+2 Pathway
                    </Link>
                    <Link
                      href="/#pathways"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › 1+1 PG Pathway
                    </Link>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/admissions"
              className="inline-block mt-4 bg-[#F8C300] text-[#001C54] px-6 py-2.5 rounded-md font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>

      {/* Yellow accent line at bottom */}
      <div className="h-1 bg-[#F8C300]"></div>
    </header>
  );
};

export default Header;
