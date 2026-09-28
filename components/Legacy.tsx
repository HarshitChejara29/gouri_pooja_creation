"use client";

import Image from "next/image";

const milestones = [
  {
    year: "2019",
    title: "Established in Surat",
    description:
      "Gouri Pooja Creation was established in 2019 in Ring Road, Surat.",
  },
  {
    year: "2022",
    title: "Expanding Product Range",
    description:
      "The business expanded its offerings across sarees, ready-made garments, fabrics and related categories.",
  },
  {
    year: "2024",
    title: "Wholesale • Manufacturing • Retails",
    description:
      "Serving customers through multiple areas of the textile and garment trade.",
  },
  {
    year: "Today",
    title: "Serving Varied Customer Requirements",
    description:
      "Continuing to provide products and assistance to customers with a focus on service and convenience.",
  },
];

const trustPoints = [
  {
    number: "MANUFACTURERS",
    label: "Saree & Garment",
    icon: "manufacturer",
  },
  {
    number: "WHOLESALERS",
    label: "Textile & Garments",
    icon: "wholesaler",
  },
  {
    number: "RETAILERS",
    label: "Ready-Made & Sarees",
    icon: "retailer",
  },
  {
    number: "DISTRIBUTORS",
    label: "Textile & Garment",
    icon: "distributor",
  },
];

