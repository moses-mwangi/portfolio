import { MapPin, Calendar, Award } from "lucide-react";
import { Education } from "@/lib/types";
import { formatDateRange } from "@/lib/utils";

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
        Education
      </h2>
      
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="print-break-inside-avoid">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-lg text-primary font-medium">{edu.institution}</p>
                {edu.gpa && (
                  <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                )}
              </div>
              <div className="flex flex-col sm:items-end text-sm text-gray-600 mt-1 sm:mt-0">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDateRange(edu.startDate, edu.endDate)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
            
            {edu.achievements && edu.achievements.length > 0 && (
              <div className="mt-3">
                <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  Achievements
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {edu.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
