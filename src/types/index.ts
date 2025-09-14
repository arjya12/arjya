export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  imageFit?: 'cover' | 'contain';
  features: string[];
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface PersonalInfo {
  name: string;
  location: string;
  education?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    portfolio?: string;
  };
}
