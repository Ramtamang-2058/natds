import {AnimatePresence, motion, useReducedMotion} from "motion/react";
import {useState} from "react";
import {waLink} from "@/data";

const PATHS = [
  {
    id: "train",
    label: "Train my team",
    title: "Start with one workflow.",
    body: "Map a recurring report, document or decision with a trainer. Eight short sessions, time to try it at work, and a 30-day plan your team owns.",
    cta: "Discuss training",
    href: waLink("Hello NATDS! I'd like to discuss AI training for my team."),
  },
  {
    id: "build",
    label: "Build a tool",
    title: "Turn the workflow into a product.",
    body: "Some work is worth more than a prompt. We scope custom software, mobile apps and automations with our SAFAL AI team, starting with a small prototype.",
    cta: "Discuss a build",
    href: waLink("Hello NATDS! I'd like to discuss a custom software or mobile app build."),
  },
  {
    id: "verify",
    label: "Verify a certificate",
    title: "Check a NATDS certificate.",
    body: "Enter the ID printed under the date on a certificate to see the record, the programme and the issue date. No account needed.",
    cta: "Open verification",
    href: "/verify/",
  },
];

export function StartHere() {
  const [activeId, setActiveId] = useState(PATHS[0].id);
  const reduceMotion = useReducedMotion();
  const path = PATHS.find((item) => item.id === activeId) ?? PATHS[0];

  return (
    <section id="start" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
          <h2 className="display-md text-[2.2rem] text-ink sm:text-[3rem] lg:col-span-6 lg:text-[3.6rem]">
            Not sure where to begin?
          </h2>
          <p className="measure self-end text-[1.05rem] text-ink-2 lg:col-span-5 lg:col-start-8">
            Choose the outcome you want. We will point you to the right first conversation — training, a build, or a quick certificate check.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t-2 border-ink pt-8 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col gap-2 lg:col-span-5" role="tablist" aria-label="What do you need?">
            {PATHS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeId === item.id}
                aria-controls="start-panel"
                onClick={() => setActiveId(item.id)}
                className={`border px-5 py-4 text-left text-[1.05rem] transition-colors ${
                  activeId === item.id
                    ? "border-ink bg-ink text-snow"
                    : "border-line bg-surface text-ink hover:border-ink"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div id="start-panel" role="tabpanel" className="lg:col-span-6 lg:col-start-7">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={path.id}
                initial={reduceMotion ? false : {opacity: 0, y: 8}}
                animate={{opacity: 1, y: 0}}
                exit={reduceMotion ? undefined : {opacity: 0, y: -8}}
                transition={{duration: 0.2}}
              >
                <p className="label text-ink-3">{path.label}</p>
                <h3 className="display-sm mt-3 text-[1.8rem] text-ink sm:text-[2.2rem]">{path.title}</h3>
                <p className="mt-4 max-w-xl text-[1rem] leading-[1.65] text-ink-2">{path.body}</p>
                <a
                  href={path.href}
                  target={path.href.startsWith("/") ? undefined : "_blank"}
                  rel={path.href.startsWith("/") ? undefined : "noopener"}
                  className="btn btn-primary mt-7"
                >
                  {path.cta}
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
