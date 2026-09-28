"use client";

import Image from "next/image";
import Link from "next/link";

const reasons = [
  {
    title: "Saree Manufacturers",
    subtitle: "Traditional & contemporary sarees",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
        <path d="M4 20h16" />
        <path d="M6 20V9l6-5 6 5v11" />
        <path d="M9 20v-6h6v6" />
        <path d="M8 9h8" />
      </svg>
    ),
  },
  {
    title: "Saree Wholesalers",
    subtitle: "Collections for bulk requirements",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
        <path d="M4 8h16" />
        <path d="M6 8v12h12V8" />
        <path d="M8 8V5h8v3" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </svg>
    ),
  },
  {
    title: "Saree Retailers",
    subtitle: "Curated designs for retail",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
        <path d="M3.5 10 5 5h14l1.5 5" />
        <path d="M4 10v9h16v-9" />
        <path d="M3.5 10c0 1.5 1.2 2.5 2.5 2.5S8.5 11.5 8.5 10c0 1.5 1.2 2.5 2.5 2.5s2.5-1 2.5-2.5c0 1.5 1.2 2.5 2.5 2.5s2.5-1 2.5-2.5c0 1.5 1.2 2.5 2.5 2.5" />
        <path d="M8 19v-4h8v4" />
      </svg>
    ),
  },
  {
    title: "Ready-made Garment Retailers",
    subtitle: "Ready-to-wear collections",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
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
    title: "Fabric Manufacturers",
    subtitle: "Fabrics & textile requirements",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
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
    title: "Ready-made Garment Wholesalers",
    subtitle: "Bulk ready-to-wear supply",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
        <path d="M8 5h8l3 4-3 2v8H8v-8L5 9l3-4Z" />
        <path d="M9 5c0 2 1.2 3 3 3s3-1 3-3" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Women Ready-made Garment Retailers",
    subtitle: "Fashion-led retail collections",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
        <path d="M9 5c0 1.7 1.3 3 3 3s3-1.3 3-3" />
        <path d="M9 5c-1 2.5-2 4.5-4 6l3 2 1 7h6l1-7 3-2c-2-1.5-3-3.5-4-6" />
        <path d="M9 20h6" />
      </svg>
    ),
  },
  {
    title: "Ready-made Garment Manufacturers",
    subtitle: "Manufacturing & sourcing needs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
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

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#faf8f4] text-[#1d1915]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-4 items-center gap-y-14 md:grid-cols-8 md:gap-y-16 lg:grid-cols-12 lg:gap-x-8">

          {/* LEFT CONTENT */}

          <div className="col-span-4 md:col-span-8 lg:col-span-4">
            <div className="max-w-[450px]">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#E34234]">
                Why Choose Us
              </p>

              <h2 className="max-w-[440px] font-serif text-[40px] font-normal leading-[1.05] tracking-[-0.8px] md:text-[48px] lg:text-[52px]">
                A Wide Range,
                <br />
                All Under One Roof
              </h2>

              <p className="mt-7 max-w-[420px] text-[13px] leading-6 text-[#858078] md:text-[14px] md:leading-7">
                Gouri Pooja Creation offers products and services to cater to
                varied customer requirements, including sarees, ready-made
                garments and fabrics.
              </p>

              <Link href="#why-us" className="group mt-8 inline-flex min-h-12 items-center gap-4 border-b border-[#E34234] text-[12px] font-medium text-[#E34234] outline-none transition-all duration-150 hover:gap-6">
                <span>Learn More</span>

                <span aria-hidden="true" className="text-[16px] leading-none transition-transform duration-150 group-hover:translate-x-1">
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
                alt="Gouri Pooja Creations store"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* RIGHT BUSINESS TYPES */}

          <div className="col-span-4 md:col-span-8 lg:col-span-3">

              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-center gap-3 py-1">

                  {/* ICON */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#ded5c8] text-[#E34234]">
                    {reason.icon}
                  </div>

                  {/* BUSINESS INFORMATION */}

                  <div className="min-w-0">
                    <h3 className="text-[11px] font-semibold leading-[1.35] text-[#3d3833] md:text-[12px]">
                      {reason.title}
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-[#968e86]">
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