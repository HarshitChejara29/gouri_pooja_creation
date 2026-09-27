import Image from "next/image";

const milestones = [
  {
    year: "1998",
    title: "Where It Began",
    description:
      "Gouri Pooja Creations began with a simple belief — that every saree should carry the beauty of tradition and the warmth of its maker.",
  },
  {
    year: "2006",
    title: "Growing With Tradition",
    description:
      "Our collection expanded across timeless Indian weaves, bringing together trusted craftsmanship and changing tastes.",
  },
  {
    year: "2015",
    title: "A New Generation",
    description:
      "Traditional artistry met contemporary sensibilities, creating sarees that feel rooted in heritage yet relevant today.",
  },
  {
    year: "2022",
    title: "A Growing Community",
    description:
      "Women across generations became part of our story, choosing Gouri Pooja for celebrations, milestones and everyday elegance.",
  },
  {
    year: "Today",
    title: "Tradition Continues",
    description:
      "We continue to preserve the beauty of Indian textiles while creating new stories for the women who wear them.",
  },
];

const trustPoints = [
  {
    number: "25+",
    label: "Years of Heritage",
  },
  {
    number: "10K+",
    label: "Happy Customers",
  },
  {
    number: "50+",
    label: "Collections",
  },
  {
    number: "100%",
    label: "Authentic Craftsmanship",
  },
];

