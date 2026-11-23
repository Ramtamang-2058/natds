import {MediaSlot} from "@/components/media/MediaSlot";
import {MomentReel} from "@/components/sections/MomentReel";
import {EVENTS, waLink} from "@/data";

const WAYS = [
  {
    title: "Train the room",
    body: "Short, practical sessions built around your reports, decisions and deadlines — not a generic demo.",
    href: "/field-notes/ai-training-in-nepal.html",
  },
  {
    title: "Build the tool",
    body: "When a workflow deserves software, we scope a small prototype first, then build with SAFAL AI.",
    href: "/services/software-and-app-development.html",
  },
  {
    title: "Stay for the handover",
    body: "Documentation, rollout checks and a short support window so the work keeps moving after we leave.",
    href: waLink("Hello NATDS! We'd like help with project support after training."),
  },
];

export function Work() {
  return (
    <section id="work" className="bg-snow py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="display-md max-w-3xl text-[2.2rem] text-ink sm:text-[3rem] lg:text-[3.6rem]">
          Recent work, in the room.
        </h2>

        <MomentReel />

        <div className="mt-14 space-y-20 lg:space-y-28">
          {EVENTS.map((event, e) => {
            const [lead, ...rest] = event.imagePaths;
            const flip = e % 2 === 1;
            return (
              <article key={event.id} className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                <div className={`lg:col-span-4 ${flip ? "lg:order-2 lg:col-start-9" : ""}`}>
                  <p className="label">{event.sector}</p>
                  <h3 className="display-md mt-2 text-[2rem] text-ink sm:text-[2.5rem]">{event.title}</h3>
                  <p className="mt-1 text-[0.95rem] text-ink-3">{event.location}</p>
                  <p className="mt-5 text-[1.02rem] leading-[1.65] text-ink-2">{event.note}</p>
                </div>

                <div className={`grid grid-cols-3 gap-2 sm:gap-3 lg:col-span-8 ${flip ? "lg:order-1" : ""}`}>
                  <MediaSlot
                    src={lead}
                    alt={`${event.title}, training photograph 1`}
                    placeholderLabel={`${event.id}/…`}
                    className="col-span-3 aspect-[16/9] w-full rounded-[4px]"
                  />
                  {rest.map((src, i) => (
                    <MediaSlot
                      key={src}
                      src={src}
                      alt={`${event.title}, training photograph ${i + 2}`}
                      placeholderLabel={`${event.id}/…`}
                      className="aspect-square w-full rounded-[4px]"
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-28 border-t border-line pt-12 lg:mt-36">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="label text-ink-3">What we do</p>
              <h3 className="display-md mt-4 max-w-xl text-[2.2rem] text-ink sm:text-[3rem]">
                Three ways in.
              </h3>
              <p className="measure mt-5 text-[1rem] leading-[1.7] text-ink-2">
                Training is often the first conversation, rarely the last one.
              </p>

              <div className="mt-12 divide-y divide-line">
                {WAYS.map((way, i) => (
                  <a
                    key={way.title}
                    href={way.href}
                    target={way.href.startsWith("http") ? "_blank" : undefined}
                    rel={way.href.startsWith("http") ? "noopener" : undefined}
                    className="group grid grid-cols-[2.5rem_1fr_1.5rem] gap-4 py-7 sm:grid-cols-[3rem_1fr_2rem] sm:gap-8"
                  >
                    <span className="num pt-1 text-[0.9rem] text-ink-3">0{i + 1}</span>
                    <div>
                      <p className="display-sm text-[1.5rem] text-ink sm:text-[1.8rem]">{way.title}</p>
                      <p className="mt-2 max-w-lg text-[0.95rem] leading-[1.6] text-ink-2">{way.body}</p>
                    </div>
                    <span aria-hidden="true" className="pt-2 text-ink-3 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <figure className="self-end lg:col-span-4 lg:col-start-9">
              <MediaSlot
                src="/images/events/prakriti-resource-center/teaching-trainer-and-trainee.jpeg"
                alt="Trainer working with a participant at Prakriti Resource Center"
                placeholderLabel="training/…"
                className="aspect-[3/4] w-full rounded-[4px]"
              />
              <figcaption className="mt-4 max-w-xs text-[0.85rem] leading-[1.6] text-ink-3">
                A session at Prakriti Resource Center. The next step is often a tool, not another slide.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
