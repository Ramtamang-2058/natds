import {FormEvent, useState} from "react";
import {BRAND, SECTORS, WHATSAPP_LINKS, waLink} from "@/data";

export function Contact() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [sector, setSector] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parts = [
      `Hello NATDS! My name is ${name.trim()}.`,
      org.trim() && `I'm with ${org.trim()}.`,
      sector && `Sector: ${sector}.`,
      message.trim(),
    ].filter(Boolean);
    window.open(waLink(parts.join(" ")), "_blank", "noopener");
  };

  const field =
    "mt-2 w-full rounded-[3px] border border-line-dark bg-night-2 px-3.5 py-3 text-[1rem] text-snow placeholder:text-ink-3 outline-none transition-colors focus:border-glacier";

  return (
    <section id="contact" className="bg-night py-20 text-snow lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-6">
          <h2 className="display text-[2.6rem] sm:text-[3.6rem] lg:text-[4.4rem]">
            Tell us where the hours go.
          </h2>
          <p className="measure mt-6 text-[1.08rem] text-glacier">
            WhatsApp is the fastest way to reach us. A person on our team replies,
            usually within the hour during Kathmandu working hours.
          </p>

          <a
            href={WHATSAPP_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="num mt-10 inline-block border-b-[3px] border-crimson pb-1 text-[1.9rem] tracking-[-0.02em] text-snow transition-colors hover:text-glacier sm:text-[2.6rem]"
          >
            {BRAND.whatsappDisplay}
          </a>

          <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <dt className="label !text-glacier/80">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${BRAND.email}`} className="link text-[1rem] text-snow">
                  {BRAND.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label !text-glacier/80">Office</dt>
              <dd className="mt-1 text-[1rem] text-snow">{BRAND.location}</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[4px] border border-line-dark p-6 sm:p-9 lg:col-span-6">
          <h3 className="display-sm text-[1.4rem]">Send a message</h3>
          <p className="mt-1 text-[0.92rem] text-glacier">This opens WhatsApp with your message filled in.</p>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="label !text-glacier">Your name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className={field}
                required
              />
            </label>
            <label className="block">
              <span className="label !text-glacier">Organisation</span>
              <input
                type="text"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                autoComplete="organization"
                className={field}
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="label !text-glacier">Sector</span>
            <select value={sector} onChange={(e) => setSector(e.target.value)} className={field}>
              <option value="">Choose one</option>
              {SECTORS.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="mt-5 block">
            <span className="label !text-glacier">What do you want help with?</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="For example: our monthly generation report takes three days to put together."
              className={`${field} resize-none`}
              required
            />
          </label>

          <button type="submit" className="btn btn-primary mt-7 w-full justify-center sm:w-auto">
            Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
