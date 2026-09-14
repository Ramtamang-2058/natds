import {ArrowUpRight} from "lucide-react";
import {motion} from "motion/react";
import {TRAINING_PROGRAMS, WHATSAPP_LINKS} from "@/data";

export function Training() {
  return (
    <section id="training" className="hairline-t relative bg-paper-soft py-24 lg:py-32">
      <span className="section-index pointer-events-none absolute right-6 top-10 hidden text-[10rem] opacity-40 lg:block">
        04
      </span>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.7}}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-7">Programs</p>
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Trained with rigour, <em className="font-light italic text-accent">not just trended.</em>
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-line md:grid-cols-2">
          {TRAINING_PROGRAMS.map((program, i) => (
            <motion.article
              key={program.id}
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: "-40px"}}
              transition={{duration: 0.5, delay: (i % 2) * 0.06}}
              className="group relative bg-paper-cold p-7 lg:p-9"
            >
              {program.featured && (
                <span className="absolute right-7 top-7 border border-accent px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-accent">
                  Flagship
                </span>
              )}
              <span className="font-mono text-[0.62rem] text-ink-mute">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-ink lg:text-3xl">
                {program.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{program.description ?? program.syllabus[0]}</p>
              <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-ink-mute">
                {program.target} · {program.duration}
              </p>
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent"
              >
                Request syllabus
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}