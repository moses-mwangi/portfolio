// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Plus,
//   Trash2,
//   Edit,
//   Save,
//   User,
//   Briefcase,
//   GraduationCap,
//   Code,
//   Award,
//   Languages,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import {
//   ResumeData,
//   PersonalInfo,
//   Experience,
//   Education,
//   Skill,
//   Project,
// } from "@/types/resume";

// const initialData: ResumeData = {
//   personalInfo: {
//     fullName: "",
//     email: "",
//     phone: "",
//     location: "",
//     website: "",
//     linkedin: "",
//     github: "",
//     summary: "",
//   },
//   experience: [],
//   education: [],
//   skills: [],
//   projects: [],
//   certificates: [],
//   languages: [],
// };

// export function ResumeBuilder() {
//   const [resumeData, setResumeData] = useState<ResumeData>(initialData);
//   const [activeSection, setActiveSection] = useState<string>("personal");
//   const [isEditing, setIsEditing] = useState<string | null>(null);

//   const sections = [
//     { id: "personal", name: "Personal Info", icon: User },
//     { id: "experience", name: "Experience", icon: Briefcase },
//     { id: "education", name: "Education", icon: GraduationCap },
//     { id: "skills", name: "Skills", icon: Code },
//     { id: "projects", name: "Projects", icon: Award },
//     { id: "languages", name: "Languages", icon: Languages },
//   ];

//   const updatePersonalInfo = (field: keyof PersonalInfo, value: string) => {
//     setResumeData((prev) => ({
//       ...prev,
//       personalInfo: { ...prev.personalInfo, [field]: value },
//     }));
//   };

//   const addExperience = () => {
//     const newExp: Experience = {
//       id: Date.now().toString(),
//       company: "",
//       position: "",
//       location: "",
//       startDate: "",
//       endDate: "",
//       current: false,
//       description: [""],
//       achievements: [""],
//     };
//     setResumeData((prev) => ({
//       ...prev,
//       experience: [...prev.experience, newExp],
//     }));
//   };

//   // Add Education section
//   const addEducation = () => {
//     const newEdu: Education = {
//       id: Date.now().toString(),
//       institution: "",
//       degree: "",
//       field: "",
//       startDate: "",
//       endDate: "",
//       current: false,
//       gpa: "",
//       location: "",
//     };
//     setResumeData((prev) => ({
//       ...prev,
//       education: [...prev.education, newEdu],
//     }));
//   };

//   // Add Projects section
//   const addProject = () => {
//     const newProject: Project = {
//       id: Date.now().toString(),
//       name: "",
//       description: "",
//       technologies: [],
//       link: "",
//       github: "",
//       startDate: "",
//       endDate: "",
//     };
//     setResumeData((prev) => ({
//       ...prev,
//       projects: [...prev.projects, newProject],
//     }));
//   };

//   const updateExperience = (
//     id: string,
//     field: keyof Experience,
//     value: any,
//   ) => {
//     setResumeData((prev) => ({
//       ...prev,
//       experience: prev.experience.map((exp) =>
//         exp.id === id ? { ...exp, [field]: value } : exp,
//       ),
//     }));
//   };

//   const deleteExperience = (id: string) => {
//     setResumeData((prev) => ({
//       ...prev,
//       experience: prev.experience.filter((exp) => exp.id !== id),
//     }));
//   };

//   const addSkill = () => {
//     const newSkill: Skill = {
//       id: Date.now().toString(),
//       name: "",
//       category: "Technical",
//       level: 3,
//     };
//     setResumeData((prev) => ({
//       ...prev,
//       skills: [...prev.skills, newSkill],
//     }));
//   };

//   const updateSkill = (id: string, field: keyof Skill, value: any) => {
//     setResumeData((prev) => ({
//       ...prev,
//       skills: prev.skills.map((skill) =>
//         skill.id === id ? { ...skill, [field]: value } : skill,
//       ),
//     }));
//   };

//   const deleteSkill = (id: string) => {
//     setResumeData((prev) => ({
//       ...prev,
//       skills: prev.skills.filter((skill) => skill.id !== id),
//     }));
//   };

