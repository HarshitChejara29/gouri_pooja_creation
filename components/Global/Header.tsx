"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const primaryNavigation = [
  ["Home", "#home"],
  ["Collections", "#collections"],
  ["About Us", "#our-story"],
  ["Legacy", "#legacy"],
  ["Why Us", "#why-us"],
  ["Support", "#faq"],
  ["Contact", "#contact"],
];

const audienceNavigation = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Collections",
    href: "#collections",
  },
  {
    label: "About Us",
    href: "#our-story",
  },
  {
    label: "Our Legacy",
    href: "#legacy",
  },
  {
    label: "Why Us",
    href: "#why-us",
  },
];

const loginOptions = [
  {
    title: "Personal",
    description: "Access your personal account",
    href: "/login?type=personal",
  },
  {
    title: "Neo for Corporates",
    description: "Corporate & business access",
    href: "/login?type=corporate",
  },
  {
    title: "GPC City Corporate",
    description: "Gouri Pooja City access",
    href: "/login?type=gpc-city",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const loginRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 10) {
          setIsVisible(true);
          setIsScrolled(false);
        } else {
          setIsScrolled(true);

          if (currentScrollY > lastScrollY.current + 6) {
            setIsVisible(false);
            setLoginOpen(false);
            setSearchOpen(false);

            /*
             * Keep mobile hamburger available while scrolling.
             * The full header collapses visually on mobile,
             * but the black navigation bar stays visible.
             */
          } else if (currentScrollY < lastScrollY.current - 6) {
            setIsVisible(true);
          }
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

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setLoginOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  const handleNavigation = (e: React.MouseEvent<HTMLElement>, href: string) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    closeMenus();
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setLoginOpen(false);
    setSearchOpen(false);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    console.log("Search:", searchQuery);
  };

  const toggleMobileMenu = () => {
    setMenuOpen((value) => !value);
    setLoginOpen(false);
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">

      {/* =========================================================
          TOP UTILITY BAR
      ========================================================= */}

      <div className={`overflow-hidden bg-[#E34234] transition-all duration-300 lg:block ${isScrolled && !isVisible ? "max-h-0 opacity-0 lg:max-h-[30px] lg:opacity-100" : "max-h-[30px] opacity-100"}`}>

        <div className="mx-auto flex h-[30px] w-full max-w-[1440px] items-center justify-between px-3 sm:px-4 md:px-8 lg:px-12">

          <div className="flex min-w-0 items-center text-[9px] text-white sm:gap-3 sm:text-[11px]">

            <span className="truncate">
              Free Shipping on Orders Above ₹1999
            </span>

            <span className="mx-2 hidden opacity-40 sm:inline">
              |
            </span>

            <span className="hidden sm:inline">
              Celebrate Tradition with Gouri Pooja Creations
            </span>

          </div>

          <span className="hidden text-[10px] tracking-wide text-white md:block">
            Surat, Gujarat
          </span>

        </div>

      </div>

      {/* =========================================================
          PRIMARY NAVIGATION
      ========================================================= */}

      <nav className="w-full bg-[#1C1A17] text-white" aria-label="Main navigation">

        <div className="mx-auto flex h-[52px] w-full max-w-[1440px] items-center px-3 sm:h-[56px] sm:px-4 md:px-8 lg:px-12">

          {/* LOGO */}

          <Link
            href="#home"
            onClick={(e) => handleNavigation(e, "#home")}
            aria-label="Gouri Pooja Creations Home"
            className="flex h-full w-[120px] shrink-0 items-center outline-none sm:w-[150px] md:w-[205px] lg:w-[265px]"
          >
            <Image
              src="/white_logo.png"
              alt="Gouri Pooja Creations"
              width={210}
              height={76}
              priority
              className="h-auto w-[110px] object-contain sm:w-[135px] md:w-[160px] lg:w-[180px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}

          <div className="hidden h-full min-w-0 flex-1 items-end justify-end lg:flex">

            <div className="flex h-full items-center gap-1 xl:gap-2">

              {audienceNavigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className={`flex h-[40px] items-center whitespace-nowrap px-3 text-[13px] font-medium outline-none transition-colors xl:px-4 ${index === 0 ? "bg-white/10 text-white" : "text-white hover:bg-white/10 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              ))}

            </div>

          </div>

          {/* MOBILE HAMBURGER */}

          <div className="ml-auto flex items-center lg:hidden">

            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-[44px] w-[44px] items-center justify-center outline-none"
            >

              <div className="flex w-[22px] flex-col gap-[5px]">

                <span className={`h-px w-full bg-white transition-all duration-200 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />

                <span className={`h-px w-full bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />

                <span className={`h-px w-full bg-white transition-all duration-200 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />

              </div>

            </button>

          </div>

        </div>

      </nav>

      {/* =========================================================
          WHITE SEARCH & SUPPORT BAR
      ========================================================= */}

      <div className={`relative z-30 border-b border-[#eae3df] bg-[#ffffff] transition-all duration-300 lg:block ${isScrolled && !isVisible ? "max-h-0 overflow-hidden opacity-0 lg:max-h-[82px] lg:overflow-visible lg:opacity-100" : "max-h-[82px] opacity-100"}`}>

        <div className="mx-auto flex min-h-[58px] w-full max-w-[1440px] items-center gap-2 px-3 py-2 sm:min-h-[70px] sm:gap-5 sm:px-4 sm:py-3 md:px-8 lg:px-12">

          {/* SEARCH */}

          <form
            onSubmit={handleSearch}
            className="flex h-[40px] min-w-0 flex-1 items-center border border-[#d7b2c1] bg-white transition-colors focus-within:border-[#E34234] focus-within:ring-1 focus-within:ring-[#E34234]/20 sm:h-[42px]"
          >

            <button
              type="submit"
              aria-label="Search"
              className="flex h-full w-12 shrink-0 items-center justify-center text-[#E34234] outline-none"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="10.8" cy="10.8" r="6.4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            <input
              ref={searchInputRef}
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sarees, fabrics, collections..."
              className="h-full min-w-0 flex-1 bg-transparent pr-2 text-[12px] text-[#302b27] outline-none placeholder:text-[#77716d] sm:pr-3 sm:text-[16px]"
              aria-label="Search collections"
            />

            <button
              type="button"
              onClick={() => {
                setSearchOpen((value) => !value);

                if (!searchOpen) {
                  setTimeout(() => searchInputRef.current?.focus(), 0);
                }
              }}
              aria-label="Focus search"
              className="hidden h-full w-12 shrink-0 items-center justify-center text-[#514943] outline-none sm:flex"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="9" y="3" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6 11a6 6 0 0 0 12 0M12 17v4m-3 0h6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

          </form>

          {/* SUPPORT LINKS */}

          <div className="hidden shrink-0 items-center gap-5 text-[13px] text-[#000000] md:flex">

            <Link
              href="#faq"
              onClick={(e) => handleNavigation(e, "#faq")}
              className="outline-none transition-colors hover:text-[#E34234]"
            >
              Support
            </Link>

            <span className="h-6 w-px bg-[#e4ded9]" />

            <Link
              href="#contact"
              onClick={(e) => handleNavigation(e, "#contact")}
              className="whitespace-nowrap outline-none transition-colors hover:text-[#E34234]"
            >
              Contact Us
            </Link>

          </div>

          {/* LOGIN */}

          <div ref={loginRef} className="relative">

            <button
              type="button"
              onClick={() => {
                setSearchOpen(false);
                setLoginOpen((value) => !value);
              }}
              aria-expanded={loginOpen}
              aria-haspopup="menu"
              className="flex h-[38px] items-center justify-center gap-1.5 bg-[#E34234] px-2.5 text-[11px] font-semibold text-white outline-none transition-colors hover:bg-[#720613] sm:h-[42px] sm:gap-2 sm:px-4 sm:text-[12px]"
            >

              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5.5 20c.7-3.5 3-5.3 6.5-5.3s5.8 1.8 6.5 5.3" stroke="currentColor" strokeWidth="1.5" />
              </svg>

              <span className="hidden sm:inline">
                Login
              </span>

              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform ${loginOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.6" />
              </svg>

            </button>

            {/* LOGIN DROPDOWN */}

            <div className={`absolute right-0 top-[46px] z-50 w-[min(350px,calc(100vw-32px))] border border-[#e8dfda] bg-white text-[#29231f] shadow-[0_15px_45px_rgba(0,0,0,0.15)] transition-all duration-200 sm:top-[52px] ${loginOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>

              <div className="border-b border-[#eee7e1] px-5 py-4">

                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#E34234]">
                  GPC Account
                </p>

                <h3 className="mt-1 text-[18px] font-medium">
                  Choose your access
                </h3>

              </div>

              {loginOptions.map((option) => (
                <Link
                  key={option.title}
                  href={option.href}
                  onClick={closeMenus}
                  className="group flex items-center gap-4 border-b border-[#eee7e1] px-5 py-4 outline-none last:border-0 hover:bg-[#faf7f5]"
                >

                  <span className="min-w-0 flex-1">

                    <span className="block text-[13px] font-semibold group-hover:text-[#E34234]">
                      {option.title}
                    </span>

                    <span className="mt-1 block text-[11px] text-[#8b817a]">
                      {option.description}
                    </span>

                  </span>

                  <span className="text-lg text-[#E34234]">
                    →
                  </span>

                </Link>
              ))}

              <div className="bg-[#faf7f5] px-5 py-3 text-[10px] text-[#8b817a]">
                Keep your account credentials secure.
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================= */}

      <div className={`absolute left-0 top-[82px] z-[60] w-full overflow-hidden border-b border-[#e7d6db] bg-white text-[#302b27] shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 lg:hidden ${menuOpen ? "max-h-[calc(100dvh-82px)] overflow-y-auto opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}>

        <div className="px-4 pb-5 sm:px-6 md:px-10">

          <div className="mt-4">

            {primaryNavigation.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleNavigation(e, href)}
                className="flex min-h-[48px] items-center justify-between border-b border-[#eee7e2] text-[13px] font-medium outline-none"
              >

                <span>
                  {label}
                </span>

                <span className="text-[17px] text-[#E34234]">
                  →
                </span>

              </Link>
            ))}

          </div>

        </div>

      </div>

    </header>
  );
}