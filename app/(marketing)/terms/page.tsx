import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "NexusTrade Ghana's terms and conditions of use for this website.",
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-[#0F3D24] pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
            Terms & Conditions
          </h1>
          <p className="text-white/50 text-sm mt-3">Last updated: 31 March 2026</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-[#2C2C2C]/70">
            {[
              {
                title: "1. Use of this website",
                content: "This website is operated by NexusTrade Ghana Limited and is provided for informational purposes only. By using this site, you agree to these terms. If you do not agree, please do not use this website.",
              },
              {
                title: "2. No investment advice",
                content: "Nothing on this website constitutes financial, investment, legal, or tax advice. All information is provided for general informational purposes only. You should seek independent professional advice before making any investment decision.",
              },
              {
                title: "3. No guarantees",
                content: "NexusTrade Ghana makes no representations or warranties regarding the accuracy, completeness, or suitability of the information on this website. Investment involves risk. Past performance is not indicative of future results.",
              },
              {
                title: "4. Intellectual property",
                content: "All content on this website — including text, images, logos, and design — is the property of NexusTrade Ghana Limited or its licensors and may not be reproduced without written permission.",
              },
              {
                title: "5. External links",
                content: "This site may contain links to external websites. NexusTrade is not responsible for the content or practices of any external sites.",
              },
              {
                title: "6. Limitation of liability",
                content: "To the maximum extent permitted by law, NexusTrade Ghana Limited shall not be liable for any direct, indirect, or consequential losses arising from use of or reliance on information on this website.",
              },
              {
                title: "7. Governing law",
                content: "These terms are governed by the laws of the Republic of Ghana. Any disputes shall be subject to the exclusive jurisdiction of the courts of Ghana.",
              },
              {
                title: "8. Changes to these terms",
                content: "We may update these terms from time to time. Continued use of the website after changes constitutes acceptance of the updated terms.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-[#0D1B2A] mb-3 font-[family-name:var(--font-playfair)]">
                  {section.title}
                </h2>
                <p className="text-base leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-[#E5E0D8]">
            <Link href="/" className="text-[#1A5C38] font-medium hover:underline text-sm">
              ← Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
