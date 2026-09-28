"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-[#ffffff] text-[#1d1915]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-4 gap-y-12 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">
          {/* LEFT — CONTACT INFORMATION */}
          <div className="col-span-4 md:col-span-8 lg:col-span-4">
            <div className="max-w-[400px]">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#E34234]">
                Contact Us
              </p>

              <h2 className="mt-5 font-serif text-[42px] font-normal leading-[1.04] tracking-[-0.8px] text-[#181512] md:text-[48px] lg:text-[52px]">
                Get In Touch
              </h2>

              <p className="mt-6 text-[13px] leading-6 text-[#827b74] md:text-[14px] md:leading-7">
                Looking for sarees, ready-made garments, fabrics or wholesale and retail requirements? Get in touch with Gouri Pooja Creation for more information about our products and services.
              </p>
            </div>

            <div className="mt-10 border-t border-[#ddd4c8]">
              <div className="flex min-h-[82px] items-center gap-4 border-b border-[#ddd4c8]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#E34234]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#8c857d]">
                    Visit Us
                  </p>
                  <p className="mt-1 text-[12px] leading-5 text-[#302b27]">
                    upper ground, Ring Road, Surat,
                    <br />
                    Gujarat - 395002
                  </p>
                </div>
              </div>

              <div className="flex min-h-[70px] items-center gap-4 border-b border-[#ddd4c8]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#E34234]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <path d="M6.5 3.5h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.5 19.5 4.5 13.5 4.5 6c0-1.4.9-2.5 2-2.5Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#8c857d]">
                    Call Us
                  </p>
                  <a href="tel:07947149991" className="mt-1 block text-[12px] text-[#302b27] outline-none transition-colors duration-150 hover:text-[#E34234]">
                    07947149991
                  </a>
                </div>
              </div>

              <div className="flex min-h-[70px] items-center gap-4 border-b border-[#ddd4c8]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#E34234]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="1.5" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#8c857d]">
                    Email Us
                  </p>
                  <a href="mailto:gouripoojacreations@gmail.com" className="mt-1 block break-all text-[12px] text-[#302b27] outline-none transition-colors duration-150 hover:text-[#E34234]">
                    gouripoojacreations@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex min-h-[70px] items-center gap-4 border-b border-[#ddd4c8]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#E34234]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#8c857d]">
                    Store Hours
                  </p>
                  <p className="mt-1 text-[12px] text-[#302b27]">
                    Mon - Sat · 11:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER — CONTACT FORM */}
          <div className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-5">
            <div className="border-t border-[#ddd4c8] pt-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8c857d]">
                Send an Enquiry
              </p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-[10px] font-medium uppercase tracking-[0.1em] text-[#5f5851]">
                      Name
                    </label>
                    <input id="name" type="text" name="name" placeholder="Your Name" required className="h-12 w-full rounded-none border border-[#dcd3c8] bg-white px-4 text-[12px] text-[#302b27] outline-none placeholder:text-[#a69e96] transition-colors duration-150 focus:border-[#E34234]" />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-[10px] font-medium uppercase tracking-[0.1em] text-[#5f5851]">
                      Email
                    </label>
                    <input id="email" type="email" name="email" placeholder="Your Email" required className="h-12 w-full rounded-none border border-[#dcd3c8] bg-white px-4 text-[12px] text-[#302b27] outline-none placeholder:text-[#a69e96] transition-colors duration-150 focus:border-[#E34234]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-[10px] font-medium uppercase tracking-[0.1em] text-[#5f5851]">
                      Phone
                    </label>
                    <input id="phone" type="tel" name="phone" placeholder="Phone Number" className="h-12 w-full rounded-none border border-[#dcd3c8] bg-white px-4 text-[12px] text-[#302b27] outline-none placeholder:text-[#a69e96] transition-colors duration-150 focus:border-[#E34234]" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-[10px] font-medium uppercase tracking-[0.1em] text-[#5f5851]">
                      Subject
                    </label>
                    <input id="subject" type="text" name="subject" placeholder="Subject" className="h-12 w-full rounded-none border border-[#dcd3c8] bg-white px-4 text-[12px] text-[#302b27] outline-none placeholder:text-[#a69e96] transition-colors duration-150 focus:border-[#E34234]" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-[10px] font-medium uppercase tracking-[0.1em] text-[#5f5851]">
                    Message
                  </label>
                  <textarea id="message" name="message" placeholder="Tell us how we can help" rows={6} required className="w-full resize-none rounded-none border border-[#dcd3c8] bg-white px-4 py-3 text-[12px] leading-6 text-[#302b27] outline-none placeholder:text-[#a69e96] transition-colors duration-150 focus:border-[#E34234]" />
                </div>

                <button type="submit" disabled={loading} className="mt-1 flex h-12 w-full items-center justify-center gap-4 bg-[#E34234] px-5 text-[12px] font-medium text-white outline-none transition-colors duration-150 hover:bg-[#720613] disabled:cursor-not-allowed disabled:opacity-70">
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  {!loading && <span className="text-[16px] leading-none">→</span>}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT — LOCATION */}
          <div className="col-span-4 md:col-span-3 lg:col-span-3 lg:col-start-10">
            <div className="border-t border-[#ddd4c8] pt-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8c857d]">
                Find Us
              </p>

              <div className="mt-5 overflow-hidden border border-[#ddd4c8] bg-[#f1f4f3]">
                <div className="relative aspect-[0.9] w-full">
                  <iframe
                    title="Gouri Pooja Creations Location"
                    src="https://www.google.com/maps?q=Upper+Ground,+Ring+Road,+Surat,+Gujarat+395002&output=embed"
                    className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="border-x border-b border-[#ddd4c8] px-4 py-4">
                <p className="text-[11px] leading-5 text-[#5f5851]">
                  Upper Ground, Ring Road, Surat,
                  <br />
                  Gujarat - 395002
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Upper+Ground%2C+Ring+Road%2C+Surat%2C+Gujarat+395002"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex min-h-10 items-center border-b border-[#E34234] text-[10px] font-medium uppercase tracking-[0.1em] text-[#E34234] outline-none transition-colors duration-150 hover:text-[#720613]"
                >
                  Open in Maps
                  <span className="ml-3 text-[14px]">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}