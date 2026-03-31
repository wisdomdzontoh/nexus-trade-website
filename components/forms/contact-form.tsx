"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const sectors = [
  "Agriculture",
  "Manufacturing",
  "Industrial Clusters",
  "General Enquiry",
];

const countries = [
  "China", "United States", "United Kingdom", "Germany", "France",
  "Canada", "Australia", "India", "Japan", "South Korea", "Singapore",
  "Netherlands", "Switzerland", "UAE", "Saudi Arabia", "Other",
];

interface FormData {
  fullName: string;
  country: string;
  organisation: string;
  email: string;
  phone: string;
  sector: string;
  opportunity: string;
  message: string;
  consent: boolean;
}

const initialState: FormData = {
  fullName: "",
  country: "",
  organisation: "",
  email: "",
  phone: "",
  sector: "",
  opportunity: "",
  message: "",
  consent: false,
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Pre-fill from URL params (e.g. from opportunity pages)
  useEffect(() => {
    const opportunity = searchParams.get("opportunity");
    const sector = searchParams.get("sector");
    if (opportunity) setForm((f) => ({ ...f, opportunity }));
    if (sector) setForm((f) => ({ ...f, sector }));
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.country.trim()) newErrors.country = "Country is required";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.sector) newErrors.sector = "Please select a sector of interest";
    if (!form.message.trim()) newErrors.message = "Please include a message";
    if (!form.consent) newErrors.consent = "You must consent to be contacted" as unknown as boolean;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "Submission failed");
      }
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const field = (
    name: keyof FormData,
    label: string,
    type: string = "text",
    required: boolean = false,
    placeholder: string = ""
  ) => (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[#2C2C2C] mb-1.5"
      >
        {label}
        {required && <span className="text-[#C8900A] ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={form[name] as string}
        onChange={(e) => {
          setForm((f) => ({ ...f, [name]: e.target.value }));
          if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
        }}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-lg border text-sm bg-white outline-none transition-colors ${
          errors[name]
            ? "border-red-400 focus:border-red-400"
            : "border-[#E5E0D8] focus:border-[#1A5C38]"
        }`}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name] as string}</p>
      )}
    </div>
  );

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-[#1A5C38]/10 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8 text-[#1A5C38]" />
        </div>
        <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 font-[family-name:var(--font-playfair)]">
          Thank you for your enquiry
        </h3>
        <p className="text-[#2C2C2C]/60 text-sm max-w-sm leading-relaxed mb-6">
          A member of our team will be in touch within 1–2 business days. In the
          meantime, feel free to reach out directly via email or WhatsApp.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-[#1A5C38] font-medium hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {field("fullName", "Full Name", "text", true, "Your full name")}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">
            Country of Origin <span className="text-[#C8900A]">*</span>
          </label>
          <select
            id="country"
            value={form.country}
            onChange={(e) => {
              setForm((f) => ({ ...f, country: e.target.value }));
              if (errors.country) setErrors((er) => ({ ...er, country: undefined }));
            }}
            className={`w-full px-4 py-3 rounded-lg border text-sm bg-white outline-none transition-colors appearance-none ${
              errors.country
                ? "border-red-400 focus:border-red-400"
                : "border-[#E5E0D8] focus:border-[#1A5C38]"
            }`}
          >
            <option value="">Select your country</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">{errors.country}</p>
          )}
        </div>
      </div>

      {field("organisation", "Organisation / Company Name", "text", false, "Your company or organisation (optional)")}

      <div className="grid sm:grid-cols-2 gap-5">
        {field("email", "Email Address", "email", true, "your@email.com")}
        {field("phone", "Phone / WhatsApp", "tel", false, "+1 234 567 8900")}
      </div>

      <div>
        <label htmlFor="sector" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">
          Sector of Interest <span className="text-[#C8900A]">*</span>
        </label>
        <select
          id="sector"
          value={form.sector}
          onChange={(e) => {
            setForm((f) => ({ ...f, sector: e.target.value }));
            if (errors.sector) setErrors((er) => ({ ...er, sector: undefined }));
          }}
          className={`w-full px-4 py-3 rounded-lg border text-sm bg-white outline-none transition-colors appearance-none ${
            errors.sector
              ? "border-red-400 focus:border-red-400"
              : "border-[#E5E0D8] focus:border-[#1A5C38]"
          }`}
        >
          <option value="">Select a sector</option>
          {sectors.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.sector && (
          <p className="text-red-500 text-xs mt-1">{errors.sector as string}</p>
        )}
      </div>

      {field("opportunity", "Specific Opportunity (if any)", "text", false, "Name of a specific opportunity you are enquiring about")}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-1.5">
          Message / Question <span className="text-[#C8900A]">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => {
            setForm((f) => ({ ...f, message: e.target.value }));
            if (errors.message) setErrors((er) => ({ ...er, message: undefined }));
          }}
          placeholder="Tell us about your investment goals, questions, or how we can help..."
          className={`w-full px-4 py-3 rounded-lg border text-sm bg-white outline-none transition-colors resize-none ${
            errors.message
              ? "border-red-400 focus:border-red-400"
              : "border-[#E5E0D8] focus:border-[#1A5C38]"
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message as string}</p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => {
              setForm((f) => ({ ...f, consent: e.target.checked }));
              if (errors.consent) setErrors((er) => ({ ...er, consent: undefined }));
            }}
            className="mt-0.5 w-4 h-4 accent-[#1A5C38] flex-shrink-0"
          />
          <span className="text-xs text-[#2C2C2C]/60 leading-relaxed">
            I agree to NexusTrade Ghana contacting me regarding my enquiry. I
            understand my details will be handled in accordance with the{" "}
            <a href="/privacy-policy" className="text-[#1A5C38] underline">
              Privacy Policy
            </a>.
            <span className="text-[#C8900A] ml-0.5">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-red-500 text-xs mt-1">{errors.consent as unknown as string}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-red-700 font-medium">Submission failed</p>
            <p className="text-xs text-red-600 mt-0.5">
              {errorMessage} Please try again or contact us directly at{" "}
              <a href="mailto:nexustrade@gmail.com" className="underline">
                nexustrade@gmail.com
              </a>.
            </p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2.5 bg-[#C8900A] hover:bg-[#E6A817] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded transition-colors text-base"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-xs text-[#2C2C2C]/40 text-center leading-relaxed">
        All enquiries are treated with strict confidentiality. We typically
        respond within 1–2 business days.
      </p>
    </form>
  );
}
