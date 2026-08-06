// Personal Information

export interface PersonalInfo {
  firstName: string;
  lastName: string;

  jobTitle: string;

  email: string;
  phone: string;

  location: string;

  linkedin: string;
  github: string;
  portfolio: string;

  summary: string;
}

// Education

export interface Education {
  id: string;

  college: string;
  degree: string;
  specialization: string;

  cgpa: string;

  startDate: string;
  endDate: string;

  location: string;

  description: string[];
}

// Experience

export interface Experience {
  id: string;

  company: string;

  jobTitle: string;

  employmentType: string; // Full Time, Internship...

  location: string;

  startDate: string;
  endDate: string;

  description: string[];
}

// Projects

export interface Project {
  id: string;

  title: string;

  techStack: string[];

  github: string;
  liveLink: string;

  startDate: string;
  endDate: string;

  description: string[];
}

// Skills

export interface Skill {
  category: string;

  items: string[];
}

// Certificates

export interface Certificate {
  id: string;

  title: string;

  organization: string;

  issueDate: string;

  credentialId: string;

  credentialLink: string;
}

// Achievements

export interface Achievement {
  id: string;

  title: string;

  description: string;
}

// Languages

export interface Language {
  id: string;

  name: string;

  proficiency: string; // Beginner | Intermediate | Fluent | Native
}

// Resume

export interface ResumeData {
  personal: PersonalInfo;

  education: Education[];

  experience: Experience[];

  projects: Project[];

  skills: Skill[];

  certificates: Certificate[];

  achievements: Achievement[];

  languages: Language[];
}

export interface SavedResume {
  id: number;
  title: string;
  template: "classic" | "modern" | "professional";
  resume_data: ResumeData;
  created_at: string;
  updated_at: string;
  user_id: number;
}