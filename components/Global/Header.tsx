"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   NAVIGATION
========================================================= */

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

/* =========================================================
   LOGIN OPTIONS
========================================================= */

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

/* =========================================================
   BRAND
========================================================= */

const PRIMARY_RED = "#E34234";
const IVORY = "#FFE8E6";

const LOGO_SRC = "/black_logo.png";

/* =========================================================
   MOTION / FOCUS
========================================================= */

const focusLight =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E34234]";

const fast =
  "duration-[140ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

const moderate =
  "duration-[240ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeHref, setActiveHref] = useState("#home");

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  /*
   * Separate refs for desktop/mobile login.
   * Both versions exist in the DOM at different breakpoints.
   */
  const desktopLoginRef = useRef<HTMLDivElement>(null);
  const mobileLoginRef = useRef<HTMLDivElement>(null);

  /* =========================================================
     HEADER SCROLL BEHAVIOR
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const previousScrollY = lastScrollY.current;

        /* Always visible at top */
        if (currentScrollY <= 10) {
          setIsVisible(true);
        }

        /* Scroll DOWN -> hide */
        else if (currentScrollY > previousScrollY + 6) {
          setIsVisible(false);

          setMenuOpen(false);
          setLoginOpen(false);
        }

        /* Scroll UP -> show */
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

  /* =========================================================
     ACTIVE SECTION DETECTION
  ========================================================= */

  useEffect(() => {
    const elements = mobileLinks
      .map((link) =>
        document.getElementById(link.href.slice(1))
      )
      .filter(
        (el): el is HTMLElement => el !== null
      );

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

  /* =========================================================
     CLOSE LOGIN DROPDOWN ON OUTSIDE CLICK
  ========================================================= */

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedDesktopLogin =
        desktopLoginRef.current?.contains(target);

      const clickedMobileLogin =
        mobileLoginRef.current?.contains(target);

      if (
        !clickedDesktopLogin &&
        !clickedMobileLogin
      ) {
        setLoginOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLoginOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =========================================================
     HELPERS
  ========================================================= */

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

  /* =========================================================
     SEARCH

     Searches the sections already present on the page.
     Examples:
       "saree" / "suits" / "kurtis" -> Collections
       "legacy" / "2019" / "history" -> Legacy
       "manufacturing" / "wholesale" -> What we do
       "faq" / "questions" -> FAQ
       "contact" / "visit" -> Contact

     If a product/category name is present inside one of the
     existing sections, the matching section is opened as well.
  ========================================================= */

  const handleSearch = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    const normalizedQuery = query
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();

    if (!normalizedQuery) return;

    /*
     * Section aliases make common searches go to the
     * correct section even when the exact word is not
     * present in the section heading.
     */
    const sectionAliases: Record<string, string[]> = {
      "#home": [
        "home",
        "hero",
        "banner",
        "buying in bulk",
        "bulk",
      ],

      "#collections": [
        "collection",
        "collections",
        "saree",
        "sarees",
        "sari",
        "saris",
        "silk",
        "net",
        "cotton",
        "banarasi",
        "georgette",
        "chiffon",
        "organza",
        "lehenga",
        "lehengas",
        "suit",
        "suits",
        "kurti",
        "kurtis",
        "dupatta",
        "ready to wear",
        "ready to wear sarees",
        "new arrivals",
        "new arrival",
        "drape",
        "fabric",
        "fabrics",
      ],

      "#our-story": [
        "about",
        "about us",
        "our story",
        "story",
        "surat",
        "made in surat",
        "our journey",
      ],

      "#legacy": [
        "legacy",
        "history",
        "heritage",
        "timeline",
        "2019",
        "since 2019",
        "journey",
      ],

      "#why-us": [
        "why us",
        "what we do",
        "manufacturing",
        "manufacturer",
        "wholesale",
        "retail",
        "business",
        "quality",
        "quality products",
        "how we work",
        "services",
      ],

      "#faq": [
        "faq",
        "faqs",
        "question",
        "questions",
        "frequently asked",
        "shipping",
        "delivery",
        "return",
        "returns",
        "exchange",
        "payment",
        "order",
        "orders",
      ],

      "#contact": [
        "contact",
        "contact us",
        "visit",
        "visit us",
        "location",
        "address",
        "phone",
        "email",
        "call",
        "write to us",
      ],
    };

    /*
     * First try an exact/alias match.
     */
    let targetId: string | null = null;

    const aliasEntries = Object.entries(sectionAliases);

    for (const [sectionId, aliases] of aliasEntries) {
      const exactAlias = aliases.some(
        (alias) =>
          normalizedQuery ===
          alias.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
      );

      if (exactAlias) {
        targetId = sectionId;
        break;
      }
    }

    /*
     * Then look at the actual text inside the existing
     * page sections. This allows searches such as a
     * particular collection/product name to land in the
     * section where that content already exists.
     */
    if (!targetId) {
      const sectionIds = mobileLinks.map(
        (link) => link.href
      );

      const candidates = sectionIds
        .map((id) => {
          const element =
            document.querySelector(id);

          if (!element) return null;

          const text = (
            element.textContent || ""
          )
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, " ")
            .trim();

          if (!text) return null;

          const queryWords =
            normalizedQuery.split(" ");

          const matchedWords =
            queryWords.filter((word) =>
              text.includes(word)
            ).length;

          const exactPhrase =
            text.includes(normalizedQuery);

          return {
            id,
            matchedWords,
            exactPhrase,
            textLength: text.length,
          };
        })
        .filter(
          (
            item
          ): item is {
            id: string;
            matchedWords: number;
            exactPhrase: boolean;
            textLength: number;
          } => item !== null
        )
        .filter(
          (item) => item.matchedWords > 0
        )
        .sort((a, b) => {
          if (
            a.exactPhrase !==
            b.exactPhrase
          ) {
            return a.exactPhrase ? -1 : 1;
          }

          if (
            a.matchedWords !==
            b.matchedWords
          ) {
            return (
              b.matchedWords -
              a.matchedWords
            );
          }

          return (
            a.textLength -
            b.textLength
          );
        });

      if (candidates.length > 0) {
        targetId = candidates[0].id;
      }
    }

    /*
     * If nothing matched, don't navigate somewhere random.
     * Keep the user's query in the input so they can refine it.
     */
    if (!targetId) return;

    const target =
      document.querySelector(targetId);

    if (!target) return;

    /*
     * Update active navigation state immediately.
     */
    setActiveHref(targetId);

    /*
     * Close mobile menu / login dropdown.
     */
    closeMenus();

    /*
     * Scroll below the sticky header so the section
     * heading/content is actually visible.
     */
    const headerOffset =
      window.innerWidth >= 1024
        ? 130
        : 125;

    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
  };

  const toggleMobileMenu = () => {
    setMenuOpen((value) => !value);
    setLoginOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-transform duration-300 ease-out motion-reduce:transition-none ${
        isVisible
          ? "translate-y-0"
          : "-translate-y-full"
      }`}
    >
      {/* =====================================================
          TOP RED UTILITY BAR
      ===================================================== */}

      <div
        className="h-8 overflow-hidden text-white"
        style={{
          backgroundColor: PRIMARY_RED,
        }}
      >
        <div className="mx-auto flex h-8 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12">
          <div className="flex min-w-0 items-center text-[11px] leading-4 tracking-[0.25px] sm:text-xs">
            <span className="truncate">
              Free shipping on orders above ₹1999
            </span>

            <span
              aria-hidden="true"
              className="mx-3 hidden h-3.5 w-px bg-white/50 sm:block"
            />

            <span className="hidden sm:inline">
              Delivery across India
            </span>
          </div>

          <span className="hidden text-[11px] leading-4 tracking-[0.25px] sm:text-xs md:block">
            Surat, Gujarat
          </span>
        </div>
      </div>

      {/* =====================================================
          MAIN HEADER
      ===================================================== */}

      <div
        className="relative border-b border-[#ded5c8] text-[#161616]"
        style={{
          backgroundColor: IVORY,
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-12">

          {/* =================================================
              TOP ROW

              DESKTOP:
              LOGO              SEARCH             LOGIN

              MOBILE:
              LOGO                                      MENU
          ================================================= */}

          <div className="flex h-[58px] items-center sm:h-[64px] lg:h-[68px]">

            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              href="/"
              aria-label="Gouri Pooja Creation, home"
              className={`flex h-full shrink-0 items-center ${focusLight}`}
            >
              <Image
                src={LOGO_SRC}
                alt="Gouri Pooja Creation"
                width={210}
                height={76}
                priority
                className="h-auto w-[145px] object-contain sm:w-[125px] md:w-[145px] lg:w-[200px]"
              />
            </Link>

            {/* =================================================
                DESKTOP SEARCH + LOGIN GROUP

                IMPORTANT:
                Search and Login are in the SAME flex group.
            ================================================= */}

            <div className="ml-auto hidden items-center gap-3 lg:flex">

              {/* =================================================
                  DESKTOP SEARCH
              ================================================= */}

              <form
                role="search"
                onSubmit={handleSearch}
                className="flex h-11 w-[clamp(420px,42vw,620px)] shrink-0 items-center border border-[#c9c1b8] bg-white transition-colors hover:border-[#9f968d] focus-within:border-[#E34234]"
              >
                <button
                  type="submit"
                  aria-label="Search"
                  className="flex h-full w-12 shrink-0 items-center justify-center text-[#292929] outline-none"
                >
                  <svg
                    width="17"
                    height="17"
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
                  className="h-full min-w-0 flex-1 bg-transparent pr-4 text-sm leading-[18px] tracking-[0.16px] text-[#161616] outline-none placeholder:text-[#6f6f6f]"
                />
              </form>

              {/* =================================================
                  DESKTOP LOGIN
              ================================================= */}

              <div
                ref={desktopLoginRef}
                className="relative shrink-0"
              >
                <button
                  type="button"
                  onClick={() =>
                    setLoginOpen(
                      (value) => !value
                    )
                  }
                  aria-expanded={loginOpen}
                  aria-controls="desktop-login-options"
                  className={`flex h-11 items-center justify-center gap-2 bg-[#E34234] px-4 text-sm font-medium leading-[18px] tracking-[0.16px] text-white transition-colors ${fast} hover:bg-[#c7352a] ${focusLight}`}
                >
                  {/* User icon */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7 7 7 0 0 0-7-7zM26 30h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z" />
                  </svg>

                  <span>Login</span>

                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className={`transition-transform ${fast} ${
                      loginOpen
                        ? "rotate-180"
                        : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="M16 22L6 12l1.4-1.4L16 19.2l8.6-8.6L26 12z" />
                  </svg>
                </button>

                {/* =================================================
                    DESKTOP LOGIN DROPDOWN
                ================================================= */}

                <div
                  id="desktop-login-options"
                  className={`absolute right-0 top-full z-[100] mt-2 w-[320px] border border-[#d5cec5] bg-white text-[#161616] shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all ${moderate} ${
                    loginOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <p className="border-b border-[#e7e2dc] px-4 py-3 text-xs leading-4 tracking-[0.32px] text-[#525252]">
                    Log in as
                  </p>

                  {loginOptions.map(
                    (option) => (
                      <Link
                        key={option.title}
                        href={option.href}
                        onClick={closeMenus}
                        className={`group flex items-center gap-4 border-b border-[#e7e2dc] px-4 py-4 last:border-b-0 hover:bg-[#faf8f4] ${focusLight}`}
                      >
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold leading-[18px] tracking-[0.16px]">
                            {option.title}
                          </span>

                          <span className="mt-1 block text-xs leading-4 tracking-[0.32px] text-[#525252]">
                            {option.description}
                          </span>
                        </span>

                        <span className="text-base text-[#E34234] transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* =================================================
                MOBILE HAMBURGER

                Login is intentionally NOT here.
                Login is beside Search below.
            ================================================= */}

            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={`ml-auto flex h-10 w-10 items-center justify-center lg:hidden ${focusLight} sm:h-11 sm:w-11`}
            >
              <span
                aria-hidden="true"
                className="flex w-[22px] flex-col gap-[5px]"
              >
                <span
                  className={`h-[1.5px] w-full bg-[#161616] transition-all ${fast} ${
                    menuOpen
                      ? "translate-y-[6.5px] rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`h-[1.5px] w-full bg-[#161616] transition-opacity ${fast} ${
                    menuOpen
                      ? "opacity-0"
                      : ""
                  }`}
                />

                <span
                  className={`h-[1.5px] w-full bg-[#161616] transition-all ${fast} ${
                    menuOpen
                      ? "-translate-y-[6.5px] -rotate-45"
                      : ""
                  }`}
                />
              </span>
            </button>
          </div>

          {/* =====================================================
              MOBILE SEARCH + LOGIN

              BOTH ARE ON THE SAME ROW
          ===================================================== */}

          <div className="flex items-center gap-2 pb-3 lg:hidden">

            {/* =================================================
                MOBILE SEARCH
            ================================================= */}

            <form
              role="search"
              onSubmit={handleSearch}
              className="flex h-10 min-w-0 flex-1 items-center border border-[#c9c1b8] bg-white focus-within:border-[#E34234] sm:h-11"
            >
              <button
                type="submit"
                aria-label="Search"
                className="flex h-full w-10 shrink-0 items-center justify-center text-[#292929] outline-none sm:w-11"
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
                className="h-full min-w-0 flex-1 bg-transparent pr-2 text-[13px] leading-[18px] text-[#161616] outline-none placeholder:text-[#77716c] sm:text-sm"
              />
            </form>

            {/* =================================================
                MOBILE LOGIN

                NOW DIRECTLY BESIDE SEARCH
            ================================================= */}

            <div
              ref={mobileLoginRef}
              className="relative shrink-0"
            >
              <button
                type="button"
                onClick={() =>
                  setLoginOpen(
                    (value) => !value
                  )
                }
                aria-expanded={loginOpen}
                aria-controls="mobile-login-options"
                className={`flex h-10 items-center justify-center gap-1.5 bg-[#E34234] px-3 text-[13px] font-medium text-white transition-colors ${fast} hover:bg-[#c7352a] ${focusLight} sm:h-11 sm:px-4 sm:text-sm`}
              >
                {/* User icon */}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7 7 7 0 0 0-7-7zM26 30h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z" />
                </svg>

                <span>Login</span>

                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className={`transition-transform ${fast} ${
                    loginOpen
                      ? "rotate-180"
                      : ""
                  }`}
                  aria-hidden="true"
                >
                  <path d="M16 22L6 12l1.4-1.4L16 19.2l8.6-8.6L26 12z" />
                </svg>
              </button>

              {/* =================================================
                  MOBILE LOGIN DROPDOWN
              ================================================= */}

              <div
                id="mobile-login-options"
                className={`absolute right-0 top-full z-[100] mt-2 w-[min(310px,calc(100vw-32px))] border border-[#d5cec5] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all ${moderate} ${
                  loginOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <p className="border-b border-[#e7e2dc] px-4 py-3 text-xs text-[#525252]">
                  Log in as
                </p>

                {loginOptions.map(
                  (option) => (
                    <Link
                      key={option.title}
                      href={option.href}
                      onClick={closeMenus}
                      className={`group flex items-center gap-3 border-b border-[#e7e2dc] px-4 py-4 last:border-b-0 hover:bg-[#faf8f4] ${focusLight}`}
                    >
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold">
                          {option.title}
                        </span>

                        <span className="mt-1 block text-xs text-[#525252]">
                          {option.description}
                        </span>
                      </span>

                      <span className="text-[#E34234] transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>

          {/* =====================================================
              DESKTOP SECOND ROW

              LEFT:
              Home / Collections / About us / Legacy / What we do

              RIGHT:
              FAQ / Contact
          ===================================================== */}

          <div className="hidden h-11 items-stretch justify-between border-t border-[#d9cfc0] lg:flex">

            {/* =================================================
                MAIN NAVIGATION
            ================================================= */}

            <nav
              aria-label="Main navigation"
              className="flex h-full items-stretch gap-8"
            >
              {mainLinks.map((item) => {
                const active =
                  activeHref === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) =>
                      handleNavigation(
                        e,
                        item.href
                      )
                    }
                    aria-current={
                      active
                        ? "true"
                        : undefined
                    }
                    className={`flex items-center whitespace-nowrap border-b-2 text-sm leading-[18px] tracking-[0.16px] transition-colors ${fast} ${
                      active
                        ? "border-[#E34234] font-semibold text-[#161616]"
                        : "border-transparent font-medium text-[#393939] hover:border-[#E34234]/60 hover:text-[#161616]"
                    } ${focusLight}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* =================================================
                FAQ + CONTACT

                These remain under Login on desktop.
            ================================================= */}

            <div className="flex h-full items-center">
              {supportLinks.map((item, index) => {
    const active = activeHref === item.href;

    return (
      <div
        key={item.href}
        className="flex h-full items-stretch"
      >
        {index > 0 && (
          <span
            aria-hidden="true"
            className="mx-4 my-auto h-5 w-px bg-[#cfc5b8]"
          />
        )}

        <Link
          href={item.href}
          onClick={(e) =>
            handleNavigation(
              e,
              item.href
            )
          }
          aria-current={
            active ? "true" : undefined
          }
          className={`relative flex h-full items-center whitespace-nowrap border-b-2 text-sm leading-[18px] tracking-[0.16px] transition-colors ${fast} ${focusLight} ${
            active
              ? "border-[#E34234] font-semibold text-[#161616]"
              : "border-transparent font-normal text-[#292929] hover:border-[#E34234]/60 hover:text-[#161616]"
          }`}
        >
          {item.label}
        </Link>
      </div>
    );
  })}
        </div>

        </div>

        {/* =====================================================
            MOBILE NAVIGATION MENU
        ===================================================== */}

        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full z-[70] overflow-y-auto border-b border-[#d5cec5] bg-white text-[#161616] shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-[max-height,opacity] ${moderate} lg:hidden ${
            menuOpen
              ? "max-h-[calc(100dvh-7rem)] opacity-100"
              : "invisible max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5 pt-1 sm:px-6">

            {mobileLinks.map((item) => {
              const active =
                activeHref === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) =>
                    handleNavigation(
                      e,
                      item.href
                    )
                  }
                  aria-current={
                    active
                      ? "true"
                      : undefined
                  }
                  className={`flex min-h-[52px] items-center justify-between border-b border-[#ebe6e1] text-[14px] leading-[18px] tracking-[0.1px] transition-colors ${fast} ${
                    active
                      ? "font-semibold text-[#E34234]"
                      : "font-normal text-[#292929]"
                  } ${focusLight}`}
                >
                  <span>
                    {item.label}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`text-[17px] transition-transform ${fast} ${
                      active
                        ? "translate-x-0"
                        : "-translate-x-1"
                    } text-[#E34234]`}
                  >
                    →
                  </span>
                </Link>
              );
            })}

          </div>
        </div>
      </div>
      </div>
    </header>
  );
}