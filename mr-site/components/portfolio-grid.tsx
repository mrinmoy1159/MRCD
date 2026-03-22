"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

type PortfolioGridProps = {
  items: PortfolioItem[];
};

export function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <section id="portfolio" className="section-shell section-glow py-20 sm:py-28">
      <SectionHeading
        eyebrow="Portfolio"
        title="Curated visual work with a luxury-first edge"
        description="Every layout is built to make product imagery feel richer, cleaner, and more memorable across modern digital touchpoints. Some of my catalog work is featured here."
      />
      <div className="relative z-10 mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <motion.article
            key={`${item.id}-${index}`}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <Link
              href={`/portfolio/${item.id}`}
              className="glass-panel glow-card group block overflow-hidden rounded-[1.5rem]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[1.5rem]">
                <Image
                  src={item.image}
                  alt={item.alt || `${item.title} portfolio image`}
                  title={item.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slatebase via-slatebase/10 to-transparent" />
                <div className="absolute inset-y-0 left-[-40%] w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur-md transition duration-300 group-hover:left-[110%] group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">
                  {item.category}
                </p>
                <h3 className="mt-3 font-[var(--font-display)] text-3xl leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 inline-flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-text-secondary transition duration-300 group-hover:text-gold-soft">
                  View Project <span className="transition duration-300 group-hover:translate-x-1">&gt;</span>
                </p>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
