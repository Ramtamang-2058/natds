import {ArrowUpRight} from "lucide-react";
import {motion} from "motion/react";
import {PRODUCTS, WHATSAPP_LINKS} from "@/data";

const manager = PRODUCTS[1];

export function ManagerAI() {
  return (
    <section id="managers" className="hairline-t bg-paper py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.7}}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-6">
            <p className="kicker mb-6">Live program</p>
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <h2 className="font-display text-4xl font-normal leading-[1.06] tracking-[-0.01em] sm:text-6xl">
                {manager.name}
              </h2>
              <span className="rounded-full border border-accent px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-accent">
                open for enrolment
              </span>
            </div>
            <p className="mt-4 font-display text-xl font-light italic text-accent">
              {manager.tagline}
            </p>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-ink-2">
              {manager.description}
            </p>
            <a
              href={WHATSAPP_LINKS.managers}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mt-9"
            >
              Book via WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="caption mt-4 text-ink-3">
              8 sessions · 2 hrs each · small groups
            </p>
          </div>

          <div className="lg:col-span-6">
            <p className="caption mb-5">What leaders get</p>
            <ul className="space-y-0">
              {manager.features.map((feature, i) => (
                <li
                  key={feature}
                  className="flex items-baseline gap-4 border-b border-line py-4"
                >
                  <span className="font-mono text-[0.6rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-ink-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}