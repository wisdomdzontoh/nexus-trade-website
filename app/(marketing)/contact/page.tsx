import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MessageCircle, MapPin, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact NexusTrade Ghana",
  description:
    "Get in touch with NexusTrade Ghana to enquire about investment opportunities, request a sector briefing, or start a conversation with our team.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#0F3D24] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#E6A817]" />
              <span className="text-[#E6A817] text-xs font-semibold uppercase tracking-widest">
                Contact
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
              Start a conversation
            </h1>
            <p className="text-white/65 text-lg leading-relaxed">
              Whether you have a specific opportunity in mind or are just beginning
              to explore Ghana as an investment destination — we'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-[#0D1B2A] mb-5 font-[family-name:var(--font-playfair)]">
                  Get in touch directly
                </h2>

                <div className="space-y-5">
                  <a
                    href="mailto:nexustrade@gmail.com"
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E0D8] hover:border-[#1A5C38]/30 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1A5C38]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#1A5C38]" />
                    </div>
                    <div>
                      <span className="block text-xs text-[#2C2C2C]/50 uppercase tracking-wider mb-0.5">
                        Email
                      </span>
                      <span className="block text-[#0D1B2A] font-semibold text-sm group-hover:text-[#1A5C38] transition-colors">
                        nexustrade@gmail.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="tel:+8616605728983"
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E0D8] hover:border-[#1A5C38]/30 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#1A5C38]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#1A5C38]" />
                    </div>
                    <div>
                      <span className="block text-xs text-[#2C2C2C]/50 uppercase tracking-wider mb-0.5">
                        Phone
                      </span>
                      <span className="block text-[#0D1B2A] font-semibold text-sm group-hover:text-[#1A5C38] transition-colors">
                        +86 166 0572 8983
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/8616605728983"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E0D8] hover:border-[#25D366]/40 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <span className="block text-xs text-[#2C2C2C]/50 uppercase tracking-wider mb-0.5">
                        WhatsApp
                      </span>
                      <span className="block text-[#0D1B2A] font-semibold text-sm group-hover:text-[#25D366] transition-colors">
                        Chat on WhatsApp
                      </span>
                      <span className="text-xs text-[#2C2C2C]/40">
                        +86 166 0572 8983
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E0D8]">
                    <div className="w-10 h-10 rounded-lg bg-[#1A5C38]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#1A5C38]" />
                    </div>
                    <div>
                      <span className="block text-xs text-[#2C2C2C]/50 uppercase tracking-wider mb-0.5">
                        Location
                      </span>
                      <span className="block text-[#0D1B2A] font-semibold text-sm">
                        Accra, Ghana
                      </span>
                      <span className="text-xs text-[#2C2C2C]/40">
                        West Africa
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E0D8]">
                    <div className="w-10 h-10 rounded-lg bg-[#1A5C38]/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-[#1A5C38]" />
                    </div>
                    <div>
                      <span className="block text-xs text-[#2C2C2C]/50 uppercase tracking-wider mb-0.5">
                        WeChat
                      </span>
                      <span className="block text-[#0D1B2A] font-semibold text-sm select-all">
                        wxid_9r0knke4jdbm22
                      </span>
                      <span className="text-xs text-[#2C2C2C]/40">
                        Scan or search WeChat ID
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#E5E0D8]">
                    <div className="w-10 h-10 rounded-lg bg-[#1A5C38]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#1A5C38]" />
                    </div>
                    <div>
                      <span className="block text-xs text-[#2C2C2C]/50 uppercase tracking-wider mb-0.5">
                        Response Time
                      </span>
                      <span className="block text-[#0D1B2A] font-semibold text-sm">
                        1–2 business days
                      </span>
                      <span className="text-xs text-[#2C2C2C]/40">
                        Ghana Time (GMT)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note about languages */}
              <div className="bg-[#0D1B2A] rounded-xl p-5">
                <p className="text-white/70 text-sm leading-relaxed">
                  <span className="text-[#E6A817] font-semibold">Chinese investors:</span>{" "}
                  Our team can communicate in Mandarin. Reach us on WeChat
                  (<span className="font-mono text-white/80 text-xs">wxid_9r0knke4jdbm22</span>)
                  or WhatsApp in your preferred language.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border border-[#E5E0D8] p-8">
                <h2 className="text-xl font-bold text-[#0D1B2A] mb-2 font-[family-name:var(--font-playfair)]">
                  Send us an enquiry
                </h2>
                <p className="text-[#2C2C2C]/55 text-sm mb-8">
                  Fill in the form below and a member of our team will respond
                  within 1–2 business days.
                </p>
                <Suspense fallback={<div className="py-16 text-center text-[#2C2C2C]/40">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
