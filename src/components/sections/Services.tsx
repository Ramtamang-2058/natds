import {ArrowUpRight, Bot, Brain, BriefcaseBusiness, FlaskConical, GraduationCap} from "lucide-react";
import {motion} from "motion/react";
import {SERVICES, WHATSAPP_LINKS} from "@/data";

const ICONS = [FlaskConical, GraduationCap, Bot, Brain, BriefcaseBusiness];

export function Services() {
  return (
    <section id="services" className="dark-section relative border-t border-border-ink py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.6}}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-6">What we do</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-lumen sm:text-5xl">
            Services, not silver bullets.
          </h2>
          <p className="mt-4 text-base leading-relaxed soft-copy">
            Every engagement starts with your real workflow and ends with something your team can own.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i] ?? FlaskConical;
            return (
              <motion.article
                key={service.id}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: "-40px"}}
                transition={{duration: 0.55, delay: (i % 3) * 0.08}}
                className="glass-card group flex flex-col p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-aurora/25 to-pulse/10 transition-transform group-hover:scale-105">
                  <Icon className="h-6 w-6 text-aurora-soft" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-lumen">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed soft-copy">{service.description}</p>
                <p className="mt-3 text-sm leading-relaxed text-text-ghost">{service.longDescription}</p>
                <a
                  href={WHATSAPP_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-aurora-soft transition-opacity group-hover:opacity-80"
                >
                  Discuss this
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.article>
            );
          })}

          <motion.article
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-40px"}}
            transition={{duration: 0.55, delay: 0.16}}
            className="flex flex-col justify-center rounded-xl border border-dashed border-aurora/30 p-6 text-center"
          >
            <p className="font-display text-lg font-semibold text-lumen">Not sure where to start?</p>
            <p className="mt-2 text-sm soft-copy">Message us on WhatsApp for a free 20-minute mapping call.</p>
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aurora to-pulse px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
            >
              Book a free call
            </a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}