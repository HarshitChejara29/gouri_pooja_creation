"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const categories = [
  {
    title: "Net Saree",
    subtitle: "Classic & Evergreen",
    image: "/category/Net-Saree.jpg",
  },
  {
    title: "Silk Saree",
    subtitle: "For Your Special Day",
    image: "/category/Silk_Saree.jpg",
  },
  {
    title: "Fancy Saree",
    subtitle: "Everyday Elegance",
    image: "/category/Fancy_Saree.jpg",
  },
  {
    title: "Ready to wear Saree",
    subtitle: "Make Moments Special",
    image: "/category/Ready_to_wear_Saree.jpg",
  },
  {
    title: "Cotton Saree",
    subtitle: "Comfort Meets Style",
    image: "/category/Cotton_Saree.jpg",
  },
  {
    title: "Anarkali Suits",
    subtitle: "Grace in Every Twirl",
    image: "/category/Anarkli.jpg",
  },
  {
    title: "Suits",
    subtitle: "Classic Style, Modern Comfort",
    image: "/category/Suit.png",
  },
  {
    title: "Kurtis",
    subtitle: "Easy Style, Every Day",
    image: "/category/Kurti.jpg",
  },
];

export default function FindYourDrape() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "right" ? 350 : -350,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#ffffff] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-4 gap-y-10 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">
          {/* LEFT CONTENT */}
          <div className="col-span-4 md:col-span-3 lg:col-span-3">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#E34234]">
              Explore
            </p>

            <h2 className="max-w-[260px] font-serif text-[40px] font-normal leading-[1.04] tracking-[-0.8px] text-[#211c18] md:text-[44px] lg:text-[48px]">
              Find
              <br />
              Your Perfect
              <br />
              Drape
            </h2>

            <p className="mt-5 max-w-[240px] text-[13px] leading-6 text-[#70655d]">
              Discover timeless silhouettes and fabrics created for every
              occasion.
            </p>

            {/* CAROUSEL CONTROLS */}
            <div className="mt-8 flex items-center gap-2">
              <button type="button" onClick={() => scroll("left")} aria-label="Previous categories" className="flex h-12 w-12 items-center justify-center border border-[#d8cec4] bg-transparent text-[#302821] outline-none transition-colors duration-150 hover:border-[#E34234] hover:bg-[#E34234] hover:text-white">
                <span aria-hidden="true" className="text-[18px] leading-none">
                  ←
                </span>
              </button>

              <button type="button" onClick={() => scroll("right")} aria-label="Next categories" className="flex h-12 w-12 items-center justify-center border border-[#d8cec4] bg-transparent text-[#302821] outline-none transition-colors duration-150 hover:border-[#E34234] hover:bg-[#E34234] hover:text-white">
                <span aria-hidden="true" className="text-[18px] leading-none">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* CATEGORY CAROUSEL */}
          <div className="col-span-4 min-w-0 md:col-span-5 lg:col-span-9">
            <div ref={scrollRef} className="scrollbar-hide w-full overflow-x-auto">
              <div className="flex w-max gap-4 md:gap-5 lg:gap-6">
                {categories.map((category, index) => (
                  <Link key={`${category.title}-${index}`} href="#collections" className="group block w-[210px] shrink-0 outline-none sm:w-[220px] md:w-[225px] lg:w-[220px] xl:w-[230px]">
                    <div className="relative aspect-[0.68] overflow-hidden rounded-t-[110px] bg-[#e9e1d7]">
                      <Image src={category.image} alt={category.title} fill sizes="230px" className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
                    </div>

                    <div className="border-b border-[#ded5cd] py-4">
                      <h3 className="font-serif text-[21px] font-normal leading-tight text-[#302821]">
                        {category.title}
                      </h3>

                      <div className="mt-2 flex items-center justify-between gap-3">
                        <p className="text-[11px] leading-5 text-[#857a71] md:text-[12px]">
                          {category.subtitle}
                        </p>

                        <span aria-hidden="true" className="shrink-0 text-[16px] text-[#E34234] opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}