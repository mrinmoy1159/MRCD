"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="section-shell relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-x-0 top-10 h-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute right-[12%] top-20 h-56 w-56 rounded-full bg-accent-purple/20 blur-3xl" />
      <div className="absolute left-[48%] top-28 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.58em] text-gold-soft sm:mb-6">
            Product & E-commerce Designer
          </p>
          <h1 className="max-w-4xl font-[var(--font-display)] text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            <span className="gold-gradient">Product Catalog</span> &amp; Advertising Designer Helping Brands Create Premium Product Visuals
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
            I help brands create high-end product catalogs, e-commerce visuals, and advertising designs that stand out in competitive markets.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#portfolio" className="premium-button">
              View Portfolio
            </a>
            <a
              href="#contact"
              className="glass-panel rounded-full px-7 py-3 text-center text-sm uppercase tracking-[0.25em] text-text-primary/80 transition duration-300 ease-out hover:scale-[1.03] hover:border-accent-purple/40 hover:bg-accent-purple/10 hover:text-gold-soft hover:shadow-[0_0_60px_rgba(139,92,246,0.25)]"
            >
              Let&apos;s Build Your Catalog
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-glow"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/12 via-transparent to-accent-purple/10" />
          <div className="relative space-y-5 rounded-[1.5rem] border border-white/10 bg-black/25 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.45em] text-gold-soft">
                  Signature Focus
                </p>
                <p className="mt-2 font-[var(--font-display)] text-2xl text-white">
                  Product-Led Visual Systems
                </p>
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-soft shadow-[0_0_22px_rgba(139,92,246,0.22)]"
              >
                MRCD
              </motion.div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Product Catalog Design", "30+ Projects"],
                ["E-commerce Visual Design", "40+ Projects"],
                ["Advertising Creatives", "10+ Projects"],
                ["Brand Visual Identity", "10+ Projects"]
              ].map(([label, count]) => (
                <motion.div
                  key={label}
                  whileHover={{ rotateX: 2, rotateY: -3, scale: 1.03 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition duration-300 hover:border-accent-purple/30 hover:bg-accent-purple/10 hover:shadow-[0_0_60px_rgba(139,92,246,0.16)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-gold-soft">{count}</p>
                  <p className="mt-3 text-sm leading-6 text-text-primary/80">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
