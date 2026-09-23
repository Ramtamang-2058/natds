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
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      <AnimatePresence>
        {showTopButton && (
          <motion.button
            type="button"
            initial={{opacity: 0, y: 6}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 6}}
            onClick={scrollTop}
            className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-line bg-surface text-ink transition-colors hover:bg-mist"
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
        className="flex h-12 items-center gap-2 rounded-[3px] bg-crimson px-4 text-[0.92rem] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(192,25,44,0.6)] transition-colors hover:bg-crimson-deep"
        aria-label="Chat with NATDS on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
