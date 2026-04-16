"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Control background style
      setScrolled(currentScrollY > 20);
      
      // Control visibility (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 sm:pt-6 pointer-events-none"
        >
          {/* Scroll Progress Bar - Subtle at top */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[60] shadow-[0_0_15px_rgba(198,241,53,0.3)]"
            style={{ scaleX }}
          />

          <nav 
            className={`pointer-events-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3 rounded-full border transition-all duration-500 ease-out ${
              scrolled 
                ? "bg-[rgba(20,20,20,0.85)] border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl w-full max-w-[95vw] sm:max-w-[650px] lg:max-w-[700px]" 
                : "bg-[rgba(11,11,11,0.6)] border-transparent w-full max-w-[95vw] sm:max-w-[750px] lg:max-w-[800px] backdrop-blur-md"
            }`}
          >
            <Link
              href="/#hero"
              className="font-heading font-black text-lg sm:text-xl md:text-2xl text-white-custom tracking-tighter hover:text-accent transition-colors"
            >
              LK<span className="text-accent">.</span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-6 md:gap-8">
              <Link href="/#about" className="nav-link hidden sm:block">About</Link>
              <Link href="/#projects" className="nav-link hidden sm:block">Projects</Link>
              <Link href="/#experience" className="nav-link hidden sm:block">Experience</Link>
              <div className="w-px h-4 bg-white/10 hidden sm:block mx-1" />
              <Magnetic intensity={0.2}>
                <Button 
                  href="/klk-resume.pdf" 
                  download
                  className="bg-accent text-[#0b0b0b] font-heading font-bold text-[0.7rem] sm:text-xs uppercase tracking-widest px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:shadow-[0_0_20px_rgba(198,241,53,0.4)] hover:-translate-y-0.5 transition-all whitespace-nowrap"
                >
                  Resume
                </Button>
              </Magnetic>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
