import {ArrowRight, BellRing, Check} from "lucide-react";
import {motion} from "motion/react";
import {PRODUCTS, WHATSAPP_LINKS} from "@/data";

const manager = PRODUCTS[1];

export function ManagerAI() {
  return (
    <section id="managers" className="lumen-section relative bg-lumen py-24 text-text-primary lg:py-32">
      <div className="aurora-blob h-72 w-72 -top-10 lg:-right-24 bg-[radial-gradient(circle,rgba(139,124,255,0.14),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-12">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.6}}
          className="lg:col-span-5"
        >
          <p className="eyebrow lumen mb-6">Coming next</p>
          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">Manager AI</h2>
            <span className="rounded-full border border-aurora-deep/30 bg-aurora/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-aurora-deep">
              Coming Soon
            </span>
          </div>
          <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg">{manager.description}</p>

          <div className="mt-8 space-y-3.5">
            {manager.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{opacity: 0, x: -12}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true, margin: "-40px"}}
                transition={{duration: 0.5, delay: i * 0.05}}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aurora-deep/15">
                  <Check className="h-3.5 w-3.5 text-aurora-deep" />
                </span>
                <span className="text-sm leading-relaxed text-text-secondary">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={WHATSAPP_LINKS.managers}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-3.5 text-sm font-semibold text-lumen shadow-[0_12px_36px_rgba(7,8,12,0.25)] transition-transform hover:scale-[1.03]"
            >
              <BellRing className="h-4 w-4 text-pulse-soft" />
              Join the waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-60px"}}
          transition={{duration: 0.7}}
          className="lg:col-span-7"
        >
          <div className="relative">
            <div className="absolute -inset-4 dashed-ring rounded-3xl opacity-40 border-aurora-deep/30" />
            <div className="card-lumen relative overflow-hidden rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-text-muted">Decision Brief · 01</p>
                  <p className="mt-1 font-display text-lg font-semibold text-text-primary">
                    Expand research support or skip this quarter?
                  </p>
                </div>
                <span className="rounded-full bg-pulse/15 px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-wide text-[#0E8A72]">
                  AI drafted
                </span>
              </div>

              <dl className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  {label: "Option A", value: "Fund program", note: "+34% output, +2.1x citations / mo"},
                  {label: "Option B", value: "Delay", note: "saves budget, stalls pipeline"},
                  {label: "Evidence", value: "12 sources", note: "both market & academic, verified"},
                ].map((card) => (
                  <div key={card.label} className="rounded-xl bg-surface-soft p-4">
                    <dt className="font-mono text-[0.65rem] uppercase tracking-wide text-text-muted">{card.label}</dt>
                    <dd className="mt-1 font-display text-base font-semibold text-text-primary">{card.value}</dd>
                    <dd className="mt-1 text-xs text-text-muted">{card.note}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 rounded-xl border border-border bg-surface p-4">
                <p className="font-mono text-[0.65rem] uppercase tracking-wide text-text-muted">Recommendation</p>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                  Proceed with a pilot cohort. Expected ROI within two quarters, tracked against three predefined research-output metrics.
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2 font-mono text-[0.68rem] text-[#0E8A72]">
                <span className="h-3 w-3 rounded-full bg-pulse" />
                system draft · reviewed by humans · report.pdf ready
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}