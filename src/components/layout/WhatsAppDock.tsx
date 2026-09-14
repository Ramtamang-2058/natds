import {ArrowUp} from "lucide-react";
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
            initial={{opacity: 0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.8}}
            onClick={scrollTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-paper-2"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={WHATSAPP_LINKS.general}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 items-center justify-center gap-1 rounded-full bg-accent font-mono text-xs font-medium text-paper shadow-[0_6px_24px_rgba(32,80,60,0.28)] transition-all hover:bg-accent-deep hover:shadow-[0_6px_28px_rgba(32,80,60,0.36)]"
        aria-label="Chat with NATDS on WhatsApp"
      >
        <span className="translate-x-[1px] transition-transform group-hover:translate-x-0.5">WA</span>
      </a>
    </div>
  );
}