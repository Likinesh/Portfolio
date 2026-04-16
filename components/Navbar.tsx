"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#hero", label: "home" },
  { href: "/#about", label: "about" },
  { href: "/#experience", label: "experience" },
  { href: "/#projects", label: "projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 sm:top-8 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4">
      <nav 
        className={`pointer-events-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-500 ease-out ${
          scrolled 
            ? "bg-[rgba(20,20,20,0.85)] border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl w-full max-w-[95vw] sm:max-w-[650px] lg:max-w-[700px]" 
            : "bg-[rgba(11,11,11,0.6)] border-transparent w-full max-w-[95vw] sm:max-w-[750px] lg:max-w-[800px] backdrop-blur-md"
        }`}
      >
        <Link
          href="/#hero"
          className="font-heading font-[900] text-2xl sm:text-3xl tracking-tighter text-white-custom no-underline pl-2 mr-auto"
        >
          LK<span className="text-accent">.</span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2 m-0 p-0 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-mono text-[0.7rem] sm:text-[0.8rem] no-underline tracking-widest capitalize text-muted-custom hover:text-white-custom px-3 sm:px-4 py-1.5 rounded-full hover:bg-[rgba(255,255,255,0.06)] transition-all block"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-1 sm:ml-2">
            <Link 
              href="/#contact"
              className="bg-accent text-[#0b0b0b] hover:bg-accent/90 rounded-full font-heading font-bold text-xs sm:text-sm px-5 py-2 transition-colors flex items-center justify-center whitespace-nowrap"
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
