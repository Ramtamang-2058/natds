import {TRAINING_COPY, TRAINING_PAGES, TRAINING_PROGRAMS, waLink} from "@/data";

export function Programs() {
  const featured = TRAINING_PROGRAMS.filter((p) => p.featured);
  const others = TRAINING_PROGRAMS.filter((p) => !p.featured);

  return (
    <section id="programs" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
          <h2 className="display-md text-[2.2rem] text-ink sm:text-[3rem] lg:col-span-7 lg:text-[3.6rem]">
            {TRAINING_COPY.heading}
          </h2>
          <p className="measure self-end text-[1.05rem] text-ink-2 lg:col-span-5">
            {TRAINING_COPY.introduction}
          </p>
        </div>

        <nav aria-label={TRAINING_COPY.directoryHeading} className="mt-10 border-y border-line py-6">
          <h3 className="display-sm text-lg">{TRAINING_COPY.directoryHeading}</h3>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
            {TRAINING_PAGES.map((page) => (
              <li key={page.slug}><a className="link text-ink" href={`/training/${page.slug}/`}>{page.title}</a></li>
            ))}
          </ul>
        </nav>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {featured.map((p) => (
            <article key={p.id} id={p.id} className="flex flex-col rounded-[4px] bg-surface p-7 sm:p-10">
              <p className="label">{p.duration}</p>
              <h3 className="display-md mt-3 text-[1.9rem] text-ink sm:text-[2.2rem]">{p.title}</h3>
              <p className="mt-3 text-[1.02rem] leading-[1.6] text-ink-2">{p.description}</p>
              <p className="mt-2 text-[0.92rem] text-ink-3">For {p.target.toLowerCase()}</p>

              <ol className="mt-8 flex-1 border-t border-line">
                {p.syllabus.map((item, i) => (
                  <li key={item} className="flex gap-4 border-b border-line py-3 text-[0.96rem] text-ink">
                    <span className="num w-6 shrink-0 text-[0.85rem] text-crimson">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>

              <div className="mt-8">
                <a
                  href={waLink(p.waText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ink"
                >
                  Ask about the next intake
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {others.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="flex flex-col justify-between gap-6 rounded-[4px] border border-line p-7 sm:flex-row sm:items-end"
            >
              <div>
                <p className="label">{p.duration}</p>
                <h3 className="display-sm mt-2 text-[1.35rem] text-ink">{p.title}</h3>
                <p className="mt-2 text-[0.96rem] leading-[1.55] text-ink-2">{p.description}</p>
              </div>
              <a
                href={waLink(p.waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="link shrink-0 text-[0.95rem] font-semibold text-ink"
              >
                Get the syllabus
              </a>
            </article>
          ))}
        </div>

        <p className="mt-12 border-t border-line pt-6 text-[0.98rem] text-ink-2">
          Already trained with us?{" "}
          <a className="link font-semibold text-ink" href="/verify/">
            Verify a certificate
          </a>
        </p>
      </div>
    </section>
  );
}
