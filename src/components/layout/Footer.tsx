import {BRAND, NAV_LINKS} from "@/data";

interface FooterProps {
  handleNavClick: (id: string) => (e?: React.MouseEvent) => void;
}

export function Footer(props: FooterProps) {
  const {handleNavClick} = props;

  return (
    <footer className="bg-snow pb-10 pt-14 text-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <img
              src="/brand/logo-full.webp"
              alt={`${BRAND.name}, ${BRAND.fullName}`}
              width={640}
              height={598}
              loading="lazy"
              className="h-auto w-44 sm:w-52"
            />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-ink-2">
              {BRAND.fullName}. AI training, automation and custom tools for
              organisations across Nepal, from hydropower to research.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 content-start gap-x-6 gap-y-2 md:col-span-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNavClick(link.id)}
                className="text-[0.95rem] text-ink-2 transition-colors hover:text-crimson"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-1 text-[0.95rem] text-ink-2 md:col-span-3">
            <p className="font-semibold text-ink">{BRAND.whatsappDisplay}</p>
            <p>{BRAND.email}</p>
            <p>{BRAND.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-line pt-6 text-[0.85rem] text-ink-3 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.fullName}
          </p>
          <p>{BRAND.domain}</p>
        </div>
      </div>
    </footer>
  );
}
