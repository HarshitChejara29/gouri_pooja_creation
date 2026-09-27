"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const products = [
  {
    name: "Rani Pink Banarasi Saree",
    price: "₹ 2,499",
    image: "/collection/collection1.jpg",
  },
  {
    name: "Rust Organza Saree",
    price: "₹ 2,999",
    image: "/collection/collection2.jpg",
  },
  {
    name: "Maroon Zari Saree",
    price: "₹ 3,499",
    image: "/collection/collection3.jpg",
  },
  {
    name: "Sage Green Embroidered Suit",
    price: "₹ 2,799",
    image: "/collection/collection4.jpg",
  },
  {
    name: "Mustard Silk Saree",
    price: "₹ 2,199",
    image: "/collection/collection5.jpg",
  },
  {
    name: "Mustard Silk Saree",
    price: "₹ 2,199",
    image: "/collection/collection6.jpg",
  },
  {
    name: "Mustard Silk Saree",
    price: "₹ 2,199",
    image: "/collection/collection7.jpg",
  },
  {
    name: "Mustard Silk Saree",
    price: "₹ 2,199",
    image: "/collection/collection8.jpg",
  },
  {
    name: "Mustard Silk Saree",
    price: "₹ 2,199",
    image: "/collection/collection9.jpg",
  },
];

export default function Collections() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 350 : -350,
      behavior: "smooth",
    });
  };

  return (
    <section id="collections" className="bg-[#ffffff] text-[#171411]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
        {/* SECTION HEADER */}
        <div className="grid grid-cols-4 items-end md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-6 lg:col-span-8">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#E34234]">
              Trending Now
            </p>

            <h2 className="font-serif text-[38px] font-normal leading-[1.05] tracking-[-0.8px] md:text-[46px] lg:text-[52px]">
              Our Latest Collection
            </h2>
          </div>

          {/* CAROUSEL CONTROLS */}
          <div className="col-span-4 mt-8 flex items-center justify-start gap-2 md:col-span-2 md:col-start-7 md:mt-0 md:justify-end lg:col-span-4 lg:col-start-9">
            <button type="button" onClick={() => scroll("left")} aria-label="Previous products" className="flex h-12 w-12 items-center justify-center border border-[#d8cec4] bg-transparent text-[#302821] outline-none transition-colors duration-150 hover:border-[#E34234] hover:bg-[#E34234] hover:text-white">
              <span aria-hidden="true" className="text-[18px] leading-none">
                ←
              </span>
            </button>

            <button type="button" onClick={() => scroll("right")} aria-label="Next products" className="flex h-12 w-12 items-center justify-center border border-[#d8cec4] bg-transparent text-[#302821] outline-none transition-colors duration-150 hover:border-[#E34234] hover:bg-[#E34234] hover:text-white">
              <span aria-hidden="true" className="text-[18px] leading-none">
                →
              </span>
            </button>
          </div>
        </div>

        {/* PRODUCT CAROUSEL */}
        <div ref={scrollRef} className="scrollbar-hide mt-12 flex gap-4 overflow-x-auto pb-2 sm:gap-5 md:mt-14 lg:gap-6">
          {products.map((product, index) => (
            <article key={`${product.name}-${index}`} className="group w-[calc((100vw-48px)/2)] shrink-0 sm:w-[260px] md:w-[280px] lg:w-[calc((100%-96px)/5)] lg:min-w-[220px] xl:min-w-[250px]">
              {/* PRODUCT IMAGE */}
              <Link href="#collections" aria-label={`View ${product.name}`} className="relative block aspect-[0.72] overflow-hidden bg-[#eee8df] outline-none">
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 280px, 20vw" className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]" />

                <div aria-hidden="true" className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
              </Link>

              {/* PRODUCT INFORMATION */}
              <div className="pt-4">
                <div className="min-h-[40px]">
                  <h3 className="text-[13px] font-semibold leading-5 text-[#171411] md:text-[14px]">
                    {product.name}
                  </h3>
                </div>

                {/* PRICE */}
                <p className="mt-2 text-[14px] font-semibold leading-5 text-[#171411]">
                  {product.price}
                </p>

                {/* RATING */}
                <div className="mt-3 flex min-h-5 items-center gap-2">
                  <div className="flex items-center gap-[2px] text-[12px] leading-none text-[#E34234]" aria-label="5 out of 5 stars">
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                    <span aria-hidden="true">★</span>
                  </div>

                  <span className="text-[10px] leading-4 text-[#8d8780]">
                    (120)
                  </span>
                </div>

                {/* ADD TO CART */}
                <button type="button" className="mt-4 flex h-12 w-full items-center justify-center bg-[#E34234] px-4 text-[12px] font-medium text-white outline-none transition-colors duration-150 hover:bg-[#720613]">
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}