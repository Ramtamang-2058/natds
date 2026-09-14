export interface NavLink {
  id: string;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: "Active" | "Beta" | "Coming Soon";
  ctaAvailable: boolean;
  features: string[];
  skills: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
}

export interface ChoiceReason {
  id: string;
  title: string;
  description: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  target: string;
  duration: string;
  featured?: boolean;
  syllabus: string[];
}

export interface ResearchFocus {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  index: string;
  title: string;
  description: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface IndustryServed {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  initial: string;
}

export interface MarqueeItem {
  id: string;
  label: string;
}

export interface HeroMedia {
  poster: string;
  video: string;
}

export interface MediaSlotProps {
  src: string;
  alt?: string;
  poster?: string;
  className?: string;
  priority?: boolean;
}