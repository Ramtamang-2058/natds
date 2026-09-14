import {motion} from "motion/react";
import {APPROACH} from "@/data";

export function Approach() {
  return (
    <section className="hairline-t relative bg-paper py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.7}}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-3">
            <p className="eyebrow mt-1">Approach</p>
          </div>
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {APPROACH.map((step) => (
                <div key={step.id}>
                  <span className="font-display text-4xl font-light italic text-accent/70">
                    {step.index}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}