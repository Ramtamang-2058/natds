import {AnimatePresence, motion, useReducedMotion} from "motion/react";
import {useEffect, useState} from "react";
import {MediaSlot} from "@/components/media/MediaSlot";

const SLIDES = [
  {
    src: "/images/events/prakriti-resource-center/training-front-right.jpeg",
    kicker: "In the room",
    caption: "Managers work on their own reports, not generic examples.",
  },
  {
    src: "/images/events/ime-group/session.jpg",
    kicker: "Hands on",
    caption: "Short sessions, live practice and questions asked out loud.",
  },
  {
    src: "/images/events/prakriti-resource-center/trainees-reading-board.jpeg",
    kicker: "Together",
    caption: "Teams leave with a shared vocabulary for AI.",
  },
  {
    src: "/images/events/prakriti-resource-center/trainee-asking-question.jpeg",
    kicker: "Real work",
    caption: "We map the workflow first. The tool comes second.",
  },
  {
    src: "/images/events/ime-group/certification.jpg",
    kicker: "Recognised",
    caption: "Every participant leaves with a certificate and a 30-day plan.",
  },
  {
    src: "/images/events/ime-group/group-image.png",
    kicker: "Beyond the room",
    caption: "We also build software and mobile apps, and stay on for project support.",
    href: "/services/software-and-app-development.html",
    linkLabel: "See software & project support",
  },
];

const DURATION = 5200;

export function MomentReel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const reduceMotion = useReducedMotion();
  const slide = SLIDES[index];

  useEffect(() => {
    if (!playing || reduceMotion) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, DURATION);
    return () => window.clearInterval(timer);
  }, [playing, reduceMotion]);

  return (
    <div className="mt-12 grid grid-cols-1 gap-10 border-y border-line py-10 lg:mt-16 lg:grid-cols-12 lg:gap-14 lg:py-14">
      <div className="lg:col-span-4">
        <div className="relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-[4px] bg-night sm:mx-0">
          <div className="aspect-[9/16]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={reduceMotion ? false : {opacity: 0}}
                animate={{opacity: 1}}
                exit={reduceMotion ? undefined : {opacity: 0}}
                transition={{duration: 0.45}}
                className="h-full w-full"
              >
                <MediaSlot
                  src={slide.src}
                  alt={`${slide.kicker}: ${slide.caption}`}
                  placeholderLabel="moments/…"
                  className="h-full w-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {playing && !reduceMotion && (
            <div className="absolute inset-x-0 top-0 h-[3px] bg-line-dark">
              <div key={index} className="reel-progress h-full bg-crimson" />
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-night via-night/70 to-transparent px-4 pb-4 pt-14 text-snow">
            <p className="label text-glacier">{slide.kicker}</p>
            <p className="mt-2 text-[0.98rem] leading-[1.5]">{slide.caption}</p>
            {slide.href && (
              <a href={slide.href} className="mt-3 inline-block text-[0.9rem] text-snow underline underline-offset-4 hover:text-glacier">
                {slide.linkLabel}
              </a>
            )}
            <div className="mt-4 flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setIndex(0);
                  setPlaying((value) => !value);
                }}
                disabled={Boolean(reduceMotion)}
                aria-label={playing ? "Pause moments reel" : "Play moments reel"}
                className="flex h-8 w-8 items-center justify-center border border-glacier/50 text-snow transition-colors hover:border-snow disabled:hidden"
              >
                {playing ? (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M7 5h4v14H7zm6 0h4v14h-4z" fill="currentColor" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                )}
              </button>
              <div className="flex flex-1 gap-1.5" aria-label="Choose a moment">
                {SLIDES.map((item, dot) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setIndex(dot)}
                    aria-label={`Show moment ${dot + 1}: ${item.kicker}`}
                    aria-current={dot === index}
                    className={`h-[3px] flex-1 transition-colors ${dot === index ? "bg-crimson" : "bg-glacier/40 hover:bg-glacier"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {!playing && !reduceMotion && (
            <button
              type="button"
              onClick={() => {
                setIndex(0);
                setPlaying(true);
              }}
              aria-label="Play moments reel"
              className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center border border-snow bg-night/70 text-snow transition-colors hover:bg-night"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="self-center lg:col-span-7 lg:col-start-6">
        <p className="label text-ink-3">Moments, not montage</p>
        <h3 className="display-md mt-3 text-[2rem] text-ink sm:text-[2.8rem]">
          A short reel of the work, as it happens.
        </h3>
        <p className="measure mt-5 text-[1.05rem] leading-[1.7] text-ink-2">
          Press play for a quiet, six-frame look at recent sessions. No music, no hard sell — just the room, the questions and the follow-through.
        </p>
        <p className="measure mt-4 text-[1rem] leading-[1.7] text-ink-2">
          When a workflow is worth keeping, we take it further: custom software, mobile apps and project support through our SAFAL AI team.
        </p>
        <a
          href="/services/software-and-app-development.html"
          className="link mt-7 inline-block text-[0.95rem] text-ink"
        >
          Software, apps &amp; project support
        </a>
        <p className="mt-8 text-[0.85rem] text-ink-3">Tap a frame marker to jump. Reduced-motion settings keep it still.</p>
      </div>
    </div>
  );
}
