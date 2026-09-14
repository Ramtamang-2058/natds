import {motion} from "motion/react";
import {PROCESS_STEPS, WHY_NATDS} from "@/data";

export function WhyNATDS() {
  return (
    <section id="why" className="lumen-section relative bg-lumen py-24 text-text-primary lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.6}}
          className="max-w-2xl"
        >
          <p className="eyebrow lumen mb-6">Why NATDS</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Small team. Serious standards.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            We don&apos;t sell AI hype. We build the smallest thing that works, and we hold every output to research-grade rigor.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_NATDS.map((reason, i) => (
            <motion.article
              key={reason.id}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: "-40px"}}
              transition={{duration: 0.5, delay: i * 0.07}}
              className="card-lumen p-6"
            >
              <span className="font-display text-3xl font-bold text-aurora-deep/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{reason.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-24">
          <p className="eyebrow lumen mb-8">How we work</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: "-40px"}}
                transition={{duration: 0.5, delay: i * 0.08}}
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-aurora-deep/30 bg-white font-display text-sm font-bold text-aurora-deep">
                    {step.index}
                  </span>
                  {i < PROCESS_STEPS.length - 1 && (
                    <span className="hidden h-px flex-1 bg-aurora-deep/20 lg:block" />
                  )}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}