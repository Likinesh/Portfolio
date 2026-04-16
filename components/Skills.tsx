import { skillGroups } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function Skills() {
  return (
    <div id="skills" className="py-16 sm:py-20 lg:py-28">
      <div className="section-container">
        <div className="font-mono text-[0.7rem] sm:text-[0.75rem] text-accent tracking-[0.12em] mb-2 sm:mb-3 flex items-center gap-3">
          <span className="opacity-50">{"//"}</span>
          02 · skills
        </div>
        <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white-custom mb-8 sm:mb-10 lg:mb-12 leading-tight">
          What I <em className="text-accent not-italic">know</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillGroups.map((group) => (
            <Card
              key={group.title}
              className="bg-surface border-border-custom rounded-lg transition-colors duration-200 hover:border-accent h-full shadow-none"
            >
              <CardContent className="pt-5 sm:pt-6 h-full flex flex-col justify-center">
                <div className="font-heading font-semibold text-xs sm:text-sm text-accent tracking-wider flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="text-base">{group.icon}</span>{" "}
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="font-mono text-[0.65rem] sm:text-[0.75rem] text-muted-custom bg-surface-2 border-border-custom rounded-sm px-2 sm:px-3 py-1 sm:py-1.5 h-auto transition-all duration-150 hover:text-accent hover:border-accent hover:bg-accent-dim cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
