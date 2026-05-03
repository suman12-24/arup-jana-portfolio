import { LucideIcon } from 'lucide-react';

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  items: string[];
}

export interface Project {
  title: string;
  period: string;
  tech: string[];
  points: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  responsibilities: string[];
  logo?: string;
}