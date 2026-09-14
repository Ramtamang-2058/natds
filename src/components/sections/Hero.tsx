import {ArrowDown, ArrowUpRight} from "lucide-react";
import {motion} from "motion/react";
import {MediaSlot} from "@/components/media/MediaSlot";
import {HERO_MEDIA, WHATSAPP_LINKS} from "@/data";

interface HeroProps {
  handleNavClick: (id: string) => (e?: React.MouseEvent) => void;
}

export function Hero(props: HeroProps) {
  const {handleNavClick} = props;

  return (
    <section id="top" className="relative bg-paper pt-20">
      {/* Centered editorial hero */}
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24 lg:pt-28">
        <motion.div
          initial={{opacity: 0, y: 16}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7}}
        >
          <p className="kicker mb-6">// nepal ai &amp; tech</p>
          <h1 className="font-display text-[2.6rem] font-normal leading-[1.06] tracking-[-0.01em] text-ink sm:text-6xl lg:text-7xl">
            AI for researchers.
            <br />
            <em className="font-light italic text-accent">Built for discovery.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[0.95rem] leading-relaxed text-ink-2">
            NATDS researches, builds and teaches AI with the rigour the work deserves — Nepal&apos;s scholars, institutions and enterprises deserve.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_LINKS.researcher}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Start the Researcher Program
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button type="button" onClick={handleNavClick("events")} className="btn-ghost">
              See recent events
            </button>
          </div>
        </motion.div>
      </div>

      {/* Cinematic media band */}
      <motion.div
        initial={{opacity: 0, y: 24}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.9, delay: 0.15}}
        className="mx-auto max-w-6xl px-4 sm:px-6"
      >
        <div className="relative overflow-hidden rounded-xl border border-line">
          {HERO_MEDIA.videoActive ? (
            <MediaSlot
              src={HERO_MEDIA.video}
              poster={HERO_MEDIA.poster}
              placeholderLabel="/videos/hero.mp4"
              className="aspect-[16/9] h-full w-full sm:aspect-[21/9]"
            />
          ) : (
            <MediaSlot
              src={HERO_MEDIA.poster}
              alt="NATDS training session with a partner organization"
              className="aspect-[16/9] h-full w-full sm:aspect-[21/9]"
            />
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
            <p className="caption text-ink/60">NATDS · researcher program</p>
            <p className="caption flex items-center gap-2 text-ink/60">
              scroll <ArrowDown className="h-3.5 w-3.5" />
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}