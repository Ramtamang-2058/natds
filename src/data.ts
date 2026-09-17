import type {
  ApproachPoint,
  EventItem,
  HeroMedia,
  Manifesto,
  NavLink,
  Product,
  Service,
  TrainingProgram,
} from "./types";

export type {
  ApproachPoint,
  EventItem,
  HeroMedia,
  Manifesto,
  NavLink,
  Product,
  Service,
  TrainingProgram,
};

/* ─────────────────────────────────────────────
   Brand constants
───────────────────────────────────────────── */
export const BRAND = {
  name: "NATDS",
  fullName: "Nepal AI & Tech Digital Solution",
  domain: "natds.safalai.com.np",
  url: "https://natds.safalai.com.np",
  whatsappNumber: "9779818488715",
  whatsappDisplay: "+977 981-8488715",
  email: "hello@natds.safalai.com.np",
  location: "Kathmandu, Nepal",
};

const wa = BRAND.whatsappNumber;

export const WHATSAPP_LINKS = {
  general: `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hello NATDS! I'd like to learn more about your AI & tech solutions."
  )}`,
  researcher: `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hi NATDS! I'm interested in the Researcher Program. Please share the details."
  )}`,
  managers: `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hi NATDS! I'm interested in the AI for Managers & Executives course (8 sessions \u00b7 2 hrs each). Please share the details."
  )}`,
  students: `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hi NATDS! I'm interested in the AI for Students & Learners program. Please share the syllabus."
  )}`,
  professionals: `https://wa.me/${wa}?text=${encodeURIComponent(
    "Hi NATDS! I'm interested in the AI for Professionals & Creatives program. Please share the syllabus."
  )}`,
};

export const PROGRAM_WA_LINK: Record<string, string> = {
  "prog-researchers": WHATSAPP_LINKS.researcher,
  "prog-managers": WHATSAPP_LINKS.managers,
  "prog-students": WHATSAPP_LINKS.students,
  "prog-professionals": WHATSAPP_LINKS.professionals,
};

