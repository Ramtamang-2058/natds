import {Menu, Send, X} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import {BRAND, NAV_LINKS, WHATSAPP_LINKS} from "@/data";

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  handleNavClick: (id: string) => (e?: React.MouseEvent) => void;
}

function Logo() {
  return (
    <a
      href="#home"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: "smooth"});
      }}
      className="flex items-center gap-2.5 group"
      aria-label={`${BRAND.name} home`}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-aurora to-pulse text-ink-950 font-display font-bold text-sm shadow-[0_0_24px_rgba(139,124,255,0.4)]">
        N
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-pulse pulse-dot" />
      </span>
      <span className="leading-none">
        <span className="block font-display font-bold tracking-tight text-lumen text-lg">NATDS</span>
        <span className="block font-mono text-[0.6rem] tracking-[0.14em] uppercase text-text-ghost mt-0.5">
          Nepal AI & Tech
        </span>
      </span>
    </a>
  );
}

export function Navbar(props: NavbarProps) {
  const {scrolled, activeSection, mobileMenuOpen, setMobileMenuOpen, handleNavClick} = props;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNavClick(link.id)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-aurora-soft"
                    : "text-text-ghost hover:text-lumen"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-aurora to-pulse"
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-aurora to-pulse px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
            >
              <Send className="h-4 w-4" />
              Let&apos;s talk
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-ink text-lumen"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "auto"}}
            exit={{opacity: 0, height: 0}}
            className="lg:hidden nav-glass overflow-hidden"
          >
            <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={handleNavClick(link.id)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                    activeSection === link.id
                      ? "text-aurora-soft bg-white/5"
                      : "text-text-ghost hover:text-lumen"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aurora to-pulse px-5 py-3 text-sm font-semibold text-ink-950"
              >
                <Send className="h-4 w-4" />
                Let&apos;s talk
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}