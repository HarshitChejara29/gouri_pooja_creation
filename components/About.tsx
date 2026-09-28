import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Premium Quality",
    subtitle: "Fabrics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 10.5c0-1.8 1.5-3.2 3.5-3.2s3.5 1.4 3.5 3.2c0 2.8-3.5 4.2-3.5 6.2 0-2-3.5-3.4-3.5-6.2Z" />
      </svg>
    ),
  },
  {
    title: "Authentic",
    subtitle: "Indian Designs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
        <path d="M12 3 20 6v5c0 5.2-3.4 8.3-8 10-4.6-1.7-8-4.8-8-10V6l8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Secure",
    subtitle: "Payments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="M3.5 9h17" />
        <path d="M7 14h3" />
      </svg>
    ),
  },
  {
    title: "Easy Returns",
    subtitle: "Hassle Free",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
        <path d="M19 12H5" />
        <path d="m10 7-5 5 5 5" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="our-story" className="bg-[#faf8f4] text-[#201c18]">
      {/* STORY SECTION */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid min-h-[560px] grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
          {/* IMAGE */}
          <div className="relative col-span-4 min-h-[430px] md:col-span-4 lg:col-span-5 lg:min-h-[560px]">
            <Image src="/about/Silk_detail.jpg" alt="Gouri Pooja Creations sarees" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw" />
          </div>

          {/* CONTENT */}
          <div className="relative col-span-4 flex items-center px-6 py-16 md:col-span-4 md:px-10 lg:col-span-7 lg:px-16 xl:px-20">
            <div className="relative z-10 max-w-[570px]">
              {/* SECTION LABEL */}
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-[#E34234]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#E34234]">
                  About Us
                </span>
              </div>

              {/* HEADING */}
              <h2 className="font-serif text-[40px] font-normal leading-[1.04] tracking-[-0.8px] text-[#201c18] sm:text-[46px] lg:text-[54px]">
                A Story
                <br />
                Woven With Love
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-7 max-w-[500px] text-[13px] leading-6 text-[#817b74] md:text-[14px] md:leading-7">
                Established in 2019, Gouri Pooja Creation is a Surat-based business serving customers through saree manufacturing, wholesale and retail. Located in Ring Road, Surat, the business offers a wide range of sarees, ready-made garments, fabrics and ethnic wear to meet varied customer requirements.
              </p>
              <p className="mt-7 max-w-[500px] text-[13px] leading-6 text-[#817b74] md:text-[14px] md:leading-7">
                With a focus on customer satisfaction and dedicated service, Gouri Pooja Creation continues to serve customers from Surat and beyond.              
              </p>

              {/* CTA */}
              <Link href="#our-story" className="group mt-8 inline-flex min-h-12 items-center gap-4 border-b border-[#E34234] text-[12px] font-medium text-[#E34234] outline-none transition-all duration-150 hover:gap-6">
                <span>Know Our Story</span>
                <span aria-hidden="true" className="text-[16px] leading-none transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* DECORATIVE FLOWER */}
            <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block xl:right-12">
              <svg width="120" height="130" viewBox="0 0 120 130" fill="none" className="text-[#d8c9b7]" aria-hidden="true">
                <path d="M60 61C44 61 33 50 33 35C33 21 43 11 56 11C68 11 75 21 75 35C75 21 82 11 94 11C107 11 117 21 117 35C117 50 106 61 90 61C106 61 117 72 117 87C117 101 107 111 94 111C82 111 75 101 75 87C75 101 68 111 56 111C43 111 33 101 33 87C33 72 44 61 60 61Z" stroke="currentColor" strokeWidth="1" transform="translate(-15 0)" />
                <circle cx="60" cy="61" r="15" stroke="currentColor" strokeWidth="1" />
                <path d="M60 76V118" stroke="currentColor" strokeWidth="1" />
                <path d="M60 100C49 94 43 94 36 97" stroke="currentColor" strokeWidth="1" />
                <path d="M60 108C70 101 77 101 84 104" stroke="currentColor" strokeWidth="1" />
              </svg>

              <p className="mt-4 text-center font-serif text-[18px] italic leading-tight text-[#E34234]">
                “More Than Outfits,
                <br />
                It&apos;s a Feeling”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BENEFITS BAR */}
      <div className="border-t border-[#e5ddd3]">
        <div className="mx-auto grid max-w-[1440px] px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className={`flex min-h-[96px] items-center gap-4 px-6 py-6 md:px-8 lg:py-7 ${index !== benefits.length - 1 ? "border-b border-[#e2d9ce] sm:border-b-0 lg:border-r" : ""}`}>
              {/* ICON */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#e2d7ca] text-[#E34234]">
                {benefit.icon}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-[12px] font-semibold leading-5 text-[#2b2723]">
                  {benefit.title}
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-[#928b83]">
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