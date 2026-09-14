import {ArrowUp, MessageCircle} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import {WHATSAPP_LINKS} from "@/data";

interface WhatsAppDockProps {
  showTopButton: boolean;
  scrollTop: () => void;
}

export function WhatsAppDock(props: WhatsAppDockProps) {
  const {showTopButton, scrollTop} = props;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTopButton && (
          <motion.button
            type="button"
            initial={{opacity: 0, scale: 0.6}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.6}}
            onClick={scrollTop}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-ink bg-ink-800/80 text-text-ghost backdrop-blur transition-colors hover:text-lumen"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={WHATSAPP_LINKS.general}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-aurora to-pulse text-ink-950 shadow-[0_10px_40px_rgba(139,124,255,0.45)] transition-transform hover:scale-105"
        aria-label="Chat with NATDS on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-pulse border-2 border-ink-950 pulse-dot" style={{animation: "none"}} />
      </a>
    </div>
  );
}