import {MediaSlot} from "@/components/media/MediaSlot";
import {MomentReel} from "@/components/sections/MomentReel";
import {EVENTS, waLink} from "@/data";

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

        <div className="mt-20 border-t border-line pt-10 lg:mt-28">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="label text-ink-3">What we do</p>
              <h3 className="display-md mt-3 text-[2rem] text-ink sm:text-[2.5rem]">
                In the room. In the product. In the project.
              </h3>
              <p className="measure mt-4 text-[1rem] leading-[1.65] text-ink-2">
                The reel shows training. The work often continues after it: a tool to build, a rollout to support, a handover to make stick.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-8">
              <a href="/field-notes/ai-training-in-nepal.html" className="group border border-line bg-surface p-3 transition-colors hover:border-ink">
                <MediaSlot
                  src="/images/events/prakriti-resource-center/teaching-trainer-and-trainee.jpeg"
                  alt="Trainer working with a participant"
                  placeholderLabel="training/…"
                  className="aspect-[4/3] w-full rounded-[4px] transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                />
                <p className="label mt-4 text-ink-3">01 · Train</p>
                <p className="display-sm mt-1 text-[1.15rem] text-ink">Skills your team keeps</p>
                <p className="mt-2 text-[0.9rem] leading-[1.5] text-ink-2">Sessions built around real reports, decisions and workflows.</p>
              </a>

              <a href="/services/software-and-app-development.html" className="group border border-line bg-surface p-3 transition-colors hover:border-ink">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] border border-line bg-mist p-4">
                  <div className="h-1.5 w-1/3 bg-line" />
                  <div className="mt-3 grid grid-cols-5 gap-1.5">
                    <div className="col-span-3 h-10 bg-mist/60 ring-1 ring-line" />
                    <div className="col-span-2 space-y-1.5">
                      <div className="h-3 bg-line" />
                      <div className="h-3 w-4/5 bg-line" />
                      <div className="h-3 w-3/5 bg-line" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 h-8 w-8 border-2 border-crimson" />
                </div>
                <p className="label mt-4 text-ink-3">02 · Build</p>
                <p className="display-sm mt-1 text-[1.15rem] text-ink">Software &amp; mobile apps</p>
                <p className="mt-2 text-[0.9rem] leading-[1.5] text-ink-2">Prototypes, internal tools and AI automations with SAFAL AI.</p>
              </a>

              <a href={waLink("Hello NATDS! We'd like help with project support after training.")} target="_blank" rel="noopener" className="group border border-line bg-surface p-3 transition-colors hover:border-ink">
                <MediaSlot
                  src="/images/events/ime-group/certification-female-participants.png"
                  alt="Participant receiving a certificate"
                  placeholderLabel="support/…"
                  className="aspect-[4/3] w-full rounded-[4px] transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                />
                <p className="label mt-4 text-ink-3">03 · Support</p>
                <p className="display-sm mt-1 text-[1.15rem] text-ink">Project follow-through</p>
                <p className="mt-2 text-[0.9rem] leading-[1.5] text-ink-2">Scoping, documentation, handover and the checks that follow.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
