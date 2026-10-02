import {BRAND, TRAINING_COPY, TRAINING_PAGES, TRAINING_PROGRAMS, waLink} from "@/data";
import type {TrainingPage as TrainingPageData} from "@/types";

export function TrainingPage({page}: {page: TrainingPageData}) {
  const program = TRAINING_PROGRAMS.find((item) => item.id === page.programId);
  return (
    <div className="min-h-screen bg-snow text-ink">
      <header className="border-b border-line">
        <nav aria-label="Main" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <a href="/" className="display-sm text-xl">{BRAND.name}</a>
          <a href="/#programs" className="link">{TRAINING_COPY.directoryHeading}</a>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="label">{page.audience}</p>
        <h1 className="display-md mt-5 text-[2.5rem] sm:text-[3.5rem]">{page.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-2">{page.intro}</p>
        <a className="btn btn-primary mt-8" href={waLink(`Hi NATDS! I'm interested in ${page.title}. Please share the details.`)}>{TRAINING_COPY.enquiry}</a>
        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className="display-sm text-2xl">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-2">{section.text}</p>
            </section>
          ))}
          {program && (
            <section className="rounded-[4px] bg-mist p-6 sm:p-8">
              <h2 className="display-sm text-2xl">{TRAINING_COPY.syllabusHeading}</h2>
              <p className="mt-3 font-semibold">{program.title} · {program.duration}</p>
              <ol className="mt-4 list-decimal space-y-3 pl-6 text-ink-2">
                {program.syllabus.map((item) => <li key={item}>{item}</li>)}
              </ol>
            </section>
          )}
          <section>
            <h2 className="display-sm text-2xl">{TRAINING_COPY.preparationHeading}</h2>
            <p className="mt-3 leading-relaxed text-ink-2">{page.preparation}</p>
          </section>
          <section>
            <h2 className="display-sm text-2xl">{TRAINING_COPY.deliveryHeading}</h2>
            <p className="mt-3 leading-relaxed text-ink-2">{TRAINING_COPY.delivery}</p>
            <p className="mt-3 leading-relaxed text-ink-2">{TRAINING_COPY.fees}</p>
          </section>
          <section>
            <h2 className="display-sm text-2xl"><a className="link" href="/#work">{TRAINING_COPY.proofHeading}</a></h2>
            <p className="mt-3 leading-relaxed text-ink-2">{TRAINING_COPY.proof}</p>
            {page.articleSlug && <a className="link mt-4 inline-block" href={`/field-notes/${page.articleSlug}.html`}>{TRAINING_COPY.articleLabel}</a>}
          </section>
        </div>
        <nav aria-label={TRAINING_COPY.relatedHeading} className="mt-12 border-t border-line pt-8">
          <h2 className="display-sm text-2xl">{TRAINING_COPY.relatedHeading}</h2>
          <ul className="mt-5 space-y-3">
            {TRAINING_PAGES.filter((item) => item.slug !== page.slug).map((item) => (
              <li key={item.slug}><a className="link" href={`/training/${item.slug}/`}>{item.title}</a></li>
            ))}
          </ul>
        </nav>
      </main>
      <footer className="border-t border-line px-4 py-8 text-center text-ink-2">
        <a href="/">{BRAND.fullName}</a><p className="mt-2">{BRAND.location}</p>
        <a className="link mt-2 inline-block" href={waLink(`Hi NATDS! I'm interested in ${page.title}.`)}>{BRAND.whatsappDisplay}</a>
      </footer>
    </div>
  );
}
