import {ArrowDownRight} from "lucide-react";
import {MediaSlot} from "@/components/media/MediaSlot";
import {CLIENTS, HERO_MEDIA, SECTORS, WHATSAPP_LINKS} from "@/data";

interface HeroProps {
  onPickSector: (id: string) => void;
}

const HEADLINE = ["Practical AI", "for the teams", "that keep Nepal", "running."];

/** River-contour lines: gently offset curves, drawn once. */
function Contours() {
  const paths = Array.from({length: 14}, (_, i) => {
    const y = 40 + i * 34;
    const a = 18 + i * 2.2;
    return `M -20 ${y} C 180 ${y - a}, 320 ${y + a * 1.6}, 520 ${y + a * 0.2} S 860 ${y - a * 1.4}, 1020 ${y + a * 0.6}`;
  });
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 520"
      preserveAspectRatio="none"
      className="contours pointer-events-none absolute inset-x-0 top-0 h-[34rem] w-full"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export function Hero({onPickSector}: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden bg-snow pt-[4.25rem]">
      <Contours />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-14 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="lg:col-span-7">
          <h1 className="display text-[2.65rem] text-ink sm:text-[4rem] lg:text-[4.5rem] xl:text-[5rem]">
            {HEADLINE.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <span className="rise block" style={{"--d": `${0.08 * i}s`} as React.CSSProperties}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div className="fade-in" style={{"--d": "0.45s"} as React.CSSProperties}>
            <p className="measure mt-8 text-[1.1rem] leading-[1.6] text-ink-2 sm:text-[1.2rem]">
              From hydropower suppliers to banks, NGOs and research labs, NATDS
              trains your people and builds the automations that take hours off
              their week. Based in Kathmandu, working across Nepal.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Message us on WhatsApp
              </a>
              <button type="button" onClick={() => onPickSector(SECTORS[0].id)} className="btn btn-outline">
                See what we do for your sector
              </button>
            </div>
          </div>
        </div>

        <figure
          className="wipe relative lg:col-span-5"
          style={{"--d": "0.2s"} as React.CSSProperties}
        >
          {HERO_MEDIA.videoActive ? (
            <MediaSlot
              src={HERO_MEDIA.video}
              poster={HERO_MEDIA.poster}
              placeholderLabel="/videos/hero.mp4"
              className="aspect-[4/5] w-full rounded-[4px] lg:aspect-auto lg:h-full"
            />
          ) : (
            <MediaSlot
              src={HERO_MEDIA.poster}
              alt="NATDS trainer leading an AI session with a partner organisation's team"
              className="aspect-[4/5] w-full rounded-[4px] lg:aspect-auto lg:h-full lg:max-h-[40rem]"
            />
          )}
          <figcaption className="label mt-3">
            On-site training, Prakriti Resource Center
          </figcaption>
        </figure>
      </div>

      {/* Sector index — every entry opens the sector switcher below */}
      <div className="relative border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {SECTORS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => onPickSector(s.id)}
                className={`group flex items-center justify-between gap-3 border-line py-4 text-left lg:px-5 lg:py-6 ${
                  i > 0 ? "border-t lg:border-l lg:border-t-0" : "lg:pl-0"
                }`}
              >
                <span className="display-sm text-[1.05rem] text-ink transition-colors group-hover:text-crimson">{s.name}</span>
                <ArrowDownRight className="h-4 w-4 shrink-0 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-crimson" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Worked with */}
      <div className="bg-ink text-snow">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 sm:px-6 md:flex-row md:items-center md:gap-10 lg:px-8">
          <p className="label shrink-0 !text-glacier">Teams we&apos;ve trained and built for</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {CLIENTS.map((c) => (
              <li key={c} className="display-sm text-[1rem] text-snow sm:text-[1.1rem]">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
