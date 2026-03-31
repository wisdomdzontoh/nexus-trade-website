import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "NexusTrade Ghana's privacy policy — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-[#0F3D24] pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm mt-3">Last updated: 31 March 2026</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#2C2C2C]/70 space-y-8">
            {[
              {
                title: "1. Who we are",
                content: "NexusTrade Ghana Limited ('NexusTrade', 'we', 'us', 'our') is an investment facilitation company registered in Ghana. Our contact email is nexustrade@gmail.com. This Privacy Policy explains how we collect and use personal data submitted through this website.",
              },
              {
                title: "2. What data we collect",
                content: "We collect personal data only when you submit our contact form. This may include: your full name, email address, country of origin, phone number, organisation name, and the content of your message. We do not collect data from website visits beyond standard server logs.",
              },
              {
                title: "3. How we use your data",
                content: "We use the data you submit to respond to your investment enquiry, schedule follow-up communications, and provide the investment facilitation services you requested. We do not sell your data to third parties. We do not use your data for unsolicited marketing without your explicit consent.",
              },
              {
                title: "4. Data storage and security",
                content: "Enquiry data submitted through our contact form is transmitted to NexusTrade's email account. We take reasonable technical and organisational measures to protect data from unauthorised access or disclosure. We retain your data only as long as necessary to fulfil the purpose for which it was submitted.",
              },
              {
                title: "5. Your rights",
                content: "You have the right to request access to, correction of, or deletion of your personal data held by NexusTrade. To exercise these rights, please contact us at nexustrade@gmail.com. We will respond to all legitimate requests within 30 days.",
              },
              {
                title: "6. Cookies",
                content: "This website may use essential cookies for basic functionality. We do not use tracking or advertising cookies without your consent.",
              },
              {
                title: "7. Contact",
                content: "If you have questions about this privacy policy or how we handle your data, please contact us at nexustrade@gmail.com.",
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
