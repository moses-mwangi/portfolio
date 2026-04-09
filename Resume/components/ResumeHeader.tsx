import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";
import { PersonalInfo } from "@/lib/types";

interface ResumeHeaderProps {
  personalInfo: PersonalInfo;
}

export function ResumeHeader({ personalInfo }: ResumeHeaderProps) {
  return (
    <header className="bg-gradient-to-r from-primary to-primary-light text-white p-8 rounded-t-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
        <h2 className="text-xl mb-6 text-blue-100">{personalInfo.title}</h2>
        
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-200 transition-colors">
              {personalInfo.email}
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-200 transition-colors">
              {personalInfo.phone}
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </div>
          
          {personalInfo.website && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <a 
                href={personalInfo.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                Portfolio
              </a>
            </div>
          )}
          
          {personalInfo.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          )}
          
          {personalInfo.github && (
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors"
              >
                GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
