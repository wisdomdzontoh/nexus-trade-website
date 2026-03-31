import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqs, faqCategories } from "@/lib/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Investing in Ghana",
  description:
    "Answers to the most common questions about investing in Ghana — covering NexusTrade's services, the investment process, legal requirements, land, and tax.",
};

export default function FAQsPage() {
  return (
    <>
      <div className="bg-[#0F3D24] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4 text-xs text-white/50">
            <Link href="/resources" className="hover:text-white/80">Resources</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#E6A817]">FAQs</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Frequently Asked Questions
            </h1>
            <p className="text-white/65 text-base leading-relaxed">
              Answers to the most common questions from international investors
              considering Ghana as their investment destination.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category) => {
            const categoryFaqs = faqs.filter((f) => f.category === category);
            if (categoryFaqs.length === 0) return null;
            return (
              <div key={category} className="mb-12">
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="w-8 h-px bg-[#C8900A]" />
                  <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                    {category}
                  </span>
                </div>
                <Accordion type="single" collapsible className="space-y-2">
                  {categoryFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category}-${index}`}
                      className="border border-[#E5E0D8] rounded-lg px-5 data-[state=open]:border-[#1A5C38]/30 data-[state=open]:bg-[#F8F5F0] transition-all"
                    >
                      <AccordionTrigger className="text-[#0D1B2A] font-semibold text-sm py-5 text-left hover:no-underline hover:text-[#1A5C38] [&[data-state=open]]:text-[#1A5C38]">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#2C2C2C]/65 text-sm leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}

          <div className="mt-12 bg-[#F8F5F0] rounded-xl p-8 border border-[#E5E0D8] text-center">
            <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 font-[family-name:var(--font-playfair)]">
              Have a question we didn't answer?
            </h3>
            <p className="text-[#2C2C2C]/60 text-sm mb-6 max-w-md mx-auto">
              Contact our team directly — we're happy to answer any question
              about investing in Ghana and NexusTrade's services.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1A5C38] hover:bg-[#0F3D24] text-white font-semibold px-6 py-3 rounded text-sm transition-colors"
            >
              Ask a Question <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
