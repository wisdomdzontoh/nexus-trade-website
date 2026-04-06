import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { sectors, getSectorBySlug } from "@/lib/data/sectors";
import { opportunities } from "@/lib/data/opportunities";
import SectorGallery from "@/components/ui/sector-gallery";

export async function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return {};
  return {
    title: `${sector.name} Investment Opportunities in Ghana`,
    description: sector.description,
  };
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const relatedOpps = opportunities.filter((o) =>
    sector.relatedOpportunitySlugs.includes(o.slug)
  );

  return (
    <>
      {/* Header */}
      <div className="relative bg-[#0F3D24] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={sector.image} alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#0F3D24]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Link href="/sectors" className="text-white/50 text-xs hover:text-white/80 transition-colors">
              Sectors
            </Link>
            <span className="text-white/30 text-xs">/</span>
            <span className="text-[#E6A817] text-xs">{sector.name}</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              {sector.name}
            </h1>
            <p className="text-[#E6A817] text-lg font-medium italic mb-4 font-[family-name:var(--font-playfair)]">
              {sector.tagline}
            </p>
            <p className="text-white/65 text-base leading-relaxed">
              {sector.description}
            </p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-[#0D1B2A] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {sector.highlights.map((h) => (
              <div key={h.label} className="flex flex-col items-center lg:items-start lg:px-8">
                <span className="text-2xl font-bold text-[#E6A817] font-[family-name:var(--font-playfair)]">
                  {h.stat}
                </span>
                <span className="text-xs text-white/50 uppercase tracking-wider">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-8 h-px bg-[#C8900A]" />
                <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                  Sector Overview
                </span>
              </div>
              <div className="prose prose-lg max-w-none text-[#2C2C2C]/70 leading-relaxed space-y-4">
                {sector.fullDescription.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Key Advantages sidebar */}
            <div>
              <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#E5E0D8] sticky top-28">
                <h3 className="font-bold text-[#0D1B2A] mb-4 font-[family-name:var(--font-playfair)]">
                  Key Investor Advantages
                </h3>
                <ul className="space-y-3">
                  {sector.keyAdvantages.map((adv) => (
                    <li key={adv} className="flex items-start gap-3 text-sm text-[#2C2C2C]/70">
                      <CheckCircle2 className="w-4 h-4 text-[#1A5C38] flex-shrink-0 mt-0.5" />
                      {adv}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-[#E5E0D8]">
                  <Link
                    href="/contact"
                    className="block text-center bg-[#1A5C38] hover:bg-[#0F3D24] text-white font-semibold px-5 py-3 rounded text-sm transition-colors"
                  >
                    Request a Briefing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {sector.galleryImages && sector.galleryImages.length > 0 && (
        <SectorGallery images={sector.galleryImages} sectorName={sector.name} />
      )}

      {/* Opportunity Areas */}
      <section className="py-16 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-[#C8900A]" />
              <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                Opportunity Areas
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] font-[family-name:var(--font-playfair)]">
              Where to invest within {sector.name}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sector.opportunityAreas.map((area, i) => (
              <div
                key={area.name}
                className="bg-white rounded-xl p-6 border border-[#E5E0D8]"
              >
                <div className="w-8 h-8 rounded bg-[#1A5C38] text-white text-sm font-bold flex items-center justify-center mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-[#0D1B2A] text-sm mb-2 font-[family-name:var(--font-playfair)]">
                  {area.name}
                </h3>
                <p className="text-xs text-[#2C2C2C]/60 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Opportunities */}
      {relatedOpps.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-px bg-[#C8900A]" />
                  <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                    Live Opportunities
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] font-[family-name:var(--font-playfair)]">
                  Featured {sector.name} opportunities
                </h2>
              </div>
              <Link
                href="/opportunities"
                className="hidden sm:flex items-center gap-1.5 text-sm text-[#1A5C38] font-semibold hover:gap-3 transition-all"
              >
                All opportunities <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedOpps.map((opp) => (
                <Link
                  key={opp.slug}
                  href={`/opportunities/${opp.slug}`}
                  className="group bg-white rounded-xl border border-[#E5E0D8] overflow-hidden hover:shadow-lg hover:border-transparent transition-all flex flex-col"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={opp.image}
                      alt={opp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded bg-[#1A5C38] text-white">
                      {opp.sectorLabel}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-[#0D1B2A] font-bold text-sm mb-2 line-clamp-2 font-[family-name:var(--font-playfair)]">
                      {opp.title}
                    </h3>
                    <p className="text-[#2C2C2C]/55 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
                      {opp.shortDescription}
                    </p>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#2C2C2C]/50">{opp.region.split(",")[0]}</span>
                      <span className="text-[#1A5C38] font-semibold">{opp.investmentRangeUSD}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
            Interested in {sector.name}?
          </h2>
          <p className="text-white/60 mb-8">
            Contact us to explore specific opportunities and get a personalised
            investment briefing for this sector.
          </p>
          <Link
            href={`/contact?sector=${encodeURIComponent(sector.name)}`}
            className="inline-flex items-center gap-2 bg-[#C8900A] hover:bg-[#E6A817] text-white font-semibold px-8 py-4 rounded transition-colors"
          >
            Contact Us About {sector.name} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