//   const renderPersonalInfo = () => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="space-y-6"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <Label htmlFor="fullName">Full Name</Label>
//           <Input
//             id="fullName"
//             value={resumeData.personalInfo.fullName}
//             onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
//             placeholder="John Doe"
//             className="mt-1"
//           />
//         </div>
//         <div>
//           <Label htmlFor="email">Email</Label>
//           <Input
//             id="email"
//             type="email"
//             value={resumeData.personalInfo.email}
//             onChange={(e) => updatePersonalInfo("email", e.target.value)}
//             placeholder="john@example.com"
//             className="mt-1"
//           />
//         </div>
//         <div>
//           <Label htmlFor="phone">Phone</Label>
//           <Input
//             id="phone"
//             value={resumeData.personalInfo.phone}
//             onChange={(e) => updatePersonalInfo("phone", e.target.value)}
//             placeholder="+1 (555) 123-4567"
//             className="mt-1"
//           />
//         </div>
//         <div>
//           <Label htmlFor="location">Location</Label>
//           <Input
//             id="location"
//             value={resumeData.personalInfo.location}
//             onChange={(e) => updatePersonalInfo("location", e.target.value)}
//             placeholder="New York, NY"
//             className="mt-1"
//           />
//         </div>
//         <div>
//           <Label htmlFor="website">Website</Label>
//           <Input
//             id="website"
//             value={resumeData.personalInfo.website}
//             onChange={(e) => updatePersonalInfo("website", e.target.value)}
//             placeholder="https://yourwebsite.com"
//             className="mt-1"
//           />
//         </div>
//         <div>
//           <Label htmlFor="linkedin">LinkedIn</Label>
//           <Input
//             id="linkedin"
//             value={resumeData.personalInfo.linkedin}
//             onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
//             placeholder="https://linkedin.com/in/yourprofile"
//             className="mt-1"
//           />
//         </div>
//       </div>
//       <div>
//         <Label htmlFor="summary">Professional Summary</Label>
//         <Textarea
//           id="summary"
//           value={resumeData.personalInfo.summary}
//           onChange={(e) => updatePersonalInfo("summary", e.target.value)}
//           placeholder="A brief summary of your professional background and key achievements..."
//           className="mt-1 min-h-[120px]"
//         />
//       </div>
//     </motion.div>
//   );

//   const renderExperience = () => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="space-y-6"
//     >
//       <div className="flex justify-between items-center">
//         <h3 className="text-lg font-semibold">Work Experience</h3>
//         <Button onClick={addExperience} className="flex items-center gap-2">
//           <Plus className="w-4 h-4" />
//           Add Experience
//         </Button>
//       </div>

//       <AnimatePresence>
//         {resumeData.experience.map((exp, index) => (
//           <motion.div
//             key={exp.id}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 20 }}
//             className="border rounded-lg p-4 space-y-4 bg-card"
//           >
//             <div className="flex justify-between items-start">
//               <h4 className="font-medium">Experience {index + 1}</h4>
//               <Button
//                 variant="destructive"
//                 size="sm"
//                 onClick={() => deleteExperience(exp.id)}
//               >
//                 <Trash2 className="w-4 h-4" />
//               </Button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <Label>Company</Label>
//                 <Input
//                   value={exp.company}
//                   onChange={(e) =>
//                     updateExperience(exp.id, "company", e.target.value)
//                   }
//                   placeholder="Company Name"
//                   className="mt-1"
//                 />
//               </div>
//               <div>
//                 <Label>Position</Label>
//                 <Input
//                   value={exp.position}
//                   onChange={(e) =>
//                     updateExperience(exp.id, "position", e.target.value)
//                   }
//                   placeholder="Job Title"
//                   className="mt-1"
//                 />
//               </div>
//               <div>
//                 <Label>Location</Label>
//                 <Input
//                   value={exp.location}
//                   onChange={(e) =>
//                     updateExperience(exp.id, "location", e.target.value)
//                   }
//                   placeholder="City, State"
//                   className="mt-1"
//                 />
//               </div>
//               <div>
//                 <Label>Start Date</Label>
//                 <Input
//                   type="month"
//                   value={exp.startDate}
//                   onChange={(e) =>
//                     updateExperience(exp.id, "startDate", e.target.value)
//                   }
//                   className="mt-1"
//                 />
//               </div>
//               <div>
//                 <Label>End Date</Label>
//                 <Input
//                   type="month"
//                   value={exp.endDate}
//                   onChange={(e) =>
//                     updateExperience(exp.id, "endDate", e.target.value)
//                   }
//                   disabled={exp.current}
//                   className="mt-1"
//                 />
//               </div>
//               <div className="flex items-center space-x-2 mt-6">
//                 <input
//                   type="checkbox"
//                   id={`current-${exp.id}`}
//                   checked={exp.current}
//                   onChange={(e) =>
//                     updateExperience(exp.id, "current", e.target.checked)
//                   }
//                   className="rounded"
//                 />
//                 <Label htmlFor={`current-${exp.id}`}>
//                   Currently working here
//                 </Label>
//               </div>
//             </div>

//             <div>
//               <Label>Description</Label>
//               <Textarea
//                 value={exp.description.join("\n")}
//                 onChange={(e) =>
//                   updateExperience(
//                     exp.id,
//                     "description",
//                     e.target.value.split("\n"),
//                   )
//                 }
//                 placeholder="Describe your responsibilities and achievements..."
//                 className="mt-1 min-h-[100px]"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </motion.div>
//   );

//   const renderSkills = () => (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="space-y-6"
//     >
//       <div className="flex justify-between items-center">
//         <h3 className="text-lg font-semibold">Skills</h3>
//         <Button onClick={addSkill} className="flex items-center gap-2">
//           <Plus className="w-4 h-4" />
//           Add Skill
//         </Button>
//       </div>

