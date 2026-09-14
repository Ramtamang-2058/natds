import {motion} from "motion/react";
import {MediaSlot} from "@/components/media/MediaSlot";
import {EVENTS} from "@/data";

export function Events() {
  return (
    <section id="events" className="hairline-t relative bg-paper-soft py-24 lg:py-32">
      <span className="section-index pointer-events-none absolute right-6 top-10 hidden text-[10rem] opacity-40 lg:block">
        02
      </span>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.7}}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-7">Field notes</p>
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Recent work &amp; events.
          </h2>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-ink-soft">
            Researchers, students and teams in practice — documentation, field research and hands-on labs across Nepal.
          </p>
        </motion.div>

        <div className="mt-16 space-y-20">
          {EVENTS.map((event, e) => (
            <motion.article
              key={event.id}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: "-60px"}}
              transition={{duration: 0.7}}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <span className="font-mono text-[0.62rem] text-ink-mute">
                    {String(e + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                    {event.title}
                  </h3>
                </div>
                <p className="caption">{event.dateLabel} · {event.location}</p>
              </div>
              <p className="mt-3 max-w-2xl text-[0.92rem] leading-relaxed text-ink-soft">
                {event.note}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
                {event.imagePaths.map((src, i) => (
                  <MediaSlot
                    key={src}
                    src={src}
                    alt={`${event.title} photograph ${i + 1}`}
                    placeholderLabel={`${event.id}/…`}
                    className={
                      i === 0
                        ? "col-span-2 row-span-2 aspect-square h-full w-full md:aspect-[4/3]"
                        : "aspect-square h-full w-full"
                    }
                  />
                ))}
                <a
                  href="https://wa.me/9779818488715?text=Hi%20NATDS!%20I%20saw%20your%20events."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden aspect-square flex-col items-center justify-center gap-2 border border-dashed border-ink-faint/60 p-4 text-center transition-colors hover:border-accent md:flex"
                >
                  <span className="font-display text-lg font-medium italic text-ink-soft">Join the next one</span>
                  <span className="caption">message us on WhatsApp</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}