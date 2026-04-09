export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  highlights?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  certificates?: Certificate[];
  languages?: Language[];
}