/* ─────────────────────────────────────────────
   Navigation
───────────────────────────────────────────── */
export const NAV_LINKS: NavLink[] = [
  { id: "research", label: "Research", index: "01" },
  { id: "events", label: "Events", index: "02" },
  { id: "managers", label: "Managers", index: "03" },
  { id: "services", label: "Services", index: "04" },
  { id: "training", label: "Training", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
];

/* ─────────────────────────────────────────────
   Hero
───────────────────────────────────────────── */
export const HERO_MEDIA: HeroMedia = {
  poster: "/images/events/ime-group/training-back-view.png",
  video: "/videos/hero.mp4",
  videoActive: false,
};

/* ─────────────────────────────────────────────
   Manifesto (quote bar)
───────────────────────────────────────────── */
export const MANIFESTO: Manifesto = {
  quote:
    "Research isn't the search for answers. It's the discipline of asking better questions — and AI lets Nepali researchers ask them at the frontier.",
  cite: "NATDS Research Lab, 2025",
};

/* ─────────────────────────────────────────────
   Products
───────────────────────────────────────────── */
export const PRODUCTS: Product[] = [
  {
    id: "research",
    name: "Researcher Program",
    tagline: "The flagship. AI methods for people who do real research.",
    description:
      "A 2-week intensive lab for academics, thesis writers and research teams in Nepal. Literature mining, deep synthesis, verification, reproducible analysis and citation-aware writing — taught as craft, not as prompt tricks.",
    status: "Active",
    ctaAvailable: true,
    features: [
      "Systematic literature review & mining across scholar repositories",
      "Deep reading and synthesis with the tools researchers actually use",
      "Evidence verification — every claim traceable to a source",
      "Quantitative & qualitative analysis pipelines explained",
      "Citation discipline and AI-aware academic writing",
      "A connected knowledge base you own and keep",
    ],
  },
  {
    id: "managers",
    name: "Manager AI",
    tagline: "Decision intelligence and workload automation for leaders. Enrolment open.",
    description:
      "A live 8-session program for people who lead teams — workload automation that removes admin at the source, 'ask my documents' knowledge workflows, and one-page decision briefs with evidence. No hype, no vendor lock-in.",
    status: "Active",
    ctaAvailable: true,
    features: [
      "Map a real week into Do / Delegate / Automate / Eliminate",
      "A reusable manager prompt library",
      "'Ask my documents' knowledge workflow",
      "One-page AI Decision Briefs with evidence",
      "Security, bias and a one-page AI policy",
      "A 30-day AI implementation roadmap",
    ],
  },
];

/* ─────────────────────────────────────────────
   Recent events (photo gallery)
   → drop images into public/images/events/<slug>/
   and update imagePaths here. See AGENTS.md.
───────────────────────────────────────────── */
export const EVENTS: EventItem[] = [
  {
    id: "prakriti-resource-center",
    title: "Prakriti Resource Center",
    location: "On-site training · team session",
    dateLabel: "Recent",
    note: "AI & digital skills training for the Prakriti Resource Center team — guided sessions, hands-on practice and group learning.",
    imagePaths: [
      "/images/events/prakriti-resource-center/training-front-right.jpeg",
      "/images/events/prakriti-resource-center/teaching-trainer-and-trainee.jpeg",
      "/images/events/prakriti-resource-center/trainees-reading-board.jpeg",
      "/images/events/prakriti-resource-center/trainee-asking-question.jpeg",
    ],
  },
  {
    id: "ime-group",
    title: "IME Group",
    location: "Corporate AI upskilling · team training",
    dateLabel: "Recent",
    note: "The IME Group team through an intensive AI & digital skills program — interactive sessions, hands-on practice and certification.",
    imagePaths: [
      "/images/events/ime-group/group.jpg",
      "/images/events/ime-group/session.jpg",
      "/images/events/ime-group/certification.jpg",
      "/images/events/ime-group/certification-female-participants.png",
    ],
  },
];

/* ─────────────────────────────────────────────
   Services (editorial list)
───────────────────────────────────────────── */
export const SERVICES: Service[] = [
  {
    id: "research",
    title: "AI for Research",
    description: "Research-grade AI systems and labs for scholars, institutions and independent researchers.",
    note: "Flagship discipline",
  },
  {
    id: "training",
    title: "AI Training",
    description: "Structured programs for researchers, students, teachers, managers and organisations.",
    note: "Hands-on, small groups",
  },
  {
    id: "automation",
    title: "AI Automation",
    description: "Workflow automations, document parsers and AI agents that free teams for deeper work.",
    note: "Start small, measure fast",
  },
  {
    id: "development",
    title: "AI Product Development",
    description: "Custom applications engineered for Nepali language, culture and regulation.",
    note: "Local first",
  },
  {
    id: "consulting",
    title: "AI Consulting",
    description: "Digital transformation roadmaps grounded in feasibility, risk and compliance.",
    note: "No vendor lock-in",
  },
];

/* ─────────────────────────────────────────────
   Training programs
───────────────────────────────────────────── */
export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "prog-researchers",
    title: "AI for Researchers & Scholars",
    description: "The complete craft of modern research with AI — from literature to citations.",
    target: "Academics, thesis writers & research teams",
    duration: "2-Week Intensive Lab",
    featured: true,
    syllabus: [
      "Literature search: Google Scholar, Semantic Scholar & Elicit",
      "Deep reading & synthesis: NotebookLM with Gemini, GPT & Claude",
      "Verification: research-grounded answer engines",
      "Knowledge base: Zotero, Obsidian & connected notes",
      "Quantitative analysis with explained results",
      "Qualitative analysis: AI-assisted thematic coding",
      "Academic writing: citation discipline and AI-aware drafting",
    ],
  },
  {
    id: "prog-managers",
    title: "AI for Managers & Executives",
    description: "Decision intelligence and workload automation for people who lead.",
    target: "Managers, team leads & operations staff",
    duration: "8 Sessions · 2 hrs each",
    syllabus: [
      "Map a real week into Do / Delegate / Automate / Eliminate",
      "A reusable manager prompt library",
      "'Ask my documents' knowledge workflow",
      "One-page AI Decision Briefs with evidence",
      "Security, bias and a one-page AI policy",
      "A 30-day AI implementation roadmap",
    ],
  },
  {
    id: "prog-students",
    title: "AI for Students & Learners",
    description: "AI literacy and hands-on building for the next generation.",
    target: "High-school, bachelors & lifelong learners",
    duration: "4-Week Bootcamp",
    syllabus: [
      "Prompt engineering fundamentals",
      "Building small AI prototypes",
      "AI for research, study and projects",
      "Ethics, bias and safe usage",
    ],
  },
  {
    id: "prog-professionals",
    title: "AI for Professionals & Creatives",
    description: "Practical AI for day-to-day professional output.",
    target: "Product managers, developers, marketers",
    duration: "1-Week Academy",
    syllabus: [
      "Automating daily admin work",
      "AI-driven content and research workflows",
      "Conversational business analysis",
      "Low-code / no-code build-ups",
    ],
  },
];

/* ─────────────────────────────────────────────
   Approach
───────────────────────────────────────────── */
export const APPROACH: ApproachPoint[] = [
  {
    id: "ap-01",
    index: "01",
    title: "Observe",
    description: "We sit inside your real workflow first — the literature you read, the reports you write, the decisions you wait on.",
  },
  {
    id: "ap-02",
    index: "02",
    title: "Build small",
    description: "We prototype the smallest system that delivers a measurable win, with evidence at every step.",
  },
  {
    id: "ap-03",
    index: "03",
    title: "Hand it over",
    description: "Deployed, documented and taught — a system your team owns and extends, not a black box.",
  },
];