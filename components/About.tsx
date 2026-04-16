import { personalInfo, skillGroups } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";


export default function About() {
  return (
    <div id="about" className="py-12 sm:py-16 relative">
      <div className="section-container relative z-10">
        <div className="section-label mb-10 sm:mb-12">
          <span className="font-mono text-xs text-accent tracking-widest uppercase">01 // about & skills</span>
          <div className="h-px w-12 bg-accent opacity-50" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto] gap-8 sm:gap-10">

          {/* Main Bio Card (Span 2 cols) */}
          <div className="glass-card rounded-xl p-8 sm:p-10 md:col-span-2 group">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-white-custom group-hover:text-accent transition-colors">
              The Architect
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-muted-custom font-light leading-relaxed">
              <p>
                I am a final-year CS undergrad at <strong className="text-white-custom">MNNIT Allahabad</strong>, specializing in scalable web infrastructure and cross-platform mobile apps.
              </p>
              <p>
                During my recent stint at <strong className="text-white-custom">Publicis Sapient</strong>, I architected Azure-based telemetry services and a real-time flight tracking system managing 100+ concurrent connections. My focus is always on writing clean code that performs effortlessly under load.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex flex-col">
                <span className="font-mono text-[0.65rem] text-accent uppercase tracking-widest mb-1">Location</span>
                <span className="text-sm font-medium">{personalInfo.location}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[0.65rem] text-accent uppercase tracking-widest mb-1">Education</span>
                <span className="text-sm font-medium">{personalInfo.college} (Class of '{personalInfo.grad.split(" ")[1]})</span>
              </div>
            </div>
          </div>

          {/* Core Tech Stack (Span 1 col, 2 rows if possible, or just tall) */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 md:row-span-2 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity" />
            <div>
              <h2 className="font-heading font-bold text-2xl mb-10 text-white-custom">Skills</h2>
              <div className="space-y-6 relative z-10">
                {skillGroups.map(group => (
                  <div key={group.title} className="mb-10">
                    <div className="text-xs font-mono text-muted-2 mb-2 uppercase tracking-widest">{group.title}</div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map(skill => (
                        <Badge key={skill} className="bg-[rgba(255,255,255,0.03)] border-border-custom text-muted-custom font-mono text-[0.7rem] px-3 py-1.5 hover:border-accent hover:text-accent transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Connect Card */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-center items-center text-center group">
            <h2 className="font-heading font-bold text-xl text-white-custom mb-4">Let's Connect</h2>
            <div className="flex gap-4">
              <Button variant="ghost" href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-transparent hover:-translate-y-1 transition-transform border border-transparent text-muted-custom hover:text-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </Button>
              <Button variant="ghost" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-transparent hover:-translate-y-1 transition-transform border border-transparent text-muted-custom hover:text-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </Button>
              <Button variant="ghost" href={`mailto:${personalInfo.email}`} className="p-2 hover:bg-transparent hover:-translate-y-1 transition-transform border border-transparent text-muted-custom hover:text-accent">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </Button>
            </div>
            <div className="font-mono text-xs text-muted-2 mt-4">{personalInfo.email}</div>
          </div>

          {/* CP / Algorithmic Card */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')] opacity-20" />
            <div className="relative z-10 flex flex-wrap items-center justify-between mb-8 gap-3">
              <h2 className="font-heading font-bold text-lg sm:text-xl text-white-custom leading-tight">Data Structures</h2>
              <span className="bg-[#ffa116]/10 text-[#ffa116] text-[0.7rem] font-bold px-2.5 py-1 rounded shrink-0">Knight</span>
            </div>
            <div className="relative z-10 font-mono text-sm gap-3 flex flex-col pb-2">
              <div className="flex justify-between border-b border-[rgba(255,255,255,0.05)] pb-3">
                <span className="text-muted-custom">Platform</span>
                <span className="text-white-custom">LeetCode</span>
              </div>
              <div className="flex justify-between border-b border-[rgba(255,255,255,0.05)] pb-3">
                <span className="text-muted-custom">Max Rating</span>
                <span className="text-accent glow-text font-bold">1863</span>
              </div>
              <div className="flex justify-between mt-4 mb-2">
                <Button variant="link" href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="p-0 h-auto text-accent text-[0.85rem] hover:no-underline font-semibold tracking-wide hover:-translate-y-0.5 transition-transform">
                  View Profile →
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
