import Link from "next/link";
import Image from "next/image";

const linkGroups = [
  {
    title: "Explore",
    links: [
      ["Home", "/"],
      ["Collections", "#collections"],
      ["Shop", "/shop"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About us", "#our-story"],
      ["Legacy", "#legacy"],
      ["What we do", "#why-us"],
    ],
  },
  {
    title: "Support",
    links: [
      ["Contact", "#contact"],
      ["FAQ", "#faq"],
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
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
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="3" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Justdial",
    href: "https://www.justdial.com/Surat/Gouri-Pooja-Creation-upper-ground-Ring-Road/0261PX261-X261-190709213933-V8Q1_BZDET",
    icon: (
      <span aria-hidden="true" className="text-xs font-semibold leading-4">
        JD
      </span>
    ),
  },
  {
    label: "IndiaMART",
    href: "https://www.indiamart.com/gouri-pooja-creation/aboutus.html",
    icon: (
      <span aria-hidden="true" className="text-xs font-semibold leading-4">
        IM
      </span>
    ),
  },
];

/* Carbon focus on dark backgrounds (inverse): 2px white */
const focusRing =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/* Carbon motion: fast-01 110ms, productive easing */
const fast = "duration-[110ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

/* label-01: 12/16, 0.32px */
const label = "text-xs leading-4 tracking-[0.32px] text-[#c6c6c6]";

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-[#f4f4f4]">
      <div className="mx-auto max-w-[1440px] px-4 pb-6 pt-14 sm:px-6 md:px-8 md:pt-16 lg:px-12 lg:pt-20">
        <div className="grid grid-cols-4 gap-y-12 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">
          {/* BRAND + SOCIAL */}
          <div className="col-span-4 md:col-span-8 lg:col-span-5">
            <Link href="/" className={`inline-flex min-h-12 items-center ${focusRing}`}>
              <Image
                src="/white_logo.png"
                alt="Gouri Pooja Creation"
                width={220}
                height={80}
                className="h-auto w-[145px] md:w-[200px]"
              />
            </Link>

            {/* body-01: 14/20, 0.16px */}
            <p className="mt-6 max-w-[340px] text-sm leading-5 tracking-[0.16px] text-[#c6c6c6]">
              Sarees, garments and fabrics. Manufacturing, wholesale and retail, in Surat since 2019.
            </p>

            <div className="mt-8">
              <p className={label}>Find us online</p>

              {/* ALL 5 ICONS IN ONE LINE */}
              <div className="mt-3 flex flex-nowrap items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${social.label} (opens in a new tab)`}
                    title={social.label}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center border border-[#6f6f6f] text-[#f4f4f4] transition-colors ${fast} hover:border-[#E34234] hover:bg-[#E34234] hover:text-white ${focusRing}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="col-span-4 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:col-span-8 lg:col-span-6 lg:col-start-7">
            {linkGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <p className={`${label} mb-3`}>{group.title}</p>

                <span className="block w-full border-t border-[#393939]" />

                <ul className="mt-3 flex flex-col">
                  {group.links.map(([name, href]) => (
                    <li key={`${name}-${href}`}>
                      <Link
                        href={href}
                        className={`flex min-h-11 items-center text-sm leading-[18px] tracking-[0.16px] text-[#f4f4f4] transition-colors ${fast} hover:text-[#ff8389] ${focusRing}`}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 flex flex-col gap-y-2 border-t border-[#393939] pt-4 md:mt-16 md:flex-row md:items-center md:justify-between">
          <p className={label}>© 2026 Gouri Pooja Creation. All rights reserved.</p>

          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6">
            <Link href="/privacy-policy" className={`flex min-h-11 items-center ${label} transition-colors ${fast} hover:text-white ${focusRing}`}>
              Privacy policy
            </Link>

            <Link href="/terms" className={`flex min-h-11 items-center ${label} transition-colors ${fast} hover:text-white ${focusRing}`}>
              Terms and conditions
            </Link>

            <Link href="#home" className={`flex min-h-11 items-center gap-2 ${label} transition-colors ${fast} hover:text-white ${focusRing}`}>
              Back to top
              <span aria-hidden="true">↑</span>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}