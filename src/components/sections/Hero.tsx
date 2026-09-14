import {ArrowRight, Sparkles} from "lucide-react";
import {motion} from "motion/react";
import {MediaSlot} from "@/components/media/MediaSlot";
import {HERO_MEDIA, HERO_STATS, WHATSAPP_LINKS} from "@/data";

interface HeroProps {
  handleNavClick: (id: string) => (e?: React.MouseEvent) => void;
}

const DOTS = [
  {top: "18%", left: "12%", color: "#A99BFF"},
  {top: "74%", left: "20%", color: "#39E6C4"},
  {top: "30%", left: "86%", color: "#A99BFF"},
  {top: "66%", left: "74%", color: "#39E6C4"},
  {top: "46%", left: "52%", color: "#A99BFF"},
];

export function Hero(props: HeroProps) {
  const {handleNavClick} = props;

  return (
    <section id="home" className="dark-section relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 grid-constellation" />
      <div className="aurora-blob h-[28rem] w-[28rem] -top-40 -right-24 bg-[radial-gradient(circle,rgba(139,124,255,0.4),transparent_70%)]" />
      <div className="aurora-blob h-[24rem] w-[24rem] bottom-0 -left-32 bg-[radial-gradient(circle,rgba(57,230,196,0.25),transparent_70%)]" />
      <span className="ghost-word">DISCOVERY</span>
      <div className="hstream hs1" />
      <div className="hstream hs2" />
      <div className="hstream hs3" />
      {DOTS.map((d, i) => (
        <span
          key={i}
          className="hdot"
          style={{top: d.top, left: d.left, width: 6, height: 6, color: d.color, animationDelay: `${i * 0.7}s`}}
        />
      ))}

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-12 lg:pt-20">
        <div className="lg:col-span-7">
          <motion.p
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="eyebrow mb-6"
          >
            Nepal AI &amp; Tech Digital Solution
          </motion.p>

          <motion.h1
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.05}}
            className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-lumen sm:text-6xl lg:text-7xl"
          >
            AI for Researchers.
            <br />
            <span className="text-aurora-gradient">Built for Discovery.</span>
          </motion.h1>

          <motion.p
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.15}}
            className="mt-6 max-w-xl text-base leading-relaxed soft-copy sm:text-lg"
          >
            NATDS builds research-grade AI systems and runs the <span className="text-lumen">Researcher Program</span> for Nepal&apos;s scholars, institutions and enterprises — clean, verifiable tools that put the discovery first.
          </motion.p>

          <motion.div
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.25}}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={WHATSAPP_LINKS.researcher}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-aurora to-pulse px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-[0_12px_40px_rgba(139,124,255,0.35)] transition-transform hover:scale-[1.03]"
            >
              Start the Researcher Program
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={handleNavClick("services")}
              className="inline-flex items-center gap-2 rounded-full border border-border-ink px-7 py-3.5 text-sm font-medium text-text-ghost transition-colors hover:border-aurora/50 hover:text-lumen"
            >
              <Sparkles className="h-4 w-4 text-aurora" />
              Explore services
            </button>
          </motion.div>

          <motion.dl
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7, delay: 0.35}}
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.id}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-aurora-soft sm:text-3xl">{stat.value}</dd>
                <dd className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] soft-copy">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{opacity: 0, scale: 0.96}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.8, delay: 0.25}}
          className="relative lg:col-span-5"
        >
          <div className="absolute -inset-6 dashed-ring rounded-3xl orbit-badge opacity-60" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-[0_40px_120px_-40px_rgba(139,124,255,0.35)]">
            <MediaSlot
              src={HERO_MEDIA.video}
              poster={HERO_MEDIA.poster}
              className="aspect-[4/5] h-full w-full sm:aspect-[4/4]"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-aurora-soft">Research system in action</p>
                <p className="mt-0.5 font-display text-sm font-semibold text-lumen">Drop your media in /public</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-ink-950/70 px-3 py-1.5 font-mono text-[0.65rem] text-pulse-soft backdrop-blur">
                <span className="pulse-dot" style={{animation: "none"}} /> LIVE
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}