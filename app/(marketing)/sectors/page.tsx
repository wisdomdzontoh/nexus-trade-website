import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sprout, Factory, Building2 } from "lucide-react";
import { sectors } from "@/lib/data/sectors";

export const metadata: Metadata = {
  title: "Investment Sectors",
  description:
    "Explore NexusTrade Ghana's three core investment sectors: Agriculture, Manufacturing, and Industrial Clusters. Each with structured opportunities for foreign investors.",
};

const sectorIcons = { Sprout, Factory, Building2 };

export default function SectorsPage() {
  return (
    <>
      <div className="bg-[#0F3D24] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#E6A817]" />
              <span className="text-[#E6A817] text-xs font-semibold uppercase tracking-widest">
                Investment Sectors
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Three sectors. Proven potential.
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              NexusTrade focuses on Ghana's three highest-opportunity sectors
              for foreign investment — selected for policy support, growth
              trajectory, and demonstrated investor returns.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sectors.map((sector, index) => {
              const Icon = sectorIcons[sector.icon as keyof typeof sectorIcons] || Building2;
              return (
                <div
                  key={sector.slug}
                  className="bg-white rounded-xl border border-[#E5E0D8] overflow-hidden"
                >
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`relative h-64 lg:h-auto min-h-[280px] ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <Image
                        src={sector.image}
                        alt={sector.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                    </div>
                    <div className={`p-8 lg:p-10 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                      <div className="w-12 h-12 rounded-lg bg-[#1A5C38]/10 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6 text-[#1A5C38]" />
                      </div>
                      <h2 className="text-2xl font-bold text-[#0D1B2A] mb-2 font-[family-name:var(--font-playfair)]">
                        {sector.name}
                      </h2>
                      <p className="text-[#C8900A] text-sm font-medium mb-4 italic">
                        {sector.tagline}
                      </p>
                      <p className="text-[#2C2C2C]/65 text-sm leading-relaxed mb-6">
                        {sector.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {sector.highlights.map((h) => (
                          <div key={h.label} className="bg-[#F8F5F0] rounded-lg p-3 border border-[#E5E0D8]">
                            <span className="block text-xl font-bold text-[#1A5C38] font-[family-name:var(--font-playfair)]">
                              {h.stat}
                            </span>
                            <span className="text-xs text-[#2C2C2C]/55">{h.label}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/sectors/${sector.slug}`}
                        className="inline-flex items-center gap-2 bg-[#1A5C38] hover:bg-[#0F3D24] text-white font-semibold px-6 py-3 rounded text-sm transition-colors"
                      >
                        Explore {sector.name}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
            Interested in a specific sector?
          </h2>
          <p className="text-white/60 mb-8">
            Contact our team for a tailored briefing on opportunities within
            your sector of interest.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C8900A] hover:bg-[#E6A817] text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Request a Sector Briefing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
