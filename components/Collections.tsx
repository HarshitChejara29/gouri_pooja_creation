"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const products = [
  {
    name: "Banarasi silk saree, floral pattern",
    price: "₹ 2,499",
    image: "/collection/collection1.jpg",
  },
  {
    name: "Organza saree, floral print, pearl lace border",
    price: "₹ 2,999",
    image: "/collection/collection2.jpg",
  },
  {
    name: "Yellow designer saree, sequin embroidery, feather border",
    price: "₹ 3,499",
    image: "/collection/collection3.jpg",
  },
  {
    name: "Magenta pink georgette saree, zari border, embroidered",
    price: "₹ 2,799",
    image: "/collection/collection4.jpg",
  },
  {
    name: "Sea green silk blend saree, floral print, woven zari border",
    price: "₹ 2,199",
    image: "/collection/collection5.jpg",
  },
  {
    name: "Pink silk saree",
    price: "₹ 2,199",
    image: "/collection/collection6.jpg",
  },
  {
    name: "Georgette saree, floral thread work, contrast border",
    price: "₹ 2,199",
    image: "/collection/collection7.jpg",
  },
  {
    name: "Light blue cotton saree, hand block print, floral motif",
    price: "₹ 2,199",
    image: "/collection/collection8.jpg",
  },
  {
    name: "Multi-color striped georgette saree, digital print, embroidered border",
    price: "₹ 2,199",
    image: "/collection/collection9.jpg",
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
    width="20"
    height="20"
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

export default function Collections() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 350 : -350,
      behavior: "smooth",
    });
  };

  const arrowButton = `flex h-11 w-11 shrink-0 items-center justify-center border border-[#8d8d8d] bg-transparent text-[#161616] transition-colors ${fast} hover:border-[#E34234] hover:bg-[#E34234] hover:text-white ${focusRing}`;

  return (
    <section
      id="collections"
      className="bg-[#ffffff] text-[#161616]"
    >
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="grid grid-cols-4 items-end md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-6 lg:col-span-8">
            <p className="mb-4 text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
              New in
            </p>

            <h2 className="font-serif text-[32px] font-normal leading-10 md:text-[42px] md:leading-[50px] lg:text-[54px] lg:leading-[64px]">
              New arrivals
            </h2>

            <p className="mt-4 max-w-[470px] text-sm leading-5 tracking-[0.16px] text-[#525252]">
              Sarees in silk, organza, georgette and cotton. Ask us for the
              price of any piece.
            </p>
          </div>

          {/* =================================================
              DESKTOP CAROUSEL CONTROLS
          ================================================= */}
          <div className="col-span-4 hidden items-center justify-end gap-2 md:col-span-2 md:col-start-7 lg:col-span-4 lg:col-start-9 lg:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous products"
              className={arrowButton}
            >
              <ArrowLeft />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next products"
              className={arrowButton}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* =====================================================
            PRODUCT CAROUSEL
        ===================================================== */}
        <div
          ref={scrollRef}
          className="scrollbar-hide mt-6 flex gap-4 overflow-x-auto pb-2 sm:mt-8 md:mt-10 lg:gap-6"
        >
          {products.map((product, index) => (
            <article
              key={`${product.name}-${index}`}
              className="group flex h-full w-[calc((100vw-48px)/2)] shrink-0 flex-col sm:w-[260px] md:w-[280px] lg:w-[calc((100%-96px)/5)] lg:min-w-[220px] xl:min-w-[250px]"
            >
              {/* =================================================
                  PRODUCT IMAGE
              ================================================= */}
              <Link
                href="#collections"
                aria-label={`View ${product.name}`}
                className={`relative block aspect-[0.72] shrink-0 overflow-hidden bg-[#e0e0e0] ${focusRing}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 280px, 20vw"
                  className={`object-cover transition-transform ${moderate} group-hover:scale-[1.035] motion-reduce:group-hover:scale-100`}
                />
              </Link>

              {/* PRODUCT INFORMATION */}
              <div className="flex h-[126px] flex-col pt-4">

                {/* PRODUCT NAME — FIXED HEIGHT */}
                <div className="h-[54px] overflow-hidden">
                  <h3 className="text-sm font-semibold leading-[18px] tracking-[0.16px] text-[#161616]">
                    {product.name}
                  </h3>
                </div>

                {/* ENQUIRY BUTTON — FIXED AT BOTTOM */}
                <div className="mt-auto">
                  <Link
                    href="#contact"
                    className={`flex h-12 w-full items-center justify-center bg-[#E34234] px-4 text-sm font-medium leading-[18px] tracking-[0.16px] text-white transition-colors ${fast} hover:bg-[#a2191f] ${focusRing}`}
                  >
                    Ask for price
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            MOBILE CAROUSEL CONTROLS
            BELOW PRODUCTS + RIGHT ALIGNED
        ===================================================== */}
        <div className="mt-5 flex items-center justify-end gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous products"
            className={arrowButton}
          >
            <ArrowLeft />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next products"
            className={arrowButton}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}