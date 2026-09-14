import {ArrowRight, Check, Cpu, Database, FileSearch, Library} from "lucide-react";
import {motion} from "motion/react";
import {PRODUCTS, WHATSAPP_LINKS} from "@/data";

const research = PRODUCTS[0];

function ConsoleLine({type, text}: {type: "cmd" | "out" | "res"; text: string}) {
  return (
    <div className="flex gap-3 font-mono text-[0.72rem] leading-relaxed">
      <span className="shrink-0 select-none">
        {type === "cmd" ? (
          <span className="text-pulse">natds:~$</span>
        ) : type === "res" ? (
          <span className="text-aurora-soft">◆</span>
        ) : (
          <span className="text-text-ghost">·</span>
        )}
      </span>
      <span className={type === "res" ? "text-lumen" : type === "cmd" ? "text-text-ghost" : "soft-copy"}>
        {text}
      </span>
    </div>
  );
}

export function ResearcherProgram() {
  return (
    <section id="research" className="dark-section relative py-24 lg:py-32">
      <div className="aurora-blob h-80 w-80 top-16 -left-32 bg-[radial-gradient(circle,rgba(169,155,255,0.22),transparent_70%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
            transition={{duration: 0.6}}
          >
            <p className="eyebrow mb-6">Flagship · Active</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-lumen sm:text-5xl">
              The Researcher Program
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed soft-copy sm:text-lg">{research.description}</p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {research.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{opacity: 0, y: 16}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: "-40px"}}
                transition={{duration: 0.5, delay: i * 0.05}}
                className="glass-card flex items-start gap-3 p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aurora/15">
                  <Check className="h-3.5 w-3.5 text-aurora-soft" />
                </span>
                <span className="text-sm leading-relaxed soft-copy">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {research.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border-ink px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] soft-copy"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_LINKS.researcher}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-aurora to-pulse px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
            >
              Apply via WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="flex items-center gap-2 font-mono text-xs soft-copy">
              <span className="pulse-dot" />
              2-week intensive · 7 modules
            </span>
          </div>
        </div>

        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-60px"}}
          transition={{duration: 0.7}}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-4 dashed-ring rounded-3xl opacity-50" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 backdrop-blur">
              <div className="flex items-center gap-2 border-b border-border-ink px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-pulse/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-aurora/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
                <span className="ml-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-text-ghost">
                  natds · research console
                </span>
              </div>
              <div className="space-y-2.5 p-5">
                <ConsoleLine type="cmd" text="natds research --topic 'education equity in Nepal'" />
                <ConsoleLine type="out" text="Chaining: scholar-search → synthesis → verification" />
                <ConsoleLine type="res" text="Found 1,284 sources · ranked 12, verifiable, cited" />
                <ConsoleLine type="cmd" text="ask --grounded 'What interventions raise outcomes?'" />
                <ConsoleLine type="res" text="Primary: teacher support via AI-assisted planning." />
                <ConsoleLine type="res" text="Sources: J. Educ. Policy (2024); NPR Eval. Unit (2025)." />
                <ConsoleLine type="cmd" text="export --citation bibtex" />
                <ConsoleLine type="res" text="wrote /summary.md · /references.bib · audit-log.json" />
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 hidden items-center gap-2 rounded-full border border-border-ink bg-ink-800 px-4 py-2 font-mono text-[0.65rem] text-pulse-soft backdrop-blur sm:flex float-bob">
              <Library className="h-3.5 w-3.5 text-aurora" /> grounded · verifiable
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-24 flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-4 sm:px-6">
        {[
          {icon: FileSearch, label: "Literature mining"},
          {icon: Database, label: "Evidence verification"},
          {icon: Cpu, label: "Reproducible pipelines"},
        ].map((item) => (
          <span key={item.label} className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.12em] soft-copy">
            <item.icon className="h-4 w-4 text-aurora" />
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}