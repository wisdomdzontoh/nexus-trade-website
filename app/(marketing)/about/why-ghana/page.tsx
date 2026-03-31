import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Globe,
  Zap,
  Users,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Invest in Ghana",
  description:
    "Ghana is West Africa's most stable investment destination. Discover the political stability, economic fundamentals, legal framework, and market access that make Ghana compelling.",
};

const pillars = [
  {
    icon: Shield,
    title: "Political Stability",
    content: [
      "Ghana has held peaceful democratic elections since 1992 — 30+ years of unbroken constitutional governance.",
      "Regular transfers of power between political parties demonstrate genuine democratic maturity.",
      "The country has avoided the political instability and conflict that has affected many of its neighbours.",
      "The judiciary operates independently and has a track record of upholding commercial contracts.",
      "Ghana consistently scores among Africa's top performers on the Mo Ibrahim Index of African Governance.",
    ],
    stat: { value: "30+", label: "years of democracy" },
  },
  {
    icon: TrendingUp,
    title: "Economic Growth",
    content: [
      "Ghana's GDP has grown at an average of 6–8% per year over the past decade, driven by oil, gold, cocoa, and services.",
      "A middle-income economy with a rising consumer class and growing domestic demand.",
      "The government's Ghana BEYOND AID agenda prioritises private sector-led industrialisation.",
      "One of the few African economies to attract consistent IMF programme engagement and international bond market access.",
      "Recovery growth following global disruptions has been among the fastest in the sub-region.",
    ],
    stat: { value: "$82B", label: "GDP (2024)" },
  },
  {
    icon: Globe,
    title: "Strategic Location & Market Access",
    content: [
      "ECOWAS membership provides preferential market access to 450 million consumers across 15 West African nations.",
      "AGOA membership gives Ghana duty-free access to the US market for qualifying manufactured goods.",
      "EU-Ghana Economic Partnership Agreement (EPA) provides preferential export access to 27 EU member states.",
      "Tema Port is one of West Africa's most efficient deep-water container ports — the gateway to six landlocked neighbours.",
      "English-language business environment eliminates the language barrier that limits other West African markets.",
    ],
    stat: { value: "450M", label: "ECOWAS consumers" },
  },
  {
    icon: Users,
    title: "Young, Growing Population",
    content: [
      "Over 60% of Ghana's population is under 35 — a large, young, and increasingly educated labour force.",
      "Rapid urbanisation is creating growing domestic demand for manufactured goods, processed food, and services.",
      "Ghana has one of West Africa's highest rates of tertiary education enrollment.",
      "English-speaking workforce with a cultural affinity for international business and foreign investment.",
      "Labour costs remain competitive relative to Asian manufacturing zones while productivity continues to improve.",
    ],
    stat: { value: "34M+", label: "population" },
  },
  {
    icon: Zap,
    title: "Natural Resources",
    content: [
      "Ghana is one of Africa's top gold producers, with significant untapped mineral reserves.",
      "Offshore oil production since 2010 (Jubilee Field) has reinforced government revenue and investor confidence.",
      "Exceptional agricultural land: fertile soils, dual rainy seasons, and access to irrigation systems.",
      "World's second-largest cocoa producer — significant processing and value-chain opportunity.",
      "Increasing solar and renewable energy investment addressing the industrial power supply challenge.",
    ],
    stat: { value: "#2", label: "cocoa producer globally" },
  },
  {
    icon: Scale,
    title: "Investor-Friendly Legal Framework",
    content: [
      "Ghana Investment Promotion Centre Act (Act 865) guarantees protections against expropriation.",
      "Free profit repatriation — no restrictions on moving dividends and capital out of Ghana.",
      "100% foreign ownership permitted in most sectors (manufacturing, agriculture, industrial).",
      "Ghana Free Zones Act offers 10-year income tax holidays for qualifying operations.",
      "Signatory to ICSID and New York Convention — international arbitration available for disputes.",
    ],
    stat: { value: "100%", label: "foreign ownership permitted" },
  },
];

