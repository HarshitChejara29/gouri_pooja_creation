const sections = [
  {
    number: "01",
    title: "Using Our Website",
    content: (
      <p>
        By using the Gouri Pooja Creations website, you agree to use it
        responsibly and in accordance with these Terms and Conditions. The
        website is provided to help customers and businesses learn about our
        products, services, and collections.
      </p>
    ),
  },

  {
    number: "02",
    title: "Products & Product Information",
    content: (
      <p>
        Gouri Pooja Creations offers sarees, ready-made garments, fabrics, and
        related products. We make reasonable efforts to keep product
        descriptions, images, availability, and other information accurate.
        However, colours, patterns, textures, and appearance may vary slightly
        depending on photography, display settings, or the nature of the
        fabric.
      </p>
    ),
  },

  {
    number: "03",
    title: "Prices & Orders",
    content: (
      <p>
        Product prices, availability, and order details may change from time
        to time. An enquiry or request for a product does not automatically
        constitute a confirmed order. Orders are considered confirmed only
        after the relevant details have been agreed with Gouri Pooja
        Creations.
      </p>
    ),
  },

  {
    number: "04",
    title: "Enquiries & Communication",
    content: (
      <p>
        When you submit an enquiry, you agree to provide accurate information
        so that we can respond appropriately. We may contact you using the
        details provided for purposes related to your enquiry, quotation,
        order, delivery, or customer support.
      </p>
    ),
  },

  {
    number: "05",
    title: "Intellectual Property",
    content: (
      <p>
        Unless otherwise stated, the content of this website, including
        photographs, product images, text, logos, graphics, and other
        materials, belongs to or is used by Gouri Pooja Creations. This
        content should not be copied, reproduced, modified, or commercially
        used without appropriate permission.
      </p>
    ),
  },

  {
    number: "06",
    title: "Website Availability",
    content: (
      <p>
        We aim to keep our website available and up to date, but we do not
        guarantee that it will always be uninterrupted, error-free, or
        available at all times. We may temporarily modify, suspend, or update
        parts of the website when required.
      </p>
    ),
  },

  {
    number: "07",
    title: "Changes to These Terms",
    content: (
      <p>
        Gouri Pooja Creations may update these Terms and Conditions from time
        to time to reflect changes in our website, products, services, or
        business practices. Updated terms will be published on this page with
        the revised effective date.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#faf8f4] text-[#161616]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="border-b border-[#d8d4ce] bg-[#ffffff]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="max-w-[850px]">

            <p className="mb-5 text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
              Legal
            </p>

            <h1 className="font-serif text-[42px] font-normal leading-[48px] sm:text-[52px] sm:leading-[58px] md:text-[64px] md:leading-[70px] lg:text-[72px] lg:leading-[78px]">
              Terms &amp; Conditions
            </h1>

            <p className="mt-6 max-w-[680px] text-base leading-6 text-[#525252] md:text-lg md:leading-7">
              These Terms and Conditions explain the basic terms that apply
              when you use the Gouri Pooja Creations website and interact with
              our products and services.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.32px] text-[#6f6f6f]">
              <span>Gouri Pooja Creations</span>
              <span>Effective: September 29, 2026</span>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          TERMS CONTENT
      ===================================================== */}
      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">

          <div className="grid grid-cols-1 gap-y-0 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-x-16">

            {/* =================================================
                STICKY SIDE LABEL
            ================================================= */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">

                <p className="text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
                  Terms
                </p>

                <p className="mt-3 max-w-[150px] text-sm leading-5 text-[#6f6f6f]">
                  Terms that apply when using Gouri Pooja Creations.
                </p>

              </div>
            </aside>

            {/* =================================================
                MAIN CONTENT
            ================================================= */}
            <div className="max-w-[1200px]">

              {/* INTRO */}
              <div className="border-b border-[#c6c6c6] pb-10">

                <p className="text-base leading-7 text-[#3d3d3d] md:text-lg md:leading-8">
                  Gouri Pooja Creations is a saree and garment business based
                  in Surat. By accessing or using this website, you agree to
                  follow these Terms and Conditions.
                </p>

              </div>

              {/* =================================================
                  TERMS SECTIONS
              ================================================= */}
              <div>
                {sections.map((section) => (
                  <article
                    key={section.number}
                    className="border-b border-[#c6c6c6] py-10 md:py-12"
                  >
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-[64px_minmax(0,1fr)] md:gap-8">

                      {/* NUMBER */}
                      <p className="text-xs font-medium tracking-[0.32px] text-[#E34234]">
                        {section.number}
                      </p>

                      {/* CONTENT */}
                      <div>

                        <h2 className="font-serif text-[28px] font-normal leading-9 text-[#161616] md:text-[34px] md:leading-[42px]">
                          {section.title}
                        </h2>

                        <div className="mt-5 text-sm leading-6 text-[#525252] md:text-base md:leading-7">
                          {section.content}
                        </div>

                      </div>

                    </div>
                  </article>
                ))}
              </div>

              {/* =================================================
                  CONTACT
              ================================================= */}
              <section className="border-b border-[#c6c6c6] py-10 md:py-12">

                <div className="grid grid-cols-1 gap-5 md:grid-cols-[64px_minmax(0,1fr)] md:gap-8">

                  <p className="text-xs font-medium tracking-[0.32px] text-[#E34234]">
                    08
                  </p>

                  <div>

                    <h2 className="font-serif text-[28px] font-normal leading-9 text-[#161616] md:text-[34px] md:leading-[42px]">
                      Contact Us
                    </h2>

                    <p className="mt-5 text-sm leading-6 text-[#525252] md:text-base md:leading-7">
                      If you have questions about these Terms and Conditions,
                      please contact Gouri Pooja Creations.
                    </p>

                    <div className="mt-7 border-l-2 border-[#E34234] pl-5">

                      <p className="text-sm font-semibold leading-5 text-[#161616]">
                        GOURI POOJA CREATIONS
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[#525252]">
                        Ring Road, Surat, Gujarat, India
                      </p>

                    </div>

                  </div>

                </div>

              </section>

              {/* =================================================
                  LAST NOTE
              ================================================= */}
              <div className="pt-8">

                <p className="text-xs leading-5 text-[#6f6f6f]">
                  These Terms and Conditions may be updated from time to time
                  as our website, products, services, or business practices
                  change.
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}