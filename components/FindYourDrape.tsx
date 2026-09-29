"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const categories = [
  {
    title: "Net Saree",
    subtitle: "Light and sheer, easy to drape",
    image: "/category/Net-Saree.jpg",
  },
  {
    title: "Silk Saree",
    subtitle: "For weddings and festivals",
    image: "/category/Silk_Saree.jpg",
  },
  {
    title: "Fancy Saree",
    subtitle: "Embellished, for evenings out",
    image: "/category/Fancy_Saree.jpg",
  },
  {
    title: "Ready to wear Saree",
    subtitle: "Pre-pleated, on in minutes",
    image: "/category/Ready_to_wear_Saree.jpg",
  },
  {
    title: "Cotton Saree",
    subtitle: "Breathable, for daily wear",
    image: "/category/Cotton_Saree.jpg",
  },
  {
    title: "Anarkali Suits",
    subtitle: "Flared, floor-length cuts",
    image: "/category/Anarkli.jpg",
  },
  {
    title: "Suits",
    subtitle: "Matched sets with dupatta",
    image: "/category/Suit.png",
  },
  {
    title: "Kurtis",
    subtitle: "For work and weekdays",
    image: "/category/Kurti.jpg",
  },
];

/* Carbon 32px arrow icons */
const ArrowLeft = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 32 32"
    fill="currentColor"
  >
    <path d="M14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6 4 16 14 26z" />
  </svg>
);

const ArrowRight = () => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 32 32"
    fill="currentColor"
  >
    <path d="M18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z" />
  </svg>
);

/* Carbon focus */
const focusRing =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f62fe]";

/* Carbon motion */
const fast =
  "duration-[110ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

const moderate =
  "duration-[240ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

export default function FindYourDrape() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 350 : -350,
      behavior: "smooth",
    });
  };

  const arrowButton = `flex h-12 w-12 shrink-0 items-center justify-center border border-[#8d8d8d] bg-transparent text-[#161616] transition-colors ${fast} hover:border-[#E34234] hover:bg-[#E34234] hover:text-white ${focusRing}`;

  return (
    <section className="w-full bg-[#ffffff] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px] sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-4 gap-y-10 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="col-span-4 md:col-span-3 lg:col-span-3">
            <p className="mb-4 text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
              Shop by category
            </p>

            <h2 className="max-w-[260px] font-serif text-[32px] font-normal leading-[40px] text-[#161616] md:text-[42px] lg:text-[54px] md:leading-[50px]">
              Find
              <br />
              your drape
            </h2>

            <p className="mt-4 max-w-[240px] text-sm leading-5 tracking-[0.16px] text-[#525252]">
              Eight categories, from festive silks to everyday cotton.
            </p>

            {/* =================================================
                DESKTOP / TABLET CONTROLS
                Hidden on mobile
            ================================================= */}
            <div className="mt-8 hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous categories"
                className={arrowButton}
              >
                <ArrowLeft />
              </button>

              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next categories"
                className={arrowButton}
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* =====================================================
              CATEGORY CAROUSEL
          ===================================================== */}
          <div className="col-span-4 min-w-0 md:col-span-5 lg:col-span-9">
            <div
              ref={scrollRef}
              className="scrollbar-hide w-full overflow-x-auto"
            >
              <div className="flex w-max gap-4 lg:gap-7">
                {categories.map((category, index) => (
                  <Link
                    key={`${category.title}-${index}`}
                    href="#collections"
                    className={`group block w-[224px] shrink-0 ${focusRing}`}
                  >
                    <div className="relative aspect-[0.68] overflow-hidden rounded-t-[110px] bg-[#e0e0e0]">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="224px"
                        className={`object-cover transition-transform ${moderate} group-hover:scale-[1.03] motion-reduce:group-hover:scale-100`}
                      />
                    </div>

                    <div className="border-b border-[#c6c6c6] py-4">
                      <h3 className="font-serif text-xl font-normal leading-7 text-[#161616]">
                        {category.title}
                      </h3>

                      <div className="mt-2 flex items-center justify-between gap-3">
                        <p className="text-xs leading-4 tracking-[0.32px] text-[#525252]">
                          {category.subtitle}
                        </p>

                        <span
                          aria-hidden="true"
                          className={`shrink-0 text-base text-[#E34234] opacity-0 transition-all ${fast} group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100`}
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* =================================================
                MOBILE CONTROLS
                BELOW CATEGORY CAROUSEL + RIGHT ALIGNED
            ================================================= */}
            <div className="mt-5 flex items-center justify-end gap-2 sm:hidden">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous categories"
                className={arrowButton}
              >
                <ArrowLeft />
              </button>

              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next categories"
                className={arrowButton}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}