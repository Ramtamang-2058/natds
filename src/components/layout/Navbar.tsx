import {Menu, X} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import {useState} from "react";
import {Wordmark} from "@/components/Wordmark";
import {BRAND, NAV_LINKS, WHATSAPP_LINKS} from "@/data";

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
  handleNavClick: (id: string) => (e?: React.MouseEvent) => void;
}

function NavLogo() {
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
      <Wordmark className="text-[1.25rem]" />
    </a>
  );
}

export function Navbar(props: NavbarProps) {
  const {activeSection, handleNavClick} = props;
  const [open, setOpen] = useState(false);

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 nav-glass`}>
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 sm:px-6">
        <NavLogo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleNavClick(link.id)}
              className={`flex items-baseline gap-1.5 rounded-full px-3 py-1.5 text-[0.82rem] font-medium transition-colors ${
                activeSection === link.id
                  ? "bg-paper-2 text-accent"
                  : "text-ink-2 hover:text-ink hover:bg-paper-2/60"
              }`}
            >
              <span className="font-mono text-[0.58rem] tracking-wide text-ink-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_LINKS.general}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent hidden lg:inline-flex"
        >
          Contact
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-5 w-5 text-ink" />
          ) : (
            <Menu className="h-5 w-5 text-ink" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="hairline-t lg:hidden"
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
                  <span className="font-mono text-[0.58rem] text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl font-medium text-ink">
                    {link.label}
                  </span>
                </a>
              ))}
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent mt-4 w-full justify-center"
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}