import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="pt-16 mt-8 pb-12 sm:pt-20 sm:pb-16 relative flex flex-col justify-end overflow-hidden w-full">

      {/* Background glow for contact section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-accent opacity-[0.03] blur-[150px] pointer-events-none rounded-t-full" />

      <div className="section-container relative z-10 w-full mb-2 sm:mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-[rgba(255,255,255,0.1)] pb-12">

          <div className="w-full md:w-auto text-center md:text-left">
            <h2 className="font-heading font-black text-[clamp(3rem,8vw,6rem)] leading-[1] tracking-tighter text-white-custom group particle-text">
              Let's <a href={`mailto:${personalInfo.email}`} className="text-accent hover:text-white-custom transition-colors relative link-hover">Talk.</a>
            </h2>
          </div>

          <div className="w-full md:w-auto flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-muted-custom font-light leading-relaxed max-w-[350px] mb-6">
              Open to full-time roles starting July 2026. Whether you have a project in mind or just want to say hi, my inbox is open.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block border border-[rgba(255,255,255,0.1)] rounded-full px-6 py-3 font-mono text-xs uppercase tracking-widest text-white-custom hover:border-accent hover:text-accent transition-all hover:bg-[rgba(198,241,53,0.05)]"
            >
               likithkk2004@gmail.com
            </a>
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
