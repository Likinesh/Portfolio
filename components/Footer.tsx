"use client";

import { personalInfo } from "@/lib/data";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="pt-16 mt-8 pb-12 sm:pt-20 sm:pb-16 relative flex flex-col justify-end overflow-hidden w-full">

      {/* Background glow for contact section - high performance blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-accent opacity-[0.03] blur-[150px] pointer-events-none rounded-t-full" />

      <div className="section-container relative z-10 w-full mb-2 sm:mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-[rgba(255,255,255,0.1)] pb-12">

          <div className="w-full md:w-auto text-center md:text-left">
            <h2 className="font-heading font-black text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.9] tracking-tighter text-white-custom group">
              Ready to <br className="hidden md:block" />
              <a href={`mailto:${personalInfo.email}`} className="text-accent hover:text-white-custom transition-colors relative link-hover">Collaborate?</a>
            </h2>
          </div>

          <div className="w-full md:w-auto flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-muted-custom font-light leading-relaxed max-w-[350px] mb-8">
              Open to full-time roles starting July 2026. Whether you have a project in mind or just want to say hi, I'm always down to chat.
            </p>
            
            <button
              onClick={copyToClipboard}
              className="group relative flex items-center justify-center gap-3 border border-[rgba(255,255,255,0.1)] rounded-full px-8 py-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white-custom hover:border-accent hover:text-accent transition-all hover:bg-[rgba(198,241,53,0.05)] overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="copied"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Copy className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span>{personalInfo.email}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

        </div>

        {/* Mega Footer Nav */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex gap-6 sm:gap-8">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-custom hover:text-accent transition-colors">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-custom hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.7rem] uppercase tracking-widest text-muted-custom hover:text-accent transition-colors">
              LeetCode
            </a>
          </div>

          <div className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-2">
            © {new Date().getFullYear()} Likith Krishnasai
          </div>

        </div>
      </div>
    </footer>
  );
}
