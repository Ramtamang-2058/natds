import {Wordmark} from "@/components/Wordmark";
import {BRAND, NAV_LINKS} from "@/data";

interface FooterProps {
  handleNavClick: (id: string) => (e?: React.MouseEvent) => void;
}

export function Footer(props: FooterProps) {
  const {handleNavClick} = props;

  return (
    <footer className="border-t border-line-dark bg-night pb-10 pt-12 text-snow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Wordmark tone="dark" className="text-[1.4rem]" />
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-glacier">
              {BRAND.fullName}. AI training, automation and custom tools for
              organisations across Nepal, from hydropower to research.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 md:col-span-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNavClick(link.id)}
                className="text-[0.95rem] text-glacier transition-colors hover:text-snow"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-1 text-[0.95rem] text-glacier md:col-span-3">
            <p className="text-snow">{BRAND.whatsappDisplay}</p>
            <p>{BRAND.email}</p>
            <p>{BRAND.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-line-dark pt-6 text-[0.85rem] text-ink-3 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.fullName}
          </p>
          <p>{BRAND.domain}</p>
        </div>
      </div>
    </footer>
  );
}
