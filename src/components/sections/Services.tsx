import {ArrowUpRight} from "lucide-react";
import {motion} from "motion/react";
import {SERVICES, WHATSAPP_LINKS} from "@/data";

export function Services() {
  return (
    <section id="services" className="hairline-t relative bg-paper py-24 lg:py-32">
      <span className="section-index pointer-events-none absolute right-6 top-10 hidden text-[10rem] lg:block">
        03
      </span>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.7}}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-4">
            <p className="eyebrow mb-7">Services</p>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Capabilities,
              <br />
              <em className="font-light italic text-accent">kept honest.</em>
            </h2>
          </div>

          <div className="lg:col-span-8">
            <ul className="hairline-t">
              {SERVICES.map((service, i) => (
                <motion.li
                  key={service.id}
                  initial={{opacity: 0, y: 12}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, margin: "-40px"}}
                  transition={{duration: 0.5, delay: i * 0.05}}
                  className="hairline-b group grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-4"
                >
                  <span className="font-mono text-[0.62rem] text-ink-mute sm:col-span-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-ink sm:col-span-3">
                    {service.title}
                  </h3>
                  <p className="text-[0.92rem] leading-relaxed text-ink-soft sm:col-span-5">
                    {service.description}
                  </p>
                  <div className="flex items-baseline justify-between gap-2 sm:col-span-2">
                    <span className="caption">{service.note}</span>
                    <a
                      href={WHATSAPP_LINKS.general}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent transition-transform hover:translate-x-0.5 hover:-translate-y-0.5"
                      aria-label={`Discuss ${service.title}`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}