"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/home/hero1.png",
    eyebrow: "TIMELESS ELEGANCE",
    title: (
      <>
        More Than
        <br />
        Just a Saree,
        <br />
        It&apos;s a Feeling
      </>
    ),
    description:
      "At Gouri Pooja Creations, we bring you sarees that celebrate tradition, craftsmanship and the beauty of every woman’s journey.",
  },
  {
    image: "/home/hero2.png",
    eyebrow: "WOVEN WITH HERITAGE",
    title: (
      <>
        Tradition
        <br />
        Woven Into
        <br />
        Every Thread
      </>
    ),
    description:
      "Discover timeless weaves created with artistry, heritage and an eye for modern elegance.",
  },
  {
    image: "/home/hero3.png",
    eyebrow: "THE ART OF WEAVING",
    title: (
      <>
        Crafted By
        <br />
        Hands,
        <br />
        Worn By You
      </>
    ),
    description:
      "Every saree carries the patience, skill and artistry of the hands that bring it to life.",
  },
  {
    image: "/home/hero4.png",
    eyebrow: "FOR EVERY OCCASION",
    title: (
      <>
        Sarees For
        <br />
        Every Story,
        <br />
        Every Moment
      </>
    ),
    description:
      "From intimate celebrations to grand occasions, find a saree that becomes part of your story.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous === slides.length - 1 ? 0 : previous + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleCollectionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const target = document.querySelector("#collections");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" aria-label="Gouri Pooja Creations" className="relative h-[560px] w-full overflow-hidden bg-[#24160d] sm:h-[600px] md:h-[640px] lg:h-[710px]">

      {/* =====================================================
          BACKGROUND SLIDES
      ===================================================== */}

      {slides.map((item, index) => (
        <div key={item.image} aria-hidden={index !== currentSlide} className={`absolute inset-0 transition-opacity duration-[1000ms] ease-in-out ${index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0"}`}>

          <Image src={item.image} alt="" fill priority={index === 0} sizes="100vw" className="object-cover object-center" />

        </div>
      ))}

      {/* =====================================================
          READABILITY OVERLAY
      ===================================================== */}

      <div aria-hidden="true" className="absolute inset-0 z-20 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div aria-hidden="true" className="absolute inset-0 z-20 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-30 mx-auto grid h-full max-w-[1440px] grid-cols-4 items-center px-4 sm:px-6 md:grid-cols-8 md:px-8 lg:grid-cols-12 lg:px-12">

        <div key={currentSlide} className="col-span-4 animate-[heroContent_700ms_ease-out] md:col-span-6 lg:col-span-6 xl:col-span-5">

          {/* EYEBROW */}

          <div className="mb-5 flex items-center gap-4 md:mb-6">

            <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/90 md:text-[11px]">
              {slide.eyebrow}
            </span>

            <span aria-hidden="true" className="h-px w-10 bg-white/60 md:w-16" />

          </div>

          {/* HEADING */}

          <h1 className="max-w-[650px] font-serif text-[42px] font-normal leading-[1] tracking-[-1px] text-white sm:text-[50px] md:text-[60px] lg:text-[68px] xl:text-[72px]">
            {slide.title}
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-6 max-w-[440px] text-[12px] leading-5 text-white/85 sm:text-[13px] sm:leading-6 md:mt-7 md:text-[14px] md:leading-7">
            {slide.description}
          </p>

          {/* CTA */}

          <Link href="#collections" onClick={handleCollectionClick} className="group mt-7 inline-flex min-h-11 items-center gap-4 bg-[#f5efe5] px-5 text-[12px] font-medium text-[#24160d] outline-none transition-colors duration-150 hover:bg-white sm:mt-8 sm:text-[13px]">

            <span>Explore Collection</span>

            <span aria-hidden="true" className="text-[17px] leading-none transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>

          </Link>

        </div>

      </div>

      {/* =====================================================
          DESKTOP SLIDE CONTROLS
      ===================================================== */}

      <div className="absolute right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center md:flex lg:right-6" aria-label="Hero slides">

        {slides.map((_, index) => (
          <button key={index} type="button" aria-label={`Go to slide ${index + 1}`} aria-current={index === currentSlide} onClick={() => goToSlide(index)} className="group flex h-11 w-8 items-center justify-center outline-none">

            <span className={`block w-px transition-all duration-300 ${index === currentSlide ? "h-9 bg-white" : "h-5 bg-white/40 group-hover:h-7 group-hover:bg-white/70"}`} />

          </button>
        ))}

        <span className="mt-4 text-[9px] uppercase tracking-[0.18em] text-white/60 [writing-mode:vertical-rl]">
          GOURI POOJA
        </span>

      </div>

      {/* =====================================================
          MOBILE SLIDE CONTROLS
      ===================================================== */}

      <div className="absolute bottom-6 left-4 z-40 flex items-center gap-2 sm:left-6 md:hidden" aria-label="Hero slides">

        {slides.map((_, index) => (
          <button key={index} type="button" aria-label={`Go to slide ${index + 1}`} aria-current={index === currentSlide} onClick={() => goToSlide(index)} className="flex h-8 w-8 items-center justify-center outline-none">

            <span className={`block h-px transition-all duration-300 ${index === currentSlide ? "w-8 bg-white" : "w-4 bg-white/40"}`} />

          </button>
        ))}

      </div>

    </section>
  );
}