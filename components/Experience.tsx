"use client";

import { experiences } from "@/lib/data";
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

export default function Experience() {
  return (
    <div id="experience" className="py-10 sm:py-16 relative">
      <div className="section-container">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 relative items-start">

          {/* Sticky Left Column */}
          <motion.div 
            className="lg:col-span-4 lg:sticky lg:top-32 mb-16 lg:mb-0 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-6">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">02 // execution</span>
              <div className="h-px w-12 bg-accent opacity-50" />
            </div>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl tracking-tight text-white-custom leading-tight">
              Where I've <span className="text-accent italic glow-text tracking-tighter pr-2">impacted.</span><br />
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

              {experiences.map((exp, i) => (
                <motion.div key={i} className="flex group relative z-10" variants={itemVariants}>

                  {/* Visual Timeline Column */}
                  <div className="w-12 sm:w-16 shrink-0 flex flex-col items-center mt-12">
                    <div className="w-[10px] h-[10px] shrink-0 rounded-full bg-accent shadow-[0_0_15px_rgba(198,241,53,0.4)] group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Card Content Column */}
                  <div className="flex-1 pb-4">
                    <div className="glass-card rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:border-accent/20">

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-8">
                        <div>
                          <div className="font-mono text-[0.7rem] text-accent tracking-widest mb-3 flex items-center gap-3">
                            <span className="uppercase">{exp.date}</span>
                          </div>
                          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white-custom mb-1 group-hover:text-accent transition-colors">
                            {exp.role} <span className="text-muted-custom font-normal hidden sm:inline">at</span>
                          </h3>
                          <div className="font-heading font-medium text-xl sm:text-2xl text-white-custom">
                            {exp.company}
                          </div>
                        </div>
                        <div className="mt-4 sm:mt-0 font-mono text-[0.65rem] text-muted-2 uppercase tracking-widest">
                          {exp.location}
                        </div>
                      </div>

                      <ul className="space-y-4">
                        {exp.bullets.map((bullet, j) => (
                          <li key={j} className="flex gap-4 items-start text-sm sm:text-base text-muted-custom font-light leading-relaxed">
                            <span className="text-accent mt-1 opacity-50 text-[0.6rem] shrink-0">▹</span>
                            <span dangerouslySetInnerHTML={{ __html: bullet }} className="[&_strong]:text-white-custom [&_strong]:font-medium" />
                          </li>
                        ))}
                      </ul>

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
