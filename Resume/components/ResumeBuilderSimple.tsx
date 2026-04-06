"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Trash2,
  Edit,
  Save,
  User,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  ResumeData,
  PersonalInfo,
  Experience,
  Education,
  Skill,
  Project,
} from "@/types/resume";

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

export function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [activeSection, setActiveSection] = useState<string>("personal");
  const [isEditing, setIsEditing] = useState<string | null>(null);

  const sections = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "skills", name: "Skills", icon: Code },
    { id: "projects", name: "Projects", icon: Award },
    { id: "languages", name: "Languages", icon: Languages },
  ];

  const updatePersonalInfo = (field: keyof PersonalInfo, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
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
      description: [""],
      achievements: [""],
    };
    setResumeData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExp],
    }));
  };

  const updateExperience = (
    id: string,
    field: keyof Experience,
    value: any,
  ) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp,
      ),
    }));
  };

  const deleteExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }));
  };

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: "",
      category: "Technical",
      level: 3,
    };
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
  };

  const updateSkill = (id: string, field: keyof Skill, value: any) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill,
      ),
    }));
  };

  const deleteSkill = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill.id !== id),
    }));
  };

  const renderPersonalInfo = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={resumeData.personalInfo.fullName}
            onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
            placeholder="John Doe"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={resumeData.personalInfo.email}
            onChange={(e) => updatePersonalInfo("email", e.target.value)}
            placeholder="john@example.com"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={resumeData.personalInfo.phone}
            onChange={(e) => updatePersonalInfo("phone", e.target.value)}
            placeholder="+1 (555) 123-4567"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={resumeData.personalInfo.location}
            onChange={(e) => updatePersonalInfo("location", e.target.value)}
            placeholder="New York, NY"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            value={resumeData.personalInfo.website}
            onChange={(e) => updatePersonalInfo("website", e.target.value)}
            placeholder="https://yourwebsite.com"
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input
            id="linkedin"
            value={resumeData.personalInfo.linkedin}
            onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
            placeholder="https://linkedin.com/in/yourprofile"
            className="mt-1"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          value={resumeData.personalInfo.summary}
          onChange={(e) => updatePersonalInfo("summary", e.target.value)}
          placeholder="A brief summary of your professional background and key achievements..."
          className="mt-1 min-h-[120px]"
        />
      </div>
    </motion.div>
  );

  const renderExperience = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Work Experience</h3>
        <Button onClick={addExperience} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Experience
        </Button>
      </div>

      <AnimatePresence>
        {resumeData.experience.map((exp, index) => (
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
                onClick={() => deleteExperience(exp.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Company</Label>
                <Input
                  value={exp.company}
                  onChange={(e) =>
                    updateExperience(exp.id, "company", e.target.value)
                  }
                  placeholder="Company Name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Position</Label>
                <Input
                  value={exp.position}
                  onChange={(e) =>
                    updateExperience(exp.id, "position", e.target.value)
                  }
                  placeholder="Job Title"
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Location</Label>
                <Input
                  value={exp.location}
                  onChange={(e) =>
                    updateExperience(exp.id, "location", e.target.value)
                  }
                  placeholder="City, State"
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Start Date</Label>
                <Input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) =>
                    updateExperience(exp.id, "startDate", e.target.value)
                  }
                  className="mt-1"
                />
              </div>
              <div>
                <Label>End Date</Label>
                <Input
                  type="month"
                  value={exp.endDate}
                  onChange={(e) =>
                    updateExperience(exp.id, "endDate", e.target.value)
                  }
                  disabled={exp.current}
                  className="mt-1"
                />
              </div>
              <div className="flex items-center space-x-2 mt-6">
                <input
                  type="checkbox"
                  id={`current-${exp.id}`}
                  checked={exp.current}
                  onChange={(e) =>
                    updateExperience(exp.id, "current", e.target.checked)
                  }
                  className="rounded"
                />
                <Label htmlFor={`current-${exp.id}`}>
                  Currently working here
                </Label>
              </div>
            </div>

            <div>
              <Label>Description</Label>
              <Textarea
                value={exp.description.join("\n")}
                onChange={(e) =>
                  updateExperience(
                    exp.id,
                    "description",
                    e.target.value.split("\n"),
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

  const renderSkills = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Skills</h3>
        <Button onClick={addSkill} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Skill
        </Button>
      </div>

      <AnimatePresence>
        {resumeData.skills.map((skill, index) => (
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
                  onChange={(e) =>
                    updateSkill(skill.id, "name", e.target.value)
                  }
                  placeholder="React.js"
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Category</Label>
                <Input
                  value={skill.category}
                  onChange={(e) =>
                    updateSkill(skill.id, "category", e.target.value)
                  }
                  placeholder="Technical"
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Proficiency (1-5)</Label>
                <select
                  value={skill.level}
                  onChange={(e) =>
                    updateSkill(skill.id, "level", parseInt(e.target.value))
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
              onClick={() => deleteSkill(skill.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "personal":
        return renderPersonalInfo();
      case "experience":
        return renderExperience();
      case "skills":
        return renderSkills();
      default:
        return (
          <div className="text-center py-8 text-muted-foreground">
            Section coming soon...
          </div>
        );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <div className="sticky top-8 space-y-2">
          <h2 className="text-lg font-semibold mb-4">Resume Sections</h2>
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
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

      <div className="lg:col-span-3">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}
