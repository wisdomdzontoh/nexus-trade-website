import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Gift, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Investor Resources",
  description:
    "Guides, incentive summaries, and FAQs to help international investors understand how to invest in Ghana.",
};

const resources = [
  {
    icon: BookOpen,
    title: "How to Invest in Ghana",
    description:
      "A step-by-step guide for foreign investors: GIPC registration, land acquisition, banking setup, permits, and profit repatriation.",
    href: "/resources/how-to-invest",
    cta: "Read the Guide",
  },
  {
    icon: Gift,
    title: "Investment Incentives & Tax Benefits",
    description:
      "An overview of Ghana's incentives for foreign investors: free zone benefits, import duty exemptions, tax holidays, and sector-specific concessions.",
    href: "/resources/incentives",
    cta: "View Incentives",
  },
  {
    icon: HelpCircle,
    title: "Frequently Asked Questions",
    description:
      "Answers to the most common questions about investing in Ghana: legal requirements, land ownership, minimum investment thresholds, and how to get started.",
    href: "/resources/faqs",
    cta: "Browse FAQs",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="bg-[#0F3D24] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#E6A817]" />
              <span className="text-[#E6A817] text-xs font-semibold uppercase tracking-widest">
                Investor Resources
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Everything you need to invest in Ghana
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              Practical guides, incentive summaries, and expert answers — all the
              information you need before committing to an investment in Ghana.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="bg-white rounded-xl border border-[#E5E0D8] p-8 flex flex-col hover:shadow-lg hover:border-transparent transition-all">
                  <div className="w-12 h-12 rounded-lg bg-[#1A5C38]/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#1A5C38]" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0D1B2A] mb-3 font-[family-name:var(--font-playfair)]">
                    {r.title}
                  </h2>
                  <p className="text-[#2C2C2C]/60 text-sm leading-relaxed flex-1 mb-6">
                    {r.description}
                  </p>
                  <Link
                    href={r.href}
                    className="inline-flex items-center gap-2 text-[#1A5C38] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {r.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
