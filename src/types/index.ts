export interface NavLink {
  id: string;
  label: string;
  index?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: "Active" | "Coming Soon";
  ctaAvailable: boolean;
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  note: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  target: string;
  duration: string;
  featured?: boolean;
  syllabus: string[];
}

export interface EventItem {
  id: string;
  title: string;
  location: string;
  note: string;
  dateLabel?: string;
  imagePaths: string[];
}

export interface ApproachPoint {
  id: string;
  index: string;
  title: string;
  description: string;
}

export interface HeroMedia {
  poster: string;
  video: string;
  /** set true once a real file exists at /videos/hero.mp4 */
  videoActive?: boolean;
}

export interface Manifesto {
  quote: string;
  cite: string;
}

export interface MediaSlotProps {
  src: string;
  alt?: string;
  poster?: string;
  className?: string;
  placeholderLabel?: string;
  motion?: "kenburns" | "none";
}