import {ArrowUpRight} from "lucide-react";
import {motion} from "motion/react";
import {MediaSlot} from "@/components/media/MediaSlot";
import {PRODUCTS, WHATSAPP_LINKS} from "@/data";

const manager = PRODUCTS[1];

export function ManagerAI() {
  return (
    <section id="managers" className="hairline-t bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.7}}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <p className="kicker mb-6">Manager AI · Live program, open for enrolment</p>
            <h2 className="font-display text-4xl font-normal leading-[1.06] tracking-[-0.01em] text-ink sm:text-6xl">
              {manager.name}
            </h2>
            <p className="mt-4 font-display text-xl font-light italic text-accent">
              {manager.tagline}
            </p>
            <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-ink-2">
              {manager.description}
            </p>
            <p className="caption mt-6 text-ink-3">
              8 sessions · 2 hrs each · small groups · Kathmandu &amp; live online
            </p>
          </div>

          <div className="flex flex-col justify-end gap-5 lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-line">
              <MediaSlot
                src="/images/events/ime-group/group.jpg"
                alt="NATDS small-group corporate training session"
                className="aspect-[4/3] h-full w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Syllabus */}
        <div className="mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl font-normal tracking-[-0.01em] text-ink lg:text-3xl">
              Course syllabus
            </h3>
            <p className="caption text-ink-3">delivered across 8 sessions</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {manager.features.map((feature, i) => (
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
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href={WHATSAPP_LINKS.managers}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            Book via WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="caption">
            8 sessions · 2 hrs each · small groups
          </p>
        </div>
      </div>
    </section>
  );
}