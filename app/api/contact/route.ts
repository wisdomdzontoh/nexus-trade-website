import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  fullName: string;
  country: string;
  organisation?: string;
  email: string;
  phone?: string;
  sector: string;
  opportunity?: string;
  message: string;
  consent: boolean;
}

function validatePayload(data: unknown): data is ContactPayload {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.fullName === "string" && d.fullName.trim().length > 0 &&
    typeof d.country === "string" && d.country.trim().length > 0 &&
    typeof d.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.sector === "string" && d.sector.trim().length > 0 &&
    typeof d.message === "string" && d.message.trim().length > 0 &&
    d.consent === true
  );
}

function buildEmailBody(data: ContactPayload): string {
  return `
NEW INVESTOR ENQUIRY — NexusTrade Ghana Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ENQUIRER DETAILS
Full Name:       ${data.fullName}
Country:         ${data.country}
Organisation:    ${data.organisation || "Not provided"}
Email:           ${data.email}
Phone/WhatsApp:  ${data.phone || "Not provided"}

ENQUIRY DETAILS
Sector:          ${data.sector}
Opportunity:     ${data.opportunity || "Not specified"}

MESSAGE:
${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Consent given: Yes
Submitted via: NexusTrade Ghana website contact form
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);

    if (!validatePayload(body)) {
      return NextResponse.json(
        { success: false, message: "Invalid form data. Please check all required fields." },
        { status: 400 }
      );
    }

    const emailBody = buildEmailBody(body);

    // Send via Resend (if configured) or log for development
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "nexustrade@gmail.com";

    if (resendApiKey) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "NexusTrade Website <onboarding@resend.dev>",
          to: [toEmail],
          subject: `New Investor Enquiry: ${body.sector} — ${body.fullName} (${body.country})`,
          text: emailBody,
          reply_to: body.email,
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json().catch(() => ({}));
        console.error("Resend API error:", errorData);
        throw new Error("Email delivery failed");
      }
    } else {
      // Development fallback — log to console
      console.log("=== CONTACT FORM SUBMISSION (dev mode) ===");
      console.log(emailBody);
      console.log("===========================================");
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been received. We will be in touch within 1–2 business days.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "We were unable to process your enquiry at this time. Please contact us directly at nexustrade@gmail.com",
      },
      { status: 500 }
    );
  }
}
