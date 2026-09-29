"use client";

import Image from "next/image";
import Link from "next/link";

const reasons = [
  {
    title: "Saree manufacturers",
    subtitle: "Traditional and contemporary sarees",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M6 20V9l6-5 6 5v11" />
        <path d="M9 20v-6h6v6" />
        <path d="M8 9h8" />
      </svg>
    ),
  },
  {
    title: "Saree wholesalers",
    subtitle: "Bulk orders",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
        <path d="M4 8h16" />
        <path d="M6 8v12h12V8" />
        <path d="M8 8V5h8v3" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </svg>
    ),
  },
  {
    title: "Saree retailers",
    subtitle: "Sarees sold individually",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
        <path d="M3.5 10 5 5h14l1.5 5" />
        <path d="M4 10v9h16v-9" />
        <path d="M3.5 10c0 1.5 1.2 2.5 2.5 2.5S8.5 11.5 8.5 10c0 1.5 1.2 2.5 2.5 2.5s2.5-1 2.5-2.5c0 1.5 1.2 2.5 2.5 2.5s2.5-1 2.5-2.5c0 1.5 1.2 2.5 2.5 2.5" />
        <path d="M8 19v-4h8v4" />
      </svg>
    ),
  },
  {
    title: "Ready-made garment retailers",
    subtitle: "Ready-to-wear collections",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
        <path d="M9 4h6" />
        <path d="M12 4v3" />
        <path d="M7 7h10" />
        <path d="M5 10h14" />
        <path d="M6 10v9h12v-9" />
        <path d="M9 10v5" />
        <path d="M15 10v5" />
      </svg>
    ),
  },
  {
    title: "Fabric manufacturers",
    subtitle: "Fabrics for textile needs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
        <path d="M4 6h16" />
        <path d="M4 18h16" />
        <path d="M6 6v12" />
        <path d="M18 6v12" />
        <path d="M8 9h8" />
        <path d="M8 12h8" />
        <path d="M8 15h8" />
      </svg>
    ),
  },
  {
    title: "Ready-made garment wholesalers",
    subtitle: "Bulk ready-to-wear supply",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
        <path d="M8 5h8l3 4-3 2v8H8v-8L5 9l3-4Z" />
        <path d="M9 5c0 2 1.2 3 3 3s3-1 3-3" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Women's garment retailers",
    subtitle: "Women's ready-to-wear",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
        <path d="M9 5c0 1.7 1.3 3 3 3s3-1.3 3-3" />
        <path d="M9 5c-1 2.5-2 4.5-4 6l3 2 1 7h6l1-7 3-2c-2-1.5-3-3.5-4-6" />
        <path d="M9 20h6" />
      </svg>
    ),
  },
  {
    title: "Ready-made garment manufacturers",
    subtitle: "Manufacturing and sourcing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
        <circle cx="7" cy="17" r="3" />
        <circle cx="17" cy="7" r="2" />
        <path d="M7 14V8h5l3 3v3" />
        <path d="M12 8V5h4" />
        <path d="M15 11h4v6h-2" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
];

/* Carbon focus: 2px #0f62fe */
const focusRing =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f62fe]";

/* Carbon motion: fast-01 110ms, productive easing */
const fast = "duration-[110ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#faf8f4] text-[#161616]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-4 items-center gap-y-10 md:grid-cols-8 md:gap-y-16 lg:grid-cols-12 lg:gap-x-8">
          {/* LEFT CONTENT */}
          <div className="col-span-4 md:col-span-8 lg:col-span-4">
            <div className="max-w-[450px]">
              {/* label-01: 12/16, 0.32px */}
              <p className="mb-4 text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
                What we do
              </p>

              {/* heading-05 (32/40) -> heading-06 (42/50) -> heading-07 (54/64) */}
              <h2 className="max-w-[440px] font-serif text-[32px] font-normal leading-10 md:text-[42px] md:leading-[50px] lg:text-[54px] lg:leading-[64px]">
                Sarees, garments and fabrics in one place
              </h2>

              {/* body-01: 14/20 -> body-02: 16/24 */}
              <p className="mt-6 max-w-[420px] text-sm leading-5 tracking-[0.16px] text-[#525252] md:text-base md:leading-6 md:tracking-normal">
                From our base on Ring Road, Surat, we manufacture, wholesale and retail sarees, ready-made garments and fabrics.
              </p>

              {/* body-compact-01: 14/18, 0.16px */}
              <Link href="#contact" className={`group mt-2 lg:mt-8 inline-flex min-h-12 items-center gap-4 border-b border-[#E34234] text-sm font-medium leading-[18px] tracking-[0.16px] text-[#E34234] transition-all ${fast} hover:gap-6 ${focusRing}`}>
                <span>Know More</span>

                <span aria-hidden="true" className={`text-base leading-none transition-transform ${fast} group-hover:translate-x-1`}>
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative col-span-4 md:col-span-8 lg:col-span-5">
            <div className="relative aspect-[1.35] w-full overflow-hidden">
              <Image
                src="/about/Full_Shop.png"
                alt="Inside the Gouri Pooja Creation store"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT BUSINESS TYPES */}
          <div className="col-span-4 md:col-span-8 lg:col-span-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex items-center gap-3 py-1">
                {/* ICON */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c6c6c6] text-[#E34234]">
                  {reason.icon}
                </div>

                {/* BUSINESS INFORMATION */}
                <div className="min-w-0">
                  {/* body-compact-01 semibold: 14/18, 0.16px */}
                  <h3 className="text-sm font-semibold leading-[18px] tracking-[0.16px] text-[#161616]">
                    {reason.title}
                  </h3>

                  {/* helper-text-01: 12/16, 0.32px */}
                  <p className="mt-1 text-xs leading-4 tracking-[0.32px] text-[#525252]">
                    {reason.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}