import {BRAND, NAV_LINKS} from "@/data";

interface FooterProps {
  handleNavClick: (id: string) => (e?: React.MouseEvent) => void;
}

export function Footer(props: FooterProps) {
  const {handleNavClick} = props;

  return (
    <footer className="hairline-t border-t border-paper/15 bg-night text-paper on-dark">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-3xl font-semibold tracking-tight">
              NATDS<span className="font-light italic text-accent-bright">.</span>
            </p>
            <p className="mt-3 max-w-sm text-[0.9rem] leading-relaxed text-paper/65">
              {BRAND.fullName}. Research-grade AI systems, researcher programs and
              digital transformation — built for how Nepal works.
            </p>
          </div>

          <div className="md:col-span-3">
            <nav aria-label="Footer" className="space-y-2.5">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={handleNavClick(link.id)}
                  className="group flex items-baseline gap-3 text-[0.9rem] text-paper/70 transition-colors hover:text-paper"
                >
                  <span className="font-mono text-[0.6rem] text-accent-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="caption on-dark mb-3">Contact</p>
            <p className="text-[0.9rem] text-paper/80">{BRAND.whatsappDisplay}</p>
            <p className="text-[0.9rem] text-paper/80">{BRAND.email}</p>
            <p className="mt-1 text-[0.9rem] text-paper/60">{BRAND.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-paper/12 pt-6 sm:flex-row sm:items-center">
          <p className="caption on-dark">
            © {new Date().getFullYear()} {BRAND.fullName}
          </p>
          <p className="caption on-dark">{BRAND.domain}</p>
        </div>
      </div>
    </footer>
  );
}