import {Mail, MapPin, Phone} from "lucide-react";
import {BRAND, NAV_LINKS, WHATSAPP_LINKS} from "@/data";

interface FooterProps {
  handleNavClick: (id: string) => (e?: React.MouseEvent) => void;
}

export function Footer(props: FooterProps) {
  const {handleNavClick} = props;

  return (
    <footer className="dark-section border-t border-border-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl font-bold text-lumen">
              NATDS
              <span className="text-aurora-gradient">.</span>
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed soft-copy">
              {BRAND.fullName}. Research-grade AI systems, researcher programs, and digital transformation — built for how Nepal works.
            </p>
            <ul className="mt-6 space-y-2 text-sm soft-copy">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-aurora" />
                {BRAND.location}
              </li>
              <li>
                <a
                  href={WHATSAPP_LINKS.general}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-aurora-soft"
                >
                  <Phone className="h-4 w-4 text-aurora" />
                  {BRAND.whatsappDisplay} (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-aurora-soft"
                >
                  <Mail className="h-4 w-4 text-aurora" />
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-text-ghost mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={handleNavClick(link.id)}
                    className="text-sm soft-copy transition-colors hover:text-aurora-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-text-ghost mb-4">Start a program</h4>
            <p className="text-sm soft-copy mb-5">
              The Researcher Program is open to scholars and research teams across Nepal. Message us directly on WhatsApp.
            </p>
            <a
              href={WHATSAPP_LINKS.researcher}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-aurora/40 px-5 py-2.5 text-sm font-medium text-aurora-soft transition-colors hover:bg-aurora/10"
            >
              WhatsApp the team
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border-ink pt-6 sm:flex-row">
          <p className="font-mono text-xs soft-copy">
            © {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.
          </p>
          <p className="font-mono text-xs soft-copy">
            Built for discovery · {BRAND.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}