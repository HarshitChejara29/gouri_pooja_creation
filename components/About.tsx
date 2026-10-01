import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Quality fabrics",
    subtitle: "Sarees to suits",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 10.5c0-1.8 1.5-3.2 3.5-3.2s3.5 1.4 3.5 3.2c0 2.8-3.5 4.2-3.5 6.2 0-2-3.5-3.4-3.5-6.2Z" />
      </svg>
    ),
  },
  {
    title: "Indian designs",
    subtitle: "Ethnic wear only",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3 20 6v5c0 5.2-3.4 8.3-8 10-4.6-1.7-8-4.8-8-10V6l8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Secure payments",
    subtitle: "At checkout",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="M3.5 9h17" />
        <path d="M7 14h3" />
      </svg>
    ),
  },
  {
    title: "Easy returns",
    subtitle: "Simple process",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5" aria-hidden="true">
        <path d="M19 12H5" />
        <path d="m10 7-5 5 5 5" />
      </svg>
    ),
  },
];

/* Carbon focus: 2px #0f62fe */
const focusRing =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f62fe]";

/* Carbon motion: fast-01 110ms, productive easing */
const fast = "duration-[110ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

export default function About() {
  return (
    <section id="our-story" className="bg-[#faf8f4] text-[#161616]">
      {/* STORY SECTION */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid min-h-[560px] grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
          {/* IMAGE */}
          <div className="relative col-span-4 min-h-[430px] md:col-span-4 lg:col-span-5 lg:min-h-[560px]">
            <Image src="/about/Silk_detail.jpg" alt="Close-up of a silk saree" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw" />
          </div>

          {/* CONTENT */}
          <div className="relative col-span-4 flex items-center px-0 py-16 md:col-span-4 md:px-10 lg:col-span-7 lg:px-16 xl:px-20">
            <div className="relative z-10 max-w-[570px]">
              {/* SECTION LABEL — label-01: 12/16, 0.32px */}
              <div className="mb-6 flex items-center gap-4">
                <span className="text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
                  About us
                </span>
              </div>

              {/* HEADING — heading-05 (32/40), heading-06 (42/50), heading-07 (54/64) */}
              <h2 className="font-serif text-[32px] font-normal leading-10 text-[#161616] sm:text-[42px] sm:leading-[50px] lg:text-[54px] lg:leading-16">
                Made in Surat
                <br />
                since 2019
              </h2>

              {/* DESCRIPTION — body-01 (14/20), body-02 (16/24) */}
              <p className="mt-6 max-w-[600px] text-sm leading-5 tracking-[0.16px] text-[#525252] md:text-base md:leading-6 md:tracking-normal">
                Gouri Pooja Creation started in 2019 on Ring Road, Surat. We manufacture sarees and sell them wholesale and retail, alongside ready-made garments, fabrics and ethnic wear.
              </p>
              <p className="mt-4 max-w-[600px] text-sm leading-5 tracking-[0.16px] text-[#525252] md:text-base md:leading-6 md:tracking-normal">
                Our customers are mostly in Surat, and we also serve buyers from other cities.
              </p>

              {/* CTA — body-compact-01: 14/18, 0.16px */}
              <Link href="#legacy" className={`group mt-4 lg:mt-8 inline-flex min-h-12 items-center gap-4 border-b border-[#E34234] text-sm font-medium leading-[18px] tracking-[0.16px] text-[#E34234] transition-all ${fast} hover:gap-6 ${focusRing}`}>
                <span>Read our story</span>
                <span aria-hidden="true" className={`text-base leading-none transition-transform ${fast} group-hover:translate-x-1`}>
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BENEFITS BAR */}
      <div className="border-t border-[#c6c6c6]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:px-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className={`flex min-h-[96px] items-center gap-4 px-4 py-6 md:px-8 lg:py-8 ${index !== benefits.length - 1 ? "border-b border-[#e0e0e0] sm:border-b-0 lg:border-r" : ""}`}>
              {/* ICON */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c6c6c6] text-[#E34234]">
                {benefit.icon}
              </div>

              {/* TEXT */}
              <div>
                {/* body-compact-01 semibold: 14/18 */}
                <h3 className="text-sm font-semibold leading-[18px] tracking-[0.16px] text-[#161616]">
                  {benefit.title}
                </h3>

                {/* helper-text-01: 12/16, 0.32px */}
                <p className="mt-1 text-xs leading-4 tracking-[0.32px] text-[#525252]">
                  {benefit.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}