//       <AnimatePresence>
//         {resumeData.skills.map((skill, index) => (
//           <motion.div
//             key={skill.id}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 20 }}
//             className="flex items-center gap-4 p-4 border rounded-lg bg-card"
//           >
//             <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <Label>Skill Name</Label>
//                 <Input
//                   value={skill.name}
//                   onChange={(e) =>
//                     updateSkill(skill.id, "name", e.target.value)
//                   }
//                   placeholder="React.js"
//                   className="mt-1"
//                 />
//               </div>
//               <div>
//                 <Label>Category</Label>
//                 <Input
//                   value={skill.category}
//                   onChange={(e) =>
//                     updateSkill(skill.id, "category", e.target.value)
//                   }
//                   placeholder="Technical"
//                   className="mt-1"
//                 />
//               </div>
//               <div>
//                 <Label>Proficiency (1-5)</Label>
//                 <select
//                   value={skill.level}
//                   onChange={(e) =>
//                     updateSkill(skill.id, "level", parseInt(e.target.value))
//                   }
//                   className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
//                 >
//                   <option value={1}>Beginner</option>
//                   <option value={2}>Novice</option>
//                   <option value={3}>Intermediate</option>
//                   <option value={4}>Advanced</option>
//                   <option value={5}>Expert</option>
//                 </select>
//               </div>
//             </div>
//             <Button
//               variant="destructive"
//               size="sm"
//               onClick={() => deleteSkill(skill.id)}
//             >
//               <Trash2 className="w-4 h-4" />
//             </Button>
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </motion.div>
//   );

//   const renderSection = () => {
//     switch (activeSection) {
//       case "personal":
//         return renderPersonalInfo();
//       case "experience":
//         return renderExperience();
//       case "skills":
//         return renderSkills();
//       default:
//         return (
//           <div className="text-center py-8 text-muted-foreground">
//             Section coming soon...
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//       <div className="lg:col-span-1">
//         <div className="sticky top-8 space-y-2">
//           <h2 className="text-lg font-semibold mb-4">Resume Sections</h2>
//           {sections.map((section) => {
//             const Icon = section.icon;
//             return (
//               <Button
//                 key={section.id}
//                 variant={activeSection === section.id ? "default" : "ghost"}
//                 className="w-full justify-start"
//                 onClick={() => setActiveSection(section.id)}
//               >
//                 <Icon className="w-4 h-4 mr-2" />
//                 {section.name}
//               </Button>
//             );
//           })}
//         </div>
//       </div>

//       <div className="lg:col-span-3">
//         <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
//           {renderSection()}
//         </div>
//       </div>
//     </div>
//   );
// }

// components/ResumeBuilder.tsx
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Trash2,
  Save,
  Download,
  Upload,
  Undo,
  Redo,
  Eye,
  Edit,
  User,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Languages,
  FileText,
  Sparkles,
  AlertCircle,
  CheckCircle,
  Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  PersonalInfo,
  Experience,
  Education,
  Skill,
  Project,
  Certificate,
  Language,
  ResumeData,
} from "@/types/resume";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const initialData: ResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    github: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certificates: [],
  languages: [],
};

// Templates
const templates = {
  modern: {
    name: "Modern",
    primaryColor: "#3b82f6",
    secondaryColor: "#1e293b",
    font: "Inter",
    spacing: "comfortable",
  },
  classic: {
    name: "Classic",
    primaryColor: "#1e293b",
    secondaryColor: "#475569",
    font: "Georgia",
    spacing: "compact",
  },
  creative: {
    name: "Creative",
    primaryColor: "#8b5cf6",
    secondaryColor: "#ec4899",
    font: "Poppins",
    spacing: "relaxed",
  },
};

