import { achievements } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-20 lg:py-28">
      <div className="section-container">
        <div className="font-mono text-[0.7rem] sm:text-[0.75rem] text-accent tracking-[0.12em] mb-2 sm:mb-3 flex items-center gap-3">
          <span className="opacity-50">{"//"}</span>
          06 · achievements
        </div>
        <h2 className="font-heading font-[800] text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white-custom mb-8 sm:mb-10 lg:mb-12 leading-tight">
          Things I&apos;m{" "}
          <em className="text-accent not-italic">proud of</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {achievements.map((a) => (
            <Card
              key={a.title}
              className="bg-surface border-border-custom transition-colors duration-200 hover:border-accent"
            >
              <CardContent className="pt-5 sm:pt-6">
                <div className="text-xl sm:text-2xl mb-2 sm:mb-3">{a.icon}</div>
                <div className="font-heading font-bold text-sm sm:text-base text-white-custom mb-1">
                  {a.title}
                </div>
                <div className="text-xs sm:text-sm text-muted-custom leading-relaxed">
                  {a.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
