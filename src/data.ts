import type {
  ApproachPoint,
  EventItem,
  FieldNote,
  HeroMedia,
  NavLink,
  Sector,
  Service,
  TrainingProgram,
} from "./types";

export type {
  ApproachPoint,
  EventItem,
  FieldNote,
  HeroMedia,
  NavLink,
  Sector,
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

/** Build a wa.me link with a pre-filled message. */
export const waLink = (text: string) =>
  `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const WHATSAPP_LINKS = {
  general: waLink("Hello NATDS! I'd like to talk about AI for my organisation."),
};

/* ─────────────────────────────────────────────
   Navigation
───────────────────────────────────────────── */
export const NAV_LINKS: NavLink[] = [
  { id: "sectors", label: "Sectors" },
  { id: "services", label: "Services" },
  { id: "programs", label: "Programs" },
  { id: "work", label: "Work" },
  { id: "notes", label: "Notes" },
  { id: "contact", label: "Contact" },
];

/* ─────────────────────────────────────────────
   Hero
───────────────────────────────────────────── */
export const HERO_MEDIA: HeroMedia = {
  poster: "/images/events/prakriti-resource-center/trainer-back-right.jpeg",
  video: "/videos/hero.mp4",
  videoActive: false,
};

/** Names shown in the "worked with" strip — real engagements only. */
export const CLIENTS: string[] = [
  "IME Group",
  "Prakriti Resource Center",
  "Hydropower suppliers",
  "Researchers & universities",
];

/* ─────────────────────────────────────────────
   Sectors (interactive switcher)
───────────────────────────────────────────── */
export const SECTORS: Sector[] = [
  {
    id: "energy",
    name: "Hydropower & energy",
    headline: "Tenders, plant logs and supplier quotes, handled in hours.",
    summary:
      "Hydropower developers and equipment suppliers run on documents: BOQs, specs, O&M manuals, compliance filings. We build tools that read them, compare them and draft from them, so engineers spend their time on the plant.",
    useCases: [
      { title: "Tender and BOQ comparison", detail: "Line up supplier quotes against the spec sheet and flag gaps, price outliers and missing items." },
      { title: "Generation and outage reports", detail: "Turn daily logs and spreadsheets into the weekly report management actually reads." },
      { title: "Ask-the-manual assistant", detail: "O&M staff ask questions of turbine manuals and SOPs, and get answers with page references." },
      { title: "Compliance drafting", detail: "First drafts of EIA summaries, licence correspondence and progress reports from your own records." },
    ],
    proof: "Working with hydropower equipment suppliers in Nepal.",
    engagement: "Automation pilot, 4 to 6 weeks",
    waText: "Hi NATDS! I work in hydropower / energy and want to discuss AI for our documents and reporting.",
  },
  {
    id: "finance",
    name: "Banking & finance",
    headline: "Faster customer answers, cleaner internal reporting.",
    summary:
      "Banks, remittance and insurance teams deal with policy circulars, KYC paperwork and repetitive customer questions. We train staff to use AI safely and build assistants that stay inside your policies.",
    useCases: [
      { title: "Staff AI upskilling", detail: "Hands-on training for branch, operations and head-office teams, with certification." },
      { title: "Policy and circular Q&A", detail: "Search every NRB circular and internal policy in plain Nepali or English." },
      { title: "Document intake", detail: "Pull fields out of forms and scanned documents into your systems, with a human check." },
      { title: "Report drafting", detail: "Monthly MIS and board summaries drafted from your own numbers." },
    ],
    proof: "Trained the IME Group team, with certification.",
    engagement: "Team training plus one workflow pilot",
    waText: "Hi NATDS! I'm from a bank / finance company and want to discuss AI training or automation.",
  },
  {
    id: "development",
    name: "NGOs & development",
    headline: "Less time on donor reports, more time in the field.",
    summary:
      "Development organisations write constantly: proposals, donor reports, case stories, M&E summaries. We teach teams to draft faster without losing their voice, and to make sense of survey data.",
    useCases: [
      { title: "Proposal and donor reports", detail: "Structured drafting workflows that reuse your past reports and logframes." },
      { title: "Field survey analysis", detail: "Clean, code and summarise survey responses, including open-ended answers." },
      { title: "Knowledge base", detail: "One searchable place for project documents, so new staff find answers on day one." },
      { title: "Digital skills training", detail: "Practical sessions for programme and admin staff, at your office." },
    ],
    proof: "Trained the Prakriti Resource Center team on-site.",
    engagement: "On-site training, 1 to 3 days",
    waText: "Hi NATDS! I'm from an NGO / development organisation and want to discuss AI training.",
  },
  {
    id: "research",
    name: "Research & academia",
    headline: "From literature search to a citation-ready draft.",
    summary:
      "Thesis writers, faculty and research teams use AI badly when nobody shows them how. Our Researcher Program teaches literature mining, synthesis, analysis and honest citation as a method.",
    useCases: [
      { title: "Systematic literature review", detail: "Search, screen and map a field with Semantic Scholar, Elicit and Google Scholar." },
      { title: "Deep reading and synthesis", detail: "Work across dozens of papers with NotebookLM and frontier models, every claim sourced." },
      { title: "Analysis pipelines", detail: "Quantitative and qualitative analysis with results you can explain to a committee." },
      { title: "Writing with citations", detail: "AI-aware academic writing that survives peer review and plagiarism checks." },
    ],
    engagement: "Researcher Program, 2-week intensive",
    waText: "Hi NATDS! I'm interested in the Researcher Program. Please share the details.",
  },
  {
    id: "trade",
    name: "Trade & supply",
    headline: "Orders, stock and quotations without the copy-paste.",
    summary:
      "Distributors, manufacturers and suppliers lose hours moving numbers between WhatsApp, Excel and email. We automate the repetitive parts and give owners a clear view of the business.",
    useCases: [
      { title: "Quotation generator", detail: "Produce accurate quotes from your price list in minutes, in your format." },
      { title: "Order and stock sheets", detail: "Keep inventory and order sheets in sync automatically." },
      { title: "Sales dashboards", detail: "A weekly view of what sold, what's late and who owes what." },
      { title: "Customer replies", detail: "Draft replies to common enquiries, reviewed by your team before sending." },
    ],
    engagement: "Automation pilot, 3 to 4 weeks",
    waText: "Hi NATDS! We're a trading / supply business and want to automate orders, stock or quotations.",
  },
];

/* ─────────────────────────────────────────────
   Services
───────────────────────────────────────────── */
export const SERVICES: Service[] = [
  {
    id: "training",
    title: "Team training",
    description: "Hands-on AI sessions for your staff, built around the documents and tasks they already handle.",
    deliverables: ["On-site or online", "Certificates", "Prompt library to keep"],
  },
  {
    id: "automation",
    title: "Workflow automation",
    description: "We pick one slow, repetitive workflow, automate it, and measure the hours saved before doing the next.",
    deliverables: ["Pilot in weeks", "Measured results", "Your team trained to run it"],
  },
  {
    id: "products",
    title: "Custom AI tools",
    description: "Document Q&A, report generators and assistants that work in Nepali and English, on your data.",
    deliverables: ["Built for Nepali context", "Runs on your accounts", "Documented handover"],
  },
  {
    id: "consulting",
    title: "AI strategy & policy",
    description: "Where AI fits in your organisation, what it will cost, and a one-page policy your staff can follow.",
    deliverables: ["Feasibility review", "Risk and data policy", "90-day roadmap"],
  },
];

/* ─────────────────────────────────────────────
   Training programs
───────────────────────────────────────────── */
export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: "prog-managers",
    title: "AI for Managers & Executives",
    description: "Decision intelligence and workload automation for people who lead teams. No hype, no vendor lock-in.",
    target: "Managers, team leads and operations staff",
    duration: "8 sessions, 2 hours each",
    featured: true,
    syllabus: [
      "Map a real week into do, delegate, automate, eliminate",
      "Build a reusable manager prompt library",
      "Set up an 'ask my documents' knowledge workflow",
      "Write one-page decision briefs with evidence",
      "Security, bias and a one-page AI policy",
      "Leave with a 30-day implementation roadmap",
    ],
    waText: "Hi NATDS! I'm interested in the AI for Managers & Executives course (8 sessions, 2 hrs each). Please share the details.",
  },
  {
    id: "prog-researchers",
    title: "Researcher Program",
    description: "AI methods for people who do real research: literature, synthesis, analysis and citation-aware writing.",
    target: "Academics, thesis writers and research teams",
    duration: "2-week intensive",
    featured: true,
    syllabus: [
      "Literature search with Google Scholar, Semantic Scholar and Elicit",
      "Deep reading and synthesis with NotebookLM, Gemini, GPT and Claude",
      "Verification with research-grounded answer engines",
      "A knowledge base in Zotero and Obsidian",
      "Quantitative analysis with explained results",
      "Qualitative analysis and AI-assisted thematic coding",
      "Academic writing with citation discipline",
    ],
    waText: "Hi NATDS! I'm interested in the Researcher Program. Please share the details.",
  },
  {
    id: "prog-professionals",
    title: "AI for Professionals",
    description: "Practical AI for daily output: admin, content, analysis and low-code tools.",
    target: "Engineers, marketers, analysts and admin staff",
    duration: "1-week academy",
    syllabus: [
      "Automating daily admin work",
      "AI-driven content and research workflows",
      "Conversational data analysis",
      "Low-code and no-code builds",
    ],
    waText: "Hi NATDS! I'm interested in the AI for Professionals program. Please share the syllabus.",
  },
  {
    id: "prog-students",
    title: "AI for Students",
    description: "AI literacy and hands-on building for the next generation.",
    target: "High-school, bachelor's and lifelong learners",
    duration: "4-week bootcamp",
    syllabus: [
      "Prompting fundamentals",
      "Building small AI prototypes",
      "AI for study and projects",
      "Ethics, bias and safe use",
    ],
    waText: "Hi NATDS! I'm interested in the AI for Students program. Please share the syllabus.",
  },
];

/* ─────────────────────────────────────────────
   Recent work (photo gallery)
   → drop images into public/images/events/<slug>/
   and update imagePaths here. See AGENTS.md.
───────────────────────────────────────────── */
export const EVENTS: EventItem[] = [
  {
    id: "ime-group",
    title: "IME Group",
    sector: "Banking & finance",
    location: "Corporate AI upskilling, Kathmandu",
    note: "An intensive AI and digital skills program for the IME Group team: interactive sessions, hands-on practice on real work tasks, and certification for every participant.",
    imagePaths: [
      "/images/events/ime-group/group-image.png",
      "/images/events/ime-group/session.jpg",
      "/images/events/ime-group/certification.jpg",
      "/images/events/ime-group/training-back-view.png",
    ],
  },
  {
    id: "prakriti-resource-center",
    title: "Prakriti Resource Center",
    sector: "NGOs & development",
    location: "On-site team training",
    note: "AI and digital skills training at the Prakriti Resource Center office: guided sessions, hands-on practice and group problem-solving around the team's own reports.",
    imagePaths: [
      "/images/events/prakriti-resource-center/training-front-right.jpeg",
      "/images/events/prakriti-resource-center/teaching-trainer-and-trainee.jpeg",
      "/images/events/prakriti-resource-center/trainees-reading-board.jpeg",
      "/images/events/prakriti-resource-center/trainee-asking-question.jpeg",
    ],
  },
];

/* ─────────────────────────────────────────────
   Field Notes (editorial SEO snippets)
   → each note links to a static article at
     public/field-notes/<slug>.html — update both.
───────────────────────────────────────────── */
export const FIELD_NOTES: FieldNote[] = [
  {
    id: "note-managers-nepal",
    slug: "ai-for-managers-nepal",
    title: "AI for Managers in Nepal: A practical first week",
    date: "Sep 2026",
    excerpt:
      "What 'AI for managers' actually means at a Kathmandu company — where a manager's week gives up hours first, and how an 8-session program maps onto it.",
    keywords: ["ai for managers", "manager ai", "ai for managers nepal", "ai training kathmandu"],
  },
  {
    id: "note-business-kathmandu",
    slug: "ai-tools-for-business-kathmandu",
    title: "AI tools for business in Kathmandu: honest picks",
    date: "Aug 2026",
    excerpt:
      "The tools Nepali businesses actually adopt — document Q&A, meeting summaries, and decision briefs — and which ones quietly fail in a low-data environment.",
    keywords: ["ai for business", "ai tools kathmandu", "ai at kathmandu", "ai automation nepal"],
  },
  {
    id: "note-research-nepal",
    slug: "ai-for-researchers-nepal",
    title: "AI for researchers in Nepal: from literature to citations",
    date: "Aug 2026",
    excerpt:
      "How NATDS's Researcher Program teaches literature mining, synthesis and citation-aware writing to academics and thesis writers across Nepal.",
    keywords: ["ai for researchers", "ai research nepal", "researcher program", "research ai kathmandu"],
  },
  {
    id: "note-skill-gap",
    slug: "ai-skill-gap-nepal",
    title: "The AI skill gap in Nepal is an operations gap",
    date: "Jul 2026",
    excerpt:
      "Most Nepali organisations don't lack AI tools — they lack the workflows to use them. Why training beats tooling, and where to start.",
    keywords: ["ai training nepal", "ai upskilling", "digital skills kathmandu", "ai adoption nepal"],
  },
];

/* ─────────────────────────────────────────────
   Approach (how an engagement runs — a real sequence)
───────────────────────────────────────────── */
export const APPROACH: ApproachPoint[] = [
  {
    id: "ap-map",
    title: "Map the work",
    duration: "Week 1",
    description: "We sit with your team and list where the hours go: the reports, the documents, the waiting.",
  },
  {
    id: "ap-pilot",
    title: "Pilot one workflow",
    duration: "Weeks 2–4",
    description: "We automate the single workflow with the clearest payoff and measure the time it saves.",
  },
  {
    id: "ap-train",
    title: "Train the team",
    duration: "Alongside",
    description: "Your people learn to run it, fix it and extend it, in sessions built on their own work.",
  },
  {
    id: "ap-handover",
    title: "Hand over",
    duration: "Week 5 onward",
    description: "Documented, on your accounts, yours to keep. We stay on call while it beds in.",
  },
];
