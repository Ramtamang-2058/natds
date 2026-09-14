import {Check, NotebookPen} from "lucide-react";
import {motion} from "motion/react";
import {TRAINING_PROGRAMS, WHATSAPP_LINKS} from "@/data";

export function Training() {
  const featured = TRAINING_PROGRAMS.find((p) => p.featured);

  return (
    <section id="training" className="dark-section relative border-t border-border-ink py-24 lg:py-32">
      <div className="aurora-blob h-96 w-96 bottom-0 -left-40 bg-[radial-gradient(circle,rgba(57,230,196,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.6}}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-6">Programs</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-lumen sm:text-5xl">
            Learn with research-grade rigor.
          </h2>
          <p className="mt-4 text-base leading-relaxed soft-copy">
            Hands-on labs led by practitioners. The Researcher Program is our home course — everything else builds on it.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {featured && (
            <motion.article
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: "-40px"}}
              transition={{duration: 0.55}}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-aurora/40 bg-gradient-to-b from-aurora/15 via-ink-900 to-ink-900 p-7 lg:col-span-1 lg:row-span-2"
            >
              <span className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-aurora/20 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-aurora-soft">
                <span className="pulse-dot" style={{animation: "none"}} /> Flagship
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-aurora to-pulse text-ink-950">
                <NotebookPen className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-lumen">{featured.title}</h3>
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-text-ghost">
                {featured.target} · {featured.duration}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {featured.syllabus.slice(0, 5).map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm soft-copy">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pulse" />
                    {item}
                  </li>
                ))}
                <li className="flex items-start gap-2.5 text-sm text-aurora-soft">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-pulse" />
                  + {featured.syllabus.length - 5} more modules
                </li>
              </ul>
              <a
                href={WHATSAPP_LINKS.researcher}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-aurora to-pulse px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
              >
                Enroll as a researcher
              </a>
            </motion.article>
          )}

          {TRAINING_PROGRAMS.filter((p) => !p.featured).map((program, i) => (
            <motion.article
              key={program.id}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: "-40px"}}
              transition={{duration: 0.5, delay: (i % 3) * 0.07}}
              className="glass-card flex flex-col p-6"
            >
              <h3 className="font-display text-lg font-semibold text-lumen">{program.title}</h3>
              <p className="mt-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-text-ghost">
                {program.target} · {program.duration}
              </p>
              <ul className="mt-5 flex-1 space-y-2">
                {program.syllabus.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm soft-copy">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-aurora" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-aurora-soft transition-opacity hover:opacity-80"
              >
                Request syllabus
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}