"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-slatebase/45 backdrop-blur-2xl"
    >
      <div className="section-shell flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-[var(--font-display)] text-2xl tracking-[0.24em] text-gold-soft transition duration-300 hover:text-white"
        >
          MRCD
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.25em] text-text-secondary transition duration-300 hover:text-gold-soft"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold-soft transition duration-300 hover:scale-[1.03] hover:bg-gold hover:text-black hover:shadow-[0_0_30px_rgba(245,197,66,0.28)]"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </motion.header>
  );
}
