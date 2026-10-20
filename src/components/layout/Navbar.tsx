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

export function Navbar(props: NavbarProps) {
  const {scrolled, activeSection, handleNavClick} = props;
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[border-color,background-color] duration-200 ${
        scrolled || open ? "nav-solid border-b border-line" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            window.scrollTo({top: 0, behavior: "smooth"});
          }}
          aria-label={`${BRAND.name} home`}
        >
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.filter((l) => l.id !== "contact").map((link) => {
            const isPage = Boolean(link.href);
            const active = !isPage && activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href ?? `#${link.id}`}
                onClick={isPage ? undefined : handleNavClick(link.id)}
                aria-current={active ? "true" : undefined}
                className={`relative px-3.5 py-2 text-[0.92rem] font-medium transition-colors ${
                  active ? "text-ink" : "text-ink-2 hover:text-ink"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3.5 -bottom-0.5 h-[2px] bg-crimson"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <a
          href={WHATSAPP_LINKS.general}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ink hidden !py-2.5 text-[0.88rem] lg:inline-flex"
        >
          Talk to us
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5 text-ink" /> : <Menu className="h-5 w-5 text-ink" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{height: 0, opacity: 0}}
            animate={{height: "auto", opacity: 1}}
            exit={{height: 0, opacity: 0}}
            transition={{duration: 0.22}}
            className="overflow-hidden border-t border-line lg:hidden"
            aria-label="Mobile"
          >
            <div className="px-4 pb-6 pt-2 sm:px-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href ?? `#${link.id}`}
                  onClick={(e) => {
                    if (link.href) {
                      setOpen(false);
                      return;
                    }
                    setOpen(false);
                    handleNavClick(link.id)(e);
                  }}
                  className="display-sm block border-b border-line py-3.5 text-[1.35rem] text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-5 w-full justify-center"
              >
                Message us on WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
