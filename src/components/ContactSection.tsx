"use client";

import { useRef, useState } from "react";
import { CheckCircle, Phone, WarningCircle } from "@phosphor-icons/react";
import { company } from "@/lib/content";

type FieldName = "name" | "phone" | "email" | "project" | "message";
type Errors = Partial<Record<FieldName, string>>;

const projectOptions = [
  "Extension",
  "New build",
  "Loft conversion",
  "Roofing or slating",
  "Timber frame",
  "Windows",
  "Commercial job",
  "Something else",
];

function validate(name: FieldName, value: string): string | undefined {
  const v = value.trim();

  switch (name) {
    case "name":
      return v.length < 2 ? "Enter your name so we know who we are calling back." : undefined;
    case "phone":
      if (!v) return "We need a number to call you back on.";
      return /^[\d\s+()-]{9,}$/.test(v)
        ? undefined
        : "That does not look like a UK phone number. Check the digits.";
    case "email":
      if (!v) return undefined;
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
        ? undefined
        : "Add the missing part of the address, for example name@domain.co.uk.";
    case "project":
      return v ? undefined : "Pick the closest option so the right person calls you.";
    case "message":
      return v.length < 10
        ? "A sentence or two about the job helps us quote it properly."
        : undefined;
  }
}

const fieldClass =
  "w-full border border-line-strong bg-paper px-4 py-3.5 text-[0.9375rem] text-ink transition-colors duration-[--duration-fast] hover:border-ink/55 focus:border-brand focus:outline-none";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as FieldName;
    setErrors((prev) => ({ ...prev, [name]: validate(name, e.target.value) }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};

    for (const field of ["name", "phone", "email", "project", "message"] as FieldName[]) {
      const message = validate(field, String(data.get(field) ?? ""));
      if (message) next[field] = message;
    }

    setErrors(next);

    const firstBad = Object.keys(next)[0];
    if (firstBad) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstBad}"]`)
        ?.focus();
      return;
    }

    setStatus("sending");
    // Demo build: no mail transport wired up yet.
    window.setTimeout(() => setStatus("sent"), 900);
  };

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex min-h-[420px] flex-col justify-center border border-brand/45 bg-brand-wash p-8 md:p-10"
      >
        <CheckCircle size={36} weight="fill" className="text-brand" />
        <h3 className="mt-6 text-[clamp(1.5rem,3vw,2.15rem)]">
          Thanks, that has come through.
        </h3>
        <p className="mt-4 max-w-[44ch] text-[1rem] leading-relaxed text-mute">
          We will call you back on the number you left. If it is urgent, ring the
          mobile and you will get us direct.
        </p>
        <a
          href={company.mobileHref}
          className="mt-8 inline-flex w-fit items-center gap-2.5 bg-brand px-6 py-3.5 font-mono text-sm font-semibold text-paper transition-transform duration-[--duration-fast] hover:-translate-y-px active:scale-[0.98]"
        >
          <Phone size={17} weight="fill" />
          {company.mobile}
        </a>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid items-start gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          required
          error={errors.name}
          onBlur={handleBlur}
          autoComplete="name"
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          error={errors.phone}
          onBlur={handleBlur}
          autoComplete="tel"
          hint="The best number to reach you on."
        />
      </div>

      <Field
        label="Email"
        name="email"
        type="email"
        error={errors.email}
        onBlur={handleBlur}
        autoComplete="email"
        hint="Optional, if you would rather have it in writing."
      />

      <div className="grid gap-2">
        <label htmlFor="project" className="label text-ink">
          What is the job?{" "}
          <span className="text-brand" aria-hidden>
            *
          </span>
        </label>
        <select
          id="project"
          name="project"
          required
          defaultValue=""
          onBlur={handleBlur}
          aria-invalid={errors.project ? true : undefined}
          aria-describedby={errors.project ? "project-error" : undefined}
          className={`${fieldClass} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5 6 6.5l5-5' stroke='%235e594f' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" disabled>
            Choose one
          </option>
          {projectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.project ? <FieldError id="project-error" message={errors.project} /> : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="label text-ink">
          Tell us about it{" "}
          <span className="text-brand" aria-hidden>
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          onBlur={handleBlur}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className={`${fieldClass} resize-y`}
        />
        {errors.message ? (
          <FieldError id="message-error" message={errors.message} />
        ) : (
          <p id="message-hint" className="text-[0.8125rem] text-mute">
            Rough size, rough timing, and the address if you know it.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-2 inline-flex items-center justify-center gap-3 bg-brand px-7 py-4.5 font-mono text-[0.9375rem] font-semibold tracking-tight text-paper transition-transform duration-[--duration-fast] ease-[--ease-out-soft] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:translate-y-0 disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <span
              aria-hidden
              className="size-4 animate-spin rounded-full border-2 border-paper/40 border-t-paper"
            />
            Sending
          </>
        ) : (
          "Send it over"
        )}
      </button>

      <p className="text-[0.8125rem] leading-relaxed text-mute">
        Fields marked <span className="text-brand">*</span> are required. We only
        use your details to reply about the job.
      </p>
    </form>
  );
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p
      id={id}
      role="alert"
      className="flex items-start gap-2 text-[0.8125rem] leading-snug text-brand"
    >
      <WarningCircle size={15} weight="fill" className="mt-0.5 shrink-0" />
      {message}
    </p>
  );
}

type FieldProps = {
  label: string;
  name: FieldName;
  type?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  autoComplete?: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  hint,
  autoComplete,
  onBlur,
}: FieldProps) {
  const errorId = `${name}-error`;
  const hintId = `${name}-hint`;

  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="label text-ink">
        {label}
        {required ? (
          <>
            {" "}
            <span className="text-brand" aria-hidden>
              *
            </span>
          </>
        ) : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        onBlur={onBlur}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : hint ? hintId : undefined}
        className={fieldClass}
      />
      {error ? (
        <FieldError id={errorId} message={error} />
      ) : hint ? (
        <p id={hintId} className="text-[0.8125rem] text-mute">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
