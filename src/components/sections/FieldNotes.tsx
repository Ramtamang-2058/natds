import {ArrowUpRight} from "lucide-react";
import {FIELD_NOTES} from "@/data";

export function FieldNotes() {
  return (
    <section id="notes" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
          <h2 className="display-md text-[2.2rem] text-ink sm:text-[3rem] lg:col-span-6 lg:text-[3.6rem]">
            Field notes.
          </h2>
          <p className="measure self-end text-[1.05rem] text-ink-2 lg:col-span-5 lg:col-start-8">
            Short, practical writing on AI in Nepali organisations: what works,
            what doesn&apos;t, and where to start.
          </p>
        </div>

        <ul className="mt-12 border-t-2 border-ink">
          {FIELD_NOTES.map((note) => (
            <li key={note.id} id={note.id} className="border-b border-line">
              <a
                href={`/field-notes/${note.slug}.html`}
                className="group grid grid-cols-1 gap-2 py-7 sm:grid-cols-12 sm:gap-6"
              >
                <span className="label sm:col-span-2 sm:pt-1.5">{note.date}</span>
                <span className="sm:col-span-9">
                  <span className="display-sm block text-[1.3rem] text-ink transition-colors group-hover:text-crimson sm:text-[1.55rem]">
                    {note.title}
                  </span>
                  <span className="mt-2 block max-w-[44rem] text-[0.98rem] leading-[1.6] text-ink-2">
                    {note.excerpt}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="hidden h-6 w-6 justify-self-end text-ink-3 transition-colors group-hover:text-crimson sm:col-span-1 sm:block"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
