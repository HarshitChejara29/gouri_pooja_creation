"use client";

import { FormEvent, useState } from "react";

/* Carbon focus: 2px #0f62fe */
const focusRing =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f62fe]";

/* Carbon motion: fast-01 110ms, productive easing */
const fast = "duration-[110ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

/* Carbon text input: #f4f4f4 field, bottom border, inset 2px focus */
const field = `w-full rounded-none border-0 border-b border-[#8d8d8d] bg-[#faf8f4] px-4 text-sm leading-[18px] tracking-[0.16px] text-[#161616] placeholder:text-[#6f6f6f] transition-colors ${fast} focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#0f62fe]`;

/* label-01: 12/16, 0.32px */
const label = "mb-2 block text-xs leading-4 tracking-[0.32px] text-[#525252]";

/* helper for the detail rows */
const rowLabel = "text-xs leading-4 tracking-[0.32px] text-[#525252]";
const rowValue = "mt-1 text-sm leading-5 tracking-[0.16px] text-[#161616]";
const rowLink = `${rowValue} block transition-colors ${fast} hover:text-[#E34234] ${focusRing}`;

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // TODO: this only waits 1 second and sends nothing.
    // Replace with a real request (API route, email service, etc.)
    // before going live, or enquiries will never reach you.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-[#ffffff] text-[#161616]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-4 gap-y-12 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">
          {/* LEFT — CONTACT INFORMATION */}
          <div className="col-span-4 md:col-span-8 lg:col-span-4">
            <div className="max-w-[400px]">
              <p className="text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
                Contact
              </p>

              {/* heading-05 (32/40) -> heading-06 (42/50) -> heading-07 (54/64) */}
              <h2 className="mt-4 font-serif text-[32px] font-normal leading-10 md:text-[42px] md:leading-[50px] lg:text-[54px] lg:leading-[64px]">
                Visit, call or write to us
              </h2>

              <p className="mt-6 text-sm leading-5 tracking-[0.16px] text-[#525252] md:text-base md:leading-6 md:tracking-normal">
                Have a question about sarees, garments or fabrics, or a wholesale or retail order? Write to us or call the shop.
              </p>
            </div>

            <div className="mt-10 border-t border-[#c6c6c6]">
              <div className="flex min-h-[82px] items-center gap-4 border-b border-[#c6c6c6]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#E34234]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className={rowLabel}>Address</p>
                  <p className={rowValue}>
                    Upper Ground, Ring Road, Surat,
                    <br />
                    Gujarat 395002
                  </p>
                </div>
              </div>

              <div className="flex min-h-[70px] items-center gap-4 border-b border-[#c6c6c6]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#E34234]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <path d="M6.5 3.5h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.5 19.5 4.5 13.5 4.5 6c0-1.4.9-2.5 2-2.5Z" />
                  </svg>
                </div>

                <div>
                  <p className={rowLabel}>Phone</p>
                  <a href="tel:07947149991" className={rowLink}>
                    07947149991
                  </a>
                </div>
              </div>

              <div className="flex min-h-[70px] items-center gap-4 border-b border-[#c6c6c6]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#E34234]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="1.5" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className={rowLabel}>Email</p>
                  <a href="mailto:gouripoojacreations@gmail.com" className={`${rowLink} break-all`}>
                    gouripoojacreations@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex min-h-[70px] items-center gap-4 border-b border-[#c6c6c6]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#E34234]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>

                <div>
                  <p className={rowLabel}>Hours</p>
                  <p className={rowValue}>Mon to Sat, 11:00 AM to 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER — CONTACT FORM */}
          <div className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-5">
            <div className="border-t border-[#c6c6c6] pt-6">
              {/* heading-03: 20/28 */}
              <h3 className="font-serif text-xl font-normal leading-7 text-[#161616]">
                Send an enquiry
              </h3>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={label}>Name</label>
                    <input id="name" type="text" name="name" autoComplete="name" required className={`h-12 ${field}`} />
                  </div>

                  <div>
                    <label htmlFor="email" className={label}>Email</label>
                    <input id="email" type="email" name="email" autoComplete="email" placeholder="name@example.com" required className={`h-12 ${field}`} />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={label}>Phone</label>
                    <input id="phone" type="tel" name="phone" autoComplete="tel" required className={`h-12 ${field}`} />
                  </div>

                  <div>
                    <label htmlFor="subject" className={label}>Subject (optional)</label>
                    <input id="subject" type="text" name="subject" className={`h-12 ${field}`} />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={label}>Message</label>
                  <textarea id="message" name="message" placeholder="Tell us what you're looking for" rows={6} required className={`resize-none py-3 ${field}`} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`mt-1 flex h-12 w-full items-center justify-center gap-4 bg-[#E34234] px-5 text-sm font-medium leading-[18px] tracking-[0.16px] text-white transition-colors ${fast} hover:bg-[#a2191f] disabled:cursor-not-allowed disabled:bg-[#c6c6c6] disabled:text-[#8d8d8d] ${focusRing}`}
                >
                  <span>{loading ? "Sending..." : "Send message"}</span>
                  {!loading && <span aria-hidden="true" className="text-base leading-none">→</span>}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT — LOCATION */}
          <div className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-10">
            <div className="border-t border-[#c6c6c6] pt-6">
              <h3 className="font-serif text-xl font-normal leading-7 text-[#161616]">
                Find us
              </h3>

              <div className="mt-5 overflow-hidden border border-[#c6c6c6] bg-[#e0e0e0]">
                <div className="relative aspect-[0.9] w-full">
                  <iframe
                    title="Map showing Gouri Pooja Creation on Ring Road, Surat"
                    src="https://www.google.com/maps?q=Upper+Ground,+Ring+Road,+Surat,+Gujarat+395002&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="border-x border-b border-[#c6c6c6] px-4 py-4">
                <p className="text-xs leading-4 tracking-[0.32px] text-[#525252]">
                  Upper Ground, Ring Road, Surat,
                  <br />
                  Gujarat 395002
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Upper+Ground%2C+Ring+Road%2C+Surat%2C+Gujarat+395002"
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-4 inline-flex min-h-12 items-center border-b border-[#E34234] text-sm font-medium leading-[18px] tracking-[0.16px] text-[#E34234] transition-colors ${fast} hover:text-[#a2191f] ${focusRing}`}
                >
                  Open in Google Maps
                  <span className="sr-only"> (opens in a new tab)</span>
                  <span aria-hidden="true" className="ml-3 text-base">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}