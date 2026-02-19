// src/app/models/resume.model.ts
export interface Project {
  name: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  provider: string;
}