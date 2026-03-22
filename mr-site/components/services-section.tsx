"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="section-shell section-glow py-20 sm:py-28">
      <SectionHeading
        eyebrow="Services"
        title="Premium design services for product-driven brands"
        description="From catalog systems to campaign visuals, each service is crafted to strengthen presentation, sharpen perception, and support stronger commercial performance."
      />
      <div className="relative z-10 mt-8 flex justify-center">
        <a
          href="https://mrinmoyecommerce.myportfolio.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-gold/50 bg-gold/10 px-6 py-3 text-sm uppercase tracking-[0.24em] text-gold-soft transition duration-300 hover:scale-[1.03] hover:bg-gold hover:text-black hover:shadow-[0_0_28px_rgba(245,197,66,0.24)]"
        >
          View Full Catalog Portfolio &gt;
        </a>
      </div>
      <div className="relative z-10 mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="glass-panel glow-card flex h-full flex-col rounded-[1.5rem] p-8"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-gold-soft/90">
              {service.count}
            </p>
            <div className="mt-5 space-y-3">
              <h3 className="font-[var(--font-display)] text-3xl leading-tight text-white">
                {service.title}
              </h3>
            </div>
            <p className="mt-5 text-sm leading-7 text-text-secondary">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
