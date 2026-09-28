import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  ["Home", "#home"],
  ["Collections", "#collections"],
  ["About Us", "#our-story"],
];

const aboutLinks = [
  ["Legacy", "#legacy"],
  ["Why Choose Us", "#why-us"],
  ["Customer Reviews", "#testimonials"],
];

const supportLinks = [
  ["Contact Us", "#contact"],
  ["FAQ", "#faq"],
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Justdial",
    href: "https://www.justdial.com/Surat/Gouri-Pooja-Creation-upper-ground-Ring-Road/0261PX261-X261-190709213933-V8Q1_BZDET",
    icon: (
      <span className="text-[10px] font-bold leading-none">
        JD
      </span>
    ),
  },
  {
    label: "IndiaMART",
    href: "https://www.indiamart.com/gouri-pooja-creation/aboutus.html",
    icon: (
      <span className="text-[9px] font-bold leading-none">
        IM
      </span>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1A17] text-[#f4ddd5]">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 md:px-8 md:py-16 lg:px-12 lg:py-20">

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1fr_1.35fr] lg:gap-0">

          {/* =================================================
              COLUMN 1 — BRAND
          ================================================= */}

          <div className="lg:pr-10">

            <Link href="#home" className="inline-flex min-h-12 items-center outline-none">
              <Image
                src="/white_logo.png"
                alt="Gouri Pooja Creations"
                width={220}
                height={80}
                className="h-auto w-[175px] md:w-[190px]"
              />
            </Link>

            <p className="mt-7 max-w-[330px] text-[13px] leading-6 text-[#e8c9c0] md:text-[14px] md:leading-7">
              Your trusted destination for ethnic wear.
              <br />
              Tradition. Style. You.
            </p>

            <div className="mt-8 border-t border-[#6B6560]/40 pt-6">
              <p className="max-w-[300px] font-serif text-[22px] leading-[1.2] text-[#f0d5cd] md:text-[24px]">
                “Tradition Today
                <br />
                Tomorrow Always”
              </p>
            </div>

          </div>


          {/* =================================================
              COLUMN 2 — EXPLORE
          ================================================= */}

          <div className="px-6 md:px-7 lg:px-7">

            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#f0d5cd]">
              Explore
            </p>

            <nav className="flex flex-col">
              {quickLinks.map(([label, href]) => (
                <Link
                  key={`${label}-${href}`}
                  href={href}
                  className="flex min-h-11 items-center border-b border-[#6B6560]/30 text-[12px] text-[#e5c8c0] outline-none transition-colors duration-150 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>

          </div>


          {/* =================================================
              COLUMN 3 — DISCOVER
          ================================================= */}

          <div className="px-6 md:px-7 lg:px-7">

            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#f0d5cd]">
              Discover
            </p>

            <nav className="flex flex-col">
              {aboutLinks.map(([label, href]) => (
                <Link
                  key={`${label}-${href}`}
                  href={href}
                  className="flex min-h-11 items-center border-b border-[#6B6560]/30 text-[12px] text-[#e5c8c0] outline-none transition-colors duration-150 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>

          </div>


          {/* =================================================
              COLUMN 4 — SUPPORT
          ================================================= */}

          <div className="px-6 md:px-7 lg:px-7">

            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#f0d5cd]">
              Support
            </p>

            <nav className="flex flex-col">
              {supportLinks.map(([label, href]) => (
                <Link
                  key={`${label}-${href}`}
                  href={href}
                  className="flex min-h-11 items-center border-b border-[#6B6560]/30 text-[12px] text-[#e5c8c0] outline-none transition-colors duration-150 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>

          </div>


          {/* =================================================
              COLUMN 5 — BRAND + SOCIAL
          ================================================= */}

          <div className="px-5 md:px-6 lg:px-6">

            {/* BRAND IDENTITY */}

            <div className="flex items-start gap-4">

              <svg
                width="42"
                height="52"
                viewBox="0 0 58 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1 shrink-0 text-[#d9afa5] opacity-70"
                aria-hidden="true"
              >
                <circle cx="29" cy="18" r="13" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="16" cy="30" r="13" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="42" cy="30" r="13" stroke="currentColor" strokeWidth="1.2" />
                <path d="M29 43C29 43 25 53 18 58" stroke="currentColor" strokeWidth="1.2" />
                <path d="M29 43C29 43 33 53 40 58" stroke="currentColor" strokeWidth="1.2" />
                <path d="M18 58H40" stroke="currentColor" strokeWidth="1.2" />
              </svg>

              <div className="min-w-0">

                <p className="text-[10px] uppercase leading-5 tracking-[0.14em] text-[#cfa59d]">
                  Gouri Pooja Creations
                </p>

                <p className="mt-2 text-[11px] leading-5 text-[#e1c1b9]">
                  Crafted with heritage, made for today.
                </p>

              </div>

            </div>


            {/* CONNECT WITH US */}

            <div className="mt-8 border-t border-[#6B6560]/40 pt-6">

              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#f0d5cd]">
                Connect With Us
              </p>

              {/* ALL 5 ICONS IN ONE LINE */}

              <div className="mt-4 flex w-full flex-nowrap items-center gap-2">

                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#6B6560]/50 text-[#e5c8c0] outline-none transition-all duration-150 hover:border-[#f0d5cd] hover:bg-[#E34234] hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}

              </div>

              <p className="mt-4 max-w-[260px] text-[10px] leading-5 text-[#cfa59d]">
                Follow our latest collections, updates and craftsmanship.
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            FOOTER DIVIDER
        ====================================================== */}

        <div className="mt-14 border-t border-[#6B6560]/40 md:mt-16" />


        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}

        <div className="grid grid-cols-1 gap-y-5 pt-6 md:grid-cols-2 md:items-center">

          <div>
            <p className="text-[10px] leading-5 text-[#d7b8b0] md:text-[11px]">
              © 2026 Gouri Pooja Creations. All rights reserved.
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2 md:justify-end"
            aria-label="Legal"
          >
            <Link
              href="/privacy-policy"
              className="text-[10px] text-[#d7b8b0] outline-none transition-colors duration-150 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-[10px] text-[#d7b8b0] outline-none transition-colors duration-150 hover:text-white"
            >
              Terms & Conditions
            </Link>
          </nav>

        </div>

      </div>
    </footer>
  );
}