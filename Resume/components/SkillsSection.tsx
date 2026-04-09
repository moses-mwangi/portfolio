import { Skill } from "@/lib/types";

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillCategory, index) => (
          <div key={index} className="print-break-inside-avoid">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {skillCategory.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-accent text-white text-sm rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
