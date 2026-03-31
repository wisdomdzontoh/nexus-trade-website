import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sprout,
  Factory,
  Building2,
  TrendingUp,
  Users,
  Shield,
  Globe,
  CheckCircle2,
  Search,
  MessageSquare,
  Handshake,
  BarChart3,
} from "lucide-react";
import { getFeaturedOpportunities } from "@/lib/data/opportunities";

export const metadata: Metadata = {
  title: "NexusTrade Ghana — Your Gateway to Ghana's Investment Opportunities",
  description:
    "NexusTrade Ghana connects international investors with high-potential opportunities in Ghana's manufacturing, industrial, and agricultural sectors.",
};

const featuredSectors = [
  {
    icon: Sprout,
    title: "Agriculture",
    href: "/sectors/agriculture",
    description:
      "Tap into Ghana's fertile lands and growing food demand. From rice cultivation to cocoa processing — high-yield, long-term agricultural investments.",
    highlights: ["Rice & Grains", "Poultry & Livestock", "Cocoa Processing", "Aquaculture"],
    color: "#1A5C38",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    href: "/sectors/manufacturing",
    description:
      "Leverage AGOA duty-free US access and competitive labour costs. Ghana's industrial base is primed for export-oriented manufacturing growth.",
    highlights: ["Garment & Textile", "Steel Fabrication", "Pharmaceuticals", "Packaging"],
    color: "#C8900A",
  },
  {
    icon: Building2,
    title: "Industrial Clusters",
    href: "/sectors/industrial-clusters",
    description:
      "Purpose-built industrial parks with pre-installed infrastructure, Free Zone status, and government facilitation for anchor investors.",
    highlights: ["Free Zone Benefits", "Agro-Processing Parks", "Light Manufacturing", "Logistics Hubs"],
    color: "#0D1B2A",
  },
];

const whyGhanaStats = [
  { value: "$82B", label: "GDP (2024)", icon: BarChart3 },
  { value: "34M+", label: "Population", icon: Users },
  { value: "30+", label: "Years of Democracy", icon: Shield },
  { value: "450M", label: "ECOWAS Market Access", icon: Globe },
];

const howItWorks = [
  {
    step: "01",
    icon: Search,
    title: "Browse Opportunities",
    description:
      "Explore our curated portfolio of investment opportunities across agriculture, manufacturing, and industrial sectors.",
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "Make an Enquiry",
    description:
      "Contact our team to express interest in a specific opportunity or get a tailored briefing on your sector of choice.",
  },
  {
    step: "03",
    icon: Handshake,
    title: "Connect & Evaluate",
    description:
      "We arrange site visits, regulatory meetings, and introductions to legal and financial professionals in Ghana.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Invest with Confidence",
    description:
      "Proceed with your investment supported by NexusTrade's on-the-ground knowledge and established local relationships.",
  },
];

const trustSignals = [
  "Ghana-registered and legally compliant",
  "GIPC registration facilitation for all investors",
  "Established relationships with the Lands Commission",
  "Direct access to COCOBOD, GRA, and EPA",
  "End-to-end investor support from enquiry to operation",
  "Mandarin-speaking staff available for Chinese investors",
];

