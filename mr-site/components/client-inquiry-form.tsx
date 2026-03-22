"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

type ClientInquiryFormProps = {
  compact?: boolean;
};

type EmailJsError = {
  text?: string;
  message?: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: ""
};

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function ClientInquiryForm({ compact = false }: ClientInquiryFormProps) {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));

    setErrors((current) => ({
      ...current,
      [name]: ""
    }));
    setSuccessMessage("");
    setErrorMessage("");
  };

  const validateForm = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.projectType) {
      nextErrors.projectType = "Select a project type.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setSuccessMessage("");
      return;
    }

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS keys are missing in .env.local");
      }

      setIsSubmitting(true);
      setErrorMessage("");
      setSuccessMessage("");

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          project: formData.projectType,
          message: formData.message
        },
        publicKey
      );

      setSuccessMessage("Thanks for your inquiry. I will get back to you soon.");
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      const emailError = error as EmailJsError;
      const detail = emailError.text || emailError.message || "Please try again.";
      console.error("EmailJS send failed:", error);
      setErrorMessage(`Unable to send inquiry: ${detail}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`mx-auto w-full max-w-4xl rounded-[1.75rem] border border-white/10 bg-black/30 ${compact ? "p-6 sm:p-8" : "p-7 sm:p-10"}`}
    >
      <div className="mb-6 text-left">
        <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Client Inquiry</p>
        <h3 className="mt-3 font-[var(--font-display)] text-3xl text-white sm:text-4xl">
          Tell me about your project
        </h3>
      </div>

      <form className="grid gap-5 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-white/75">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-gold/50 focus:bg-black/60"
            placeholder="Your name"
          />
          {errors.name ? <p className="mt-2 text-sm text-rose-300">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-white/75">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-gold/50 focus:bg-black/60"
            placeholder="your@email.com"
          />
          {errors.email ? <p className="mt-2 text-sm text-rose-300">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm text-white/75">
            Phone (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-gold/50 focus:bg-black/60"
            placeholder="Phone number"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm text-white/75">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-gold/50 focus:bg-black/60"
          >
            <option value="" className="bg-black text-white">
              Select a project type
            </option>
            <option value="Catalog" className="bg-black text-white">
              Catalog
            </option>
            <option value="E-commerce" className="bg-black text-white">
              E-commerce
            </option>
            <option value="Ads" className="bg-black text-white">
              Ads
            </option>
            <option value="Branding" className="bg-black text-white">
              Branding
            </option>
          </select>
          {errors.projectType ? (
            <p className="mt-2 text-sm text-rose-300">{errors.projectType}</p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm text-white/75">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-[1.5rem] border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-gold/50 focus:bg-black/60"
            placeholder="Tell me about your catalog, campaign, or visual design goals."
          />
          {errors.message ? <p className="mt-2 text-sm text-rose-300">{errors.message}</p> : null}
        </div>

        <div className="flex flex-col items-start gap-3 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>
          <div className="space-y-2">
            {successMessage ? <p className="text-sm text-gold-soft">{successMessage}</p> : null}
            {errorMessage ? <p className="max-w-xl text-sm text-rose-300">{errorMessage}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
}
