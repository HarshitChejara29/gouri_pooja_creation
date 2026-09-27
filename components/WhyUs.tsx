import Image from "next/image";
import Link from "next/link";

const reasons = [
  {
    title: "Premium Quality",
    subtitle: "Fabrics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
        <path d="M6 20V8l6-4 6 4v12" />
        <path d="M9 20v-7h6v7" />
        <path d="M4 20h16" />
      </svg>
    ),
  },
  {
    title: "Wide Range",
    subtitle: "of Collections",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
        <path d="M4 8h16" />
        <path d="M6 8v12h12V8" />
        <path d="M8 8V5h8v3" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </svg>
    ),
  },
  {
    title: "Trusted for",
    subtitle: "Authenticity",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
        <path d="M12 3 20 6v5c0 5-3.3 8.2-8 10-4.7-1.8-8-5-8-10V6l8-3Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Personalised",
    subtitle: "Customer Care",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
        <circle cx="12" cy="8" r="3" />
        <path d="M5.5 20c.7-3.4 3-5.2 6.5-5.2s5.8 1.8 6.5 5.2" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#faf8f4] text-[#1d1915]">

      {/* =================================================
          MAIN SECTION
      ================================================= */}

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">

        <div className="grid grid-cols-4 items-center gap-y-12 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="col-span-4 md:col-span-4 lg:col-span-4">

            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#E34234]">
              Why Choose Us
            </p>

            <h2 className="max-w-[480px] font-serif text-[40px] font-normal leading-[1.05] tracking-[-0.8px] md:text-[48px] lg:text-[52px]">
              A Blend of Tradition,
              <br />
              Quality and Grace
            </h2>

            <p className="mt-7 max-w-[470px] text-[13px] leading-6 text-[#858078] md:text-[14px] md:leading-7">
              We create sarees that are more than just garments —
              they&apos;re a celebration of tradition, art and
              individuality.
            </p>

            <Link href="#why-us" className="group mt-8 inline-flex min-h-12 items-center gap-4 border-b border-[#E34234] text-[12px] font-medium text-[#E34234] outline-none transition-all duration-150 hover:gap-6">
              <span>Learn More</span>

              <span aria-hidden="true" className="text-[16px] leading-none transition-transform duration-150 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

          {/* =================================================
              CENTER IMAGE
          ================================================= */}

          <div className="relative col-span-4 aspect-[1.35] w-full overflow-hidden md:col-span-4 lg:col-span-5">

            <Image
              src="/about/Full_Shop.png"
              alt="Gouri Pooja Creations sarees"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw"
              className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
            />

          </div>

          {/* =================================================
              RIGHT FEATURES
          ================================================= */}

          <div className="col-span-4 md:col-span-8 lg:col-span-3">

            <div className="grid grid-cols-1 border-t border-[#ddd4c8]">

              {reasons.map((reason) => (
                <div key={reason.title} className="flex min-h-[88px] items-center gap-4 border-b border-[#ddd4c8] px-1 py-5">

                  {/* ICON */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#ded5c8] text-[#a28b6c]">
                    {reason.icon}
                  </div>

                  {/* TEXT */}

                  <div>
                    <h3 className="text-[12px] font-semibold leading-5 text-[#4a443e]">
                      {reason.title}
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-[#9a938b]">
                      {reason.subtitle}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}