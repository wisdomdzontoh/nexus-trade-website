"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { opportunities, type Sector } from "@/lib/data/opportunities";

const filters: { label: string; value: "all" | Sector }[] = [
  { label: "All Sectors", value: "all" },
  { label: "Agriculture", value: "agriculture" },
  { label: "Manufacturing", value: "manufacturing" },
  { label: "Industrial Clusters", value: "industrial-clusters" },
];

export default function OpportunitiesPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | Sector>("all");

  const filtered =
    activeFilter === "all"
      ? opportunities
      : opportunities.filter((o) => o.sector === activeFilter);

  return (
    <>
      <div className="bg-[#0F3D24] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#E6A817]" />
              <span className="text-[#E6A817] text-xs font-semibold uppercase tracking-widest">
                Investment Opportunities
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Current Opportunities
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              Curated, vetted investment opportunities across Ghana's three
              priority sectors. All listings are reviewed by NexusTrade's team
              for viability and investor-readiness.
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-[#F8F5F0] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-[#2C2C2C]/60">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filter by sector:</span>
            </div>
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  activeFilter === f.value
                    ? "bg-[#1A5C38] text-white"
                    : "bg-white border border-[#E5E0D8] text-[#2C2C2C]/70 hover:border-[#1A5C38] hover:text-[#1A5C38]"
                }`}
              >
                {f.label}
              </button>
            ))}
            <span className="ml-auto text-sm text-[#2C2C2C]/50">
              {filtered.length} opportunity{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((opp) => (
              <Link
                key={opp.slug}
                href={`/opportunities/${opp.slug}`}
                className="group bg-white rounded-xl border border-[#E5E0D8] overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-300 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={opp.image}
                    alt={opp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-[#1A5C38] text-white">
                    {opp.sectorLabel}
                  </span>
                  {opp.featured && (
                    <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#C8900A] text-white">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[#0D1B2A] font-bold text-base mb-2 leading-snug line-clamp-2 font-[family-name:var(--font-playfair)]">
                    {opp.title}
                  </h3>
                  <p className="text-[#2C2C2C]/55 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
                    {opp.shortDescription}
                  </p>
                  <div className="space-y-2 text-sm mb-5">
                    <div className="flex justify-between items-center">
                      <span className="text-[#2C2C2C]/50 text-xs">Location</span>
                      <span className="text-[#2C2C2C]/80 text-xs font-medium">{opp.region}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#2C2C2C]/50 text-xs">Investment (USD)</span>
                      <span className="text-[#1A5C38] text-xs font-bold">{opp.investmentRangeUSD}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#2C2C2C]/50 text-xs">Investment (GHS)</span>
                      <span className="text-[#2C2C2C]/70 text-xs">{opp.investmentRangeGHS}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#C8900A] text-sm font-semibold group-hover:text-[#E6A817] transition-colors">
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#2C2C2C]/50 text-lg">
                No opportunities match your current filter.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white border-t border-[#E5E0D8]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] mb-4 font-[family-name:var(--font-playfair)]">
            Don't see what you're looking for?
          </h2>
          <p className="text-[#2C2C2C]/60 mb-8 max-w-xl mx-auto">
            Our portfolio is continuously updated. Contact our team to discuss
            your specific requirements — we may have unlisted opportunities that
            match your criteria.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C8900A] hover:bg-[#E6A817] text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Discuss Your Requirements <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
