import Image from "next/image";
import Link from "next/link";

const previewCollections = [
  {
    title: "Net Saree",
    subtitle: "Light and sheer",
    image: "/category/Net-Saree.jpg",
  },
  {
    title: "Silk Saree",
    subtitle: "For weddings and festivals",
    image: "/category/Silk_Saree.jpg",
  },
  {
    title: "Fancy Saree",
    subtitle: "Embellished evening styles",
    image: "/category/Fancy_Saree.jpg",
  },
  {
    title: "Ready-to-wear Saree",
    subtitle: "Pre-pleated and easy to wear",
    image: "/category/Ready_to_wear_Saree.jpg",
  },
];

const shopCategories = [
  "Sarees",
  "Ready-to-wear",
  "Suits",
  "Kurtis",
  "Fabrics",
];

const focusRing =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f62fe]";

const fast =
  "duration-[110ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

const moderate =
  "duration-[240ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

export default function ShopPage() {
  return (
    <main className="bg-[#faf8f4] text-[#161616]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="">
        <div className="">
          <div className="grid grid-cols-1 overflow-hidden border border-[#c6c6c6] md:grid-cols-8 lg:grid-cols-12">

            {/* IMAGE */}
            <div className="relative min-h-[300px] md:col-span-4 md:min-h-[390px] lg:col-span-7 lg:min-h-[520px]">
              <Image
                src="/collection/hero2.png"
                alt="Saree collection"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 58vw"
                className="object-cover object-center"
              />
            </div>

            {/* CONTENT */}
            <div className="flex items-center bg-[#f4f0e9] px-4 py-10 sm:px-10 sm:py-12 md:col-span-4 md:px-8 md:py-12 lg:col-span-5 lg:px-12 xl:px-14">
              <div className="max-w-[480px]">

                <p className="mb-4 text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
                  Coming soon
                </p>

                <h1 className="font-serif text-[42px] font-normal leading-[1.05] text-[#161616] sm:text-[52px] lg:text-[60px]">
                  Our shop is
                  <br />
                  coming soon.
                </h1>

                <p className="mt-5 max-w-[430px] text-sm leading-6 tracking-[0.16px] text-[#525252] md:text-base md:leading-7">
                  We are getting our online collection ready. Sarees,
                  ready-to-wear styles, suits and more will soon be available
                  to browse online.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/#collections"
                    className={`inline-flex min-h-12 items-center gap-4 bg-[#161616] px-5 text-sm font-medium leading-[18px] tracking-[0.16px] text-white transition-colors ${fast} hover:bg-[#393939] ${focusRing}`}
                  >
                    <span>View collection</span>
                    <span aria-hidden="true">→</span>
                  </Link>

                  <Link
                    href="/#contact"
                    className={`inline-flex min-h-12 items-center gap-4 border border-[#8d8d8d] px-5 text-sm font-medium leading-[18px] tracking-[0.16px] text-[#161616] transition-colors ${fast} hover:border-[#E34234] hover:bg-[#E34234] hover:text-[#ffffff] ${focusRing}`}
                  >
                    <span>Contact us</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          PREVIEW COLLECTION
      ========================================================= */}
      <section className="bg-white py-14 sm:px-6 sm:py-18 md:px-8 md:py-22 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[50px]">

          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">
            <div className="col-span-4 mb-10 md:col-span-6 md:col-start-2 lg:col-span-8 lg:col-start-3 lg:mb-14">

              <p className="mb-4 text-center text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
                Our collection
              </p>

              <h2 className="text-center font-serif text-[34px] font-normal leading-10 text-[#161616] sm:text-[42px] sm:leading-[50px] lg:text-[50px] lg:leading-[60px]">
                A few of our favourites
              </h2>

              <p className="mx-auto mt-4 max-w-[540px] text-center text-sm leading-6 tracking-[0.16px] text-[#525252] md:text-base">
                A preview of the sarees and styles that will be available
                through our online shop.
              </p>

            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-4 md:gap-x-6 lg:gap-x-8">
            {previewCollections.map((collection) => (
              <Link
                key={collection.title}
                href="/#collections"
                className={`group block ${focusRing}`}
              >
                <div className="relative aspect-[0.72] overflow-hidden bg-[#e7e2dc]">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 22vw"
                    className={`object-cover transition-transform ${moderate} group-hover:scale-[1.025] motion-reduce:group-hover:scale-100`}
                  />
                </div>

                <div className="border-b border-[#c6c6c6] py-4">
                  <div className="flex items-start justify-between gap-3">

                    <div>
                      <h3 className="font-serif text-lg font-normal leading-6 text-[#161616] sm:text-xl sm:leading-7">
                        {collection.title}
                      </h3>

                      <p className="mt-1 text-xs leading-4 tracking-[0.32px] text-[#525252]">
                        {collection.subtitle}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`mt-1 shrink-0 text-base text-[#E34234] opacity-0 transition-all ${fast} group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100`}
                    >
                      →
                    </span>

                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          FROM SURAT
      ========================================================= */}
      <section className="border-y border-[#d8d4ce] bg-[#faf8f4] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-18">
        <div className="mx-auto max-w-[1100px] text-center">

          <p className="mb-4 text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
            From Surat
          </p>

          <h2 className="mx-auto max-w-[850px] font-serif text-[34px] font-normal leading-[1.1] text-[#161616] sm:text-[44px] lg:text-[54px] lg:leading-[1.12]">
            Sarees made and supplied from Surat.
          </h2>

          <p className="mx-auto mt-6 max-w-[650px] text-sm leading-6 tracking-[0.16px] text-[#525252] md:text-base md:leading-7">
            We manufacture sarees and serve both wholesale and retail
            customers, along with ready-made garments and fabrics.
          </p>

        </div>
      </section>

      {/* =========================================================
          CATEGORIES
      ========================================================= */}
      <section className="bg-[#ffffff] px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1340px]">
          <div className="grid grid-cols-4 gap-y-12 md:grid-cols-8 md:gap-y-16 lg:grid-cols-12 lg:items-start lg:gap-x-8">
            <div className="col-span-4 md:col-span-6 lg:col-span-4">
              <p className="mb-4 text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
                What&apos;s coming
              </p>

              <h2 className="max-w-[430px] font-serif text-[36px] font-normal leading-10 text-[#161616] sm:text-[42px] sm:leading-[50px] lg:text-[54px] lg:leading-[64px]">
                Your wardrobe, online.
              </h2>

              <p className="mt-6 max-w-[430px] text-sm leading-6 tracking-[0.16px] text-[#525252] md:text-base">
                We&apos;re building a simple place to browse our collections
                and discover pieces for everyday wear, celebrations and
                special occasions.
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-6">
              <div className="border-t border-[#c6c6c6]">
                {shopCategories.map((category, index) => (
                  <div
                    key={category}
                    className="flex min-h-[72px] items-center justify-between border-b border-[#c6c6c6]"
                  >
                    <div className="flex items-center gap-5">
                      <span className="w-8 text-xs tracking-[0.32px] text-[#8d8d8d]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="font-serif text-xl font-normal leading-7 text-[#161616] sm:text-2xl">
                        {category}
                      </h3>
                    </div>

                    <span
                      aria-hidden="true"
                      className="text-lg text-[#E34234]"
                    >
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT / UNTIL LAUNCH
      ========================================================= */}
      <section className="border-b border-[#8d8d8d] bg-[#161616] px-4 py-14 sm:px-6 sm:py-18 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto flex max-w-[1340px] flex-col text-white gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="mb-3 text-xs uppercase leading-4 tracking-[0.32px] text-[#c6c6c6]">
              Until then
            </p>

            <h2 className="font-serif text-[30px] font-normal leading-9 sm:text-[36px] sm:leading-10">
              Looking for something now?
            </h2>

            <p className="mt-3 max-w-[560px] text-sm leading-6 tracking-[0.16px] text-[#c6c6c6]">
              Explore our collections or contact us about a saree,
              ready-to-wear piece or wholesale requirement.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">

            <Link
              href="/#collections"
              className={`inline-flex min-h-12 items-center gap-4 bg-[#E34234] px-5 text-sm font-medium leading-[18px] tracking-[0.16px] text-white transition-colors ${fast} hover:bg-[#393939] hover:bg-[#c7352a] ${focusRing}`}
            >
              <span>View collection</span>
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/#contact"
              className={`inline-flex min-h-12 items-center gap-4 border border-[#8d8d8d] px-5 text-sm font-medium leading-[18px] tracking-[0.16px] text-[#ffffff] transition-colors ${fast} hover:bg-[#E34234] hover:border-[#E34234] hover:text-[#ffffff] ${focusRing}`}
            >
              <span>Contact us</span>
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}