export default function Legacy() {
  return (
    <section id="legacy" className="overflow-hidden bg-[#ffffff] text-[#211c18]">

      {/* =================================================
          LEGACY INTRO
      ================================================= */}

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">

        <div className="grid grid-cols-4 items-center gap-y-12 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">

          {/* LEFT CONTENT */}

          <div className="col-span-4 md:col-span-4 lg:col-span-5">

            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#E34234]">
              Our Lagacy
            </p>

            <h2 className="max-w-[500px] font-serif text-[42px] font-normal leading-[1.04] tracking-[-0.8px] md:text-[52px] lg:text-[60px]">
              One Destination.
              <br />
              Many Possibilities.
            </h2>

            <p className="mt-7 max-w-[500px] text-[13px] leading-6 text-[#7e756d] md:text-[14px] md:leading-7">
              Gouri Pooja Creation caters to varied customer requirements through its wide range of products and services. The business operates across manufacturing, wholesale, retail, distribution and other areas of the garment and textile trade.
            </p>

          </div>

          {/* IMAGE */}

          <div className="relative col-span-4 aspect-[1.45] overflow-hidden md:col-span-4 lg:col-span-7">

            <Image
              src="/about/Shop.jpg"
              alt="Traditional Indian textile craftsmanship"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 58vw"
              className="object-cover"
            />

            <div aria-hidden="true" className="absolute inset-0 bg-black/5" />

          </div>

        </div>

      </div>

      {/* =================================================
          BUSINESS CATEGORIES
      ================================================= */}

      <div className="border-y border-[#ded4c7]">

        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">

          {trustPoints.map((point, index) => (

            <div
              key={point.label}
              className={`flex items-center gap-4 px-5 py-6 lg:px-6 ${index !== trustPoints.length - 1 ? "border-r border-[#ded4c7]" : ""} ${index < 2 ? "border-b border-[#ded4c7] lg:border-b-0" : ""}`}
            >

              {/* ICON */}

              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#E34234]">

                {point.icon === "manufacturer" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
                    <path d="M3 21V10l6 3V9l6 3V6l6 3v12H3Z" />
                    <path d="M6 17h2M6 20h2M11 17h2M11 20h2M16 17h2M16 20h2" />
                    <path d="M18 6V3h3v7" />
                  </svg>
                )}

                {point.icon === "wholesaler" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
                    <path d="M3 7.5 12 3l9 4.5L12 12 3 7.5Z" />
                    <path d="M3 7.5V16l9 5 9-5V7.5" />
                    <path d="M12 12v9" />
                    <path d="M7.5 10 16 5.75" />
                  </svg>
                )}

                {point.icon === "retailer" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
                    <path d="M4 10v10h16V10" />
                    <path d="M3 10 5 4h14l2 6" />
                    <path d="M3 10c.5 1.3 1.5 2 3 2s2.5-.7 3-2c.5 1.3 1.5 2 3 2s2.5-.7 3-2c.5 1.3 1.5 2 3 2s2.5-.7 3-2" />
                    <path d="M9 20v-5h6v5" />
                  </svg>
                )}

                {point.icon === "distributor" && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6" aria-hidden="true">
                    <path d="M3 6h11v11H3z" />
                    <path d="M14 10h4l3 3v4h-7z" />
                    <circle cx="7" cy="19" r="2" />
                    <circle cx="18" cy="19" r="2" />
                    <path d="M14 14h7" />
                  </svg>
                )}

              </div>

              {/* TEXT */}

              <div>

                <p className="text-[11px] font-semibold leading-none text-[#E34234] md:text-[12px]">
                  {point.number}
                </p>

                <p className="mt-1.5 text-[11px] text-[#8a8178]">
                  {point.label}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* =================================================
          TIMELINE
      ================================================= */}

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">

        {/* TIMELINE HEADER */}

        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">

          <div className="col-span-4 text-center md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3">

            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#E34234]">
              A Journey Through Time
            </p>

            <h2 className="font-serif text-[40px] font-normal leading-[1.05] tracking-[-0.8px] md:text-[50px]">
              Our Story, Year by Year
            </h2>

          </div>

        </div>

        {/* TIMELINE */}

        <div className="relative mt-14 md:mt-20">

          {/* CENTER / MOBILE LINE */}

          <div aria-hidden="true" className="absolute left-[7px] top-0 h-full w-px bg-[#d9cec0] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">

            {milestones.map((milestone, index) => {

              const isRight = index % 2 === 1;

              return (

                <div key={milestone.year} className="relative grid grid-cols-4 md:min-h-[200px] md:grid-cols-8 lg:grid-cols-12">

                  {/* DESKTOP LEFT */}

                  <div className={`hidden md:block md:col-span-4 lg:col-span-5 ${isRight ? "md:col-start-1 md:text-right" : "md:col-start-1"}`}>

                    {!isRight && (

                      <div className="flex justify-end pr-12 lg:pr-16">

                        <div className="max-w-[430px]">

                          <p className="font-serif text-[30px] leading-none text-[#E34234]">
                            {milestone.year}
                          </p>

                          <h3 className="mt-3 font-serif text-[24px] leading-tight text-[#211c18]">
                            {milestone.title}
                          </h3>

                          <p className="mt-3 text-[13px] leading-6 text-[#827970]">
                            {milestone.description}
                          </p>

                        </div>

                      </div>

                    )}

                  </div>

                  {/* DESKTOP RIGHT */}

                  <div className={`hidden md:block md:col-span-4 lg:col-span-5 ${isRight ? "md:col-start-5 lg:col-start-8 md:pl-12 lg:pl-16" : "md:col-start-5 lg:col-start-8"}`}>

                    {isRight && (

                      <div className="max-w-[430px]">

                        <p className="font-serif text-[30px] leading-none text-[#E34234]">
                          {milestone.year}
                        </p>

                        <h3 className="mt-3 font-serif text-[24px] leading-tight text-[#211c18]">
                          {milestone.title}
                        </h3>

                        <p className="mt-3 text-[13px] leading-6 text-[#827970]">
                          {milestone.description}
                        </p>

                      </div>

                    )}

                  </div>

                  {/* TIMELINE MARKER */}

                  <div aria-hidden="true" className="absolute left-[7px] top-0 z-10 h-4 w-4 -translate-x-1/2 border-2 border-[#f5f0e8] bg-[#E34234] md:left-1/2" />

                  {/* MOBILE */}

                  <div className="col-span-4 pl-7 md:hidden">

                    <p className="font-serif text-[30px] leading-none text-[#E34234]">
                      {milestone.year}
                    </p>

                    <h3 className="mt-3 font-serif text-[24px] leading-tight text-[#211c18]">
                      {milestone.title}
                    </h3>

                    <p className="mt-3 max-w-[500px] text-[13px] leading-6 text-[#827970]">
                      {milestone.description}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>

      {/* =================================================
          TRUSTED BY MANY
      ================================================= */}

      <div className="bg-[#191b14] px-4 py-16 text-white sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">

        <div className="mx-auto grid max-w-[1440px] grid-cols-4 md:grid-cols-8 lg:grid-cols-12">

          <div className="col-span-4 text-center md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3">

            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9b38e]">
              Trusted By Many
            </p>

            <h2 className="font-serif text-[40px] font-normal leading-[1.08] tracking-[-0.8px] md:text-[52px]">
              Quality Products.
              <br />
              Dedicated Service.
            </h2>

            <p className="mx-auto mt-6 max-w-[620px] text-[13px] leading-6 text-white/60 md:text-[14px] md:leading-7">
              Gouri Pooja Creation offers a wide range of products and services designed to cater to the varied requirements of its customers, supported by courteous and prompt assistance.
            </p>

            {/* CUSTOMER TRUST */}

            <div className="mt-12 grid grid-cols-1 border-y border-white/10 sm:grid-cols-3">

              <div className="px-5 py-6 sm:border-r sm:border-white/10">

                <p className="font-serif text-[28px] leading-none text-[#d2b98f]">
                  10,000+
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/50">
                  Happy Customers
                </p>

              </div>

              <div className="border-t border-white/10 px-5 py-6 sm:border-r sm:border-t-0 sm:border-white/10">

                <p className="font-serif text-[28px] leading-none text-[#d2b98f]">
                  4.9/5
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/50">
                  Customer Rating
                </p>

              </div>

              <div className="border-t border-white/10 px-5 py-6 sm:border-t-0">

                <p className="font-serif text-[28px] leading-none text-[#d2b98f]">
                  Pan India
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/50">
                  Customer Community
                </p>

              </div>

            </div>

            {/* QUOTE */}

            <div className="mx-auto mt-12 max-w-[700px]">

              <p className="font-serif text-[22px] italic leading-relaxed text-white/85 md:text-[26px]">
                “Every saree carries a story.
                <br />
                We are grateful to be part of yours.”
              </p>

              <p className="mt-5 text-[9px] uppercase tracking-[0.25em] text-[#c9b38e]">
                Gouri Pooja Creations
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}