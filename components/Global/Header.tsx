"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const mainLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "About us", href: "#our-story" },
  { label: "Legacy", href: "#legacy" },
  { label: "What we do", href: "#why-us" },
];

const supportLinks = [
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const mobileLinks = [...mainLinks, ...supportLinks];

const loginOptions = [
  {
    title: "Retail customer",
    description: "For personal orders",
    href: "/login?type=personal",
  },
  {
    title: "Corporate & Business",
    description: "For GPCL Admin",
    href: "/login?type=corporate",
  },
  {
    title: "GPCL Corporate",
    description: "For GPCL Employees",
    href: "/login?type=corporate",
  },
];

/* Carbon focus: 2px blue on light, 2px white on dark (inverse) */
const focusLight =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#0f62fe]";

const focusDark =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white";

/* Carbon motion */
const fast =
  "duration-[110ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

const moderate =
  "duration-[240ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeHref, setActiveHref] = useState("#home");

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const loginRef = useRef<HTMLDivElement>(null);

  /*
   * HEADER SCROLL BEHAVIOR
   *
   * Scroll down  -> entire header hides
   * Scroll up    -> entire header appears
   * At top       -> header stays visible
   *
   * Works for both desktop and mobile.
   */
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const previousScrollY = lastScrollY.current;

        // Always show header at the very top
        if (currentScrollY <= 10) {
          setIsVisible(true);
        }
        // Scrolling DOWN
        else if (currentScrollY > previousScrollY + 6) {
          setIsVisible(false);

          // Close open dropdown/menu when header disappears
          setMenuOpen(false);
          setLoginOpen(false);
        }
        // Scrolling UP
        else if (currentScrollY < previousScrollY - 6) {
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

  /* Highlight the link for the section that is on screen */
  useEffect(() => {
    const elements = mobileLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* Close the login dropdown on outside click */
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        loginRef.current &&
        !loginRef.current.contains(event.target as Node)
      ) {
        setLoginOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /* Escape closes the menu and dropdown */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLoginOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setLoginOpen(false);
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLElement>,
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

    closeMenus();
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    // TODO: search is not connected yet.
    // Send `searchQuery` to your product search
    // or route to a results page before going live.
  };

  const toggleMobileMenu = () => {
    setMenuOpen((value) => !value);
    setLoginOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* =========================================================
          TOP UTILITY BAR
      ========================================================= */}
      <div className="h-8 overflow-hidden bg-[#E34234]">
        <div className="mx-auto flex h-8 w-full max-w-[1440px] items-center justify-between px-3 sm:px-4 md:px-8 lg:px-12">
          <div className="flex min-w-0 items-center text-xs leading-4 tracking-[0.32px] text-white">
            <span className="truncate">
              Free shipping on orders above ₹1999
            </span>

            <span
              aria-hidden="true"
              className="mx-3 hidden opacity-50 sm:inline"
            >
              |
            </span>

            <span className="hidden sm:inline">
              Delivery across India
            </span>
          </div>

          <span className="hidden text-xs leading-4 tracking-[0.32px] text-white md:block">
            Surat, Gujarat
          </span>
        </div>
      </div>

      {/* =========================================================
          PRIMARY NAVIGATION
      ========================================================= */}
      <div className="relative">
        <nav
          className="w-full bg-[#161616] text-white"
          aria-label="Main navigation"
        >
          <div className="mx-auto flex h-12 w-full max-w-[1440px] items-center px-3 sm:h-14 sm:px-4 md:px-8 lg:px-12">
            {/* LOGO */}
            <Link
              href="/"
              onClick={(e) => handleNavigation(e, "/")}
              aria-label="Gouri Pooja Creation, home"
              className={`flex h-full w-[120px] shrink-0 items-center sm:w-[150px] md:w-[205px] lg:w-[265px] ${focusDark}`}
            >
              <Image
                src="/white_logo.png"
                alt="Gouri Pooja Creation"
                width={210}
                height={76}
                priority
                className="h-auto w-[110px] object-contain sm:w-[135px] md:w-[160px] lg:w-[180px]"
              />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden h-full min-w-0 flex-1 items-stretch justify-end lg:flex">
              <div className="flex h-full items-stretch">
                {mainLinks.map((item) => {
                  const active = activeHref === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) =>
                        handleNavigation(e, item.href)
                      }
                      aria-current={active ? "true" : undefined}
                      className={`flex h-full items-center whitespace-nowrap px-3 text-sm leading-[18px] tracking-[0.16px] transition-colors ${fast} xl:px-4 ${
                        active
                          ? "bg-white/10 font-medium text-white"
                          : "border-transparent text-[#c6c6c6] hover:bg-[#2c2c2c] hover:text-white"
                      } ${focusDark}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* MOBILE HAMBURGER */}
            <div className="ml-auto flex items-center lg:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-label={
                  menuOpen ? "Close menu" : "Open menu"
                }
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className={`flex h-12 w-12 items-center justify-center ${focusDark}`}
              >
                <span
                  aria-hidden="true"
                  className="flex w-[22px] flex-col gap-[5px]"
                >
                  <span
                    className={`h-px w-full bg-white transition-all ${fast} ${
                      menuOpen
                        ? "translate-y-[6px] rotate-45"
                        : ""
                    }`}
                  />

                  <span
                    className={`h-px w-full bg-white transition-opacity ${fast} ${
                      menuOpen ? "opacity-0" : ""
                    }`}
                  />

                  <span
                    className={`h-px w-full bg-white transition-all ${fast} ${
                      menuOpen
                        ? "-translate-y-[6px] -rotate-45"
                        : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* =========================================================
            MOBILE NAVIGATION
        ========================================================= */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full z-[60] overflow-y-auto border-b border-[#c6c6c6] bg-white text-[#161616] shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-[max-height,opacity] ${moderate} lg:hidden ${
            menuOpen
              ? "max-h-[calc(100dvh-5.5rem)] opacity-100"
              : "invisible max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 sm:px-6 md:px-10">
            {mobileLinks.map((item) => {
              const active = activeHref === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) =>
                    handleNavigation(e, item.href)
                  }
                  aria-current={active ? "true" : undefined}
                  className={`flex min-h-12 items-center justify-between border-b border-[#e0e0e0] text-sm leading-[18px] tracking-[0.16px] ${
                    active
                      ? "font-semibold"
                      : "font-normal"
                  } ${focusLight}`}
                >
                  <span>{item.label}</span>

                  <span
                    aria-hidden="true"
                    className="text-base text-[#E34234]"
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================
          WHITE SEARCH & SUPPORT BAR
      ========================================================= */}
      <div className="relative z-30 border-b border-[#c6c6c6] bg-white">
        <div className="mx-auto flex min-h-16 w-full max-w-[1440px] items-center gap-2 px-3 py-2 sm:min-h-[72px] sm:gap-6 sm:px-4 sm:py-3 md:px-8 lg:px-12">
          {/* SEARCH */}
          <form
            role="search"
            onSubmit={handleSearch}
            className="flex h-10 min-w-0 flex-1 items-center border-b border-[#8d8d8d] bg-[#faf8f4] focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#0f62fe] sm:h-12"
          >
            <button
              type="submit"
              aria-label="Search"
              className="flex h-full w-10 shrink-0 items-center justify-center text-[#161616] outline-none sm:w-12"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9z" />
              </svg>
            </button>

            <input
              type="search"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search sarees, suits, kurtis"
              aria-label="Search products"
              className="h-full min-w-0 flex-1 bg-transparent pr-3 text-sm leading-[18px] tracking-[0.16px] text-[#161616] outline-none placeholder:text-[#6f6f6f]"
            />
          </form>

          {/* SUPPORT LINKS */}
          <div className="hidden shrink-0 items-center gap-4 md:flex">
            {supportLinks.map((item, index) => (
              <div
                key={item.href}
                className="flex items-center gap-4"
              >
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="h-6 w-px bg-[#c6c6c6]"
                  />
                )}

                <Link
                  href={item.href}
                  onClick={(e) =>
                    handleNavigation(e, item.href)
                  }
                  className={`flex min-h-12 items-center whitespace-nowrap text-sm leading-[18px] tracking-[0.16px] text-[#161616] transition-colors ${fast} hover:text-[#E34234] ${focusLight}`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* LOGIN */}
          <div ref={loginRef} className="relative">
            <button
              type="button"
              onClick={() =>
                setLoginOpen((value) => !value)
              }
              aria-expanded={loginOpen}
              aria-controls="login-options"
              className={`flex h-10 items-center justify-center gap-2 bg-[#E34234] px-3 text-sm font-medium leading-[18px] tracking-[0.16px] text-white transition-colors ${fast} hover:bg-[#a2191f] sm:h-12 sm:px-4 ${focusLight}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7 7 7 0 0 0-7-7zM26 30h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z" />
              </svg>

              <span className="sr-only sm:not-sr-only">
                Login
              </span>

              <svg
                width="12"
                height="12"
                viewBox="0 0 32 32"
                fill="currentColor"
                className={`transition-transform ${fast} ${
                  loginOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <path d="M16 22L6 12l1.4-1.4L16 19.2l8.6-8.6L26 12z" />
              </svg>
            </button>

            {/* LOGIN DROPDOWN */}
            <div
              id="login-options"
              className={`absolute right-0 top-full z-50 mt-2 w-[min(320px,calc(100vw-32px))] border border-[#c6c6c6] bg-white text-[#161616] shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-all ${moderate} ${
                loginOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <p className="border-b border-[#e0e0e0] px-4 py-3 text-xs leading-4 tracking-[0.32px] text-[#525252]">
                Log in as
              </p>

              {loginOptions.map((option) => (
                <Link
                  key={option.title}
                  href={option.href}
                  onClick={closeMenus}
                  className={`group flex items-center gap-4 border-b border-[#e0e0e0] px-4 py-4 last:border-b-0 hover:bg-[#faf8f4] ${focusLight}`}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold leading-[18px] tracking-[0.16px]">
                      {option.title}
                    </span>

                    <span className="mt-1 block text-xs leading-4 tracking-[0.32px] text-[#525252]">
                      {option.description}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-base text-[#E34234]"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}