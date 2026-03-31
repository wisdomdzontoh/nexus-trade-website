import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Ghana Investment Incentives & Tax Benefits",
  description:
    "A comprehensive overview of Ghana's investment incentives for foreign investors: free zone tax holidays, import duty exemptions, AGOA, and sector-specific concessions.",
};

const incentiveCategories = [
  {
    id: "free-zones",
    title: "Ghana Free Zones Incentives",
    subtitle: "Ghana Free Zones Act, 1995 (Act 504)",
    description:
      "Free Zone status is the most generous incentive regime available in Ghana. Enterprises manufacturing for export (minimum 70% of output exported) qualify for Free Zone designation through the Ghana Free Zones Authority (GFZA).",
    incentives: [
      { label: "Income tax holiday", value: "10 years", detail: "0% income tax for the first 10 years of operation" },
      { label: "Income tax after holiday", value: "8% maximum", detail: "Capped at 8% even after the holiday period — vs. standard 25%" },
      { label: "Import duty on equipment", value: "0%", detail: "All production equipment, machinery, and spare parts imported duty-free" },
      { label: "Import duty on raw materials", value: "0%", detail: "Raw materials and intermediate inputs imported duty-free" },
      { label: "Export duty on finished goods", value: "0%", detail: "No export duty on goods produced in the zone" },
      { label: "Foreign ownership", value: "100%", detail: "Full foreign equity ownership permitted — no local partner required" },
      { label: "Profit repatriation", value: "Unrestricted", detail: "100% of profits, dividends, and capital may be remitted abroad" },
    ],
  },
  {
    id: "agriculture",
    title: "Agriculture Sector Incentives",
    subtitle: "Tax exemptions and sector-specific benefits",
    description:
      "Ghana prioritises agricultural investment as a national development objective. Investors in qualifying agricultural activities benefit from extended tax holidays and reduced import duties.",
    incentives: [
      { label: "Income tax holiday — agro-processing", value: "10 years", detail: "Processing of agricultural produce for export" },
      { label: "Income tax holiday — primary agriculture", value: "5 years", detail: "Farming, fishing, and primary livestock production" },
      { label: "Import duty on agri-equipment", value: "Reduced/0%", detail: "Tractors, harvesters, irrigation equipment — subject to specific HS codes" },
      { label: "VAT on agricultural inputs", value: "Zero-rated", detail: "Fertilisers, seeds, pesticides exempt from VAT" },
      { label: "ECOWAS trade", value: "Duty-free", detail: "Zero import duty for goods sold within ECOWAS member states" },
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing Sector Incentives",
    subtitle: "For manufacturers outside Free Zones",
    description:
      "Standard corporate investment incentives apply to manufacturing companies that do not qualify for or elect not to take Free Zone status. These include accelerated depreciation, reduced rates in preferred regions, and access to export financing.",
    incentives: [
      { label: "Corporate tax — manufacturing", value: "25%", detail: "Standard rate; reduced rates may apply in priority regions" },
      { label: "Accelerated depreciation", value: "Available", detail: "Qualifying capital assets may be depreciated faster than standard rates" },
      { label: "Export development fund", value: "Access", detail: "GhanaXim Export Development Fund provides low-interest financing for exporters" },
      { label: "AGOA (US market)", value: "Duty-free", detail: "Qualifying manufactured goods exported to the US duty-free under AGOA" },
      { label: "EU-Ghana EPA", value: "Preferential", detail: "Preferential tariff rates for exports to EU member states" },
    ],
  },
  {
    id: "gipc",
    title: "GIPC Investor Protections",
    subtitle: "Ghana Investment Promotion Centre Act, 2013 (Act 865)",
    description:
      "Beyond tax incentives, GIPC registration confers a set of legally guaranteed protections that reduce investment risk for foreign investors.",
    incentives: [
      { label: "Expropriation protection", value: "Guaranteed", detail: "Government guarantee against nationalisation or seizure without fair compensation" },
      { label: "Profit repatriation", value: "Guaranteed", detail: "Legally protected right to repatriate dividends, profits, and capital" },
      { label: "International arbitration", value: "ICSID access", detail: "Access to ICSID (World Bank) dispute resolution for investment disputes" },
      { label: "Most Favoured Nation", value: "Applies", detail: "Investors entitled to treatment no less favourable than any other foreign investor" },
      { label: "BIT protection", value: "30+ countries", detail: "Bilateral Investment Treaties with China, UK, France, Germany, and others provide additional protections" },
    ],
  },
];

const taxSummary = [
  { metric: "Standard Corporate Income Tax", rate: "25%" },
  { metric: "Free Zone Income Tax (post-holiday)", rate: "Max 8%" },
  { metric: "Free Zone Income Tax Holiday", rate: "0% / 10 years" },
  { metric: "Capital Gains Tax", rate: "25%" },
  { metric: "Dividend Withholding Tax", rate: "8%" },
  { metric: "VAT (standard rate)", rate: "15%" },
  { metric: "National Health Insurance Levy", rate: "2.5%" },
  { metric: "Import Duty (general)", rate: "0–20%" },
  { metric: "Import Duty (capital equipment — Free Zone)", rate: "0%" },
];

export default function IncentivesPage() {
  return (
    <>
      <div className="bg-[#0F3D24] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4 text-xs text-white/50">
            <Link href="/resources" className="hover:text-white/80">Resources</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#E6A817]">Investment Incentives</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Investment Incentives & Tax Benefits
            </h1>
            <p className="text-white/65 text-base leading-relaxed">
              Ghana offers a range of incentives designed to attract and retain
              foreign investment — from 10-year tax holidays in Free Zones to
              duty-free US market access under AGOA.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-14">
              {incentiveCategories.map((cat) => (
                <div key={cat.id} id={cat.id} className="scroll-mt-28">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <div className="w-6 h-px bg-[#C8900A]" />
                    <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                      {cat.subtitle}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#0D1B2A] mb-3 font-[family-name:var(--font-playfair)]">
                    {cat.title}
                  </h2>
                  <p className="text-[#2C2C2C]/65 text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>
                  <div className="bg-[#F8F5F0] rounded-xl border border-[#E5E0D8] overflow-hidden">
                    {cat.incentives.map((inc, i) => (
                      <div
                        key={inc.label}
                        className={`px-6 py-4 ${i < cat.incentives.length - 1 ? "border-b border-[#E5E0D8]" : ""}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#1A5C38] flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-medium text-[#0D1B2A]">{inc.label}</div>
                              <div className="text-xs text-[#2C2C2C]/50 mt-0.5">{inc.detail}</div>
                            </div>
                          </div>
                          <span className="text-sm font-bold text-[#1A5C38] flex-shrink-0 bg-[#1A5C38]/10 px-3 py-1 rounded">
                            {inc.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tax rate summary sidebar */}
            <div>
              <div className="bg-[#0D1B2A] rounded-xl overflow-hidden sticky top-28">
                <div className="bg-[#C8900A] px-5 py-4">
                  <h3 className="text-white font-bold text-sm font-[family-name:var(--font-playfair)]">
                    Ghana Tax Rate Summary
                  </h3>
                  <p className="text-white/70 text-xs mt-1">As of 2024/25 fiscal year</p>
                </div>
                {taxSummary.map((row, i) => (
                  <div
                    key={row.metric}
                    className={`px-5 py-3 flex justify-between items-center ${
                      i < taxSummary.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <span className="text-white/60 text-xs">{row.metric}</span>
                    <span className="text-[#E6A817] text-xs font-bold">{row.rate}</span>
                  </div>
                ))}
                <div className="px-5 py-4 bg-white/5 border-t border-white/10">
                  <p className="text-white/40 text-xs leading-relaxed">
                    Rates are indicative. Verify current rates with a qualified Ghanaian tax advisor before investment decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
            Get help maximising your incentives
          </h2>
          <p className="text-white/60 mb-8">
            NexusTrade can connect you with tax specialists and GFZA-accredited
            advisors who will ensure your investment structure captures all
            available benefits.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C8900A] hover:bg-[#E6A817] text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Contact NexusTrade <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
