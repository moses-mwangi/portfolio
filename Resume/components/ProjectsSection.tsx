import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
        Projects
      </h2>
      
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="print-break-inside-avoid">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  {project.name}
                  <div className="flex gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-light transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-light transition-colors"
                        aria-label="View source code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </h3>
              </div>
            </div>
            
            <p className="text-gray-700 mb-3">{project.description}</p>
            
            {project.highlights && project.highlights.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="text-sm">{highlight}</li>
                ))}
              </ul>
            )}
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-secondary-light text-white text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
