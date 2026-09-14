import {Wordmark} from "@/components/Wordmark";
import {BRAND, NAV_LINKS} from "@/data";

interface FooterProps {
  handleNavClick: (id: string) => (e?: React.MouseEvent) => void;
}

export function Footer(props: FooterProps) {
  const {handleNavClick} = props;

  return (
    <footer className="hairline-t bg-paper pt-12 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark className="text-[1.5rem]" />
            <p className="mt-3 max-w-sm text-[0.88rem] leading-relaxed text-ink-2">
              {BRAND.fullName}. Research-grade AI systems, researcher programs and
              digital transformation — built for how Nepal works.
            </p>
          </div>

          <div className="md:col-span-4">
            <nav aria-label="Footer" className="space-y-2">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={handleNavClick(link.id)}
                  className="group flex items-baseline gap-3 text-[0.88rem] text-ink-2 transition-colors hover:text-ink"
                >
                  <span className="font-mono text-[0.58rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="caption mb-2">Contact</p>
            <p className="text-[0.88rem] text-ink-2">{BRAND.whatsappDisplay}</p>
            <p className="text-[0.88rem] text-ink-2">{BRAND.email}</p>
            <p className="mt-1 text-[0.88rem] text-ink-3">{BRAND.location}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="caption">
            © {new Date().getFullYear()} {BRAND.fullName}
          </p>
          <p className="caption">{BRAND.domain}</p>
        </div>
      </div>
    </footer>
  );
}