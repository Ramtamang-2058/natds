import {ArrowUpRight} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import {useState} from "react";
import {BRAND, NAV_LINKS, WHATSAPP_LINKS} from "@/data";

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
  handleNavClick: (id: string) => (e?: React.MouseEvent) => void;
}

function Wordmark() {
  return (
    <a
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: "smooth"});
      }}
      className="flex items-baseline gap-2"
      aria-label={`${BRAND.name} home`}
    >
      <span className="font-display text-2xl font-semibold tracking-tight text-ink">
        NATDS
      </span>
      <span className="caption hidden sm:inline">// nepal ai & tech</span>
    </a>
  );
}

export function Navbar(props: NavbarProps) {
  const {scrolled, activeSection, handleNavClick} = props;
  const [open, setOpen] = useState(false);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "nav-ink" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Wordmark />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleNavClick(link.id)}
              className={`group flex items-baseline gap-1.5 text-sm transition-colors ${
                activeSection === link.id ? "text-accent" : "text-ink-soft hover:text-ink"
              }`}
            >
              <span className="font-mono text-[0.6rem] text-ink-mute">{String(i + 1).padStart(2, "0")}</span>
              {link.label}
              {activeSection === link.id && <span className="h-px w-3 bg-accent" />}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINKS.general}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1.5 text-sm font-medium text-ink underline decoration-accent/50 decoration-2 underline-offset-[6px] transition-colors hover:decoration-accent lg:inline-flex"
        >
          Let&apos;s talk
          <ArrowUpRight className="h-4 w-4 text-accent" />
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="flex flex-col gap-1.5">
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="nav-ink border-t border-line lg:hidden"
            aria-label="Mobile"
          >
            <div className="mx-auto max-w-6xl px-6 py-4">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    setOpen(false);
                    handleNavClick(link.id)(e);
                  }}
                  className="flex items-baseline gap-3 border-b border-line py-3.5"
                >
                  <span className="font-mono text-[0.6rem] text-ink-mute">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-xl font-medium text-ink">{link.label}</span>
                </a>
              ))}
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}