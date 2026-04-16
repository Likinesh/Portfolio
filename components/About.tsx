"use client";

import { personalInfo, skillGroups, achievements } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { motion, Variants } from "framer-motion";
import { Code2, Cpu, Database, Cloud } from "lucide-react";

const IconMap: { [key: string]: any } = {
  Code2,
  Cpu,
  Database,
  Cloud,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function About() {
  return (
    <div id="about" className="py-12 sm:py-16 relative">
      <motion.div 
        className="section-container relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="section-label mb-10 sm:mb-12" variants={itemVariants}>
          <span className="font-mono text-xs text-accent tracking-widest uppercase">01 // about & skills</span>
          <div className="h-px w-12 bg-accent opacity-50" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto] gap-6 sm:gap-8">

          {/* Main Bio Card (Span 2 cols) */}
          <motion.div 
            className="glass-card rounded-3xl p-8 sm:p-10 md:col-span-2 group"
            variants={itemVariants}
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-white-custom group-hover:text-accent transition-colors">
              The Architect
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-muted-custom font-light leading-relaxed">
              <p>
                I'm currently in my final year of Computer Science at <strong className="text-white-custom">MNNIT Allahabad</strong>. My journey into tech started with curiosity about how things work under the hood, and it has evolved into a passion for building software that's as reliable as it is fast.
              </p>
              <p>
                Recently, I spent my summer at <strong className="text-white-custom">Publicis Sapient</strong>, where I worked on the complex bits of cloud infrastructure—specifically telemetry services and real-time flight tracking systems. Whether it's a mobile app or a web platform, I'm always aiming for that sweet spot where clean code meets a great user experience.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-8 sm:gap-12">
              <div className="flex flex-col">
                <span className="font-mono text-[0.65rem] text-accent uppercase tracking-widest mb-1">Location</span>
                <span className="text-sm font-medium">{personalInfo.location}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[0.65rem] text-accent uppercase tracking-widest mb-1">Education</span>
                <span className="text-sm font-medium">{personalInfo.college} (Class of '{personalInfo.grad.split(" ")[1]})</span>
              </div>
            </div>
          </motion.div>

          {/* Core Tech Stack (Span 1 col, 2 rows) */}
          <motion.div 
            className="glass-card rounded-3xl p-8 sm:p-10 md:row-span-2 flex flex-col justify-between group overflow-hidden relative"
            variants={itemVariants}
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="relative z-10 h-full flex flex-col">
              <h2 className="font-heading font-bold text-2xl mb-8 text-white-custom">Skills</h2>
              <div className="space-y-6 flex-1">
                {skillGroups.map(group => {
                  const Icon = IconMap[group.iconName];
                  return (
                    <div key={group.title}>
                      <div className="flex items-center gap-2 mb-3">
                        {Icon && <Icon className="w-3.5 h-3.5 text-accent opacity-80" />}
                        <div className="text-[0.65rem] font-mono text-muted-2 uppercase tracking-[0.2em]">{group.title}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map(skill => (
                          <Badge key={skill} className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-muted-custom font-mono text-[0.6rem] px-2.5 py-1 hover:border-accent hover:text-accent transition-all duration-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Achievement Highlight Card */}
          <motion.div 
            className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')] opacity-20" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-bold text-xl text-white-custom">Rankings</h2>
                <span className="font-mono text-[0.65rem] text-accent px-2 py-1 bg-accent/10 rounded tracking-widest uppercase">Global</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-white/5 pb-3">
                  <div className="flex flex-col">
                    <span className="text-muted-custom text-xs">LeetCode Max Rating</span>
                    <span className="text-white-custom font-heading font-bold text-lg">1863+</span>
                  </div>
                  <span className="text-accent text-[0.7rem] font-mono mb-1">KNIGHT</span>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-muted-custom text-xs">Biweekly Contest 143</span>
                    <span className="text-white-custom font-heading font-bold text-lg">Rank 946</span>
                  </div>
                  <span className="text-muted-2 text-[0.7rem] font-mono mb-1">WORLDWIDE</span>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-6">
               <Button variant="link" href={personalInfo.leetcode} target="_blank" className="p-0 text-accent font-mono text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                  View LeetCode <span className="group-hover:translate-x-1 transition-transform">→</span>
               </Button>
            </div>
          </motion.div>

          {/* Competition Card */}
          <motion.div 
            className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between group"
            variants={itemVariants}
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
              </div>
              <h2 className="font-heading font-bold text-xl text-white-custom mb-2">IIT BHU Finalist</h2>
              <p className="text-xs text-muted-custom leading-relaxed">
                Reached the final round of Techalytics '25 at IIT BHU. Competed among top analytical minds across the country.
              </p>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0b0b0b] bg-surface-2" />
                ))}
              </div>
              <span className="text-[0.6rem] font-mono text-muted-2 uppercase tracking-widest">Analytics '25</span>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
