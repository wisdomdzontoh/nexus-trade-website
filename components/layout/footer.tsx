import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Who We Are", href: "/about" },
    { label: "Why Ghana", href: "/about/why-ghana" },
    { label: "Contact Us", href: "/contact" },
  ],
  sectors: [
    { label: "Agriculture", href: "/sectors/agriculture" },
    { label: "Manufacturing", href: "/sectors/manufacturing" },
    { label: "Industrial Clusters", href: "/sectors/industrial-clusters" },
    { label: "All Sectors", href: "/sectors" },
  ],
  resources: [
    { label: "Investment Opportunities", href: "/opportunities" },
    { label: "How to Invest in Ghana", href: "/resources/how-to-invest" },
    { label: "Investment Incentives", href: "/resources/incentives" },
    { label: "FAQs", href: "/resources/faqs" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded bg-[#C8900A] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base font-[family-name:var(--font-playfair)]">N</span>
              </div>
              <div className="leading-none">
                <span className="block text-white font-bold text-lg font-[family-name:var(--font-playfair)]">
                  NexusTrade
                </span>
                <span className="block text-[#C8900A] text-[10px] font-medium tracking-widest uppercase">
                  Ghana
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted gateway to Ghana's most promising investment opportunities —
              from agriculture to industry. We connect international capital with
              Ghana's growth.
            </p>
            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:nexustrade@gmail.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#C8900A] transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-[#C8900A]" />
                nexustrade@gmail.com
              </a>
              <a
                href="tel:+8616605728983"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-[#C8900A] transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-[#C8900A]" />
                +86 166 0572 8983
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 flex-shrink-0 text-[#C8900A] mt-0.5" />
                Accra, Ghana
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Sectors
            </h3>
            <ul className="space-y-3">
              {footerLinks.sectors.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-[#C8900A]" />
              <span className="text-xs text-white/60">Ghana-Registered Company</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-[#C8900A]" />
              <span className="text-xs text-white/60">GIPC Facilitation Partner</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-[#C8900A]" />
              <span className="text-xs text-white/60">ECOWAS Trade Zone</span>
            </div>
            <a
              href="https://wa.me/8616605728983"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1A5C38]/40 border border-[#1A5C38]/60 rounded px-4 py-2 hover:bg-[#1A5C38]/60 transition-colors"
            >
              <ExternalLink className="w-3 h-3 text-green-400" />
              <span className="text-xs text-white/70">Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} NexusTrade Ghana Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
