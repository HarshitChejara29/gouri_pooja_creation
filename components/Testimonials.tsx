"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Krishna Kumar Aslm",
    review:
      "Absolutely loved the fabric and fit. Got so many compliments! The Banarasi weave is absolutely authentic and feels royal.",
    image: "/review/customer-1.png",
  },
  {
    name: "Md Farid",
    review:
      "Beautiful collection and super fast delivery. Highly recommend! Gouri Pooja has become my absolute go-to for festive edits.",
    image: "/review/customer-2.png",
  },
  {
    name: "Radhe krishna sheer sowroom",
    review:
      "True to the pictures and great quality. Will shop again! The customer service was also very helpful with my sizing questions.",
    image: "/review/customer-3.png",
  },
  {
    name: "Raju Gupta",
    review:
      "The saree looked even more beautiful in person. The detailing, fabric and finishing were absolutely gorgeous.",
    image: "/review/customer-4.png",
  },
  {
    name: "Pawan",
    review:
      "I received so many compliments on my saree. The quality feels premium and the entire shopping experience was wonderful.",
    image: "/review/customer-5.png",
  },
];

/* Carbon focus: 2px #0f62fe */
const focusRing =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f62fe]";

/* Carbon motion: fast-01 110ms, productive easing */
const fast = "duration-[110ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const hoverRef = useRef(false);
  const focusRef = useRef(false);
  const manualRef = useRef(false);

  const [manualPause, setManualPause] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    manualRef.current = manualPause;
  }, [manualPause]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Respect the visitor's reduced-motion setting: no auto-scroll, manual scroll instead
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true);
      return;
    }

    const speed = 0.45;

    const animate = () => {
      const paused = hoverRef.current || focusRef.current || manualRef.current;

      if (!paused) {
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
    <section id="testimonials" className="bg-[#ffffff] text-[#161616]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-4 gap-y-10 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">
          <div className="col-span-4 flex flex-col justify-between md:col-span-3 lg:col-span-3">
            <div>
              {/* label-01: 12/16, 0.32px */}
              <p className="text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
                Reviews
              </p>

              {/* heading-05 (32/40) -> heading-06 (42/50) -> heading-07 (54/64) */}
              <h2 className="mt-4 max-w-[300px] font-serif text-[32px] font-normal leading-10 md:text-[42px] md:leading-[50px] lg:text-[54px] lg:leading-[64px]">
                What customers say
              </h2>

              {/* body-01: 14/20, 0.16px */}
              <p className="mt-4 lg:mt-6 max-w-[280px] text-sm leading-5 tracking-[0.16px] text-[#525252]">
                Reviews from customers who bought from Gouri Pooja Creation.
              </p>
            </div>

            <div className="mt-10 hidden border-t border-[#e0e0e0] pt-6 lg:block">
              <p className="text-xs leading-4 tracking-[0.32px] text-[#525252]">
                Based in
              </p>

              {/* heading-03: 20/28 */}
              <p className="mt-2 font-serif text-xl leading-7 text-[#161616]">
                Surat, Gujarat
              </p>
            </div>
          </div>

          <div className="col-span-4 min-w-0 md:col-span-5 lg:col-span-9">
            <div
              ref={scrollRef}
              role="region"
              aria-label="Customer reviews"
              onMouseEnter={() => {
                hoverRef.current = true;
              }}
              onMouseLeave={() => {
                hoverRef.current = false;
              }}
              onFocus={() => {
                focusRef.current = true;
              }}
              onBlur={() => {
                focusRef.current = false;
              }}
              className={`scrollbar-hide flex border-l border-t border-[#e0e0e0] ${reducedMotion ? "overflow-x-auto" : "overflow-x-hidden"}`}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  aria-hidden={index >= testimonials.length ? true : undefined}
                  className={`group flex min-h-[390px] w-[88vw] shrink-0 flex-col border-b border-r border-[#e0e0e0] bg-[#ffffff] p-6 transition-colors ${fast} hover:bg-[#faf8f4] sm:w-[62vw] md:w-[46%] md:p-7 lg:w-[34%] xl:w-[31%]`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="text-sm leading-4 text-[#E34234]"
                      aria-label="5 out of 5 stars"
                    >
                      ★★★★★
                    </span>
                  </div>

                  <div className="mt-10 flex-1">
                    {/* body-02: 16/24 */}
                    <p className="text-base leading-6 text-[#161616]">
                      {testimonial.review}
                    </p>
                  </div>

                  <div className="border-t border-[#e0e0e0] pt-5">
                    <div className="flex items-center gap-4">
                      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#c6c6c6] bg-[#e0e0e0]">
                        <Image
                          src={testimonial.image}
                          alt=""
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        {/* body-compact-01 semibold: 14/18 */}
                        <h3 className="text-sm font-semibold leading-[18px] tracking-[0.16px] text-[#161616]">
                          {testimonial.name}
                        </h3>

                        {/* helper-text-01: 12/16, 0.32px */}
                        <p className="text-xs leading-4 tracking-[0.32px] text-[#525252]">
                          Customer
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex items-center justify-between border-b border-l border-[#e0e0e0] px-4 py-4 md:px-6">
              <p className="text-xs leading-4 tracking-[0.32px] text-[#525252]">
                {reducedMotion
                  ? "Scroll sideways to read more"
                  : "Scrolls on its own. Hover to pause."}
              </p>

              {!reducedMotion && (
                <button
                  type="button"
                  onClick={() => setManualPause((value) => !value)}
                  className={`-my-4 min-h-12 px-2 text-sm font-medium leading-[18px] tracking-[0.16px] text-[#161616] underline-offset-4 transition-colors ${fast} hover:text-[#E34234] hover:underline ${focusRing}`}
                >
                  {manualPause ? "Play" : "Pause"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}