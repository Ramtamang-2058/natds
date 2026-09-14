import {motion} from "motion/react";
import {MediaSlot} from "@/components/media/MediaSlot";
import {EVENTS, WHATSAPP_LINKS} from "@/data";

export function Events() {
  return (
    <section id="events" className="hairline-t bg-paper-2 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.7}}
          className="max-w-2xl"
        >
          <p className="kicker mb-6">Field notes</p>
          <h2 className="font-display text-4xl font-normal leading-[1.06] tracking-[-0.01em] text-ink sm:text-6xl">
            Recent work &amp; events.
          </h2>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-ink-2">
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
                  <span className="font-mono text-[0.6rem] text-ink-3">
                    {String(e + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl font-normal tracking-[-0.01em] text-ink sm:text-4xl">
                    {event.title}
                  </h3>
                </div>
                <p className="caption">{event.dateLabel} · {event.location}</p>
              </div>
              <p className="mt-3 max-w-2xl text-[0.92rem] leading-relaxed text-ink-2">
                {event.note}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
                {event.imagePaths.map((src, i) =>
                  i === 0 ? (
                    <div
                      key={src}
                      className="col-span-2 row-span-2 overflow-hidden rounded-xl border border-line"
                    >
                      <MediaSlot
                        src={src}
                        alt={`${event.title} photograph ${i + 1}`}
                        placeholderLabel={`${event.id}/…`}
                        className="h-full w-full"
                      />
                    </div>
                  ) : (
                    <MediaSlot
                      key={src}
                      src={src}
                      alt={`${event.title} photograph ${i + 1}`}
                      placeholderLabel={`${event.id}/…`}
                      className="aspect-square h-full w-full rounded-xl border border-line"
                    />
                  )
                )}
                <a
                  href={WHATSAPP_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-ink-3/60 p-4 text-center transition-colors hover:border-accent md:flex"
                >
                  <span className="font-display text-lg font-medium italic text-ink-2">Join the next one</span>
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