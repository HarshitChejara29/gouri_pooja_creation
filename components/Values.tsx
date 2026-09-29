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
    title: "Indian designs",
    description:
      "Sarees, suits and kurtis in traditional Indian styles.",
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
    title: "Our own making",
    description:
      "We manufacture sarees ourselves, in Surat.",
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
    title: "One full range",
    description:
      "Sarees, suits, kurtis and fabrics, from daily wear to weddings.",
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
    title: "Simple returns",
    description:
      "If an order isn't right, you can send it back.",
  },
];

export default function Values() {
  return (
    <section className="bg-[#faf8f4] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="text-center">
          <p className="mb-2 text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
            Our values
          </p>

          <h2 className="font-serif text-[32px] font-normal leading-10 text-[#161616] sm:text-[36px] md:text-[42px] md:leading-[50px] lg:text-[54px] lg:leading-[64px]">
            How we work
          </h2>
        </div>

        {/* Values */}
        <div className="mt-2 lg:mt-12 grid grid-cols-1 sm:mt-14 md:grid-cols-2 md:gap-y-12 lg:mt-20 lg:grid-cols-4 lg:gap-y-0">

          {values.map((value, index) => (
            <div
              key={value.title}
              className={`
                flex flex-col items-center px-4 py-8 text-center
                sm:px-8
                md:px-8 md:py-6
                lg:px-6 lg:py-0
                ${
                  index !== values.length - 1
                    ? "border-b border-[#d8d4ce] lg:border-b-0 lg:border-r lg:border-[#c6c6c6]"
                    : ""
                }
                ${
                  index === values.length - 1
                    ? "pb-2 md:pb-0"
                    : ""
                }
              `}
            >
              {/* Icon */}
              <div
                aria-hidden="true"
                className="mb-5 h-12 w-12 text-[#E34234] sm:mb-6 sm:h-14 sm:w-14 [&>svg]:h-full [&>svg]:w-full"
              >
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-normal leading-7 text-[#161616]">
                {value.title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-[280px] text-sm leading-5 tracking-[0.16px] text-[#525252]">
                {value.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}