"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navigation = [
  ["Home", "#home"],
  ["Collections", "#collections"],
  ["Our Story", "#our-story"],
  // ["Craftsmanship", "#craftsmanship"],
  ["Legacy", "#legacy"],
  ["Why Us", "#why-us"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 10) {
          setIsVisible(true);
          setIsScrolled(false);
          lastScrollY.current = currentScrollY;
          ticking.current = false;
          return;
        }

        setIsScrolled(true);

        if (currentScrollY > lastScrollY.current + 5) {
          setIsVisible(false);
          setMenuOpen(false);
        } else if (currentScrollY < lastScrollY.current - 5) {
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-transform duration-300 ease-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>

      {/* ANNOUNCEMENT BAR */}

      <div className="h-8 w-full bg-[#E34234]">
        <div className="mx-auto flex h-full max-w-[1440px] items-center px-4 text-[11px] leading-none tracking-[0.02em] text-white md:px-8 lg:px-12">
          <span>Free Shipping on Orders Above ₹1999</span>

          <span className="mx-3 opacity-40">|</span>

          <span className="hidden sm:inline">
            Celebrate Tradition with Gouri Pooja Creations
          </span>
        </div>
      </div>

      {/* MAIN NAVIGATION */}

      <nav className={`border-b transition-all duration-300 ${isScrolled ? "border-black/10 bg-white text-black shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "border-white/20 bg-transparent text-white"}`} aria-label="Main navigation">

        <div className="relative mx-auto grid h-16 max-w-[1440px] grid-cols-12 items-center px-4 md:px-8 lg:px-12">

          {/* LOGO */}

          <div className="col-span-5 lg:col-span-3">
            <Link href="#home" onClick={(e) => handleNavigation(e, "#home")} aria-label="Gouri Pooja Creations Home" className="inline-flex h-12 items-center outline-none">

              {!isScrolled ? (
                <Image
                  src="/white_logo.png"
                  alt="Gouri Pooja Creations"
                  width={190}
                  height={70}
                  priority
                  className="h-auto w-[140px] md:w-[165px]"
                />
              ) : (
                <Image
                  src="/black_logo.png"
                  alt="Gouri Pooja Creations"
                  width={190}
                  height={70}
                  priority
                  className="h-auto w-[140px] md:w-[165px]"
                />
              )}

            </Link>
          </div>


          {/* =================================================
              DESKTOP NAVIGATION — PERFECT CENTER
          ================================================= */}

          <div className="absolute left-1/2 top-0 hidden h-16 -translate-x-1/2 items-center lg:flex">

            <div className="flex h-full items-center">

              {navigation.map(([label, href]) => {
                const isHome = href === "#home";

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={(e) => handleNavigation(e, href)}
                    className={`relative flex h-16 items-center px-4 text-[13px] leading-none outline-none transition-colors duration-150 ${isScrolled ? "hover:bg-black/5" : "hover:bg-white/10"} ${isHome ? (isScrolled ? "bg-black/[0.03]" : "bg-white/5") : ""}`}
                  >
                    {label}

                    {isHome && (
                      <span
                        aria-hidden="true"
                        className={`absolute bottom-0 left-0 h-[2px] w-full ${isScrolled ? "bg-black" : "bg-white"}`}
                      />
                    )}
                  </Link>
                );
              })}

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE ACTIONS
          ================================================= */}

          <div className="col-span-7 col-start-6 flex items-center justify-end lg:col-span-2 lg:col-start-11">

            <div className="flex items-center">

              {/* SEARCH */}

              <button
                type="button"
                aria-label="Search"
                className={`flex h-12 w-12 items-center justify-center outline-none transition-colors duration-150 ${isScrolled ? "hover:bg-black/5" : "hover:bg-white/10"}`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="14"
                    cy="14"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M20 20L27 27"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>


              {/* ACCOUNT */}

              <Link
                href="/account"
                aria-label="Account"
                className={`hidden h-12 w-12 items-center justify-center outline-none transition-colors duration-150 sm:flex ${isScrolled ? "hover:bg-black/5" : "hover:bg-white/10"}`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="16"
                    cy="10"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M6 27C6.8 21.6 10.2 19 16 19C21.8 19 25.2 21.6 26 27"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </Link>


              {/* MOBILE MENU */}

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className={`flex h-12 w-12 items-center justify-center outline-none transition-colors duration-150 lg:hidden ${isScrolled ? "hover:bg-black/5" : "hover:bg-white/10"}`}
              >
                <div className="flex w-5 flex-col gap-[5px]">

                  <span
                    className={`block h-px w-full transition-all duration-150 ${isScrolled ? "bg-black" : "bg-white"} ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
                  />

                  <span
                    className={`block h-px w-full transition-opacity duration-150 ${isScrolled ? "bg-black" : "bg-white"} ${menuOpen ? "opacity-0" : "opacity-100"}`}
                  />

                  <span
                    className={`block h-px w-full transition-all duration-150 ${isScrolled ? "bg-black" : "bg-white"} ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
                  />

                </div>
              </button>

            </div>

          </div>

        </div>


        {/* MOBILE NAVIGATION */}

        <div className={`overflow-hidden transition-[max-height,opacity] duration-200 lg:hidden ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>

          <div className={`border-t ${isScrolled ? "border-black/10 bg-white" : "border-white/15 bg-[#21140d]/95 backdrop-blur-md"}`}>

            <div className="mx-auto max-w-[1440px] px-4 md:px-8">

              {navigation.map(([label, href], index) => (
                <Link
                  key={href}
                  href={href}
                  onClick={(e) => handleNavigation(e, href)}
                  className={`flex min-h-12 items-center border-b text-[14px] leading-5 outline-none transition-colors duration-150 ${isScrolled ? "border-black/10 hover:bg-black/5" : "border-white/10 hover:bg-white/10"} ${index === navigation.length - 1 ? "border-b-0" : ""}`}
                >
                  {label}
                </Link>
              ))}

            </div>

          </div>

        </div>

      </nav>

    </header>
  );
}