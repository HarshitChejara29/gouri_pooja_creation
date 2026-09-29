"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/home/hero1.png",
    eyebrow: "Gouri Pooja Creation, Surat",
    title: (
      <>
        Sarees made
        <br />
        in Surat
      </>
    ),
    description:
      "We manufacture, wholesale and retail from Surat, and have done since 2019.",
    cta: { label: "Explore collection", href: "#collections" },
  },
  {
    image: "/home/hero2.png",
    eyebrow: "Silk, net and cotton",
    title: (
      <>
        Silk, net and
        <br />
        cotton sarees
      </>
    ),
    description: "Weaves and prints for weddings, festivals and daily wear.",
    cta: { label: "Explore collection", href: "#collections" },
  },
  {
    image: "/home/hero3.png",
    eyebrow: "Ready to wear",
    title: (
      <>
        Ready-to-wear
        <br />
        sarees and suits
      </>
    ),
    description:
      "Pre-pleated sarees, Anarkali suits and kurtis, stitched and ready to wear.",
    cta: { label: "Explore collection", href: "#collections" },
  },
  {
    image: "/home/hero4.png",
    eyebrow: "Wholesale",
    title: (
      <>
        Buying
        <br />
        in bulk?
      </>
    ),
    description:
      "Tell us the quantity and the collection you want, and we'll send details.",
    cta: { label: "Contact us", href: "#contact" },
  },
];

/* Carbon focus on dark backgrounds (inverse): 2px white */
const focusRing =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/* Carbon motion: fast-01 110ms, moderate-01 240ms, productive easing */
const fast = "duration-[110ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";
const moderate = "duration-[240ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

const PauseIcon = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
    <path d="M12 8h2v16h-2zM18 8h2v16h-2z" />
  </svg>
);

const PlayIcon = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
    <path d="M11 7v18l14-9z" />
  </svg>
);

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    // No auto-advance when paused or when the visitor prefers reduced motion
    if (!playing || reducedMotion) return;

    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous === slides.length - 1 ? 0 : previous + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [playing, reducedMotion]);

  const isRunning = playing && !reducedMotion;

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" aria-label="Gouri Pooja Creation" className="relative h-[560px] w-full overflow-hidden bg-[#161616] sm:h-[600px] md:h-[640px] lg:h-[710px]">
      {/* BACKGROUND SLIDES */}
      {slides.map((item, index) => (
        <div key={item.image} aria-hidden={index !== currentSlide} className={`absolute inset-0 transition-opacity duration-[1000ms] ease-in-out motion-reduce:transition-none ${index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0"}`}>
          <Image src={item.image} alt="" fill priority={index === 0} sizes="100vw" className="object-cover object-center" />
        </div>
      ))}

      {/* READABILITY OVERLAY (behind the text only) */}
      <div aria-hidden="true" className="absolute inset-0 z-20 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* HERO CONTENT
          All slide texts share one grid cell, so the block is always as tall as the
          tallest slide. Nothing moves when the slide changes; only opacity does. */}
      <div className="relative z-30 mx-auto grid h-full max-w-[1440px] grid-cols-4 items-center px-4 pb-20 sm:px-6 md:grid-cols-8 md:px-8 lg:grid-cols-12 lg:px-12">
        <div
          aria-live={isRunning ? "off" : "polite"}
          className="col-span-4 grid md:col-span-6 lg:col-span-6 xl:col-span-5"
        >
          {slides.map((slide, index) => {
            const active = index === currentSlide;

            return (
              <div
                key={slide.image}
                aria-hidden={!active}
                className={`col-start-1 row-start-1 transition-[opacity,visibility] ${moderate} ${active ? "visible opacity-100" : "invisible opacity-0"}`}
              >
                {/* EYEBROW — label-01: 12/16, 0.32px */}
                <div className="mb-4 flex items-center gap-4 md:mb-6">
                  <span className="text-xs leading-4 tracking-[0.32px] text-[#f4f4f4]">
                    {slide.eyebrow}
                  </span>

                  <span aria-hidden="true" className="h-px w-10 bg-white/60 md:w-16" />
                </div>

                {/* HEADING — 42/50 -> 54/64 -> 68/76 (display scale, verify against Carbon docs) */}
                {index === 0 ? (
                  <h1 className="font-serif text-[42px] font-normal leading-[50px] text-white md:text-[54px] md:leading-[64px] xl:text-[68px] xl:leading-[76px]">
                    {slide.title}
                  </h1>
                ) : (
                  <p className="font-serif text-[42px] font-normal leading-[50px] text-white md:text-[54px] md:leading-[64px] xl:text-[68px] xl:leading-[76px]">
                    {slide.title}
                  </p>
                )}

                {/* DESCRIPTION — body-01: 14/20 -> body-02: 16/24 */}
                <p className="mt-6 max-w-[440px] text-sm leading-5 tracking-[0.16px] text-[#f4f4f4] md:text-base md:leading-6 md:tracking-normal">
                  {slide.description}
                </p>

                {/* CTA — body-compact-01: 14/18 */}
                <Link
                  href={slide.cta.href}
                  onClick={(e) => handleCtaClick(e, slide.cta.href)}
                  tabIndex={active ? 0 : -1}
                  className={`group mt-8 inline-flex min-h-12 items-center gap-4 bg-white px-5 text-sm font-medium leading-[18px] tracking-[0.16px] text-[#161616] transition-colors ${fast} hover:bg-[#e0e0e0] ${focusRing}`}
                >
                  <span>{slide.cta.label}</span>

                  <span aria-hidden="true" className={`text-base leading-none transition-transform ${fast} group-hover:translate-x-1`}>
                    →
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* SLIDE CONTROLS — aligned to the content's left edge */}
      <div className="absolute inset-x-0 bottom-0 z-40 mx-auto max-w-[1440px] px-4 pb-6 sm:px-6 md:px-8 md:pb-8 lg:px-12">
        <div role="group" aria-label="Hero slides" className="flex items-center gap-4">
          {/* helper-text-01: 12/16, 0.32px */}
          <span aria-hidden="true" className="w-[52px] text-xs leading-4 tracking-[0.32px] text-white [font-variant-numeric:tabular-nums]">
            {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>

          <div className="flex items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? "true" : undefined}
                onClick={() => setCurrentSlide(index)}
                className={`group flex h-12 w-12 items-center justify-center md:w-14 ${focusRing}`}
              >
                <span className={`block h-0.5 w-full transition-colors ${fast} ${index === currentSlide ? "bg-white" : "bg-white/40 group-hover:bg-white/70"}`} />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            aria-label={isRunning ? "Pause slideshow" : "Play slideshow"}
            className={`flex h-12 w-12 items-center justify-center text-white transition-opacity ${fast} hover:opacity-70 ${focusRing}`}
          >
            {isRunning ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>
      </div>
    </section>
  );
}