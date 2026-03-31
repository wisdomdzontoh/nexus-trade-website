import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Invest in Ghana — Step-by-Step Guide",
  description:
    "A comprehensive guide for foreign investors covering GIPC registration, land acquisition, banking setup, permits, licences, and profit repatriation in Ghana.",
};

const steps = [
  {
    id: "step-1",
    number: "01",
    title: "Define Your Investment Structure",
    content: [
      "Decide whether to establish a Joint Venture (JV) with a Ghanaian partner or a wholly foreign-owned enterprise.",
      "A JV with a Ghanaian partner requires a minimum foreign investment of $200,000 USD (GIPC Act).",
      "A wholly foreign-owned company requires a minimum investment of $500,000 USD.",
      "Engage a qualified Ghanaian corporate lawyer to advise on the optimal structure for your sector and goals.",
      "Determine whether Free Zone status is appropriate for your operation (for export-oriented businesses).",
    ],
    tip: "NexusTrade can introduce you to qualified corporate lawyers who specialise in foreign investment structuring.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Register Your Company",
    content: [
      "Register a company with the Office of the Registrar of Companies (ORC) — Ghana's company registry.",
      "Registration typically takes 3–5 working days for straightforward structures.",
      "A registered company is a prerequisite for GIPC registration and most other permits.",
      "A minimum of two directors is required; at least one must be Ghanaian for JV structures.",
      "Obtain a Tax Identification Number (TIN) from the Ghana Revenue Authority (GRA) after company registration.",
    ],
    tip: "Company registration can now be done online through the ORC portal, significantly reducing processing time.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Register with GIPC",
    content: [
      "All foreign investors must register with the Ghana Investment Promotion Centre (GIPC) under the GIPC Act, 2013.",
      "GIPC registration provides legal protections: guarantees against expropriation, free repatriation of profits, and access to investment dispute mechanisms.",
      "GIPC operates a One-Stop-Shop that coordinates registration across multiple government agencies.",
      "Required documents typically include: company certificates, shareholder details, business plan, and proof of investment.",
      "GIPC registration certificates are usually issued within 5–10 working days after submission of complete documentation.",
    ],
    tip: "GIPC's One-Stop-Shop service coordinates with the ORC, GRA, EPA, and Immigration Service — simplifying the registration process considerably.",
  },
  {
    id: "step-4",
    number: "04",
    title: "Obtain Sector-Specific Permits & Licences",
    content: [
      "Agriculture: Environmental Assessment from the Environmental Protection Agency (EPA) for large-scale operations; Water Use Permit from the Water Resources Commission if using irrigation.",
      "Manufacturing: Building Permit from local authority; Environmental Permit (EPA); Factory Inspection Certificate from the Department of Factories Inspectorate.",
      "Free Zone operations: Apply for Free Zone Licence from the Ghana Free Zones Authority (GFZA) — separate from GIPC registration.",
      "Food processing: Registration with the Food and Drugs Authority (FDA) for any food product manufacturing.",
      "Allow 4–12 weeks for all sector-specific permits depending on complexity.",
    ],
    tip: "Permit timelines can be significantly reduced with professional facilitation. NexusTrade works with licensed permit agents with established relationships at the relevant agencies.",
  },
  {
    id: "step-5",
    number: "05",
    title: "Land Acquisition",
    content: [
      "Foreign investors cannot hold freehold land in Ghana — all land use by foreigners must be structured as a lease.",
      "Leases of up to 50 years are available (renewable). For most commercial purposes, this provides full operational security.",
      "Land due diligence is critical: verify that the land is free from encumbrances, confirm the class of land (stool land, private land, vested land), and check for community rights or mortgages.",
      "All land transactions must be registered with the Lands Commission to be legally valid.",
      "Land title registration in Ghana has been significantly improved under the Land Act 2020 and the introduction of digital title registration.",
    ],
    tip: "Land acquisition is the most common point of failure for foreign investors in Ghana. Never proceed without a qualified Ghanaian land lawyer conducting full due diligence.",
  },
  {
    id: "step-6",
    number: "06",
    title: "Set Up Banking & Bring in Capital",
    content: [
      "Open a corporate bank account with a commercial bank in Ghana — major options include GCB Bank, Absa, Ecobank, Access Bank, and Stanbic.",
      "Foreign currency can be remitted into Ghana through the formal banking system without restrictions.",
      "Capital brought in for investment purposes should be documented as a foreign direct investment (FDI) inflow to ensure protection of repatriation rights.",
      "Ghana operates a relatively liberal foreign exchange regime — funds can generally move in and out through the banking system.",
      "Keep all documentation of capital inflows — this is essential for demonstrating your repatriation entitlement later.",
    ],
    tip: "Some banks have dedicated foreign investor desks with relationship managers experienced in handling FDI transactions.",
  },
  {
    id: "step-7",
    number: "07",
    title: "Hire Local Workforce",
    content: [
      "Foreign employees must obtain a Work and Residence Permit from the Ghana Immigration Service — typically valid for one year and renewable.",
      "GIPC regulations set quotas for the ratio of foreign to local employees — generally capped at a percentage that decreases over time as skills are transferred.",
      "Local employees must be registered with the Social Security and National Insurance Trust (SSNIT).",
      "Ghana's National Labour Commission provides dispute resolution for employment disputes.",
      "The minimum wage in Ghana is reviewed annually — consult the Fair Wages and Salaries Commission for current rates.",
    ],
    tip: "Work permit processing can take 4–8 weeks. Apply well in advance of your planned operational start date.",
  },
  {
    id: "step-8",
    number: "08",
    title: "Profit Repatriation",
    content: [
      "Ghana's investment laws guarantee foreign investors the right to repatriate profits after payment of applicable taxes.",
      "Repatriation is done through the commercial banking system — your bank handles the foreign exchange transaction.",
      "Dividends are subject to withholding tax at 8% (reduced rates may apply under bilateral tax treaties).",
      "Capital gains on disposal of investments are subject to capital gains tax — consult a tax advisor for current rates.",
      "All repatriation transactions are documented by the Bank of Ghana as part of the country's balance of payments reporting.",
    ],
    tip: "Double Taxation Agreements (DTAs) between Ghana and China, UK, France, Germany, and other countries may reduce withholding tax rates — check whether your country has a DTA with Ghana.",
  },
];

