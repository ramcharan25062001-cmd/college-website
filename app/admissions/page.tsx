"use client";

import { useState, FormEvent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryPopup from "../components/EnquiryPopup";
import Link from "next/link";
import Image from "next/image";

// Vasavi Road Campus Programmes
const programmes = {
  "Undergraduate (UG)": [
    "B.Com",
    "B.Com (Business Data Analytics)",
    "B.Com (ACCA)",
    "B.Com (Logistics & Supply Chain Management)",
    "BBA",
    "BBA (Aviation Management)",
    "BBA (Business Analytics)",
    "BBA (Digital Marketing)",
    "BCA",
    "BCA (AI & Machine Learning)",
  ],
  "Postgraduate (PG)": ["M.Com (ACCA)"],
};

// Hero Section with Registration Form
const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    board: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login:", loginData);
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    console.log("Register:", registerData);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/campus-building.jpg"
          alt="JAIN College Students"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-white">
            <div className="bg-[#001C54]/80 backdrop-blur-sm rounded-xl p-8 max-w-xl">
              <p className="text-white/90 text-lg mb-4">
                For 35 years, JAIN College has been a{" "}
                <span className="font-bold text-[#F8C300]">
                  HALLMARK OF TRUST
                </span>{" "}
                in education, consistently delivering outstanding academic
                performance.
              </p>
              <h3 className="text-xl font-bold mb-4">
                At JAIN College, you will:
              </h3>
              <ul className="space-y-3 text-white/90 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#F8C300] mt-0.5">→</span>
                  Achieve success in board examinations through a proven,
                  meticulously structured education model.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F8C300] mt-0.5">→</span>
                  Gain valuable career insights by engaging with professionals
                  from diverse fields.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F8C300] mt-0.5">→</span>
                  Strengthen leadership abilities through active participation
                  in a variety of student-driven initiatives.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F8C300] mt-0.5">→</span>
                  Explore numerous extracurricular opportunities that contribute
                  to a dynamic and enriching student life.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F8C300] mt-0.5">→</span>
                  Become part of a distinguished community of scholars,
                  innovators, and leaders, shaping the future with knowledge and
                  vision.
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
              {/* Logo */}
              <div className="text-center pt-8 pb-4 px-6">
                <Image
                  src="/images/JAIN_College_International_LOGO.png"
                  alt="JAIN College"
                  width={200}
                  height={80}
                  className="mx-auto h-24 w-auto"
                />
              </div>

              {/* Title */}
              <div className="text-center px-6 pb-4">
                <h2 className="text-[#001C54] text-lg font-semibold">
                  Degree Admissions – Online Registration Form{" "}
                  <span className="font-bold">2026-27</span>
                </h2>
              </div>

              {/* Tab Switcher */}
              <div className="flex mx-6 mb-6 border border-gray-300 rounded-full overflow-hidden">
                <button
                  onClick={() => setActiveTab("login")}
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    activeTab === "login"
                      ? "bg-[#001C54] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveTab("register")}
                  className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                    activeTab === "register"
                      ? "bg-[#001C54] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Registration
                </button>
              </div>

              {/* Forms */}
              <div className="px-6 pb-8">
                {activeTab === "login" ? (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <input
                      type="email"
                      placeholder="E-MAIL ID"
                      required
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700 uppercase placeholder:normal-case"
                    />
                    <input
                      type="password"
                      placeholder="PASSWORD"
                      required
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({
                          ...loginData,
                          password: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700"
                    />
                    <Link
                      href="#"
                      className="text-[#001C54] text-sm hover:underline block"
                    >
                      Forgot password?
                    </Link>
                    <button
                      type="submit"
                      className="w-full bg-[#001C54] text-white py-3 rounded-lg font-semibold hover:bg-[#16336e] transition-colors"
                    >
                      Login
                    </button>
                    <p className="text-center text-sm text-gray-600">
                      Not a member?{" "}
                      <button
                        type="button"
                        onClick={() => setActiveTab("register")}
                        className="text-[#001C54] font-semibold hover:underline"
                      >
                        Register now
                      </button>
                    </p>
                  </form>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <select
                      required
                      value={registerData.board}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          board: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700 bg-white"
                    >
                      <option value="" disabled>
                        SELECT BOARD
                      </option>
                      <option value="sslc">SSLC</option>
                      <option value="cbse">CBSE</option>
                      <option value="icse">ICSE</option>
                      <option value="nios">NIOS</option>
                      <option value="igcse">IGCSE</option>
                      <option value="myp">MYP</option>
                      <option value="others">Others</option>
                    </select>
                    <input
                      type="text"
                      placeholder="STUDENT NAME"
                      required
                      value={registerData.name}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          name: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700"
                    />
                    <input
                      type="email"
                      placeholder="E-MAIL"
                      required
                      value={registerData.email}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700"
                    />
                    <input
                      type="tel"
                      placeholder="MOBILE NUMBER"
                      required
                      value={registerData.mobile}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          mobile: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700"
                    />
                    <input
                      type="password"
                      placeholder="PASSWORD"
                      required
                      value={registerData.password}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          password: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700"
                    />
                    <input
                      type="password"
                      placeholder="CONFIRM PASSWORD"
                      required
                      value={registerData.confirmPassword}
                      onChange={(e) =>
                        setRegisterData({
                          ...registerData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#001C54] text-white py-3 rounded-lg font-semibold hover:bg-[#16336e] transition-colors"
                    >
                      Register
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Our Programmes Section
const ProgrammesSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
        Our Programmes
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Vasavi Road Campus (VV Puram, Bengaluru)
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Campus Image */}
          <div className="relative h-56 bg-gray-100">
            <Image
              src="/images/campus-building.jpg"
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

          {/* Programmes List */}
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
                Explore All Programmes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Main Admissions Page
export default function AdmissionsPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProgrammesSection />
      </main>
      <Footer />
      <EnquiryPopup />
    </>
  );
}
