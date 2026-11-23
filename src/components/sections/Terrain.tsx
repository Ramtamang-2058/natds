import {useState} from "react";
import {AnimatePresence, motion, useReducedMotion} from "motion/react";

const TERRAIN = [
  {
    id: "kathmandu",
    name: "Kathmandu valley",
    nepali: "काठमाडौं उपत्यका",
    top: "45%",
    left: "52%",
    body: "Classroom and on-site team training, from manager cohorts to project rooms. Most of our in-person work starts here.",
    link: {label: "Kathmandu guide", href: "/field-notes/practical-ai-training-kathmandu.html"},
  },
  {
    id: "pokhara",
    name: "Pokhara & Gandaki",
    nepali: "पोखरा",
    top: "42%",
    left: "40%",
    body: "On-site visits and hybrid programmes for organisations in Gandaki, with online follow-up to keep the work moving.",
    link: {label: "Pokhara guide", href: "/field-notes/ai-training-pokhara.html"},
  },
  {
    id: "koshi",
    name: "Koshi & Biratnagar",
    nepali: "कोशी",
    top: "38%",
    left: "75%",
    body: "Eastern Nepal teams use live online training and planned on-site workshops. We list coverage honestly, not fake offices.",
    link: {label: "Koshi coverage", href: "/locations/koshi-province.html"},
  },
  {
    id: "beyond",
    name: "Across Nepal & beyond",
    nepali: "नेपाल भर",
    top: "56%",
    left: "60%",
    body: "All 77 districts for remote delivery, plus selected work in India and the UAE when the project calls for it.",
    link: {label: "All locations", href: "/locations/nepal.html"},
  },
];

export function Terrain() {
  const [activeId, setActiveId] = useState(TERRAIN[0].id);
  const reduceMotion = useReducedMotion();
  const active = TERRAIN.find((place) => place.id === activeId) ?? TERRAIN[0];

  return (
    <section className="relative overflow-hidden bg-night py-24 text-snow lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[url('/art/headwater-contours.svg')] bg-cover bg-center opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-night/10 via-night/30 to-night" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src="/art/rhododendron.svg" alt="" aria-hidden="true" className="h-8 w-8" />
              <p className="label text-glacier">From the hills to the screen</p>
            </div>
            <h2 className="display-md mt-6 max-w-lg text-[2.4rem] text-snow sm:text-[3.2rem] lg:text-[3.8rem]">
              Work that travels.
            </h2>
            <p className="measure mt-6 text-[1.05rem] leading-[1.7] text-glacier">
              Some rooms are in Kathmandu. Some are a video call away. The work stays the same: one workflow, one team, a useful next step.
            </p>

            <div className="mt-12 space-y-0 border-t border-line-dark">
              {TERRAIN.map((place) => {
                const selected = place.id === activeId;
                return (
                  <button
                    key={place.id}
                    type="button"
                    onClick={() => setActiveId(place.id)}
                    className={`grid w-full grid-cols-[1fr_auto] gap-4 border-b border-line-dark py-5 text-left transition-colors ${selected ? "text-snow" : "text-glacier hover:text-snow"}`}
                    aria-pressed={selected}
                  >
                    <span>
                      <span className="display-sm block text-[1.2rem] sm:text-[1.35rem]">{place.name}</span>
                      <span className="mt-1 block text-[0.85rem] opacity-70">{place.nepali}</span>
                    </span>
                    <span className={`pt-1 text-[0.8rem] ${selected ? "text-crimson" : "text-line-dark"}`} aria-hidden="true">
                      {selected ? "●" : "○"}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 min-h-[9rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={reduceMotion ? false : {opacity: 0, y: 6}}
                  animate={{opacity: 1, y: 0}}
                  exit={reduceMotion ? undefined : {opacity: 0, y: -6}}
                  transition={{duration: 0.2}}
                >
                  <p className="max-w-md text-[1rem] leading-[1.7] text-glacier">{active.body}</p>
                  <a href={active.link.href} className="link mt-5 inline-block text-[0.95rem] text-snow">
                    {active.link.label}
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative min-h-[22rem] lg:col-span-6 lg:col-start-7 lg:min-h-[34rem]">
            <div className="absolute inset-0">
              <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
                <path d="M8 72 C18 62 24 58 34 60 C44 62 50 52 58 46 C66 40 74 44 82 36 C88 30 92 22 96 14" fill="none" stroke="#26354A" strokeWidth="0.7" />
                <path d="M10 80 C20 70 28 68 38 70 C48 72 56 62 64 56 C72 50 80 52 88 46 C92 43 95 38 98 32" fill="none" stroke="#26354A" strokeWidth="0.7" />
                <path d="M6 64 C16 54 22 48 32 50 C42 52 48 42 56 36 C64 30 72 34 80 26 C86 20 90 12 94 6" fill="none" stroke="#26354A" strokeWidth="0.7" />
              </svg>
              {TERRAIN.map((place) => {
                const selected = place.id === activeId;
                return (
                  <button
                    key={place.id}
                    type="button"
                    onClick={() => setActiveId(place.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 p-3"
                    style={{top: place.top, left: place.left}}
                    aria-label={place.name}
                    aria-pressed={selected}
                  >
                    <span className={`block rounded-full transition-all ${selected ? "h-3 w-3 bg-crimson shadow-[0_0_0_8px_rgba(192,25,44,0.15)]" : "h-2.5 w-2.5 bg-glacier/60 hover:bg-snow"}`} />
                  </button>
                );
              })}
              <div className="absolute bottom-2 right-0 text-right">
                <p className="num text-[0.8rem] text-glacier/60">27.7°N · 85.3°E</p>
                <p className="mt-1 text-[0.75rem] text-glacier/45">Not a map. A sense of direction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
