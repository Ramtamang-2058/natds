import {motion} from "motion/react";
import {MANIFESTO} from "@/data";

export function QuoteBar() {
  return (
    <section className="bg-paper-2 py-16 lg:py-20">
      <motion.div
        initial={{opacity: 0, y: 16}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: "-60px"}}
        transition={{duration: 0.7}}
        className="mx-auto max-w-3xl px-4 text-center sm:px-6"
      >
        <blockquote className="font-display text-[1.4rem] font-light italic leading-snug text-ink-2 sm:text-[1.7rem]">
          &ldquo;{MANIFESTO.quote}&rdquo;
        </blockquote>
        <p className="caption mt-6 text-accent">{MANIFESTO.cite}</p>
      </motion.div>
    </section>
  );
}