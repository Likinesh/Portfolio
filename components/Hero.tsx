"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Magnetic from "@/components/ui/Magnetic";


export default function Hero() {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  return (
    <div
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-accent rounded-full blur-[120px] opacity-10 animate-pulse-glow" />
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center w-full pt-24 sm:pt-32">

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] mb-8 sm:mb-12 animate-fade-up delay-1 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="font-mono text-[0.65rem] sm:text-[0.75rem] tracking-wider text-muted-custom uppercase">
            {greeting} — Available July 2026
          </span>
        </div>

        {/* Mega Typography */}
        <h1 className="font-heading font-bold text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-tighter text-white-custom mb-6 animate-fade-up delay-2">
          Likith <br className="md:hidden" />
          <span className="text-accent glow-text italic pr-2">Krishnasai</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-muted-custom max-w-[600px] leading-relaxed mx-auto font-light animate-fade-up delay-3">
          I build <strong className="text-white-custom font-medium">functional, high-performance products</strong> for web and mobile. Currently a CS Undergrad at MNNIT Allahabad, I spend most of my time obsession over clean UI patterns and solving the complex bits that happen behind the scenes.
        </p>

        {/* Interactive CTA */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 sm:mt-14 mb-16 sm:mb-20 animate-fade-up delay-4">
          <Magnetic intensity={0.2}>
            <Button href="#projects" className="group relative overflow-hidden bg-accent text-[#0b0b0b] font-heading font-bold text-sm sm:text-base tracking-wide px-8 py-4 sm:py-5 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(198,241,53,0.4)] hover:-translate-y-1">
              View My Work
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </Magnetic>

          <Magnetic intensity={0.2}>
            <Button variant="outline" href="/klk-resume.pdf" download className="group relative overflow-hidden bg-[rgba(255,255,255,0.02)] text-text font-heading font-medium text-sm sm:text-base tracking-wide px-8 py-4 sm:py-5 rounded-xl border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)] hover:text-white-custom hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-1 backdrop-blur-md">
              Download Resume
              <span className="inline-block ml-2 opacity-50 group-hover:opacity-100 transition-opacity">↓</span>
            </Button>
          </Magnetic>
        </div>

        {/* Floating Stats */}
        <div className="mt-20 sm:mt-28 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[800px] animate-fade-up delay-5">
          {[
            { label: "CGPA MNNIT", val: "8.68" },
            { label: "LeetCode", val: "Rating 1863+" },
            { label: "Products", val: "Shipped 2+" },
            { label: "Experience", val: "3+ Years" }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-2">
              <div className="font-heading font-bold text-xl sm:text-2xl text-accent mb-1">{stat.val}</div>
              <div className="font-mono text-[0.65rem] sm:text-[0.7rem] text-muted-custom tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
