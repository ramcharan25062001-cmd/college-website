"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdmissionsHeroForm() {
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

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      alert("Registration successful!");
      setRegisterData({ board: "", name: "", email: "", mobile: "", password: "", confirmPassword: "" });
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to register");
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/Hero page_images-03.jpg"
          alt="JAIN College Students"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="bg-[#001C54]/80 backdrop-blur-sm rounded-xl p-8 max-w-xl">
              <p className="text-white/90 text-lg mb-4">
                For 35 years, JAIN College has been a{" "}
                <span className="font-bold text-[#F8C300]">HALLMARK OF TRUST</span>{" "}
                in education, consistently delivering outstanding academic performance.
              </p>
              <h3 className="text-xl font-bold mb-4">At JAIN College, you will:</h3>
              <ul className="space-y-3 text-white/90 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#F8C300] mt-0.5">→</span>
                  Achieve success in board examinations through a proven, meticulously structured education model.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F8C300] mt-0.5">→</span>
                  Gain valuable career insights by engaging with professionals from diverse fields.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F8C300] mt-0.5">→</span>
                  Strengthen leadership abilities through active participation in a variety of student-driven initiatives.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F8C300] mt-0.5">→</span>
                  Explore numerous extracurricular opportunities that contribute to a dynamic and enriching student life.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F8C300] mt-0.5">→</span>
                  Become part of a distinguished community of scholars, innovatorsand leaders, shaping the future with knowledge and vision.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
              <div className="text-center pt-8 pb-4 px-6">
                <Image
                  src="/images/JAIN_College_International_LOGO.png"
                  alt="JAIN College"
                  width={200}
                  height={80}
                  className="mx-auto h-24 w-auto"
                />
              </div>

              <div className="text-center px-6 pb-4">
                <h2 className="text-[#001C54] text-lg font-semibold">
                  Degree Admissions – Online Registration Form{" "}
                  <span className="font-bold">2026-27</span>
                </h2>
              </div>

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

              <div className="px-6 pb-8">
                {activeTab === "login" ? (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <input
                      type="email"
                      placeholder="E-MAIL ID"
                      required
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700 uppercase placeholder:normal-case"
                    />
                    <input
                      type="password"
                      placeholder="PASSWORD"
                      required
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700"
                    />
                    <Link href="#" className="text-[#001C54] text-sm hover:underline block">
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
                      onChange={(e) => setRegisterData({ ...registerData, board: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700 bg-white"
                    >
                      <option value="" disabled>SELECT BOARD</option>
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
                      onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700"
                    />
                    <input
                      type="email"
                      placeholder="E-MAIL"
                      required
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700"
                    />
                    <input
                      type="tel"
                      placeholder="MOBILE NUMBER"
                      required
                      value={registerData.mobile}
                      onChange={(e) => setRegisterData({ ...registerData, mobile: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700"
                    />
                    <input
                      type="password"
                      placeholder="PASSWORD"
                      required
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#001C54] focus:ring-2 focus:ring-[#001C54]/20 text-sm text-gray-700"
                    />
                    <input
                      type="password"
                      placeholder="CONFIRM PASSWORD"
                      required
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
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
}