export default function HowToInvestPage() {
  return (
    <>
      <div className="bg-[#0F3D24] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-4 text-xs text-white/50">
              <Link href="/resources" className="hover:text-white/80">Resources</Link>
              <span className="text-white/30">/</span>
              <span className="text-[#E6A817]">How to Invest</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              How to Invest in Ghana
            </h1>
            <p className="text-white/65 text-base leading-relaxed">
              A step-by-step guide for foreign investors — from company
              registration to profit repatriation.
            </p>
          </div>
        </div>
      </div>

      {/* Anchor nav */}
      <div className="bg-white border-b border-[#E5E0D8] sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {steps.map((step) => (
              <a
                key={step.id}
                href={`#${step.id}`}
                className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded text-[#2C2C2C]/60 hover:text-[#1A5C38] hover:bg-[#F8F5F0] transition-colors"
              >
                {step.number}. {step.title.split(" ").slice(0, 3).join(" ")}...
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.id} id={step.id} className="scroll-mt-32">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-[#0D1B2A] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#E6A817] font-bold text-lg font-[family-name:var(--font-playfair)]">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0D1B2A] mb-5 font-[family-name:var(--font-playfair)]">
                      {step.title}
                    </h2>
                    <ul className="space-y-3 mb-5">
                      {step.content.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#2C2C2C]/70 text-sm leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#1A5C38] flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[#1A5C38]/5 border-l-3 border-[#1A5C38] rounded-r-lg p-4">
                      <p className="text-sm text-[#1A5C38] font-medium">
                        <span className="font-bold">NexusTrade Tip: </span>
                        {step.tip}
                      </p>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="mt-10 border-b border-[#E5E0D8]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
            Need personalised guidance?
          </h2>
          <p className="text-white/60 mb-8">
            NexusTrade Ghana can guide you through every step of this process —
            from initial registration to operational launch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C8900A] hover:bg-[#E6A817] text-white font-semibold px-8 py-4 rounded transition-colors"
            >
              Contact NexusTrade <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources/faqs"
              className="text-white/60 hover:text-white text-sm"
            >
              Browse FAQs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
