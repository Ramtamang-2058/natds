import type {
  ChoiceReason,
  IndustryServed,
  MarqueeItem,
  NavLink,
  ProcessStep,
  Product,
  ResearchFocus,
  Service,
  Stat,
  Testimonial,
  TrainingProgram,
} from "./types";

export type {
  ChoiceReason,
  IndustryServed,
  MarqueeItem,
  NavLink,
  ProcessStep,
  Product,
  ResearchFocus,
  Service,
  Stat,
  Testimonial,
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
    "Hi NATDS! I'm interested in the AI for Managers program. Please share the details."
  )}`,
};

/* ─────────────────────────────────────────────
   Navigation
───────────────────────────────────────────── */
export const NAV_LINKS: NavLink[] = [
  { id: "research", label: "Researcher" },
  { id: "managers", label: "Managers" },
  { id: "services", label: "Services" },
  { id: "training", label: "Training" },
  { id: "why", label: "Why NATDS" },
  { id: "contact", label: "Contact" },
];

/* ─────────────────────────────────────────────
   Hero + stats
───────────────────────────────────────────── */
export const HERO_STATS: Stat[] = [
  { id: "st-01", value: "5+", label: "Research programs" },
  { id: "st-02", value: "100%", label: "Research-grade rigor" },
  { id: "st-03", value: "24/7", label: "AI systems support" },
  { id: "st-04", value: "0", label: "Jargon. Just results" },
];

export const HERO_MEDIA: { poster: string; video: string } = {
  poster: "/images/hero-poster.jpg",
  video: "/videos/hero.mp4",
};

/* ─────────────────────────────────────────────
   Marquee band
───────────────────────────────────────────── */
export const MARQUEE_ITEMS: MarqueeItem[] = [
  { id: "mq-01", label: "AI for Researchers" },
  { id: "mq-02", label: "Literature Mining" },
  { id: "mq-03", label: "Deep Synthesis" },
  { id: "mq-04", label: "Citation-Ready Analysis" },
  { id: "mq-05", label: "Reproducible Prompts" },
  { id: "mq-06", label: "AI for Managers" },
  { id: "mq-07", label: "Digital Transformation" },
  { id: "mq-08", label: "Research-Grade AI in Nepal" },
];

/* ─────────────────────────────────────────────
   Products
───────────────────────────────────────────── */
export const PRODUCTS: Product[] = [
  {
    id: "research-os",
    name: "NATDS Research OS",
    tagline: "The AI research lab for Nepali scholars",
    description:
      "A purpose-built AI research workspace for academics, thesis writers and research teams. Mine literature, synthesise evidence, run reproducible analyses and write citation-ready drafts — all grounded, verifiable and built for how research actually works.",
    status: "Active",
    ctaAvailable: true,
    features: [
      "Literature mining across Google Scholar, Semantic Scholar & Elicit",
      "Deep reading & synthesis with NotebookLM, Gemini, GPT & Claude",
      "Verification layers with research-grounded answer engines",
      "Citation discipline and AI-aware academic writing",
      "Quantitative & qualitative analysis pipelines with analyst explanations",
      "Connected knowledge bases: Zotero, Obsidian & mind-mapping",
    ],
    skills: [
      "Prompt engineering for research",
      "Systematic literature review",
      "Evidence verification",
      "Academic writing with AI",
      "Data analysis workflows",
      "Reproducible research",
    ],
  },
  {
    id: "manager-ai",
    name: "NATDS Manager AI",
    tagline: "Intelligent operations engine for teams",
    description:
      "Automate recurring workflows, surfacing decisions never waiting. A centralised AI operations layer for leaders who want to do less admin and more thinking.",
    status: "Coming Soon",
    ctaAvailable: false,
    features: [
      "One-page AI Decision Briefs with evidence and options",
      "'Ask my documents' knowledge workflow for teams",
      "Reusable manager prompt library built for your stack",
      "Automation of one real recurring process, rebuilt and tested live",
      "Security, data-leak and bias guardrails for your organisation",
      "30-day AI implementation roadmap",
    ],
    skills: [
      "Workflow automation",
      "Decision intelligence",
      "Team AI policy building",
      "AI-augmented leadership",
    ],
  },
];

/* ─────────────────────────────────────────────
   Services (adapted from SAFAL AI feature set)
───────────────────────────────────────────── */
export const SERVICES: Service[] = [
  {
    id: "research",
    title: "AI for Research",
    description:
      "Research-grade AI systems and labs for academics, institutions and independent scholars.",
    longDescription:
      "From AI-powered literature mining to reproducible analysis pipelines, we build the research infrastructure that turns raw scholarship into verifiable insight.",
  },
  {
    id: "training",
    title: "AI Training & Capacity Building",
    description:
      "Practical AI training for researchers, students, teachers, professionals and organisations.",
    longDescription:
      "Outcome-oriented labs and certifications that close the AI skills gap — built for Nepal's researchers, educators and workforce.",
  },
  {
    id: "automation",
    title: "AI Automation Solutions",
    description:
      "Automate repetitive workflows and lift productivity with intelligent systems.",
    longDescription:
      "Workflow automations, customer AI agents, document parsers and custom integrations that liberate teams for strategic work.",
  },
  {
    id: "development",
    title: "AI Product Development",
    description:
      "Custom AI applications engineered for local languages and local realities.",
    longDescription:
      "Production-ready AI built from the ground up — dataset collection, fine-tuning and premium interfaces tailored to Nepali language and regulatory targets.",
  },
  {
    id: "consulting",
    title: "AI Consulting",
    description:
      "Strategic AI roadmaps for institutions, enterprises and public bodies.",
    longDescription:
      "Digital transformation roadmaps grounded in technical architecture, feasibility, risk assessment and local data-compliance criteria.",
  },
];

/* ─────────────────────────────────────────────
   Why NATDS
───────────────────────────────────────────── */
export const WHY_NATDS: ChoiceReason[] = [
  {
    id: "why-research",
    title: "Researchers First",
    description:
      "Our products are engineered around how scholars actually work — literature, evidence, citations and reproducible rigor — not generic AI demos.",
  },
  {
    id: "why-local",
    title: "Nepal-Focused",
    description:
      "Built for Nepal's linguistic, cultural and institutional realities. Local language support, local compliance and local problems solved first.",
  },
  {
    id: "why-rigor",
    title: "Research-Grade Rigor",
    description:
      "Every system ships with verification layers, source grounding and audit trails — because promising tools must stand on evidence.",
  },
  {
    id: "why-minimal",
    title: "Minimal by Design",
    description:
      "No bloat, no noise. Clean interfaces that put the work first and let researchers focus on the discovery, not the dashboard.",
  },
];

/* ─────────────────────────────────────────────
   Training programs (researcher program primary)
───────────────────────────────────────────── */
export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "prog-researchers",
    title: "AI for Researchers & Scholars",
    target: "Academics, thesis writers & research teams",
    duration: "2-Week Intensive Lab",
    featured: true,
    syllabus: [
      "Literature search: Google Scholar, Semantic Scholar & Elicit",
      "Deep reading & synthesis: NotebookLM with Gemini, GPT & Claude",
      "Verification: Consensus and research-grounded answer engines",
      "Knowledge base: Zotero, Obsidian & mind-mapping for connected notes",
      "Quantitative analysis: clean data, run statistics, let AI explain results",
      "Qualitative analysis: AI-assisted thematic coding of interviews & surveys",
      "Academic writing: citation discipline and AI-aware draft quality",
    ],
  },
  {
    id: "prog-managers",
    title: "AI for Managers & Executives",
    target: "Managers, team leads & operations staff",
    duration: "8-Session Program (2 hrs each)",
    syllabus: [
      "Map a real week into Do / Delegate / Automate / Eliminate",
      "Build a reusable manager prompt library",
      "'Ask my documents': turn knowledge into answers",
      "One-page AI Decision Briefs with evidence and options",
      "One real recurring process rebuilt and tested live",
      "Security, bias & a one-page AI policy for your team",
      "Week-by-week 30-day AI Implementation Roadmap",
      "Tools lab: task boards, team chat (MCP) & native AI integrations",
    ],
  },
  {
    id: "prog-students",
    title: "AI for Students & Learners",
    target: "High-schoolers, Bachelors & lifelong learners",
    duration: "4-Week Practical Bootcamp",
    syllabus: [
      "Prompt engineering fundamentals and advanced frameworks",
      "Building mini AI prototypes with modern assistants",
      "Leveraging AI constructively for research, study & projects",
      "Ethics, bias and safe model boundaries",
    ],
  },
  {
    id: "prog-schools",
    title: "AI for Teachers & Educators",
    target: "School & college educators, academic directors",
    duration: "2-Week Certification",
    syllabus: [
      "Fundamentals of Generative AI in modern classrooms",
      "Designing rubrics and standard test sheets aligned to curriculum",
      "Deploying AI assistants for rapid lesson customisation",
      "Mitigating academic plagiarism risks constructively",
    ],
  },
  {
    id: "prog-professionals",
    title: "AI for Professionals & Creatives",
    target: "Product managers, devs, marketers & creatives",
    duration: "1-Week Intensive Academy",
    syllabus: [
      "Automating daily admin and calendar synthesis",
      "AI-driven content, research sorting and copywriting",
      "Analysing business data and synthesising trends conversationally",
      "Low-code / no-code workflow build-ups",
    ],
  },
  {
    id: "prog-orgs",
    title: "AI for Organizations & Public Bodies",
    target: "Enterprises, municipalities, INGO leadership",
    duration: "Custom Institutional Training",
    syllabus: [
      "Institutional AI readiness audits",
      "Mapping high-priority automation workloads safely",
      "Enforcing guidelines and document security boundaries",
      "Strategic change execution and upskilling strategies",
    ],
  },
];

/* ─────────────────────────────────────────────
   Research focus areas
───────────────────────────────────────────── */
export const RESEARCH_FOCUS: ResearchFocus[] = [
  {
    id: "rf-edu",
    title: "AI in Education & Scholarship",
    description: "Research-grade AI tools that augment learning and research outcomes in diverse Nepali institutional settings.",
  },
  {
    id: "rf-nlp",
    title: "Local Language AI",
    description: "NLP models tuned for Nepali and regional dialects — text classification, translation and document intelligence.",
  },
  {
    id: "rf-gov",
    title: "AI for Governance",
    description: "Safe, efficient language modules for Nepali administrative workflows and public service delivery.",
  },
  {
    id: "rf-health",
    title: "AI for Health & Society",
    description: "Auxiliary diagnostics and evidence-based public health AI that expands access where infrastructure is thin.",
  },
];

/* ─────────────────────────────────────────────
   How we work
───────────────────────────────────────────── */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "ps-01",
    index: "01",
    title: "Observe",
    description: "We start embedded in your real workflow — the literature you read, the reports you write, the decisions you wait on.",
  },
  {
    id: "ps-02",
    index: "02",
    title: "Orient",
    description: "We map where AI earns its place, then prototype the smallest system that delivers a measurable win.",
  },
  {
    id: "ps-03",
    index: "03",
    title: "Decide",
    description: "You test it against your own rigour bars. Clear evidence, clear guardrails, no vendor lock-in.",
  },
  {
    id: "ps-04",
    index: "04",
    title: "Act",
    description: "We deploy, train your people, and hand over systems your team can own and extend.",
  },
];

/* ─────────────────────────────────────────────
   Industries served
───────────────────────────────────────────── */
export const INDUSTRIES: IndustryServed[] = [
  {
    id: "ind-research",
    title: "Academia & Research",
    description: "Universities, research institutes and independent scholars seeking research-grade AI infrastructure.",
  },
  {
    id: "ind-business",
    title: "Business & Startups",
    description: "SMEs and ventures automating operations, decisions and customer engagement with AI.",
  },
  {
    id: "ind-gov",
    title: "Government & Public Bodies",
    description: "Municipalities and agencies digitising documents, services and citizen support in local languages.",
  },
  {
    id: "ind-ngo",
    title: "NGOs & Development",
    description: "Organisations synthesising field data and running multilingual campaigns with rapid qualitative analysis.",
  },
];

/* ─────────────────────────────────────────────
   Testimonials (pending content — update when real)
───────────────────────────────────────────── */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "ts-01",
    quote: "Pending testimonial — replace with a real researcher or client story.",
    author: "Your Name",
    role: "Role at Organisation",
    initial: "N",
  },
];