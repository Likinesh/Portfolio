import { education } from "@/lib/data";

export default function Education() {
  return (
    <div id="education" className="py-10 sm:py-16 relative">
      <div className="section-container">

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 relative items-start">

          {/* Sticky Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 mb-12 lg:mb-0 relative z-10">
            <div className="section-label mb-6">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">04 // learning</span>
              <div className="h-px w-12 bg-accent opacity-50" />
            </div>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl tracking-tight text-white-custom leading-tight">
              Where I've <span className="text-accent italic glow-text tracking-tighter pr-2">studied.</span>
            </h2>
          </div>

          {/* Scrollable Right Column - Timeline */}
          <div className="lg:col-span-8 relative">
            <div className="relative flex flex-col ml-2 sm:ml-0 gap-10">

              {/* Master Continuous Line */}
              <div className="absolute top-12 bottom-0 w-12 sm:w-16 flex justify-center z-0">
                <div className="w-[2px] h-full bg-[rgba(198,241,53,0.3)]" />
              </div>

              {education.map((edu, i) => (
                <div key={i} className="flex group relative z-10">

                  {/* Visual Timeline Column */}
                  <div className="w-12 sm:w-16 shrink-0 flex flex-col items-center mt-12">
                    <div className="w-[10px] h-[10px] shrink-0 rounded-full bg-accent shadow-[0_0_15px_rgba(198,241,53,0.6)]" />
                  </div>

                  {/* Card Content Column */}
                  <div className="flex-1 pb-4">
                    <div className="glass-card rounded-3xl p-8 sm:p-10 transition-all hover:-translate-y-1">

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                        <div>
                          <div className="font-mono text-sm text-accent tracking-widest mb-3 flex items-center gap-3">
                            <span className="uppercase">{edu.year}</span>
                          </div>
                          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white-custom mb-2">
                            {edu.degree}
                          </h3>
                          <div className="text-lg text-muted-custom">{edu.school}</div>
                        </div>
                      </div>

                      <div className="mt-6 flex">
                        <div className="bg-[rgba(198,241,53,0.08)] border border-[rgba(198,241,53,0.2)] rounded-md px-4 py-2 flex items-center justify-center shadow-sm">
                          <span className="font-mono text-[0.75rem] font-medium tracking-widest text-accent uppercase">
                            {edu.score}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
