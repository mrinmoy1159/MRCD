"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell section-glow py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="glass-panel relative z-10 overflow-hidden rounded-[2rem] p-8 sm:p-12"
      >
        <SectionHeading
          eyebrow="Contact"
          title="Bring your next catalog concept to life"
          description="Whether you need a sharp launch deck, a premium lookbook, or a complete product catalog refresh, let's shape a presentation that feels unmistakably high-end."
        />

        <div className="mt-10 grid gap-6 text-center md:grid-cols-3">
          <a
            href="mailto:mrinmoy.ecommerce@gmail.com"
            className="glass-panel glow-card rounded-2xl p-5"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Email</p>
            <p className="mt-3 text-text-primary/85 transition duration-300 hover:text-gold-soft">
              mrinmoy.ecommerce@gmail.com
            </p>
          </a>
          <a
            href="https://wa.me/916295046233"
            target="_blank"
            rel="noreferrer"
            className="glass-panel glow-card rounded-2xl p-5"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">WhatsApp</p>
            <p className="mt-3 text-text-primary/85 transition duration-300 hover:text-gold-soft">+91 62950 46233</p>
          </a>
          <div className="glass-panel rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Availability</p>
            <p className="mt-3 text-text-primary/85">Bookings Open Worldwide</p>
          </div>
        </div>

        <div className="mt-10 mx-auto max-w-4xl">
          <Link
            href="/contact"
            className="glass-panel glow-card group block rounded-[1.75rem] p-7 text-left sm:p-9"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Client Inquiry</p>
            <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h3 className="font-[var(--font-display)] text-3xl leading-tight text-white sm:text-4xl">
                  Open the full inquiry form
                </h3>
                <p className="mt-3 text-base leading-7 text-text-secondary">
                  Share your catalog, e-commerce, advertising, or branding brief on a dedicated page built for project inquiries.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black transition duration-300 group-hover:scale-[1.03] group-hover:bg-gold-soft group-hover:shadow-[0_0_28px_rgba(245,197,66,0.24)]">
                Start Inquiry <span className="transition duration-300 group-hover:translate-x-1">&gt;</span>
              </span>
            </div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
