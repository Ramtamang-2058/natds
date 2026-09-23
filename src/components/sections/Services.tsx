import {SERVICES} from "@/data";

export function Services() {
  return (
    <section id="services" className="bg-snow py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
          <h2 className="display-md text-[2.2rem] text-ink sm:text-[3rem] lg:col-span-6 lg:text-[3.6rem]">
            Four ways we work with you.
          </h2>
          <p className="measure self-end text-[1.05rem] text-ink-2 lg:col-span-5 lg:col-start-8">
            Most clients start with training or a single automation pilot, then
            add the rest once the first results are in.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 border-t-2 border-ink md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              className={`flex flex-col border-line py-8 md:px-6 ${
                i > 0 ? "border-t md:border-t-0" : ""
              } ${i % 2 === 1 ? "md:border-l" : ""} ${i >= 2 ? "md:border-t lg:border-t-0" : ""} ${
                i === 0 ? "md:pl-0" : ""
              } ${i === 2 ? "md:pl-0 lg:border-l lg:pl-6" : ""}`}
            >
              <h3 className="display-sm text-[1.4rem] text-ink">{s.title}</h3>
              <p className="mt-3 flex-1 text-[0.98rem] leading-[1.6] text-ink-2">{s.description}</p>
              <ul className="mt-6 space-y-1.5">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 text-[0.9rem] text-ink">
                    <span className="h-[5px] w-[5px] shrink-0 bg-crimson" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
