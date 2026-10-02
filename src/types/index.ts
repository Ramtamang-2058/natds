export interface NavLink {
  id: string;
  label: string;
}

export interface TrainingPage {
  slug: string;
  title: string;
  description: string;
  audience: string;
  intro: string;
  programId?: string;
  sections: {title: string; text: string}[];
  preparation: string;
  articleSlug?: string;
}

export interface Sector {
  id: string;
  name: string;
  /** one-line problem statement, in the sector's own terms */
  headline: string;
  summary: string;
  /** concrete things NATDS builds or teaches for this sector */
  useCases: {title: string; detail: string}[];
  /** who we've worked with in this sector (only real engagements) */
  proof?: string;
  engagement: string;
  waText: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  target: string;
  duration: string;
  featured?: boolean;
  syllabus: string[];
  waText: string;
}

export interface FieldNote {
  id: string;
  /** slug used for the article URL and the read-more link */
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  /** primary SEO keywords this note targets (used for meta/labels) */
  keywords: string[];
}

export interface EventItem {
  id: string;
  title: string;
  sector: string;
  location: string;
  note: string;
  imagePaths: string[];
}

export interface ApproachPoint {
  id: string;
  title: string;
  duration: string;
  description: string;
}

export interface HeroMedia {
  poster: string;
  video: string;
  /** set true once a real file exists at /videos/hero.mp4 */
  videoActive?: boolean;
}

export interface MediaSlotProps {
  src: string;
  alt?: string;
  poster?: string;
  className?: string;
  placeholderLabel?: string;
}
