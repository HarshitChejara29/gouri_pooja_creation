const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          When you contact Gouri Pooja Creations, enquire about our products,
          or place an order, we may collect information that you provide to us.
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Name</li>
          <li>Mobile number or email address</li>
          <li>Delivery or correspondence details</li>
          <li>Product and order information</li>
          <li>Information shared through an enquiry or message</li>
        </ul>
      </>
    ),
  },

  {
    number: "02",
    title: "How We Use Your Information",
    content: (
      <>
        <p>
          We use the information you provide to communicate with you and
          provide our products and services.
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Respond to product enquiries</li>
          <li>Provide quotations and product information</li>
          <li>Process and manage orders</li>
          <li>Arrange delivery and order-related communication</li>
          <li>Provide customer support</li>
        </ul>
      </>
    ),
  },

  {
    number: "03",
    title: "Product Enquiries & Orders",
    content: (
      <p>
        Gouri Pooja Creations manufactures, wholesales, and retails sarees,
        ready-made garments, and fabrics. Information shared with us during an
        enquiry or order is used only as reasonably necessary to respond to
        your request and complete the relevant service.
      </p>
    ),
  },

  {
    number: "04",
    title: "Sharing of Information",
    content: (
      <p>
        We do not sell or rent your personal information. Where necessary,
        information may be shared with service providers who help us with
        activities such as delivery, website hosting, communication, payment
        processing, or customer support.
      </p>
    ),
  },

  {
    number: "05",
    title: "Data Security",
    content: (
      <p>
        We take reasonable steps to protect the information provided to us
        from unauthorized access, misuse, loss, or disclosure. However, no
        method of transmitting or storing information electronically can be
        guaranteed to be completely secure.
      </p>
    ),
  },

  {
    number: "06",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy when our website, services, or
        information practices change. Any updated version will be published on
        this page with the revised effective date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-[680px] text-base leading-6 text-[#525252] md:text-lg md:leading-7">
              This Privacy Policy explains how Gouri Pooja Creations handles
              information shared with us when you use our website, enquire
              about our products, or interact with our services.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.32px] text-[#6f6f6f]">
              <span>Gouri Pooja Creations</span>
              <span>Effective: September 29, 2026</span>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          POLICY CONTENT
      ===================================================== */}
      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">

          <div className="grid grid-cols-1 gap-y-0 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-x-16">

            {/* =================================================
                STICKY SIDE LABEL
                Keeps scrolling functionality
            ================================================= */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">

                <p className="text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
                  Privacy
                </p>

                <p className="mt-3 max-w-[150px] text-sm leading-5 text-[#6f6f6f]">
                  How we handle information shared with Gouri Pooja Creations.
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
                  Gouri Pooja Creations is committed to handling customer
                  information responsibly. We collect and use information only
                  for purposes connected with our products, enquiries, orders,
                  communication, and website services.
                </p>

              </div>

              {/* =================================================
                  POLICY SECTIONS
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
                    07
                  </p>

                  <div>

                    <h2 className="font-serif text-[28px] font-normal leading-9 text-[#161616] md:text-[34px] md:leading-[42px]">
                      Contact Us
                    </h2>

                    <p className="mt-5 text-sm leading-6 text-[#525252] md:text-base md:leading-7">
                      If you have a question about this Privacy Policy or how
                      your information is handled, you can contact Gouri Pooja
                      Creations.
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
                  This policy may be updated from time to time to reflect
                  changes in our website, services, or applicable requirements.
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}