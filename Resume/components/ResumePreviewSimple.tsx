// "use client";

// import { useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { ResumeData } from "@/types/resume";

// interface ResumePreviewProps {
//   resumeData?: ResumeData;
// }

// const defaultResumeData: ResumeData = {
//   personalInfo: {
//     fullName: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+1 (555) 123-4567",
//     location: "New York, NY",
//     website: "https://johndoe.dev",
//     linkedin: "https://linkedin.com/in/johndoe",
//     github: "https://github.com/johndoe",
//     summary:
//       "Experienced software developer with a passion for creating innovative solutions and leading teams to success.",
//   },
//   experience: [
//     {
//       id: "1",
//       company: "Tech Company",
//       position: "Senior Software Engineer",
//       location: "San Francisco, CA",
//       startDate: "2022-01",
//       endDate: "2024-01",
//       current: false,
//       description: [
//         "Led development of microservices architecture",
//         "Improved application performance by 40%",
//         "Mentored junior developers",
//       ],
//     },
//   ],
//   education: [
//     {
//       id: "1",
//       institution: "University of Technology",
//       degree: "Bachelor of Science",
//       field: "Computer Science",
//       location: "Boston, MA",
//       startDate: "2018-09",
//       endDate: "2022-05",
//       gpa: "3.8",
//     },
//   ],
//   skills: [
//     { id: "1", name: "React.js", category: "Frontend", level: 5 },
//     { id: "2", name: "Node.js", category: "Backend", level: 4 },
//     { id: "3", name: "TypeScript", category: "Language", level: 5 },
//   ],
//   projects: [],
//   certificates: [],
//   languages: [],
// };

// export function ResumePreview({
//   resumeData = defaultResumeData,
// }: ResumePreviewProps) {
//   const resumeRef = useRef<HTMLDivElement>(null);

//   const handleDownloadPDF = () => {
//     window.print();
//   };

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//     });
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">Resume Preview</h2>
//         <div className="flex gap-2">
//           <Button onClick={handleDownloadPDF}>Download PDF</Button>
//         </div>
//       </div>

//       <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden">
//         <div
//           ref={resumeRef}
//           className="max-w-4xl mx-auto p-8 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
//         >
//           {/* Header Section */}
//           <div className="border-b-2 border-blue-500 pb-6 mb-8">
//             <div className="flex items-start justify-between">
//               <div className="flex-1">
//                 <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
//                   {resumeData.personalInfo.fullName}
//                 </h1>
//                 <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
//                   <span>📧 {resumeData.personalInfo.email}</span>
//                   <span>📱 {resumeData.personalInfo.phone}</span>
//                   <span>📍 {resumeData.personalInfo.location}</span>
//                 </div>
//                 <div className="flex flex-wrap gap-4 mt-2 text-sm">
//                   {resumeData.personalInfo.website && (
//                     <a
//                       href={resumeData.personalInfo.website}
//                       className="text-blue-600 hover:underline"
//                     >
//                       🌐 Website
//                     </a>
//                   )}
//                   {resumeData.personalInfo.linkedin && (
//                     <a
//                       href={resumeData.personalInfo.linkedin}
//                       className="text-blue-600 hover:underline"
//                     >
//                       💼 LinkedIn
//                     </a>
//                   )}
//                   {resumeData.personalInfo.github && (
//                     <a
//                       href={resumeData.personalInfo.github}
//                       className="text-blue-600 hover:underline"
//                     >
//                       💻 GitHub
//                     </a>
//                   )}
//                 </div>
//               </div>
//               <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
//                 {resumeData.personalInfo.fullName
//                   .split(" ")
//                   .map((n) => n[0])
//                   .join("")}
//               </div>
//             </div>

//             {resumeData.personalInfo.summary && (
//               <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
//                 {resumeData.personalInfo.summary}
//               </p>
//             )}
//           </div>

//           {/* Experience Section */}
//           {resumeData.experience.length > 0 && (
//             <div className="mb-8">
//               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-blue-500 pl-4">
//                 Professional Experience
//               </h2>
//               <div className="space-y-6">
//                 {resumeData.experience.map((exp, index) => (
//                   <div key={exp.id} className="relative pl-8">
//                     <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800"></div>
//                     <div className="absolute left-2 top-6 w-0.5 h-full bg-slate-300 dark:bg-slate-600"></div>

