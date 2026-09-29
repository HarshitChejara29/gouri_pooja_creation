"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const milestones = [
  {
    year: "2019",
    title: "Established in Surat",
    description: "Gouri Pooja Creation opened on Ring Road, Surat.",
  },
  {
    year: "2022",
    title: "A wider range",
    description:
      "Ready-made garments, fabrics and related categories were added alongside sarees.",
  },
  {
    year: "2024",
    title: "Wholesale, manufacturing, retail",
    description:
      "The business now sells across the textile and garment trade in all three.",
  },
  {
    year: "Today",
    title: "Surat and beyond",
    description:
      "We continue to supply customers in Surat and other cities.",
  },
];

const trustPoints = [
  {
    title: "Manufacturers",
    label: "Sarees and garments",
    icon: "manufacturer",
  },
  {
    title: "Wholesalers",
    label: "Textile and garments",
    icon: "wholesaler",
  },
  {
    title: "Retailers",
    label: "Ready-made and sarees",
    icon: "retailer",
  },
  {
    title: "Distributors",
    label: "Textile and garments",
    icon: "distributor",
  },
];

const facts = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "4.9/5", label: "Customer Rating" },
  { value: "Pan India", label: "Customer Community" },
];

export default function Legacy() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(
      "[data-timeline-item]"
    );

    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.timelineItem
            );

            setActiveMilestone((current) => Math.max(current, index));
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: "-10% 0px -35% 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="legacy"
      className="overflow-hidden bg-[#ffffff] text-[#161616]"
    >
      {/* LEGACY INTRO */}
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-4 items-center gap-y-12 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">
          {/* LEFT CONTENT — NO SLIDE UP ANIMATION */}
          <div className="col-span-4 md:col-span-4 lg:col-span-5">
            {/* LABEL */}
            <p className="mb-4 text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
              Our legacy
            </p>

            {/* HEADING */}
            <h2 className="max-w-[500px] font-serif text-[32px] font-normal leading-10 md:text-[42px] md:leading-[50px] lg:text-[54px] lg:leading-[64px]">
              Manufacturing, wholesale and retail in one business
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[500px] text-sm leading-5 tracking-[0.16px] text-[#525252]">
              Gouri Pooja Creation manufactures sarees and sells them wholesale
              and retail. The range also covers ready-made garments, fabrics
              and ethnic wear, and the business handles distribution too.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative col-span-4 aspect-[1.45] overflow-hidden md:col-span-4 lg:col-span-7">
            <Image
              src="/about/Shop.jpg"
              alt="The Gouri Pooja Creation shop in Surat"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* BUSINESS CATEGORIES */}
      <div className="border-y border-[#c6c6c6]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className={`flex items-center gap-4 px-4 py-6 lg:px-6 ${
                index !== trustPoints.length - 1
                  ? "border-r border-[#c6c6c6]"
                  : ""
              } ${
                index < 2
                  ? "border-b border-[#c6c6c6] lg:border-b-0"
                  : ""
              }`}
            >
              {/* ICON */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center text-[#E34234]">
                {point.icon === "manufacturer" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M3 21V10l6 3V9l6 3V6l6 3v12H3Z" />
                    <path d="M6 17h2M6 20h2M11 17h2M11 20h2M16 17h2M16 20h2" />
                    <path d="M18 6V3h3v7" />
                  </svg>
                )}

                {point.icon === "wholesaler" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M3 7.5 12 3l9 4.5L12 12 3 7.5Z" />
                    <path d="M3 7.5V16l9 5 9-5V7.5" />
                    <path d="M12 12v9" />
                    <path d="M7.5 10 16 5.75" />
                  </svg>
                )}

                {point.icon === "retailer" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M4 10v10h16V10" />
                    <path d="M3 10 5 4h14l2 6" />
                    <path d="M3 10c.5 1.3 1.5 2 3 2s2.5-.7 3-2c.5 1.3 1.5 2 3 2s2.5-.7 3-2c.5 1.3 1.5 2 3 2s2.5-.7 3-2" />
                    <path d="M9 20v-5h6v5" />
                  </svg>
                )}

                {point.icon === "distributor" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
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
                <p className="text-sm font-semibold leading-[18px] tracking-[0.16px] text-[#161616]">
                  {point.title}
                </p>

                <p className="mt-1 text-xs leading-4 tracking-[0.32px] text-[#525252]">
                  {point.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="bg-[#faf8f4] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
        {/* TIMELINE HEADER */}
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 text-center md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <p className="mb-2 text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234] lg:mb-4">
              Timeline
            </p>

            <h2 className="font-serif text-[32px] font-normal leading-10 md:text-[42px] md:leading-[50px] lg:text-[54px] lg:leading-[64px]">
              How we got here
            </h2>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-14 md:mt-28">
          {/* BASE TIMELINE LINE */}
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-0 h-full w-px bg-[#c6c6c6] md:left-1/2 md:-translate-x-1/2"
          />

          {/* ACTIVE TIMELINE LINE */}
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-0 z-[1] w-px bg-[#E34234] transition-[height] duration-500 ease-out md:left-1/2 md:-translate-x-1/2"
            style={{
              height: `${((activeMilestone + 1) / milestones.length) * 100}%`,
            }}
          />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => {
              const isRight = index % 2 === 1;
              const isActive = index <= activeMilestone;

              return (
                <div
                  key={milestone.year}
                  data-timeline-item={index}
                  className="relative grid grid-cols-4 md:min-h-[200px] md:grid-cols-8 lg:grid-cols-12"
                >
                  {/* DESKTOP LEFT */}
                  <div
                    className={`hidden md:block md:col-span-4 lg:col-span-5 ${
                      isRight
                        ? "md:col-start-1 md:text-right"
                        : "md:col-start-1"
                    }`}
                  >
                    {!isRight && (
                      <div
                        className={`flex justify-end pr-12 lg:pr-16 transform-gpu transition-all duration-[650ms] ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transform-none motion-reduce:transition-none ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >
                        <div className="max-w-[430px]">
                          <p className="font-serif text-[32px] leading-10 text-[#E34234]">
                            {milestone.year}
                          </p>

                          <h3 className="mt-2 font-serif text-xl font-normal leading-7 text-[#161616]">
                            {milestone.title}
                          </h3>

                          <p className="mt-2 text-sm leading-5 tracking-[0.16px] text-[#525252]">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* DESKTOP RIGHT */}
                  <div
                    className={`hidden md:block md:col-span-4 lg:col-span-5 ${
                      isRight
                        ? "md:col-start-5 md:pl-12 lg:col-start-8 lg:pl-16"
                        : "md:col-start-5 lg:col-start-8"
                    }`}
                  >
                    {isRight && (
                      <div
                        className={`transform-gpu transition-all duration-[650ms] ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transform-none motion-reduce:transition-none ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >
                        <p className="font-serif text-[32px] leading-10 text-[#E34234]">
                          {milestone.year}
                        </p>

                        <h3 className="mt-2 font-serif text-xl font-normal leading-7 text-[#161616]">
                          {milestone.title}
                        </h3>

                        <p className="mt-2 text-sm leading-5 tracking-[0.16px] text-[#525252]">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* TIMELINE PIN */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-[7px] top-0 z-10 h-4 w-4 -translate-x-1/2 border-2 border-white transform-gpu transition-all duration-500 ease-out md:left-1/2 ${
                      isActive
                        ? "scale-100 bg-[#E34234]"
                        : "scale-75 bg-[#c6c6c6]"
                    }`}
                  />

                  {/* MOBILE */}
                  <div
                    className={`col-span-4 pl-7 md:hidden transform-gpu transition-all duration-[650ms] ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transform-none motion-reduce:transition-none ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    <p className="font-serif text-[32px] leading-10 text-[#E34234]">
                      {milestone.year}
                    </p>

                    <h3 className="mt-2 font-serif text-xl font-normal leading-7 text-[#161616]">
                      {milestone.title}
                    </h3>

                    <p className="mt-2 max-w-[500px] text-sm leading-5 tracking-[0.16px] text-[#525252]">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CUSTOMERS / TRUSTED BY MANY */}
      <div
        className="relative overflow-hidden text-[#f4f4f4]"
        style={{
          backgroundImage: "url('/about/trust_banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 px-5 py-12 sm:px-8 sm:py-24 md:py-28 lg:px-12 lg:py-22">
          <div className="mx-auto max-w-[1280px]">
            {/* INTRO */}
            <div className="mx-auto max-w-[820px] text-center">
              <div className="mb-6 flex items-center justify-center gap-4">
                <span className="h-px w-10 bg-[#d2b98f]/60 sm:w-14" />

                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#e4d7c0] sm:text-[11px]">
                  Trusted By Many
                </p>

                <span className="h-px w-10 bg-[#d2b98f]/60 sm:w-14" />
              </div>

              <h2 className="font-serif text-[34px] font-normal leading-[1.12] tracking-[-0.02em] text-[#f7f3ed] sm:text-[42px] md:text-[50px] lg:text-[54px]">
                Quality Products.
                <br className="hidden sm:block" /> Dedicated Service.
              </h2>

              <p className="mx-auto mt-6 max-w-[650px] text-[14px] leading-6 text-[#e0ddd8] sm:text-[15px] md:text-base">
                We serve retail and wholesale customers, and our team helps
                with questions before and after an order.
              </p>
            </div>

            {/* FACTS */}
            <div className="mx-auto mt-8 max-w-[1080px] border-y border-white/25">
              <div className="grid grid-cols-1 sm:grid-cols-3">
                {facts.map((fact, index) => (
                  <div
                    key={fact.label}
                    className={`relative px-6 py-6 text-center sm:px-8 sm:py-9 md:px-10 md:py-8 ${
                      index !== 0
                        ? "border-t border-white/20 sm:border-l sm:border-t-0"
                        : ""
                    }`}
                  >
                    <p className="font-serif text-[34px] font-normal leading-none tracking-[-0.01em] text-[#d2b98f] sm:text-[38px] md:text-[42px]">
                      {fact.value}
                    </p>

                    <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#ddd8d0] sm:text-[11px]">
                      {fact.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}