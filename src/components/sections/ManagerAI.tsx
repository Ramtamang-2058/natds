import {ArrowUpRight} from "lucide-react";
import {motion} from "motion/react";
import {PRODUCTS, WHATSAPP_LINKS} from "@/data";

const manager = PRODUCTS[1];

export function ManagerAI() {
  return (
    <section id="managers" className="hairline-t hairline-t.on-dark relative bg-night py-24 text-paper lg:py-28 on-dark">
      <span className="section-index absolute right-6 top-10 hidden text-[8rem] lg:block">…</span>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.7}}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-6">
            <p className="eyebrow on-dark mb-7">Coming next</p>
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
                {manager.name}
              </h2>
              <span className="border border-paper/30 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-paper/70">
                coming soon
              </span>
            </div>
            <p className="mt-4 font-display text-xl font-light italic text-accent-bright">
              {manager.tagline}
            </p>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-paper/75">
              {manager.description}
            </p>
            <a
              href={WHATSAPP_LINKS.managers}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 border-b-2 border-accent-bright pb-1 text-sm font-medium text-paper transition-colors hover:text-accent-bright"
            >
              Join the waitlist
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="lg:col-span-6">
            <h3 className="caption on-dark mb-5">What leaders get</h3>
            <ul className="space-y-4">
              {manager.features.map((feature, i) => (
                <li
                  key={feature}
                  className="flex items-baseline gap-4 border-b border-paper/10 pb-4"
                >
                  <span className="font-mono text-[0.62rem] text-accent-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-paper/85">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}