const incentiveSummary = [
  { label: "Income tax holiday (Free Zones)", value: "10 years" },
  { label: "Corporate tax rate (standard)", value: "25%" },
  { label: "Agriculture income tax holiday", value: "5–10 years" },
  { label: "Import duty on equipment (Free Zone)", value: "0%" },
  { label: "Profit repatriation restrictions", value: "None" },
  { label: "Minimum foreign investment (JV)", value: "$200,000 USD" },
  { label: "Minimum foreign investment (100% FO)", value: "$500,000 USD" },
];

export default function WhyGhanaPage() {
  return (
    <>
      {/* Page Header */}
      <div className="relative bg-[#1A5C38] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/why-ghana.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#1A5C38]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#E6A817]" />
              <span className="text-[#E6A817] text-xs font-semibold uppercase tracking-widest">
                About · Why Ghana
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Why Invest in Ghana?
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              Ghana stands apart in West Africa for its democratic maturity,
              investor-friendly legal framework, and position as the gateway to
              West Africa's 450 million consumers.
            </p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-[#0D1B2A] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {[
              { value: "$82B", label: "GDP 2024" },
              { value: "6.5%", label: "Avg. Annual Growth" },
              { value: "AAA", label: "Political Stability Index" },
              { value: "ECOWAS", label: "Market Gateway" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:items-start lg:px-8">
                <span className="text-2xl font-bold text-[#E6A817] font-[family-name:var(--font-playfair)]">
                  {s.value}
                </span>
                <span className="text-xs text-white/50 uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Case Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-[#C8900A]" />
              <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                The Investment Case
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] font-[family-name:var(--font-playfair)]">
              Six reasons Ghana stands apart
            </h2>
          </div>

          <div className="space-y-12">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`grid lg:grid-cols-3 gap-8 items-start pb-12 ${
                    index < pillars.length - 1 ? "border-b border-[#E5E0D8]" : ""
                  }`}
                >
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#1A5C38]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#1A5C38]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0D1B2A] font-[family-name:var(--font-playfair)]">
                        {pillar.title}
                      </h3>
                    </div>
                    <div className="bg-[#F8F5F0] rounded-lg p-4 border border-[#E5E0D8]">
                      <span className="block text-3xl font-bold text-[#1A5C38] font-[family-name:var(--font-playfair)]">
                        {pillar.stat.value}
                      </span>
                      <span className="text-xs text-[#2C2C2C]/60 uppercase tracking-wide">
                        {pillar.stat.label}
                      </span>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="space-y-3">
                      {pillar.content.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#2C2C2C]/70 text-sm leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#C8900A] flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Incentives summary table */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] font-[family-name:var(--font-playfair)]">
              Key investor metrics at a glance
            </h2>
          </div>
          <div className="bg-white rounded-xl border border-[#E5E0D8] overflow-hidden">
            <div className="bg-[#0D1B2A] px-6 py-4">
              <span className="text-white font-semibold text-sm">
                Ghana Investment Incentives Summary
              </span>
            </div>
            {incentiveSummary.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-6 py-4 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#F8F5F0]"
                }`}
              >
                <span className="text-sm text-[#2C2C2C]/70">{row.label}</span>
                <span className="text-sm font-semibold text-[#1A5C38]">
                  {row.value}
                </span>
              </div>
            ))}
            <div className="px-6 py-4 bg-white border-t border-[#E5E0D8]">
              <p className="text-xs text-[#2C2C2C]/50">
                Source: GIPC Ghana, Ghana Revenue Authority, Ghana Free Zones Authority.
                Data current as of 2024/25. Please verify with qualified legal counsel before investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
            Ready to invest in Ghana?
          </h2>
          <p className="text-white/60 mb-8">
            Contact NexusTrade Ghana to start exploring specific opportunities
            in your sector of interest.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C8900A] hover:bg-[#E6A817] text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