export default function Legacy() {
  return (
    <section id="legacy" className="overflow-hidden bg-[#ffffff] text-[#211c18]">

      {/* =================================================
          LEGACY INTRO
      ================================================= */}

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-4 items-center gap-y-12 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">

          {/* LEFT CONTENT */}

          <div className="col-span-4 md:col-span-4 lg:col-span-5">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#E34234]">
              Our Legacy
            </p>

            <h2 className="max-w-[500px] font-serif text-[42px] font-normal leading-[1.04] tracking-[-0.8px] md:text-[52px] lg:text-[60px]">
              Woven Through
              <br />
              Generations
            </h2>

            <p className="mt-7 max-w-[500px] text-[13px] leading-6 text-[#7e756d] md:text-[14px] md:leading-7">
              For years, Gouri Pooja Creations has been bringing together
              India&apos;s timeless textile traditions and the changing
              expressions of modern women.
            </p>

            <p className="mt-4 max-w-[500px] text-[13px] leading-6 text-[#7e756d] md:text-[14px] md:leading-7">
              What began with a love for beautiful fabrics has grown into a
              journey built on craftsmanship, trust and countless celebrations.
            </p>
          </div>

          {/* IMAGE */}

          <div className="relative col-span-4 aspect-[1.45] overflow-hidden md:col-span-4 lg:col-span-7">
            <Image
              src="/about/Shop.jpg"
              alt="Traditional Indian textile craftsmanship"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 58vw"
              className="object-cover"
            />

            <div aria-hidden="true" className="absolute inset-0 bg-black/5" />
          </div>
        </div>
      </div>

      {/* =================================================
          TRUST NUMBERS
      ================================================= */}

      <div className="border-y border-[#ded4c7] bg-[#faf8f4]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">

          {trustPoints.map((point, index) => (
            <div
              key={point.label}
              className={`flex min-h-[130px] flex-col justify-center px-5 py-8 text-left md:px-8 lg:min-h-[150px] lg:py-9 ${index !== trustPoints.length - 1 ? "border-r border-[#ded4c7]" : ""} ${index < 2 ? "border-b border-[#ded4c7] lg:border-b-0" : ""}`}
            >
              <p className="font-serif text-[34px] leading-none text-[#E34234] md:text-[40px]">
                {point.number}
              </p>

              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#80776f] md:text-[11px]">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* =================================================
          TIMELINE
      ================================================= */}

      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">

        {/* TIMELINE HEADER */}

        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[#E34234]">
              A Journey Through Time
            </p>

            <h2 className="font-serif text-[40px] font-normal leading-[1.05] tracking-[-0.8px] md:text-[50px]">
              Our Story, Year by Year
            </h2>
          </div>
        </div>

        {/* TIMELINE */}

        <div className="relative mt-14 md:mt-20">

          {/* CENTER / MOBILE LINE */}

          <div aria-hidden="true" className="absolute left-[7px] top-0 h-full w-px bg-[#d9cec0] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => {
              const isRight = index % 2 === 1;

              return (
                <div key={milestone.year} className="relative grid grid-cols-4 md:min-h-[200px] md:grid-cols-8 lg:grid-cols-12">

                  {/* DESKTOP LEFT */}

                  <div className={`hidden md:block md:col-span-4 lg:col-span-5 ${isRight ? "md:col-start-1 md:text-right" : "md:col-start-1"}`}>
                    {!isRight && (
                      <div className="flex justify-end pr-12 lg:pr-16">
                        <div className="max-w-[430px]">
                          <p className="font-serif text-[30px] leading-none text-[#E34234]">
                            {milestone.year}
                          </p>

                          <h3 className="mt-3 font-serif text-[24px] leading-tight text-[#211c18]">
                            {milestone.title}
                          </h3>

                          <p className="mt-3 text-[13px] leading-6 text-[#827970]">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* DESKTOP RIGHT */}

                  <div className={`hidden md:block md:col-span-4 lg:col-span-5 ${isRight ? "md:col-start-5 lg:col-start-8 md:pl-12 lg:pl-16" : "md:col-start-5 lg:col-start-8"}`}>
                    {isRight && (
                      <div className="max-w-[430px]">
                        <p className="font-serif text-[30px] leading-none text-[#E34234]">
                          {milestone.year}
                        </p>

                        <h3 className="mt-3 font-serif text-[24px] leading-tight text-[#211c18]">
                          {milestone.title}
                        </h3>

                        <p className="mt-3 text-[13px] leading-6 text-[#827970]">
                          {milestone.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* TIMELINE MARKER */}

                  <div aria-hidden="true" className="absolute left-[7px] top-0 z-10 h-4 w-4 -translate-x-1/2 border-2 border-[#f5f0e8] bg-[#E34234] md:left-1/2" />

                  {/* MOBILE */}

                  <div className="col-span-4 pl-7 md:hidden">
                    <p className="font-serif text-[30px] leading-none text-[#E34234]">
                      {milestone.year}
                    </p>

                    <h3 className="mt-3 font-serif text-[24px] leading-tight text-[#211c18]">
                      {milestone.title}
                    </h3>

                    <p className="mt-3 max-w-[500px] text-[13px] leading-6 text-[#827970]">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =================================================
          TRUSTED BY MANY
      ================================================= */}

      <div className="bg-[#191b14] px-4 py-16 text-white sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">

        <div className="mx-auto grid max-w-[1440px] grid-cols-4 md:grid-cols-8 lg:grid-cols-12">

          <div className="col-span-4 text-center md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3">

            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#c9b38e]">
              Trusted By Many
            </p>

            <h2 className="font-serif text-[40px] font-normal leading-[1.08] tracking-[-0.8px] md:text-[52px]">
              Worn With Love.
              <br />
              Trusted For Generations.
            </h2>

            <p className="mx-auto mt-6 max-w-[620px] text-[13px] leading-6 text-white/60 md:text-[14px] md:leading-7">
              From first celebrations to cherished family occasions, our
              sarees have become part of countless stories across generations.
            </p>

            {/* CUSTOMER TRUST */}

            <div className="mt-12 grid grid-cols-1 border-y border-white/10 sm:grid-cols-3">

              <div className="px-5 py-6 sm:border-r sm:border-white/10">
                <p className="font-serif text-[28px] leading-none text-[#d2b98f]">
                  10,000+
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/50">
                  Happy Customers
                </p>
              </div>

              <div className="border-t border-white/10 px-5 py-6 sm:border-r sm:border-t-0 sm:border-white/10">
                <p className="font-serif text-[28px] leading-none text-[#d2b98f]">
                  4.9/5
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/50">
                  Customer Rating
                </p>
              </div>

              <div className="border-t border-white/10 px-5 py-6 sm:border-t-0">
                <p className="font-serif text-[28px] leading-none text-[#d2b98f]">
                  Pan India
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/50">
                  Customer Community
                </p>
              </div>

            </div>

            {/* QUOTE */}

            <div className="mx-auto mt-12 max-w-[700px]">

              <p className="font-serif text-[22px] italic leading-relaxed text-white/85 md:text-[26px]">
                “Every saree carries a story.
                <br />
                We are grateful to be part of yours.”
              </p>

              <p className="mt-5 text-[9px] uppercase tracking-[0.25em] text-[#c9b38e]">
                Gouri Pooja Creations
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}