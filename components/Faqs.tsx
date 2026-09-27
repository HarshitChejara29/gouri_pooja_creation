"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What types of sarees do you offer?",
    answer:
      "We offer a curated range of sarees including Banarasi, silk, organza, zari and other traditional and contemporary styles. Our collections are selected for different occasions, from festive celebrations to weddings and everyday elegance.",
  },
  {
    question: "How can I choose the right saree for my occasion?",
    answer:
      "You can explore our collections based on fabric, style and occasion. If you need help choosing a saree, our team can assist you with fabric, colour, styling and occasion-specific recommendations.",
  },
  {
    question: "Are the sarees authentic and of good quality?",
    answer:
      "We focus on fabric quality, finishing and craftsmanship when selecting our collections. Product details are provided with each saree so you can understand the fabric, design and overall finish before purchasing.",
  },
  {
    question: "Do you offer delivery across India?",
    answer:
      "Yes, we offer delivery across India. Delivery timelines can vary depending on the destination and availability of the selected product.",
  },
  {
    question: "Can I get help with sizing or styling?",
    answer:
      "Yes. Our customer care team can help you with sizing-related questions, styling suggestions and selecting an appropriate saree or ethnic-wear option for your occasion.",
  },
  {
    question: "What is your return or exchange policy?",
    answer:
      "Return and exchange eligibility depends on the product and its condition. Please contact our support team before sending an item back so we can guide you through the applicable process.",
  },
  {
    question: "Do you accept wholesale or bulk orders?",
    answer:
      "Yes, we welcome wholesale and bulk enquiries. Please contact us with your requirements, quantity and preferred collection so our team can assist you further.",
  },
  {
    question: "How can I contact Gouri Pooja Creations?",
    answer:
      "You can reach us through the contact section of our website by phone or email. Our team will be happy to assist you with product, order and wholesale enquiries.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="bg-[#faf8f4] text-[#1d1915]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-4 gap-y-12 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">
          {/* LEFT — INTRO */}
          <div className="col-span-4 md:col-span-3 lg:col-span-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#E34234]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 max-w-[390px] font-serif text-[40px] font-normal leading-[1.05] tracking-[-0.8px] md:text-[46px] lg:text-[50px]">
              Everything You
              <br />
              Need to Know
            </h2>

            <p className="mt-6 max-w-[350px] text-[13px] leading-6 text-[#77716a] md:text-[14px] md:leading-7">
              Find answers to common questions about our collections,
              delivery, quality, customer care and wholesale enquiries.
            </p>

            <div className="mt-10 hidden border-t border-[#ddd4c8] pt-5 md:block">
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#8c857d]">
                Need More Help?
              </p>

              <a href="#contact" className="mt-3 inline-flex min-h-12 items-center border-b border-[#E34234] text-[11px] font-medium uppercase tracking-[0.1em] text-[#E34234] outline-none transition-colors duration-150 hover:text-[#720613]">
                Contact Our Team
                <span className="ml-4 text-[15px]">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT — FAQ ACCORDION */}
          <div className="col-span-4 md:col-span-5 lg:col-span-8">
            <div className="border-t border-[#d8d0c5]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={faq.question} className="border-b border-[#d8d0c5]">
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className="flex min-h-16 w-full items-center justify-between gap-6 px-0 text-left outline-none transition-colors duration-150 hover:text-[#E34234] md:min-h-[72px]"
                    >
                      <span className="flex items-start gap-5">
                        <span className="hidden pt-0.5 text-[10px] font-medium tracking-[0.1em] text-[#a29a91] sm:block">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-[13px] font-medium leading-5 md:text-[14px]">
                          {faq.question}
                        </span>
                      </span>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#ddd4c8] text-[#5f5851] transition-all duration-200">
                        <span className="relative block h-3 w-3">
                          <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                          <span className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform duration-200 ${isOpen ? "scale-y-0" : "scale-y-100"}`} />
                        </span>
                      </span>
                    </button>

                    <div
                      id={`faq-answer-${index}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-7 pl-0 pr-14 sm:pl-9 md:pb-8">
                          <p className="max-w-[650px] text-[12px] leading-6 text-[#77716a] md:text-[13px] md:leading-7">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-[#ddd4c8] pt-6 md:hidden">
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#8c857d]">
                Need More Help?
              </p>

              <a href="#contact" className="mt-3 inline-flex min-h-12 items-center border-b border-[#E34234] text-[11px] font-medium uppercase tracking-[0.1em] text-[#E34234] outline-none transition-colors duration-150 hover:text-[#720613]">
                Contact Our Team
                <span className="ml-4 text-[15px]">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}