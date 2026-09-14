import {Sparkle} from "lucide-react";
import {MARQUEE_ITEMS} from "@/data";

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section aria-hidden="true" className="relative border-y border-border-ink bg-ink-900/60 py-5">
      <div className="marquee">
        <div className="marquee-track items-center">
          {items.map((item, i) => (
            <span key={`${item.id}-${i}`} className="flex items-center gap-3.5">
              <span className="font-display text-lg font-medium tracking-tight text-text-ghost">{item.label}</span>
              <Sparkle className="h-4 w-4 text-aurora/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}