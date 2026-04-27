"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const heroSlides = [
  {
    image: "/images/Hero page_Slides-01.jpg",
    text: "Start Your Degree in India. Graduate with a Global Degree.",
  },
  {
    image: "/images/Hero page_Slides-02.jpg",
    text: "Begin Your International Degree Journey with JAIN",
  },
  {
    image: "/images/Hero page_Slides-03.jpg",
    text: "Experience the JAIN College Global Immersion Program",
  },
  {
    image: "/images/Hero page_Slides-04.jpg",
    text: "Gain International Exposure with Top Partner Universities",
  },
  {
    image: "/images/Hero page_Slides-05.jpg",
    text: "Career-Focused Specialisations for Global Industries",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[500px] lg:min-h-[720px] flex items-center pt-16 lg:pt-28">
      {/* Sliding background images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.text}
            fill
            className="object-cover object-right"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10 w-full">
        <div className="max-w-4xl text-white space-y-6">
          {/* Animated headline slider */}
          <div className="h-32 sm:h-28 lg:h-40 overflow-hidden relative">
            {heroSlides.map((slide, index) => (
              <h1
                key={index}
                className={`absolute inset-0 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white transition-all duration-700 ${
                  currentSlide === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {slide.text}
              </h1>
            ))}
          </div>

          <p className="text-white/70 text-base lg:text-lg max-w-2xl leading-relaxed">
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
          <div className="flex items-center gap-8 pt-6">
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
      </div>
    </section>
  );
};

export default HeroSection;
