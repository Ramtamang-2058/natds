import {Send} from "lucide-react";
import {FormEvent, useState} from "react";
import {motion} from "motion/react";
import {BRAND, WHATSAPP_LINKS} from "@/data";

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
    <section id="contact" className="hairline-t relative bg-night py-24 text-paper on-dark lg:py-32">
      <span className="section-index absolute right-6 top-10 hidden text-[10rem] lg:block">05</span>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{opacity: 0, y: 16}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: "-80px"}}
          transition={{duration: 0.7}}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-6">
            <p className="eyebrow on-dark mb-7">Contact</p>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              Let&apos;s start <em className="font-light italic text-accent-bright">something.</em>
            </h2>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-paper/75">
              The fastest way to reach us is WhatsApp — a human answers, usually within the hour.
            </p>

            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block border-b-2 border-accent-bright pb-2 font-display text-3xl font-medium tracking-tight transition-colors hover:text-accent-bright sm:text-4xl"
            >
              {BRAND.whatsappDisplay}
            </a>
            <p className="caption on-dark mt-3">WhatsApp · {BRAND.location}</p>

            <ul className="mt-10 space-y-2.5">
              {[
                {label: "Researcher Program", href: WHATSAPP_LINKS.researcher},
                {label: "Manager AI waitlist", href: WHATSAPP_LINKS.managers},
                {label: "General enquiry", href: WHATSAPP_LINKS.general},
                {label: `Email · ${BRAND.email}`, href: `mailto:${BRAND.email}`},
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-baseline gap-3 text-[0.95rem] text-paper/80 transition-colors hover:text-paper"
                  >
                    <span className="h-px w-4 bg-accent-bright" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="border border-paper/15 p-7 sm:p-9"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-medium tracking-tight">Quick message</h3>
                <span className="caption on-dark">opens in WhatsApp</span>
              </div>

              <label className="mt-7 block">
                <span className="caption on-dark">Your name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Janaki Rana"
                  className="mt-2 w-full border-b border-paper/25 bg-transparent px-1 py-3 text-[0.95rem] text-paper placeholder:text-paper/30 outline-none transition-colors focus:border-accent-bright"
                  required
                />
              </label>

              <label className="mt-6 block">
                <span className="caption on-dark">Message</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Tell us about the research or workflow you want to transform…"
                  className="mt-2 w-full resize-none border-b border-paper/25 bg-transparent px-1 py-3 text-[0.95rem] text-paper placeholder:text-paper/30 outline-none transition-colors focus:border-accent-bright"
                  required
                />
              </label>

              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-2 bg-accent px-7 py-3.5 text-sm font-medium text-paper-cold transition-colors hover:bg-accent-deep"
              >
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}