import { MapPin, Calendar } from "lucide-react";
import { Experience } from "@/lib/types";
import { formatDateRange } from "@/lib/utils";

interface ExperienceSectionProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
        Professional Experience
      </h2>
      
      <div className="space-y-6">
        {experience.map((exp) => (
          <div key={exp.id} className="print-break-inside-avoid">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                <p className="text-lg text-primary font-medium">{exp.company}</p>
              </div>
              <div className="flex flex-col sm:items-end text-sm text-gray-600 mt-1 sm:mt-0">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDateRange(exp.startDate, exp.endDate, exp.current)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
              {exp.description.map((desc, index) => (
                <li key={index} className="text-sm leading-relaxed">{desc}</li>
              ))}
            </ul>
            
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-secondary-light text-white text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
