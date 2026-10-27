"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "./Icon";
import { BUDGET_OPTIONS, validateEnquiry, type EnquiryErrors, type EnquiryField } from "@/lib/validation";
import { serviceOptions } from "@/lib/content";
import { primaryPhone, waHref } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  service: "",
  budget: "",
  location: "",
  description: "",
  company: "",
};

type Props = {
  defaultService?: string;
  compact?: boolean;
};

const errorId = (field: EnquiryField) => `${field}-error`;

export function ContactForm({ defaultService = "", compact = false }: Props) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [touched, setTouched] = useState<Partial<Record<EnquiryField, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef<number>(Date.now());

  // Read ?service= / ?package= without a Suspense boundary, and prefill once.
  useEffect(() => {
    startedAt.current = Date.now();
    if (defaultService) {
      setValues((current) => ({ ...current, service: defaultService }));
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("service") ?? "";
    const chosenPackage = params.get("package") ?? "";
    setValues((current) => ({
      ...current,
      service: serviceOptions.includes(requested) ? requested : current.service,
      description: chosenPackage
        ? `I would like a quote for the ${chosenPackage}. My project is: `
        : current.description,
    }));
  }, [defaultService]);

  const update = (field: EnquiryField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (touched[field]) {
      const next = validateEnquiry({ ...values, [field]: value });
      setErrors((current) => ({ ...current, [field]: next.errors[field] }));
    }
  };

  const blur = (field: EnquiryField) => {
    setTouched((current) => ({ ...current, [field]: true }));
    const next = validateEnquiry(values);
    setErrors((current) => ({ ...current, [field]: next.errors[field] }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const check = validateEnquiry(values);
    setErrors(check.errors);
    setTouched({
      name: true,
      phone: true,
      email: true,
      service: true,
      budget: true,
      location: true,
      description: true,
    });

    if (!check.ok) {
      setStatus("error");
      setServerMessage("Please correct the highlighted fields and submit again.");
      const first = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          elapsedMs: Date.now() - startedAt.current,
        }),
      });

      const payload: { ok?: boolean; message?: string; errors?: EnquiryErrors } = await response
        .json()
        .catch(() => ({}));

      if (!response.ok || !payload.ok) {
        setStatus("error");
        setErrors(payload.errors ?? {});
        setServerMessage(
          payload.message ??
            "We could not submit your enquiry just now. Please try again, or WhatsApp us directly.",
        );
        return;
      }

      setStatus("success");
      setServerMessage(payload.message ?? "Thank you — your enquiry has been received.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setServerMessage(
        "Your enquiry did not reach us — this usually means the connection dropped. Please try again, or send the same details on WhatsApp.",
      );
    }
  };

  const whatsappFallback = waHref(
    primaryPhone,
    `Hello Building and Great Design, I would like a quotation.${
      values.name ? `\nName: ${values.name}` : ""
    }${values.phone ? `\nPhone: ${values.phone}` : ""}${
      values.service ? `\nService: ${values.service}` : ""
    }${values.budget ? `\nBudget: ${values.budget}` : ""}${
      values.location ? `\nProject location: ${values.location}` : ""
    }${values.description ? `\nDetails: ${values.description}` : ""}`,
  );

  if (status === "success") {
    return (
      <div className="card overflow-hidden p-7 text-center sm:p-10" role="status" aria-live="polite">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <Icon name="check" size={26} />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-navy-900 sm:text-2xl">
          Thank you — your enquiry is in.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy-500">
          {serverMessage} We will review your project details and get back to you on the
          phone number you provided, usually within one business day.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
          <a
            href={waHref(primaryPhone)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline btn-sm"
          >
            <Icon name="whatsapp" size={15} className="text-[#25D366]" />
            Continue on WhatsApp
          </a>
          <button
            type="button"
            className="btn-gold btn-sm"
            onClick={() => {
              setStatus("idle");
              setServerMessage("");
              startedAt.current = Date.now();
            }}
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      <div className="mb-6 flex items-start gap-3">
        <span className="icon-badge h-11 w-11 shrink-0 rounded-lg">
          <Icon name="document" size={20} />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold text-navy-900">Project enquiry form</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-navy-500">
            Tell us what you are planning. Fields marked <span aria-hidden="true">*</span>
            <span className="sr-only">with an asterisk</span> are required.
          </p>
        </div>
      </div>

      {(status === "error" || Object.keys(errors).length > 0) && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700"
        >
          <p className="font-semibold">
            {serverMessage || "Please correct the highlighted fields and submit again."}
          </p>
          <ul className="mt-1.5 list-inside list-disc space-y-0.5">
            {Object.entries(errors)
              .filter(([, message]) => Boolean(message))
              .slice(0, 5)
              .map(([field, message]) => (
                <li key={field}>{message}</li>
              ))}
          </ul>
          {status === "error" && (
            <a
              href={whatsappFallback}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 font-semibold text-red-800 underline underline-offset-2"
            >
              <Icon name="whatsapp" size={14} />
              Send these details on WhatsApp instead
            </a>
          )}
        </div>
      )}

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label className="field-label" htmlFor="name">
            Full name <span className="text-gold-700">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Amina Bello"
            className={`field ${errors.name ? "field-error" : ""}`}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            onBlur={() => blur("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? errorId("name") : undefined}
            required
          />
          {errors.name && (
            <p id={errorId("name")} className="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="phone">
            Phone number <span className="text-gold-700">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="e.g. 0803 123 4567"
            className={`field ${errors.phone ? "field-error" : ""}`}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            onBlur={() => blur("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? errorId("phone") : undefined}
            required
          />
          {errors.phone && (
            <p id={errorId("phone")} className="mt-1.5 text-xs text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="email">
            Email <span className="font-normal normal-case tracking-normal text-navy-300">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={`field ${errors.email ? "field-error" : ""}`}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            onBlur={() => blur("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? errorId("email") : undefined}
          />
          {errors.email && (
            <p id={errorId("email")} className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="service">
            Service required <span className="text-gold-700">*</span>
          </label>
          <select
            id="service"
            name="service"
            className={`field ${errors.service ? "field-error" : ""} ${
              values.service ? "" : "text-navy-300"
            }`}
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
            onBlur={() => blur("service")}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? errorId("service") : undefined}
            required
          >
            <option value="">Select a service…</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id={errorId("service")} className="mt-1.5 text-xs text-red-600">
              {errors.service}
            </p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="budget">
            Estimated budget
          </label>
          <select
            id="budget"
            name="budget"
            className={`field ${values.budget ? "" : "text-navy-300"}`}
            value={values.budget}
            onChange={(event) => update("budget", event.target.value)}
          >
            <option value="">Select a range (optional)…</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="field-label" htmlFor="location">
            Project location <span className="text-gold-700">*</span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="e.g. Jimeta, Yola"
            className={`field ${errors.location ? "field-error" : ""}`}
            value={values.location}
            onChange={(event) => update("location", event.target.value)}
            onBlur={() => blur("location")}
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? errorId("location") : undefined}
            required
          />
          {errors.location && (
            <p id={errorId("location")} className="mt-1.5 text-xs text-red-600">
              {errors.location}
            </p>
          )}
        </div>

        <div className={compact ? "" : "sm:col-span-2"}>
          <label className="field-label" htmlFor="description">
            Project description <span className="text-gold-700">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Tell us about the building, the plot, the number of rooms and any ideas you already have."
            className={`field resize-y ${errors.description ? "field-error" : ""}`}
            value={values.description}
            onChange={(event) => update("description", event.target.value)}
            onBlur={() => blur("description")}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? errorId("description") : undefined}
            required
          />
          {errors.description && (
            <p id={errorId("description")} className="mt-1.5 text-xs text-red-600">
              {errors.description}
            </p>
          )}
        </div>
      </div>

      {/* Honeypot: hidden from people, visible to bots */}
      <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => setValues((current) => ({ ...current, company: event.target.value }))}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gold mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-navy-900/30 border-t-navy-900"
              aria-hidden="true"
            />
            Sending enquiry…
          </>
        ) : (
          <>
            Send My Enquiry
            <Icon name="arrow" size={16} />
          </>
        )}
      </button>

      <p className="mt-3 text-center text-[11px] leading-relaxed text-navy-500">
        Your details are used only to respond to this enquiry. Prefer to talk?{" "}
        <a href={waHref(primaryPhone)} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy-700 underline underline-offset-2">
          WhatsApp us instead
        </a>
        .
      </p>
    </form>
  );
}
