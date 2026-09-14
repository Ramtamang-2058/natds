import {ArrowUpRight} from "lucide-react";
import {motion} from "motion/react";
import {MediaSlot} from "@/components/media/MediaSlot";
import {PRODUCTS, WHATSAPP_LINKS} from "@/data";

const research = PRODUCTS[0];

export function ResearcherProgram() {
  return (
    <section id="research" className="hairline-t bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.7}}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <p className="kicker mb-6">Flagship · Active</p>
            <h2 className="font-display text-4xl font-normal leading-[1.06] tracking-[-0.01em] text-ink sm:text-6xl">
              {research.name}
            </h2>
            <p className="mt-4 font-display text-xl font-light italic text-accent">
              {research.tagline}
            </p>
            <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-ink-2">
              {research.description}
            </p>
          </div>

          <div className="flex flex-col justify-end gap-5 lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-line">
              <MediaSlot
                src="/images/events/ime-group/session.jpg"
                alt="NATDS Researcher Program training session"
                className="aspect-[4/3] h-full w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {research.features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{opacity: 0, y: 12}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: "-40px"}}
              transition={{duration: 0.5, delay: (i % 3) * 0.06}}
              className="card"
            >
              <span className="font-mono text-[0.6rem] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-2">{feature}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href={WHATSAPP_LINKS.researcher}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            Apply via WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="caption">
            2-week intensive · small groups · Kathmandu &amp; online
          </p>
        </div>
      </div>
    </section>
  );
}