// Preview Component
const ResumePreview = ({
  data,
  template,
}: {
  data: ResumeData;
  template: keyof typeof templates;
}) => {
  const style = templates[template];

  return (
    <div
      className="bg-white rounded-lg shadow-xl overflow-hidden"
      style={{ fontFamily: style.font }}
    >
      <div className="p-8">
        {/* Header */}
        <div
          className="text-center border-b-2 pb-6 mb-6"
          style={{ borderColor: style.primaryColor }}
        >
          <h1
            className="text-3xl font-bold"
            style={{ color: style.primaryColor }}
          >
            {data.personalInfo.fullName || "Your Name"}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm text-gray-600">
            {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
            {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
            {data.personalInfo.location && (
              <span>{data.personalInfo.location}</span>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-2 text-xs">
            {data.personalInfo.website && (
              <a
                href={data.personalInfo.website}
                className="text-blue-600 hover:underline"
              >
                {data.personalInfo.website}
              </a>
            )}
            {data.personalInfo.linkedin && (
              <a
                href={data.personalInfo.linkedin}
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            )}
            {data.personalInfo.github && (
              <a
                href={data.personalInfo.github}
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-6">
            <h2
              className="text-lg font-semibold mb-2 pb-1 border-b"
              style={{ borderColor: style.secondaryColor }}
            >
              Professional Summary
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-lg font-semibold mb-3 pb-1 border-b"
              style={{ borderColor: style.secondaryColor }}
            >
              Work Experience
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3
                      className="font-semibold"
                      style={{ color: style.primaryColor }}
                    >
                      {exp.position}
                    </h3>
                    <p className="font-medium text-gray-700">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </div>
                </div>
                {exp.location && (
                  <p className="text-sm text-gray-500 mb-2">{exp.location}</p>
                )}
                <ul className="list-disc list-inside space-y-1 mt-2">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-lg font-semibold mb-3 pb-1 border-b"
              style={{ borderColor: style.secondaryColor }}
            >
              Education
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3
                      className="font-semibold"
                      style={{ color: style.primaryColor }}
                    >
                      {edu.institution}
                    </h3>
                    <p className="text-gray-700">
                      {edu.degree} in {edu.field}
                    </p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    {edu.startDate} - {edu.current ? "Present" : edu.endDate}
                  </div>
                </div>
                {edu.gpa && (
                  <p className="text-sm text-gray-500 mt-1">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-lg font-semibold mb-3 pb-1 border-b"
              style={{ borderColor: style.secondaryColor }}
            >
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(
                data.skills.reduce(
                  (acc, skill) => {
                    if (!acc[skill.category]) acc[skill.category] = [];
                    acc[skill.category].push(skill);
                    return acc;
                  },
                  {} as Record<string, Skill[]>,
                ),
              ).map(([category, skills]) => (
                <div key={category}>
                  <h3
                    className="font-medium text-sm mb-2"
                    style={{ color: style.primaryColor }}
                  >
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {skills.map((skill) => (
                      <div key={skill.id}>
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span className="text-gray-500">{skill.level}/5</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="h-1.5 rounded-full"
                            style={{
                              width: `${(skill.level / 5) * 100}%`,
                              backgroundColor: style.primaryColor,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.projects.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-lg font-semibold mb-3 pb-1 border-b"
              style={{ borderColor: style.secondaryColor }}
            >
              Projects
            </h2>
            {data.projects.map((project) => (
              <div key={project.id} className="mb-4">
                <div className="flex justify-between items-start">
                  <h3
                    className="font-semibold"
                    style={{ color: style.primaryColor }}
                  >
                    {project.name}
                  </h3>
                  <div className="text-sm text-gray-500">
                    {project.startDate} - {project.endDate}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded"
                      style={{
                        backgroundColor: `${style.primaryColor}20`,
                        color: style.primaryColor,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-2 text-sm">
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-blue-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certificates */}
        {data.certificates.length > 0 && (
          <div className="mb-6">
            <h2
              className="text-lg font-semibold mb-3 pb-1 border-b"
              style={{ borderColor: style.secondaryColor }}
            >
              Certifications
            </h2>
            <div className="space-y-2">
              {data.certificates.map((cert) => (
                <div key={cert.id} className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {data.languages.length > 0 && (
          <div>
            <h2
              className="text-lg font-semibold mb-3 pb-1 border-b"
              style={{ borderColor: style.secondaryColor }}
            >
              Languages
            </h2>
            <div className="flex flex-wrap gap-4">
              {data.languages.map((lang) => (
                <div key={lang.id}>
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-gray-500 text-sm ml-2">
                    ({lang.proficiency})
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Form Components
const PersonalInfoForm = ({
  data,
  onUpdate,
  errors,
}: {
  data: PersonalInfo;
  onUpdate: (field: keyof PersonalInfo, value: string) => void;
  errors: Record<string, string>;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-6"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="fullName">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="fullName"
          value={data.fullName}
          onChange={(e) => onUpdate("fullName", e.target.value)}
          placeholder="John Doe"
          className={`mt-1 ${errors.fullName ? "border-red-500" : ""}`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => onUpdate("email", e.target.value)}
          placeholder="john@example.com"
          className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          value={data.phone}
          onChange={(e) => onUpdate("phone", e.target.value)}
          placeholder="+1 (555) 123-4567"
          className={`mt-1 ${errors.phone ? "border-red-500" : ""}`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          value={data.location}
          onChange={(e) => onUpdate("location", e.target.value)}
          placeholder="New York, NY"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          value={data.website}
          onChange={(e) => onUpdate("website", e.target.value)}
          placeholder="https://yourwebsite.com"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="linkedin">LinkedIn</Label>
        <Input
          id="linkedin"
          value={data.linkedin}
          onChange={(e) => onUpdate("linkedin", e.target.value)}
          placeholder="https://linkedin.com/in/yourprofile"
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="github">GitHub</Label>
        <Input
          id="github"
          value={data.github}
          onChange={(e) => onUpdate("github", e.target.value)}
          placeholder="https://github.com/yourusername"
          className="mt-1"
        />
      </div>
    </div>
    <div>
      <Label htmlFor="summary">Professional Summary</Label>
      <Textarea
        id="summary"
        value={data.summary}
        onChange={(e) => onUpdate("summary", e.target.value)}
        placeholder="A brief summary of your professional background and key achievements..."
        className="mt-1 min-h-[120px]"
      />
    </div>
  </motion.div>
);

const ExperienceForm = ({ experiences, onUpdate, onDelete, onAdd }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold">Work Experience</h3>
      <Button onClick={onAdd} className="flex items-center gap-2">
        <Plus className="w-4 h-4" />
        Add Experience
      </Button>
    </div>

    <AnimatePresence>
      {experiences.map((exp: Experience, index: number) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="border rounded-lg p-4 space-y-4 bg-card"
        >
          <div className="flex justify-between items-start">
            <h4 className="font-medium">Experience {index + 1}</h4>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onDelete(exp.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Company</Label>
              <Input
                value={exp.company}
                onChange={(e) => onUpdate(exp.id, "company", e.target.value)}
                placeholder="Company Name"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Position</Label>
              <Input
                value={exp.position}
                onChange={(e) => onUpdate(exp.id, "position", e.target.value)}
                placeholder="Job Title"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                value={exp.location}
                onChange={(e) => onUpdate(exp.id, "location", e.target.value)}
                placeholder="City, State"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Start Date</Label>
              <Input
                type="month"
                value={exp.startDate}
                onChange={(e) => onUpdate(exp.id, "startDate", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label>End Date</Label>
              <Input
                type="month"
                value={exp.endDate}
                onChange={(e) => onUpdate(exp.id, "endDate", e.target.value)}
                disabled={exp.current}
                className="mt-1"
              />
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <input
                type="checkbox"
                id={`current-${exp.id}`}
                checked={exp.current}
                onChange={(e) => onUpdate(exp.id, "current", e.target.checked)}
                className="rounded"
              />
              <Label htmlFor={`current-${exp.id}`}>
                Currently working here
              </Label>
            </div>
          </div>

          <div>
            <Label>Description (one per line)</Label>
            <Textarea
              value={exp.description.join("\n")}
              onChange={(e) =>
                onUpdate(
                  exp.id,
                  "description",
                  e.target.value.split("\n").filter((l: string) => l.trim()),
                )
              }
              placeholder="Describe your responsibilities and achievements..."
              className="mt-1 min-h-[100px]"
            />
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>
);

const EducationForm = ({ education, onUpdate, onDelete, onAdd }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold">Education</h3>
      <Button onClick={onAdd} className="flex items-center gap-2">
        <Plus className="w-4 h-4" />
        Add Education
      </Button>
    </div>

    <AnimatePresence>
      {education.map((edu: Education, index: number) => (
        <motion.div
          key={edu.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="border rounded-lg p-4 space-y-4 bg-card"
        >
          <div className="flex justify-between items-start">
            <h4 className="font-medium">Education {index + 1}</h4>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onDelete(edu.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Institution</Label>
              <Input
                value={edu.institution}
                onChange={(e) =>
                  onUpdate(edu.id, "institution", e.target.value)
                }
                placeholder="University Name"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Degree</Label>
              <Input
                value={edu.degree}
                onChange={(e) => onUpdate(edu.id, "degree", e.target.value)}
                placeholder="Bachelor's, Master's, etc."
                className="mt-1"
              />
            </div>
            <div>
              <Label>Field of Study</Label>
              <Input
                value={edu.field}
                onChange={(e) => onUpdate(edu.id, "field", e.target.value)}
                placeholder="Computer Science, Business, etc."
                className="mt-1"
              />
            </div>
            <div>
              <Label>GPA</Label>
              <Input
                value={edu.gpa}
                onChange={(e) => onUpdate(edu.id, "gpa", e.target.value)}
                placeholder="3.8/4.0"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Start Date</Label>
              <Input
                type="month"
                value={edu.startDate}
                onChange={(e) => onUpdate(edu.id, "startDate", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label>End Date</Label>
              <Input
                type="month"
                value={edu.endDate}
                onChange={(e) => onUpdate(edu.id, "endDate", e.target.value)}
                disabled={edu.current}
                className="mt-1"
              />
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <input
                type="checkbox"
                id={`current-edu-${edu.id}`}
                checked={edu.current}
                onChange={(e) => onUpdate(edu.id, "current", e.target.checked)}
                className="rounded"
              />
              <Label htmlFor={`current-edu-${edu.id}`}>
                Currently studying
              </Label>
            </div>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>
);

const SkillsForm = ({ skills, onUpdate, onDelete, onAdd }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold">Skills</h3>
      <Button onClick={onAdd} className="flex items-center gap-2">
        <Plus className="w-4 h-4" />
        Add Skill
      </Button>
    </div>

    <AnimatePresence>
      {skills.map((skill: Skill) => (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="flex items-center gap-4 p-4 border rounded-lg bg-card"
        >
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Skill Name</Label>
              <Input
                value={skill.name}
                onChange={(e) => onUpdate(skill.id, "name", e.target.value)}
                placeholder="React.js"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Category</Label>
              <Input
                value={skill.category}
                onChange={(e) => onUpdate(skill.id, "category", e.target.value)}
                placeholder="Technical"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Proficiency (1-5)</Label>
              <select
                value={skill.level}
                onChange={(e) =>
                  onUpdate(skill.id, "level", parseInt(e.target.value))
                }
                className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value={1}>Beginner</option>
                <option value={2}>Novice</option>
                <option value={3}>Intermediate</option>
                <option value={4}>Advanced</option>
                <option value={5}>Expert</option>
              </select>
            </div>
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(skill.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>
);

const ProjectsForm = ({ projects, onUpdate, onDelete, onAdd }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold">Projects</h3>
      <Button onClick={onAdd} className="flex items-center gap-2">
        <Plus className="w-4 h-4" />
        Add Project
      </Button>
    </div>

    <AnimatePresence>
      {projects.map((project: Project, index: number) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="border rounded-lg p-4 space-y-4 bg-card"
        >
          <div className="flex justify-between items-start">
            <h4 className="font-medium">Project {index + 1}</h4>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onDelete(project.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Project Name</Label>
              <Input
                value={project.name}
                onChange={(e) => onUpdate(project.id, "name", e.target.value)}
                placeholder="E-commerce Website"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Start Date</Label>
              <Input
                type="month"
                value={project.startDate}
                onChange={(e) =>
                  onUpdate(project.id, "startDate", e.target.value)
                }
                className="mt-1"
              />
            </div>
            <div>
              <Label>End Date</Label>
              <Input
                type="month"
                value={project.endDate}
                onChange={(e) =>
                  onUpdate(project.id, "endDate", e.target.value)
                }
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label>Description</Label>
            <Textarea
              value={project.description}
              onChange={(e) =>
                onUpdate(project.id, "description", e.target.value)
              }
              placeholder="Describe your project and its impact..."
              className="mt-1 min-h-[80px]"
            />
          </div>

          <div>
            <Label>Technologies (comma-separated)</Label>
            <Input
              value={project.technologies.join(", ")}
              onChange={(e) =>
                onUpdate(
                  project.id,
                  "technologies",
                  e.target.value.split(",").map((t: string) => t.trim()),
                )
              }
              placeholder="React, Node.js, MongoDB"
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Live Demo Link</Label>
              <Input
                value={project.link}
                onChange={(e) => onUpdate(project.id, "link", e.target.value)}
                placeholder="https://yourproject.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label>GitHub Link</Label>
              <Input
                value={project.github}
                onChange={(e) => onUpdate(project.id, "github", e.target.value)}
                placeholder="https://github.com/yourusername/project"
                className="mt-1"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>
);

const CertificatesForm = ({ certificates, onUpdate, onDelete, onAdd }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold">Certifications</h3>
      <Button onClick={onAdd} className="flex items-center gap-2">
        <Plus className="w-4 h-4" />
        Add Certificate
      </Button>
    </div>

    <AnimatePresence>
      {certificates.map((cert: Certificate, index: number) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="flex items-center gap-4 p-4 border rounded-lg bg-card"
        >
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Certificate Name</Label>
              <Input
                value={cert.name}
                onChange={(e) => onUpdate(cert.id, "name", e.target.value)}
                placeholder="AWS Certified Developer"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Issuer</Label>
              <Input
                value={cert.issuer}
                onChange={(e) => onUpdate(cert.id, "issuer", e.target.value)}
                placeholder="Amazon Web Services"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Date</Label>
              <Input
                type="month"
                value={cert.date}
                onChange={(e) => onUpdate(cert.id, "date", e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(cert.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>
);

const LanguagesForm = ({ languages, onUpdate, onDelete, onAdd }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold">Languages</h3>
      <Button onClick={onAdd} className="flex items-center gap-2">
        <Plus className="w-4 h-4" />
        Add Language
      </Button>
    </div>

    <AnimatePresence>
      {languages.map((lang: Language, index: number) => (
        <motion.div
          key={lang.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="flex items-center gap-4 p-4 border rounded-lg bg-card"
        >
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Language</Label>
              <Input
                value={lang.name}
                onChange={(e) => onUpdate(lang.id, "name", e.target.value)}
                placeholder="English"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Proficiency</Label>
              <select
                value={lang.proficiency}
                onChange={(e) =>
                  onUpdate(lang.id, "proficiency", e.target.value)
                }
                className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="Native">Native</option>
                <option value="Fluent">Fluent</option>
                <option value="Professional Working">
                  Professional Working
                </option>
                <option value="Limited Working">Limited Working</option>
                <option value="Elementary">Elementary</option>
              </select>
            </div>
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDelete(lang.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>
);

// Main Component
export function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [activeSection, setActiveSection] = useState<string>("personal");
  const [viewMode, setViewMode] = useState<"edit" | "preview">("edit");
  const [selectedTemplate, setSelectedTemplate] =
    useState<keyof typeof templates>("modern");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saveStatus, setSaveStatus] = useState<"saved" | "saving" | "error">(
    "saved",
  );
  const [history, setHistory] = useState<ResumeData[]>([initialData]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);

  // Load/Save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem("resumeData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setResumeData(parsed);
      setHistory([parsed]);
      setHistoryIndex(0);
    }
  }, []);

  useEffect(() => {
    const saveTimeout = setTimeout(() => {
      localStorage.setItem("resumeData", JSON.stringify(resumeData));
      setSaveStatus("saved");
    }, 500);

    setSaveStatus("saving");
    return () => clearTimeout(saveTimeout);
  }, [resumeData]);

  // History management
  const updateWithHistory = useCallback(
    (newData: ResumeData) => {
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(newData);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
      setResumeData(newData);
    },
    [history, historyIndex],
  );

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setResumeData(history[historyIndex - 1]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setResumeData(history[historyIndex + 1]);
    }
  };

  // Validation
  const validatePersonalInfo = () => {
    const newErrors: Record<string, string> = {};
    if (!resumeData.personalInfo.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (
      resumeData.personalInfo.email &&
      !/\S+@\S+\.\S+/.test(resumeData.personalInfo.email)
    ) {
      newErrors.email = "Invalid email format";
    }
    if (
      resumeData.personalInfo.phone &&
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
        resumeData.personalInfo.phone,
      )
    ) {
      newErrors.phone = "Invalid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // CRUD Operations
  const updatePersonalInfo = (field: keyof PersonalInfo, value: string) => {
    updateWithHistory({
      ...resumeData,
      personalInfo: { ...resumeData.personalInfo, [field]: value },
    });
  };

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: [],
      achievements: [],
    };
    updateWithHistory({
      ...resumeData,
      experience: [...resumeData.experience, newExp],
    });
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: any,
  ) => {
    updateWithHistory({
      ...resumeData,
      experience: resumeData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp,
      ),
    });
  };

  const deleteExperience = (id: string) => {
    updateWithHistory({
      ...resumeData,
      experience: resumeData.experience.filter((exp) => exp.id !== id),
    });
  };

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      current: false,
      gpa: "",
      description: [],
    };
    updateWithHistory({
      ...resumeData,
      education: [...resumeData.education, newEdu],
    });
  };

  const updateEducation = (id: string, field: keyof Education, value: any) => {
    updateWithHistory({
      ...resumeData,
      education: resumeData.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu,
      ),
    });
  };

  const deleteEducation = (id: string) => {
    updateWithHistory({
      ...resumeData,
      education: resumeData.education.filter((edu) => edu.id !== id),
    });
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: "",
      category: "Technical",
      level: 3,
    };
    updateWithHistory({
      ...resumeData,
      skills: [...resumeData.skills, newSkill],
    });
  };

  const updateSkill = (id: string, field: keyof Skill, value: any) => {
    updateWithHistory({
      ...resumeData,
      skills: resumeData.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill,
      ),
    });
  };

  const deleteSkill = (id: string) => {
    updateWithHistory({
      ...resumeData,
      skills: resumeData.skills.filter((skill) => skill.id !== id),
    });
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: "",
      description: "",
      technologies: [],
      link: "",
      github: "",
      startDate: "",
      endDate: "",
    };
    updateWithHistory({
      ...resumeData,
      projects: [...resumeData.projects, newProject],
    });
  };

  const updateProject = (id: string, field: keyof Project, value: any) => {
    updateWithHistory({
      ...resumeData,
      projects: resumeData.projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project,
      ),
    });
  };

  const deleteProject = (id: string) => {
    updateWithHistory({
      ...resumeData,
      projects: resumeData.projects.filter((project) => project.id !== id),
    });
  };

  const addCertificate = () => {
    const newCert: Certificate = {
      id: Date.now().toString(),
      name: "",
      issuer: "",
      date: "",
      link: "",
    };
    updateWithHistory({
      ...resumeData,
      certificates: [...resumeData.certificates, newCert],
    });
  };

  const updateCertificate = (
    id: string,
    field: keyof Certificate,
    value: any,
  ) => {
    updateWithHistory({
      ...resumeData,
      certificates: resumeData.certificates.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert,
      ),
    });
  };

  const deleteCertificate = (id: string) => {
    updateWithHistory({
      ...resumeData,
      certificates: resumeData.certificates.filter((cert) => cert.id !== id),
    });
  };

  const addLanguage = () => {
    const newLang: Language = {
      id: Date.now().toString(),
      name: "",
      proficiency: "Fluent",
    };
    updateWithHistory({
      ...resumeData,
      languages: [...resumeData.languages, newLang],
    });
  };

  const updateLanguage = (id: string, field: keyof Language, value: any) => {
    updateWithHistory({
      ...resumeData,
      languages: resumeData.languages.map((lang) =>
        lang.id === id ? { ...lang, [field]: value } : lang,
      ),
    });
  };

  const deleteLanguage = (id: string) => {
    updateWithHistory({
      ...resumeData,
      languages: resumeData.languages.filter((lang) => lang.id !== id),
    });
  };

  // Export/Import
  const exportData = () => {
    const dataStr = JSON.stringify(resumeData, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `resume-${resumeData.personalInfo.fullName || "data"}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const parsed = JSON.parse(content);
        updateWithHistory(parsed);
      };
      reader.readAsText(file);
    }
  };

  // PDF Export
  const exportToPDF = async () => {
    if (!previewRef.current) return;

    const element = previewRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(`resume-${resumeData.personalInfo.fullName || "data"}.pdf`);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "z") {
        e.preventDefault();
        undo();
      }
      if (e.ctrlKey && e.key === "y") {
        e.preventDefault();
        redo();
      }
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        exportData();
      }
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault();
        exportToPDF();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [undo, redo]);

  const sections = [
    {
      id: "personal",
      name: "Personal Info",
      icon: User,
      component: "personal",
    },
    {
      id: "experience",
      name: "Experience",
      icon: Briefcase,
      component: "experience",
    },
    {
      id: "education",
      name: "Education",
      icon: GraduationCap,
      component: "education",
    },
    { id: "skills", name: "Skills", icon: Code, component: "skills" },
    { id: "projects", name: "Projects", icon: Award, component: "projects" },
    {
      id: "certificates",
      name: "Certificates",
      icon: FileText,
      component: "certificates",
    },
    {
      id: "languages",
      name: "Languages",
      icon: Languages,
      component: "languages",
    },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "personal":
        return (
          <PersonalInfoForm
            data={resumeData.personalInfo}
            onUpdate={updatePersonalInfo}
            errors={errors}
          />
        );
      case "experience":
        return (
          <ExperienceForm
            experiences={resumeData.experience}
            onUpdate={updateExperience}
            onDelete={deleteExperience}
            onAdd={addExperience}
          />
        );
      case "education":
        return (
          <EducationForm
            education={resumeData.education}
            onUpdate={updateEducation}
            onDelete={deleteEducation}
            onAdd={addEducation}
          />
        );
      case "skills":
        return (
          <SkillsForm
            skills={resumeData.skills}
            onUpdate={updateSkill}
            onDelete={deleteSkill}
            onAdd={addSkill}
          />
        );
      case "projects":
        return (
          <ProjectsForm
            projects={resumeData.projects}
            onUpdate={updateProject}
            onDelete={deleteProject}
            onAdd={addProject}
          />
        );
      case "certificates":
        return (
          <CertificatesForm
            certificates={resumeData.certificates}
            onUpdate={updateCertificate}
            onDelete={deleteCertificate}
            onAdd={addCertificate}
          />
        );
      case "languages":
        return (
          <LanguagesForm
            languages={resumeData.languages}
            onUpdate={updateLanguage}
            onDelete={deleteLanguage}
            onAdd={addLanguage}
          />
        );
      default:
        return (
          <div className="text-center py-8 text-muted-foreground">
            Select a section to begin
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resume Builder
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Create your professional resume
            </p>
          </div>

          <div className="flex gap-2">
            {/* Save Status */}
            <div className="flex items-center mr-4">
              {saveStatus === "saved" && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
              {saveStatus === "saving" && (
                <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
              )}
              {saveStatus === "error" && (
                <AlertCircle className="w-4 h-4 text-red-500" />
              )}
              <span className="text-sm ml-2 capitalize">{saveStatus}</span>
            </div>

            <Button
              onClick={undo}
              disabled={historyIndex === 0}
              variant="outline"
              size="sm"
            >
              <Undo className="w-4 h-4" />
            </Button>
            <Button
              onClick={redo}
              disabled={historyIndex === history.length - 1}
              variant="outline"
              size="sm"
            >
              <Redo className="w-4 h-4" />
            </Button>
            <Button onClick={exportData} variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <label>
              <input
                type="file"
                accept=".json"
                onChange={importData}
                className="hidden"
              />
              <Button variant="outline" size="sm" asChild>
                <span>
                  <Upload className="w-4 h-4 mr-2" />
                  Import
                </span>
              </Button>
            </label>
          </div>
        </div>

        {/* Template Selector */}
        <div className="flex gap-2 p-2 bg-white dark:bg-slate-800 rounded-lg shadow">
          {Object.entries(templates).map(([key, template]) => (
            <Button
              key={key}
              variant={selectedTemplate === key ? "default" : "ghost"}
              onClick={() => setSelectedTemplate(key as keyof typeof templates)}
              className="flex-1"
            >
              {template.name}
            </Button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex gap-2">
          <Button
            variant={viewMode === "edit" ? "default" : "outline"}
            onClick={() => setViewMode("edit")}
            className="flex-1"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button
            variant={viewMode === "preview" ? "default" : "outline"}
            onClick={() => {
              setViewMode("preview");
              validatePersonalInfo();
            }}
            className="flex-1"
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
        </div>

        {/* Main Content */}
        {viewMode === "edit" ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-2 bg-white dark:bg-slate-800 rounded-lg shadow p-4">
                <h2 className="text-lg font-semibold mb-4">Resume Sections</h2>
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <Button
                      key={section.id}
                      variant={
                        activeSection === section.id ? "default" : "ghost"
                      }
                      className="w-full justify-start"
                      onClick={() => setActiveSection(section.id)}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {section.name}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                {renderSection()}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-end gap-2">
              <Button onClick={exportToPDF} className="flex items-center gap-2">
                <Printer className="w-4 h-4" />
                Download PDF
              </Button>
            </div>
            <div ref={previewRef}>
              <ResumePreview data={resumeData} template={selectedTemplate} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
