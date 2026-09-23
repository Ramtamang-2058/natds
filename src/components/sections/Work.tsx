import {MediaSlot} from "@/components/media/MediaSlot";
import {EVENTS} from "@/data";

export function Work() {
  return (
    <section id="work" className="bg-snow py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="display-md max-w-3xl text-[2.2rem] text-ink sm:text-[3rem] lg:text-[3.6rem]">
          Recent work, in the room.
        </h2>

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
      </div>
    </section>
  );
}
