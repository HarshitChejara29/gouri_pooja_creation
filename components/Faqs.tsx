"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What types of sarees do you sell?",
    answer:
      "Banarasi, silk, organza, zari, net and cotton sarees, in both traditional and modern styles. We stock pieces for weddings, festivals and daily wear.",
  },
  {
    question: "How do I choose a saree for an occasion?",
    answer:
      "Browse by fabric, style or occasion. If you're unsure, contact us and we can suggest fabric and colour for what you're planning.",
  },
  {
    question: "What is the quality like?",
    answer:
      "Each saree listing states its fabric, design and finish, so you know what you're buying before you order.",
  },
  {
    question: "Do you deliver across India?",
    answer:
      "Yes. Delivery time depends on where you are and whether the piece is in stock.",
  },
  {
    question: "Can I return or exchange an order?",
    answer:
      "It depends on the product and its condition. Please contact us before sending anything back, and we'll explain the steps.",
  },
  {
    question: "Do you take wholesale or bulk orders?",
    answer:
      "Yes. Send us the quantity and the collection you want, and we'll reply with details.",
  },
  {
    question: "How can I contact Gouri Pooja Creation?",
    answer:
      "Use the phone number or email in the contact section of this website. We answer questions about products, orders and wholesale.",
  },
  {
    question: "Where are you located?",
    answer: "We are on Ring Road, Surat.",
  },
];

/* Carbon focus: 2px #0f62fe */
const focusRing =
  "outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f62fe]";

/* Carbon motion: fast-01 110ms, moderate-01 240ms, productive easing */
const fast = "duration-[110ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";
const moderate = "duration-[240ms] ease-[cubic-bezier(0.2,0,0.38,0.9)] motion-reduce:transition-none";

function ContactLink() {
  return (
    <a
      href="#contact"
      className={`inline-flex min-h-12 items-center border-b border-[#E34234] text-sm font-medium leading-[18px] tracking-[0.16px] text-[#E34234] transition-colors ${fast} hover:text-[#a2191f] ${focusRing}`}
    >
      Contact us
      <span aria-hidden="true" className="ml-4 text-base">→</span>
    </a>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="bg-[#faf8f4] text-[#161616]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-4 gap-y-12 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-8">
          {/* LEFT — INTRO */}
          <div className="col-span-4 md:col-span-3 lg:col-span-4">
            {/* label-01: 12/16, 0.32px */}
            <p className="text-xs uppercase leading-4 tracking-[0.32px] text-[#E34234]">
              FAQ
            </p>

            {/* heading-05 (32/40) -> heading-06 (42/50) -> heading-07 (54/64) */}
            <h2 className="mt-4 max-w-[390px] font-serif text-[32px] font-normal leading-10 md:text-[42px] md:leading-[50px] lg:text-[54px] lg:leading-[64px]">
              Questions we get asked
            </h2>

            {/* body-01: 14/20, 0.16px */}
            <p className="mt-6 max-w-[350px] text-sm leading-5 tracking-[0.16px] text-[#525252]">
              Answers about our sarees, delivery, returns and wholesale orders.
            </p>

            <div className="mt-10 hidden border-t border-[#c6c6c6] pt-6 md:block">
              <p className="text-xs leading-4 tracking-[0.32px] text-[#525252]">
                Still have a question?
              </p>

              <div className="mt-2">
                <ContactLink />
              </div>
            </div>
          </div>

          {/* RIGHT — FAQ ACCORDION */}
          <div className="col-span-4 md:col-span-5 lg:col-span-8">
            <div className="border-t border-[#c6c6c6]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={faq.question} className="border-b border-[#c6c6c6]">
                    <button
                      type="button"
                      id={`faq-question-${index}`}
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className={`flex min-h-16 w-full items-center justify-between gap-6 px-0 text-left transition-colors ${fast} hover:text-[#E34234] md:min-h-[72px] ${focusRing}`}
                    >
                      <span className="flex items-start gap-5">
                        <span aria-hidden="true" className="hidden pt-1 text-xs leading-4 tracking-[0.32px] text-[#525252] sm:block">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* body-01 (14/20) -> body-02 (16/24) */}
                        <span className="text-sm font-medium leading-5 tracking-[0.16px] md:text-base md:leading-6 md:tracking-normal">
                          {faq.question}
                        </span>
                      </span>

                      <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#8d8d8d] text-[#161616]">
                        <span className="relative block h-3 w-3">
                          <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-current" />
                          <span className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current transition-transform ${moderate} ${isOpen ? "scale-y-0" : "scale-y-100"}`} />
                        </span>
                      </span>
                    </button>

                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className={`grid transition-[grid-template-rows,opacity] ${moderate} ${isOpen ? "grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-8 pl-0 pr-14 sm:pl-9">
                          <p className="max-w-[650px] text-sm leading-5 tracking-[0.16px] text-[#525252] md:text-base md:leading-6 md:tracking-normal">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 border-t border-[#c6c6c6] pt-6 md:hidden">
              <p className="text-xs leading-4 tracking-[0.32px] text-[#525252]">
                Still have a question?
              </p>

              <div className="mt-2">
                <ContactLink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}