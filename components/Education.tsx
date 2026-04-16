"use client";

import { education } from "@/lib/data";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Education() {
  return (
    <div id="education" className="py-10 sm:py-16 relative">
      <div className="section-container">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 relative items-start">

          {/* Sticky Left Column */}
          <motion.div 
            className="lg:col-span-4 lg:sticky lg:top-32 mb-12 lg:mb-0 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-6">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">04 // learning</span>
              <div className="h-px w-12 bg-accent opacity-50" />
            </div>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl tracking-tight text-white-custom leading-tight">
              Where I've <span className="text-accent italic glow-text tracking-tighter pr-2">studied.</span>
            </h2>
          </motion.div>

          {/* Scrollable Right Column - Timeline */}
          <div className="lg:col-span-8 relative">
            <motion.div 
              className="relative flex flex-col ml-2 sm:ml-0 gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >

              {/* Master Continuous Line */}
              <div className="absolute top-12 bottom-0 w-12 sm:w-16 flex justify-center z-0">
                <div className="w-[2px] h-full bg-[rgba(198,241,53,0.1)]" />
              </div>

              {education.map((edu, i) => (
                <motion.div key={i} className="flex group relative z-10" variants={itemVariants}>

                  {/* Visual Timeline Column */}
                  <div className="w-12 sm:w-16 shrink-0 flex flex-col items-center mt-12">
                    <div className="w-[10px] h-[10px] shrink-0 rounded-full bg-accent shadow-[0_0_15px_rgba(198,241,53,0.4)] group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Card Content Column */}
                  <div className="flex-1 pb-4">
                    <div className="glass-card rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:border-accent/20">

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                        <div>
                          <div className="font-mono text-[0.7rem] text-accent tracking-widest mb-3 flex items-center gap-3">
                            <span className="uppercase">{edu.year}</span>
                          </div>
                          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white-custom mb-2 group-hover:text-accent transition-colors">
                            {edu.degree}
                          </h3>
                          <div className="text-sm sm:text-lg text-muted-custom font-light">{edu.school}</div>
                        </div>
                      </div>

                      <div className="mt-6 flex">
                        <div className="bg-[rgba(198,241,53,0.05)] border border-[rgba(198,241,53,0.15)] rounded-full px-5 py-2 flex items-center justify-center shadow-sm">
                          <span className="font-mono text-[0.65rem] font-bold tracking-[0.2em] text-accent uppercase">
                            {edu.score}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