//                     <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
//                       <div className="flex justify-between items-start mb-2">
//                         <div>
//                           <h3 className="text-lg font-semibold">
//                             {exp.position}
//                           </h3>
//                           <p className="text-blue-600 dark:text-blue-400 font-medium">
//                             {exp.company}
//                           </p>
//                         </div>
//                         <div className="text-right text-sm text-slate-600 dark:text-slate-400">
//                           <p>
//                             {formatDate(exp.startDate)} -{" "}
//                             {exp.current ? "Present" : formatDate(exp.endDate)}
//                           </p>
//                           <p>{exp.location}</p>
//                         </div>
//                       </div>

//                       <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 dark:text-slate-300">
//                         {exp.description.map((desc, i) => (
//                           <li key={i}>{desc}</li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Skills Section */}
//           {resumeData.skills.length > 0 && (
//             <div className="mb-8">
//               <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 border-l-4 border-green-500 pl-4">
//                 Skills
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {Object.entries(
//                   resumeData.skills.reduce(
//                     (acc, skill) => {
//                       if (!acc[skill.category]) acc[skill.category] = [];
//                       acc[skill.category].push(skill);
//                       return acc;
//                     },
//                     {} as Record<string, typeof resumeData.skills>,
//                   ),
//                 ).map(([category, skills]) => (
//                   <div
//                     key={category}
//                     className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4"
//                   >
//                     <h3 className="font-semibold mb-3 text-green-600 dark:text-green-400">
//                       {category}
//                     </h3>
//                     <div className="space-y-3">
//                       {skills.map((skill) => (
//                         <div key={skill.id}>
//                           <div className="flex justify-between items-center mb-1">
//                             <span className="text-sm font-medium">
//                               {skill.name}
//                             </span>
//                             <span className="text-xs text-slate-500">
//                               {
//                                 [
//                                   "Beginner",
//                                   "Novice",
//                                   "Intermediate",
//                                   "Advanced",
//                                   "Expert",
//                                 ][skill.level - 1]
//                               }
//                             </span>
//                           </div>
//                           <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
//                             <div
//                               className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
//                               style={{ width: `${(skill.level / 5) * 100}%` }}
//                             ></div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="text-center text-sm text-slate-500 dark:text-slate-400">
//         <p>
//           This is a preview of your resume. Use the download button to generate
//           a PDF.
//         </p>
//       </div>
//     </div>
//   );
// }

// components/resume/ResumePreview.tsx
"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Share2,
  Printer,
  Copy,
  Check,
  Loader2,
  Sparkles,
  Layout,
  FileJson,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeData } from "@/types/resume";
// import { useToast } from "@/hooks/use-toast";
import { generatePDF, downloadPDF } from "@/lib/pdf-generator";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Templates
// import { ModernTemplate } from "./templates/ModernTemplate";
// import { ModernTemplate } from "@/components/resume/templates/ModernTemplate";
import { ModernTemplate } from "@/components/temps/ModernTemplate";
import { ClassicTemplate } from "@/components/temps/ModernTemplate";
import { MinimalTemplate } from "@/components/temps/ModernTemplate";

type TemplateType = "modern" | "classic" | "minimal";

interface ResumePreviewProps {
  resumeData?: ResumeData;
  onUpdate?: (data: ResumeData) => void;
}

const defaultResumeData: ResumeData = {
  personalInfo: {
    fullName: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://sarahjohnson.dev",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    github: "https://github.com/sarahjohnson",
    summary:
      "Senior Full Stack Developer with 8+ years of experience building scalable web applications. Expertise in React, Node.js, and cloud architecture. Passionate about creating exceptional user experiences and mentoring junior developers.",
  },
  experience: [
    {
      id: "1",
      company: "Tech Innovations Inc.",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      startDate: "2022-01",
      endDate: "2024-01",
      current: false,
      description: [
        "Led development of microservices architecture serving 1M+ daily users",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored 5 junior developers and conducted code reviews",
        "Optimized database queries improving API response time by 40%",
      ],
    },
    {
      id: "2",
      company: "Digital Solutions Co.",
      position: "Frontend Developer",
      location: "Los Angeles, CA",
      startDate: "2019-06",
      endDate: "2021-12",
      current: false,
      description: [
        "Developed responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Reduced bundle size by 35% through code splitting and lazy loading",
        "Implemented unit tests achieving 85% code coverage",
      ],
    },
  ],
  education: [
    {
      id: "1",
      institution: "Stanford University",
      degree: "Master of Science",
      field: "Computer Science",
      location: "Stanford, CA",
      startDate: "2017-09",
      endDate: "2019-06",
      gpa: "3.9",
    },
    {
      id: "2",
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field: "Software Engineering",
      location: "Berkeley, CA",
      startDate: "2013-09",
      endDate: "2017-05",
      gpa: "3.8",
    },
  ],
  skills: [
    { id: "1", name: "React/Next.js", category: "Frontend", level: 5 },
    { id: "2", name: "TypeScript", category: "Frontend", level: 5 },
    { id: "3", name: "Node.js", category: "Backend", level: 4 },
    { id: "4", name: "Python", category: "Backend", level: 4 },
    { id: "5", name: "PostgreSQL", category: "Database", level: 4 },
    { id: "6", name: "MongoDB", category: "Database", level: 3 },
    { id: "7", name: "AWS", category: "Cloud", level: 4 },
    { id: "8", name: "Docker", category: "DevOps", level: 3 },
  ],
  projects: [
    {
      id: "1",
      name: "AI-Powered Task Manager",
      description: "Smart task management app with AI-powered prioritization",
      technologies: ["React", "Node.js", "OpenAI", "PostgreSQL"],
      highlights: [
        "Implemented AI algorithms for automatic task prioritization",
        "Built real-time notifications using WebSockets",
        "Achieved 95% user satisfaction in beta testing",
      ],
      link: "https://github.com/sarahjohnson/taskmanager",
    },
    {
      id: "2",
      name: "E-commerce Analytics Dashboard",
      description: "Real-time analytics dashboard for e-commerce platforms",
      technologies: ["Next.js", "GraphQL", "Prisma", "TailwindCSS"],
      highlights: [
        "Processed 500K+ daily events with real-time visualizations",
        "Reduced dashboard load time by 70% through optimization",
        "Implemented role-based access control",
      ],
      link: "https://github.com/sarahjohnson/analytics-dashboard",
    },
  ],
  certificates: [
    {
      id: "1",
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023-06",
      link: "https://aws.amazon.com/certification",
    },
    {
      id: "2",
      name: "Professional Scrum Master",
      issuer: "Scrum.org",
      date: "2022-10",
      link: "https://scrum.org/certificates",
    },
  ],
  languages: [
    { id: "1", name: "English", proficiency: "Native" },
    { id: "2", name: "Spanish", proficiency: "Fluent" },
    { id: "3", name: "French", proficiency: "Intermediate" },
  ],
};

const templates = {
  modern: { component: ModernTemplate, label: "Modern", icon: "✨" },
  classic: { component: ClassicTemplate, label: "Classic", icon: "📄" },
  minimal: { component: MinimalTemplate, label: "Minimal", icon: "🎯" },
};

export function ResumePreview({
  resumeData = defaultResumeData,
  onUpdate,
}: ResumePreviewProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateType>("modern");
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  // const { toast } = useToast();
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    try {
      setIsGenerating(true);
      // toast({
      //   title: "Generating PDF",
      //   description: "Please wait while we prepare your resume...",
      // });

      const blob = await generatePDF(resumeData, selectedTemplate);
      downloadPDF(
        blob,
        `${resumeData.personalInfo.fullName.replace(/\s+/g, "_")}_Resume.pdf`,
      );

      // toast({
      //   title: "Success!",
      //   description: "Your resume has been downloaded.",
      //   variant: "default",
      // });
    } catch (error) {
      console.error("PDF generation failed:", error);
      // toast({
      //   title: "Error",
      //   description: "Failed to generate PDF. Please try again.",
      //   variant: "destructive",
      // });
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const content = previewRef.current?.cloneNode(true) as HTMLElement;
    if (!content) return;

    const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
    let stylesHTML = "";
    styles.forEach((style) => {
      if (style.tagName === "STYLE") {
        stylesHTML += style.outerHTML;
      } else if (style.tagName === "LINK") {
        stylesHTML += style.outerHTML;
      }
    });

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${resumeData.personalInfo.fullName} - Resume</title>
          ${stylesHTML}
          <style>
            body {
              padding: 20px;
              margin: 0;
              background: white;
            }
            @media print {
              body {
                padding: 0;
              }
              button, .no-print {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          ${content.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
  };

  const handleCopyToClipboard = async () => {
    try {
      const content = previewRef.current?.innerText;
      if (content) {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        // toast({
        //   title: "Copied!",
        //   description: "Resume content copied to clipboard.",
        // });
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: "Failed to copy content.",
      //   variant: "destructive",
      // });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${resumeData.personalInfo.fullName} - Resume`,
          text: `Check out ${resumeData.personalInfo.fullName}'s resume`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share cancelled or failed");
      }
    } else {
      await handleCopyToClipboard();
    }
  };

  const getTemplateComponent = () => {
    const template = templates[selectedTemplate];
    return template?.component || templates.modern.component;
  };

  const TemplateComponent = getTemplateComponent();

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex flex-wrap justify-between items-center gap-4 sticky top-0 bg-background z-10 py-4 border-b">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Resume Preview
          </h2>
          <div className="h-6 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Layout className="w-4 h-4 text-muted-foreground" />
            <select
              value={selectedTemplate}
              onChange={(e) =>
                setSelectedTemplate(e.target.value as TemplateType)
              }
              className="bg-background border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(templates).map(([key, { label, icon }]) => (
                <option key={key} value={key}>
                  {icon} {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() => setShowAIAssistant(!showAIAssistant)}
            className="gap-2"
          >
            <Sparkles className="w-4 h-4" />
            AI Assistant
          </Button>
          <Button variant="outline" onClick={handlePrint} className="gap-2">
            <Printer className="w-4 h-4" />
            Print
          </Button>
          <Button
            variant="outline"
            onClick={handleCopyToClipboard}
            className="gap-2"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            {copied ? "Copied" : "Copy"}
          </Button>
          <Button variant="outline" onClick={handleShare} className="gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={handleDownloadPDF}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <FileJson className="w-4 h-4 mr-2" />
                )}
                Download PDF
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handlePrint}>
                <Printer className="w-4 h-4 mr-2" />
                Print Directly
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* AI Assistant Panel */}
      <AnimatePresence>
        {showAIAssistant && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <Alert className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-blue-200 dark:border-blue-800">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <AlertDescription className="mt-2">
                <p className="text-sm mb-2">AI Assistant Tips:</p>
                <ul className="text-xs space-y-1 list-disc list-inside text-muted-foreground">
                  <li>
                    Add quantifiable achievements (e.g., "Increased sales by
                    30%")
                  </li>
                  <li>Use action verbs like "Led", "Developed", "Optimized"</li>
                  <li>Tailor your resume for each job application</li>
                  <li>
                    Keep your summary concise and impactful (2-3 sentences)
                  </li>
                  <li>Highlight skills that match the job description</li>
                </ul>
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Preview */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border">
        <div
          ref={previewRef}
          className="max-w-4xl mx-auto bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
        >
          <TemplateComponent resumeData={resumeData} />
        </div>
      </div>

      {/* Footer Stats */}
      <div className="flex justify-between items-center text-sm text-muted-foreground pt-4 border-t">
        <div className="flex gap-4">
          <span>📄 {resumeData.experience.length} Work Experiences</span>
          <span>🎓 {resumeData.education.length} Degrees</span>
          <span>⚡ {resumeData.skills.length} Skills</span>
          <span>🚀 {resumeData.projects.length} Projects</span>
        </div>
        <div className="text-right">
          <p className="text-xs">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-xs text-green-600">✓ Ready for download</p>
        </div>
      </div>
    </div>
  );
}
