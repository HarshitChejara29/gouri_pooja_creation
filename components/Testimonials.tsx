"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Riddhi Patel",
    review:
      "Absolutely loved the fabric and fit. Got so many compliments! The Banarasi weave is absolutely authentic and feels royal.",
    image: "/review/customer1.png",
  },
  {
    name: "Neha K.",
    review:
      "Beautiful collection and super fast delivery. Highly recommend! Gouri Pooja has become my absolute go-to for festive edits.",
    image: "/review/customer2.png",
  },
  {
    name: "Aarti M.",
    review:
      "True to the pictures and great quality. Will shop again! The customer service was also very helpful with my sizing questions.",
    image: "/review/customer3.png",
  },
  {
    name: "Priya Shah",
    review:
      "The saree looked even more beautiful in person. The detailing, fabric and finishing were absolutely gorgeous.",
    image: "/review/customer4.png",
  },
  {
    name: "Kavya Mehta",
    review:
      "I received so many compliments on my saree. The quality feels premium and the entire shopping experience was wonderful.",
    image: "/review/customer5.png",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const speed = 0.45;

    const animate = () => {
      if (!pausedRef.current) {
        container.scrollLeft += speed;

        const resetPoint = container.scrollWidth / 2;

        if (container.scrollLeft >= resetPoint) {
          container.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-[#ffffff] text-[#1d1915]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-4 gap-y-10 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">
          <div className="col-span-4 flex flex-col justify-between md:col-span-3 lg:col-span-3">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#E34234]">
                Customer Stories
              </p>

              <h2 className="mt-5 max-w-[300px] font-serif text-[38px] font-normal leading-[1.06] tracking-[-0.8px] md:text-[44px] lg:text-[48px]">
                Loved,
                <br />
                Worn &
                <br />
                Remembered.
              </h2>

              <p className="mt-6 max-w-[280px] text-[13px] leading-6 text-[#77716a] md:text-[14px] md:leading-7">
                Real experiences from women who chose Gouri Pooja Creations
                for their special moments.
              </p>
            </div>

            <div className="mt-10 hidden border-t border-[#ddd4c8] pt-5 lg:block">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#8c857d]">
                Our Customers
              </p>

              <p className="mt-2 font-serif text-[18px] text-[#4a443e]">
                Across India
              </p>
            </div>
          </div>

          <div className="col-span-4 min-w-0 md:col-span-5 lg:col-span-9">
            <div
              ref={scrollRef}
              onMouseEnter={() => {
                pausedRef.current = true;
              }}
              onMouseLeave={() => {
                pausedRef.current = false;
              }}
              className="scrollbar-hide flex overflow-x-hidden border-l border-t border-[#ddd4c8]"
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  className="group flex min-h-[390px] w-[88vw] shrink-0 flex-col border-b border-r border-[#ddd4c8] bg-[#ffffff] p-6 transition-colors duration-200 hover:bg-[#faf8f4] sm:w-[62vw] md:w-[46%] lg:w-[34%] xl:w-[31%] md:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#E34234]">
                        Verified Buyer
                      </span>

                      <div className="mt-3 h-px w-8 bg-[#E34234]" />
                    </div>

                    <span
                      className="text-[13px] tracking-[2px] text-[#b38a4c]"
                      aria-label="5 out of 5 stars"
                    >
                      ★★★★★
                    </span>
                  </div>

                  <div className="mt-10 flex-1">
                    <span className="font-serif text-[42px] leading-none text-[#c9bcad]">
                      “
                    </span>

                    <p className="mt-3 text-[14px] leading-7 text-[#332e29]">
                      {testimonial.review}
                    </p>
                  </div>

                  <div className="border-t border-[#ddd4c8] pt-5">
                    <div className="flex items-center gap-4">
                      <div className="relative h-11 w-11 rounded-full shrink-0 overflow-hidden border border-[#d8cec0] bg-[#e7ded3]">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-[12px] font-semibold leading-5 text-[#25211d]">
                          {testimonial.name}
                        </h3>

                        <p className="text-[10px] uppercase tracking-[0.1em] text-[#8c857d]">
                          Customer
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex items-center justify-between border-b border-l border-[#ddd4c8] px-4 py-4 md:px-6">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#8c857d]">
                More stories from our customers
              </p>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E34234]" />
                <span className="text-[10px] uppercase tracking-[0.1em] text-[#8c857d]">
                  Auto Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}