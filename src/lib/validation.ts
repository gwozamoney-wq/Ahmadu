/**
 * Shared enquiry validation used by both the browser form and the API route,
 * so client and server always apply identical rules.
 */

export type EnquiryField =
  | "name"
  | "phone"
  | "email"
  | "service"
  | "budget"
  | "location"
  | "description";

export type EnquiryInput = Partial<Record<EnquiryField, string>> & {
  /** Honeypot — must stay empty. */
  company?: string;
};

export type EnquiryErrors = Partial<Record<EnquiryField | "form", string>>;

export type ValidEnquiry = {
  name: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  location: string;
  description: string;
};

export const LIMITS = {
  name: 80,
  phone: 24,
  email: 120,
  service: 80,
  budget: 60,
  location: 120,
  description: 2000,
} as const;

/** Accepts 0905 502 1959, 09055021959, +2349055021959, 2349055021959 etc. */
export function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/[\s()\-.]/g, "").replace(/^\+/, "");
  if (!/^\d{10,15}$/.test(digits)) return null;
  if (digits.startsWith("0") && digits.length !== 11) return null;
  if (digits.startsWith("234") && digits.length !== 13) return null;
  return digits;
}

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, max) : "";

export function validateEnquiry(input: EnquiryInput): {
  ok: boolean;
  errors: EnquiryErrors;
  data?: ValidEnquiry;
} {
  const errors: EnquiryErrors = {};

  const name = clean(input.name, LIMITS.name);
  const phoneRaw = clean(input.phone, LIMITS.phone);
  const email = clean(input.email, LIMITS.email).toLowerCase();
  const service = clean(input.service, LIMITS.service);
  const budget = clean(input.budget, LIMITS.budget);
  const location = clean(input.location, LIMITS.location);
  const description =
    typeof input.description === "string"
      ? input.description.trim().slice(0, LIMITS.description)
      : "";

  if (name.length < 2) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.name) errors.name = "That name is too long.";

  if (!phoneRaw) errors.phone = "Please enter a phone number we can reach you on.";
  else if (!normalisePhone(phoneRaw))
    errors.phone = "Enter a valid phone number, for example 0803 123 4567.";

  if (email && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email))
    errors.email = "That email address does not look right.";

  if (!service) errors.service = "Please select the service you need.";

  if (!location) errors.location = "Please tell us where the project is located.";
  else if (location.length < 2) errors.location = "Please add a little more detail.";

  if (!description) errors.description = "Please describe your project.";
  else if (description.length < 20)
    errors.description = "Please add a few more details (at least 20 characters).";

  const ok = Object.keys(errors).length === 0;
  return {
    ok,
    errors,
    data: ok
      ? { name, phone: phoneRaw, email, service, budget, location, description }
      : undefined,
  };
}

export const BUDGET_OPTIONS = [
  "Still planning",
  "Under ₦5 million",
  "₦5 million – ₦15 million",
  "₦15 million – ₦40 million",
  "₦40 million and above",
  "Prefer to discuss",
] as const;
