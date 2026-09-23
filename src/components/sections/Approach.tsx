import {APPROACH} from "@/data";

export function Approach() {
  return (
    <section className="border-t border-line bg-snow py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="display-md max-w-3xl text-[2rem] text-ink sm:text-[2.6rem]">
          How a project runs.
        </h2>

        <ol className="relative mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* waterline connecting the steps */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-[1.35rem] hidden h-[2px] bg-line lg:block" />
          {APPROACH.map((step, i) => (
            <li key={step.id} className="relative">
              <span className="num relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-[1rem] text-snow ring-8 ring-snow">
                {i + 1}
              </span>
              <p className="label mt-5">{step.duration}</p>
              <h3 className="display-sm mt-1 text-[1.3rem] text-ink">{step.title}</h3>
              <p className="mt-2 text-[0.98rem] leading-[1.6] text-ink-2">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
