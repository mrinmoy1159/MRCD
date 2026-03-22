"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { AdminForm } from "@/components/admin-form";
import type { PortfolioItem } from "@/types/portfolio";

export function AdminPanel() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("/api/portfolio");
        setItems(response.data.data);
      } catch (error) {
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <main className="min-h-screen bg-luxury py-10">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <AdminForm onCreated={(item) => setItems((current) => [item, ...current])} />

        <section className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">
            Portfolio Library
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-4xl text-white">
            Current Entries
          </h2>

          {loading ? (
            <p className="mt-8 text-white/60">Loading portfolio items...</p>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <article
                  key={item._id || item.title}
                  className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/35"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">
                      {item.category}
                    </p>
                    <h3 className="mt-2 font-[var(--font-display)] text-2xl text-white">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
              {!items.length ? (
                <div className="rounded-[1.5rem] border border-dashed border-white/15 p-6 text-white/60">
                  No portfolio entries yet. Upload your first project from the admin form.
                </div>
              ) : null}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}


