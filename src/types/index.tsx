// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  image?: string;
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  datasetUrl?: string;
  notebookUrl?: string;
  featured: boolean;
  completed: boolean;
  startDate: string;
  endDate?: string;
  metrics?: ProjectMetric[];
  challenges?: string[];
  learnings?: string[];
  tags: string[];
}

export interface ProjectMetric {
  name: string;
  value: string | number;
  description?: string;
  improvement?: string;
}

export type ProjectCategory = 
  | 'machine-learning'
  | 'data-analysis'
  | 'deep-learning'
  | 'nlp'
  | 'computer-vision'
  | 'time-series'
  | 'recommendation-systems'
  | 'web-scraping'
  | 'dashboard'
  | 'research';

// Skill types
export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  category: SkillCategory;
  icon?: string;
  description?: string;
  yearsOfExperience?: number;
  projects?: string[]; // Project IDs that use this skill
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type SkillCategory = 
  | 'programming'
  | 'machine-learning'
  | 'data-analysis'
  | 'databases'
  | 'visualization'
  | 'cloud'
  | 'tools'
  | 'soft-skills';

// Experience types
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string; // undefined means current position
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
}

// Education types
export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
  gpa?: number;
  maxGpa?: number;
  coursework?: string[];
  achievements?: string[];
  thesis?: {
    title: string;
    description: string;
    advisor?: string;
  };
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

// Theme types
export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Filter types for projects page
export interface ProjectFilters {
  category: ProjectCategory | 'all';
  technologies: string[];
  featured: boolean | null;
  searchQuery: string;
}

// Chart data types for data visualization
export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface TimeSeriesData {
  date: string;
  value: number;
  category?: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

// Animation types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Common utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>;