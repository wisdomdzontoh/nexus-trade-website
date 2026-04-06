import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

function buildEmailHtml(data: ContactPayload): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; color: #2C2C2C; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: #0F3D24; padding: 24px; border-radius: 8px 8px 0 0;">
    <h2 style="color: #E6A817; margin: 0; font-size: 20px;">New Investor Enquiry</h2>
    <p style="color: #ffffff99; margin: 4px 0 0; font-size: 13px;">NexusTrade Ghana Website</p>
  </div>
  <div style="border: 1px solid #E5E0D8; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <tr><td style="padding: 8px 0; color: #888; width: 160px; vertical-align: top;">Full Name</td><td style="padding: 8px 0; font-weight: 600;">${data.fullName}</td></tr>
      <tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Country</td><td style="padding: 8px 0;">${data.country}</td></tr>
      <tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Organisation</td><td style="padding: 8px 0;">${data.organisation || "Not provided"}</td></tr>
      <tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #1A5C38;">${data.email}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Phone/WhatsApp</td><td style="padding: 8px 0;">${data.phone || "Not provided"}</td></tr>
      <tr style="border-top: 1px solid #E5E0D8;"><td style="padding: 8px 0; color: #888; vertical-align: top;">Sector</td><td style="padding: 8px 0; font-weight: 600; color: #1A5C38;">${data.sector}</td></tr>
      <tr><td style="padding: 8px 0; color: #888; vertical-align: top;">Opportunity</td><td style="padding: 8px 0;">${data.opportunity || "Not specified"}</td></tr>
    </table>
    <div style="margin-top: 16px; padding: 16px; background: #F8F5F0; border-radius: 6px; border-left: 4px solid #C8900A;">
      <p style="margin: 0 0 6px; color: #888; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
      <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
    </div>
    <p style="margin: 20px 0 0; font-size: 12px; color: #aaa;">Submitted via NexusTrade Ghana website contact form · Consent given: Yes</p>
  </div>
</body>
</html>
  `.trim();
}

function buildEmailText(data: ContactPayload): string {
  return `
NEW INVESTOR ENQUIRY — NexusTrade Ghana Website

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

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const toEmail = process.env.CONTACT_EMAIL || "nexustrade@gmail.com";
    const subject = `New Investor Enquiry: ${body.sector} — ${body.fullName} (${body.country})`;

    if (gmailUser && gmailAppPassword) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailAppPassword,
        },
      });

      await transporter.sendMail({
        from: `"NexusTrade Website" <${gmailUser}>`,
        to: toEmail,
        replyTo: body.email,
        subject,
        text: buildEmailText(body),
        html: buildEmailHtml(body),
      });
    } else {
      // Development fallback — log to console
      console.log("=== CONTACT FORM SUBMISSION (dev mode — set GMAIL_USER + GMAIL_APP_PASSWORD) ===");
      console.log(buildEmailText(body));
      console.log("=================================================================================");
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