export default function HomePage() {
  const featuredOpportunities = getFeaturedOpportunities();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-ghana.jpg"
            alt="Ghana landscape"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F3D24]/90 via-[#0F3D24]/70 to-[#0D1B2A]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C8900A]/20 border border-[#C8900A]/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8900A]" />
              <span className="text-[#E6A817] text-xs font-semibold tracking-widest uppercase">
                Investment Facilitation · Ghana
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6 font-[family-name:var(--font-playfair)]">
              Investing in{" "}
              <span className="text-[#E6A817] italic">Ghana's</span>
              <br />
              Next Chapter
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
              NexusTrade Ghana connects international investors with high-potential
              opportunities in manufacturing, agriculture, and industrial clusters.
              Local knowledge. Global standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center gap-2.5 bg-[#C8900A] hover:bg-[#E6A817] text-white font-semibold px-8 py-4 rounded transition-colors text-base"
              >
                Explore Opportunities
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded transition-colors text-base backdrop-blur-sm"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
          <div className="w-px h-12 bg-white/60 animate-pulse" />
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────── */}
      <section className="bg-[#0D1B2A] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {whyGhanaStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center lg:items-start lg:px-8 gap-1">
                <span className="text-3xl font-bold text-[#E6A817] font-[family-name:var(--font-playfair)]">
                  {stat.value}
                </span>
                <span className="text-xs text-white/50 uppercase tracking-wider font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-8 h-px bg-[#C8900A]" />
                <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                  What We Do
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-6 font-[family-name:var(--font-playfair)]">
                Your bridge to Ghana's investment landscape
              </h2>
              <p className="text-[#2C2C2C]/70 text-lg leading-relaxed mb-6">
                NexusTrade Ghana is an investment facilitation company. We identify
                high-potential opportunities, navigate Ghana's regulatory environment,
                and build the connections that allow international investors to enter
                the Ghanaian market with confidence.
              </p>
              <p className="text-[#2C2C2C]/70 text-base leading-relaxed mb-8">
                We are not a fund. We are not a bank. We are the on-the-ground partner
                that reduces friction and increases your probability of success in
                Africa's most stable investment destination.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#1A5C38] font-semibold hover:gap-3 transition-all"
              >
                Learn more about NexusTrade
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Opportunity Identification", desc: "We source and vet investment opportunities across key sectors." },
                { title: "Regulatory Navigation", desc: "GIPC, EPA, Lands Commission — we know every step of the process." },
                { title: "Local Relationships", desc: "Established connections with partners, suppliers, and officials." },
                { title: "Investor Support", desc: "From first enquiry to operational launch — we are with you." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#F8F5F0] rounded-lg p-5 border border-[#E5E0D8]"
                >
                  <div className="w-8 h-8 rounded bg-[#1A5C38]/10 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-4 h-4 text-[#1A5C38]" />
                  </div>
                  <h3 className="text-[#0D1B2A] font-semibold text-sm mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#2C2C2C]/60 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED SECTORS ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-[#C8900A]" />
              <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                Investment Sectors
              </span>
              <div className="w-8 h-px bg-[#C8900A]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-4 font-[family-name:var(--font-playfair)]">
              Three sectors. Proven potential.
            </h2>
            <p className="text-[#2C2C2C]/60 text-lg max-w-2xl mx-auto">
              NexusTrade focuses on Ghana's three highest-potential sectors for
              foreign investment, selected for their growth trajectory, policy
              support, and demonstrated returns.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {featuredSectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Link
                  key={sector.title}
                  href={sector.href}
                  className="group bg-white rounded-xl border border-[#E5E0D8] overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-300 flex flex-col"
                >
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: sector.color }}
                  />
                  <div className="p-8 flex flex-col flex-1">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${sector.color}15` }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: sector.color }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 font-[family-name:var(--font-playfair)]">
                      {sector.title}
                    </h3>
                    <p className="text-[#2C2C2C]/60 text-sm leading-relaxed mb-6 flex-1">
                      {sector.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {sector.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-2.5 py-1 bg-[#F8F5F0] rounded border border-[#E5E0D8] text-[#2C2C2C]/70"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all"
                      style={{ color: sector.color }}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY GHANA ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#1A5C38] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-8 h-px bg-[#E6A817]" />
                <span className="text-[#E6A817] text-xs font-semibold uppercase tracking-widest">
                  Why Ghana
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
                Africa's most stable investment destination
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Ghana stands apart in West Africa for its democratic stability,
                English-language business environment, and investor-friendly
                legal framework. It is consistently ranked among Africa's top
                destinations for foreign direct investment.
              </p>

              <div className="space-y-4">
                {[
                  "Peaceful democratic transfers of power since 1992",
                  "100% foreign ownership permitted in most sectors",
                  "AGOA duty-free access to the US market",
                  "ECOWAS gateway to 450M+ consumers",
                  "10-year income tax holidays in Free Zones",
                  "English-language legal and business environment",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E6A817] flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about/why-ghana"
                className="inline-flex items-center gap-2 mt-8 text-[#E6A817] font-semibold hover:gap-3 transition-all"
              >
                Read the full Ghana investment case
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "$82B", label: "GDP (2024)", detail: "One of West Africa's largest economies" },
                { value: "#65", label: "Global Ease of Doing Business", detail: "World Bank ranking — top 5 in Africa" },
                { value: "8%+", label: "Annual GDP Growth (avg)", detail: "Pre-pandemic decade average" },
                { value: "30yr", label: "Unbroken Democracy", detail: "Longest continuous democracy in West Africa" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <span className="block text-3xl font-bold text-[#E6A817] mb-1 font-[family-name:var(--font-playfair)]">
                    {stat.value}
                  </span>
                  <span className="block text-white font-semibold text-sm mb-1">
                    {stat.label}
                  </span>
                  <span className="block text-white/50 text-xs leading-relaxed">
                    {stat.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED OPPORTUNITIES ───────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-8 h-px bg-[#C8900A]" />
                <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                  Current Opportunities
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] font-[family-name:var(--font-playfair)]">
                Featured Investment Opportunities
              </h2>
            </div>
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 text-[#1A5C38] font-semibold text-sm hover:gap-3 transition-all flex-shrink-0"
            >
              View all opportunities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredOpportunities.map((opp) => (
              <Link
                key={opp.slug}
                href={`/opportunities/${opp.slug}`}
                className="group bg-white rounded-xl border border-[#E5E0D8] overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-300 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={opp.image}
                    alt={opp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded bg-[#1A5C38] text-white">
                    {opp.sectorLabel}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[#0D1B2A] font-bold text-sm mb-2 leading-snug line-clamp-2 font-[family-name:var(--font-playfair)]">
                    {opp.title}
                  </h3>
                  <p className="text-[#2C2C2C]/55 text-xs leading-relaxed mb-4 line-clamp-3 flex-1">
                    {opp.shortDescription}
                  </p>
                  <div className="space-y-1.5 text-xs text-[#2C2C2C]/60 mb-4">
                    <div className="flex items-center justify-between">
                      <span>Location</span>
                      <span className="font-medium text-[#0D1B2A]">{opp.region.split(",")[0]}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Investment</span>
                      <span className="font-semibold text-[#1A5C38]">{opp.investmentRangeUSD}</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#C8900A] group-hover:text-[#E6A817] transition-colors">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-8 h-px bg-[#C8900A]" />
              <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                The Process
              </span>
              <div className="w-8 h-px bg-[#C8900A]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D1B2A] mb-4 font-[family-name:var(--font-playfair)]">
              How it works
            </h2>
            <p className="text-[#2C2C2C]/60 text-lg max-w-xl mx-auto">
              From first enquiry to operational investment — a clear, guided process
              at every stage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative">
                  {/* Connector line (hidden on last) */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] right-0 h-px bg-[#E5E0D8] z-0" />
                  )}
                  <div className="relative z-10 text-center">
                    <div className="relative mx-auto w-20 h-20 mb-5">
                      <div className="absolute inset-0 rounded-full bg-white border-2 border-[#E5E0D8]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#1A5C38]" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#C8900A] text-white text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-[#0D1B2A] font-bold text-base mb-2 font-[family-name:var(--font-playfair)]">
                      {step.title}
                    </h3>
                    <p className="text-[#2C2C2C]/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS ────────────────────────────────────────── */}
      <section className="py-16 bg-white border-y border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="w-8 h-px bg-[#C8900A]" />
                <span className="text-[#C8900A] text-xs font-semibold uppercase tracking-widest">
                  Why Work with Us
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1B2A] mb-4 font-[family-name:var(--font-playfair)]">
                Credibility you can verify. Experience you can rely on.
              </h2>
              <p className="text-[#2C2C2C]/60 text-base leading-relaxed">
                NexusTrade Ghana is a registered Ghanaian company with established
                relationships across the regulatory, legal, and commercial ecosystem.
                When you work with us, you are not navigating Ghana's investment
                landscape alone.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-start gap-3 p-4 bg-[#F8F5F0] rounded-lg border border-[#E5E0D8]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#1A5C38] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#2C2C2C]/80 leading-relaxed">
                    {signal}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px"
            }}
          />
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#1A5C38]/20 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#C8900A]/10 translate-x-1/2 translate-y-1/2 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
          <span className="inline-block text-[#E6A817] text-xs font-semibold uppercase tracking-widest mb-6">
            Ready to invest?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-playfair)]">
            Start a conversation with our team
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you have a specific sector in mind or are exploring your options,
            our team is ready to guide you through Ghana's investment landscape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#C8900A] hover:bg-[#E6A817] text-white font-semibold px-10 py-4 rounded transition-colors text-base"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium text-sm"
            >
              Browse all opportunities
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
