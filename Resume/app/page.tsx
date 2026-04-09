import { ResumeHeader } from "@/components/ResumeHeader";
import { SummarySection } from "@/components/SummarySection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { resumeData } from "@/data/resume";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Resume Header */}
          <ResumeHeader personalInfo={resumeData.personalInfo} />
          
          {/* Resume Content */}
          <div className="p-8">
            {/* Summary Section */}
            <SummarySection summary={resumeData.personalInfo.summary} />
            
            {/* Experience Section */}
            <ExperienceSection experience={resumeData.experience} />
            
            {/* Education Section */}
            <EducationSection education={resumeData.education} />
            
            {/* Projects Section */}
            <ProjectsSection projects={resumeData.projects} />
            
            {/* Skills Section */}
            <SkillsSection skills={resumeData.skills} />
          </div>
        </div>
      </div>
    </div>
  );
}
