const values = [
  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M32 51C24 44 16 37 16 27C16 20 21 15 27 15C30 15 32 17 32 20C32 17 34 15 37 15C43 15 48 20 48 27C48 37 40 44 32 51Z" />
        <path d="M32 51V26" />
        <path d="M32 35C27 30 23 28 19 28" />
        <path d="M32 38C37 33 41 31 45 31" />
      </svg>
    ),
    title: "Authenticity",
    description: (
      <>
        Pure fabrics. Traditional
        <br />
        weaves. Timeless appeal.
      </>
    ),
  },

  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 12V52" />
        <path d="M32 12V52" />
        <path d="M44 12V52" />
        <path d="M12 20H52" />
        <path d="M12 32H52" />
        <path d="M12 44H52" />
      </svg>
    ),
    title: "Craftsmanship",
    description: (
      <>
        Carefully crafted by
        <br />
        skilled artisans.
      </>
    ),
  },

  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M32 50C29 47 14 37 14 25C14 18 19 14 25 14C29 14 32 17 32 21C32 17 35 14 39 14C45 14 50 18 50 25C50 37 35 47 32 50Z" />
      </svg>
    ),
    title: "Grace",
    description: (
      <>
        Designed for every
        <br />
        occasion and mood.
      </>
    ),
  },

  {
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M32 10L36 27L53 32L36 37L32 54L28 37L11 32L28 27L32 10Z" />
      </svg>
    ),
    title: "Trust",
    description: (
      <>
        Because your trust
        <br />
        means everything.
      </>
    ),
  },
];

export default function Values() {
  return (
    <section className="bg-[#faf8f4] px-6 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">

      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="text-center">

          <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.18em] text-[#E34234] md:text-[10px]">
            Our Values
          </p>

          <h2 className="font-serif text-[38px] font-normal leading-tight tracking-[-1px] text-[#171411] md:text-[48px] lg:text-[54px]">
            What We Stand For
          </h2>

        </div>


        {/* Values */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">

          {values.map((value, index) => (
            <div
              key={value.title}
              className={`flex flex-col items-center px-6 py-8 text-center lg:py-0 ${
                index !== values.length - 1
                  ? "lg:border-r lg:border-[#d9d0c3]"
                  : ""
              }`}
            >

              {/* Icon */}
              <div className="mb-6 flex h-[58px] w-[58px] items-center justify-center text-[#E34234]">
                <div className="h-14 w-14">
                  {value.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-[24px] font-normal text-[#25211c] md:text-[25px]">
                {value.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[13px] leading-6 text-[#8b857d]">
                {value.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}