"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Share2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeData } from "@/types/resume";

interface ResumePreviewProps {
  resumeData?: ResumeData;
}

const defaultResumeData: ResumeData = {
  personalInfo: {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    website: "https://johndoe.dev",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    summary:
      "Experienced software developer with a passion for creating innovative solutions and leading teams to success.",
  },
  experience: [
    {
      id: "1",
      company: "Tech Company",
      position: "Senior Software Engineer",
      location: "San Francisco, CA",
      startDate: "2022-01",
      endDate: "2024-01",
      current: false,
      description: [
        "Led development of microservices architecture",
        "Improved application performance by 40%",
        "Mentored junior developers",
      ],
    },
  ],
  education: [
    {
      id: "1",
      institution: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      location: "Boston, MA",
      startDate: "2018-09",
      endDate: "2022-05",
      gpa: "3.8",
    },
  ],
  skills: [
    { id: "1", name: "React.js", category: "Frontend", level: 5 },
    { id: "2", name: "Node.js", category: "Backend", level: 4 },
    { id: "3", name: "TypeScript", category: "Language", level: 5 },
  ],
  projects: [],
  certificates: [],
  languages: [],
};

export function ResumePreview({
  resumeData = defaultResumeData,
}: ResumePreviewProps) {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    // PDF download functionality will be implemented
    console.log("Downloading PDF...");
  };

  const handleShare = () => {
    // Share functionality will be implemented
    console.log("Sharing resume...");
  };

  const getSkillLevelWidth = (level: number) => {
    return (level / 5) * 100;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Resume Preview</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button onClick={handleDownloadPDF}>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden">
        <div
          ref={resumeRef}
          className="max-w-4xl mx-auto p-8 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
        >
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b-2 border-blue-500 pb-6 mb-8"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  {resumeData.personalInfo.fullName}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    📧 {resumeData.personalInfo.email}
                  </span>
                  <span className="flex items-center gap-1">
                    📱 {resumeData.personalInfo.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    📍 {resumeData.personalInfo.location}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 mt-2 text-sm">
                  {resumeData.personalInfo.website && (
                    <a
                      href={resumeData.personalInfo.website}
                      className="text-blue-600 hover:underline"
                    >
                      🌐 Website
                    </a>
                  )}
                  {resumeData.personalInfo.linkedin && (
                    <a
                      href={resumeData.personalInfo.linkedin}
                      className="text-blue-600 hover:underline"
                    >
                      💼 LinkedIn
                    </a>
                  )}
                  {resumeData.personalInfo.github && (
                    <a
                      href={resumeData.personalInfo.github}
                      className="text-blue-600 hover:underline"
                    >
                      💻 GitHub
                    </a>
                  )}
                </div>
              </div>
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {resumeData.personalInfo.fullName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            </div>

            {resumeData.personalInfo.summary && (
              <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                {resumeData.personalInfo.summary}
              </p>
            )}
          </motion.div>

          {/* Experience Section */}
          {resumeData.experience.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-blue-500 pl-4">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={exp.id} className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800"></div>
                    <div className="absolute left-2 top-6 w-0.5 h-full bg-slate-300 dark:bg-slate-600"></div>

                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {exp.position}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right text-sm text-slate-600 dark:text-slate-400">
                          <p>
                            {formatDate(exp.startDate)} -{" "}
                            {exp.current ? "Present" : formatDate(exp.endDate)}
                          </p>
                          <p>{exp.location}</p>
                        </div>
                      </div>

                      <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Education Section */}
          {resumeData.education.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-purple-500 pl-4">
                Education
              </h2>
              <div className="space-y-4">
                {resumeData.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {edu.field}
                        </p>
                        {edu.gpa && (
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            GPA: {edu.gpa}
                          </p>
                        )}
                      </div>
                      <div className="text-right text-sm text-slate-600 dark:text-slate-400">
                        <p>
                          {formatDate(edu.startDate)} -{" "}
                          {formatDate(edu.endDate)}
                        </p>
                        <p>{edu.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Skills Section */}
          {resumeData.skills.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-green-500 pl-4">
                Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(
                  resumeData.skills.reduce(
                    (acc, skill) => {
                      if (!acc[skill.category]) acc[skill.category] = [];
                      acc[skill.category].push(skill);
                      return acc;
                    },
                    {} as Record<string, typeof resumeData.skills>,
                  ),
                ).map(([category, skills]) => (
                  <div
                    key={category}
                    className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4"
                  >
                    <h3 className="font-semibold mb-3 text-green-600 dark:text-green-400">
                      {category}
                    </h3>
                    <div className="space-y-3">
                      {skills.map((skill) => (
                        <div key={skill.id}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                            <span className="text-xs text-slate-500">
                              {
                                [
                                  "Beginner",
                                  "Novice",
                                  "Intermediate",
                                  "Advanced",
                                  "Expert",
                                ][skill.level - 1]
                              }
                            </span>
                          </div>
                          <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
                              style={{
                                width: `${getSkillLevelWidth(skill.level)}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Projects Section */}
          {resumeData.projects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-orange-500 pl-4">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4"
                  >
                    <h3 className="font-semibold text-orange-600 dark:text-orange-400">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
                      {project?.highlights?.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="text-center text-sm text-slate-500 dark:text-slate-400">
        <p>
          This is a preview of your resume. Use the download button to generate
          a PDF.
        </p>
      </div>
    </div>
  );
}
