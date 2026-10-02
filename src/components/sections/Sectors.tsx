import {AnimatePresence, motion} from "motion/react";
import {useRef} from "react";
import {SECTORS, waLink} from "@/data";

interface SectorsProps {
  activeId: string;
  onChange: (id: string) => void;
}

export function Sectors({activeId, onChange}: SectorsProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const index = Math.max(0, SECTORS.findIndex((s) => s.id === activeId));
  const sector = SECTORS[index];

  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys: Record<string, number> = {ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1};
    if (!(e.key in keys)) return;
    e.preventDefault();
    const next = (index + keys[e.key] + SECTORS.length) % SECTORS.length;
    onChange(SECTORS[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="sectors" className="bg-night py-20 text-snow lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="display-md max-w-3xl text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem]">
          Built around how your sector actually works.
        </h2>
        <p className="measure mt-5 text-[1.05rem] text-glacier">
          We don&apos;t sell one chatbot to everyone. Pick your sector to see the
          work we take on and how an engagement usually starts.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div
            role="tablist"
            aria-label="Sectors"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0"
          >
            {SECTORS.map((s, i) => {
              const active = s.id === sector.id;
              return (
                <button
                  key={s.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${s.id}`}
                  aria-selected={active}
                  aria-controls="sector-panel"
                  tabIndex={active ? 0 : -1}
                  onClick={() => onChange(s.id)}
                  className={`relative shrink-0 rounded-[3px] border px-4 py-3 text-left transition-colors lg:rounded-none lg:border-0 lg:border-t lg:px-0 lg:py-5 lg:pl-6 ${
                    active
                      ? "border-snow bg-snow text-ink lg:border-line-dark lg:bg-transparent lg:text-snow"
                      : "border-line-dark text-glacier hover:text-snow"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="sector-bar"
                      className="absolute inset-y-0 left-0 hidden w-[3px] bg-crimson lg:block"
                    />
                  )}
                  <span className="display-sm whitespace-nowrap text-[1rem] lg:text-[1.4rem]">{s.name}</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="sector-panel"
            aria-labelledby={`tab-${sector.id}`}
            className="min-h-[34rem] lg:col-span-8"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={sector.id}
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -6}}
                transition={{duration: 0.25}}
              >
                <h3 className="display-md text-[1.8rem] text-snow sm:text-[2.3rem]">{sector.headline}</h3>
                <p className="mt-5 max-w-[40rem] text-[1.05rem] leading-[1.65] text-glacier">{sector.summary}</p>

                <ul className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[3px] bg-line-dark sm:grid-cols-2">
                  {sector.useCases.map((u) => (
                    <li key={u.title} className="bg-night-2 p-6">
                      <p className="display-sm text-[1.08rem] text-snow">{u.title}</p>
                      <p className="mt-2 text-[0.95rem] leading-[1.6] text-glacier">{u.detail}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-6 border-t border-line-dark pt-6 sm:flex-row sm:items-end sm:justify-between">
                  <dl className="space-y-3">
                    <div>
                      <dt className="label !text-glacier/80">Typical start</dt>
                      <dd className="mt-0.5 text-[1rem] text-snow">{sector.engagement}</dd>
                    </div>
                    {sector.proof && (
                      <div>
                        <dt className="label !text-glacier/80">Track record</dt>
                        <dd className="mt-0.5 text-[1rem] text-snow">{sector.proof}</dd>
                      </div>
                    )}
                  </dl>
                  <a
                    href={waLink(sector.waText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary shrink-0"
                  >
                    Talk to us about your project
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
