import {Send} from "lucide-react";
import {FormEvent, useState} from "react";
import {BRAND, WHATSAPP_LINKS} from "@/data";

const WA_LINKS = [
  {label: "Researcher Program", href: WHATSAPP_LINKS.researcher},
  {label: "AI for Managers", href: WHATSAPP_LINKS.managers},
  {label: "General enquiry", href: WHATSAPP_LINKS.general},
];

export function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello NATDS! My name is ${name.trim() || "there"}. ${message.trim()}`
    );
    window.open(`https://wa.me/${BRAND.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="dark-section relative border-t border-border-ink py-24 lg:py-32">
      <div className="absolute inset-0 grid-constellation" />
      <div className="aurora-blob h-80 w-80 top-0 right-0 bg-[radial-gradient(circle,rgba(139,124,255,0.25),transparent_70%)]" />
      <div className="aurora-blob h-72 w-72 bottom-0 left-0 bg-[radial-gradient(circle,rgba(57,230,196,0.14),transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-6">Contact</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-lumen sm:text-5xl">
            Let&apos;s start something.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed soft-copy">
            The fastest way to reach us is WhatsApp. Message directly — a human answers, usually within the hour.
          </p>

          <a
            href={WHATSAPP_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-aurora/30 bg-ink-900/60 px-6 py-4 transition-colors hover:border-aurora/60"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-aurora to-pulse text-ink-950">
              <Send className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-text-ghost">WhatsApp direct</span>
              <span className="block font-display text-lg font-semibold text-lumen">{BRAND.whatsappDisplay}</span>
            </span>
          </a>

          <ul className="mt-6 space-y-2.5">
            {WA_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm soft-copy transition-colors hover:text-aurora-soft"
                >
                  <span className="h-1 w-1 rounded-full bg-pulse" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="glass-card relative overflow-hidden rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-border-ink pb-4">
              <h3 className="font-display text-lg font-semibold text-lumen">Send a quick message</h3>
              <span className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wide soft-copy">
                <span className="pulse-dot" style={{animation: "none"}} /> opens in WhatsApp
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] soft-copy">Your name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Janaki Rana"
                  className="mt-2 w-full rounded-xl border border-border-ink bg-ink-900/60 px-4 py-3 text-sm text-lumen placeholder:text-text-ghost outline-none transition-colors focus:border-aurora/60"
                  required
                />
              </label>
              <label className="block">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] soft-copy">You are</span>
                <select
                  name="audience"
                  className="mt-2 w-full appearance-none rounded-xl border border-border-ink bg-ink-900/60 px-4 py-3 text-sm text-text-ghost outline-none transition-colors focus:border-aurora/60"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select what fits
                  </option>
                  <option value="researcher">A researcher / scholar</option>
                  <option value="manager">A manager / executive</option>
                  <option value="institution">An institution / enterprise</option>
                  <option value="other">Something else</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] soft-copy">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Tell us about the research or workflow you want to transform…"
                className="mt-2 w-full resize-none rounded-xl border border-border-ink bg-ink-900/60 px-4 py-3 text-sm text-lumen placeholder:text-text-ghost outline-none transition-colors focus:border-aurora/60"
                required
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aurora to-pulse px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.01] sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}